import React, { useEffect, useState } from "react";
import { projects } from "@/constants/projects";
import { Card, CardContent } from "../ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowUp, Upload } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const filteredProject = projects.find((project) => project?.title === title);
  const {
    id,
    duration,
    title: projectTitle,
    subtitle,
    images,
    type,
    date,
    creator,
    cocreator,
  } = filteredProject;

  const handleNextProject = (title) => {
    navigate(`/project/${title}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    filteredProject && (
      <div className=" relative">
        <Helmet>
        <title>{projectTitle} | Work</title>
        <meta name="description" content="Welcome to the portfolio of Sahitya Kashyap." />
      </Helmet>
        <img className="lg:w-[75vw] mx-auto" src={images?.[0]} alt="img" />
        <Card className="lg:w-[73.5vw] w-[95vw] mx-auto h-[40vh]">
          <CardContent className="p-8 h-full flex flex-col justify-center">
            <div className="md:flex justify-between items-center h-full">
              <div className="space-y-4 flex flex-col justify-center">
                <h1 className="md:text-5xl text-4xl font-normal tracking-tighter">
                  {projectTitle}
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  {subtitle}
                </p>
              </div>
              <div className="md: text-left lg:text-right mt-4">
                <p className="text-xl font-semibold">{date}</p>
                <p className="text-muted-foreground text-sm">{duration}</p>
                <p className=" text-muted-foreground text-sm">{creator}</p>
                <p className=" text-muted-foreground text-sm">{cocreator}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* images container */}
        <div>
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              className="lg:w-[75vw] mx-auto"
              src={image}
              alt={`image + ${index}`}
              loading="lazy"
            />
          ))}
        </div>
        <div  className="flex gap-2  justify-center my-10">
          <button disabled={!projects[id]?.title} onClick={() => handleNextProject(projects[id]?.title)}  className="bg-gray-200 rounded-sm  px-2">Next</button>
          { <span> | {projects[id]?.title}</span>}
        </div>
        {isVisible && (
        <ArrowUp
          onClick={scrollToTop}
          className="bg-black text-white w-8 h-8 rounded-sm fixed bottom-5 right-5 cursor-pointer"
        />
      )}
      </div>
    )
  );
};

export default Project;
