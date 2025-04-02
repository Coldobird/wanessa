import heroImg from './images/hero.jxl';
import aboutImg from './images/about.webp';
import './About.css';

function About() {
  return (
    <about-container className='section' id='sobre-mim'>
      <picture>
        <source srcSet={heroImg} type="image/jxl" />
        <img src={aboutImg} className="about-image" alt="Hero" />
      </picture>
      <title-container>
      <h1>Wanessa Nardo</h1>
      <h2>Psicóloga</h2>
      </title-container>
      <p>- Lorem ipsum dolor sit amet</p>
      <p>- Lorem ipsum dolor sit amet</p>
      <p>- Lorem ipsum dolor sit amet</p>
      <p>- Lorem ipsum dolor sit amet</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <button className='main-btn'>Agende uma sessão</button>
    </about-container>
  );
}

export default About;
