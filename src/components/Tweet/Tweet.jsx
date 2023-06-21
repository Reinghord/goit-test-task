import Picture from '../../assets/picture2.png';
import Logo from '../../assets/goit_logo.svg';
import { useDispatch } from 'react-redux';
import { followUser, getUsers } from '../../redux/users/users-operation';
import PropTypes from 'prop-types';
import {
  Box,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledButton,
  StyledLine,
  StyledLogo,
  StyledPicture,
  StyledText,
  StyledTextWrapper,
} from './Tweet.styled';

function Tweet({ user }) {
  const dispatch = useDispatch();
  return (
    <Box>
      <StyledLogo src={Logo} alt="Logo" />
      <StyledPicture src={Picture} alt="Picture" />
      <StyledLine />
      <StyledAvatarWrapper>
        <StyledAvatar src={user.avatar} alt="User Avatar" />
      </StyledAvatarWrapper>
      <StyledTextWrapper>
        <StyledText>{user.tweets.toLocaleString()} TWEETS</StyledText>
        <StyledText>{user.followers.toLocaleString()} FOLLOWERS</StyledText>
      </StyledTextWrapper>
      <StyledButton
        onClick={() => {
          dispatch(followUser(user))
            .unwrap()
            .then(() => {
              dispatch(getUsers());
            });
        }}
        following={user.following}
        type="button"
      >
        {user.following ? 'FOLLOWING' : 'FOLLOW'}
      </StyledButton>
    </Box>
  );
}

Tweet.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }),
};

export default Tweet;
