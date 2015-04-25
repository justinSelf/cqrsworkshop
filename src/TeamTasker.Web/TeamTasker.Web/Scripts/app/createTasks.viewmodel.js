function Task(name, dueDate, instructions, status, assignedMembers) {
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
    }).done(function () {
      this.tasks.push(new Task(this.name(), this.dueDate(), this.instructions()));
    });
  }
}

ko.applyBindings(TasksViewModel, document.getElementById('create-task'));