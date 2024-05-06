import errorImage from "../../assets/errorImage.png";
import SecondaryHeader from "../../components/header/SecondaryHeader";
function Error() {
  return (
    <>
      <SecondaryHeader></SecondaryHeader>
      <section className="w-full h-[calc(100vh - 87px)] flex justify-center items-center">
        <img
          className="w-full md:max-w-[600px] h-auto"
          src={errorImage}
          alt="errorImage"
        />
      </section>
    </>
  );
}

export default Error;
