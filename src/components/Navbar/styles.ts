import { AppBar, Button } from "@mui/material";
import { styled } from "@mui/system";

export const AppBarStyled = styled(AppBar)`
  background: transparent;
  height: 7vh;
  box-shadow: none;
`
export const LoginButton = styled(Button)`
  background: ${props => props.theme.palette.primary.light};
  font-size:  ${props => props.theme.spacing(1.2)};
  color:  ${props => props.theme.palette.text.primary};
`
export const RegisterButton = styled(Button)`
  color:  ${props => props.theme.palette.primary.dark};
  margin-right: ${props => props.theme.spacing(4)};
  font-size:  ${props => props.theme.spacing(1.2)};
`