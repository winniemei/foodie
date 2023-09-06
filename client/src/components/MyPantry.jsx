import AllIngredients from "./Ingredients";

export default function MyPantry({ checkedPantryIngredients, ingredients }) {

    const checkedPantryIngredientsArray = [...checkedPantryIngredients]

    return (
        <>
            {checkedPantryIngredientsArray.map((pantryIngredient) => {
                return (
                    <div id="each-pantry-ingredient">
                        <p>{ingredients.find((ingredient) => ingredient.ingredients_id === pantryIngredient).name}</p>
                    </div>
                )
            })}
        </>
    )
}