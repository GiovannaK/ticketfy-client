import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

export const Title = styled(Typography)`
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  color: ${(props) => props.theme.palette.primary.dark};
  ${(props) => props.theme.breakpoints.up('xs')} {
    font-size: ${(props) => props.theme.spacing(1)};
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: ${(props) => props.theme.spacing(1.6)};
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: ${(props) => props.theme.spacing(1.8)};
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: ${(props) => props.theme.spacing(2)};
  }
`;
export const ButtonSlide = styled(Button)`
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: 80%;
  right: 50%;
  transform: translate(50%, -80%);
  ${(props) => props.theme.breakpoints.up('xs')} {
    font-size: ${(props) => props.theme.spacing(0.8)};
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: ${(props) => props.theme.spacing(1.1)};
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: ${(props) => props.theme.spacing(1.2)};
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: ${(props) => props.theme.spacing(1.4)};
  }
`;
