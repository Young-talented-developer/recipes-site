import './AppBar.css'
import { useState } from 'react';
import { RecipesProvider } from '../context/RecipesContext';

function RecipeForm({ onAddRecipe, onCancel }) {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    preparationTime: '',
    category: '',
    ingredients: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now(); 
    const ingredientsArray = newRecipe.ingredients.split(',').map(i => i.trim());
    onAddRecipe({ ...newRecipe, id, isFavorite: false, ingredients: ingredientsArray });
    setNewRecipe({ name: '', preparationTime: '', category: '', ingredients: '' });
    onCancel(); 
  };

  return (
  <div className="recipe-form-overlay">
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>הוספת מתכון חדש</h2>

      <input
        name="name"
        value={newRecipe.name}
        onChange={handleChange}
        placeholder="שם המתכון"
        required
      />

      <input
        name="preparationTime"
        value={newRecipe.preparationTime}
        onChange={handleChange}
        placeholder="זמן הכנה"
        required
      />

      <input
        name="category"
        value={newRecipe.category}
        onChange={handleChange}
        placeholder="קטגוריה"
        required
      />

      <input
        name="ingredients"
        value={newRecipe.ingredients}
        onChange={handleChange}
        placeholder="רכיבים (מופרדים בפסיקים)"
        required
      />

      <div className="recipe-form-buttons">
        <button type="button" onClick={onCancel}>ביטול</button>
        <button type="submit">שמור מתכון</button>
      </div>
    </form>
  </div>
)

}

export default RecipeForm;


