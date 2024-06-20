import React from 'react';
import HeadShot from './assets/images/Circlehead.png';

export default function About() {
  const subtitle = "About Me"
  const aboutMe = "Based near Dallas, TX, I am a developer thriving at the intersection of creativity and logic. At my current job, a venture I co-founded with friends from school, I specialize in developing custom websites that go beyond standard templates. I also freelance when I can, bringing unique, tailor-made solutions to a variety of clients. I have had the privilege of working with organizations ranked among the Fortune 100 and Fortune 500 companies, enhancing my expertise and exposure to large-scale, impactful projects. My passion for the Salesforce platform and its integration capabilities has driven me to master its technologies, delivering seamless, innovative solutions that align with enterprise needs. My development process is iterative, approaching each problem as a valuable learning experience. In my spare time, I enjoy producing music, writing songs, and playing soccer with friends and family. Kayaking in the summer is a favorite pastime, and I have an undeniable love for fries. Balancing work and family is crucial to me, and I continuously seek to grow both professionally and personally. My journey is fueled by a love for learning and the joy of crafting experiences that blend creativity with technical precision."

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
