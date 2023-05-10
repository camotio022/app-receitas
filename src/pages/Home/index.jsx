import { Links } from "../../componentes/LINKS";
import "./index.css";

import churros from "../../images/imgsPages/churos.jpg";
import avatar from "../../images/mocks/avatar.jpg";
import { RecipeCard } from "../../componentes/RecipeCard";

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

export const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        {/* <Links /> */}
        {recipes.map((recipe) => (
          <RecipeCard {...recipe} />
        ))}
      </div>
    </>
  );
};
