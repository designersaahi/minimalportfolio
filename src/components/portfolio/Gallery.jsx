import React, { useEffect, useRef, useState } from "react";
import "../../../src/gallery.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogDescription

} from "../ui/dialog";
import { sandBoxImages } from "@/constants/sandBoxImages";

const Gallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  // Function to open the dialog and set the selected image
  const getImage = (image) => {
    setSelectedImage(image);
    setIsDialogOpen(true); // Open the dialog when an image is clicked
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const options = {
      threshold: 0.1, // When 10% of the image is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Only show the animation after the image is fully loaded
          img.onload = () => {
            img.classList.add("visible");
          };

          // If the image is already cached (loaded), trigger the animation immediately
          if (img.complete) {
            img.classList.add("visible");
          }

          observer.unobserve(img); // Stop observing once it's handled
        }
      });
    }, options);

    const images = galleryRef.current.querySelectorAll(".pics img");
    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect(); // Clean up observer when the component unmounts
    };
  }, []);

  return (
    <div className="gallery my-16" ref={galleryRef}>
      {sandBoxImages.map((image, index) => (
        <div className="pics" key={index} onClick={() => getImage(image)}>
          <img src={image} alt="" />
        </div>
      ))}

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="w-[90vw] lg:w-[80vw] max-w-none">
            <DialogHeader className="">
              <DialogTitle></DialogTitle>
              <DialogDescription className="w-full">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-[75vh] mx-auto object-contain"
                  loading="lazy"
                />
              </DialogDescription>
            </DialogHeader>
            <button onClick={closeDialog} className="border-none outline-none">
              Close
            </button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;
