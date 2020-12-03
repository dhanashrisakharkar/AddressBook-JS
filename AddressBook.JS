class PersonDetails
{
  constructor (...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneno = params[6];
    this.email = params[7];
  }

  get firstName(){ return this._fistName;}
  set firstName(firstName){
    this._fistName=firstName;
  }
  get lastName (){ return this._lastName ;}
  set lastName (lastName ){
    this._lastName=lastName ;
  }
  get faddress(){ return this._address;}
  set address(address){
    this._address=address;
  }
  get city(){ return this._city;}
  set city(city){
    this._city=city;
  }
  get state(){ return this._state;}
  set state(state){
    this._state=state;
  }
  get zip() { return this._zip; }
  set zip(zip) {
    this._zip = zip;
  }
  get phoneno(){ return this._phoneno;}
  set phoneno(phoneno){
    this._phoneno=phoneno;
  }
  get email(){ return this._email;}
  set email(email){
    this._email=email;
  }
  toString(){
    return (
      " FirstName: " + this.firstName + " LastName: " + this.lastName +"Address: " + this.address+ " City : " + this.city +" State: " + this.state + " Pincode: " + this.zip +" PhoneNo: " + this.phoneno + "Email-Id:" + this.email
    );
  }
}

let personSaveDetails = new PersonDetails("Dhanashri","Sakharkar","Durga Nagar","Nagpur","Maharashtra","440024","7350158214","dhanashrisakharkar333@gmail.com");
console.log(personSaveDetails.toString());

