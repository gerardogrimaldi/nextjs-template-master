// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
// import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link'

/*const searchClient = algoliasearch(
  'BFUPPVYGI0',
  '1281fe88faa993467724d6e1ea2dd5ef'
);*/

// const index = searchClient.initIndex('videos');

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  option: {
    textDecoration: 'none', color:'inherit'
  }
}));

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = useStyles();

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      //const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      //const countries = await response.json();
      const response = await index.search('fans',{ hitsPerPage: 15 });
      const videos = await response.hits;

      if (active) {
        // setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
        setOptions(videos);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderOption={option => (
        <Link  href={`/video/${encodeURIComponent(option.slug)}`}>
          <a class={classes.option}>
              {/*<img src="{}" alt=""/>*/}
            <span> {option.title} </span>
          </a>
        </Link>
      )}
      renderInput={(params) => (
        <div ref={params.InputProps.ref} className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            type="text" {...params.inputProps}
            label="Asynchronous"
            variant="outlined"
            InputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
              endAdornment: (
               <React.Fragment>
                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
                 {params.InputProps.endAdornment}
               </React.Fragment>
              )
            }}
          />
        </div>
      )}
    />
  );
}
