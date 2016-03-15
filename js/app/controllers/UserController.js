function SearchController() {
	this.username = '';

	this.country = {
		name: {

		}
	};
}

angular
	.module('app')
	.controller('SearchController', SearchController);