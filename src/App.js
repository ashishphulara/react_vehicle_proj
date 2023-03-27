import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css';

import Lists from "./Components/Lists/Lists"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lists/>}/>
      </Routes>
    </Router>
  );
}

export default App;
