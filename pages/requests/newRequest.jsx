import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel, Input, TextareaAutosize } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button";

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
  textArea: {
    font: 'inhert',
    width: '100%',
    height: '250px',
  },
}));

export default function NewRequest(props) {
  const classes = useStyles();
  const handleChange = () => {
    alert('hi');
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const age = 20;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <form className={classes.formControl}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label" className={classes.inputLabel}>Posici&oacute;n</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Delantero</MenuItem>
                <MenuItem value={20}>Defensa</MenuItem>
                <MenuItem value={30}>Mediocentro</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label3" className={classes.inputLabel}>Club</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label3"
                id="demo-simple-select-helper3"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Derecho</MenuItem>
                <MenuItem value={20}>Izquierdo</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label24" className={classes.inputLabel}>Fecha Nacimiento</InputLabel>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    margin="none"
                    id="date-picker-dialog"
                    label=""
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label4" className={classes.inputLabel}>Edad</InputLabel>
              <TextField
                id="standard-number"
                label=""
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label2" className={classes.inputLabel}>Pie</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label2"
                id="demo-simple-select-helper2"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Derecho</MenuItem>
                <MenuItem value={20}>Izquierdo</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Switch checked={state.gilad} color="primary" onChange={handleChange} name="Selection" />}
                label="Selección"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label4" className={classes.inputLabel}>Estatura</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label4"
                id="demo-simple-select-helper4"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Derecho</MenuItem>
                <MenuItem value={20}>Izquierdo</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label5" className={classes.inputLabel}>Peso</InputLabel>
              <Input
                id="standard-adornment-weight"
                value="26"
                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label4" className={classes.inputLabel}>Pasaporte</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label4"
                id="demo-simple-select-helper4"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Derecho</MenuItem>
                <MenuItem value={20}>Izquierdo</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-helper-label4" className={classes.inputLabel}>Comentarios:</InputLabel>
              <TextareaAutosize aria-label="minimum height" className={classes.textArea} rowsMin={5} placeholder="" />
            </Grid>
            <Grid item xs={7}>

            </Grid>
            <Grid item xs={5}>
              <Button variant="contained" color="primary">
                Confirmar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
