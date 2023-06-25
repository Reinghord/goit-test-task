import Tweets from '../../components/Tweets/Tweets';
import Filter from '../../components/Filter/Filter';
import { StyledLink } from './TweetsPage.styled';
import { Box } from './TweetsPage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/users/users-operation';

function TweetsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box>
      <StyledLink to="/">BACK</StyledLink>
      <Filter />
      <Tweets />
    </Box>
  );
}

export default TweetsPage;
