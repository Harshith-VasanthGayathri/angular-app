import { Component, OnInit } from '@angular/core';
import { Review } from "./review.model";
import { NgForm } from '@angular/forms';
import { ReviewDataService } from '../services/review-data.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  // title: String;
  // firstName: String;
  // lastName: String;
  // restaurantName: String;
  // constructor() { 
  //   //this.title = '';
  //   this.firstName='';
  //   this.lastName='';
  //   this.restaurantName=''
   reviewObj: Review;
  
   constructor(private reviewDataService: ReviewDataService) {
     
   }

  ngOnInit() {
    console.log("New Instance");
    //this.title = 'Test Movie Title';
    this.reviewObj = new Review();
    //this.reviewObj.restaurantId = null;
    
  }


  // changeEventListener(){
  //   console.log(this.firstName);
  // }

  onSubmitHandler(addReviewForm: NgForm){
   // Review reviewObj = new Review(Review.);

    // console.log(addReviewForm);
    // console.log(this.reviewObj);
    // console.log(this.reviewObj.firstName);
    //this.reviewObj.restaurantId = "ONE";
    this.reviewDataService.save(this.reviewObj);
    // if(this.reviewObj.restaurantId === null){
    //   //this.reviewObj.restaurantId = Number(1).toString;
    //   localStorage.setItem('Review', JSON.stringify(this.reviewObj));

    // }else{
    //   localStorage.setItem('Review', JSON.stringify(this.reviewObj));

    // }
   
    // console.log("--------");
    // console.log(localStorage.getItem('Review'));
  }

}