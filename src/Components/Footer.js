import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {

const contacts = [
  {name: "LinkedIn", Icon: faLinkedin},
  {name: "GitHub", Icon: faGithub},
  {name: "Discord", Icon: faDiscord},
]

  return (
    <div className="footer">
     <hr />
    <div className="contact">
      <h4>©2021</h4>
      <div className="contactIcons">
        {
          contacts.map((contact, index)=> {
            return(
              <div className="contactIcon">
                <FontAwesomeIcon
                  icon={contact.Icon}
                  title={contact.name}
                  alt={contact.name}
                />
              </div>
            );
          })
        }
      </div>
    </div>
    </div>

  );

}
