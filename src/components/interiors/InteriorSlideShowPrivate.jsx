import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const InteriorsSlideshowPrivate = () => {
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
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding"
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
      <div className="pt-5 flex gap-10 flex-col xl:flex-row">
        <p className="basis-2/3 text-th_ivory text-center xl:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Delectusfsdfsdfsdf enim inventore doloribus. Incidunt, fuga neque.
          Deleniti similique quam laborum nisi numquam recusandae corporis,
          nulla veniam asperiores quo eum tempore amet.
        </p>
        <div className="basis-1/3 flex justify-center xl:justify-end">
          <button
            className="w-fit bg-transparent border border-th_ivory
       text-th_ivory hover:bg-th_lightbrown py-3 lg:py-3 px-9 
       lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer text-center"
          >
            Dowload Feature
          </button>
        </div>
      </div>
    </>
  );
};

export default InteriorsSlideshowPrivate;
