import { ColorRing } from 'react-loader-spinner';
import { StyledBox } from './SuspenseComponent.styled';

function SuspenseComponent() {
  return (
    <StyledBox>
      <ColorRing />
    </StyledBox>
  );
}

export default SuspenseComponent;
