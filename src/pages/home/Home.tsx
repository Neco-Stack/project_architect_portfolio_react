import "./Home.css"
import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import Main from "../../components/main/Main";

const Home = () => {
    return (
        <div>         
    <Header />
    <Hero />
    <About />
    <Main />
    <Projects />
    <Contact />
    <Footer />
        </div>
      );
}
 
export default Home;