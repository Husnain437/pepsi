import { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ViewPepsi from "../public/Model/ViewPepsi";
import logo from "./assets/pepsi.png";
import leaf from "./assets/leaf.png";
import Page from "./componet/Page";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#shutter",
      { y: "0%" },
      {
        y: "100%",
        delay: 0.5,
        duration: 1,
        ease: "none",
        onComplete: () => {
          const shutterElement = document.getElementById("shutter");
          if (shutterElement) {
            shutterElement.style.display = "none";
          }
        },
      }
    );
    gsap.fromTo(
      "#leaf1",
      { scale: 0 },
      {
        scale: 1,
        x: "100%",
        y: 400,
        delay: 1.5,
        duration: 2,
        rotate: 180,
      }
    );
    gsap.fromTo(
      "#leaf2",
      { scale: 0 },
      {
        scale: 1,
        x: "500%",
        y: 500,
        delay: 1.5,
        duration: 2,
        rotate: 180,
      }
    );
    gsap.fromTo(
      "#leaf3",
      { scale: 0 },
      {
        scale: 1,
        x: "500%",
        y: -400,
        delay: 1.5,
        duration: 1.5,
        rotate: 90,
      }
    );
    gsap.fromTo(
      "#leaf4",
      { scale: 0 },
      {
        scale: 1,
        x: -900,
        y: -400,
        delay: 1.5,
        duration: 2,
        rotate: 100,
      }
    );
    gsap.fromTo(
      "#leaf5",
      { scale: 0 },
      {
        scale: 1,
        y: -500,
        delay: 1.5,
        duration: 2.5,
        rotate: 120,
      }
    );
    gsap.fromTo(
      "#leaf6",
      { scale: 0 },
      {
        scale: 1,
        y: 500,
        delay: 2,
        duration: 2.5,
        rotate: 120,
      }
    );
    gsap.fromTo(
      "#leaf7",
      { scale: 0 },
      {
        scale: 1,
        y: 200,
        x:0,
        delay: 2,
        duration: 2.5,
        rotate: 120,
        overflow:"hidden",
      }
    );
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="shutter" id="shutter">
          <div className="shutter-logo">
            <img className="logo-img" src={logo} />
          </div>
        </div>
        <div className="main-content">
          <div className="pepsi">
            <ViewPepsi />
          </div>
        </div>
        <div className="all-leafs">
          <img className="leaf1" id="leaf1" src={leaf} alt="leaf" />
          <img className="leaf2" id="leaf2" src={leaf} alt="leaf" />
          <img className="leaf3" id="leaf3" src={leaf} alt="leaf" />
          <img className="leaf4" id="leaf4" src={leaf} alt="leaf" />
          <img className="leaf4" id="leaf4" src={leaf} alt="leaf" />
          <img className="leaf5" id="leaf5" src={leaf} alt="leaf" />
          <img className="leaf6" id="leaf6" src={leaf} alt="leaf" />
          <img className="leaf7" id="leaf7" src={leaf} alt="leaf" />

        </div>
        
      </div>
      <Page/>
      
    </div>
  );
}

export default App;
