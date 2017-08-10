import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions';
import Language from '../components/Language';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter));
//   },
// });

const FilterLanguage = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Language);

export default FilterLanguage;
