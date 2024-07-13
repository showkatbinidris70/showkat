import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";
import { RxAvatar } from "react-icons/rx";

const steps = [
  {
    id: '0',
    message: 'Hey!',

    // This calls the next id
    // i.e. id 1 in this case
    trigger: '1',
  }, {
    id: '1',

    // This message appears in
    // the bot chat bubble
    message: 'Please write your username',
    trigger: '2'
  }, {
    id: '2',

    // Here we want the user
    // to enter input
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " hi {previousValue}, how can I help you?",
    trigger: 4
  }, {
    id: '4',
    options: [

      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },

    ],
    end: true
  }
];

// Creating our own theme
const theme = {
  // background: '#7c75f4',
  // headerBgColor: '#197B22',
  // headerFontSize: '20px',
  // botBubbleColor: '#0F3789',
  // headerFontColor: 'white',
  // botFontColor: 'white',
  // userBubbleColor: '#FF5733',
  // userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "",
  floating: true,
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <div theme={theme}>
        <ChatBot
          headerTitle="Chat Bot"
          steps={steps}
          {...config}

        />
      </div>
    </div>
  );
}

export default App;
