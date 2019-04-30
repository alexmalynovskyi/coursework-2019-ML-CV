import React, { useContext, useState, useEffect } from 'react';
import { Card, Loader } from '../';
import ImageContext from '../../contexts/ImageContext';
import { IImageModel } from '../../models/image';
import { socket } from '../../helpers/socket';
import { bufferArrayToBase65 } from '../../utils/bufferutil';

const imgContainerStyles: React.CSSProperties = {
	width: '100%',
	minHeight: '300px',
	position: 'relative',
	backgroundColor: '#F2F2F2',
	padding: '6px',
	borderRadius: '4px',
	border: '1px solid #444',
};

const ImgPerformContainer: React.StatelessComponent = (props: any): JSX.Element => {
	const [processedImage, setProcessedImage] = useState('');
	const state = useContext(ImageContext);

	const startImageRocognition = () => {
		socket.emit('startImageProcessing', state.image);
		socket.on('processedImg', (processedImg: any) => {
			setProcessedImage(bufferArrayToBase65(processedImg));
		});
	};
	useEffect(() => {
		if (state.image) {
			startImageRocognition();
		}
	}, [state.image]);

	let imgContainer = <Loader />;
	if (processedImage) {
		imgContainer = <Card title={'some sting'} dispatch={state.dispatch} img={processedImage} />;
	}

	return imgContainer;
};

export default ImgPerformContainer;
