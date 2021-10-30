import { Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardStyled = styled(Card)`
  cursor: pointer;
  transition: 0.3s ease-in;
  /* background: ${props => props.theme.palette.text.secondary}; */
  background: rgba(0,0,0,0.3);

  &:hover {
    transform: scale(1.02)
  }
`
export const CardMediaStyled = styled(CardMedia)`
  height: 170px;
`

export const Title = styled(Typography)`
  font-weight: bold;
  color: ${props => props.theme.palette.primary.dark}
`

export const Hour = styled(Typography)`
color: ${props => props.theme.palette.primary.main}
`

export const Date = styled(Typography)`
color: ${props => props.theme.palette.primary.light}
`

export const Locale = styled(Typography)`
color: ${props => props.theme.palette.secondary.main}
`

export const Price = styled(Typography)`
color: ${props => props.theme.palette.text.primary}
`