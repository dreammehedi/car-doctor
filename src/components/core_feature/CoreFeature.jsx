import { FaTeamspeak } from "react-icons/fa";

function CoreFeature() {
  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="container">
        <div className="mt-[120px] flex flex-col justify-center items-center text-center md:max-w-2xl md:mx-auto">
          <h3 className="text-primary font-semibold text-xl">Core Features</h3>
          <h1 className="text-dark1 font-bold text-5xl">Why Choose Us</h1>
          <p className="text-dark3">
            {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
          </p>
        </div>

        <div className="my-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          <div className="rounded-md border border-dark6 p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center space-y-3 transition-all duration-300 ease-linear hover:bg-primary group">
            <FaTeamspeak
              className="text-4xl 
         border-dashed border-2 border-dark6"
            ></FaTeamspeak>
            <h1 className="text-dark2 font-bold text-[18px] group-hover:text-white transition-all duration-300 ease-linear">
              Expert Team
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFeature;
