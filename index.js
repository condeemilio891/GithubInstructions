




// make a varible 
// data types. 
// boolean= true/false
// integer= whole number 
// float= decimal
// string= letters/ numbers


// these are variables 
    var babyYodaPicTarget = document.getElementById("babyYodaPic")
    var babyYodaPicBigAndSmallTarget= document.getElementById("babyYodaPicBigAndSmall")
   
    

// make a function 
    function makeCircle(){
        babyYodaPicTarget.style.borderRadius = "200px";
    }


    function makeSquare(){
        babyYodaPicTarget.style.borderRadius="0px"
    }

    function makeSmall(){
        babyYodaPicBigAndSmall.style.height="250px"
        babyYodaPicBigAndSmall.style.width="250px"
    }
   




    // this is the on click event 
    document.getElementById('yodaBtnCircle').addEventListener('click', e => {
        makeCircle();
      })

      document.getElementById('yodaBtnSquare').addEventListener('click', e => {
        makeSquare();
      })

      
      document.getElementById('yodaBtnSmall').addEventListener('click', e => {
        makeSmall();
      })