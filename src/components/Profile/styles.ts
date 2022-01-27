import { Avatar, Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const CardProfile = styled(Card)`
  background: linear-gradient(
    180deg,
    rgba(0, 79, 120, 0.6643032212885154) 42%,
    rgba(94, 0, 106, 0.742734593837535) 74%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
export const AvatarUser = styled(Avatar)`
  width: 35%;
  height: 35%;
`;
export const ProfileTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.light};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${(props) => props.theme.spacing(2)};
`;

export const ButtonStripe = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.main};
  border-color: ${(props) => props.theme.palette.secondary.main};
  width: 100%;

  &:hover {
    border-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const ButtonData = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
  border-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;

  &:hover {
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`;
