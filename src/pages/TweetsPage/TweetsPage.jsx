import Tweet from '../../components/Tweets/Tweets';
import Filter from '../../components/Filter/Filter';
import { StyledLink } from './TweetsPage.styled';
import { Box } from './TweetsPage.styled';

function TweetsPage() {
  return (
    <Box>
      <StyledLink to="/">BACK</StyledLink>
      <Filter />
      <Tweet />
    </Box>
  );
}

export default TweetsPage;
