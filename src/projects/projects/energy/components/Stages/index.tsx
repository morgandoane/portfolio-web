import Section from '@/components/Section';
import { FC } from 'react';
import Stage from './components/Stage';

const Stages: FC = () => {
	return (
		<Section dark className="flex flex-col gap-32">
			<Stage
				title="Extraction"
				src="energy/extraction.jpg"
				text="80% Of domestic energy production relies on fossil fuels like oil, coal, & natural gas, extracted through wells and mines. Though renewable energy production is not reliant on the fossil fuels, it’s production significantly relies on the earth’s mineral resources- vast amounts of copper, silicon, and rare earth metals. The extraction and processing of these materials has environmental and human impacts at a global scale."
			/>
			<Stage
				title="Production"
				src="energy/production.jpg"
				text="Currently, energy production largely involves converting organic matter into electricity through combustion, steam, and turbines. While effcient in converting fuel to electricity, this thermal method of energy production comes with significant environmental costs. Renewable energy sources harness natural processes to generate electricity, but are not without their own unique challenges."
			/>
			<Stage
				title="Distribution"
				src="energy/distribution.jpg"
				text="The US energy distribution network is notably fragile and complex. It is not governed by a single entity; rather, it is managed by a myriad of private and public firms. Remarkably, the failure of just 10 key US power substations could trigger a catastrophic collapse of the grid throughout the country."
			/>
			<Stage
				title="Consumption"
				src="energy/consumption.jpg"
				text="Energy consumption remains curiously opaque to end-users. Before we can engage in meaningful conversation about decarbonization, it has become clear to me that the complexity of these systems make it diffcult for people to comprehend the impact of our energy use. This project aims to bring clarity to these enormous and critical systems, wrangling complexity into a legible medium."
			/>
		</Section>
	);
};

export default Stages;
