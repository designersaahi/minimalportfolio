import React, { useEffect, useRef, useState } from "react";
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
    video,
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
      <div className="lg:w-[75vw] mx-auto mb-2">
        {
          video ? <video  src={video} className="w-full md:p-4 p-1 object-cover" autoPlay loop muted /> : <img className="" src={images?.[0]} alt="img" />
        }
      </div>
        <Card className="lg:w-[73.5vw] border-none w-[95vw] shadow-none mx-auto h-[40vh]">
          <CardContent className="md:p-8 h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-5 justify-center md:items-center h-full">
              <div className="md:space-y-6 space-y-1 flex flex-col justify-center">
                <h1 className="md:text-6xl text-5xl font-normal tracking-tighter">
                  {projectTitle}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                  {subtitle}
                </p>
              </div>
              <div className="md:text-right">
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
          {(video ? images : images.slice(1)).map((image, index) => (
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
