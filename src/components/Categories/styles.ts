import { AppBar, Tab } from "@mui/material";
import { styled } from "@mui/system";

export const AppBarCategory = styled(AppBar)`
  background: ${props => props.theme.palette.secondary.light};
  margin-top: 5vh;
  padding: ${props => props.theme.spacing(0.5)};
  border-radius: 10px;
`

export const TabCategory = styled(Tab)`
  color: ${props => props.theme.palette.text.primary};
`