import React from 'react'
import gluegun from "../../assets/images/thumbnails/Thumbnail.png"
import vases from "../../assets/images/thumbnails/fam.png"
import tapedispenser from "../../assets/images/thumbnails/Final IDea.png"
import toy from "../../assets/images/thumbnails/Hero.png"
import watch from "../../assets/images/thumbnails/Hero1.png"
import lamp from "../../assets/images/thumbnails/Cover Thumnail.png"
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const products = [
  {
    id:1,
    name: "Joseph Joseph Glue Gun",
    description: "Industrial Design Project",
    color: "White/Silver",
    imageUrl: gluegun
  },
  {
    id:2,
    name: "Coordinate War",
    description: "Toy Design Project",
    color: "White/Silver",
    imageUrl: toy
  },
  {
    id:3,
    name: "MOODI Lamp",
    description: "Skill Demonstration Project",
    color: "Silver/White",
    imageUrl: lamp
  },
  {
    id:4,
    name: "Scotch Tape Dispenser",
    description: "Industrial Design Project",
    color: "White/Navy",
    imageUrl: tapedispenser
  },
  {
    id:5,
    name: "Titan Retro Watch",
    description: "Quick ID Sprint Project",
    color: "White",
    imageUrl: watch
  },
]




const Work=()=> {
  const navigate = useNavigate();
  const handleProjectRoute = (title) => {
      navigate(`/project/${title}`);
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Adds smooth scrolling
      });
  }

  return (
   <section className="w-full">
    <Helmet>
        <title>Sahitya Kashyap | ID Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Sahitya Kashyap." />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {products.map((product, index) => (
          <div onClick={()=> handleProjectRoute(product?.name)} key={index} className="relative group overflow-hidden aspect-[3.7/4] cursor-pointer">
            <img
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-gray-800 pl-14 pt-10">
              <h3 className="text-xl font-semibold mb-2 ">{product.name}</h3>
              <p className="text-sm ">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Work