import { Recipe } from './models/Recipe';
import Search from './models/Search';
import List from './models/List';
import Likes from './models/Likes';
import { elements , renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';

/**Global State of the app
 * - Search object
 * - Current Recipe object
 * - Shopping List Object
 * - Liked recipes
 */

const state = {};

/**
 * Search Controller
 */
async function controlSearch(){
    // 1) Get the query from view
    const query = searchView.getInput();

    if(query){
        // 2) create Search object and add to state
        state.search = new Search(query);

        // 3) prepare UI for the view
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
            // 4) Search the recipes
            await state.search.getResults();

            // 5) render result to the UI
            clearLoader();
            searchView.renderResult(state.search.result);
        }catch(err){
            alert("Error Processing Search");
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPage.addEventListener('click', e => {
    const btn = e.target.closest(".btn-inline");
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResult(state.search.result, goToPage);
    }
})

/**
 * Recipe Controller
 */
const controlRecipe = async () => {
    // Get ID from the url
    const id = window.location.hash.replace("#", "");

    if(id){
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Hightlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new Recipe Object
        state.recipe = new Recipe(id);

        try{
            // Get Recipe data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // render the recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
        } catch (err){
            alert("Error Processing Recipe!");
        }
    }
}
 
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * List Controller
 */
const controlList = () => {
    // create a new list IF there is none yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
};


/**
 * Like Controller
 */
 const controlLike = () => {
     if (!state.likes) state.likes = new Likes();
    
     const currentId = state.recipe.id;

     // User has NOT liked the current recipe
     if(!state.likes.isLiked(currentId)){

        // add like to the state
        const newLike = state.likes.addLike(
            currentId,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        
        // toggle the like button
        likesView.toggleLikeBtn(true);

        // add like to the UI list
        likesView.renderLike(newLike);

    // User has liked the current recipe
     } else {

        // remove like to the state
        state.likes.deleteLike(currentId);
        
        // toggle the like button
        likesView.toggleLikeBtn(false);

        // remove like to the UI list
        likesView.deleteLike(currentId);
     }
     
     likesView.togglelikeMenu(state.likes.getNumLikes());
 };


// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes 
    state.likes.readStorage();

    // toggle the likes menu
    likesView.togglelikeMenu(state.likes.getNumLikes());

    // render the existing liked recipes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});



// Handle delete and update List item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete Button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        // Delete from list
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);
    } else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
})

// Handle Recipe Button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        // Decrease button is clicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings('desc');
            recipeView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-increase, .btn-increase *')){
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        // Add Ingredients to Shopping List
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')){
        // Like Controller
        controlLike();
    }
})