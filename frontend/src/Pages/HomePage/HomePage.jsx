import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="section1">
        <div className="sec1p left">
          <div className="title">
            About Leb
            <br /> Taxi Company
          </div>
          <div className="sec1text">
              Introducing our revolutionary taxi app service a seamless solution
              for your transportation needs. Effortlessly book rides, track in
              real-time, and enjoy secure payments within a user-friendly
              interface. Our professional drivers are dedicated to providing
              safe, efficient journeys. Say goodbye to traditional taxi hassles
              and welcome a smarter way to travel. Download now for a reliable
              and convenient ride experience tailored just for you.
            
          </div>
          <div>
            <button className="readmore">Read More</button>
          </div>
        </div>
        <div className="sec1p rigth">
          <div className="box"></div>
          <img
            className="car-image"
            src="../../assets/images/backpack.png"
            alt="Car Image"
          ></img>
        </div>
      </div>

      <div className="section2">
        <div className="title">
          Our Taxi <br />
          Section
        </div>
        <div className="sec2cards">

          <div className="sec2-card">
          <img className="sec2-card-img " src="../../assets/images/delivery-man.png"></img>
             <div className="sec2-card-title">Private Driver</div>
            <div className="sec2-card-text">local car taxi service</div>
            <div>
               <button className="sec2-card-buttom">Read More</button>
            </div>
          </div>

          <div className="sec2-card">
          <img className="sec2-card-img " src="../../assets/images/delivery-man.png"></img>
            <div className="sec2-card-title">Airport Transfer</div>
            <div className="sec2-card-text">From airport to your Home!</div>
            <div>
               <button className="sec2-card-buttom">Read More</button>
            </div>
          </div>

          <div className="sec2-card">
           <img className="sec2-card-img " src="../../assets/images/delivery-man.png"></img>
            <div className="sec2-card-title">Luggage Transfer</div>
            <div className="sec2-card-text">
              Luggage transportaion with <br />
              secure and safe!
            </div>
            <div>
              <button className="sec2-card-buttom">Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="title">
          Our <br />
          News
        </div>
        <div className="sec3cards">
          <div className="sec3card">
            <div className="img-container">
               
              <div className="sec3-card-img sec3-card-img1"></div> 
            </div>
            <div className="sec3-card-title">we solve!</div>
            <div className="sec3-card-text">
              "Frustrated with unpredictable waiting times and unreliable
              availability of traditional taxis." "Seeking a solution to
              eliminate the inconvenience of hailing cabs on busy streets."
            </div>
          </div>

          <div className="sec3card">
            <div className="img-container">
               
              <div className="sec3-card-img sec3-card-img2"></div> 
            </div>
            <div className="sec3-card-title">we achieve!</div>
            <div className="sec3-card-text">
              "Empowering commuters with instant, reliable rides." "Transforming
              travel into a hassle-free experience." "Prioritizing safety and
              efficiency in every journey."
            </div>
          </div>

          <div className="sec3card">
            <div className="img-container">
              {" "}
              <div className="sec3-card-img sec3-card-img3"></div>{" "}
            </div>
            <div className="sec3-card-title">You Gain!</div>
            <div className="sec3-card-text">
              "Instant rides for your immediate needs." "Cashless transactions
              for added convenience." "Real-time tracking ensures you're always
              in the know."
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="sec4-title">
            Why Choose <br />Us
        </div>
        <div className="sec4-blocks">
            <div className="sec4-block">
                
                <div className="block-img">
                    <div className="b4i b1"></div>
                </div>
                <div className="block-desciption">
                    <div className="block-title">Best Drivers</div>
                    <div className="block-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</div>
                </div>
            </div>
            <div className="sec4-block">
                
                <div className="block-img">
                    <div className="b4i b2"></div>
                </div>
                <div className="block-desciption">
                    <div className="block-title">Be Safe and Secure</div>
                    <div className="block-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</div>
                </div>
            </div>
            <div className="sec4-block">
                
                <div className="block-img">
                    <div className="b4i b3"></div>
                </div>
                <div className="block-desciption">
                    <div className="block-title">24x7 support</div>
                    <div className="block-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</div>
                </div>
            </div>
            
        </div>
        

      </div>
    </>
  );
};
export default HomePage;
