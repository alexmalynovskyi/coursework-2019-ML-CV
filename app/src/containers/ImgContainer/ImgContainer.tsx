import React, { useContext } from 'react';
import { Card, Loader } from '../';
import ImageContext from '../../contexts/ImageContext';
import { IImageModel } from '../../models/image';

const imgContainerStyles: React.CSSProperties = {
	width: '100%',
	minHeight: '300px',
	position: 'relative',
	backgroundColor: '#F2F2F2',
	padding: '6px',
	borderRadius: '4px',
	border: '1px solid #444',
};

const ImgContainer: React.StatelessComponent = (props: any): JSX.Element => {
	let { isLoading } = props;
	const state = useContext(ImageContext);
	let imgContainer = <Card title={'some sting'} dispatch={state.dispatch} img={state.image} />;
	if (isLoading === true) {
		imgContainer = <Loader />;
	}

	return imgContainer;
};

export default ImgContainer;
