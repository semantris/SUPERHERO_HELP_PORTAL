emailjs.init("P0Fg-SdL4aeo66MHP");

const questions = [
    "What is your name?",
    "Where are you from?",
    "How old are you?",
    "Please provide your email address.",
    "Tell me... how can I help you?"
];
const fieldName = ["name", "location", "age", "email", "help"];
let currentStep = 0;
let answers = {};

const userText = document.getElementById('user-input');
const intro = document.getElementById('intro');
const messagesContainer = document.getElementById('messages');

function showBotMessage(text) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.textContent = text;
    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showUserMessage(text) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    messagesContainer.appendChild(userMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function askNextQuestion() {
    showBotMessage(questions[currentStep]);
}

function handleUserInput() {
    const value = userText.value.trim();
    if (!value) return;

    showUserMessage(value);
    answers[fieldName[currentStep]] = value;
    currentStep++;
    userText.value = "";

    if (currentStep < questions.length) {
        setTimeout(askNextQuestion, 600);
    } else {
        showBotMessage("Thank you... your message has been received. 🌙");
        // EmailJS send will go here later
    }
}

function animateLines() {
    const lines = document.querySelectorAll('#intro .line');
    
    lines.forEach((line, index) => {
        // Show the line
        setTimeout(() => {
            // First hide all lines
            lines.forEach(l => l.classList.remove('active'));
            
            // Then show only the current one
            line.classList.add('active');
        }, index * 2200); // 2.2 seconds per line
    });
}

function hideLines() {
    intro.style.opacity = '0';
    intro.style.pointerEvents = 'none';
    
    // After fade out, completely remove it
    setTimeout(() => {
        intro.style.display = 'none';
    }, 1000);
}

// Event listeners
document.getElementById('send-button').addEventListener('click', handleUserInput);
userText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleUserInput();
});

// Start sequence
animateLines();
setTimeout(hideLines, 9500); // 4 lines × 1.8s = ~7.2s + buffer





