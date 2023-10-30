import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEntryComponent } from './components/todo-entry.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoItem } from '../models';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoEntryComponent,TodoListComponent],
  template: `
    <section>
      <app-todo-entry (itemAdded)="addItem($event)"/>
</section>
<section>
  <app-todo-list [todos]="list" />
</section>
  `,
  styles: []
})
export class TodosComponent {
  list: TodoItem[] = [
    { id: "1", description: "Play Baldurs Gate", completed: false },
    { id: "2", description: "Feed Cats", completed: true },
  ];

  addItem(description: string)
  {
    const newItem: TodoItem = {
      id: '',
      description,
      completed: false
    }
    this.list = [newItem, ...this.list]
  }
}
