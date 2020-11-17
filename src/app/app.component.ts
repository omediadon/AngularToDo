import {Component} from '@angular/core';

@Component({
               selector:    'app-root',
               templateUrl: './app.component.html',
               styleUrls:   ['./app.component.sass'],
           })
export class AppComponent{

    public title = 'Angular ToDo App';

    /* An empty array that is responsible
    to add a division */
    public todos: Array<string> = [];

    /* A two-way binding performed which
    pushes text on division */
    public todo = '';

    /* When input is empty, it will
    not create a new division */
    public addToDo(): any{
        if (this.todo !== ''){
            this.todos.push(this.todo);
            this.todo = '';
        }
    }

    /* This function takes to input the
    task, that has to be deleted*/
    public deleteToDo(index: number): any{
        this.todos.splice(index, 1);
    }
}
