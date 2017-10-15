var list = document.getElementById('multiples');
for (var i = 1; i <= 100; i++) {
    //Keeps appending list elements until it reaches 100
    var newNum = document.createElement('li');
    if(i % 3 == 0 && i % 5 == 0){
        //If i is a multiple of both print FizzBuzz
        newNum.innerHTML = "FizzBuzz";
    }else if (i % 3 == 0){
        //Checks if i is a multiple of 3 to print Fizz
        newNum.innerHTML = "Fizz";
    }else if(i % 5 == 0){
        //Checks if i is a multiple of 5 to print Buzz
        newNum.innerHTML = "Buzz";
    }else{
        //If i isnt a multiple of 3 or 5 just print the number
        newNum.innerHTML = i;
    }
    //Appends the new list item to the list
    list.appendChild(newNum);
}
