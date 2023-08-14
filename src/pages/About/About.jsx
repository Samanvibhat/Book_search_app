import React from 'react';
import "./About.css";
import aboutImg from "../../images/def.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Book Hub provides users to read books online through our Safe and Secure Website. What customers have to do is just to click on our site and then search for the books they wish to read. All varities of books are available and the best part is they are free. At Book Hub, we believe in making the world a better place: Book Hub improves people's lives by providing knowledge through hundreds of various books.Make sure to check out our site and share it with your loved ones.Happy reading!!!</p>
            <p className='fs-17'></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
