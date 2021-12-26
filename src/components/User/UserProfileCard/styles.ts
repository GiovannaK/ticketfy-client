import { Avatar, Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const CardProfile = styled(Card)`
  background: rgb(16,188,233);
  background: -moz-linear-gradient(180deg, rgba(16,188,233,1) 0%, rgba(101,0,172,1) 43%, rgba(3,29,84,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(16,188,233,1) 0%, rgba(101,0,172,1) 43%, rgba(3,29,84,1) 100%);
  background: linear-gradient(180deg, rgba(16,188,233,1) 0%, rgba(101,0,172,1) 43%, rgba(3,29,84,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#10bce9",endColorstr="#031d54",GradientType=1);
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
  font-size: ${props => props.theme.spacing(2)};
`

export const ButtonData = styled(Button)`
  color: ${props => props.theme.palette.secondary.main};
  border-color: ${props => props.theme.palette.secondary.main};
  width: 100%;

  &:hover{
    border-color: ${props => props.theme.palette.secondary.main};
  }
`
