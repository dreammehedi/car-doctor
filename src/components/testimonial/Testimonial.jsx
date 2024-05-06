import { FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="container">
        <div className="mt-[120px] flex flex-col justify-center items-center text-center md:max-w-2xl md:mx-auto">
          <h3 className="text-primary font-semibold text-xl">Testimonial</h3>
          <h1 className="text-dark1 font-bold text-5xl">What Customer Says</h1>
          <p className="text-dark3">
            {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="rounded-md border border-dark6 p-4 md:p-6 lg:p-8 flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src=""
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="text-dark2 font-bold text-2xl">
                    Awlad Hossain
                  </h1>
                  <h3 className="text-dark3 text-xl font-semibold">
                    Businessman
                  </h3>
                </div>
              </div>
              <FaQuoteRight className="text-3xl text-primary/30"></FaQuoteRight>
            </div>
            <p className="text-dark3">
              {` There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.`}
            </p>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
