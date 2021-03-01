import React from "react";
import BestieLogo from './assets/images/BestieLogo.png';
import EthanCandleLogo from './assets/images/EthanCandleLogo.png';
import TwistLogo from './assets/images/TwistLogo.png';
import Dashboard from './assets/images/Dashboard.png';



export default function Projects() {
	return (
		<React.Fragment>
			<div className="projects">
      <h2>Some projects I've Worked On:</h2>
				<div className="card">
            <div className="img-card">
              <h4>E-Commerce Website</h4>
            	<img className="project-img" alt="Dashboard" />
            </div>
            <p></p>
        </div>
        <div className="card">
          <div className="img-card">
            <h4>Bestie Social Media</h4>
          	<img className="project-img" alt="Dashboard" />
          </div>
            <p></p>
        </div>
        <div className="card">
          <div className="img-card">
            <h4>Weather App</h4>
            <img className="project-img" alt="Dashboard" />
          </div>
            <p></p>
        </div>
        <div className="card">
          <div className="img-card">
            <h4>Dashboard</h4>
            <img className="project-img" alt="Dashboard" />
          </div>
            <p></p>
        </div>
			</div>
		</React.Fragment>
	);
}
