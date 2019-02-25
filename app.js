const Discord = require('discord.js');
const client = new Discord.Client();
var n = 1;
/*1: just started
2: Description
3: Commands*/
var room = 0;
/*0 is AP CS room
1 is the room with the ispl*/
var on = true;
var progress = [1, 0, 0, 0, 0, 0];
/*0 means a room is locked, 1 means in progress, 2 means done*/
var universals = '"!kill" ends the game. \n' 
		  + '"!restart" starts the game. \n' 
		  //+ '"!inventory" will return all the items you currently have. \n' 
		  //+ '"!examineroom" returns a description of the room. \n'
		  + '"!enter" leaves your current room and enters any room you have unlocked. \n'
		  + '"!help" prints all of this again. \n';

client.on("message", message => {
	function roomDescription(){
		if(room == 0){
			if(progress[0] == 2){
				return('You are in room E, the AP CS room. "Decipher 051409071301 enigma" is written on a whiteboard. ');
			}else{
				return('You are in room E, the AP CS room. "Decipher 051409071301" is written on a whiteboard. ');
			}
		}else if (room == 1) {
			if(progress[1] == 1) {
				return ('You are in room C, an algebra room. A desktop computer lies on one of the desks, and there is a book next to it.');
			}else if(progress[1] == 2) {
				return ('You are in room C, an algebra room. A desktop computer lies on one of the desks, and there is a book next to it. The words lisp and array are written.');
			}else if(progress[1] == 3) {
				return ('You are in room C, an algebra room. A desktop computer lies on one of the desks, and there is a book next to it. The word array is written.');
			}
		}else if (room == 2) {
			if(progress[2] == 0) {
				return (' The room is locked.'); 
			}else if(progress[2] == 1) {
				return ('A peculiar looking newspaper sits on a plastic chair. A padlocked safe leans against the closest wall. ');
			}else if(progress[2] == 2) {
				return ('A peculiar looking newspaper sits on a plastic chair. A padlocked safe leans against the closest wall. The words lambda and adapt are written.');
			}else if(progress[2] == 3) {
				return ('A peculiar looking newspaper sits on a plastic chair. A padlocked safe leans against the closest wall. The word lambda is written.');
			}
		}else if (room == 3) {
			if(progress[3] == 0) {
				return ('The room is locked.');
			}
			if(progress[3] == 1) {
				return ('The whiteboard has writing on it, and an iPhone 4 rests beneath it. ');
			}else if(progress[3] == 2) {
				return ('The whiteboard has writing on it, and an iPhone 4 rests beneath it. The words machine and yahoo are written.');
			}else if(progress[3] == 3) {
				return ('The whiteboard has writing on it, and an iPhone 4 rests beneath it. The word machine is written.');
			}
		}else if (room == 4) {
			if(progress[4] == 1) {
				return ('You enter room SE, the Shakespeare room, and see a large triangle and a locked box with a slip of paper that says YXRQFPQX and +3.');
			}else if(progress[4] == 2) {
				return ('You enter room SE, the Shakespeare room, and see a large triangle and a locked box with a slip of paper that says YXRQFPQX and +3. The words pascal and bautista are written.');
			}else if(progress[4] == 3) {
				return ('You enter room SE, the Shakespeare room, and see a large triangle and a locked box with a slip of paper that says YXRQFPQX and +3. The word pascal is written.');
			}else if(progress[4] == 4) {
				return ('You enter room SE, the Shakespeare room, and see a large triangle and a locked box with a slip of paper that says YXRQFPQX and +3. The word bautista is written.')
			}
		}else if (room == 5) {
			if(progress[5] == 1) {
				return ('You are in The Bathroom. It is empty, save for one gigantic safe sitting in the center. It has a sequence of ten blanks. As you step closer, a small flap opens towards you. In it is carefully written note. Look in the past, as knowledge comes first. The missing piece is rooms dispersed. The opened flap reveals a glass pane, with a clearly visible key sitting in a holder. This is it. What do you submit into the keypad?');
			}else if(progress[5] == 2) {
				return ('The puzzle is complete.');
			}
		}else{
			return (": The room number, " + room + ", seems to be out of range.");
		}
	}
	
	function enter(newRoom){
		//message.channel.send(newRoom);
		if(newRoom == 0 || newRoom == 1 || newRoom == 2 || newRoom == 3 || newRoom == 4 || newRoom == 5){
			//message.channel.send("YAY0");
			if(progress[newRoom] == 0){
				message.channel.send("The door is locked. ");
			return;
			}
			
			//message.channel.send("YAY1");
		}else{
			//message.channel.send("YAY2");
			message.channel.send(newRoom + " " + (newRoom == 0));
			
			message.channel.send("The room number, " + room + ", seems to be out of range.");
			return;
		}
		
		if(progress[newRoom] == 0){
			message.channel.send("The door is locked. ");
			return;
		}
		//message.channel.send("YAY3");
		room = newRoom;		
		//message.channel.send("YAY4 " + room);
		
		message.channel.send(roomDescription() + '\n' + roomCommands());
	}
	
	function roomCommands(){
		if(room == 0){
			return('"!write" writes something on the whiteboard. \n'
			  + '"!examinebox" examines the box. \n'
			  + '"!checkinstagram" checks your Instagram.');
		}else if(room == 1){
			if(progress[room] == 1){
				return('"!examinelaptop" examines the laptop. \n'
			+ '"!charge" charges the laptop. \n'
			+ '"!examinebook" examines the book. \n');
			}else{
				return('"!examinelaptop" examines the laptop. \n'
			+ '"!charge" charges the laptop. \n'
			+ '"!examinebook" examines the book. \n'
			+ '"!circle" circles a word in the word search.');
		}
		}else if(room == 2){
			return('"!unlock" enters a code to unlock the safe. \n'
			 + '"!examinenewspaper" examines the newspaper. \n'
			 + '"!examinesafe" examines the safe. \n')
		}else if(room == 3){
			return('"!write" writes something on the whiteboard. \n'
			 + '"!examineboard" examines the whiteboard. \n'
			 + '"!examinephone" examines the phone.');
		}else if(room == 4){
			return('"!triangle" inspects the triangle. \n'
				+ '"!box" inspects the box.')
		}else if(room == 5){
			return('"!submit" enters something into the keypad')
		}else{
			return('');
		}
	}
	
	if(on = true){
		if(n == 1 && room == 0){
			message.channel.send('Say "!start" to begin.');
			//message.channel.send(progress.length);
			n = 2;
		}
		
	  // Your commands here\
	  
	  if(message.content == "!start" && n == 2){
		  /*for(var i = 0; i < 6; i ++){
		   progress[i] = 0;
		  }
		  progress[0] = 1;
	   
	    for(var i = 0; i<6; i++){
				message.channel.send(progress[i]);
			}*/
	   
	   room = 0;
	   //progress[0] = 1;
	   n = 3;
	   message.channel.send("Against your best intuitions, you chose to use your phone in AP CS. Mr.Paley spotted you in an instant and confiscated your phone. " 
	   + "You pleaded for him to not shatter it, and he instead put it in a locked box and promptly left, locking you alone in his classroom."
	   + "(Say \"!help\" for list of options. More options appear as you play. )\n");
	   message.channel.send(universals);
		  n ++;
		  enter(0);
	  }else if(message.content == "!help"){
		  //message.channel.send("debug");
		  var send = universals;
			  send = send + '\n' + roomCommands();
			  message.channel.send(send);
		  
		  /*switch(room){
			  case 0:
			  send = send + ;
		  }*/
	  }else if(message.content == "!kill"){
		  message.channel.send("OK BYE");
		  n = 1;
		  room = 0;
		  on = false;
	  }else if(message.content.startsWith("!enter")){
		  var send = 'Syntax is "!enter <room number>". You have unlocked rooms ';
		  
		  for(var i = 0; i < 6; i ++){
			  if(progress[i] > 0){
				  send = send + i + ', ';
			  }
		  }
		  
		  if(message.content.length >= 7){
			  if(isNaN(message.content.substring(7))){
				  message.channel.send(send);
			  }else{
				  //message.channel.send(message.content.substring(7));
				  enter(message.content.substring(7));
			  }
		  }else{
			  message.channel.send(send);
		  }
		  
		  
	  }
	  /*else if(message.content === "!examineroom"){
		  message.channel.send(roomDescription());
	  }*/
	  else if(message.content.startsWith("!write") && room == 0){
		  if(progress[0] > 1){
			  message.channel.send("Nothing happened, which probably means you've already deciphered it.");
		  }else if(message.content == "!write enigma"){
			  message.channel.send("The door clicks open as you finish writing the a. Two nearby rooms seem to be unlocked. Type \"!enter <number>\" to enter a room.");
			  progress[0] = 2;
			  progress[1] = 1;
			  progress[4] = 1;
		  }else if(message.content.length <= 6){
			  message.channel.send("The syntax is \"!write <answer>\".")
		  }else{
			  message.channel.send("Nothing happened, which probably means you got the wrong answer.");
		  }
	  }else if(message.content == "!examinebox" && room == 0){
		  message.channel.send("It is a wooden, unassuming box with a keyhole. " 
		  + "When you shake it, you hear your phone bumping the sides.")
	  }else if(message.content == "!checkinstagram" && room == 0){
		  message.channel.send("Your phone is in the box, you idiot.")
	  }
	  
	  else if(message.content == "!examinelaptop" && room == 1){
		  message.channel.send("You examine the computer closely. The battery is dead. The keyboard seems like it has been meddled with, and it missing the keys i, s, p, and l.");
	  }else if(message.content == "!charge"){
		  message.channel.send("You try to insert your credit card, but it doesn't fit in the hole.")
	  }else if(message.content.startsWith("!examinebook") && room == 1){
		  if(progress[1] > 1){
			  message.channel.send("There is a word search and a bunch of blank pages. Type \"!circle <word>\" to circle words"
			  + ". \n" +
				"`H E C O M P ` \n" +
				"`A R L G A L ` \n" +
				"`E R R O R I ` \n" +
				"`K G R A P L ` \n" +
				"`V D Y A U D ` \n" +
				"`M I L V Y I ` \n");
		  }else if(message.content == "!examinebook lisp"){
			  message.channel.send("There is a word search and a bunch of blank pages. Type \"!circle <word>\" to circle words"
			  + ". \n" +
				"`H E C O M P ` \n" +
				"`A R L G A L ` \n" +
				"`E R R O R I ` \n" +
				"`K G R A P L ` \n" +
				"`V D Y A U D ` \n" +
				"`M I L V Y I ` \n");
				progress[1] = 3;
		  }else if(message.content.length <= 12){
			  message.channel.send("The book appears to be locked by a permutation lock. Type \"!examinebook <guess>\" to guess permutations.");
		  }else{
			  message.channel.send(message.content.substring(13) + " was apparently not the right permutation.");
		  }
	  }else if(message.content.startsWith("!circle") && room == 1 && progress[1] > 1){
		  if(progress[1] == 3 && message.content == "!circle array"){
			  progress[2] = 1;
			  message.channel.send("You hear a click from a door some distance away.");
			  progress[1]=2;
		  }else if(message.content.length <= 7){
			  message.channel.send("Syntax is \"!circle <word>\".");
		  }else{
			  message.channel.send("But nothing happened...");
		  }
	  }

	  else if(message.content.startsWith("!triangle") && room == 4){
	  	  if(message.content.length <= 9){
			  message.channel.send('It contains the numbers 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1 and a keypad with 6 boxes.' 
		  + 'Type "!triangle <word>" to write something in the keypad.');
		  }else if(message.content == "!triangle pascal"){
			  message.channel.send('The "pascal" changes to "Superb"!');
	  	  if(progress[room] == 4){
	  	  	progress[room] = 2;
			progress[3] = 1;
			message.channel.send("You hear a click from a door some distance away.");
	  	  } else{
			  progress[room] = 3;
		  }
		  }else{
	  	  message.channel.send("The blocks reset and nothing happens.");
	  }
	  }else if(message.content.startsWith("!box") && room == 4){
		  if(message.content == "!box" && room == 4){
	  	  message.channel.send('The box expects a 8 letter response. Type "!box <input>" to input something.');
	}else if(message.content == "!box bautista" && room == 4){
	  	  message.channel.send('The box lights up in green!');
	  	  if(progress[room] == 3){
	  	  	progress[room] = 2;
			progress[3] = 1;
			message.channel.send("You hear a click from a door some distance away.");
	  	  } else {progress[room] = 4};
	  }else{
		  message.channel.send('Nothing happens, and the interface is reset.');
	  }
	  }else if(message.content == "!examinenewspaper" && room == 2){
	  	  message.channel.send('The paper is covered with strange boxes with letters. \n'
	  	  					+ 'F_amingo \n'
							+ 'P_rrot \n'
							+ '_onkey \n'
							+ 'La_ra_or \n'
							+ 'Zebr_');
	  }
	  else if(message.content == "!unlock lambda" && room == 2) {
	  	  message.channel.send('Looking inside, you see a post-it attached to the back of the safe. \n'
	  	 			 	+ 'It reads: “ Improvise. _____ . Overcome." \n'
	  	 			 	+ '"!write" writes an answer in the blank.'
	  	 			 	+ 'It seems like there\'s nothing else to do in this room');
	  	  progress[room] = 3;
	  }
	  else if(message.content.startsWith("!unlock") && room == 2) {
		  message.channel.send('Nothing happens');
	  }
	  else if(message.content == "!examinesafe" && room == 2 && progress[room] == 1) {
	  	  message.channel.send('It requires a 6 letter combo');
	  }
	  else if(message.content == "!examinesafe" && room == 2 && progress[room] == 3) {
	  	  message.channel.send('Looking inside, you see a post-it attached to the back of the safe. \n'
	  	 			 	+ 'It reads: “ Improvise. _____ . Overcome." + \n');
	  }else if(message.content == "!write adapt" && room == 2 && progress[room] == 3){
		  progress[room] = 2;
		  if(progress[3] == 2){
			  message.channel.send("You suddenly have the urge to go to the Bathroom(room 5).");
			  progress[5] = 1;
		  }else{
			  message.channel.send("There seems to be nothing left to do here.")
		  }
	  }else if(message.content == "!examineboard" && room == 3){
	  	  message.channel.send('There is a hastily scribbled riddle plastered across it. \n' 
	  	  	+ 'It reads “Human it is not, but intelligence it mirrors”');
	  }
	  else if(message.content == "!write machine" && room == 3){
	  	  message.channel.send('You type in the correct password, unlocking the phone. The notepad app is open. \n'
	  	  	+ 'It has yet another riddle - “A search engine not used, but no it’s not Bing. \n'
	  	  	+ 'Input it here and victory you will bring. Use "!type <answer>" to type it in.');
			progress[3] = 3;
	  }
	  else if(message.content.startsWith("!write") && room == 3){
	  	  message.channel.send('Nothing happens');
	  }
	  else if(message.content == "!examinephone" && room == 3 && progress[room] == 1){
	  	  message.channel.send('It needs a passcode');
	  }
	  else if(message.content == "!examinephone" && room == 3 && progress[room] == 3){
	  	  message.channel.send('The notepad app is open. \n'
	  	  	+ 'It has yet another riddle - “A search engine not used, but no it’s not Bing. \n'
	  	  	+ 'Input it here and victory you will bring.');
	  }else if(message.content == "!type yahoo" && room == 3 && progress[room] == 3){
		  progress[room] = 2;
		  if(progress[2] == 2){
			message.channel.send("You suddenly have the urge to go to the Bathroom(room 5).");
			progress[5] = 1;
		  }else{
			  message.channel.send("There seems to be nothing left to do here.")
		  }
	  }else if((message.content == "!submit blame paley" || message.content == "!submit blamepaley") && room == 5){
	  	  message.channel.send('The glass pane slowly lowers and you have received your key. Hurriedly, you make your way back to room E and get ready for the glorious moment you assume is coming. Slowly, both hands shaking with excitement, you slide the key into the lock. You turn it, and the door springs open. You gently pick up your phone and quietly exit the school. Mr. Paley has taught you your lesson. You’ll never even consider bringing your phone out in class, and you can now check your Instagram without being an idiot.\n'
		  + "Use !restart to restart");	 
	}
	  else if(message.content.startsWith("!submit") && room == 5){
	  	  message.channel.send('The light flickers, but nothing happens. Try again?');
	  }


	  
	  else if (message.content.startsWith('!')){
		  message.channel.send("Invalid command. Try typing \"!help\".");
	  }
	}
	if(message.content === "!restart"){
		on = true;
	}
	

  
});
client.login("");
