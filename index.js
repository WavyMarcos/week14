const containerElement = document.querySelector('.container');

getRandomRecipe();

async function getRandomRecipe() {
    const response = await fetch('https://week11-bhfw.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageURL = recipe.recipe.imageurl;
    const recipeInstrcutions = recipe.recipe.instructions;
    const ingredientsArray =  recipe.ingredients;

    const recipeImage = document.createElement('img');
    const recipeNameTitle = document.createElement('h2');
    const instructionsBlock = document.createElement('p');
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientLIEelement = document.createElement('li');
        ingredientLIEelement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIEelement);
    });

    recipeImage.src = imageURL;
    recipeNameTitle.innerHTML = recipeName;
    instructionsBlock.innerHTML =  recipeInstrcutions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 2099 Rights Reserved';
    
    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);

    console.log(recipeName);
    console.log(imageURL);
};