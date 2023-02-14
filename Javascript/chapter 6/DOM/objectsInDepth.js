
// constructor function

function BellBoy(name, age, hasWorkPermit, languages)
{
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit,
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("May I take your Suitcase?");
        pickUpSuitcase();
        move();
    } 
}


function HouseKeeper(name, yearsOfExperience, cleaningReportoire)
{
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningReportoire = cleaningReportoire;
    this.cleaning = function(){
        alert("May I clean your place?");
        clean();
    }
}


// child of BellBoy
var bellBoy1 = new BellBoyo("Timmy", 44, true, ["French"]);

//child of HouseKeeper
var houseKeeper1 = new HouseKeeper("Jasmine", 66, ['Bathroom', 'Bedroom']);



// call back functions
function anotherAddEventListener(typeOfEvent,callBackFunction){

    var eventThatHappened = 
    {
        eventType : "keypress",
        key :'p',
        durationOfKeypress: 2
    }

    if(eventThatHappened.eventType === typeOfEvent){
        callBackFunction(eventThatHappened);
    }
}




