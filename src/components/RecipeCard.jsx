import { Link } from 'react-router-dom'
import './RecipeCard.css'

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>

      <p> זמן הכנה: {recipe.preparationTime}</p>
      <p> קטגוריה: {recipe.category}</p>

      <Link to={`/recipe/${recipe.id}`} className="details-link">
        לצפייה במתכון →
      </Link>
    </div>
  )
}

export default RecipeCard
