import { combineReducers } from 'redux';
import CalculatorReducer from './CalculatorReducer';

export default combineReducers({
    calculator: CalculatorReducer
})