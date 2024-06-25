//custom cursor start
document.addEventListener("DOMContentLoaded", function () {
  const cursorElement = document.createElement("div");
  cursorElement.classList.add("custom-cursor");
  document.body.appendChild(cursorElement);
  document.body.classList.add("custom-cursor-active");

  document.addEventListener("mousemove", (e) => {
    cursorElement.setAttribute(
      "style",
      "top: " + e.pageY + "px; left:" + e.pageX + "px;"
    );
  });

  const customEventElements = document.querySelectorAll(
    '[data-cursor-event="hover"]'
  );

  customEventElements.forEach(function (customElement) {
    let currentCustomElement = customElement;
    customElement.addEventListener("mouseenter", (e) => {
      cursorElement.classList.add(
        currentCustomElement.getAttribute("data-event-class")
      );
    });
    customElement.addEventListener("mouseout", (e) => {
      cursorElement.classList.remove(
        currentCustomElement.getAttribute("data-event-class")
      );
    });
  });

  document.addEventListener("click", () => {
    cursorElement.classList.add("custom-cursor-click");

    setTimeout(() => {
      cursorElement.classList.remove("custom-cursor-click");
    }, 500);
  });
});
//custom cursor start

// nav scroll start
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});
// nav scroll end

// counter up start
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});
// counter up end

// testimonial start
$(document).ready(function () {
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass("active");
    targetElement.not(targetElement[i]).removeClass("active");
  });
  $(".testimonial .tabs li").click(function () {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass("active");
    targetElement.not($(this)).removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this)
      .text(i + 1)
      .prepend("0");
  });
});
// testimonial end

// swipper slider services-slider start
const swiperEl = document.querySelector("swiper-container");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@1.75": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    "@2.00": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

swiperEl.initialize();
// swipper slider services-slider end
