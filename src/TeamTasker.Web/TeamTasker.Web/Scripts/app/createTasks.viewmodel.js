function Task(id, name, dueDate, instructions, status, assignedMembers) {
  this.id = id;
  this.name = ko.observable(name);
  this.dueDate = dueDate;
  this.instructions = instructions;
  this.status = status;
  this.assignedMembers = assignedMembers;
};


var TasksViewModel = {
  name: ko.observable(),
  dueDate: ko.observable(),
  instructions: ko.observable(),
  tasks: ko.observableArray(),
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
      context: this
    }).done(function (result) {
      var newTask = new Task(result.Id, result.Name, result.DueDate, result.Instructions);
      this.currentTask(newTask);
    });
  }
}

ko.applyBindings(TasksViewModel, document.getElementById('create-task'));

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