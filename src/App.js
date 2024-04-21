import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

import Description from './components/Discription';
import Discover from './components/Discover';
import Testimony from './components/Testimony';
import Booking from './components/Booking';
import AyurvedicApproach from './components/AyurvedicApproach';
import Review from './components/Review';
import WebReview, { WebDr } from './components/WebReview';
import Doctors from './components/Doctors';
import GetApp from './components/getApp';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Description />
      <Discover />
      <Testimony />
      <Booking />
      <AyurvedicApproach />
      <Review />
      <Doctors />
      <GetApp />
      <Footer />
    </div>
  );
}

export default App;
