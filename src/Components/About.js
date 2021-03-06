import React from 'react';
import HeadShot from './assets/images/Circlehead.png';

export default function About() {
  const subtitle = "About Me"
  const aboutMe = "I live and work near Dallas, Tx. At my current job which is a company started by myself and some friends from school, I develop mostly custom websites that you can't get from a template. I also freelance when I can. My place in the world seems to be at the intersection of creativity and logic. My process  is iterative; I approach each problem as a learning experience and in my spare time I produce music, write songs or play soccer with my friends and family, I also love kayaking in the Summer and I love fries."


  return (
    <div className="about">
      <div className="text">
        <h6 className="subtitle sub">{subtitle}</h6>
        <p className="aboutMe">{aboutMe}</p>
      </div>
      <img src={HeadShot} alt=""  className="headshot"/>
    </div>
  );

}
