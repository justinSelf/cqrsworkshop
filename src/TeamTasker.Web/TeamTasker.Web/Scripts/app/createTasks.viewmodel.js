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
    alert('creating task');
  }
}

ko.applyBindings(TasksViewModel, document.getElementById('create-task'));