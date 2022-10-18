import React from "react";
import Art from "./Art";

const artData = [
  {
    title: "Spirolarc XI",
    artist: "Dennis Stewart",
    type: "sculpture",
    description: "mahogany geometric scupture",
    location: "Fire Station 16",
    img: "src/components/img/spirolarc.jpeg"
  }, 
  {
    title: "Silver Dawn",
    artist: "Manuel Izquierdo",
    type: "sculpture",
    description: "biomorphic abstract sculpture",
    location: "Wallace Park",
    img: "src/components/img/silver-dawn.jpeg"
  }, 
  {
    title: "Pambiche",
    artist: "Emily Beeks",
    type: "mural",
    description: "a cultural depiction of Cuba",
    location: "Pambiche Restaurant",
    img: "src/components/img/pambiche.jpeg"
  }
]

function ArtList() {
  return (
    <React.Fragment>
    <hr />
    {artData.map((art, index) => 
      <Art
        title={art.title}
        artist={art.artist}
        type={art.type}
        description={art.description}
        location={art.location}
        img={art.img} 
        key={index} />
    )}
    </React.Fragment>
  )
}

export default ArtList;