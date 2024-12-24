
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic17 from "../assets/women/pic17.jpg";
import pic18 from "../assets/women/pic18.jpg";
import pic21 from "../assets/women/pic21.jpg";
import pic25 from "../assets/women/pic25.jpg";
import change from "../assets/women/change.jpg";

const About = () => {
  return (
    <div className="about-us">
      <Navbar />

      <section className="relative">
        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center py-6 mt-8"
        >
          <div className="w-full h-full md:w-2/5 mb-4 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/1054541696/vector/online-product-presentation-with-project-team.jpg?s=612x612&w=0&k=20&c=ghVD5anU2Z5NPx1xdqIE6iTVDsNgwe2d3LzTAtaR7zM="
              className="w-full h-full  object-cover rounded-lg shadow-md "
            />
          </div>

          <div className="w-full md:w-2/4 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-3 text-primary">WHO WE ARE</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
             Microloan is an application which helps customers to get the loan monthly and paid it according the time they are going to get money
             as long as the customers are really interested for waht we are doing it's gonna be easy for them to get a loan from us
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
