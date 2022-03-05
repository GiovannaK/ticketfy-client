import { Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const SideBarContainer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 80px;
    background: ${(props) => props.theme.palette.secondary.light};
    z-index: 20;
  }
`;

export const IconBtn = styled(IconButton)`
  margin-top: ${(props) => props.theme.spacing(4)};
`;
