import React, { useState } from 'react';
import Head from 'next/head';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const ForgetPasswordPage = () => {
  const [msg, setMsg] = useState({ message: '', isError: false });
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault(e);

    const body = {
      email: e.currentTarget.email.value,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Un email se ha enviado a su casilla de correo.' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  return (
    <>
      <Head>
        <title>Has olvidado tu contrase&ntilde;a</title>
      </Head>
      <h2>Has olvidado tu contrase&ntilde;a</h2>
      {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p> : null}

      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <p>No hay problema. Ingrese su email debajo.</p>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Enviar
        </Button>
      </form>
    </>
  );
};

export default ForgetPasswordPage;
