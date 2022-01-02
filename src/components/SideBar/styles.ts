import { Drawer, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const SideBarContainer = styled(Drawer)`
  .MuiDrawer-paper{
    width: 80px;
    background: ${props => props.theme.palette.secondary.light};
  }
`;

export const IconBtn = styled(IconButton)`
  margin-top: ${props => props.theme.spacing(4)};
`


