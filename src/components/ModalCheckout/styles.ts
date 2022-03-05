import { Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: ${(props) => props.theme.spacing(1.3)};
  text-transform: uppercase;
  font-weight: 900;
`;

export const TitleCheckout = styled(Typography)`
  font-size: ${(props) => props.theme.spacing(1.7)};
  color: ${(props) => props.theme.palette.primary.light};
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: ${(props) => props.theme.spacing(1.2)};
`;

export const CheckoutButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing(2)};
  width: 100%;
`;

export const SubTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.text.secondary};
  margin-bottom: ${(props) => props.theme.spacing(1.2)};
  font-size: ${(props) => props.theme.spacing(1.2)};
`;
