function appendMessage(text, sender) {
     // შექმნა დივ
    const messageContainer = document.createElement('div');
    // ამატებს კლასს
    messageContainer.classList.add('message', sender);
    // ტექტი დივში
    messageContainer.textContent = text;
    document.getElementById('chat-messages').appendChild(messageContainer);
}

function sendMessage() {
    const inputField = document.getElementById('user-input');
    // მომხმარებლის პასუხის მიღება და ზოგადად trim ის გამოყენება
    const message = inputField.value.trim();
    // შემოწმება,ცარიელია თუ არა
    if (message !== '') {
        // მესიჯის დამატება
        appendMessage(message, 'user');
        // გასუფთავება
        inputField.value = '';
     // ვითომ ბოტი პასუხობს
        setTimeout(() => {
            appendMessage("Our support will unswer you in next 5 min", 'bot');
        }, 1000);
    }
}

function handleKeyPress(event) {
       // შემოწმება,დააჭრა თუ არა
    if (event.key === 'Enter') {
           // გაგზავნა
        sendMessage();
    }
}
