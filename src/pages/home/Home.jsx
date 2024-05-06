import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/about/AboutUs";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import CoreFeature from "../../components/core_feature/CoreFeature";
import MeetOurTeam from "../../components/meet_our_team/MeetOurTeam";
import Product from "../../components/product/Product";
import Service from "../../components/service/Service";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <>
      <Helmet>
        <title>Car Doctor | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Service></Service>
      <Contact></Contact>
      <Product></Product>
      <MeetOurTeam></MeetOurTeam>
      <CoreFeature></CoreFeature>
      <Testimonial></Testimonial>
    </>
  );
}

export default Home;
