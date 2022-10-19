import IconButton from "../IconButton";

import "../SocialIcon/style.css";

const SocialIcon = (props) => {
  return (
    <div className={props.className}>
      <IconButton
        className="img"
        src={`${process.env.PUBLIC_URL}/assets/icons/facebook-fill.svg`}
      />

      <IconButton
        className="img"
        src={`${process.env.PUBLIC_URL}/assets/icons/instagram-fill.svg`}
      />

      <IconButton
        className="img"
        src={`${process.env.PUBLIC_URL}/assets/icons/twitter-fill.svg`}
      />

      <IconButton
        className="img"
        src={`${process.env.PUBLIC_URL}/assets/icons/skype-fill.svg`}
      />
    </div>
  );
};

export default SocialIcon;
