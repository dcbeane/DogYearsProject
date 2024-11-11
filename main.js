//My current age
    const myAge = 25;

//The first 2 years of a dogs life are called the "Early Years" which equate as 10.5 dog years
    var earlyYears = 2;
    earlyYears = earlyYears * 10.5;

//Since the first 2 years are already accounted for we will create a new variable laterYears and substract 2 for the variable myAge.    
    var laterYears = myAge - 2;

//In the "Later Years" 1 year is 4 dog years.  Multiplied laterYears by 4 to account for dog years
    laterYears *= 4;

//This code adds earlyYears and laterYears together to define a new variable 'myAgeInDogYears'
    const myAgeInDogYears = earlyYears + laterYears;

//Here we create a new variable called 'myName' while also using .toLowerCase to return the string in all lowercase.
    const myName = "Devin".toLowerCase();

//When the code is run it will read out my name, current age, and my age in dog years.
    console.log("My name is", myName, "I am", myAge, "years old in human years which is", myAgeInDogYears, "years old in dog years");
