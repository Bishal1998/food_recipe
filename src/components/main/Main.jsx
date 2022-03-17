import Search from "./Search";
import Personalize from './Personalize'
import './Main.css';

const Main = ({nutrients, setNutrients, minValue, setMinValue, maxValue, setMaxValue, number, setNumber, recipe, setRecipe, handleForm}) => {
  return (
    <>
    <div className="main">
      <h1>Main</h1>
        <Search />
        <Personalize nutrients = {nutrients} setNutrients = {setNutrients} minValue = {minValue} setMinValue = {setMinValue} maxValue = {maxValue} setMaxValue = {setMaxValue} number = {number} setNumber = {setNumber} recipe = {recipe} setRecipe = {setRecipe} handleForm = {handleForm} />
        {/* <Popular /> */}
    </div>
    </>
  )
}

export default Main;