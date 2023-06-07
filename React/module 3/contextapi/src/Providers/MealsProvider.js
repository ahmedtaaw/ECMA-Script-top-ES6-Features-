import React from 'react';

const MealContext = React.createContext();

const todayMeals = [
    "Baked Beans",
    "Baked Sweet Potatoes",
    "Baked Potates"
]

const MealsProvider = ({children})=>{
    const [ meals , setMealsList] = React.useState(todayMeals);

    return(
        <MealContext.Provider value={{meals}}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealContext);

export default MealsProvider