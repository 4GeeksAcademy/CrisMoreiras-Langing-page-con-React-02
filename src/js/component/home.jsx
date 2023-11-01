import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar/>
				<div className="container">
					<Jumbotron/>
					<div className="row row-cols-1 row-cols-md-4 g-3">
						<div className="col">
							<Card cardTitle="My Card 01" image="https://picsum.photos/id/237/500/325"/>
						</div>
						<div className="col">
							<Card cardTitle="My Card 02" image="https://picsum.photos/id/238/500/325"/>
						</div>
						<div className="col">
							<Card cardTitle="My Card 03" image="https://picsum.photos/id/239/500/325"/>
						</div>
						<div className="col">
							<Card cardTitle="My Card 04" image="https://picsum.photos/id/236/500/325"/>
						</div>	
					</div>	
				</div>
			<Footer/>
		</>
	);
};

export default Home;
