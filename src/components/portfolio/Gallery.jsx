import React, { useState } from "react";
import { sandBoxImage } from "@/constants/sandboxImage";
import "../../../src/gallery.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

const Gallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const getImage = (image) => {
    setSelectedImage(image);
    setIsDialogOpen(true); // Open dialog when image is clicked
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Close dialog
  };

  return (
    <div className="gallery my-16">
      {sandBoxImage.map((image, index) => (
        <div className="pics" key={index} onClick={() => getImage(image)}>
          <img src={image} alt="" />
        </div>
      ))}

      {isDialogOpen && (
        <Dialog className="" open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="w-[90vw] lg:w-[80vw] max-w-none">
            {" "}
            {/* Ensure width and remove default max-width */}
            <DialogHeader className="">
              <DialogTitle></DialogTitle>
              <DialogDescription className="w-full">
                {/* Set image to be full width */}
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
