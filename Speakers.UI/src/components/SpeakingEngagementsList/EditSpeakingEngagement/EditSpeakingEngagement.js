import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(({
  children, classes, onClose, ...other
}) => (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose && (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const EditSpeakingEngagement = (
  {
    speakerNameIn, attendanceIn, talkNameIn, startDateIn, endDateIn, hostGroupNameIn, cityIn, stateIn, handleEdit, id,
  },
) => {
  const [open, setOpen] = React.useState(false);
  const [talkName, setTalkName] = React.useState(talkNameIn);
  const [speakerName, setSpeakerName] = React.useState(speakerNameIn);
  const [attendance, setAttendance] = React.useState(attendanceIn);
  const [startDate, setStartDate] = React.useState(startDateIn);
  const [endDate, setEndDate] = React.useState(endDateIn);
  const [hostGroupName, setHostGroupName] = React.useState(hostGroupNameIn);
  const [city, setCity] = React.useState(cityIn);
  const [state, setState] = React.useState(stateIn);

  const handleClose = () => {
    setOpen(false);
    handleEdit({
      talkName, speakerName, attendance, startDate, endDate, hostGroupName, city, state, id,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Speaking Engagement
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Speaking Engagement
        </DialogTitle>
        <DialogContent dividers>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='talkName'>Talk Name</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="talkName"
              label="Talk Name"
              fullWidth
              type="text"
              value={talkName}
              onChange={(e) => setTalkName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='speakerName'>Speaker</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="speakerName"
              label="Speaker Name"
              fullWidth
              type="text"
              value={speakerName}
              onChange={(e) => setSpeakerName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='attendance'>Attendance</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="attendance"
              label="Attendance"
              fullWidth
              type="number"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='startDate'>Start Date</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="startDate"
              label="StartDate"
              fullWidth
              type="date"
              value={Date.parse(startDate)}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='endDate'>End Date</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="endDate"
              label="End Date"
              fullWidth
              type="date"
              value={Date.parse(endDate)}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='hostGroup'>Host Group</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="hostGroup"
              label="Host Group"
              fullWidth
              type="text"
              value={hostGroupName}
              onChange={(e) => setHostGroupName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='city'>City</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="city"
              label="City"
              fullWidth
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor='state'>State</InputLabel>
            <FilledInput
              autoFocus
              margin="dense"
              id="state"
              label="State"
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditSpeakingEngagement.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditSpeakingEngagement;
