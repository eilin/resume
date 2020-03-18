import React, { Component } from 'react';
import SkillGroup from './SkillGroup';

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			groupBy: 'level',
			resumeData: require('../../data/resume.json'),
			labelMap: require('../../data/labelMap.json')
		}
	}

	render() {
		let labels = this.state.labelMap[this.state.groupBy];
		const skills = this.state.resumeData.skills;
		let skillGroups = [];
		for (const [key,value] of Object.entries(labels)) {
			skillGroups.push(<SkillGroup key={key} skills={skills} groupBy={this.state.groupBy} groupKey={key} label={value} />);
		}

		return (
			<>
				{skillGroups}
			</>
		);
	}
}

export default Skills;