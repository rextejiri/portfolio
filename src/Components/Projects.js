import React from "react";
import BestieLogo from './assets/images/BestieLogo.png';
import EthanCandleLogo from './assets/images/EthanCandleLogo.png';
import TwistLogo from './assets/images/TwistLogo.png';
import Dashboard from './assets/images/Dashboard.png';



export default function Projects() {
	return (
		<React.Fragment className='theProject'>
		<h1 className="projectFrame technology">Some projects I've Worked On:</h1>
			<div className="projects">
			<a href="https://github.com/rextejiri/testheroku">
				<div className="card">
            <div className="img-card">
            	<img src={EthanCandleLogo} className="project-img" alt="Dashboard" />
            </div>
						<h4>E-Commerce Website</h4>
        </div>
				</a>
				<a href="https://social-media-app-1.herokuapp.com/">
				<div className="card">
					<div className="img-card">
						<img src={BestieLogo} className="project-img" alt="Dashboard" />
						<h4>Social Media</h4>
					</div>
				</div>
				</a>
				<a href="https://github.com/rextejiri/dashboard-app">
				<div className="card">
					<div className="img-card">
						<img src={Dashboard} className="project-img" alt="Dashboard" />
					</div>
					<h4>Dashboard</h4>
				</div>
				</a>
				<a href="https://rextejiri.github.io/The-Twister/">
        <div className="card">
          <div className="img-card">
            <img src={TwistLogo} className="project-img" alt="Dashboard" />
          </div>
					<h4>Weather App</h4>
        </div>
				</a>
			</div>
		</React.Fragment>
	);
}
