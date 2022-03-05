import { SpeedDial } from '@mui/material';
import { styled } from '@mui/system';

export const SpeedCustom = styled(SpeedDial)`
  position: fixed;
  bottom: ${(props) => props.theme.spacing(2)};
  right: ${(props) => props.theme.spacing(2)};
`;
