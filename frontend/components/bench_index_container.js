import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { selectBenches } from '../reducers/selectors';
import {requestBenches } from '../actions/bench_actions';

const mapStateToProps = state => ({
  benches: selectBenches(state)
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
