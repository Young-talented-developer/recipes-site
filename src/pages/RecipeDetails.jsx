import './RecipeDetails.css'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { RecipesContext } from '../context/RecipesContext'



function RecipeDetails() {
  const { id } = useParams();
  const { recipes, setRecipes } = useContext(RecipesContext)
  const [recipe, setRecipe] = useState(null)


  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id, recipes])

  if (!recipe) return <p>מתכון לא נמצא</p>;

  const toggleFavorite = () => {
    
    setRecipes(prevRecipes =>
      prevRecipes.map(r =>
        r.id === recipe.id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    )

//עדכון בשביל שהכפתור יתעדכן מייד
    setRecipe(prev => ({ ...prev, isFavorite: !prev.isFavorite }))
  }

  return (
    <div className="recipe-details">
    <div>
      <h2>{recipe.name}</h2>
      <p>זמן הכנה: {recipe.preparationTime}</p>
      <p>קטגוריה: {recipe.category}</p>

      <button onClick={toggleFavorite}>
        {recipe.isFavorite ? '⭐ מועדף' : '☆ סימן מועדף'}
      </button>

      {recipe.ingredients && (
        <ul>
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default RecipeDetails
