/*********
 .jsw file
 *********

 Backend .jsw files contain functions that run on the server side but can be called from page code and frontend files.
 Use backend functions to keep code private and hidden from a user's browser. More info:

 https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend

**********/

/*** Call the sample multiply function below by copying the following into your page code:

 import { multiply } from 'backend/multiplication';

 $w.onReady(function () {
     multiply(4, 5).then(product => {
         console.log(product);
     })
     .catch(error => {
         console.log(error);
     });
 });

***/

import twilio from 'twilio';

const accountSID = 'AC9a3429dd7428db27a505d7a41da1dcd8';
const authToken = '496cc34ee96ed0265367387bc534808d';
const twilioNumber = '+18882729128';

export async function sendSms(name, phoneNumber, senderPhone)
{
    let client = new twilio(accountSID, authToken)

    let message = await client.messages.create({
        body: name + " has requested to travel with you! Check out their info at the website. Contact them at this number: " + senderPhone,
        to: phoneNumber,
        from: twilioNumber
    })
}
