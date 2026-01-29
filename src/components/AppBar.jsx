 import './AppBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

function AppBar() {
  const navigate = useNavigate()
  const [recipeId, setRecipeId] = useState('')
  const { recipes } = useContext(RecipesContext)
  const [error, setError] = useState('')

  const handleGo = () => {
    const idNum = parseInt(recipeId)
    const exists = recipes.some(r => r.id === idNum)

    if (exists) {
      navigate(`/recipe/${idNum}`)
      setRecipeId('')
      setError('')
    } else {
      setError('לא נמצא מתכון עם מזהה זה')
    }
  };

  return (
    <div className="nav">
      <Link to="/">בית</Link>
      <Link to="/recipes-list">המתכונים שלנו</Link>

      <input
        type="number"
        placeholder="הכנס מזהה מתכון"
        value={recipeId}
        onChange={(e) => setRecipeId(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleGo}>עבור למתכון</button>
      {error && <span style={{ color: 'red', marginLeft: '10px' }}>{error}</span>}

      <Link to="/login">התחבר/הרשם</Link>
    </div>
  );
}

export default AppBar;



