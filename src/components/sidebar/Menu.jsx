import './Menu.css';

const Menu = ({nutrients, setNutrients, minValue, setMinValue, maxValue, setMaxValue, number, setNumber, handleForm}) => {

  return (
    <>
    <div className="heading">
      <h1>Find your Nutrients</h1>
    </div>
    <div>
      <form onSubmit={handleForm}>
        <div className="nutrients">
            <div className='list'>
              <label htmlFor="">Carbohydrate : 
              <input 
              type="radio" 
              name="nutrients" 
              id="carbo" 
              value='Carbs'
              onChange={(e) => setNutrients(e.target.value)}
              />
              </label>
              <br />
              <label htmlFor="">Protein : 
              <input 
              type="radio" 
              name="nutrients" 
              id="Protein" 
              value='Protein'
              onChange={(e) => setNutrients(e.target.value)}
              />
              </label>
              
              </div>

              <div className='list'>
                Enter Minimum Value: 
                <input type="number"
              placeholder='Enter Minimum Amount'
              value={minValue}
              onChange = {e => setMinValue(e.target.value)}
              min = {0}
              max={90}
              required
              />
              </div>

              <div className='list'>
                Enter Maximum Value: 
                <input type="number"
              placeholder='Enter Maximum Amount'
              value={maxValue}
              onChange = {e => setMaxValue(e.target.value)}
              required
              min = {0}
              max={100}
              />
              </div>

              <div className='list'>
                <input type="range" 
                min="1"
                max= "10"
                value = {number}
                onChange = {e => setNumber(e.target.value)}
                /> {number}
              </div>
        </div>
        <input type="submit" value= "Save" />
    </form>
    </div>
    </>
  )
}

export default Menu;