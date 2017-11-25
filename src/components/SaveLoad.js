import React from "react";
import { connect } from "react-redux";

import migrations from "../migrations";
import load from "../actions/load";
import config from "../config";

const migrateSave = (save, migrations) => {
	const version = save.version;

	if (version === config.version) {
		return save;
	}

	for (const migration of migrations) {
		if (migration.version >= version) {
			save = migration(save);
		}
	}

	return save;
};

class SaveLoad extends React.Component {
	render() {
		return null;
	}

	step = () => {
		if (!this.running) {
			return;
		}

		const now = performance.now();
		const sinceSave = (now - this.lastSave) / 1000;

		if (sinceSave >= 1) {
			this.save();
		}

		requestAnimationFrame(this.step);
	};

	save() {
		const save = JSON.stringify({
			version: this.props.version,
			resources: this.props.resources,
			flags: this.props.flags,
		});

		localStorage.setItem("save", save);

		this.lastSave = performance.now();
	}

	load() {
		let save = localStorage.getItem("save");

		if (!save) {
			console.log("No saved data, starting a new game...");
			return;
		}

		try {
			save = JSON.parse(save);
		} catch (e) {
			console.error("Failed to load save data!");
			return;
		}

		const migrated = migrateSave(save, migrations);

		this.props.load(migrated);
	}

	componentDidMount() {
		this.load();

		this.lastSave = performance.now();
		this.running = true;
		requestAnimationFrame(this.step);
	}

	componentWillUnmount() {
		this.running = false;
	}
}

const mapStateToProps = ({ version, resources, flags }) => ({ version, resources, flags });
const mapDispatchToProps = (dispatch) => ({
	load: (data) => dispatch(load(data)),
});

SaveLoad = connect(
	mapStateToProps,
	mapDispatchToProps
)(SaveLoad);

export default SaveLoad;