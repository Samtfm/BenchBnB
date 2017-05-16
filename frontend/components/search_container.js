import {connect} from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  cool: 'cooool'
});

export default connect(
  mapStateToProps,
  null
)(Search);
