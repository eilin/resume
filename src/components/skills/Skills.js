import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import SkillGroup from './SkillGroup';

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			groupBy: 'techLabel',
			resumeData: require('../../data/resume.json'),
			labelMap: require('../../data/labelMap.json')
		}
	}

	switchGroup(group) {
		this.setState({
			groupBy: group
		});
	}

	buttonVariant(selfLabel) {
		return this.state.groupBy === selfLabel ? 'primary' : 'outline-secondary';
	}

	render() {
		let labels = this.state.labelMap[this.state.groupBy];
		const skills = this.state.resumeData.skills;
		let skillGroups = [];
		for (const [key, value] of Object.entries(labels)) {
			skillGroups.push(<SkillGroup key={key} skills={skills} groupBy={this.state.groupBy} groupKey={key} label={value} />);
		}

		return (
			<>
				<ButtonGroup aria-label="Basic example">
					<Button variant={this.buttonVariant("techLabel")} onClick={() => this.switchGroup("techLabel")}>Technology</Button>
					<Button variant={this.buttonVariant("level")} onClick={() => this.switchGroup("level")}>Proficiency</Button>
				</ButtonGroup>
				{skillGroups}
			</>
		);
	}
}

export default Skills;