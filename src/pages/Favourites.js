import React from "react";
import { useContext } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
function Favourites() {
  const FavoriteCtx = useContext(FavoritesContext);
  let content;

  if (FavoriteCtx.totalFavorites === 0) {
    content = (
      <p>
        You Got No favorites yet.
        <h3>
          <strong> Start Adding Some....</strong>
        </h3>
      </p>
    );
  } else {
    content = <MeetupList meetups={FavoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default Favourites;
