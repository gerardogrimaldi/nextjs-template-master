import React from 'react';
import Head from 'next/head';
import nc from 'next-connect';
import Router from 'next/router';
import { database } from '@/middlewares/index';
import { findTokenByIdAndType } from '@/db/index';
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";

const ResetPasswordTokenPage = ({ valid, token }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      password: event.currentTarget.password.value,
      token,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) Router.replace('/');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Has olvidado tu contrase&ntilde;a</title>
      </Head>
      <CssBaseline />
      <style jsx>
        {`
        p {
          text-align: center;
        }
      `}
      </style>
      <h2>Has olvidado tu contrase&ntilde;a</h2>
      {valid ? (
        <>
          <p>Ingrese su nueva contrase&ntilde;a.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="password"
                type="password"
                placeholder="New password"
              />
            </div>
            <button type="submit">Cambiar contrase&ntilde;a</button>
          </form>
        </>
      ) : (
        <p>This link may have been expired</p>
      )}
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const handler = nc();
  handler.use(database);
  await handler.run(ctx.req, ctx.res);
  const { token } = ctx.query;

  const tokenDoc = await findTokenByIdAndType(ctx.req.db, ctx.query.token, 'passwordReset');

  return { props: { token, valid: !!tokenDoc } };
}

export default ResetPasswordTokenPage;
