import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/thumbnails/Sahitya.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="lg:max-w-[70vw] mx-auto p-6 bg-white">
      <Helmet>
        <title>About | Sahitya Kashyap Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Sahitya Kashyap."
        />
      </Helmet>
      <div className="flex flex-col  md:flex-row gap-6  mb-8">
        <div className="md:w-1/3">
          <img
            src={image1}
            alt="Sahitya Kashyap"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Sahitya Kashyap</h1>
          <p className="text-gray-600 mb-4">Based out of Delhi, India</p>
          <p className="mb-4">
            My journey started in 2017, with a 4 year diploma in Tool & Die
            Making where I learned and fell in love with how products are MADE,
            what I did not know at the time was how those product are DESIGNED
            for the user but my curiousity and some happy coincidence led me to
            discover Industrial Design.
          </p>
          <p className="mb-4">
            In 2021, I went to study Industrial Design at DTU while embracing my
            skills in Tool & Die, while learning even more about different
            dimensions of Industrial Design.
          </p>
          <p className="mb-4">
            Decided to top off my education with Offsite Pro in 2024 to get a
            workflow around my skills and now I am looking for my big break to
            utilise said skillset. Also, When I'm not designing, I lose ranking
            on chess.com or valorant.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Industrial Design Intern</h3>
            <p className="text-gray-600">
              GDD- Industrial Design Studio (Currently Working)
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2023</h3>
            <p className="text-gray-600">Webby Toys</p>
            <p>
              Designing of 1 Game Toy and 1 Interactive Board game for age 6+,
              to be sold under Rs.499.
            </p>
            <p>Design for Manufacturing- Injection Molding.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2022</h3>
            <p className="text-gray-600">Webby Toys</p>
            <p>
              Designing of STEM Based Interactive Game Toy for age 6+, Workflow
              Design for Pine Wood Toy Design, manufacturing, costing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Application Trainee</h3>
            <p className="text-gray-600">Objectify Technologies</p>
            <p>
              My responsibilities at Objectify Technologies included:
              Redesigning products for additive manufacturing, optimizing
              designs for weight reduction, and creating conformal cooling
              channels.Providing RFQ quotations, communicating with clients on
              design changes, managing technical planning, and overseeing the
              entire manufacturing process from order confirmation to dispatch.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Offsite Pro</h3>
              <p className="text-gray-600">Advanced Design</p>
              <p>
                Offsite Pro is an online program disrupting industrial design
                education and offers a real world view of the design profession
                through the instruction of industry leaders.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Bachelors of Design</h3>
              <p className="text-gray-600">Delhi Technological University</p>
              <p>
                4 Year Degree in Bachelor of Design emcompassing the industrial
                design education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tool & Die Making</h3>
              <p className="text-gray-600">
                Delhi Institute of Tool Engineering
              </p>
              <p>
                4 Year Diploma in Tool & Die Making is a specialisation valued
                in the design and manufacturing of products using tools. The
                program constitutes mass production of various product
                components utilizing the art of designing and manufacturing dies
                and moulds
              </p>
            </div>
          </div>

          <span className="text-gray-600 mt-10">
            Email-{" "}
            <Link
              to="mailto:design.er.saahi@gmail.com"
              className="hover:underline"
            >
              {" "}
              design.er.saahi@gmail.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
