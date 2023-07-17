import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Filter/filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice.js';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));
  return (
  <div>
    <label className={style.label_filter} htmlFor=""> Filtr by Name</label>
    <input 
    className={style.input_filter} 
    type="text" 
    value={filter}
    onChange={handleFilterChange} />
  </div>
  
);
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
