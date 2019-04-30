import * as React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

interface IProps {
	children: JSX.Element;
}

const Layout: React.StatelessComponent<IProps> = (props: IProps): JSX.Element => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Layout;
