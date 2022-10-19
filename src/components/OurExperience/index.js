import Typography from '../Typography';
import AppButton from '../AppButton';

import '../OurExperience/style.css';
import OurExperienceData from '../OurExperienceData';


const OurExperience = () => {

   return (
      <>
      <section className='OurExperience-section'>
         <div className="OurExperience-text">
            <Typography type="H4" className="OurExperience">Our Experience</Typography>
            
            <Typography type="H2" className="OurExperience-title">
               We Have Completed<br></br>
               <span className="text-orange">
                  150+ Projects
                  </span>
                  <br></br>Succesfully
            </Typography>

            <Typography type='H4' className='OurExperience-content'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
               
               <br></br>
               <br></br>

               Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
            </Typography>

            <AppButton className='OurExperience-button'>Contact Us</AppButton>

         </div>

         <OurExperienceData className='OurExperience-data'></OurExperienceData>
      </section>
      </>
   );
}

export default OurExperience;