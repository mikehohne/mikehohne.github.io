import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
  const [formValues, setForm] = React.useState({
    email: '',
    message: ''
  });

  const [formValid, setFormValid] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    if (form) {
      if (
        form.current.email.value.length > 0 &&
        form.current.message.value.length > 0
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }
  }, [formValues]);

  function handleChange(e) {
    const { value, name } = e.target;
    setForm({ ...formValues, [name]: value });
  }

  function sendMessage() {
    props.client
      .sendMessage(392535675, `${formValues.email} ${formValues.message}`)
      .then(res => setForm({ email: '', message: '' }));
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
            value={formValues.email}
            label='Email'
            required
            variant='outlined'
            onChange={handleChange}
          />
        </div>
        <div className={classes.root}>
          <TextField
            className={classes.inputContainer}
            name='message'
            value={formValues.message}
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
