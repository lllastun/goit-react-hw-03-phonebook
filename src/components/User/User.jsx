import css from './User.module.css';
import PropTypes from 'prop-types';

export function User({ user: { name, tel, id }, deleteUser }) {
  return (
    <div className={css.wrap}>
      <p className={css.userAvatar}></p>
      <div>
        {name}: {tel}
      </div>
      <div>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
    </div>
  );
}
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteUser: PropTypes.func.isRequired,
};
