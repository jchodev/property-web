import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Property } from "../../model/data/Property"; 

// mui icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party
//import SwipeableViews from 'react-swipeable-views';
//import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// react icons
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../../styles/CommonStyles';

interface CarouselCardProps {
  property: Property;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ property }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = property.images.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step); // handle swipe change
  };


  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>
      
      {property.images.length && (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {property.images.map((step, index) => {
            return (
              <SwiperSlide>
              <div key={property.id + step.imageUrl}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.imageUrl}
                  alt={step.imageUrl}
                ></Box>
              </div>
              </SwiperSlide>
            );
          })}

        </Swiper>
      )}  

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {property.title}</Typography>
          {/* <Typography component="h4"> {property.days}</Typography> */}
          <Typography component="h5"> {property.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {/* {property.isNew ? (
              <React.Fragment>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {property.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )} */}
              <React.Fragment>
                <Typography component="h5">??</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;