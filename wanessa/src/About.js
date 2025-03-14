import heroImg from './images/hero.jxl';
import heroWebp from './images/fallback/hero4.png';

function About() {
  return (
    <about-container className='section'>
      <picture>
        <source srcSet={heroImg} type="image/jxl" />
        <img src={heroWebp} className="hero-image" alt="Hero" />
      </picture>
      <h1>Wanessa Nardo</h1>
      <h2>Psicóloga</h2>
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
