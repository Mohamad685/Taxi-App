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
						interface. Our professional drivers are dedicated to providing safe,
						efficient journeys. Say goodbye to traditional taxi hassles and
						welcome a smarter way to travel. Download now for a reliable and
						convenient ride experience tailored just for you.
					</div>
					<div>
						<button className="readmore">Read More</button>
					</div>
				</div>
				<div className="sec1p rigth">
					<div className="box"></div>
					<img
						className="car-image"
						src="../../../src/assets/images/about-img.jpg"
						alt="Car Image"></img>
				</div>
			</div>

			<div className="section2">
				<div className="title">
					Our Taxi <br />
					Section
				</div>
				<div className="sec2cards">
					<div className="sec2-card">
						<div>
							<img
								className="sec2-card-img "
								src="../../../src/assets/images/delivery-man.jpg"></img>
						</div>
						<p className="sec2-card-title">Private Driver</p>
						<p className="sec2-card-text">local car taxi service</p>
						<div>
							<button className="readmore sec-2-button">Read More</button>
						</div>
					</div>

					<div className="sec2-card">
						<div>
							<img
								src="../../../src/assets/images/airplane.jpg"
								className="sec2-card-img"></img>
						</div>
						<p className="sec2-card-title">Airport Transfer</p>
						<p className="sec2-card-text">From airport to your Home!</p>
						<div>
							<button className="readmore sec-2-button">Read More</button>
						</div>
					</div>

					<div className="sec2-card">
						<div>
							<img
								className="sec2-card-img"
								src="../../../src/assets/images/backpack.jpg"
								alt="pic1"></img>
						</div>
						<p className="sec2-card-title">Luggage Transfer</p>
						<p className="sec2-card-text">Luggage transportation</p>
						<div>
							<button className="readmore sec-2-button">Read More</button>
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
				<div className="title sec4-title">Why Choose Us</div>
				<div className="sec4-blocks">
					<div className="block-title">Best Drivers</div>
					<div className="block-text">
          Our drivers are highly skilled and experienced, 
          ensuring you receive the best and safest transportation service.
					</div>

					<div className="block-title">Be Safe and Secure</div>
					<div className="block-text">
          Your safety and security are our top priorities. 
          We follow strict protocols to provide a secure travel experience.
					</div>

					<div className="block-title">24x7 support</div>
					<div className="block-text">
          We offer round-the-clock support to address any concerns or queries you may have, 
          ensuring a seamless journey.
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
