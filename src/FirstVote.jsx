import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },

  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const FirstVote = props => {
  const [showLoading, setShowLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = () => {
    setShowForm(false);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setOpenModal(true);
    }, 7000);
  };
  return (
    <div>
      <h2 className="first_vote_header">First Round</h2>
      {showForm && (
        <form>
          <FormControl component="fieldset">
            <FormLabel component="legend" className="second_header">
              Pick Your Candidate
            </FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-label="gender"
              name="customized-radios"
            >
              <FormControlLabel
                value="Joe B"
                control={<StyledRadio />}
                label="Average Joe"
              />
              <FormControlLabel
                value="Bernie Sanders"
                control={<StyledRadio />}
                label="The Revolutionist"
              />
              <FormControlLabel
                value="Elizabeth Warren"
                control={<StyledRadio />}
                label="The Regulator"
              />
              <FormControlLabel
                value="Pete B"
                control={<StyledRadio />}
                label="The Wine Cave"
              />
              <FormControlLabel
                value="Andrew Yang"
                control={<StyledRadio />}
                label="The Freedom Dividend"
              />
              <FormControlLabel
                value="Amy K"
                control={<StyledRadio />}
                label="The Senator Next Door"
              />
              <FormControlLabel
                value="Tom S"
                control={<StyledRadio />}
                label="The Billionaire"
              />
              <FormControlLabel
                value="Mike B"
                control={<StyledRadio />}
                label="The Richer Billionaire"
              />

              <FormControlLabel
                value="Tulsi G"
                control={<StyledRadio />}
                label="The Anti Hillary"
              />
              <FormControlLabel
                value="Others"
                control={<StyledRadio />}
                label="The Rest"
              />
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              className="vote_button"
              type="submit"
              onClick={clickHandler}
            >
              SUBMIT VOTE
            </Button>
          </FormControl>
        </form>
      )}
      {showLoading && (
        <div className="loading">
          <Skeleton animation="wave" />
          <Skeleton animation="wave" variant="rect" className="processing">
            Processing
          </Skeleton>
          <Skeleton variant="rect" animation="wave" />
        </div>
      )}
      {openModal && (
        <div className="card">
          <h3>Congrats!</h3>
          <h4>You have voted "The Wine Cave".</h4>
          <h4>Thank you for participating!</h4>
        </div>
      )}
    </div>
  );
};

export default FirstVote;
