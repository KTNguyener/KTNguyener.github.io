var d = new Date();
//gets ridiculous date that is complicated to read
var date= d.getDate();
//just takes the date number from d
var month= d.getMonth() + 1;
//takes the month number from d and adds one since months are 0-11
var year= d.getFullYear();
//gets the current year from d

function addGuest1(event){
  var roomLength=document.getElementsByClassName('guestsOfRoomOne')[0].getElementsByTagName('li');
  //creates a variable that measures all the items in the ordered list of guests
  var enter=event.which;
  //creates a variable that is saved based on what key is pressed
  var sound=document.getElementById('audio');
  
  
  if (enter==13){
  //checks to see if enter key is pressed
    if (roomLength.length==3){
    document.body.style.backgroundImage = 'url("https://static.wixstatic.com/media/a62e2a_0dfbbd13509c419eb600c5edb6dabb60~mv2.gif")';
    document.getElementById('roomOne').style.visibility="hidden";
    document.getElementById('roomTwo').style.visibility="hidden";
    document.getElementById('roomThree').style.visibility="hidden";
    document.getElementById('roomFour').style.visibility="hidden";
    sound.play();
    setTimeout(function(){
      document.body.style.backgroundImage = "url('https://images6.alphacoders.com/349/349835.jpg')";
      document.getElementById('roomOne').style.visibility="visible";
      document.getElementById('roomTwo').style.visibility="visible";
      document.getElementById('roomThree').style.visibility="visible";
      document.getElementById('roomFour').style.visibility="visible";
    }, 4000);
  }
    if (roomLength.length<3){
      var roomOneGuests = document.createElement('li');
      //creates a display case for roomOneGuests
      var removeButton = document.createElement('button');
      //creates a button to put in the display case
      var x=document.getElementById('guestOne').value;
      //finds user input on guest name and saves it
       var newText1=document.createTextNode(x + " - " + month + "/" + date + "/" + year);
      //takes the saved user guest name and prepares it to be appended
      roomOneGuests.appendChild(removeButton);
      //appends the button to the display case
      removeButton.appendChild(newText1);
      //takes the prepared userinput and puts it in the button
      var position=document.getElementsByClassName('guestsOfRoomOne')[0];
      //marks where the dispaly case will go
      position.appendChild(roomOneGuests);
      //puts display case with item in it on the ordered list wall
      document.getElementById('guestOne').value= "";
      //erases whatever name was put in the input field
      removeButton.onclick= function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        //button goes all the way up the parentnode and removes its child
        document.getElementById('message1').innerHTML="Enter a guest name and press Enter";
      //changes the message to say that the room is full
        document.getElementById('roomOne').style.backgroundColor="white";
        //background changed to white
      };
      //gives the button a function
    }
    else{return}
  }
  else{return}
  if (roomLength.length==3){
  //checks the room length to see if it is more than three
    document.getElementById('roomOne').style.backgroundColor='red';
    //makes the div box red if the room is full
    document.getElementById('message1').innerHTML="Room is full.";}
    //changes the message to say that the room is full
  else{document.getElementById('roomOne').style.backgroundColor='white';
  //makes the background constantly white unless the room hits three
  }
  }

function removeGuest1(value){
  document.getElementById('guestNumber1').value='Set';
  //changes the select box back to the original position
  var list=document.getElementsByClassName('guestsOfRoomOne')[0].getElementsByTagName('li')[value];
  //finds what select number was chosen and saves its value and applies it to the list items of guests
  var ul=list.parentNode;
  ul.removeChild(list);
  //finds the parent and separates the parent and child
  document.getElementById('roomOne').style.backgroundColor='white';
  //no matter what, removing a guest changes the background to white
  document.getElementById('message1').innerHTML="Enter a guest name and press Enter";
  //message changes back to its original
}

function clearGuest1(){
  document.getElementById('guestNumber1').value='Set';
  document.getElementsByClassName('guestsOfRoomOne')[0].innerHTML="";
  document.getElementById('roomOne').style.backgroundColor='white';
  document.getElementById('message1').innerHTML="Enter a guest name and press Enter";
}
//same concept as before, but it replaces the entire class with nothing

function addGuest2(event){
  var roomLength=document.getElementsByClassName('guestsOfRoomTwo')[0].getElementsByTagName('li');
  var enter=event.which;
  var vader=document.getElementById('vader');
  
  if (enter==13){
    if (roomLength.length==3){
    document.body.style.backgroundImage = 'url("darth-vader-star-wars-animated-gif-7.gif")';
    document.getElementById('roomOne').style.visibility="hidden";
    document.getElementById('roomTwo').style.visibility="hidden";
    document.getElementById('roomThree').style.visibility="hidden";
    document.getElementById('roomFour').style.visibility="hidden";
    vader.play();
    setTimeout(function(){
      document.body.style.backgroundImage = "url('https://images6.alphacoders.com/349/349835.jpg')";
      document.getElementById('roomOne').style.visibility="visible";
      document.getElementById('roomTwo').style.visibility="visible";
      document.getElementById('roomThree').style.visibility="visible";
      document.getElementById('roomFour').style.visibility="visible";
    }, 4000);
    }
   if (roomLength.length<3){
      var roomTwoGuests = document.createElement('li');
      //creates a display case for roomOneGuests
      var removeButton2 = document.createElement('button');
      //creates a button to put in the display case
      var xx=document.getElementById('guestTwo').value;
      //finds user input on guest name and saves it
      var newText2=document.createTextNode(xx + " - " + month + "/" + date + "/" + year);
      //takes the saved user guest name and prepares it to be appended
      roomTwoGuests.appendChild(removeButton2);
      //appends the button to the display case
      removeButton2.appendChild(newText2);
      //takes the prepared userinput and puts it in the display case
      var position=document.getElementsByClassName('guestsOfRoomTwo')[0];
      //marks where the dispaly case will go
      position.appendChild(roomTwoGuests);
      //puts display case with item in it on the ordered list wall
      document.getElementById('guestTwo').value= "";
      //erases whatever name was put in the input field
      removeButton2.onclick= function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        //button goes all the way up the parentnode and removes its child
        document.getElementById('roomTwo').style.backgroundColor="white";
        //background changed to white
        document.getElementById('message2').innerHTML="Enter a guest name and press Enter";
      };
      //gives the button a function
    }
    else{return}
  }
  else{return}
  if (roomLength.length==3){
    document.getElementById('roomTwo').style.backgroundColor='red';
    document.getElementById('message2').innerHTML="Room is full.";
  }
  else{document.getElementById('roomTwo').style.backgroundColor='white';}
}

function removeGuest2(value){
  document.getElementById('guestNumber2').value='Set';
  var list2=document.getElementsByClassName('guestsOfRoomTwo')[0].getElementsByTagName('li')[value];
  var ul2=list2.parentNode;
  ul2.removeChild(list2);
  document.getElementById('roomTwo').style.backgroundColor='white';
  document.getElementById('message2').innerHTML="Enter a guest name and press Enter";
}

function clearGuest2(){
  document.getElementById('guestNumber2').value='Set';
  document.getElementsByClassName('guestsOfRoomTwo')[0].innerHTML="";
  document.getElementById('roomTwo').style.backgroundColor='white';
  document.getElementById('message2').innerHTML="Enter a guest name and press Enter";
}

function addGuest3(event){
  var roomLength=document.getElementsByClassName('guestsOfRoomThree')[0].getElementsByTagName('li');
  var enter=event.which;
  var audio=document.getElementById('stupidDecision');
  if (enter==13){
    if (roomLength.length==3){
    document.body.style.backgroundImage = 'url("ezgif.com-video-to-gif.gif")';
    document.getElementById('roomOne').style.visibility="hidden";
    document.getElementById('roomTwo').style.visibility="hidden";
    document.getElementById('roomThree').style.visibility="hidden";
    document.getElementById('roomFour').style.visibility="hidden";
    audio.play();
    setTimeout(function(){
      document.body.style.backgroundImage = "url('https://images6.alphacoders.com/349/349835.jpg')"
      document.getElementById('roomOne').style.visibility="visible";
      document.getElementById('roomTwo').style.visibility="visible";
      document.getElementById('roomThree').style.visibility="visible";
      document.getElementById('roomFour').style.visibility="visible";
    }, 6780);
  }
    if (roomLength.length<3){
      var roomThreeGuests = document.createElement('li');
      //creates a display case for roomOneGuests
      var removeButton3 = document.createElement('button');
      //creates a button to put in the display case
      var xxx=document.getElementById('guestThree').value;
      //finds user input on guest name and saves it
      var newText3=document.createTextNode(xxx + " - " + month + "/" + date + "/" + year);
      //takes the saved user guest name and prepares it to be appended
      roomThreeGuests.appendChild(removeButton3);
      //appends the button to the display case
      removeButton3.appendChild(newText3);
      //takes the prepared userinput and puts it in the display case
      var position=document.getElementsByClassName('guestsOfRoomThree')[0];
      //marks where the dispaly case will go
      position.appendChild(roomThreeGuests);
      //puts display case with item in it on the ordered list wall
      document.getElementById('guestThree').value= "";
      //erases whatever name was put in the input field
      removeButton3.onclick= function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        //button goes all the way up the parentnode and removes its child
        document.getElementById('roomThree').style.backgroundColor="white";
        //background changed to white
        document.getElementById('message3').innerHTML="Enter a guest name and press Enter"
      };
      //gives the button a function
    }
    else{
      return;
    }
  }
  else{return}
  if (roomLength.length==3){
    document.getElementById('roomThree').style.backgroundColor='red';
    document.getElementById('message3').innerHTML="Room is full.";
  }
  else{document.getElementById('roomThree').style.backgroundColor='white';}
}

function removeGuest3(value){
  document.getElementById('guestNumber3').value='Set';
  var list3=document.getElementsByClassName('guestsOfRoomThree')[0].getElementsByTagName('li')[value];
  var ul3=list3.parentNode;
  ul3.removeChild(list3);
  document.getElementById('roomThree').style.backgroundColor='white';
  document.getElementById('message3').innerHTML="Enter a guest name and press Enter";
}

function clearGuest3(){
  document.getElementById('guestNumber3').value='Set';
  document.getElementsByClassName('guestsOfRoomThree')[0].innerHTML="";
  document.getElementById('roomThree').style.backgroundColor='white';
  document.getElementById('message3').innerHTML="Enter a guest name and press Enter";
}

function addGuest4(event){
  var roomLength=document.getElementsByClassName('guestsOfRoomFour')[0].getElementsByTagName('li');
  var enter=event.which;
  var jumpScare=document.getElementById('jumpScare');
  if(enter==13){
    if (roomLength.length==3){
    document.getElementById('roomOne').style.visibility="hidden";
    document.getElementById('roomTwo').style.visibility="hidden";
    document.getElementById('roomThree').style.visibility="hidden";
    document.getElementById('roomFour').style.visibility="hidden";
    document.body.style.backgroundImage = 'url("Zlu2v5p_by_snowacassassin-d92osxx.gif")';
    jumpScare.play();
    setTimeout(function(){
      document.body.style.backgroundImage = "url('https://images6.alphacoders.com/349/349835.jpg')";
      document.getElementById('roomOne').style.visibility="visible";
      document.getElementById('roomTwo').style.visibility="visible";
      document.getElementById('roomThree').style.visibility="visible";
      document.getElementById('roomFour').style.visibility="visible";
    }, 2000);
    }
    if (roomLength.length<3){
      var roomFourGuests = document.createElement('li');
      //creates a display case for roomOneGuests
      var removeButton4 = document.createElement('button');
      //creates a button to put in the display case
      var xxxx=document.getElementById('guestFour').value;
      //finds user input on guest name and saves it
      var newText4=document.createTextNode(xxxx + " - " + month + "/" + date + "/" + year);
      //takes the saved user guest name and prepares it to be appended
      roomFourGuests.appendChild(removeButton4);
      //appends the button to the display case
      removeButton4.appendChild(newText4);
      //takes the prepared userinput and puts it in the display case
      var position=document.getElementsByClassName('guestsOfRoomFour')[0];
      //marks where the dispaly case will go
      position.appendChild(roomFourGuests);
      //puts display case with item in it on the ordered list wall
      document.getElementById('guestFour').value= "";
      //erases whatever name was put in the input field
      removeButton4.onclick= function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        //button goes all the way up the parentnode and removes its child
        document.getElementById('roomFour').style.backgroundColor="white";
        //background changed to white
        document.getElementById('message4').innerHTML="Enter a guest name and press Enter"
      };
      //gives the button a function
    }
    else{
      return
    }
  }
  else{return}
  if (roomLength.length==3){
    document.getElementById('roomFour').style.backgroundColor='red';
    document.getElementById('message4').innerHTML="Room is full.";
  }
  else{document.getElementById('roomFour').style.backgroundColor='white';}
}

function removeGuest4(value){
  document.getElementById('guestNumber4').value='Set';
  var list4=document.getElementsByClassName('guestsOfRoomFour')[0].getElementsByTagName('li')[value];
  //finds the ordered list and the index selected by the user
  var ul4=list4.parentNode;
  //finds the parent of the child
  ul4.removeChild(list4);
  //removes child from parent node
  document.getElementById('roomFour').style.backgroundColor='white';
  document.getElementById('message4').innerHTML="Enter a guest name and press Enter";
}

function clearGuest4(){
  document.getElementById('guestNumber3').value='Set';
  document.getElementsByClassName('guestsOfRoomFour')[0].innerHTML="";
  document.getElementById('roomFour').style.backgroundColor='white';
  document.getElementById('message4').innerHTML="Enter a guest name and press Enter";
}

//drop down box code;
//function report(value){
//	var list=document.getElementsByClassName('items')[0].getElementsByTagName('li')[value];
//  var ul=list.parentNode;
//  ul.removeChild(list)
//}
//<select onchange="report(this.value)">
//  <option value="0">1</option>
//  <option value="1">2</option>
//  <option value="2">3</option>
//</select>
//<ol class="items">
//  <li>asdf</li>
//  <li>jkl;</li>
//  <li>ajdk</li>
//</ol>