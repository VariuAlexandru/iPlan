import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tasks = [
    {
      id:'1abcd',
      name: 'Take breakfast',
      type: 'default',
      status: 'done',
      icon: 'ionFastFoodOutline',
      iconWeight: 20
    },
    {
      id:'2abcd',
      name: 'Finish Pull Request',
      type: 'default',
      status: 'todo',
    },
    {
      id:'3abcd',
      name: 'Standup Meeting',
      type: 'default',
      status: 'in progress',
      time: '10:30', // will be a date-time .moment
      duration: 30,
      icon: 'heroUserGroup',
      iconWeight: 1
    },
    {
      id:'4abcd',
      name: 'Buy groceries',
      type: 'default',
      status: 'in progress',
      tasksDone: 1,
      list: [
        {
          id:'4abcd1',
          name: 'Water',
          status: 'done'
        },
        {
          id:'4abcd2',
          name: 'Apples',
          status: 'done',
        },
        {
          id:'4abcd3',
          name: 'Avocados',
          status: 'done'
        },
        {
          id:'4abcd4',
          name: 'Steak',
          status: 'todo',
        },
        {
          id:'4abcd5',
          name: 'Sugar',
          status: 'todo',
        }
      ]
    },
    {
      id:'4abcd',
      name: 'Read book',
      type: 'default',
      status: 'todo',
      icon: 'heroBookOpen',
      iconWeight: 1
    },    {
      id:'6abcd',
      name: 'Go to gym',
      type: 'default',
      status: 'todo',
      icon: 'ionBarbellOutline',
      iconWeight: 25

    },

  ]

  calcProgress(task: any) {
    if(task.list) {
      const percent = (task.tasksDone * 100)/task.list.length
      return `${Math.floor(percent)}%`
    } else {
      return '0%';
    }
  }

  updateStatus(task: any){
    if(task.status === 'todo' || task.status === 'in progress'  && !task.list){
      task.status = 'done'
    } else if (task.status === 'done') {
      task.status = 'todo'
    }
  }
}
