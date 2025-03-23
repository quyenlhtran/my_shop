document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const chatWindow = document.getElementById("chat-window");
    const inputField = document.getElementById("user-input");
    const sendButton = document.getElementById("send-message");
    const closeBtn = document.getElementById("close-chat");
    const minimizeBtn = document.getElementById("minimize-chat");

    let chatHistory = "";


    function renderSuggestionButtons(options) {
        return `
            <div class="suggestion-buttons">
                ${options.map(text => `<button class="suggestion">${text}</button>`).join("")}
            </div>
        `;
    }

    function openChat(fresh = false) {
        chatContainer.style.display = "flex";
        inputField.value = "";
    }

    chatButton.addEventListener("click", () => openChat(false));

    minimizeBtn.addEventListener("click", () => {
        chatContainer.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        chatContainer.style.display = "none";
        chatHistory = "";
    });
});
