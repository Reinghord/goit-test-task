import Tweet from '../Tweet/Tweet';
import { selectFilter, selectUsers } from '../../redux/users/users-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { StyledButton } from './Tweets.styled';

function Tweets() {
  const [sliceEnd, setSliceEnd] = useState(3);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  const filteredUsers = filter => {
    switch (filter) {
      case 'Show All':
        return users;
      case 'Follow':
        return users.filter(user => user.following === false);
      case 'Following':
        return users.filter(user => user.following === true);
      default:
        return users;
    }
  };

  return (
    <>
      <ul>
        {filteredUsers(filter)
          .slice(0, sliceEnd)
          .map(user => (
            <li key={user.id}>
              <Tweet user={user} />
            </li>
          ))}
      </ul>

      {filteredUsers(filter).length >= sliceEnd && (
        <StyledButton
          type="button"
          onClick={() => {
            setSliceEnd(sliceEnd + 3);
          }}
        >
          LOAD MORE
        </StyledButton>
      )}
    </>
  );
}

export default Tweets;
