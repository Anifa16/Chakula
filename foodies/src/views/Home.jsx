import React, { useState } from 'react';

export default function Home() {
  const [meal, setMeal] = useState(null);

  const getMeal = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  const createMeal = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        // I want to breakout we have no more ingredients
        break;
      }
    }

    return (
      <div className="row">
        <div className="fircal">
          <div className='divs'>
            <div className='imags'>
              <img src={meal.strMealThumb} alt="imags"  /> 
            </div>
            <div className='instraction'>
              <h4 className='title'>{meal.strMeal}</h4>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
          <div className="names">
            {meal.strCategory && (
              <p>
                <strong>Category:</strong> {meal.strCategory}
              </p>
            )}
            {meal.strArea && (
              <p>
                <strong>Area:</strong> {meal.strArea}
              </p>
            )}
            {meal.strTags && (
              <p>
                <strong>Tags:</strong>{' '}
                {meal.strTags.split(',').join(', ')}
              </p>
            )}
          </div>
          <div className="vides">
            <h5 className='ingrent'>Ingredients:</h5>
            <ul className='ls'>
              {ingredients.map((ingredient) => (
                <li className='lis' key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {meal.strYoutube && (
            <div class="row">
              <h1>Video Recipe</h1>
              <br />
              <div class="videoWrapper">
                <iframe width="420" height="315"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
                </iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="about">
      <div className="center">
        <h1>What would you like to eat today?</h1>
        <br />
        <h3>Get a random meal by clicking below</h3>
        <br />
        <br />
        <button className="centbtn" onClick={getMeal}>Cook Now</button>
      </div>
      {meal && <div id="meal" className="meal">{createMeal()}</div>}
    </div>
  );
}
