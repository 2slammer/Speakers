import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import EventSeat from '@material-ui/icons/EventSeat';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { format } from 'date-fns';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditSpeakingEngagement from '../../SpeakingEngagementsList/EditSpeakingEngagement';
import Copyright from '../onePirate/modules/components/Copyright';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const Album = ({ engagements, handleEdit }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar>
          <EventSeat className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Speaking Engagements
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Speaking Engagements
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here is a list of the recent speaking engagements Improving has held.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Add Engagement
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Remove Engagement
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {engagements.map((engagement) => (
              engagement
              && <Grid item key={engagement.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Speaker: {engagement.props.speakerName}
                    </Typography>
                    <Typography>
                      Topic: {engagement.props.talkName}
                    </Typography>
                    <Typography>
                      Host Group: {engagement.props.hostGroupName}
                    </Typography>
                    <Typography>
                      {engagement.props.city}, {engagement.props.state}
                    </Typography>
                    <Typography>
                      Attendance: {engagement.props.attendance}
                    </Typography>
                    <Typography>
                      Start Date: {format(Date.parse(engagement.props.startDate), 'dd/MM/yyyy')}
                    </Typography>
                    <Typography>
                      Start Time: {format(Date.parse(engagement.props.startDate), 'hh:mm')}
                    </Typography>
                    <Typography>
                      End Date: {format(Date.parse(engagement.props.endDate), 'dd/MM/yyyy')}
                    </Typography>
                    <Typography>
                      End Time: {format(Date.parse(engagement.props.endDate), 'hh:mm')}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <EditSpeakingEngagement
                      speakerNameIn={engagement.props.speakerName}
                      attendanceIn={engagement.props.attendance}
                      talkNameIn={engagement.props.talkName}
                      startDateIn={engagement.props.startDate}
                      endDateIn={engagement.props.endDate}
                      hostGroupNameIn={engagement.props.hostGroupName}
                      cityIn={engagement.props.city}
                      stateIn={engagement.props.state}
                      handleEdit={handleEdit}
                      id={engagement.props.id}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Album;
