import React from "react";
import Evenslide from "../EvenSlide/Evenslide";
import Oddslide from "../OddSlide/Oddslide";

function Slideshome() {
  return (
    <div>
      <Oddslide
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
        lineone="Enjoy on your TV."
        linetwo="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      />
      <Evenslide
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
        lineone="Watch everywhere."
        linetwo="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <Oddslide
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png"
        lineone="Create profiles for children."
        linetwo="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
      <Evenslide
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
        lineone="Download your shows to watch offline."
        linetwo="Save your favourites easily and always have something to watch."
      />
    </div>
  );
}

export default Slideshome;
