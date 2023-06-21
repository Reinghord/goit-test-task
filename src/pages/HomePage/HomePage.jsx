import { Box, StyledLink, StyledP } from './HomePage.styled';

function HomePage() {
  return (
    <Box>
      <StyledP>Welcome to GOIT Test Task!</StyledP>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </Box>
  );
}

export default HomePage;
