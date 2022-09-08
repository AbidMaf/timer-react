import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import FunctionComponents from './Components/FunctionComponents';
import ClassComponents from './Components/ClassComponents';

function App() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, [date])

  

  return (
    <div className="App">
      <h1>Realtime Clock</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }
//   render() {
//     return (
//       <div className="app">
//         <h1>Realtime Clock</h1>
//         <hr />
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     )
//   }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // }
// }


export default App;

