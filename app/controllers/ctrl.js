
myApp.controller('gitHubAppController',['gitHubAppService', function(gitHubAppService){
	var self = this;

	self.lookedUser;
	self.nbrOfRepos;
	self.error;
	self.firstLoad = true;


	self.showInfo = function(){
		self.firstLoad = false;
		self.searchUser();
		if(!self.error){
			self.showRepos();
		};	
	};
	
	self.searchUser = function(){
		self.error = false;
		gitHubAppService.getUser(self.lookedUser, function(userObtained){
			self.user = userObtained;
			//console.log(self.user);
			self.name = userObtained.name;
			self.followers = userObtained.followers;
			self.avatarurl = userObtained.avatar_url;
			self.location = userObtained.location;
			self.url = userObtained.url;
			self.nbrOfRepos = userObtained.public_repos;
			self.error = false;
		}, function(errorReceived){
			self.user = '';
			self.error = true;
			self.errorObj = errorReceived;
			self.errCode = errorReceived.status;
			self.errText = errorReceived.statusText;
			//console.log(self.errCode);
		});
	};

	self.showRepos = function(){
		gitHubAppService.searchRepos(self.lookedUser, function(repos){
			self.repos = repos;
		});
	};

}]);