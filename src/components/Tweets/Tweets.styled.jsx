import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  margin-inline: auto;
  margin-top: 26px;
  margin-bottom: 26px;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  transition: 0.5s ease-in-out;
  transition-property: background;

  width: 196px;
  height: 50px;

  color: #ebd8ff;
  background: #5736a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover,
  &:focus {
    background: #439e7c;
  }
`;
