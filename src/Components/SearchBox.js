import React from "react";

const SearchBox = ({search, setSearch}) => {
  return ( 
    <div>
      <div className="col col-sm-4">
    <input className="form-control"
     placeholder="Type to search"
     value={search}
    onChange={(event) => setSearch(event.target.value)}
     >
     </input>
      </div>
    </div>
   );
}
 
export default SearchBox;
