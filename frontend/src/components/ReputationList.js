import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReputationSlider from "./ReputationSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={3}>
      <Grid item xs={4}>
        <ReputationSlider charName="Konstantin" />
      </Grid>
      <Grid item xs={4}>
        <ReputationSlider charName="Orlov" />
      </Grid>
      <Grid item xs={4}>
        <ReputationSlider charName="Eileen" />
      </Grid>
    </Grid>
  );
}
