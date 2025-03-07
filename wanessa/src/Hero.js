import heroImg from './images/hero.jxl';
import heroWebp from './images/fallback/hero.png';
import './Hero.css';

function Hero() {
  return (
    <hero-container className="section">
      <picture>
        <source srcSet={heroImg} type="image/jxl" />
        <img src={heroWebp} className="hero-image" alt="Hero" />
      </picture>
      <h1>Venha virar normal</h1>
      <p>Seja uma pessoa mais legl</p>
      <p>Seja uma pessoa mais legl</p>
      <p>Seja uma pessoa mais legl</p>
      <button>Agende uma sessão</button>
    </hero-container>
  );
}

export default Hero;
