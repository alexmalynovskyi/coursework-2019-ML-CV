import * as actions from '../actions/image';
import { IImageModel } from '../models/image';

export const initialState: IImageModel = {
	image: '',
	title: '',
};

interface IReducerModel {
	image: string;
	title: string | null;
	type: string;
}

const imageReducer = (state: IImageModel = initialState, action: IReducerModel): IImageModel => {
	switch (action.type) {
		case actions.SET_IMAGE:
			return {
				...state,
				image: action.image,
			};
		case actions.DELETE_IMAGE:
			return initialState;
		default:
			return state;
	}
};

export default imageReducer;
