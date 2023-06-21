import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/users/users-selectors';
import { filterSelection } from '../../redux/users/users-reducer';
import Select from 'react-select';
import { Box, StyledIcon } from './Filter.styled';

const options = [
  { value: 'Show All', label: 'Show All' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Following', label: 'Following' },
];

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSelectFilter = e => dispatch(filterSelection(e.value));
  return (
    <Box>
      <label htmlFor="filter">
        <StyledIcon />
      </label>
      <Select
        options={options}
        defaultValue={{ value: filter, label: filter }}
        onChange={onSelectFilter}
      />
    </Box>
  );
}

export default Filter;
