// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {session} from 'wix-storage';
$w.onReady(function () {
	hideBoxes(); 

	// function toggleBox(hideElement, showElement) {
    // hideElement.collapse();
	// hideElement.hide();
	// showElement.expand();
    // showElement.show();
    // }

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

export function hideBoxes(){
	let firstTime = session.getItem("firsttimeuser"); 
	if(firstTime == "no"){
		$w('#box2').collapse(); 
		$w('#box2').hide(); 
		// toggleBox($w('#box2'), $w('#box1'));
	} else {
		$w('#box1').collapse(); 
		$w('#box1').hide(); 
	}
	console.log("this is working");
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/

// export function button1_click(event) {
// 	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// 	// Add your code for this event here: 
// 	console.log("hello"); 
// 	session.setItem("name", $w('#input1').value + " " + $w('#input2').value);
// 	// session.setItem("age", $w('#input4').value); 
// 	// session.setItem("location", $w('#addressInput1')[0].value); 
// 	// session.setItem("traveltype", $w('#radioGroup1').value); 
// 	// session.setItem("budget", $w('#input5').value); 
// 	// session.setItem("season", $w('#radioGroup2').value);
// 	session.setItem("phonenumber",$w('#input6').value);
// 	session.setItem("firsttimeuser", "no"); 
// 	$w('#box2').collapse(); 
// 	$w('#box2').hide();
// 	//console.log(session.getItem("firsttimeuser")); 
// 	//hideBoxes(); 
// }

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	session.removeItem("firsttimeuser"); 
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click_1(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	session.setItem("name", $w('#input1').value + " " + $w('#input2').value);
	session.setItem("phonenumber",$w('#input6').value);
	session.setItem("firsttimeuser", "no"); 
	console.log("this works?"); 
}
