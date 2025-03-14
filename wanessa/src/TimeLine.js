import TreatmentCard from "./TreatmentCard.js";

function TimeLine() {
  return (
    <time-line-container className='section'>
      <h1>Cuidar da mente é um ato de coragem. Vamos dar esse passo juntos?</h1>
      <TreatmentCard
        title="1. Começo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <TreatmentCard
        title="2. Passo 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <TreatmentCard
        title="3. Passo 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <TreatmentCard
        title="4. Ultimo Passo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <button className='main-btn'>Agende uma sessão</button>
    </time-line-container>
  );
}

export default TimeLine;
