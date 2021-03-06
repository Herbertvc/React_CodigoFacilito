import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
	constructor(){
		super();
		this.state = {
			filter: null
		}
	}

	filterList (ev) {
		let filter = ev.target.value;
		this.setStage({
			filter: filter
		})
	}

	render() {
		return (
			<div>
				<SearchBar onChange={this.filterList.bind(this)} />
				<ProductTable products={this.props.store} />
			</div>
		)
	}
}