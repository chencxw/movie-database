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
        <button onClick={handleAddFav}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
          </svg>
          <span>Add to Favourites</span>
      </button> : 
      <button onClick={handleRemoveFav}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"/>
          </svg>
          <span>Unfavourite</span>
      </button>}
    </>
  );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
