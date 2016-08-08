System.register(['angular2/core', './task-list.component', './task.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_list_component_1, task_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (task_model_1_1) {
                task_model_1 = task_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tasks = [
                        new task_model_1.Task("create To-Do List app", 0),
                        new task_model_1.Task("Learn Kung-Fu.", 1),
                        new task_model_1.Task("Rewatch Blade Runner", 2),
                        new task_model_1.Task("Do the laundry", 3)
                    ];
                }
                AppComponent.prototype.taskWasSelected = function (clickedTask) {
                    console.log(clickedTask);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [task_list_component_1.TaskListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>To-Do List</h1>\n      <task-list [taskList]=\"tasks\"\n      (onTaskSelect)=\"taskWasSelected($event)\"></task-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map