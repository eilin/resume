import React, { Component } from 'react';
import SkillGroup from './SkillGroup';

class Skills extends Component {
	state = {
		groupBy: 'techLabel'
	}

	render() {
		const resumeData = require('../../data/resume.json');
		const skills = resumeData.skills;

		return (
			<>
				<SkillGroup skills={skills} groupBy={this.state.groupBy} groupKey='language' label="Programming Languages" />
				<SkillGroup skills={skills} groupBy={this.state.groupBy} groupKey='framework' label="Frameworks" />
				<SkillGroup skills={skills} groupBy={this.state.groupBy} groupKey='testing' label="Testing" />
				<SkillGroup skills={skills} groupBy={this.state.groupBy} groupKey='database' label="Database Systems" />
				<SkillGroup skills={skills} groupBy={this.state.groupBy} groupKey='misc' label="Miscellaneous" />
			</>
		);
	}
}

export default Skills;