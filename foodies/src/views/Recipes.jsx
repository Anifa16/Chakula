import React, { useState } from 'react';
import { useEffect } from 'react';
import Recipecard from './Recipecard';


export default function Recipes() {
  const [isloading, setIsloading] = useState(false)
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}#number=100`);
    const data = await response.json();
    console.log(data)
    setRecipes(data.meals);
    setIsloading(false)
  };
  useEffect(()=>{
   
    getRecipes();
 
  },[]);

  return (
    <div>
      <div className="searches" >
        <form className='search'  onSubmit={(e) => getRecipes(e)}>
          <input
            type="text"
            className='input'
            placeholder="Search for any Recipes...."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <br />
          <button 
          className="button" 
          type="submit">Search</button>
        </form>
      </div>
      <div className="recipes">
        {recipes ? recipes.map((recipe) => (
           <Recipecard 
           key={recipe.idMeal}
           recipe={recipe}/>
        )): "No Recipes"}
      </div>
    </div>
    
  )
}


