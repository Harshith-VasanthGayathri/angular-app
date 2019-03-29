import { Injectable } from '@angular/core';
import { Review } from '../add-review/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {
  reviewObjects: Review[] = [];

  constructor() { }

  /**
   * save
   */
  public save(review: Review) {
    this.reviewObjects = JSON.parse(localStorage.getItem('Review'));
    review.restaurantId = (this.reviewObjects.length + 1);
    this.reviewObjects.push(review);

    //localStorage.setItem(review.restaurantId, JSON.stringify(review));
    localStorage.setItem('Review', JSON.stringify(this.reviewObjects));
    
  }

  /**
   * retrieve
   */
  public retrieve(): Review[] {
    return JSON.parse(localStorage.getItem('Review'));
  }

  /**
   * reviewObjectMapper: Maps the JSON to the Model Object
   */
  public reviewObjectMapper(object: any): Review[] {    
    for(let temp of object){

        let reviewObj = new Review();//temp._restaurantId, temp._firstName, temp._lastName, temp._restaurantName, temp._restaurantAddress, temp._review
        reviewObj.restaurantId = temp._restaurantId;
        reviewObj.firstName =temp._firstName;
        reviewObj.lastName = temp._lastName;
        reviewObj.restaurantName = temp._restaurantName;
        reviewObj.restaurantAddress = temp._restaurantAddress;
        reviewObj.review = temp._review;

        this.reviewObjects.push(reviewObj);
    }

    return this.reviewObjects;
    
  }
}
