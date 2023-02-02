import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../../../core/userlist.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

public userList:any

  constructor(public userlistService: UserlistService) { }



  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userlistService.getData().subscribe((res:any) => {
      this.userList=res;
    })
  }

}
