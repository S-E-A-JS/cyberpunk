/** @format */

import "./App.scss";
import "./app/fonts/font.css";
import Hero from "./app/components/hero/Hero";
import About from "./app/components/about/About";
// импорты компонентов страницы

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
