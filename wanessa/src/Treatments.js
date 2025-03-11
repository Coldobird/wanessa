import TreatmentCard from "./TreatmentCard.js";

function Treatments() {
  return (
    <treatments-container className="section">
      <h1>Cuidar da mente é um ato de coragem. Vamos dar esse passo juntos?</h1>
      <TreatmentCard></TreatmentCard>
      <button>Agende uma sessão</button>
    </treatments-container>
  );
}

export default Treatments;
