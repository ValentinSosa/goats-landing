import './App.css';
import { HeroSection } from './sections/Hero';
import { GoatNavbar } from './components/GoatNavbar';
// import { Stories } from './sections/Stories';
import { GoatFooter } from './components/GoatFooter';
// import { Contact } from './sections/Contact';
import { Services } from './sections/Services';
// import { About } from './sections/About';
// import { Tech } from './sections/Tech';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <GoatNavbar />
      <HeroSection />
      <Services />
      {/* <Tech /> */}
      {/* <Stories /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <GoatFooter />
    </div>
  );
}

export default App;