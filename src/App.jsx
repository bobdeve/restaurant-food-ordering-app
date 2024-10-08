import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch

import { Home } from "./components/Home";
import { Success } from "./components/Success";
import { CartContextProvider } from "./storage/CartContext";
import { UserProgressContextProvider } from "./storage/UserProgressContext";
import { Failed } from './components/Failed';


function App() {
  return (
    
        <Router>
          <Routes> {/* Use Routes in place of Switch */}
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failed" element={<Failed />} />
            {/* Add other routes here as needed */}
          </Routes>
        </Router>
     
  );
}

export default App;
