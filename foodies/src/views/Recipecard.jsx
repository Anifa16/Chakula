import React from 'react'
import Recipes from './Recipes'

export default function ({recipe}) {

const {idMeal,strMeal,strCategory,strMealThumb,strArea,strInstructions,strYoutube} = recipe;
  return (
    <div className='card'>
       <img 
        src={strMealThumb}
        alt={strMeal}
        className='meal-image'
        />
         <p>{strMeal} food</p>


        <div className='recipe'>
            <span className='category'>{strCategory}</span>
            <h3>{strArea}</h3>
            <p>{strInstructions}</p>
            <a href={`https://www.themealdb.com/meal/${idMeal}`} target="_blank" className='links'>Get The Recipe</a>
            <a href={strYoutube}>Watch video</a>
       </div>
       
    </div>
  );
}
