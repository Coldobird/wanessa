import heroImg from './images/hero.jxl';
import heroWebp from './images/fallback/hero4.png';
import './Hero.css';

function Hero() {
  return (
    <hero-container className="section">
      <hero-picture>
        <picture>
          <source srcSet={heroImg} type="image/jxl" />
          <img src={heroWebp} className="hero-image" alt="Hero" />
        </picture>
      </hero-picture>
      <h1>Cuidar da mente é um ato de coragem. Vamos dar esse passo juntos?</h1>
      <p>🌿 Redução da ansiedade, estresse e sobrecarga emocional</p>
      <p>💬 Melhora na comunicação e nos relacionamentos</p>
      <p>✨ Mais autoconhecimento e autoestima</p>
      <button className='main-btn'>Agende uma sessão</button>
    </hero-container>
  );
}

export default Hero;
