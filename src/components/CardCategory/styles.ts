import { Card, CardContent, styled, Typography } from "@mui/material";

export const CustomCard = styled(Card)`
  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
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