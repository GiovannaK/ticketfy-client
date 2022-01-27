import { Button, Card, CardContent, InputBase, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Input = styled(InputBase)`
  border: 2px solid;
  border-color: ${props => props.theme.palette.primary.dark};
  border-radius: 10px;
  width: 100%;
  padding: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.spacing(1.3)};
  margin-bottom: ${props => props.theme.spacing(1)};
  margin-top: ${props => props.theme.spacing(1)};
`

export const CardStyled = styled(Card)`
  background: rgba(0,0,0,0.3);
  width: 100%;
  min-height: 80vh
`

export const Title = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
  text-transform: uppercase;
  padding-top: ${props => props.theme.spacing(7)};
  padding-bottom: ${props => props.theme.spacing(7)};
`

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(0.7)};
`

export const ActionLinks = styled(Link)`
  cursor: pointer;
`