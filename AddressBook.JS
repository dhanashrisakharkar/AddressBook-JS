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
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if(nameRegex.test(firstName))
      this._fistName = firstName;
    else 
    console.log("it is invalid");
  }
  get lastName (){ return this._lastName ;}
  set lastName (lastName ){
    let lastnameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if(lastnameRegex.test(lastName))
      this._lastName = lastName;
    else 
    console.log("it is invalid");
   
  }
  get address(){ return this._address;}
  set address(address){
    let addressRegex = RegExp("^[a-zA-Z]{2,}[ ][A-Za-z]{2,}$");
    if(addressRegex.test(address))
      this._address = address;
    else
    console.log("it is invalid");
    
  }
  get city(){ return this._city;}
  set city(city){
    let cityRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if(cityRegex.test(city))
      this._city = city;
    else 
    console.log("it is invalid");
    
  }
  get state(){ return this._state;}
  set state(state){
    let stateRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if(stateRegex.test(state))
      this._state = state;
    else
    console.log("it is invalid");
    
  }
  get zip() { return this._zip; }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{2,}$");
    if(zipRegex.test(zip))
      this._zip = zip;
    else
    console.log("it is invalid");
    
  }
  get phoneno(){ return this._phoneno;}
  set phoneno(phoneno){
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneno))
      this._phoneno = phoneno;
    else
    console.log("it is invalid");
  }
  get email(){ return this._email;}
  set email(email){
    let emailRegex = RegExp("^[a-zA-Z0-9]+([.+-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-z]{2,4}$");
    if(emailRegex.test(email))
      this._email = email;
    else
    console.log("it is invalid");
  }
  toString(){
    return (
      " FirstName: " + this.firstName + " LastName: " + this.lastName +"Address: " + this.address+ " City : " + this.city +" State: " + this.state + " Pincode: " + this.zip +" PhoneNo: " + this.phoneno + "Email-Id:" + this.email
    );
  }
}

let personSaveDetails = new PersonDetails("Dhanashri","Sakharkar","Durga Nagar","Nagpur","Maharashtra","440024","91 7350158214","dhanashrisakharkar333@gmail.com");
console.log(personSaveDetails.toString());

