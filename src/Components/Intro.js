import React from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';




export default function Header() {
  const subtitle = "HI, I’M TEJIRI IBIHWIORI"
  const introMsg = "A dedicated developer with a flair for art and design, I craft delightful, intuitive, and human-centered experiences at scale. Combining meticulous attention to detail with a commitment to test-driven development and best practices, I transform complex challenges into elegant, enterprise-ready solutions."


  return (
    <div className="Intro">
      <h6 className="subtitle">{subtitle}</h6>
      <h1 className="introMsg">{introMsg}</h1>
      <div className="dropDown">
        <ExpandMore  fontSize="large" className="one" />
        <ExpandMore  fontSize="large" className="two" />
        <ExpandMore  fontSize="large" className="three" />
      </div>
    </div>
  );

}
