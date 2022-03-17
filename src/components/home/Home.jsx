import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import './Home.css';
import { useEffect, useState } from 'react';

const Home = () => {

  

  const [nutrients, setNutrients] = useState('Carbs');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [number, setNumber] = useState(5);

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState([]);
  


  const handleForm = (e) => {
    e.preventDefault();

    let searches = {
      nutrients,
      minValue,
      maxValue,
      number
    }
    setSearch([searches]);
    setNutrients(nutrients);
    setMinValue(minValue);
    setMaxValue(maxValue);
    setNumber(number)
    
  }
  
//3b2bd99e69b4416ea49c93c21c515c2a

  const fetchFood = async () => {
        const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=dfbbf7ec1c184a23a5f44d1f98612b52&min${nutrients}=${minValue}&max${nutrients}=${maxValue}&number=${number}`;

        const response =  await fetch(url);
        const data = await response.json()
        setRecipe(data)
        // console.log(data)

  }

   useEffect(() => {
      fetchFood();
  }, [search])


  return (
    <>
    <div className="home">
      <Sidebar nutrients = {nutrients} setNutrients = {setNutrients} minValue = {minValue} setMinValue = {setMinValue} maxValue = {maxValue} setMaxValue = {setMaxValue} number = {number} setNumber = {setNumber} recipe = {recipe} setRecipe = {setRecipe} handleForm = {handleForm} />
      <Main nutrients = {nutrients} setNutrients = {setNutrients} minValue = {minValue} setMinValue = {setMinValue} maxValue = {maxValue} setMaxValue = {setMaxValue} number = {number} setNumber = {setNumber} recipe = {recipe} setRecipe = {setRecipe} handleForm = {handleForm} />
    </div>
    </>
  )
}

export default Home;