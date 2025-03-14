import mainLogo from './images/mainLogo.svg';
import './TreatmentCard.css';


function TreatmentCard(img, title, description) {
  return (
    <treatments-card>
      <card-head>
        <img src={mainLogo} alt="section img" />
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
      </card-head>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </treatments-card>
  );
}

export default TreatmentCard;
