import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p>
        You do not have any favorite Meetups. Add favorites from All Meetups
        page.
      </p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h2>Favorites Page</h2>
      {content}
    </section>
  );
}

export default FavoritesPage;
