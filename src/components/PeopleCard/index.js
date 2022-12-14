import SocialIcon from "../SocialIcon";

import "../PeopleCard/style.css";

const PeopleCard = (props) => {
  return (
    <div className="people-card">
      <div className="card-image">
        <img src={props.src} alt="Person Card" />
      </div>
      <h4 className="name text-black">{props.name}</h4>
      <p className="domain text-gray">{props.domain}</p>

      {props.showSocialIcon && <SocialIcon className="social-links" />}
    </div>
  );
};

export default PeopleCard;
