import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import {
  Fab, FormHelperText, Input, MenuItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { AddIcon } from '@material-ui/data-grid';
import Switch from "@material-ui/core/Switch";

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

export default function Request(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });
  const handleChange = () => {
    alert('hi');
  };
  const age = 20;

  // todo player
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <FormControl className={classes.formControl}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Fab className={classes.addButton} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <TextField
                className={classes.testField}
                label="Buscar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel
                id="demo-simple-select-helper-label"
                className={classes.inputLabel}
              >
                Posici&oacute;n
              </InputLabel>
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
              <FormHelperText>La posici&oacute;n del jugador</FormHelperText>
              {/* <Paper className={classes.paper}>xs=6</Paper> */}
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-helper-label5" className={classes.inputLabel}>Edad</InputLabel>
              <TextField
                id="standard-number"
                margin="normal"
                label=""
                type="number"
                value={0}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <FormControlLabel
                control={<Switch checked={state.gilad} color="primary" onChange={handleChange} name="Selection" />}
                label="Sin Respuesta"
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary">
                Buscar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <List className={classes.root}>
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={(
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    )}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={(
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </>
                    )}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={(
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </>
                    )}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={(
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </>
                    )}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={(
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </>
                    )}
                  />
                </ListItem>
              </List>
            </Grid>
            {/* <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid> */}
          </Grid>
        </FormControl>
      </Container>
    </div>
  );
}
