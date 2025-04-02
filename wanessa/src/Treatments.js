import mainLogo from './images/mainLogo.svg';
import TreatmentCard from "./TreatmentCard.js";

function Treatments() {
  return (
    <treatments-container className='section' id='sintomas'>
      <h1>Cuidar da mente é um ato de coragem. Vamos dar esse passo juntos?</h1>
      <TreatmentCard
        img={mainLogo}
        title="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <TreatmentCard
        img={mainLogo}
        title="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <TreatmentCard
        img={mainLogo}
        title="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <button className='main-btn'>Agende uma sessão</button>
    </treatments-container>
  );
}

export default Treatments;
