import PropTypes from 'prop-types'
import {StyledSearchWrapper, StyledSearchLabel, StyledSearchInput} from './Search.Styled'
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/contactsFilterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const {control} = useForm();
  
  const handleFilterChange  = e => {
    dispatch(filter(e.target.value));
  };

  const searchValue = useWatch({
    control,
    name: 'search',
    defaultValue: '',
  });

return (
<StyledSearchWrapper>
      <StyledSearchLabel htmlFor="search">Find contacts by name</StyledSearchLabel>
      <Controller control={control}
        name='search'
        value={searchValue}
        render={({ field }) => (
      <StyledSearchInput
        type="text"
        value={field.value}
        onChange={handleFilterChange}/>
      )} />
    </StyledSearchWrapper>)} 


Search.propTypes = {
      filter: PropTypes.string,
      handleFilterChange: PropTypes.func,
}