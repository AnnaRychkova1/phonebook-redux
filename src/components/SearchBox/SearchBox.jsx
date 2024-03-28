import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeFilter(filter));
  return (
    <form>
      <label className={css.searchLabel}>
        <span>Find contacts by name</span>
        <input
          className={css.searchField}
          type="text"
          name="filter"
          value={filter}
          onChange={evt => handleFilterChange(evt.target.value)}
          placeholder="Search"
        />
      </label>
    </form>
  );
};

export default SearchBox;
