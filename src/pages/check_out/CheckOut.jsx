import checkOutBg from "../../assets/addnewservice.png";
import PagesBanner from "../../components/pages_banner/PagesBanner";

function CheckOut() {
  return (
    <>
      <PagesBanner bgBanner={checkOutBg} title={"Check Out"}></PagesBanner>
      <div className="container flex justify-normal -mt-[44px]">
        <p
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
          className="text-xl font-semibold bg-primary text-white inline-block px-6 py-2 mx-auto"
        >
          Home/Checkout
        </p>
      </div>

      <section className="my-[50px] md:my-[70px] lg:my-[130px]">
        <div className="container bg-dark7 p-[50px] md:p-[80px] lg:p-[100px] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <input
            type="text"
            placeholder="Service Name"
            className="text-dark4 rounded-md px-4 py-2 outline-none border focus:border-primary"
          />
          <input
            type="text"
            placeholder="Service Price"
            className="text-dark4 rounded-md px-4 py-2 outline-none border focus:border-primary"
          />
          <input
            type="text"
            placeholder="Text here"
            className="text-dark4 rounded-md px-4 py-2 outline-none border focus:border-primary"
          />
          <input
            type="text"
            placeholder="Service Type"
            className="text-dark4 rounded-md px-4 py-2 outline-none border focus:border-primary"
          />
          <textarea
            name="description"
            rows={12}
            placeholder="Product Description"
            className="lg:col-span-2 text-dark4 rounded-md px-4 py-2 outline-none border focus:border-primary"
          />
          <input
            type="submit"
            value="Order Confirm"
            className="col-span-2 text-white rounded-md px-4 py-2 outline-none bg-primary transition-all duration-300 ease-linear hover:bg-primary/50 cursor-pointer text-xl "
          />
        </div>
      </section>
    </>
  );
}

export default CheckOut;
