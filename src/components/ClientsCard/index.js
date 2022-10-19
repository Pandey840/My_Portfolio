import Typography from "../Typography";

import "../ClientsCard/style.css";

const ClientsCard = (props) => {
  return (
    <div className="client-card">
      <img src={props.src} alt={props.alt} className="profile" />
      <div className="client-details bg-orange">
        <Typography type="H6" className="client-name">
          {props.name}
        </Typography>
        <Typography type="H7" className="client-domain">
          {props.domain}
        </Typography>
        <Typography type="H6" className="client-statement">
          {props.statement}
        </Typography>
      </div>
    </div>
  );
};

export default ClientsCard;
