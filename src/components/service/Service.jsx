function Service() {
  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="container">
        <div className="mt-[120px] flex flex-col justify-center items-center text-center md:max-w-2xl md:mx-auto">
          <h3 className="text-primary font-semibold text-xl">Service</h3>
          <h1 className="text-dark1 font-bold text-5xl">Our Service Area</h1>
          <p className="text-dark3">
            {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="rounded-md border border-dark6 p-4 md:p-6 lg:p-8 flex flex-col space-y-3">
            <img
              className="rounded-md w-full h-[220px] object-cover"
              src=""
              alt=""
            />
            <h1 className="text-dark2 font-bold text-2xl">Electrical System</h1>
            <h3 className="text-primary text-xl font-semibold">
              Price : $20.00
            </h3>
          </div>
        </div>

        <button className="bg-transparent text-primary rounded-md px-4 py-3 font-bold transition-all duration-300 ease-linear  border  hover:bg-primary hover:text-white flex justify-center items-center text-center border-primary mx-auto">
          More Services
        </button>
      </div>
    </section>
  );
}

export default Service;
