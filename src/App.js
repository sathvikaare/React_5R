// import logo from './logo.svg';
import './App.css';
import ArrayList from './components/arrayListBraces';
import { Card } from './components/card';
import { Form } from './components/form/form';
import { Table } from './components/table/table';
// import ArrayList from './components/arrayListBraces';
// import Mahi from './mahi';
// import Sath from './basic'clr

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <h1>helloworld</h1>
//                     Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   return(
//     <>
//     <Card/>
//     </>
//   );
// }
function App(){
  return(
    <>
    <ArrayList/>
    <Card></Card>
    <Form/>
    <Table/>
    </>
  );
}
export default App;
