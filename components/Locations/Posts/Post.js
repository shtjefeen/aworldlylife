import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Gallery from "./Gallery";
import ShowMoreText from "react-show-more-text";

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  padding: 16px;
  display: flex;
  margin-bottom: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  width: 45%;
  padding-left: 30px;
  h4 {
    margin: 0;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    color: #363636;
    margin-bottom: 8px;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 30px auto;
  }
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
  .icon {
    margin-right: 10px;
  }

  .text {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
    color: #717171;
  }
`;
const Book = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 80px;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;

    button {
      width: 100%;
      display: block;
    }
  }
`;
export default function index({ data = {}, handleOpen }) {
  return (
    <Wrapper>
      <Gallery images={data.images} handleOpen={handleOpen} />
      <Info>
        <h4>{data.name}</h4>
        <InfoItem>
          <span className="icon">
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2.167A5.83 5.83 0 004.167 8C4.167 12.375 10 18.834 10 18.834S15.834 12.375 15.834 8A5.83 5.83 0 0010 2.167zM5.834 8C5.834 5.7 7.7 3.834 10 3.834c2.3 0 4.167 1.866 4.167 4.166 0 2.4-2.4 5.992-4.167 8.234C8.267 14.009 5.834 10.375 5.834 8zm2.083 0a2.083 2.083 0 114.167 0 2.083 2.083 0 01-4.167 0z"
                fill="#000"
                fillOpacity={0.54}
              />
            </svg>
          </span>
          <span className="text">
            Location: {data.city}, {data.country}
          </span>
        </InfoItem>
        <InfoItem>
          <span className="icon">
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3.834h.833c.917 0 1.667.75 1.667 1.666v11.667c0 .917-.75 1.667-1.667 1.667H4.167c-.917 0-1.667-.75-1.667-1.667V5.5c0-.916.75-1.666 1.667-1.666H5V2.167h1.667v1.667h6.666V2.167H15v1.667zM4.167 17.167h11.666V8.834H4.167v8.333zm0-10V5.5h11.666v1.667H4.167zm9.575 3.775L8.8 15.884l-2.642-2.642.884-.883L8.8 14.117l4.058-4.058.884.883z"
                fill="#000"
                fillOpacity={0.54}
              />
            </svg>
          </span>
          <span className="text">Availability: {data.availability}</span>
        </InfoItem>

        <InfoItem>
          <span style={{ marginRight: 10 }}>From:</span>{" "}
          <strong>
            {" "}
            ${data.from}USD {data.for}
          </strong>
        </InfoItem>

        <ShowMoreText
          lines={1}
          more="Show more"
          less="Show less"
          expanded={false}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          />
        </ShowMoreText>
      </Info>

      <Book>
        <Button
          color="primary"
          variant="contained"
          component="a"
          href={`mailto:tobias@aworldlylife.com?subject=${data.name}`}
        >
          Book now
        </Button>
      </Book>
    </Wrapper>
  );
}
