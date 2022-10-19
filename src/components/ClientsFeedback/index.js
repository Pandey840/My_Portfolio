import Typography from "../Typography";
import ClientsCard from "../ClientsCard";

import "../ClientsFeedback/style.css";

const clientData = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/Profile1.png`,
    name: "Justin Septimus",
    domain: "CEO,word yt",
    statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/Profile2.png`,
    name: "Ashlynn Gouse",
    domain: "Managing Director",
    statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ClientsFeedback = () => {
  return (
    <section className="clientsFeedback">
      <Typography className="clientsFeedback-text">Clients Feedback</Typography>
      <Typography className="clientsFeedback-title">
        Some <span className="text-orange">Great Words</span> From Our Clients
      </Typography>

      <div className="clients-profile">
        {clientData.map((data) => (
          <ClientsCard
            key={data.name}
            src={data.src}
            name={data.name}
            domain={data.domain}
            statement={data.statement}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsFeedback;
