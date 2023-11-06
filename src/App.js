import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/login.js";
import Header from "./components/header.js";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
