import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Carousel1 = () => {
  return (
    <div className="carousel">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        
      >
        {/* <div className="carousel-item"> */}
          <img src="https://images.bewakoof.com/uploads/grid/app/ik-1x1-new--1--1699607681.jpg" alt="Image1" />
        {/* </div> */}
        {/* <div className="carousel-item"> */}
          {/* <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-Joggers-1699357840.jpg" alt="Image2" /> */}
        {/* </div> */}
        {/* <div className="carousel-item"> */}
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-OversizedSweatshirts-common-1699594711.jpg" alt="Image3" />
        {/* </div> */}
        {/* <div className="carousel-item"> */}
          <img src="https://images.bewakoof.com/uploads/grid/app/Women-Short-Tops-1x1-Banner-1699634146.jpg" alt="Image4" />
        {/* </div> */}
        {/* <div className="carousel-item"> */}
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-KnitPerfection-sweater-common-1699625976.jpg" alt="Image5" />
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Carousel1;

