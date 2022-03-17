import Menu from "./Menu";
import Top from "./Top";
import './Sidebar.css';


const Sidebar = ({nutrients, setNutrients, minValue, setMinValue, maxValue, setMaxValue, number, setNumber, recipe, setRecipe, handleForm}) => {
  return (
    <>
    <div className="sidebar">
        <Top />
        <Menu nutrients = {nutrients} setNutrients = {setNutrients} minValue = {minValue} setMinValue = {setMinValue} maxValue = {maxValue} setMaxValue = {setMaxValue} number = {number} setNumber = {setNumber} recipe = {recipe} setRecipe = {setRecipe} handleForm = {handleForm}/>
    </div>
    </>
  )
}

export default Sidebar;