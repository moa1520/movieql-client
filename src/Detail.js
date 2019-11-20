import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILES } from "./queries";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 30px;
`;

const Contents = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const MovieImg = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  background-position: center center;
  background-size: hover;
  height: 300px;
  width: 230px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Rating = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Suggestion = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Middle = styled.div`
  margin: 30px 0px;
  font-size: 24px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILES} variables={{ movieId }}>
    {({ loading, error, data }) => {
      if (loading) return "loading";
      if (error) return "error";
      return (
        <>
          <Container>
            <MovieImg bgImg={data.movie.medium_cover_image} />
            <Contents>
              <Title>{data.movie.title}</Title>
              <Rating>Rating : {data.movie.rating}</Rating>
              {data.movie.description_intro}
            </Contents>
          </Container>
          <Middle>Suggested</Middle>
          <Suggestion>
            {data.suggestions.map(
              ({ id, medium_cover_image, title, rating }) => {
                return (
                  <Movie
                    id={id}
                    title={title}
                    rating={rating}
                    poster={medium_cover_image}
                  />
                );
              }
            )}
          </Suggestion>
        </>
      );
    }}
  </Query>
);

export default Detail;
