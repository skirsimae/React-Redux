import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const data = [{
	date: "",
	high: "",
	low: "",
	volume: ""
}];

export default class Table extends React.Component {
	constructor( props, actions ) {
		super(props, actions);
	}

	render() {
		return (
				<BootstrapTable data={ data }>
					<TableHeaderColumn dataField='date' isKey className="table">time (5min interval)</TableHeaderColumn>
					<TableHeaderColumn dataField='high' className="table">high</TableHeaderColumn>
					<TableHeaderColumn dataField='low' className="table">low</TableHeaderColumn>
					<TableHeaderColumn dataField='volume' className="table">volume</TableHeaderColumn>
				</BootstrapTable>
		);
	}
}

