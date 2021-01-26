import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { DataGrid } from '@material-ui/data-grid';
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  playerContainer: {
    height: '0',
    overflow: 'hidden',
    'padding-top': '56.25%',
    background: 'white',
    position: 'relative',
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Home(home) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {/*<AdvancedGridList></AdvancedGridList>*/}
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="md">

          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pedidos
          </Typography>

          <div className={classes.heroButtons}>
            <Grid container
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
              <Grid item>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                  <Button>Pedidos por Jugadores</Button>
                  <Button>Pedidos por clubes</Button>
                  <Button>Pedidos por fecha</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </div>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>

          <div className={classes.heroButtons}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          </div>

        </Container>
      </div>
      {/* End hero unit */}

    </React.Fragment>
  );
}

/*
export async function getServerSideProps() {
  let fields = '';
  fields = '?fields=';
  fields += 'landing';
  fields += ',liveNow(_id,url,liveId,dailymotionLiveId,liveFrameUrl,liveType,liveStreamUrl,image,title,program(_id,slug,title,slogan' + /!*getTranslations() +*!/ '))';
  fields += ',newNow(_id,logo,slug,title,description,slogan' + /!*getTranslations() +*!/ ')';
  fields += ',highlighted(_id,logo,slug,title,description,slogan' + /!*getTranslations() +*!/ ')';
  fields += ',popularShows(_id,logo,slug,title,description,slogan' + /!*getTranslations() +*!/ ')';
  fields += ',popularVideos(_id,link,slug,title,image,date,duration,dailymotionId,thumbnails,program(_id,slug,title))';
  fields += ',recentVideos(_id,link,slug,title,image,date,duration,dailymotionId,thumbnails,program(_id,slug,title))';
  fields += ',featuredVideos(_id,link,slug,title,image,dailymotionId,thumbnails,program(_id,slug,title),video(_id,link,slug,title,date,dailymotionId,thumbnails,enabledForProducts,duration,extraThumbParameters))';
  fields += ',featuredByFavoritesVideos(_id,link,slug,title,image,date,duration,dailymotionId,thumbnails,program(_id,slug,title))';
  fields += ',highlightedShowsByFavorites(_id,link,slug,title,image,date,duration,videos(_id,link,slug,title,date,duration,dailymotionId,thumbnails,program(_id,slug,title)))';
  fields += ',highlightedShows(_id,link,slug,title,image,date,duration,videos(_id,link,slug,title,date,duration,dailymotionId,thumbnails,program(_id,slug,title)))';
  fields += ',genres(_id,title,slug,videos(_id,description,extraThumbParameters,link,slug,title,date,dailymotionId,thumbnails,program(slug)))';

  /!*const res = await fetch('https://api.fwtv.tv/home' + fields);*!/
  const home = await res.json();

  return { props: home }
}
*/
