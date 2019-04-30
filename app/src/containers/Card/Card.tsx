import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { FaTrashAlt } from 'react-icons/fa/';
import { DELETE_IMAGE } from '../../actions/image';

const styles = {
	card: {
		minWidth: '100%',
		minHeight: '100%',
	},
	media: {
		height: '100%',
		minHeight: 400,
	},
	backgroundUrlCard: {
		minWidth: '100%',
		minHeight: '100%',
		backgroundSize: 'cover',
	},
};

const setBackgroundUrl = (url: string): Object => {
	return {
		minWidth: '100%',
		minHeight: '100%',
		backgroundSize: 'cover',
		background: `url(${url}) no-repeat center center fixed`,
	};
};

interface IProps {
	classes: any;
	img: string;
	title: string | undefined;
	dispatch: any;
	backgroundUrl?: string | any;
}

const DelebeBtnStyle: React.CSSProperties = {
	position: 'absolute',
	right: '5%',
	top: '5%',
	color: '#E75853',
	zIndex: 999,
};

function MediaCard(props: IProps) {
	const clickHandler = (event: React.MouseEvent): void => {
		event.preventDefault();
		props.dispatch({ type: DELETE_IMAGE });
	};

	const { classes, img, title, backgroundUrl } = props;
	let cardContainer = (
		<Card className={classes.backgroundUrlCard}>
			<CardActionArea>
				<FaTrashAlt size={20} style={DelebeBtnStyle} onClick={clickHandler} />
				<CardMedia className={classes.media} image={img} title={title} />
			</CardActionArea>
		</Card>
	);
	if (backgroundUrl) {
		cardContainer = <Card className={classes.card} style={{ background: `url(${backgroundUrl})` }} />;
	}

	return cardContainer;
}

export default withStyles(styles)(MediaCard);
