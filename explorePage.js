// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixData from 'wix-data';
import {sendSms} from 'backend/textMe.jsw';
import {session} from 'wix-storage';

// export function button1_click(event) {
//     sendSms();
// }

$w.onReady(async function () {
    let requested = false; 
    $w('#repeater6').onItemReady( ($item, itemData) => {
        $item('#image1').src = itemData.profilePhoto; 
        $item('#image1').src = itemData.profilePhoto; 
        $item('#text10').text = itemData.title + " " + itemData.lastName;
        $item('#text9').text = itemData.age + " years old"; 
        $item('#text25').text = itemData.bio; 
        $item('#text26').text = "Preferred ✈️: " + itemData.destination.formatted; 
        $item('#text27').text = "Budget: " + itemData.budget; 
        $item('#text28').text = itemData.travelType; 
        $item('#text29').text = "Season: " + itemData.seasons; 
        $item('#button2').label = "Request Trip With " + itemData.title; 
    } );

	// Get data from a database collection
	const {items: collectionData} = await wixData.query('Members').find();
	console.log(collectionData);

	// Set the data to associate with the repeater
    $w('#repeater6').data = collectionData;

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
    let $item = $w.at(event.context);
    let name = session.getItem("name");
    // let age = session.getItem("age"); 
    // let location = session.getItem("location"); 
    // let travelType = session.getItem("traveltype"); 
    // let budget = session.getItem("budget"); 
    // let season = session.getItem("season"); 
    let senderPhone = session.getItem("phonenumber"); 
    console.log(name);
    console.log(senderPhone); 
    //const phoneNumber1; 
    const receiver = $item("#button2").label.substring(18);
    // console.log(receiver);
    $item('#button2').label = "Requested!"; 
    wixData.query("SignUpForm") 
    //.contains("title", $item("#button2").label.substring(18))
    //.hasSome("title", $item("#button2").label.substring(18))
    .find()  // Run the query
    .then((results) => {     
        let people = results.items; 
        let count = 0; 
        //let receiverPhone; 
        for (let i = 0; i < people.length; i++) {
            if(people[i].title.toString() == receiver.toString()){
                //receiverPhone = '+1' + people[i].phoneNumber; 
                count = i; 
                //sendSms(name, receiverPhone, age, location, travelType, budget, season, senderPhone);
            }
        }
        const receiverPhone = '+1' + people[count].phoneNumber; 
        // console.log(people);
        // console.log(people[count]); 
        // console.log(people[count].phoneNumber);
        console.log(receiverPhone); 
        sendSms(name, receiverPhone, senderPhone);
   });
    //sendSms(name, phoneNumber1);
}
