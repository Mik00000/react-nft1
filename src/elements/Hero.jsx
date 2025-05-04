import React from "react";
import Button from "../components/Button";
import bestNftCardImg from "../assets/images/banners/bestNft.png";
import bestNftCardBg from "../assets/images/banners/bestNftBg.svg";

const statistics = [
  {
    value: "32k+",
    name: "Artworks",
  },
  {
    value: "32k+",
    name: "Auctions",
  },
  {
    value: "12k+",
    name: "Creators",
  },
];
const bestNftInfo = {
  price: "0.99 ETH",
  endsIn: "25 hrs",
  artist: "@wzard",
  image: bestNftCardImg,
};
const Hero = () => {
  return (
    <section className="hero">
      <div className="left-part">
        <div className="main-content">
          <h1 className="heading">
            Explore, Buy and Sell the <span>Best NFTs!</span>
          </h1>
          <div className="buttons">
            <Button type="yellow" padding="24px 76px">
              Explore
            </Button>
            <Button type="transparent" padding="24px 76px">
              Create
            </Button>
          </div>
        </div>
        <div className="statistics">
          {statistics.map((element) => (
            <div className="card">
              <h4>{element.value}</h4>
              <span>{element.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-part">
        <div
          className="nft-card"
          style={{
            backgroundImage: `url(${bestNftInfo.image})`,
          }}
        >
          <div
            className="top-part"
            style={{
              backgroundImage: `url(${bestNftCardBg})`,
            }}
          >
            <div className="info-block">
              <span>Current bid</span>
              <h4>{bestNftInfo.price}</h4>
            </div>

            <div className="info-block">
              <span>Ends in</span>
              <h4>{bestNftInfo.endsIn}</h4>
            </div>
          </div>
          <div className="bottom-part">
            <div className="artist">
              <p>Artist</p>
              <span>{bestNftInfo.artist}</span>
            </div>
            <Button padding="23px 44px" type="yellow">Start Bid</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
