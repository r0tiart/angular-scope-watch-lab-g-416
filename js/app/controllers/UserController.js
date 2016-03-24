function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};
}

angular
	.module('app')
	.controller('UserController', UserController);