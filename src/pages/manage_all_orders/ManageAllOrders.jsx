import { CgClose } from "react-icons/cg";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import manageAllOrdersBg from "../../assets/manageallorders.png";
import Footer from "../../components/footer/Footer";
import SecondaryHeader from "../../components/header/SecondaryHeader";
import PagesBanner from "../../components/pages_banner/PagesBanner";

function ManageAllOrders() {
  return (
    <>
      <SecondaryHeader></SecondaryHeader>
      <PagesBanner
        bgBanner={manageAllOrdersBg}
        title="Manage All Users"
        pathName={"Home - Manage All Orders"}
      ></PagesBanner>
      <section>
        <div className="container my-8 md:my-10 lg:my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-2 flex gap-3 items-center">
              <button className="p-2 rounded-full bg-dark2 text-white transition-all duration-300 ease-linear hover:bg-primary">
                <CgClose className="text-xl"></CgClose>
              </button>
              <img
                className="rounded-md w-[150px] h-[150px] object-cover"
                src=""
                alt=""
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-dark2 text-xl">Martha Knit Top</h3>
                <p className="text-dark4">Color : Green </p>
                <p className="text-dark4">Size: S</p>
              </div>
            </div>

            <p className="text-dark2 text-xl font-semibold">$25.00</p>
            <p className="text-dark2 text-xl font-semibold">22-10-2022</p>
            <button className="px-4 py-2 rounded-md bg-transparent text-green-500 border border-green-500 transition-all duration-300 ease-linear hover:bg-green-500 hover:text-white font-bold text-xl mx-auto ">
              Approved
            </button>
          </div>
        </div>

        <div className="container flex justify-between items-center my-8">
          <button className="flex items-center gap-2 text-xl text-dark2 transition-all duration-300 ease-linear hover:text-primary">
            <HiOutlineArrowUturnLeft className="text-xl"></HiOutlineArrowUturnLeft>{" "}
            Continue Shoping
          </button>
          <button className="flex items-center gap-2 text-xl text-dark2 transition-all duration-300 ease-linear hover:text-primary">
            <MdDeleteForever className="text-xl"></MdDeleteForever> Clear
            Shopping Cart
          </button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ManageAllOrders;
