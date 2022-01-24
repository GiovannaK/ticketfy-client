import { Card, CardContent, styled, Typography } from "@mui/material";

export const CustomCard = styled(Card)`
  background: linear-gradient(90deg, rgba(237,134,0,1) 0%, rgba(144,0,172,1) 43%, rgba(28,46,181,1) 100%);
  transition: 0.3s ease-in;
  cursor: pointer;
  &:hover{
    opacity: 70%;
  }

`
export const CategoryTitle = styled(Typography)`
  text-align: center;
  font-size: ${props => props.theme.spacing(1.5)};
  text-transform: uppercase;
  font-weight: bold;
`