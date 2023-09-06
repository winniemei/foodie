export default function MyPantry({ checkedPantryIngredients, ingredients }) {

    const checkedPantryIngredientsArray = [...checkedPantryIngredients]

    return (
        <>
            {checkedPantryIngredientsArray.map((pantryIngredient) => {
                // if the pantry ingredient id matches in the ingredients_id, display the ingredient name
                return (
                    <div id="each-pantry-ingredient">
                        <p>{ingredients.find((ingredient) => ingredient.ingredients_id === pantryIngredient).name}</p>
                    </div>
                )
            })}
        </>
    )
}