import { Component, OnInit } from '@angular/core';
import { ReviewDataService } from '../services/review-data.service';
import { Review } from '../add-review/review.model';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  reviewObjects: Review[];
  tempOne: Review;
  constructor(private reviewDataService: ReviewDataService) { }

  ngOnInit() {
    this.reviewObjects = this.reviewDataService.reviewObjectMapper(this.reviewDataService.retrieve());
    // console.log("-----------About to display-----------");

    //this.reviewObjects.push(this.reviewDataService.retrieve());

    // console.log(this.reviewObjects[0]);
    // console.log(this.reviewObjects[1]);
    // console.log(this.reviewObjects[2]);
    // console.log(this.reviewObjects[3]);
    // console.log(this.reviewObjects[0].firstName);
    
    // this.tempOne = this.reviewObjects[0];
    // console.log(this.reviewObjects);
    //console.log(this.reviewObjects.entries firstName);
    
  }



}
