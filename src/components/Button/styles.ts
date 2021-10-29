import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonStyled = styled(Button)`
  background: ${props => props.theme.palette.secondary.main};
`