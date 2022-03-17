import './Personalize.css';


const Personalize = ({nutrients, recipe }) => {


  // const fetchFood = async () => {
  //       const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=0&min${nutrients}=${minValue}&max${nutrients}=${maxValue}&number=${number}`;

  //       const response =  await fetch(url);
  //       const data = await response.json()
  //       setRecipe(data)
  //       // console.log(data)

  // }

  return (
    recipe.length ?
    <div className="personalize">
      
      <h3>Here are your favourite cuisines</h3>
        <div className="carosual">
          {recipe.map((r) => {
            return(
              <div  className="desc" key={r.id}>
              {console.log(r)}
              {nutrients == 'Carbs' ?
              <div>
            <img className='img' src={r.image} alt={r.title} />
            <h3>{r.title}</h3>
            <p>Calories : {r.calories}</p>
            <p>Protein : {r.protein}</p>
            <p style={{ fontWeight : 'bold'}}>Carbohydrate :  {r.carbs} </p>
            <p>Fat : {r.fat}</p>
          </div>

          : 
          
          <div>
            <img className='img' src={r.image} alt={r.title} />
            <h3>{r.title}</h3>
            <p>Calories : {r.calories}</p>
            <p style={{ fontWeight : 'bold'}}>Protein : {r.protein}</p>
            <p>Carbohydrate : {r.carbs}</p>
            <p>Fat : {r.fat}</p>
          </div>
            }
              </div>
            );
          })}
        </div>
    </div>
    : 
    <h1>No Data Found</h1>
  )
}

export default Personalize;

