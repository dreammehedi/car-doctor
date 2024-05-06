// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import slider1 from "../../assets/images/banner/1.jpg";
import slider2 from "../../assets/images/banner/2.jpg";
import slider3 from "../../assets/images/banner/3.jpg";
function Banner() {
  return (
    <section className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="w-full h-[calc(100vh-111px)]"
      >
        <SwiperSlide
          style={{
            background: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%), url(${slider1}) no-repeat top`,
          }}
          className="!bg-cover rounded-md"
        >
          <div className="w-full h-full grid grid-cols-2 ">
            <div className="text-white flex flex-col justify-center space-y-4 p-10">
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border border-transparent hover:bg-transparent hover:border-primary">
                  Discover More
                </button>
                <button className="bg-transparent text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border  hover:bg-primary border-primary">
                  Latest Project
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%), url(${slider2}) no-repeat top`,
          }}
          className="!bg-cover rounded-md"
        >
          <div className="w-full h-full grid grid-cols-2 ">
            <div className="text-white flex flex-col justify-center space-y-4 p-10">
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border border-transparent hover:bg-transparent hover:border-primary">
                  Discover More
                </button>
                <button className="bg-transparent text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border  hover:bg-primary border-primary">
                  Latest Project
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%), url(${slider3}) no-repeat top`,
          }}
          className="!bg-cover rounded-md"
        >
          <div className="w-full h-full grid grid-cols-2 ">
            <div className="text-white flex flex-col justify-center space-y-4 p-10">
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border border-transparent hover:bg-transparent hover:border-primary">
                  Discover More
                </button>
                <button className="bg-transparent text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border  hover:bg-primary border-primary">
                  Latest Project
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;
