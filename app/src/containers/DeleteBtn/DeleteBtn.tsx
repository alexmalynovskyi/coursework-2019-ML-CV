import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
	classes: any;
}

const DelebeBtnStyle: React.CSSProperties = {
	position: 'absolute',
	right: '5%',
	top: '5%',
};

const IconButtons: React.StatelessComponent = (props: any): JSX.Element => {
	return <FontAwesomeIcon style={DelebeBtnStyle} icon="check-square" />;
};

export default IconButtons;
