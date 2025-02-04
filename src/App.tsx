import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainView from './pages/main/MainView';
import { ApiProvider } from './providers/apiProvider';

// function App2() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

function App() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainView/>}/>
        </Route>
      </Routes>
    </ApiProvider>
  );
}


export default App;
