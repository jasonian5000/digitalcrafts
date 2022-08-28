import './App.css';
import {useState} from "react"
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';
import Ads from './Ads';

// hooks
// change state in functional components

function App() {
  // this is the syntax to create a useState hook
  // const [counter, setCounter] = useState(0)
  // const [mood, setMood] = useState("😻")
  
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className="container">
          <Menu />
          <Content />
          <Ads />
        </div>
        <Footer />
      </div>
      {/* <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(() => counter + 1)}>+</button>
      <button onClick={() => setCounter(() => counter - 1)}>-</button>
      <h1>How are you feeling today?</h1>
      <h1>{mood}</h1> */}
    </div>
  );
}

export default App;
