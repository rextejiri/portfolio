import React from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';




export default function Header() {
  const subtitle = "HI, I’M TEJIRI IBIHWIORI"
  const introMsg = "A very hard working, meticulous developer with an art & design background. I create delightful and intuitive human-centered experiences at scale through innovation and product strategy."


  return (
    <div className="Intro">
      <h6 className="subtitle">{subtitle}</h6>
      <h1 className="introMsg">{introMsg}</h1>
      <div className="dropDown">
        <ExpandMore />
        <ExpandMore />
        <ExpandMore />
        <ExpandMore />
      </div>
    </div>
  );

}
