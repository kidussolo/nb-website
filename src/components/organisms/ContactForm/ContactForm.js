import React, { useRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import validate from "validate.js";
import emailjs from "emailjs-com";
import { Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const schema = {
  fullname: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const ContactForm = () => {
  const classes = useStyles();

  const form = useRef();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    loading: false,
    success: false,
    error: false,
  });
  const [open, setOpen] = React.useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState((formState) => ({
      ...formState,
      loading: true,
    }));

    emailjs
      .sendForm(
        "service_bdf5rg7",
        "template_8o08gkh",
        form.current,
        "user_vftA7tPa0NWQpbKwvAUZm"
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormState((formState) => ({
            ...formState,
            loading: false,
            values: {},
            touched: {},
            errors: {},
            success: true,
          }));
        },
        (error) => {
          console.log(error.text);
          setFormState((formState) => ({
            ...formState,
            loading: false,
            values: {},
            touched: {},
            errors: {},
            error: true,
          }));
        }
      );
  };

  const styles = {
    root: {
      marginLeft: 5,
    },
  };

  const AlertMessage = ({ severity, message }) => {
    return (
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    );
  };

  const Spinner = withStyles(styles)((props) => (
    <CircularProgress
      className={props.classes.spinner}
      size={20}
      color="inherit"
      style={{marginRight: 10}}
    />
  ));

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="contact-form" ref={form} onSubmit={sendEmail}>
        {formState.success ? (
          <AlertMessage
            severity="success"
            message="Sent successfully, We'll get back to you real soon!"
          />
        ) : formState.error ? (
          <AlertMessage
            severity="error"
            message="Something went wrong, try again"
          />
        ) : (
          ""
        )}
        <input type="hidden" name="form-name" value="contact-form" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>Contact Us</strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
              We carefully read and answer to all our emails.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Full Name"
              label="Full Name *"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              helperText={
                hasError("fullname") ? formState.errors.fullname[0] : null
              }
              error={hasError("fullname")}
              onChange={handleChange}
              type="text"
              value={formState.values.fullname || ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Message"
              label="Message *"
              variant="outlined"
              name="message"
              fullWidth
              helperText={
                hasError("message") ? formState.errors.message[0] : null
              }
              error={hasError("message")}
              onChange={handleChange}
              multiline
              rows={4}
              value={formState.values.message || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Fields that are marked with * sign are required.
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
            >
              {formState.loading && <Spinner />} Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;
