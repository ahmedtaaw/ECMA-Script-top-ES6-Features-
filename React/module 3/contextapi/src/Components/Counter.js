import { useMealsListContext } from "../Providers/MealsProvider";

const Counter = ()=>{
    const { meals }=useMealsListContext()

    return(
        <div>
            <h3>Number of Meals Today is: {meals.length}</h3>
        </div>
    )
}

export default Counter