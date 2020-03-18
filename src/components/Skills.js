import React, { Component } from 'react'

class Skills extends Component {
	state = {
		groupBy: 'techLabel'
	}

	render() {
		const resumeData = require('../data/resume.json');
		const skills = resumeData.skills;
		let languages = skills.filter((skill) => skill.techLabel === 'language');
		languages.sort((a, b) => a.name < b.name ? -1 : 1)
		const listItems = languages.map((skill) =>
			<li>{skill.name}</li>
		);
		return (
			<>
				<h3>Programming Languages</h3>
				<ul>{listItems}</ul>
			</>
		);
	}
}

export default Skills;