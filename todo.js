var mytodo = angular.module("myToDo", []);

mytodo.controller("ToDoCtrl", function ($scope){
	$scope.todos = [	
					{
						text: "Chuẩn bị seminar", 
						done: false
					},
					{
						text: "Code đồ án", 
						done:false
					}
				];

	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};

	$scope.addTodo =  function(){
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = '';
	};
});