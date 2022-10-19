import '../OurExperienceData/style.css';

import Typography from '../Typography';

const OurExperienceData = () => {
  return (
    <div className='ourExperience-data'>
        <div className='ourExperience-all-data'>
            
            <Typography className="ourExperience-number-data">250+</Typography>

            <Typography type='H3' className="ourExperience-data-text">Global Customer</Typography>
        </div>

        <div className='ourExperience-all-data'>
            
            <Typography className="ourExperience-number-data">156+</Typography>

            <Typography type='H3' className="ourExperience-data-text">Project Completed</Typography>
        </div>

        <div className='ourExperience-all-data'>
            
            <Typography className="ourExperience-number-data">50+</Typography>

            <Typography type='H3' className="ourExperience-data-text">Team Member</Typography>
        </div>

        <div className='ourExperience-all-data'>

            <Typography className="ourExperience-number-data">15+</Typography>
            
            <Typography type='H3' className="ourExperience-data-text">Our Company</Typography>
        </div>

      
    </div>
  );
};

export default OurExperienceData;