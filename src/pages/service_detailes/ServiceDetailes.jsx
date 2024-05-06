import { FaArrowRight, FaFile } from "react-icons/fa";
import serviceDetailesBg from "../../assets/addnewservice.png";
import videoPoster from "../../assets/videoposter.png";
import Logo from "../../components/header/Logo";
import PagesBanner from "../../components/pages_banner/PagesBanner";

function ServiceDetailes() {
  return (
    <>
      <PagesBanner
        bgBanner={serviceDetailesBg}
        title={"Service Detailes"}
      ></PagesBanner>
      <div className="container flex justify-normal -mt-[44px]">
        <p
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
          className="text-xl font-semibold bg-primary text-white inline-block px-6 py-2 mx-auto"
        >
          Home/Service Detailes
        </p>
      </div>

      <section className="my-[50px] md:my-[70px] lg:my-[130px]">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <img
                className="w-full max-h-[400px] object-cover"
                src=""
                alt=""
              />
              <h2 className="text-dark1 font-bold text-3xl lg:text-4xl">
                Unique Car Engine Service
              </h2>
              <p className="text-dark3">
                {`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.`}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-dark7 p-10 rounded-lg border-t-2 border-primary">
                <h3 className="text-dark2 font-bold text-xl">
                  Instant Car Services
                </h3>
                <p className="text-dark3">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="bg-dark7 p-10 rounded-lg border-t-2 border-primary">
                <h3 className="text-dark2 font-bold text-xl">
                  Instant Car Services
                </h3>
                <p className="text-dark3">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="bg-dark7 p-10 rounded-lg border-t-2 border-primary">
                <h3 className="text-dark2 font-bold text-xl">
                  Instant Car Services
                </h3>
                <p className="text-dark3">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
              <div className="bg-dark7 p-10 rounded-lg border-t-2 border-primary">
                <h3 className="text-dark2 font-bold text-xl">
                  Instant Car Services
                </h3>
                <p className="text-dark3">
                  It uses a dictionary of over 200 Latin words, combined with a
                  model sentence structures.
                </p>
              </div>
            </div>
            <p className="text-dark3">
              {` There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.`}
            </p>

            <div className="space-y-6">
              <h2 className="text-dark1 font-bold text-3xl lg:text-4xl">
                3 Simple Steps to Process
              </h2>
              <p className="text-dark3">
                {`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.`}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="rounded-lg p-8 border-t-2 border-dark6 flex flex-col justify-center items-center text-center space-y-3">
                  <div className="bg-primary/10 flex justify-center items-center text-center rounded-full p-3">
                    <h4 className="text-white bg-primary rounded-full flex justify-center items-center text-center text-xl w-[50px] h-[50px] font-bold">
                      01
                    </h4>
                  </div>
                  <h1 className="font-bold text-xl text-dark1">Step One</h1>
                  <p className="text-dark3 text-base md:text-[18px]">
                    It uses a dictionary of over 200 .
                  </p>
                </div>
                <div className="rounded-lg p-8 border-t-2 border-dark6 flex flex-col justify-center items-center text-center space-y-3">
                  <div className="bg-primary/10 flex justify-center items-center text-center rounded-full p-3">
                    <h4 className="text-white bg-primary rounded-full flex justify-center items-center text-center text-xl w-[50px] h-[50px] font-bold">
                      01
                    </h4>
                  </div>
                  <h1 className="font-bold text-xl text-dark1">Step One</h1>
                  <p className="text-dark3 text-base md:text-[18px]">
                    It uses a dictionary of over 200 .
                  </p>
                </div>
                <div className="rounded-lg p-8 border-t-2 border-dark6 flex flex-col justify-center items-center text-center space-y-3">
                  <div className="bg-primary/10 flex justify-center items-center text-center rounded-full p-3">
                    <h4 className="text-white bg-primary rounded-full flex justify-center items-center text-center text-xl w-[50px] h-[50px] font-bold">
                      01
                    </h4>
                  </div>
                  <h1 className="font-bold text-xl text-dark1">Step One</h1>
                  <p className="text-dark3 text-base md:text-[18px]">
                    It uses a dictionary of over 200 .
                  </p>
                </div>
              </div>

              <video className="w-full h-[400px]" controls poster={videoPoster}>
                <source src="" />
              </video>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-dark7 p-10">
              <h1 className="font-bold text-dark1 text-2xl">Services</h1>
              <div className="flex flex-col space-y-3 mt-8">
                <button className="bg-white text-dark1 hover:bg-primary rounded-md px-4 py-3 hover:text-white transition-all duration-300 ease-linear flex justify-between items-center font-semibold group">
                  Full Car Repair{" "}
                  <FaArrowRight className="text-primary transition-all duration-300 ease-linear  group-hover:text-white"></FaArrowRight>
                </button>
                <button className="bg-white text-dark1 hover:bg-primary rounded-md px-4 py-3 hover:text-white transition-all duration-300 ease-linear flex justify-between items-center font-semibold group">
                  Full Car Repair{" "}
                  <FaArrowRight className="text-primary transition-all duration-300 ease-linear  group-hover:text-white"></FaArrowRight>
                </button>
                <button className="bg-white text-dark1 hover:bg-primary rounded-md px-4 py-3 hover:text-white transition-all duration-300 ease-linear flex justify-between items-center font-semibold group">
                  Full Car Repair{" "}
                  <FaArrowRight className="text-primary transition-all duration-300 ease-linear  group-hover:text-white"></FaArrowRight>
                </button>
                <button className="bg-white text-dark1 hover:bg-primary rounded-md px-4 py-3 hover:text-white transition-all duration-300 ease-linear flex justify-between items-center font-semibold group">
                  Full Car Repair{" "}
                  <FaArrowRight className="text-primary transition-all duration-300 ease-linear  group-hover:text-white"></FaArrowRight>
                </button>
              </div>
            </div>

            <div className="bg-dark1 text-white p-10 space-y-3">
              <h1 className="font-bold text-dark7 text-2xl">Download</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaFile></FaFile>
                  <div className="flex flex-col">
                    <h3
                      className="text-white font-semibold
                    "
                    >
                      Our Brochure
                    </h3>
                    <p className="text-dark4">Download</p>
                  </div>
                </div>
                <div className="bg-primary p-3 rounded-md">
                  <FaArrowRight className="text-white"></FaArrowRight>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaFile></FaFile>
                  <div className="flex flex-col">
                    <h3
                      className="text-white font-semibold
                    "
                    >
                      Our Brochure
                    </h3>
                    <p className="text-dark4">Download</p>
                  </div>
                </div>
                <div className="bg-primary p-3 rounded-md">
                  <FaArrowRight className="text-white"></FaArrowRight>
                </div>
              </div>
            </div>

            <div className="bg-dark1 text-white p-10 space-y-3 flex flex-col justify-center items-center text-center">
              <Logo></Logo>
              <p className="text-xl text-white lg:px-5">
                Need Help? We Are Here To Help You
              </p>
              <div className="bg-white rounded-md p-5 text-center">
                <h2 className="font-bold text-primary text-xl flex items-center gap-2 justify-center">
                  Car Doctor
                  <span className="text-dark1">Special</span>
                </h2>
                <h4 className="font-bold text-dark4 text-sm flex items-center gap-2 justify-center">
                  Save up to
                  <span className="text-primary">60% off</span>
                </h4>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-dark1 text-2xl">Price $250.00</h1>
              <button className="bg-primary text-white px-4 py-2 rounded-md mt-4 w-full font-semibold transition-all duration-300 ease-linear hover:bg-primary/50">
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailes;
