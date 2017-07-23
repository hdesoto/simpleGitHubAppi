myApp.service('gitHubAppService',function($http){
	var self = this;


	self.getUser = function(lookedUser,callback,onError){
		var url = 'https://api.github.com/users/'+lookedUser;
		//console.log(url);
		$http.get(url)
			.then(function(response){
				var userData = response.data;
				callback(userData);
			}, function(response){
				onError(response);
			});
	};

	self.searchRepos = function(lookedUser,callback){
		var url = 'https://api.github.com/users/'+ lookedUser+ '/repos';
		$http.get(url)
			.then(function(response){
				var repos = response.data;
				callback(repos);
			},);
	};
});