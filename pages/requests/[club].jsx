import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  Fab, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(0),
  },
  inline: {
    display: 'inline',
  },
  margin: {
    margin: theme.spacing(0),
  },
  testField: {
    minWidth: '100%',
  },
  inputLabel: {
    top: 'auto',
    left: 'auto',
  },
  addButton: {
    position: 'fixed',
    color: '#fff',
    backgroundColor: '#3f51b5',
    bottom: '10px',
    right: '10px',
    zIndex: 99,

  },
}));

export default function RequestByClub(props) {
  const classes = useStyles();

  function createData(Posicion, Fecha, Actions) {
    return { Posicion, Fecha, Actions };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  // todo player
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h2>
              Pedidos
            </h2>
          </Grid>
          <Grid item xs={6}>
            <Fab color="primary" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Posicion</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>{row.Posicion}</TableCell>
                    <TableCell>{row.Fecha}</TableCell>
                    <TableCell>{row.Actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item xs={6}>
            <h2>
              Ofrecidos
            </h2>
          </Grid>
          <Grid item xs={6}>
            <Fab color="primary" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Posicion</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>{row.Posicion}</TableCell>
                    <TableCell>{row.Fecha}</TableCell>
                    <TableCell>{row.Actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item xs={12}>
            <InputLabel id="demo-simple-select-helper-label4" className={classes.inputLabel}>Comentarios:</InputLabel>
            <TextareaAutosize aria-label="minimum height" className={classes.textArea} rowsMin={5} placeholder="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
