import { createContext, userState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},


});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = userState([]);

    function addFavoritesHandler(favoritesMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(userFavorites);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => {
                meetupId != meetup.id
            });
        });
    }

    function itemIsFavoritesHandler(meetupId) {
        return prevUserFavorites.favoritesMeetup(meetup => meetup.id == meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext