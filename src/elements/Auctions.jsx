import React from "react";
import Heading from "../components/Heading";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

import nftImage1 from "../assets/images/nfts/nft-card-1.png";
import nftImage2 from "../assets/images/nfts/nft-card-2.png";
import nftImage3 from "../assets/images/nfts/nft-card-3.png";

import heartIcon from "../assets/images/icons/heart-icon.svg";
import carouselArrow from "../assets/images/icons/carousel-arrow.svg";
import userImage from "../assets/images/icons/profile-image1.png";
import Button from "../components/Button";
import nftCardTimerBg from "../assets/images/banners/nft-card-timer-bg.svg";
const Auctions = () => {
  const nftCards = [
    {
      image: nftImage1,
      authorName: "Digital Dreamer",
      authorUsername: "@dreamer1",
      likesCount: 27,
      price: "2.75 ETH",
      endsIn: "01:12:45",
      authorImage: userImage,
    },
    {
      image: nftImage2,
      authorName: "CryptoBrush",
      authorUsername: "@cbrush",
      likesCount: 45,
      price: "3.10 ETH",
      endsIn: "05:07:33",
      authorImage: userImage,
    },
    {
      image: nftImage3,
      authorName: "NeonVibes",
      authorUsername: "@neonvibes",
      likesCount: 19,
      price: "1.95 ETH",
      endsIn: "00:59:20",
      authorImage: userImage,
    },
  ];

  return (
    <section className="auctions">
      <Heading bubbleColor="#8613A5">Live Auctions</Heading>
      <Carousel
        slideSize="33%"
        height={691}
        slideGap={42}
        controlsOffset="xs"
        controlSize={54}
        withControls
        withIndicators={false}
        loop
        dragFree
        align="start"
      >
        {[...nftCards,...nftCards].map((card, index) => (
          <Carousel.Slide key={index}>
            <div className="carousel-card">
              <div className="image-wrapper">
                <img src={card.image} alt="nft" className="nft-image" />
                <span
                  className="nft-timer"
                  style={{ backgroundImage: `url(${nftCardTimerBg})` }}
                >
                  {card.endsIn}
                </span>
              </div>
              <div className="info">
                <div className="author">
                  <img
                    src={card.authorImage}
                    alt="author-image"
                    className="author-image"
                  />
                  <div className="author-info">
                    <span className="author-name">{card.authorName}</span>
                    <span className="author-username">
                      by {card.authorUsername}
                    </span>
                  </div>
                </div>
                <div className="likes">
                  <button className="like-button">
                    <img
                      src={heartIcon}
                      alt="heart-icon"
                      className="heart-icon"
                    />
                  </button>
                  <span className="likes-count">{card.likesCount}</span>
                </div>
              </div>
              <div className="price">
                <span>Current Bid</span>
                <span className="price-value">{card.price}</span>
              </div>
              <Button
                type="transparent"
                padding="21px 0"
                color="var(--colorWhite)"
              >
                Place a bid
              </Button>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default Auctions;
