function TeamMember(name) {
  this.name = ko.observable(name);
}


var teamViewModel = {
  addTeamMember: function () {

    $.ajax({
      url: '/teammember/add',
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

$.ajax({
  url: '/teammember/allteammembers',
  type: 'GET',
  context: teamViewModel
}).done(function (result) {
  for (var i = 0; i < result.length; i++) {
    this.teamMembers.push(new TeamMember(result[i]));
  }
});