import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ setFilter }) {
  return (
    <div className={css.wrapFilter}>
      <div className={css.p}>Find contacts by name</div>
      <input type="text" placeholder="Search" onChange={setFilter} />
    </div>
  );
}
export default Filter;

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
