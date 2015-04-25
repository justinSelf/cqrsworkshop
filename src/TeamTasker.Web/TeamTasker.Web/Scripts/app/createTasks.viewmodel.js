function Task(id, name, dueDate, instructions, status, assignedMembers) {
  this.id = id;
  this.name = name;
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
  }
}

ko.applyBindings(TasksViewModel, document.getElementById('create-task'));

$.ajax({
  url: 'tasks/alltasks',
  type: 'GET',
  context: TasksViewModel
}).done(function (results) {
  $.foreach(results, function (task) {
    this.tasks.push(new Task(task.id, task.name))
  }, this)
});