import axios from'axios';

export const FETCH_CAT_START = 'FETCH_CAT_START';
export const FETCH_CAT_WIN = 'FETCH_CAT_WIN';
export const FETCH_CAT_LOSE = 'FETCH_CAT_LOSE';

export const getCat = () => dispatch => {

  console.log('action');

//   dispatch ({
    // type: FETCH_CAT_START
//   });

  axios
    .get ('https://api.thecatapi.com/v1/images/search')
  
    .then (
        response => 
            console.log(response),
            // dispatch ({ 
                // type: FETCH_CAT_WIN, 
                // payload: response.data.results
            // }) 
    )
  
    .catch (
        error => 
            console.log('no get axios cat', error),
            // dispatch ({ 
                // type: FETCH_CAT_LOSE, 
                // payload: error
            // }) 
    )
};

export const FETCH_COCKTAIL_START = 'FETCH_COCKTAIL_START';
export const FETCH_COCKTAIL_WIN = 'FETCH_COCKTAIL_WIN';
export const FETCH_COCKTAIL_LOSE = 'FETCH_COCKTAIL_LOSE';

export const getCocktail = () => dispatch => {

  console.log('action');
  
//   dispatch ({
    // type: FETCH_COCKTAIL_START
//   });

  axios
    .get  ('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  
    .then (
        response => 
            console.log(response),
            // dispatch ({ 
                // type: FETCH_COCKTAIL_WIN, 
                // payload: response.data.results
            // }) 
    )

    .catch (
        error => 
            console.log('no get axios cocktail', error),
            // dispatch ({ 
                // type: FETCH_COCKTAIL_LOSE, 
                // payload: error
            // })
    )

};

