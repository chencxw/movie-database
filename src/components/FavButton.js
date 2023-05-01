function FavButton({ movies, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movies);
    }

    function handleRemoveFav(){
        handleFavClick(false, movies);
    }

    return (
        <>
            {remove === false ? 
            <button onClick={handleAddFav}>Add To Favs</button> : 
            <button onClick={handleRemoveFav}>Remove From Favs</button>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
