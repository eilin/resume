import React, { Component } from 'react';
import SkillGroup from './SkillGroup';

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			groupBy: 'techLabel',
			resumeData: require('../../data/resume.json'),
			skillLabelMap: require('../../data/labelMap.json')['skill']
		}
	}

	render() {
		
		const skills = this.state.resumeData.skills;
		const skillGroups = [];
		for ( const [tech,value] of Object.entries( this.state.skillLabelMap ) ) {
			skillGroups.push(<SkillGroup key={tech} skills={skills} groupBy={this.state.groupBy} groupKey={tech} label={value} />);
		}

		return (
			<>
				{skillGroups}
			</>
		);
	}
}

export default Skills;