import './TreatmentCard.css';
import mainLogo from './images/star.svg';

function TreatmentCard({ img, title, description, stars }) {
  return (
    <treatments-card>
      <card-head>
        {img && <img src={img} alt="section img" />}
        <h2>{title}</h2>
      </card-head>
      <p>{description}</p>
      {stars &&
        <star-container>
          <img src={mainLogo} className='star' alt="5 stars" />
          <img src={mainLogo} className='star' alt="5 stars" />
          <img src={mainLogo} className='star' alt="5 stars" />
          <img src={mainLogo} className='star' alt="5 stars" />
          <img src={mainLogo} className='star' alt="5 stars" />
        </star-container>
      }
    </treatments-card>
  );
}

export default TreatmentCard;
