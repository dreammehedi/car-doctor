import aboutUsParts from "../../assets/images/about_us/parts.jpg";
import aboutUsImage from "../../assets/images/about_us/person.jpg";
function AboutUs() {
  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-20">
        <div className="relative">
          <img
            className="w-full h-[480px] object-cover"
            src={aboutUsImage}
            alt=""
          />
          <img
            className="absolute -right-10 top-1/2  rounded-md w-[330px] h-[335px] bg-white p-2 object-cover"
            src={aboutUsParts}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-3  items-start">
          <h3 className="text-primary font-semibold text-xl">About Us</h3>
          <h1 className="text-dark1 font-bold text-5xl">
            We are qualified & of experience in this field
          </h1>
          <p className="text-dark3">
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.`}
          </p>
          <p className="text-dark3">
            {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
          </p>
          <button className="bg-primary text-white rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  hover:bg-primary/50">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
