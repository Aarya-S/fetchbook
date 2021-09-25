import React from "react";
import '../css/Login.css';
import {Grid, TextField, Button, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  }
}))



function Login() {
  const classes = useStyles();  
  return (
      <Container className={classes.container} maxWidth="xs">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" fullWidth type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
          <Button color="primary" fullWidth type="submit" variant="text">
              New here?Sign up
            </Button>
        </Grid>
      </form>
    </Container>
    );
  }
  
  export default Login;