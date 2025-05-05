import { FC } from 'react';
import Action from './components/Action';
import Intro from './components/Intro';
import Stages from './components/Stages';
import Tool from './components/Tool';
import Prompt from './components/Prompt';

const Energy: FC = () => {
	return (
		<div>
			<Intro />
			<Stages />
			<Tool />
			<Prompt />
			<Action />
		</div>
	);
};

export default Energy;
