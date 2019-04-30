import React from 'react';

interface IMageModel {
	image: string;
	title: string | null;
	dispatch: Function | null;
}

const initialImageContext: IMageModel = {
	image: '',
	title: '',
	dispatch: null,
};

const ImageContext = React.createContext(initialImageContext);

export default ImageContext;
