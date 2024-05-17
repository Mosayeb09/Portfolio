import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Nav from "./Component/Nav/Nav";
// import Navbar from "./Component/Navbar_/Navbar";
// import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  return (
    <div>
       <Nav></Nav>
       <Hero></Hero>
       <div>
        <About></About>
       </div>
    </div>
  );
};

export default App;