import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardTicket = styled(Card)`
  background: linear-gradient(180deg, rgba(93,2,113,1) 0%, rgba(0,112,120,0.742734593837535) 100%);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    opacity: 0.7
  }
`
export const TitleTicket = styled(Typography)`
  color: ${props => props.theme.palette.secondary.main};
  font-size: ${props => props.theme.spacing(1.5)};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`
export const Price = styled(Typography)`
  color: #2AD3DB;
  font-size: ${props => props.theme.spacing(1.3)};
  text-align: start;
`

export const Locale = styled(Typography)`
  font-size: ${props => props.theme.spacing(1.3)};
  color: ${props => props.theme.palette.primary.light};
  text-align: start;
`

export const Date = styled(Typography)`
  font-size: ${props => props.theme.spacing(1.1)};
  text-align: end;
`

export const Hour = styled(Typography)`
  text-align: end;
  color: #FF0500;

`
export const Active = styled(Typography)`
  text-align: center;
  color: #FFB400;
`
