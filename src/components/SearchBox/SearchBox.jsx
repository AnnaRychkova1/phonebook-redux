import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik } from 'formik';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeFilter(filter));
  return (
    <Formik initialValues={''} onSubmit={() => {}}>
      <label className={css.searchLabel}>
        <span>Find contacts by name</span>
        <Field
          className={css.searchField}
          type="text"
          name="filter"
          value={filter}
          onChange={evt => handleFilterChange(evt.target.value)}
          placeholder="Search"
        />
      </label>
    </Formik>
  );
};

export default SearchBox;
