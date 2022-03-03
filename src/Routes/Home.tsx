import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background: black;
`;

interface IMovie {
  id:number,
  backdrop_path:string,
  poster_path:string,
  title:string,
  overview:string,
}

export interface IGetMoviesResult {
  dates:{
    maximum: string;
    minimum: string;
  }
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number,
}

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom:10px;
`;
const Overview = styled.div`
  font-size:36px;
  width:50%;
`;
function Home() {
  const {data,isLoading} = useQuery<IGetMoviesResult>(["movies" ,"nowPlaying"], getMovies);
  console.log(data,isLoading);
  
  return <Wrapper style={{ backgroundColor: "whitesmoke", height: "200vh" }}>{isLoading ? <Loader></Loader> : <>
    <Banner 
      bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
      <Title>
        {data?.results[0].title}
      </Title>
      <Overview>
        {data?.results[0].overview}
      </Overview>
    </Banner>
    </>}
    </Wrapper>;
}
export default Home;