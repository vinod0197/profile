// chatbot.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleChatBtn = document.getElementById("toggle-chat-btn");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const chatDisplay = document.getElementById("chat-display");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "what is your name": "I'm ChatBot, your virtual assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    const defaultResponse = "I'm sorry, I didn't understand that. Can you try rephrasing your question?";

    // Toggle chat visibility
    toggleChatBtn.addEventListener("click", () => {
        chatContainer.style.display = chatContainer.style.display === "flex" ? "none" : "flex";
    });

    // Close chat
    closeChat.addEventListener("click", () => {
        chatContainer.style.display = "none";
    });

    // Add messages to the chat display
    function addMessage(message, sender = "user") {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.marginBottom = "5px";
        messageElement.style.padding = "5px";
        messageElement.style.borderRadius = "5px";

        if (sender === "bot") {
            messageElement.style.backgroundColor = "#37474f";
            messageElement.style.color = "#fff";
            messageElement.style.textAlign = "left";
        } else {
            messageElement.style.backgroundColor = "#007bff";
            messageElement.style.color = "#fff";
            messageElement.style.textAlign = "right";
        }

        chatDisplay.appendChild(messageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom
    }

    // Handle send button click
    sendBtn.addEventListener("click", () => {
        const question = userInput.value.trim().toLowerCase();

        if (question) {
            addMessage(question, "user");
            userInput.value = "";

            const response = responses[question] || defaultResponse;
            setTimeout(() => addMessage(response, "bot"), 500); // Simulate delay
        }
    });

    // Handle Enter key
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
