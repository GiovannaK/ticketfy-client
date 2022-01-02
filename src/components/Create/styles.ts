import { Button, Card, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Checkbox from '@mui/material/Checkbox';

export const CardCreateEvent = styled(Card)`
  background: rgba(0,0,0,0.3);
`

export const InputCreate = styled(InputBase)`
  border: 2px solid ${props => props.theme.palette.primary.dark};
  border-radius: 5px;
  padding: 0.7rem;
  color: ${props => props.theme.palette.secondary.main};
  font-size: ${props => props.theme.spacing(1.3)};
`

export const SelectCreate = styled(Select)`
  border: 2px solid ${props => props.theme.palette.primary.dark};
  border-radius: 5px;
  color: ${props => props.theme.palette.secondary.main};
  font-size: ${props => props.theme.spacing(1.3)};
`

export const Label = styled(Typography)`
  color: ${props => props.theme.palette.primary.dark};
  padding-bottom: ${props => props.theme.spacing(0.5)};
`
export const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    border: '2px solid white',
    borderColor: (props: any) => props.theme.palette.primary.dark
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: (props: any) => props.theme.palette.primary.dark
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: (props: any) => props.theme.palette.secondary.main
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: (props: any) => props.theme.palette.primary.dark
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: (props: any) => props.theme.palette.secondary.main,
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: (props: any) => props.theme.palette.secondary.main,
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: (props: any) => props.theme.palette.secondary.main,
  }
});

export const CheckBoxInput = styled(Checkbox)`
  color: ${props => props.theme.palette.primary.dark};
  transform: scale(1.5);
  margin-left: ${props => props.theme.spacing(1.2)};

`

export const FormButton = styled(Button)`
  width: 100%;
  margin-top: ${props => props.theme.spacing(1.2)};
  color: ${props => props.theme.palette.secondary.main};
  border-color: ${props => props.theme.palette.secondary.main};
  font-size: ${props => props.theme.spacing(1.2)};

  &:hover{
    color: ${props => props.theme.palette.primary.dark};
    border-color: ${props => props.theme.palette.primary.dark};
  }
`
export const FormTitle = styled(Typography)`
  text-align: center;
  font-size: ${props => props.theme.spacing(1.7)};
  padding: ${props => props.theme.spacing(1.2)};
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.palette.secondary.main};
`

