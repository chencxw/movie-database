import { useState } from 'react';

function SearchButton() {
    const [input, setInput] = useState("");

  return (
    <div>
        <input type="text" placeholder="Search a film..." value={input} onChange={(event) => setInput(event.target.value)}/>
        <button type="submit" >Search</button>
    </div>
  )
}
export default SearchButton