
const recipe = {
    title: "Empapadas caseras",
    portions: 2,
    ingredients: ["Harina", "Agua", "Carne"]
}

for (let ingredeint in recipe) {
    console.log(ingredeint + ": " + recipe[ingredeint])
}
// for (let i = 0; i <= recipe.ingredients.length; i++){
    // console.log(recipe.ingredients[i])
// }