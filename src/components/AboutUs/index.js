import AppImage from '../AppImage';
import Typography from '../Typography';
import AppButton from '../AppButton';

import '../AboutUs/style.css';
import AboutUsIcon from '../AboutUsIcon';

const AboutUs = () => {

   return (
      <>
      <section className='aboutUs-section'>
         <div className="aboutUs-image">
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/aboutUs_image.png`} alt="About us image"
            className="aboutUs-poster-image"/>
         </div>

         <div className="aboutUs-text">
            <Typography type="H4" className="aboutUs">About Us</Typography>
            
            <Typography type="H2" className="aboutUs-title">
               We Are <span className="text-orange">
                  Making Ideas Better
                  </span>
                  &nbsp;For Everyone
            </Typography>

            <Typography type='H4' className='aboutUs-content'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean
               <br></br>
               <br></br>
               Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
            </Typography>

            <AppButton className='aboutUs-button'>Contact Us</AppButton>

         </div>

      </section>

      <AboutUsIcon className="aboutUs-icon"></AboutUsIcon>
      </>
   );
}

export default AboutUs;