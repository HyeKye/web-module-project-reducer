import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import {useReducer} from 'react';
import reducer, {initialState} from'../reducers/index'; 
import { addOne, applyNumber } from '../actions/index';
import { changeOperation, clearDisplay, memoryAdd, memoryTotal, memoryClear } from '../actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleAdd1 = () => {
    dispatch(addOne())
  }

  const handleApply = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(memoryAdd())
  } 

  const handleMemoryTotal = () => {
    dispatch(memoryTotal())
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={handleMemoryTotal}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApply(1)}/>
              <CalcButton value={2} onClick={() => handleApply(2)}/>
              <CalcButton value={3} onClick={() => handleApply(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApply(4)}/>
              <CalcButton value={5} onClick={() => handleApply(5)}/>
              <CalcButton value={6} onClick={() => handleApply(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApply(7)}/>
              <CalcButton value={8} onClick={() => handleApply(8)}/>
              <CalcButton value={9} onClick={() => handleApply(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
