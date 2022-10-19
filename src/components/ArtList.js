import React from "react";
import Art from "./Art";
import PropTypes from 'prop-types';

// const artData = [
//   {
//     title: "Spirolarc XI",
//     artist: "Dennis Stewart",
//     type: "sculpture",
//     description: "mahogany geometric sculpture",
//     location: "Fire Station 16",
//     img: "https://s3.amazonaws.com/react-tests/5d2f7b4b4433b24b730c910d/b5c25d60-6357-11ea-97fb-b5e85b1f67c4-2500.jpeg"
//   }, 
//   {
//     title: "Silver Dawn",
//     artist: "Manuel Izquierdo",
//     type: "sculpture",
//     description: "biomorphic abstract sculpture",
//     location: "Wallace Park",
//     img: "https://s3.amazonaws.com/react-tests/5d2f7b4b4433b24b730c910d/32357150-5c25-11ea-8a6c-29be62a72f33-2500.jpeg"
//   }, 
//   {
//     title: "Pambiche",
//     artist: "Emily Beeks",
//     type: "mural",
//     description: "a cultural depiction of Cuba",
//     location: "Pambiche Restaurant",
//     img: "https://s3.amazonaws.com/react-tests/5d2f7b4b4433b24b730c910d/5af41970-5c2a-11ea-8a6c-29be62a72f33-2500.jpeg"
//   }
// ]

function ArtList(props) {
  return (
    <React.Fragment>
    <hr />
    {props.artList.map((art) => 
      <Art
        title={art.title}
        artist={art.artist}
        type={art.type}
        description={art.description}
        location={art.location}
        img={art.img} 
        id={art.id}
        key={art.id} />
    )}
    </React.Fragment>
  );
}

ArtList.propTypes = {
  artList: PropTypes.array,
  onArtSelection: PropTypes.func
};

export default ArtList;