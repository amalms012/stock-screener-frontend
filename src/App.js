import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/loginpage/LoginPage";
import QuotesLoad from "./components/quotesload/QuotesLoad";

import HomePage from './pages/home/HomePage';
import Strategies from './pages/strategies-page/Strategies';
import SwingTrade from './pages/swingtrades/SwingTrade';
import Loading from './components/Loading/Loading';
import PinkPanther from './pages/pinkpanther/PinkPanther';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Loading/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/load" element={<QuotesLoad/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/strategies" element={<Strategies/>} />
      <Route path="/swingtrades" element={<SwingTrade/>} />
      <Route path="/pinkpanther" element={<PinkPanther/>} />

      




    </Routes>
  </Router>
  );
}

export default App;
