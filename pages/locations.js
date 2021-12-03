import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Filters from "@components/Locations/Filters";
import Post from "@components/Locations/Posts/Post";
import "react-magic-slider-dots/dist/magic-dots.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { NextSeo } from "next-seo";
import * as fbq from '../lib/fbq'
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
      "./images/rooms/2/1.jpg",
      "./images/rooms/2/2.jpg",
      "./images/rooms/2/3.jpg",
      "./images/rooms/2/4.jpg",
    ],
    category: "Hotel",
    map: "https://www.google.com/maps/place/Lo+Sereno+Casa+de+Playa/@17.7861949,-101.7318188,15z/data=!4m2!3m1!1s0x0:0x2b0ed1374c5730d4?sa=X&ved=2ahUKEwiC05v8xMvyAhXPFVkFHXyuABQQ_BIwE3oECE8QBQ ",
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
      "./images/rooms/1/1.jpg",
      "./images/rooms/1/2.jpg",
      "./images/rooms/1/3.jpg",
      "./images/rooms/1/4.jpg",
    ],
    category: "Hotel",
    map: "https://www.google.com/maps/place/CERVO+Mountain+Resort/@46.0219181,7.7543865,15z/data=!4m2!3m1!1s0x0:0x61c37aafec66a00c?sa=X&ved=2ahUKEwiwo-iHxcvyAhV7gP0HHdGXCyAQ_BIwFHoECFMQBQ",
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
      "./images/rooms/1/1.jpg",
      "./images/rooms/1/2.jpg",
      "./images/rooms/1/3.jpg",
      "./images/rooms/1/4.jpg",
    ],
    category: "Hotel",
    map: "https://www.google.com/maps/place/CERVO+Mountain+Resort/@46.0219181,7.7543865,15z/data=!4m2!3m1!1s0x0:0x61c37aafec66a00c?sa=X&ved=2ahUKEwiwo-iHxcvyAhV7gP0HHdGXCyAQ_BIwFHoECFMQBQ",
  },

  {
    name: "Hotel Steffani",
    description: `
    <p style={{margin: 0}}>
    Surrounded by the rugged beauty of Zermatt, the CERVO is the gateway to the
    mystical mountain world of the Alps. With a deeply rooted sense of the extraordinary, of highest
    quality and of authentic hospitality, CERVO invites its guests to explore the impressive nature
    around us. And to discover themselves. Casual luxury, a modern design, warm colors and
    natural materials. This is the contemporary alpine style of CERVO.</p>

    <ul>
      <li>
      Low season Standard Double Room USD 3,500
      </li>
      <li>
      Mid Season Standard Double Room  USD 3,990
      </li>
      <li>
      High Season Summer Standard Double Room USD 4,450
      </li>
      <li>
      High Season Winter (Black out dates may apply such as Christmas/New Year) Standard Double Room USD 5,700
      </li>
    </ul>
    <p>*all prices are for single use (double use +CHF 60/night) and excluding city taxes -other room categories available upon request
    </p>

    <p>
    The Hotel Steffani is located in the heart of St.Moritz and invites you to be enchanted by the beauty of the Engadin valley.
    </p>

    <p>
    The boutique hotel has 60 rooms, 3 on site restaurants, 2 bars, 1 nightclub as well as a Pool & Spa. For business travelers the hotel also offers 24hours concierge service as well as free WiFi, there are also several work places in the hotel infront of the fireplaces for a comfortable work environment. All guests rooms at The Steffani are newly renovated and  equipped with  movable desks to ensure a customized work environment.
    </p>

    <ul>
    <li>breakfast included</li>
    <li>daily complimentary water with and without gas</li>
    <li>24 – Concierge service</li>
    <li>fast and stable WiFi</li>
    <li>comfortable in-room workspaces</li>
    <li>workspace outside the room</li>
    <li>daily room cleaning </li>
    <li>SPA entrance included</li>
    <li>pet Friendly</li>
    <li>on site Slow Resistance Training / Pilates Studio</li>
    </ul>


    `,
    city: "St. Moritz",
    country: "Switzerland",
    availability: "All year round with variable pricing",
    from: 3500,
    for: "for 4 weeks",
    images: [
      "./images/rooms/5/5.jpg",
      "./images/rooms/5/2.jpg",
      "./images/rooms/5/3.jpg",
      "./images/rooms/5/4.png",
      "./images/rooms/5/6.png",
      "./images/rooms/5/1.jpg",
    ],
    category: "Hotel",
    map: "https://www.google.com/maps/place/Hotel+Steffani/@46.497364,9.8375082,15z/data=!4m2!3m1!1s0x0:0xb54faf38876b1860?sa=X&ved=2ahUKEwi-o_mUxcvyAhV4gP0HHSa8D7AQ_BIwF3oECEwQBQ",
  },

  {
    name: "Rocky Mansion (Private House) with 7 bedrooms",
    description: `
    <p style={{margin: 0}}>
    High Season (July/August) = USD 3,000 per night
    <br/>
    Low Season (May/June/Sept) = USD 1,750 per night
    <br/>
    Off season (rest 6 months) = USD 600 per night
    </p>

    <p>
      Rocky Mansion is an elegant and spacious family villa, facing South in a privileged wind-
      sheltered location above the marvellous golden sand Agrari Beach with magnificent views of the
      Aegean Sea. Agrari Beach, with its intimate charm and crystal clear water, is just a quick 10 min
      walk downhill. The villa&#39;s charming interior, schemed in light blue, white and ochre, could be
      described as “beach house style” combining traditional elements of Cycladic architecture with
      provincial selected details.
    </p>

    <p>
    The outdoor spaces of Rocky Mansion, surrounded by rocky hills and Mediterranean herbs,
    embrace the true spirit of summer life as they allow living each moment of the day in total
    comfort and relaxation. An array of two-level sitting areas and one distinct dining/lounge
    pergola-shaded area, paired with a stone-sculpted dining table and a traditional wood fire BBQ,
    is offering guests a perfect entertaining area. An elegant infinity pool surrounded by a very
    spacious sun deck with comfortable summer furniture dominates the villa’s terrace well
    accompanied by a covered pergola providing shading. The fully equipped kitchen with modern
    appliances gives onto a pleasing living-sitting space directly accessing the swimming pool and
    its wide terraces.
    </p>

    <h4>
    <strong>The Villa:</strong>
    </h4>
    <p style={{margin:0}}>7 Bedrooms + separate staff room - total sleeping capacity: 18 guests</p>

    <p>
      Total Villa: 400 sqm
      <br/>
      Total Land: 5,500 sqm
      <br/>
      <ul>
        <li>
          Parking area for 8 cars and verandas of 300 sqm
        </li>
        <li>
          Lagoon-like infinity swimming pool of 40 sqm with 8 persons outdoor Jacuzzi (no hot
          water)
        </li>
        <li>
          Separate maids room
        </li>
      </ul>
    </p>


    <h4><strong>The Rooms:</strong></h4>
    <p>
    Main Villa: 8 guests
      <br/>
      <ul>
        <li>
          Master bedroom: Double bed, en-suite bathroom (sleeps 2).
        </li>
        <li>
          Bedroom 1: Two bunk beds, shared bathroom (sleeps 4 - ideal for kids).
        </li>
        <li>
          Bedroom 2: Double bed, shared bathroom (sleeps 2).
        </li>
      </ul>
    </p>

    <p>Guest Studios: 10 guests</p>

    <ul>
            <li>
            Guest room 1: Double bed and single bed, en-suite bathroom, separate entrance (sleeps
              3).
            </li>
            <li>
            Guest room 2: Two single beds, en-suite bathroom, separate entrance (sleeps 2).
            </li>
            <li>
            Guest room 3: Double bed, en-suite bathroom, separate entrance (sleeps 2).
            </li>
            <li>
            Guest room 4: Double bed and single bed, en-suite bathroom, separate entrance (sleeps
              3).
            </li>
           
    </ul>


    <p>All double beds are 1.60 * 2.00 meters
    <br/>
    All single beds are 0.90 * 2.00 meters
    </p>

    <ul>
            <li>
            Satellite TV with Netflix
            </li>
            <li>
            Music player
            </li>
            <li>
            DVD player
            </li>
            <li>
            HD player with 200 popular movies of 4k quality
            </li>
            <li>
            Free Wi-Fi Internet
            </li>
            <li>
            Private Pool
            </li>
            <li>
            Private Parking
            </li>
            <li>
            Two Baby cot
            </li>
            <li>
            Safe deposit box
            </li>
            <li>
            Security alarm system
            </li>
            <li>
            Remote control for the entrance gate
            </li>
            <li>
            Air conditioning in all rooms
            </li>
            <li>
            Sun beds
            </li>
            <li>
            Shaded Sitting area
            </li>
            <li>
            Shaded Dining area
            </li>
            <li>
            Barbeque
            </li>
            <li>
            Pool Bar
            </li>
            <li>
            Outdoor shower
            </li>
        
    </ul>

    <p><strong>Services included</strong></p>

    <ul>
              <li>
                Private concierge 7 days a week
              </li>
              <li>
              Airport meet and greet on arrival. Baggage assistance &amp; guide to the villas. Ride fee is
              not included.
              </li>
              <li>
              Housekeeping 7 days a week. 4 hours daily maid service.
              </li>
              <li>
              Change of linen and towels twice weekly.
              </li>
    </ul>
   
    
    `,
    city: "Mykonos",
    country: "Greece",
    availability: "All year round with variable pricing",
    from: 3600,
    for: "for 1 week",
    images: [
      "./images/rooms/3/2.JPG",
      "./images/rooms/3/1.jpg",
      "./images/rooms/3/3.jpg",
      "./images/rooms/3/4.jpg",
      "./images/rooms/3/5.jpg",
      "./images/rooms/3/6.jpg",
      "./images/rooms/3/7.jpg",
      "./images/rooms/3/8.jpg",
      "./images/rooms/3/9.jpg",
      "./images/rooms/3/10.jpg",
      "./images/rooms/3/11.jpg",
      "./images/rooms/3/12.jpg",
      "./images/rooms/3/13.jpg",
    ],
    category: "House",
    map: "https://www.google.com/maps/place/RockyMansion/@37.4241291,25.3780442,15z/data=!4m2!3m1!1s0x0:0xd225bc100882a826?sa=X&ved=2ahUKEwidx8atxcvyAhUCFFkFHeD5BUQQ_BIwFXoECE8QBQ",
  },
  {
    name: "Rocky Estate (Private House) with 10 bedrooms",
    description: `
    <p style={{margin: 0}}>
    High Season (July/August) = USD 6,000 per night
    <br/>
    Low Season (May/June/Sept) = USD 3,650 per night
    <br/>
    Off season (rest 6 months) = USD 1.300 per night
    </p>

    <p>
    Rocky Estate is among the most lavish and exclusive Mykonos villas. The villa offers the
services of a luxury hotel in a magnificent and very private setting.This ultimate destination
offers everything you could possibly desire for your vacation.
    </p>

    <p>
    Built on a mountain hill and on a private land of 5,400 sqm, the villa provides a very peaceful
    surrounding and a private staff of two members to cater for your every wish.
    </p>

    <p>
    Boasting spectacular 180 degrees panoramic views of the southern beaches of Elia, Agrari and
Super Paradise, guests will be fascinated with the serene mediterranean scenery. Located in a
privileged and secluded position, Rocky Estate provides tranquility, stunning sea views and total
privacy.The villa&#39;s charming interior is a combination of modern minimal architecture with
provincial beach house elements. A fully equipped open-plan kitchen with modern appliances
gives onto a living-sitting area, directly accessing the water-front swimming pool and its wide
terraces.
</p>

<p>
Placed in front of the villa is a 100 sqm private lagoon-like infinity swimming pool, next to a large
wooden shaded pergola. Rocky Estate is one of those residences where words are not enough
to describe its allure and elegance.This ultra-modern villa is tastefully furnished in minimalist
style and is carved in solid rock 80 meters above sea level amid its own rocky forest! All
bedrooms are exquisitely furnished, all en-suite and air conditioned. ID: 1089837
</p>

    <h4>
    <strong>The Villa:</strong>
    </h4>
    <p style={{margin:0}}>10 Bedrooms - total sleeping capacity: 24+4</p>

    <p>
    Total Villa: 500 sqm
      <br/>
      Total Land: 5,400 sqm
      <br/>
      <ul>
        <li>
        Parking area for 20 cars and verandas of 800 sqm
        </li>
        <li>
        Lagoon-like infinity swimming pool of 100 sqm
        </li>
        <li>
        Pergolas of 140 sqm
        </li>
        <li>
        Separate maids room
        </li>
      </ul>
    </p>


    <h4><strong>The Rooms:</strong></h4>
    <ul>
        <li>
        1st floor master bedroom, king bed, en-suite bathroom = sleeps 2
        </li>
        <li>
        1st floor bedroom, king bed, en-suite bathroom = sleeps 2
        </li>
        <li>
        Ground floor bedroom, 1 king bed, Sofa bed, en-suite bathroom = sleeps 2+2
        </li>
        <li>
        Ground floor bedroom, 1 king bed, Sofa bed, en-suite bathroom = sleeps 2+2
        </li>
        <li>
        Ground floor bedroom, 2 single beds, en-suite bathroom = sleeps 2
        </li>
        <br/>
        <li>
        Basement floor bedroom, 1 king bed, en-suite bathroom = sleeps 2
        </li>
        <li>
        Basement floor bedroom, 1 king beds en-suite bathroom = sleeps 2
        </li>
        <li>
        Basement floor bedroom, 2 king beds, en-suite bathroom = sleeps 4
        </li>
        <br/>

        <li>
        Pool bedroom, 1 king bed, en-suite bathroom = sleeps 2
        </li>
        <li>
        Pool bedroom, 2 king beds, en-suite bathroom = sleeps 4
        </li>

        <br/>

        <li>
        Samsung Ultra HD 65&quot; TV, Netflix subscribed, Wi-Fi in-out
        </li>
        <li>
        Outdoor dining and wood fire BBQ
        </li>
        <li>
        A/C and heating in all rooms
        </li>

        <li>Kitchen with modern appliances, fully equipped</li>
        <li>Music player</li>
        <li>Private Infinity Pool</li>
        <li>Private Parking</li>
        <li>Baby cot</li>
        <li>Safe deposit box</li>
        <li>Security alarm system</li>
        <li>Remote control for the entrance gate</li>
        <li>Sun beds</li>
        <li>Sun beds</li>
        <li>Shaded Dining area</li>
        <li>Pool Bar</li>
        <li>Outdoor shower</li>
      </ul>

    <p><strong>Services included</strong></p>

    <ul>
            <li>
            Private concierge 7 days a week
            </li>
            <li>
            Airport meet and greet on arrival. Baggage assistance &amp; guide to the villas. Ride fee is
not included.
            </li>
            <li>
            Housekeeping 7 days a week. 4 hours daily maid service.
            </li>
            <li>
            Change of linen and towels twice weekly.
            </li>
           
    </ul>
    `,
    city: "Mykonos,",
    country: "Greece",
    availability: "All year round with variable pricing",
    from: 7800,
    for: "for 1 week",
    images: [
      "./images/rooms/4/7.jpg",
      "./images/rooms/4/3.jpg",
      "./images/rooms/4/4.jpg",
      "./images/rooms/4/5.jpg",
      "./images/rooms/4/6.jpg",
      "./images/rooms/4/2.jpg",
      "./images/rooms/4/8.jpg",
      "./images/rooms/4/9.jpg",
      "./images/rooms/4/10.jpg",
      "./images/rooms/4/11.jpg",
      "./images/rooms/4/1.jpg",
      "./images/rooms/4/12.jpg",
      "./images/rooms/4/13.jpg",
      "./images/rooms/4/14.jpg",
    ],
    category: "House",
    map: "https://rockyestate.com/",
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
  const [category, setCategory] = useState(null);

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
    let newLocations = data;

    if (category) {
      newLocations = newLocations.filter((item) => item.category === category);
    }
    if (country) {
      newLocations = newLocations.filter((item) => item.country === country);
    }
    if (min) {
      newLocations = newLocations.filter((item) => item.from >= min);
    }
    if (max) {
      newLocations = newLocations.filter((item) => item.from <= max);
    }

    setLocations(newLocations);
    fbq.event('Search', { min, max, country, category })
    console.log(fbq)
  };
  return (
    <Wrapper>
      <NextSeo title="Locations" />

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
              category={category}
              setCategory={setCategory}
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
