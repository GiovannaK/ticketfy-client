import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardStyled = styled(Card)`
  background: rgb(26,0,78);
`

export const Title = styled(Typography)`
  text-align: center;
  color: ${props => props.theme.palette.secondary.main};
  font-size: ${props => props.theme.spacing(1.5)};
`