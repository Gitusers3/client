import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px'
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="reg"
              id="standard-basic"
              value={username || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Register Number (for Office)"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            />
            {/* <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Username (Min length 4, Max length 9)"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            /> */}

            <TextField
              type="date"
              name="firstName"
              label=""
              onChange={handleChange}
              value={firstName || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: '100%' }}
                  />
                )}
              />
            </LocalizationProvider> */}

            <TextField
              sx={{ marginTop: '10px' }}
              type="email"
              name="email"
              label="Email"
              value={email || ''}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <InputLabel id="demo-simple-select-label">Student Image</InputLabel>

            <TextField
              sx={{ mb: 4 }}
              type="file"
              name="creditCard"
              label=""
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="Name of the Student"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="Place"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <InputLabel id="demo-simple-select-label">Temporary Address</InputLabel>
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="Address"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="number"
              name="creditCard"
              label="Pincode"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="District"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="State"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <InputLabel id="demo-simple-select-label">Permanent Address</InputLabel>
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="Address"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="number"
              name="creditCard"
              label="Pincode"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="District"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="creditCard"
              label="State"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="number"
              name="mobile"
              value={mobile || ''}
              label="Contact Nubmer1( whatsapp )"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="number"
              name="mobile"
              value={mobile || ''}
              label="Contact Nubmer2"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              name="Email"
              type="email"
              label="Email ID"
              // value={password || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="confirmPassword"
              // onChange={handleChange}
              label="Parent/Guardian's Name"
              value={confirmPassword || ''}
              validators={['required', 'isPasswordMatch']}
              errorMessages={['this field is required', "password didn't match"]}
            />
            <TextField
              type="text"
              name="confirmPassword"
              // onChange={handleChange}
              label="Relationsship"
              value={confirmPassword || ''}
              validators={['required', 'isPasswordMatch']}
              errorMessages={['this field is required', "password didn't match"]}
            />
            <TextField
              type="number"
              name="mobile"
              value={mobile || ''}
              label="Parent's/guardian's Contact "
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            {/* <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ''}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                label="Male"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            /> */}
          </Grid>
        </Grid>

        <Button fullWidth color="primary" variant="contained" type="submit">
          {/* <Icon>send</Icon> */}
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
