import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const InteriorsSlideshow = () => {
  const images = [
    "img/aria-1.png",
    "img/aria-2.png",
    "img/aria-3.png",
    "img/aria-4.png",
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
    <>
      <Carousel
        centerMode
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        autoPlaySpeed={1000}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding"
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
        <div>
          <img src={images[3]} />
        </div>
      </Carousel>
      <div className="pt-5 flex gap-10 flex-col xl:flex-row">
        <p className="basis-2/3 text-th_green text-center xl:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          enim inventore doloribus. Incidunt, fuga neque. Deleniti similique
          quam laborum nisi numquam recusandae corporis, nulla veniam asperiores
          quo eum tempore amet.
        </p>
        <div className="basis-1/3 flex justify-center xl:justify-end">
          <button
            className="w-fit bg-transparent border border-th_brown
       text-th_brown hover:bg-th_lightbrown py-3 lg:py-3 px-9 
       lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer text-center"
          >
            Dowload Feature
          </button>
        </div>
      </div>
    </>
  );
};

export default InteriorsSlideshow;
