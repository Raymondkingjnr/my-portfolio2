import "./App.css";
import {
  Navbar,
  Hero,
  Service,
  Projects,
  Footer,
  Skill,
  Contact,
} from "./components/";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
