import "./App.css";
import {
  Navbar,
  Hero,
  Service,
  Projects,
  Footer,
  Skill,
  Contact,
  About,
} from "./components/";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
