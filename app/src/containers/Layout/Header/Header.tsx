import * as React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Icon';

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

export interface Props extends WithStyles<typeof styles> { }

function ButtonAppBar(props: Props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" className={classes.grow}>
						Image modifier
					</Typography>
					<Button color="inherit">Mike Pastula</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(ButtonAppBar);
