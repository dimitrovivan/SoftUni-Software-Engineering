function solve() {
   
   let buttonSendElement = document.querySelector('#send');

   buttonSendElement.addEventListener('click' , () => {

      let messageParentContainer = document.querySelector('#chat_messages');

      let inputMessageElement = document.querySelector('#chat_input');

      let message = inputMessageElement.value;

      inputMessageElement.value = '';

      let divNewMessage = document.createElement('div');
      divNewMessage.classList.add('message','my-message');
      divNewMessage.innerText = message;

      messageParentContainer.appendChild(divNewMessage);
   })
}


