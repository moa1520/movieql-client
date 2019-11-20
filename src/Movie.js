import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  border-radius: 15px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.span`
  padding: 10px;
  left: 0;
  right: 0;
  width: auto;
  position: absolute;
  bottom: 25px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: auto;
`;

const Movie = ({ id, title, rating, poster }) => (
  <Link to={`/details/${id}`}>
    <Card background={poster}>
      <Title>
        {title} / {rating}⭐️
      </Title>
    </Card>
  </Link>
);

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
  poster: Proptypes.string.isRequired
};

export default Movie;
