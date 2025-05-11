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
  return (
    <section className="auctions">
      <Heading bubbleColor="#8613A5">Live Auctions</Heading>
      <Carousel
        slideSize="33%"
        height={495}
        slideGap={42}
        controlsOffset="xs"
        controlSize={54}
        withControls
        withIndicators={false}
      >
        <Carousel.Slide>
          <div className="carousel-card">
            <div className="image-wrapper">
              <img src={nftImage1} alt="nft" className="nft-image" />
                <span className="nft-timer" style={{backgroundImage:`url(${nftCardTimerBg})`}}>03:18:24</span>
            </div>
            <div className="info">
              <div className="author">
                <img
                  src={userImage}
                  alt="author-image"
                  className="author-image"
                />
                <div className="author-info">
                  <span className="author-name">Virtual Art</span>
                  <span className="author-username">by @wzard</span>
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
                <span className="likes-count">12</span>
              </div>
            </div>
            <div className="price">
              <span>Current Bid</span>
              <span className="price-value">4.89 ETH</span>
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
      </Carousel>
    </section>
  );
};

export default Auctions;
