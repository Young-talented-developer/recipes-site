import { useContext, useState } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import RecipeForm from '../components/RecipeForm'
import RecipeCard from '../components/RecipeCard'
import './RecipesList.css'

function RecipesList() {
  const { recipes, setRecipes } = useContext(RecipesContext)
  const [showForm, setShowForm] = useState(false)

  const handleAddRecipe = (recipe) => {
    setRecipes(prev => [...prev, recipe])
  }

  return (
    <div>
      <button onClick={() => setShowForm(true)}>הוסף מתכון חדש</button>

      {showForm && (
        <RecipeForm
          onAddRecipe={handleAddRecipe}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="recipes-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default RecipesList
