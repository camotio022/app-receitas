import { Links } from "../../componentes/LINKS";
import "./index.css";

import churros from "../../images/imgsPages/churos.jpg";
import avatar from "../../images/mocks/avatar.jpg";
import * as Tag from "./styles";
import { ShowSlider } from "./CAROUSEL/index.jsx";
import { TopReview } from "../ReviewRecipes/index.jsx";

const recipes = [
  {
    title: "Titulo",
    img: churros,
    reviewsCount: 20,
    reviewScore: 8.5,
    author: "Temótio",
    authorImg: avatar,
    likesCount: 23,
    commentsCount: 5,
  },
];
{/* {recipes.map((recipe) => (
  <RecipeCard {...recipe} />
))} */}

export const HomePage = () => {
  return (
    <>
      <Tag.Wrapper id="wrapper">
        sxfshdjzhf
        {/* <TopReview/> */}
      </Tag.Wrapper>
    </>
  );
};
