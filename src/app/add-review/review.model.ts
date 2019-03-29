

export class Review{
    private _restaurantId: number;
    private _firstName: string;
    private _lastName: string;
    private _restaurantName: string;
    private _restaurantAddress: string;
    private _review: string;


    public Review(restaurantId: number, firstName: string, lastame: string, restaurantName: string, restaurantAddress: string, review: string){
        this._restaurantId = restaurantId;
        this._firstName = firstName;
        this._lastName = lastame;
        this._restaurantName = restaurantName;
        this._restaurantAddress = restaurantAddress;
        this._review = review;
    }

     
    public get restaurantId() : number {
        return this._restaurantId;
    }

    
    public set restaurantId(restaurantId : number) {
        this._restaurantId = restaurantId;
    }
    
    
    public get firstName() : string {
        return this._firstName;
    }

    public set firstName(firstName : string) {
        this._firstName = firstName;
    }

    
    public get lastName() : string {
        return this._lastName;
    }

    
    public set lastName(lastName : string) {
        this._lastName = lastName;
    }
    
    public get restaurantName() : string {
        return this._restaurantName;
    }

    
    public set restaurantName(restaurantName : string) {
        this._restaurantName = restaurantName;
    }

    
    public get restaurantAddress() : string {
        return this._restaurantAddress;
    }

    
    public set restaurantAddress(restaurantAddress : string) {
        this._restaurantAddress = restaurantAddress;
    }

    
    public get review() : string {
        return this._review;
    }

    
    public set review(review : string) {
        this._review = review;
    }
} 