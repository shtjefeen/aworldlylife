import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Filters from "@components/Locations/Filters";
import Post from "@components/Locations/Posts/Post";
import "react-magic-slider-dots/dist/magic-dots.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const Title = styled.div`
  margin: 48px 0;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #993700;
    margin: 0;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #363636;
    margin: 0;
  }
`;
const Wrapper = styled.div``;

const data = [
  {
    name: "Hotel Lo Sereno",
    description: `
    <p style={{margin: 0}}>
    Lo Sereno presents a sensual and sophisticated approach to barefoot elegance. The ten-suite hotel exists in a balance of romance and adventure, including a gourmet Mexican concept kitchen, sourcing local fresh ingredients daily. The bar and dining area are open-air and encapsulated by the hotel’s glittering black infinity pool. At Lo Sereno you can enjoy cocktails and beverages either at the dining area, in the lounge, or on the beach. Lo Sereno provides all the amenities a modern traveler may desire, curating brands worldwide for an all-sensory experience. One visit to Lo Sereno and you will always have a home to return to on the beach.
    </p>

    <ul>
      <li>
      breakfast included
      </li>
      <li>
      comfortable workspaces
      </li>
      <li>
      fast and stable WiFi
      </li>
      <li>
      workspace outside the room
      </li>
      <li>
      additional IT hardware upon request
      </li>
      <li>
      daily room cleaning
      </li>
    </ul>
    
    `,
    city: "Troncones",
    country: "Mexico",
    availability: "All year round",
    from: 4000,
    for: "for 4 weeks",
    images: [
      "/images/rooms/2/1.jpg",
      "/images/rooms/2/2.jpg",
      "/images/rooms/2/3.jpg",
      "/images/rooms/2/4.jpg",
    ],
  },

  {
    name: "CERVO Mountain Resort",
    description: `
    <p style={{margin: 0}}>
    Surrounded by the rugged beauty of Zermatt, the CERVO is the gateway to the
mystical mountain world of the Alps. With a deeply rooted sense of the extraordinary, of highest
quality and of authentic hospitality, CERVO invites its guests to explore the impressive nature
around us. And to discover themselves. Casual luxury, a modern design, warm colors and
natural materials. This is the contemporary alpine style of CERVO.</p>

    <ul>
      <li>
      room category: Nomad room L, Nomad room M
      </li>
      <li>
      breakfast not included
      </li>
      <li>
      comfortable workspaces
      </li>
      <li>
      fast and stable WiFi
      </li>
      <li>
      co-working space “Ferdi” included
      </li>
      <li>
      exclusive Spa included
      </li>
      <li>
      additional IT hardware upon request
      </li>
      <li>
      weekly room cleaning
      </li>
      <li>
      pet friendly!
      </li>
      <li>
      Yoga and meditation classes
      </li>
    </ul>
    
    `,
    city: "Zermatt",
    country: "Switzerland",
    availability: "May, June, October, November",
    from: 4900,
    for: "for 4 weeks",
    images: [
      "/images/rooms/1/1.jpg",
      "/images/rooms/1/2.jpg",
      "/images/rooms/1/3.jpg",
      "/images/rooms/1/4.jpg",
    ],
  },
  {
    name: "CERVO Mountain Resort",
    description: `
    <p style={{margin: 0}}>
    Surrounded by the rugged beauty of Zermatt, the CERVO is the gateway to the
    mystical mountain world of the Alps. With a deeply rooted sense of the extraordinary, of highest
    quality and of authentic hospitality, CERVO invites its guests to explore the impressive nature
    around us. And to discover themselves. Casual luxury, a modern design, warm colors and
    natural materials. This is the contemporary alpine style of CERVO.</p>

    <ul>
      <li>
      room category: Nomad Roof Suite
      </li>
      <li>
      breakfast not included
      </li>
      <li>
      comfortable workspaces
      </li>
      <li>
      fast and stable WiFi
      </li>
      <li>
      co-working space “Ferdi” included
      </li>
      <li>
      exclusive Spa included
      </li>
      <li>
      additional IT hardware upon request
      </li>
      <li>
      weekly room cleaning
      </li>
      <li>
      pet friendly!
      </li>
      <li>
      Yoga and meditation classes
      </li>
    </ul>
    
    `,
    city: "Zermatt",
    country: "Switzerland",
    availability: "May, June, October, November",
    from: 7400,
    for: "for 4 weeks",
    images: [
      "/images/rooms/1/1.jpg",
      "/images/rooms/1/2.jpg",
      "/images/rooms/1/3.jpg",
      "/images/rooms/1/4.jpg",
    ],
  },
];

export default function Locations() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [galleryImage, setGalleryImage] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [country, setCountry] = useState(null);
  const [locations, setLocations] = useState(data);

  const handleOpen = (images) => {
    setGalleryImage(images);
    setIsOpen(true);
    setPhotoIndex(0);
  };

  const handleClose = () => {
    setGalleryImage([]);
    setIsOpen(false);
    setPhotoIndex(0);
  };

  const filterCountries = data
    .map((item) => {
      return item.country;
    })
    .filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });

  const handleFilter = () => {
    if (country && !min && !max) {
      setLocations(data.filter((item) => item.country === country));
    } else if (country && min && !max) {
      setLocations(
        data.filter((item) => item.country === country && item.from >= min)
      );
    } else if (country && max && !min) {
      setLocations(
        data.filter((item) => item.country === country && item.from <= max)
      );
    } else if (country && max && min) {
      setLocations(
        data.filter(
          (item) =>
            item.country === country && item.from <= max && item.from >= min
        )
      );
    } else if (!country && min && !max) {
      setLocations(data.filter((item) => item.from >= min));
    } else if (!country && !min && max) {
      setLocations(data.filter((item) => item.from <= max));
    }
  };
  return (
    <Wrapper>
      {isOpen && (
        <Lightbox
          mainSrc={galleryImage[photoIndex]}
          nextSrc={galleryImage[(photoIndex + 1) % galleryImage.length]}
          prevSrc={
            galleryImage[
              (photoIndex + galleryImage.length - 1) % galleryImage.length
            ]
          }
          onCloseRequest={handleClose}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImage.length - 1) % galleryImage.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImage.length)
          }
        />
      )}

      <Container>
        <Title>
          <p>Locations</p>
          <h2>The Worldly spots</h2>
        </Title>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Filters
              filterCountries={filterCountries}
              min={min}
              max={max}
              setMin={setMin}
              setMax={setMax}
              country={country}
              setCountry={setCountry}
              handleFilter={handleFilter}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            {locations.map((item, index) => (
              <Post data={item} handleOpen={handleOpen} key={index} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
