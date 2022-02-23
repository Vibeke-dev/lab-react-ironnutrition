// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  //const [deleteFood, setDeletedFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    setFood(updatedFood);
  };

  //DELETE function
  const deleteFood1 = (foodName) => {
    //const foodCopy = [...deleteFood]
    const foodCopy = [...food]

    const filterFood = foodCopy.filter((food) => {
        return food.name !== foodName;
      });
      console.log(filterFood)
      //setDeletedFood(filterFood)
      setFood(filterFood)
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((food, idx) => {
          return (
            <div key={idx}>
              {/* <h3> {food.name} </h3>
            <img src={food.image} alt="illustration" width="160" height="120" /> */}

              <FoodBox food={food} key={idx} deleteFood={deleteFood1} />
              
            </div>
          );
        })}
      </Row>
    </div>
  );
}
export default App;
