import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch&apiKey=c709dbc99a1e437d81df2d7a9163f865&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  const { type } = useParams(); // extract the "type" parameter from the route

  useEffect(() => {
    getCuisine(type);
    console.log(type);
  }, [type]);

  return (
    <div>
      {cuisine.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
