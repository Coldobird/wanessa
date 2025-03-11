import mainLogo from './images/mainLogo.svg';

function TreatmentCard(img, title, description) {
  return (
    <treatments-card className="section">
      <img src={mainLogo} className="hero-image" alt="Hero" />
      <h1>Cuidar da mente é um ato de coragem. Vamos dar esse passo juntos?</h1>
      <button>Agende uma sessão</button>
    </treatments-card>
  );
}

export default TreatmentCard;
