import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Nav from "./Component/Nav/Nav";
import Portfolio from "./Component/Portfolio/Portfolio";
// import Navbar from "./Component/Navbar_/Navbar";
// import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  return (
    <div>
       <Nav></Nav>
       <Hero></Hero>
       <div>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
       </div>
    </div>
  );
};

export default App;