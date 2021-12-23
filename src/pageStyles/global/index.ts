import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FormError = styled(Typography)`
  color: ${props => props.theme.palette.error.main};
  text-align: center;
`