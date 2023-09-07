import AllIngredients from "./Ingredients"

export default function Home() {
    return (
    <>
    <div id="home-container">
    <h1>WELCOME HOME!</h1>
    <h1>What cha got in the fridge?</h1>
    </div>
    <div>
        <AllIngredients />
    </div>
    </>
    )
}