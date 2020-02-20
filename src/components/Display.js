import React from 'react';
import { connect } from 'react-redux';
import { getCat, getCocktail } from '../actions';


export default function Display(props) {

  // return (
  //   null
  // )
const CatShow = props => {
  const fetchCat = e => {
    e.preventDefault();
    props.getCat();
  };

  return (
    <>
       <h2>Welcome to A-P-I!</h2>
        {props.isFetching && <p>Fetching a Cat</p>} 
        <div> 
          {props.cats.map(cat => ( 
           <h4 key={cat.id}>{cat.breed}</h4> 
         ))}
        </div>
       {props.error && <p className="error">{props.error}</p>}
       <button onClick={fetchCat}>Show A Cat!</button>
     </>
  );
};

const CocktailHour = props => {
      const fetchCocktail = e => {
          e.preventDefault();
          props.getCocktail();
      };

      return(
          <>
             <h2>Have A Drink!</h2>
             {props.isFetching && <p>Fetching A Cocktail!</p>}
             <div>
                 {props.cocktail.map(cocktail => (
                     <h4 key={cocktail.id}>{cocktail.name}</h4>
                 ))}
             </div>
             {props.error && <p className='error'>{props.error}</p>}
             <button onClick={fetchCocktail}>Show A Cocktail!</button>
           </>
      )
   }
}


const mapStateToProps = state => ({
    cat: state.cat,
    error: state.error,
    isFetching: state.isFetching
  });
  
export connect(
    mapStateToProps,
    { getCat }
)(CatShow);

export connect(
    mapStateToProps,
    { getCocktail }
  )(CocktailHour);
  
