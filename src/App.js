import "./App.css";
import { Navbar, Hero, Service, Projects, Footer, Skill } from "./components/";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Skill />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
