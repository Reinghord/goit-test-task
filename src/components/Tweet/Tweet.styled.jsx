import styled from '@emotion/styled';

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 460px;

  padding-top: 28px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledLogo = styled.img`
  width: 76px;
  height: 22px;

  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StyledPicture = styled.img`
  width: 308px;
  height: 168px;

  margin-inline: auto;
`;

export const StyledLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const StyledAvatar = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const StyledTextWrapper = styled.div`
  margin-top: 88px;
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const StyledButton = styled.button`
  font-weight: 600;

  display: flex;
  margin-inline: auto;
  margin-top: 26px;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  transition: 0.5s ease-in-out;
  transition-property: background;

  width: 196px;
  height: 50px;

  background: ${({ following }) => (following ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover,
  &:focus {
    background: ${({ following }) => (following ? '#439e7c' : '#a497b3')};
  }
`;
