import Typography from "../Typography";
import OurBloggerDetails from "../OurBloggerDetails";

import "../OurBlog/style.css";

const bloggerData = [
  {
    domain: "Graphic Design",

    blog: "35 Stellar Graphic Design Blogs to Keep You Educated and Inspired",

    designImage: `${process.env.PUBLIC_URL}/assets/images/ourBlogImage1.png`,

    profileImage: `${process.env.PUBLIC_URL}/assets/images/ourBlogProfile1.png`,

    bloggerName: "Cristofer Westervelt",

    time: "January 25, 2021 5 min Read",
  },

  {
    domain: "Technology",

    blog: "Ridiculously powerful 2021 iPad Pro may drop this month",

    designImage: `${process.env.PUBLIC_URL}/assets/images/ourBlogImage2.png`,

    profileImage: `${process.env.PUBLIC_URL}/assets/images/ourBlogprofile2.png`,

    bloggerName: "Haylie Mango",

    time: "January 25, 2021 5 min Read",
  },
];

const OurBlog = () => {
  return (
    <div className="our-blog">
      <div className="ourblog-text">
        <Typography type="H4" className="blog-title">
          Our Blog
        </Typography>

        <Typography type="H2" className="blog-content">
          Our Latest <span className="text-orange">Blogs Will Keep</span>{" "}
          Everyone Updated
        </Typography>
      </div>

      <div className="blog-author">
        {bloggerData.map((data, i) => (
          <OurBloggerDetails
            designImage={data.designImage}
            profileImage={data.profileImage}
            domain={data.domain}
            blog={data.blog}
            bloggerName={data.bloggerName}
            time={data.time}
            key={data.bloggerName}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
