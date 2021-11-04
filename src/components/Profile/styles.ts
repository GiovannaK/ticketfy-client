import { Avatar, Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const CardProfile = styled(Card)`
  background: rgba(131,56,236,0.3);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`
export const AvatarUser = styled(Avatar)`
  width: 50%;
  height: 50%;
`
export const ProfileTitle = styled(Typography)`
  color: ${props => props.theme.palette.primary.light};
  text-transform: uppercase;
  font-weight: 700;
`

export const ButtonStripe = styled(Button)`
  color: ${props => props.theme.palette.secondary.main};
  border-color: ${props => props.theme.palette.secondary.main};
  width: 100%;

  &:hover{
    border-color: ${props => props.theme.palette.secondary.main};
  }
`

export const ButtonData = styled(Button)`
  color: ${props => props.theme.palette.primary.main};
  border-color: ${props => props.theme.palette.primary.main};
  width: 100%;

  &:hover{
    border-color: ${props => props.theme.palette.primary.main};
  }
`
