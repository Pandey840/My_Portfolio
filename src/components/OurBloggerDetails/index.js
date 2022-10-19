import AppImage from "../AppImage";
import Typography from "../Typography";

import "../OurBloggerDetails/style.css";

const OurBloggerDetails = (props) => {
  return (
    <div className="ourBlogger-details">
      <div className="ourBlogger-title">
        <div className="ourBlogger-text">
          <Typography className="domain"> {props.domain} </Typography>

          <Typography className="blog"> {props.blog} </Typography>
        </div>

        <div className="design-image">
          <AppImage src={props.designImage} className="design-img" />
        </div>
      </div>

      <div className="blogger-profile">
        <div className="blogger-image">
          <AppImage src={props.profileImage} className="blogger-img" />
        </div>

        <div className="blogger-details">
          <Typography className="blogger-name">
            {" "}
            {props.bloggerName}{" "}
          </Typography>
          <Typography className="blogger-time"> {props.time} </Typography>
        </div>
      </div>
    </div>
  );
};

export default OurBloggerDetails;
