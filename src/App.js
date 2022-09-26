import ReactStaticComponents from "./components/ReactStaticComponents"
import Reviews from "./components/Reviews";
import SentimentAnalysis from "./components/SentimentAnalysis";
import AverageRating from "./components/AverageRating";

import './App.css';


function App() {
  return (
    <div className='fullbox'>
    <div className='App'>
      <ReactStaticComponents />
      <Reviews reviewNum={1281} />
      <SentimentAnalysis />
      <AverageRating />
    </div>
    </div>
  );
}
export default App;
