import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
//----------------------------------------------------//
const ContactItem = ({ name, phone, onDelete, id }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p className={s.tel}>{phone}</p>
      <button type="button" onClick={() => onDelete(id)} className="btn">
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export { ContactItem };
