import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGem,faDatabase  } from '@fortawesome/free-solid-svg-icons'

import {faJsSquare, faNode,
   faReact, faSalesforce, faCss3,
    faHtml5, faSass, faGit, faNpm,
    faBootstrap, faSketch, faTrello, faWordpress, faFigma}
    from '@fortawesome/free-brands-svg-icons';



export default function Header() {
  const technologies = [
  		{ name: "JavaScript", icon: faJsSquare },
  		{ name: "Node", icon: faNode },
  		{ name: "React", icon: faReact },
      { name: "Salesforce", icon: faSalesforce },
      { name: "CSS", icon: faCss3 },
      { name: "HTML", icon: faHtml5 },
      { name: "SASS", icon: faSass },
      { name: "Git", icon: faGit },
      { name: "NPM", icon: faNpm },
      { name: "Sketch", icon: faSketch },
      { name: "Trello", icon: faTrello },
      { name: "Wordpress", icon: faWordpress },
      { name: "Ruby", icon: faGem },
      { name: "Database", icon: faDatabase },
      { name: "Figma", icon: faFigma },
      { name: "Bootstrap", icon: faBootstrap },
  	];

  return (
    <div className="tech">
      <Typography variant="h4">Technologies</Typography>
      {technologies.map((tech, index) => {
          return (
            <div className="icons">
              <FontAwesomeIcon
              icon={tech.icon}
              title={tech.name}

              alt={tech.name}/>
              <p className="iconName">
                {tech.name}
              </p>
            </div>
          );
        })}
    </div>
  );

}
