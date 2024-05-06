import SecondaryHeader from "../../components/header/SecondaryHeader";

import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";

function SignUp() {
  return (
    <>
      <SecondaryHeader></SecondaryHeader>
      <section className="w-full my-8 md:my-10 lg:my-12 flex justify-center items-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4 md:gap-6 lg:gap-8">
          <img
            className="w-full md:max-w-[450px] h-auto md:max-h-[500px] object-cover border-2 border-gray-100 border-dashed p-3"
            src={loginImage}
            alt="loginImage"
          />
          <div className="p-8 md:p-10 lg:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <form className="space-y-6">
              {/* name */}
              <div className="flex flex-col space-y-3">
                <label
                  className="font-semibold text-[18px] text-dark2 "
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border border-dark6 text-dark2 rounded-md px-4 py-3 outline-none focus:border-primary/50 group"
                />
              </div>
              {/* email */}
              <div className="flex flex-col space-y-3">
                <label
                  className="font-semibold text-[18px] text-dark2 "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border border-dark6 text-dark2 rounded-md px-4 py-3 outline-none focus:border-primary/50 group"
                />
              </div>

              {/* confirm password */}
              <div className="flex flex-col space-y-3">
                <label
                  className="font-semibold text-[18px] text-dark2 "
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="border border-dark6 text-dark2 rounded-md px-4 py-3 outline-none focus:border-primary/50 group"
                />
              </div>

              {/* sign in */}
              <input
                type="submit"
                value={"Sign Up"}
                className="text-white bg-primary rounded-md px-4 py-3 font-semibold text-xl w-full transition-all duration-300 ease-linear hover:bg-primary/50 hover:text-dark2 cursor-pointer"
              />
            </form>

            <div className="mt-6 flex flex-col justify-center items-center space-y-6">
              {/* sign in or */}
              <p className="text-[18px] text-dark2">Or Sign In with</p>
              {/* social login */}
              <div className="flex justify-center items-center gap-4">
                <button className="bg-[#F5F5F8] p-3 transition-all duration-300 ease-linear hover:bg-[#F5F5F8]/50 rounded-full">
                  <FaFacebook className="text-2xl text-dark1 hover:text-primary transition-all duration-300 ease-linear"></FaFacebook>
                </button>
                <button className="bg-[#F5F5F8] p-3 transition-all duration-300 ease-linear hover:bg-[#F5F5F8]/50 rounded-full">
                  <FaLinkedinIn className="text-2xl text-dark1 hover:text-primary transition-all duration-300 ease-linear"></FaLinkedinIn>
                </button>
                <button className="bg-[#F5F5F8] p-3 transition-all duration-300 ease-linear hover:bg-[#F5F5F8]/50 rounded-full">
                  <FaGoogle className="text-2xl text-dark1 hover:text-primary transition-all duration-300 ease-linear"></FaGoogle>
                </button>
              </div>
              {/* already  */}
              <p className="text-[18px] text-dark1">
                Already have an Account?{" "}
                <Link to={"/login"}>
                  <span className="text-primary">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
