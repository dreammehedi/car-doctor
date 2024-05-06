import PropTypes from "prop-types";
function PagesBanner({ bgBanner, title, pathName }) {
  return (
    <section>
      <div
        style={{
          background: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%), url(${bgBanner}) no-repeat center`,
        }}
        className={`container w-full !bg-cover h-[320px] rounded-md flex flex-col justify-center items-start space-y-6`}
      >
        <h2 className="font-bold text-3xl lg:text-4xl text-white">{title}</h2>
        <p className="text-primary font-medium">{pathName}</p>
      </div>
    </section>
  );
}

PagesBanner.propTypes = {
  bgBanner: PropTypes.string,
  title: PropTypes.string,
  pathName: PropTypes.string,
};
export default PagesBanner;
