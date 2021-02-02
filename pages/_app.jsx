import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ServerStyleSheets, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from "../components/footer";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import HomeIcon from '@material-ui/icons/Home';
import UnarchiveIcon from '@material-ui/icons/Unarchive';

import SearchBox from "../components/search-box";
import Button from "@material-ui/core/Button";
import {useCurrentUser} from "@/hooks/user";
import { useRouter } from "next/router";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [user, { mutate }] = useCurrentUser();
  const router = useRouter();

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    buttons: {
      margin: theme.spacing(1),
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    title: {
      flexGrow: 1,
      /*display: "none",*/
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    inputRoot: {
      color: 'inherit',
    },
  }));
  const sheets = new ServerStyleSheets();

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);

    router.push(`/`);

  };

  return (
    <React.Fragment>
      <Head>
        <title>New Web</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                DODICI
              </Typography>
              {/*<SearchBox></SearchBox>*/}
              <div>
                 {!user ? (
                   <div>
                     <Button className={classes.buttons} variant="contained" onClick={() => router.push(`/`)}>
                       Iniciar sesi&oacute;n
                     </Button>
                     {/*<Button className={classes.buttons} variant="contained" onClick={() => router.push(`/signup`)}>
                       Sign up
                     </Button>*/}
                   </div>
                 ) : (
                   <div>
                    <Button className={classes.buttons} variant="contained" onClick={() => router.push(`/user/${user._id}`)}>
                      Profile
                     </Button>
                     <Button className={classes.buttons} variant="contained" onClick={handleLogout}>
                      Cerrar Sesi&oacute;n
                     </Button>
                   </div>
                 )}
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key={0}
                        onClick={() => router.push('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
              <ListItem button key={1}
                        onClick={() => router.push('/requests')}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Pedidos'} />
              </ListItem>
              <ListItem button key={2}
                        onClick={() => router.push('/players')}>
                <ListItemIcon>
                  <DirectionsRunIcon />
                </ListItemIcon>
                <ListItemText primary={'Jugadores'} />
              </ListItem>
              <ListItem button key={3}
                        onClick={() => router.push('/clubs')}>
                <ListItemIcon>
                  <SportsSoccerIcon />
                </ListItemIcon>
                <ListItemText primary={'Clubes'} />
              </ListItem>
              <ListItem button key={4}
                        onClick={() => router.push('/offerings')}>
                <ListItemIcon>
                  <UnarchiveIcon />
                </ListItemIcon>
                <ListItemText primary={'Ofrecidos'} />
              </ListItem>
            </List>
            <Divider />
            {/*<List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>*/}
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Component {...pageProps} />
          </main>
        </div>
        {/*<Footer/>*/}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
