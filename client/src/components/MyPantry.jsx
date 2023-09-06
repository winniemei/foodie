import AllIngredients from "./Ingredients";

export default function MyPantry({ checkedPantryIngredients, ingredients }) {

    const checkedPantryIngredientsArray = [...checkedPantryIngredients]
    console.log(checkedPantryIngredientsArray);

    // filter out ingredients that are not pantry ingredients
    const validIngredients = checkedPantryIngredientsArray.filter((pantryIngredient) => {
        for (const ingredient of ingredients) {
            if (ingredient.ingredients_id === pantryIngredient) {
                return true;
            }
        }
        return false;
    })
    return (
        <>
            {validIngredients.map((pantryIngredient) => {
                return (
                    <div id="each-pantry-ingredient">
                        <p>{ingredients.find((ingredient) => ingredient.ingredients_id === pantryIngredient).name}</p>
                    </div>
                )
            })}
        </>
    )
}