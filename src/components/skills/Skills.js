import React, { Component } from 'react';
import SkillGroup from './SkillGroup';

class Skills extends Component {
	state = {
		groupBy: 'techLabel'
	}

	// TODO move data out
	techLabelMap = {
		"language": "Programming Languages",
		"framework": "Frameworks",
		"testing": "Testing",
		"database": "Database Systems",
		"misc": "Miscellaneous"
	}

	render() {
		const resumeData = require('../../data/resume.json');
		const skills = resumeData.skills;
		const skillGroups = [];
		for ( const [tech,value] of Object.entries( this.techLabelMap ) ) {
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