import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AmenitiesSlideshow = () => {
  const images = [
    "img/amenities-slideshow-1.png",
    "img/amenities-slideshow-3.png",
    "img/amenities-slideshow-4.png",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="amenities-section-slideshow">
      <Carousel
        centerMode
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        arrows={true}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass=""
        removeArrowOnDeviceType={["mobile"]}
        itemClass=""
      >
        <div>
          <img src={images[1]} />
        </div>
        <div>
          <img src={images[2]} />
        </div>
        <div>
          <img src={images[0]} />
        </div>
      </Carousel>
    </div>
  );
};

export default AmenitiesSlideshow;
