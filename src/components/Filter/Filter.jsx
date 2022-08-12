import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contscts-operations';
import { filterSelector } from 'redux/contacts/contacts-selectors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';

//---------------------------------------------------------------//
const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          name="name"
          onChange={e => dispatch(filterUser(e.target.value))}
          value={filter}
          className="input"
        />
      </label>
      <NavLink to="/goit-react-hw-08-phonebook/contacts" className={s.linkup}>
        <KeyboardArrowUpIcon sx={{ fontSize: 60, color: 'blue' }} />
      </NavLink>
    </div>
  );
};

export { Filter };
