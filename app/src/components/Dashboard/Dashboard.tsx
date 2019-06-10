import * as React from 'react';
import { useState, useReducer } from 'react';
import { IDashboard } from '../../interfaces/IDashboard';
import Grid from '@material-ui/core/Grid';
import { GridContainer, ImgContainer, ImgPerformContainer } from '../../containers/';
import ImageContext from '../../contexts/ImageContext';
import imageReduder, { initialState } from '../../reducers/image';
import { IImageModel } from '../../models/image';
import { AvailableFileExtension } from '../../containers';
import * as imageActions from '../../actions/image';

const DropZoneStyles: React.CSSProperties = {
	position: 'relative',
	height: '200px',
	width: '200px',
	backgroundColor: 'rgba(147, 148, 148, 0.23)',
	padding: '6px',
	borderRadius: '4px',
	border: '2px dashed rgba(95, 92, 92, 0.2)',
};

const fileInput: React.CSSProperties = {
	width: '100%',
	height: '100%',
	top: '0',
	left: '0',
	color: 'transparent',
	background: 'transparent',
	position: 'absolute',
};

const GridMargin: React.CSSProperties = {
	marginBottom: '120px'
};

type ChangeEventOrDragEvent = React.DragEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>;

const Dashboard: React.StatelessComponent<IDashboard> = (props: IDashboard): JSX.Element => {
	const handleDragOver = (event: React.DragEvent<HTMLInputElement>): void => {
		event.preventDefault();
		event.stopPropagation();
	};
	let [state, dispatch] = useReducer(imageReduder, initialState);

	const handleDrop = (event: ChangeEventOrDragEvent): void => {
		const file = event.currentTarget.files;
		const fileReader = new FileReader();

		if (file && file[0]) {
			fileReader.onload = () => {
				if (fileReader.result && typeof fileReader.result === 'string') {
					dispatch({
						type: imageActions.SET_IMAGE,
						title: 'some img',
						image: fileReader.result,
					});
				}
			};
			fileReader.readAsDataURL(file[0]);
		}
	};

	return (
		<GridContainer>
			<>
				<ImageContext.Provider
					value={{
						...state,
						dispatch,
					}}
				>
					<Grid style={GridMargin} item sm={6} xs={12}>
						<ImgContainer />
					</Grid>
					<Grid style={GridMargin} item sm={6} xs={12}>
						<ImgPerformContainer />
					</Grid>
				</ImageContext.Provider>

				<Grid style={DropZoneStyles} item sm={4} xs={6}>
					<input
						type="file"
						style={fileInput}
						onDragOver={handleDragOver}
						onChange={handleDrop}
						onDrop={handleDrop}
					/>

				</Grid>
				<Grid item sm={4} xs={6}>
					<AvailableFileExtension />
				</Grid>
			</>
		</GridContainer>
	);
};

export default Dashboard;
