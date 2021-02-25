import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';




export default function Header() {
  const subtitle = "HI, I’M TEJIRI IBIHWIORI"
  const introMsg = "A very hard working, meticulous developer with an art & design background. I create delightful and intuitive human-centered experiences at scale."


  return (
    <div className="Intro">
      <Typography className="subtitle">{subtitle}</Typography>
      <Typography className="introMsg">{introMsg}</Typography>
      <div className="dropDown">
        <ExpandMore />
        <ExpandMore />
        <ExpandMore />
        <ExpandMore />
      </div>
    </div>
  );

}
