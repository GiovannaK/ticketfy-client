import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const PaperStyled = styled(Paper)`
  background: linear-gradient(180deg, rgba(4,0,49,1) 0%, rgba(0,41,44,0.742734593837535) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#040031",endColorstr="#00292c",GradientType=1);
  min-height: 100vh;
  z-index: -2;
  position: absolute;
  min-width: 100%;
`