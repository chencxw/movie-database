// Is Fav
function isFav(arr, path, id){
    if(path === '/favourites'){
        return true;
    }
    if(arr.length === 0){
      return false;
    }
    // Checks whether the object is favourited
    return arr.some((obj) => obj.id === id);

}

export default isFav;