import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ProcessSection from './components/ProcessSection/ProcessSection';
import Testimonial from './components/Testimonial/Testimonial';
import BotanicalSection from './components/BotanicalSection/BotanicalSection';
import CompanySection from './components/CompanySection/CompanySection';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProcessSection />
      <Testimonial />
      <BotanicalSection />
      <CompanySection />
    
    </div>
  );
}

export default App;
