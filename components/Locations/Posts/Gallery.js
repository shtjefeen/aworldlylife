import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MagicSliderDots from "react-magic-slider-dots";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "@components/Image";
const Wrapper = styled.div`
  width: 35%;
  cursor: pointer;

  .slider-img {
    height: 200px;
    img {
      width: 100%;
      object-fit: cover;
      min-height: 200px;
    }
  }

  .slick-dots {
    width: 120px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    position: absolute !important;
    li {
      button:before {
        color: #bcbcbc !important;
        opacity: 1;
      }

      &.slick-active {
        button:before {
          color: #fff !important;
        }
      }
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    .slider-img {
      img {
        width: 100%;
      }
    }
  }
`;

function Slide({ image }) {
  return (
    <div className="slider-img">
      <Image src={image} alt="" />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <span
      style={{
        position: "absolute",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 99,
        background: "rgba(255, 255, 255, 0.8)",
        color: "#000",
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        cursor: "pointer",
      }}
      disabled={onClick === null ? true : false}
      onClick={onClick}
      className="slick-btn"
    >
      <FiChevronRight />
    </span>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <span
      style={{
        position: "absolute",
        left: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 99,
        background: "rgba(255, 255, 255, 0.8)",
        color: "#000",
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        cursor: "pointer",
      }}
      disabled={onClick === null ? true : false}
      onClick={onClick}
      className="slick-btn"
    >
      <FiChevronLeft />
    </span>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
      },
    };
    return (
      <Wrapper onClick={(e) => this.props.handleOpen(this.props.images)}>
        <Slider {...settings}>
          {this.props.images.map((image) => (
            <Slide key={image} image={image} />
          ))}
        </Slider>
      </Wrapper>
    );
  }
}
