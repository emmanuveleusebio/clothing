import { useState, useEffect } from "react";
import Header from "../components/header";
import "../styles/home.css";
import Catagories from "../components/catagory";

export default function HomePage() {


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <div className={`home ${scrolled ? "scrolled" : ""}`}>
      <Header />
      <div className="bubbleContainer">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}>
          {[...Array(5)].map((_, j) => (
            <span key={j}></span>
          ))}
        </div>
      ))}
    </div>
      <div className="landingSec">
        <h1 className="title">Your Trusted Creative Partner</h1>
        <h1 className="subHeading">
          We delever creative branding, web design and UI/UX solution to make
          the most impact.
        </h1>
        <button>Request a quote</button>

      </div>
      <div class="scrolling-text-container">
    <div class="scrolling-text">
        <p>Strategic Experiences / Results Driven Solutions / Business Value / Purpose</p>
        <p>Strategic Experiences / Results Driven Solutions / Business Value / Purpose</p>
    </div>
</div>
<img className="coverImg" src="/src/assets/coverimg.png" alt="coverimg.png" />

<Catagories />

    </div>
  );
}
