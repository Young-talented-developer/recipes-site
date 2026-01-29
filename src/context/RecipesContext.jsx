import { createContext, useState } from "react"

export const RecipesContext=createContext()
export function RecipesProvider({children}){

    const[recipes, setRecipes]=useState([   
      {
        id: 1,
        name: 'שקשוקה',
        preparationTime: '15 דקות',
        category: 'פרווה',
        isFavorite: false,
        ingredients: ['ביצים', 'עגבניות', 'בצל', 'שום', 'פלפל']
      },
      {
        id: 2,
        name: 'פיצה',
        preparationTime: '45 דקות',
        category: 'חלבי',
        isFavorite: false,
        ingredients: ['קמח', 'מים', 'שמרים', 'גבינה', 'רוטב עגבניות']
      },
      {
        id: 3,
        name: 'פסטה',
        preparationTime: '25 דקות',
        category: 'חלבי',
        isFavorite: false,
        ingredients: ['פסטה', 'פסטו', 'גבינת פרמזן', 'שום']
      },
      {
        id: 4,
        name: 'סלט חסה',
        preparationTime: '10 דקות',
        category: 'פרווה',
        isFavorite: false,
        ingredients: ['חסה', 'עגבניות', 'מלפפונים', 'זיתים', 'תיבול']
      },
      {
        id: 5,
        name: 'שניצלים',
        preparationTime: '50 דקות',
        category: 'בשרי',
        isFavorite: false,
        ingredients: ['חזה עוף', 'ביצים', 'פירורי לחם', 'תיבול']
      },
      {
        id: 6,
        name: 'עוגיות שוקולד',
        preparationTime: '20 דקות',
        category: 'פרווה',
        isFavorite: false,
        ingredients: ['קמח', 'סוכר', 'שוקולד צ׳יפס', 'שמן', 'ביצים']
      },
      {
        id: 7,
        name: 'עוגת גבינה',
        preparationTime: '60 דקות',
        category: 'חלבי',
        isFavorite: false,
        ingredients: ['גבינה לבנה', 'סוכר', 'קמח', 'ביצים', 'וניל']
      },
      {
        id: 8,
        name: 'תפוחי אדמה',
        preparationTime: '30 דקות',
        category: 'פרווה',
        isFavorite: false,
        ingredients: ['תפוחי אדמה', 'שמן', 'מלח', 'תבלינים']
      }

    ])

    const toggleFavorite = (id) => {
      setRecipes(prevRecipes =>
        prevRecipes.map(r =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
        )
      )
    }

     return (
    <RecipesContext.Provider value={{ recipes, toggleFavorite, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  )
}

