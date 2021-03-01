import React from "react";
import BestieLogo from './assets/images/BestieLogo.png';
import EthanCandleLogo from './assets/images/EthanCandleLogo.png';
import TwistLogo from './assets/images/TwistLogo.png';
import Dashboard from './assets/images/Dashboard.png';



export default function Projects() {
	return (
		<React.Fragment>
		<h1 className="projectFrame technology">Some projects I've Worked On:</h1>
			<div className="projects">
				<div className="card">
            <div className="img-card">
            	<img src={EthanCandleLogo} className="project-img" alt="Dashboard" />
            </div>
						<h4>E-Commerce Website</h4>
        </div>
        <div className="card">
          <div className="img-card">
          	<img src={BestieLogo} className="project-img" alt="Dashboard" />
						<h4>Social Media</h4>
          </div>
        </div>
				<div className="card">
					<div className="img-card">
						<img src={Dashboard} className="project-img" alt="Dashboard" />
					</div>
					<h4>Dashboard</h4>
				</div>
        <div className="card">
          <div className="img-card">
            <img src={TwistLogo} className="project-img" alt="Dashboard" />
          </div>
					<h4>Weather App</h4>
        </div>
			</div>
		</React.Fragment>
	);
}
