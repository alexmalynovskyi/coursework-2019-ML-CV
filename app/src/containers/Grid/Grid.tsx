import * as React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface IProps {
  children: JSX.Element;
  classes?: any;
}


const GridContainer: React.StatelessComponent<IProps> =(props: IProps): JSX.Element => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={ 24 }>
        { props.children }
      </Grid>
    </div>
  );
}

export default withStyles(styles)(GridContainer);