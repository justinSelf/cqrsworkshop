function TeamMember(name) {
  this.name = ko.observable(name);
}


var teamViewModel = {
  addTeamMember: function () {

    $.ajax({
      url: '/api/teammembers/add',
      data: { name: teamViewModel.newTeamMemberName() },
      type: 'POST',
      context: this
    }).done(function () {
      this.teamMembers.push(new TeamMember(this.newTeamMemberName()));
    });


  },
  newTeamMemberName: ko.observable(),
  teamMembers: ko.observableArray()

};


ko.applyBindings(teamViewModel);