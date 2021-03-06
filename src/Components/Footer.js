import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {

const contacts = [
  {name: "LinkedIn", Icon: faLinkedin, url: "https://www.linkedin.com/in/tejiri-ibihwiori/"},
  {name: "GitHub", Icon: faGithub, url: "https://github.com/rextejiri"},
  {name: "Discord", Icon: faDiscord, url: "https://discord.com/channels/@me"},
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
              <a href={contact.url}>
              <div className="contactIcon">
                <FontAwesomeIcon
                  icon={contact.Icon}
                  title={contact.name}
                  alt={contact.name}
                />
              </div>
              </a>
            );
          })
        }
      </div>
    </div>
    </div>

  );

}
