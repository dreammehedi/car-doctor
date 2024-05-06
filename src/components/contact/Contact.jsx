import { FaCalendar } from "react-icons/fa";

function Contact() {
  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="container bg-dark1 p-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 rounded-md">
        <div className="flex justify-center items-center text-white gap-2">
          <FaCalendar className="text-2xl"></FaCalendar>
          <div className="flex flex-col">
            <p>We are open monday-friday</p>
            <h2 className="font-bold text-2xl">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex justify-center items-center text-white gap-2">
          <FaCalendar className="text-2xl"></FaCalendar>
          <div className="flex flex-col">
            <p>We are open monday-friday</p>
            <h2 className="font-bold text-2xl">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex justify-center items-center text-white gap-2">
          <FaCalendar className="text-2xl"></FaCalendar>
          <div className="flex flex-col">
            <p>We are open monday-friday</p>
            <h2 className="font-bold text-2xl">7:00 am - 9:00 pm</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
