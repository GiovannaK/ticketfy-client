import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Title = styled(Typography)`
  text-align: center;
  color: ${props => props.theme.palette.primary.dark};
  font-size: ${props => props.theme.spacing(1.5)};
  text-transform: uppercase;
  font-weight: bold;
`

export const AccessButton = styled(Button)`
  width: 100%;
  color: ${props => props.theme.palette.primary.dark};
  border-color: ${props => props.theme.palette.primary.dark};

  &:hover {
    color: ${props => props.theme.palette.primary.dark};
    border-color: ${props => props.theme.palette.primary.dark};
  }
`