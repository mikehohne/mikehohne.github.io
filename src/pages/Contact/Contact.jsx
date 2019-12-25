import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as EmailValidator from 'email-validator';

const useStyles = makeStyles(theme => ({
  form: {
    minWidth: '350px'
  },
  root: {
    marginTop: '10px'
  },
  inputContainer: {
    width: '100%'
  },
  buttonContainer: {
    textAlign: '100%'
  },
  button: {
    width: '100%'
  }
}));

const Contact = props => {
  const form = React.useRef(null);
  const initialState = {
    controls: {
      email: {
        value: '',
        valid: false
      },
      message: {
        value: '',
        valid: false
      }
    }
  };
  const [formValues, setForm] = React.useState(initialState);
  const [formValid, setFormValid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    if (form) {
      if (
        formValues.controls.message.valid &&
        formValues.controls.email.valid
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }
  }, [formValues]);

  function handleChange(e) {
    const { value, name } = e.target;
    setForm({
      ...formValues,
      controls: {
        ...formValues.controls,
        [name]: {
          value: value,
          valid: validate(name, value)
        }
      }
    });
  }

  function handleBlur() {
    if (formValues.controls.email.valid) {
      return setError(null);
    }
    setError('Email is Invalid');
  }

  function validate(name, value) {
    switch (name) {
      case 'email':
        return EmailValidator.validate(value);
      case 'message':
        return value.length > 0;
      default:
        return false;
    }
  }

  function sendMessage() {
    props.client
      .sendMessage(
        392535675,
        `<b>${formValues.controls.email.value}</b> ${formValues.controls.message.value}`,
        { parse_mode: 'HTML' }
      )
      .then(res => setForm(initialState));
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <div>
      <form className={classes.form} ref={form}>
        <div className={classes.root}>
          <TextField
            className={classes.inputContainer}
            name='email'
            autoComplete='off'
            value={formValues.controls.email.value}
            onBlur={handleBlur}
            label='Email'
            required
            variant='outlined'
            onChange={handleChange}
          />
          <span>{error}</span>
        </div>
        <div className={classes.root}>
          <TextField
            className={classes.inputContainer}
            name='message'
            value={formValues.controls.message.value}
            label='Message'
            required
            variant='outlined'
            rows='8'
            multiline
            onChange={handleChange}
          />
        </div>
        <div className={classes.root}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={!formValid ? true : undefined}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
