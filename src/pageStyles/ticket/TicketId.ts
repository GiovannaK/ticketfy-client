import { Card, InputBase, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Title = styled(Typography)`
  color: ${props => props.theme.palette.primary.dark};
  font-weight: bold;
  text-transform: uppercase;
`

export const CardStyled = styled(Card)`
  min-height: 80%;
  width: 100%;
  background: rgba(0,0,0,0.3);
`

export const Hour = styled(Typography)`
color: ${props => props.theme.palette.primary.main};
`

export const Date = styled(Typography)`
color: ${props => props.theme.palette.primary.light};
`

export const Locale = styled(Typography)`
color: ${props => props.theme.palette.secondary.main};
`

export const Price = styled(Typography)`
color: ${props => props.theme.palette.text.primary};
text-align: center;
font-size: ${props => props.theme.spacing(2)};
`
export const Premiun = styled(Typography)`
color: #EFB32A;
`
export const Standard = styled(Typography)`
color: #23B24C;
`

export const InputTicket = styled(InputBase)`
  border: 2px solid;
  border-color: ${props => props.theme.palette.primary.dark};
  border-radius: 10px;
  width: 100%;
  padding: ${props => props.theme.spacing(0.7)};
  font-size: ${props => props.theme.spacing(1.3)};
  margin-bottom: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(2.5)};
`
export const BuyButton = styled(Button)`
  margin-top: ${props => props.theme.spacing(1.3)};
  width: 100%;
  padding: ${props => props.theme.spacing(0.7)};
`

export const Description = styled(Typography)`
  margin-top: ${props => props.theme.spacing(1.5)};
  font-size: ${props => props.theme.spacing(1.3)};
`




