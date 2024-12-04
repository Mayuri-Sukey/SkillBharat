// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Home from './Componenets/Home';
// import Form from './Componenets/Form';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/form" element={<Form />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Componenets/Home';
import Form from './Componenets/Form';


function App() {

  function Success() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-green-500">Payment Successful!</h1>
      </div>
    );
  }
  
  function Failure() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Payment Failed!</h1>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
      </Routes>
    </Router>
  );
}

export default App;

