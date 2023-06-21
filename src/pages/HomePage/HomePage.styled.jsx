import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 28px;
`;

export const StyledP = styled.p`
  font-size: 20px;
  line-height: 1.2;

  color: #ebd8ff;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  margin-top: 26px;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  transition: 0.5s ease-in-out;
  transition-property: background;

  width: 70px;
  height: 50px;

  color: #ebd8ff;
  background: #5736a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover,
  &:focus {
    background: #439e7c;
  }

  &:visited {
    color: #ebd8ff;
  }
`;
