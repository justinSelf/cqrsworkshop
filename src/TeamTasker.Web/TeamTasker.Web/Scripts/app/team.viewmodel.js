function TeamMember(name) {
  this.name = ko.observable(name);
}


var teamViewModel = {
  addTeamMember: function () {
    this.teamMembers.push(new TeamMember(this.newTeamMemberName()));
  },
  newTeamMemberName: ko.observable(),
  teamMembers: ko.observableArray()

};


ko.applyBindings(teamViewModel);