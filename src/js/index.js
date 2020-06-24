// Global app controller

    import axios from "axios";

    async function getResults(query) {
        try {
            const res = await axios(
                `https://forkify-api.herokuapp.com/api/search?&q=${query}`
            );
            const recipes = res.data.recipes;
            console.log(recipes);
        } catch (error) {
            alert(error);
        }
    }
    getResults('radish');