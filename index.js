
const { hash } =window.location;
// store the decoded message if existed
const message = atob(hash.replace('#',''));
// if there is a message
if(message){
   document.querySelector('#message-form').classList.add('hide');
   document.querySelector('#message-show').classList.remove('hide');
   document.querySelector('h1').innerHTML = message;
}


const input = document.querySelector('#message-input');
const link = document.querySelector('#link-input'); 

// select the form
const form = document.querySelector('form');
form.addEventListener('submit', event =>{
   //prevent the submission to the backend server
   event.preventDefault();

   // switch cards(show the link card)
   document.querySelector('#message-form').classList.add('hide');
   document.querySelector('#link-form').classList.remove('hide');

   // generate an encrypted version from the entered message
   // from base64 to ASCII
   // The btoa() method creates a Base64-encoded ASCII string from a binary string 
   const encrypted = btoa(input.value);
   // show the link to the user
   link.value =`${window.location}#${encrypted}`;
   link.select();
});