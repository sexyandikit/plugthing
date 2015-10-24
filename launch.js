var version = '1.3.3';
var verMsg = "Out with the old, in with the new!";
var startupMessage = 'NCS startup successful! Version ' + version + " | " + verMsg;
var devMode = 'false';
// Set up a jQuery script that allows us to import and execute other files using an IF statement, and allows us to run our own code
// at the same time.

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};

if (typeof someObject == 'undefined') $.loadScript('https://rawgit.com/sexyandikit/plugthing/master/main.js', function(){
    //Stuff to do after someScript has loaded
	var checkIfReady;
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}},100);},2000);
function start(s){
  clearInterval(checkIfReady);
  if(s==='ready'){
    // $('head').append('<link rel="stylesheet" id="CSxKINGtheme" href="http://sb.codeanywhere.com/~434542/css/NC-331_Style.css">');
  }
}
	
	// Accidental Navigation Triggering
	//bleh = true;

 //window.onbeforeunload = confirmExit;
 //function confirmExit() {
   // if (!bleh) {
       // return "[NCS] Accidental Navigation Triggered! Are you sure you want to leave?";
  //  }
//}
	
	// Add button to footer....
	// Button example: <a href="http://google.com" class="button">Go to Google</a>
	 //$('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/forumdisplay.php?fid=24" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Report an Issue</button></a>');
	 //$('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/showthread.php?tid=5" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Changelog</button></a>');
	// http://electricgaming.ga/forums/en/showthread.php?tid=5
	// Loaded Messages to user
	//$('#messages').append('<div style="text-align:center;" class="cm log">NCS loaded successfully!</div>');
	//$('#messages').append('<div style="text-align:center;" class="cm log">Theme Loaded Successfully!</div>');
	//$('#messages').append('<div style="text-align:center;" class="cm log">Success! Everything loaded properly!</div>');
	if (devMode === "true") {
		$('#messages' ).append('<div style="text-align:center;" class="cm log">[SYSTEM] Developer Mode is Enabled!</div>');
	}
	 // $('#messages').append('<div id="EG-ThemeStart" style="color:cyan;text-align:center" class="cm log">'+startupMessage+' Note: This message will no longer appear when NCS opens, starting with the next patch.</div>');
});