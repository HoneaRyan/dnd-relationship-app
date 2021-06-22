import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function ReputationSlider(props) {
  const classes = useStyles();
  const [reputationValue, setReputationValue] = React.useState(0);

  const handleReputationSliderChange = (event, newValue) => {
    setReputationValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider-{props.charName}" gutterBottom>
        {props.charName}
      </Typography>
      <Slider
        value={typeof reputationValue === "number" ? reputationValue : 0}
        onChange={handleReputationSliderChange}
        aria-labelledby="input-slider"
        min={-100}
        max={100}
      />
    </div>
  );
}
