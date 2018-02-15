var pass = 50; //Pass Mark
var score = 75; //Current Score
var msg; 		// Message

if (score > pass) 
{
	msg = 'Congratulations, you passed!';
} else 
{
	msg = 'Have another go!';
}
var el = document.getElementById('answer');
el.textContent = msg;