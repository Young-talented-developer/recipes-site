import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import AppBar from './components/AppBar'
import Home from './pages/Home'
import RecipesList from './pages/RecipesList'
import Login from './pages/Login'
import { RecipesProvider } from './context/RecipesContext'
import RecipeDetails from './pages/RecipeDetails'
import { UserProvider } from './context/UserContext'

function App() {
 
  return (
   
      <div>
        <RecipesProvider>
          <BrowserRouter>
            <UserProvider>
                <AppBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/recipes-list" element={<RecipesList />} />
                  <Route path="/recipe/:id" element={<RecipeDetails />} />    
                </Routes>
            </UserProvider>
          </BrowserRouter>
       </RecipesProvider>
           
      </div>
    
  )
}

export default App
