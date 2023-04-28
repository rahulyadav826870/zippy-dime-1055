import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
};

const MySlider = () => {
  const sliderRef = React.useRef();

  const handlePreviousClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
      <Box bg="red" h="200px" />
        <Box bg="blue" h="200px" />
        <Box bg="green" h="200px" />
        <Box bg="orange" h="200px" />
        <Box bg="purple" h="200px" />
        <Box bg="teal" h="200px" />
      </Slider>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="previous"
        onClick={handlePreviousClick}
        position="absolute"
        // top="30%"
        alignContent={"center"}
        textAlign={"center"}
        left="4"
        zIndex="docked"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="next"
        onClick={handleNextClick}
        position="absolute"
        // top="30%"
        alignContent={"center"}

        textAlign={"center"}

        right="4"
        zIndex="docked"
      />
    </>
  );
};

export default MySlider;
