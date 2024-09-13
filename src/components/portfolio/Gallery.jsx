import React, { useState } from 'react'
import { sandBoxImage } from '@/constants/sandboxImage'
import "../../../src/gallery.css"

const Gallery = () => {
    const [model , setModel] = useState(false);
    const [dialogIimage , setDialogImage] = useState("");

    const getImage = (image) => {
        setDialogImage(image);
        setModel(true);
    }
  return (
    <div className='gallery'>
        <div className={model ? "model open" : "model"}>
            <img src={dialogIimage} alt="image" />
        </div>

        {
            sandBoxImage.map((image , index) => {
                return (
                    <div className='pics' key={index} onClick={() => getImage(image)}>
                        <img src={image} alt="" />
                    </div>
                )
            })
        }

    </div>
  )
}

export default Gallery