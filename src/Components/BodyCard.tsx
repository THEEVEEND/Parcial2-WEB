import { Bodies } from "../Types/Bodietypes";

interface Bodiestype {
    body: Bodies; 
    onClick: () => void; 
  }
  
  const BodyCard: React.FC<Bodiestype> = ({ body, onClick }) => {
    return (
      <div className="contact-card">
            <h1>{body.name}</h1>
            <input type="range" value={body.density} />
            <input type="range" value={body.gravity} />
            <input type="range" value={body.mass.massValue} />
            <button onClick={onClick}>See mor</button>
      </div>
    );
  };
  
  export default BodyCard;