import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BenchReducer from './bench_reducer';
const RootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchReducer
});

export default RootReducer;
