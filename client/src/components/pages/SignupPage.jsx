import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import {createUser} from "../../redux/features/application"
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "red",
    padding: "6px",
    width: "395px",
    textAlign: "center"
  }
}));

function SignupPage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const signinUp = useSelector((state) => state.application.signinUp)
  const error = useSelector((state) => state.application.error)

  const HandleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const HandleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(createUser(login,password))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={login}
                label="Login"
                name="login"
                autoComplete="login"
                onChange={HandleChangeLogin}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={HandleChangePassword}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={signinUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/signin" variant="body2">
                Login
              </Link>
            </Grid>
          </Grid>
        </form>
        <Typography component="p" variant="p" className={classes.error}>
          {error}
        </Typography>
      </div>
    </Container>
  );
}

export default SignupPage;