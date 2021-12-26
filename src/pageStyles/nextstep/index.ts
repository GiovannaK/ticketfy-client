import { Button, Card } from "@mui/material";
import { styled } from "@mui/system";

export const CardStyled = styled(Card)`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const ButtonData = styled(Button)`
  width: 100%;
  border-color: ${props => props.theme.palette.secondary.main};
  color: ${props => props.theme.palette.secondary.main};
  &:hover{
    border-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.secondary.main};
  }
`