import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import can from "../assets/can.png";
import banner from "../assets/banner.jpg";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#p1",
        start: "25% center",
        end: "bottom center",
        scrub: true,
      },
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#bn",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.fromTo(
      "#can",
      { width: "35%" },
      {
        top: "160%",
        left: "15%",
        rotate: 300,
      }
    );
    tl2.to("#can", {
      top: "228%",
      left: "92%",
      width: "14%",
    });
  }, []);

  return (
    <>
      <div className="page" id="p1">
        <h1 className="title"> Pepsi</h1>
        <div className="can-div">
          <img className="can" src={can} alt="can" id="can" />
        </div>
        <div className="about">
          <h1 className="about-title">About Us</h1>
          <p className="details">
            One of the most iconic marketing campaigns in Pepsi’s history is the
            "Pepsi Challenge," launched in the 1970s. This blind taste test
            invited consumers to compare Pepsi and Coca-Cola, with many
            participants reportedly preferring Pepsi’s sweeter taste. This
            campaign not only boosted sales but also cemented Pepsi’s reputation
            as a formidable competitor in the cola wars.
          </p>
        </div>
      </div>
      <div className="banner-container" id="bn">
        <img className="banner" src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Page;
