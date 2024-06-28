import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AmenitiesSlideShowTwo = () => {
  const images = ["img/flora-1.jpg"];
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
    <>
      <Carousel
        centerMode={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass=""
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass=""
        slidesToSlide={1}
      >
        <div>
          <img
            src={images[0]}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          />
        </div>
      </Carousel>
    </>
  );
};

export default AmenitiesSlideShowTwo;
