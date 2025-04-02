import TreatmentCard from "./TreatmentCard";
import './SocialProof.css';

function SocialProof() {
  return (
    <social-proof-container className='section' id='depoimentos'>
      <h1>A galera que achou massa!</h1>
      <carousel-container >
        <TreatmentCard
          title="Pessoa Pessoenta"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          stars={true}
        />
        <TreatmentCard
          title="Outra Pessoa"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          stars={true}
        />
        <TreatmentCard
          title="Juninho Jonas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          stars={true}
        />
      </carousel-container>
    </social-proof-container>
  );
}

export default SocialProof;
