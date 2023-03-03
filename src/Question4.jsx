import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      };
      case 'reset':
        return{
            count: state.count = 0
        }
        case 'decrement':
            return{
                count: state.count-1
            }
    default:
      return state;
  }
}

export default function Question4() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };
  const handleReset = ()=>{
    dispatch({type:'reset'})
  }
  const handleDecrement =()=>{
    dispatch({type:'decrement'})
  }

  return (
    <div id='Question4'>
      <h2>The Count is {state.count}</h2>
      <button onClick={handleIncrement} onMouseEnter={handleDecrement}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque exercitationem ducimus incidunt magnam laborum? Quam modi adipisci nisi est voluptate illo dolorem, quaerat fuga dolore nostrum voluptatum, impedit, iure odio?</button>
      <button onClick={handleReset}>ResetCount</button>
    </div>
  );
}