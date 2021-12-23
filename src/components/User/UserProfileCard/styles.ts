import { Avatar, Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const CardProfile = styled(Card)`
  background: rgb(89,0,149);
  background: -moz-linear-gradient(180deg, rgba(89,0,149,0.6643032212885154) 31%, rgba(0,194,175,0.5787037037037037) 59%);
  background: -webkit-linear-gradient(180deg, rgba(89,0,149,0.6643032212885154) 31%, rgba(0,194,175,0.5787037037037037) 59%);
  background: linear-gradient(180deg, rgba(89,0,149,0.6643032212885154) 31%, rgba(0,194,175,0.5787037037037037) 59%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#590095",endColorstr="#00c2af",GradientType=1);
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
