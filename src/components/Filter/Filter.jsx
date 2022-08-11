import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contscts-actions';
import { filterSelector } from 'redux/contacts/contacts-selectors';
//---------------------------------------------------------------//
const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
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
  );
};

export { Filter };
