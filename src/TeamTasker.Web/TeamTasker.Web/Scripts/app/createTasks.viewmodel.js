function Task(id, name, dueDate, instructions, status, assignedMembers) {
  this.id = id;
  this.name = ko.observable(name);
  this.dueDate = dueDate;
  this.instructions = instructions;
  this.status = status;
  this.assignedMembers = ko.observableArray(assignedMembers);
};


var TasksViewModel = {
  name: ko.observable(),
  dueDate: ko.observable(),
  instructions: ko.observable(),
  tasks: ko.observableArray(),
  teamMembers: ko.observableArray(),
  assignMember: function () {
    $.ajax({
      url: '/tasks/assign',
      data: { taskId: this.currentTask().id, memberId: this.selectedMember().Id },
      type: 'POST'
    }).done(function () {
      TasksViewModel.currentTask().assignedMembers.push(TasksViewModel.selectedMember());
    });
  },
  selectedMember: ko.observable(),
  createTask: function () {
    $.ajax({
      url: '/tasks/create',
      data: { name: this.name(), dueDate: this.dueDate(), instructions: this.instructions() },
      type: 'POST',
      context: this
    }).done(function (id) {
      this.tasks.push(new Task(id, this.name(), this.dueDate(), this.instructions()));
    });
  },

  currentTask: ko.observable({}),
  getTask: function (task) {
    $.ajax({
      url: '/tasks/task/' + task.id,
      type: 'GET',
      context: TasksViewModel
    }).done(function (result) {
      var newTask = new Task(result.Id, result.Name, result.DueDate, result.Instructions, '', result.AssignedMembers);
      this.currentTask(newTask);
    });
  }
};


$.ajax({
  url: '/tasks/AllTasks',
  type: 'GET',
  context: TasksViewModel
}).done(function (results) {
  for (var i = 0; i < results.length; i++) {
    var task = results[i];
    this.tasks.push(new Task(task.Id, task.Name));
  }
});

$.ajax({
  url: '/teammember/AllTeamMembers',
  type: 'GET',
  context: TasksViewModel
}).done(function (teamMembers) {
  for (var i = 0; i < teamMembers.length; i++) {
    var teamMember = teamMembers[i];
    this.teamMembers.push(teamMember);
  }
});

ko.applyBindings(TasksViewModel, document.getElementById('create-task'));
