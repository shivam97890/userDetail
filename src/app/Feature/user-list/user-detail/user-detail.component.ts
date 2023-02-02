import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserlistService } from 'src/app/core/userlist.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: string = '';
  detail: any
  constructor(
    private activatedRoute: ActivatedRoute,
    public userlistService: UserlistService
  ) {

    this.activatedRoute.params.subscribe((params: any) => {

      console.log(params.id);
      this.id = params.id // Print the parameter to the console. 
    });
  }


  ngOnInit(): void {
    this.getDetails();
  }


  getDetails() {
    this.userlistService.getUserPaticularDetails(this.id).subscribe((res: any) => {
      console.log(res)
      this.detail = res;
    })
  }



}
