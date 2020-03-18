import React, { Component } from 'react'

class SkillGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: props.label,
			groupBy: props.groupBy,
			groupKey: props.groupKey,
			skills: props.skills
		};
	}

	render() {
		console.log("filtering by " + this.state.groupBy + ", " + this.state.groupKey)
		let group = this.state.skills.filter((skill) => skill[this.state.groupBy] === this.state.groupKey);
		group.sort((a, b) => a.name < b.name ? -1 : 1)
		const listItems = group.map((skill) =>
			<li key={'key-'+skill.name}>{skill.name}</li>
		);
		return (
			<>
				<h3>{this.state.label}</h3>
				<ul>{listItems}</ul>
			</>
		);
	}
}

export default SkillGroup;