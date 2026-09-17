emailjs.init("P0Fg-SdL4aeo66MHP");
const questions=["What is your name?",
    "Where are you from?",
    "How old are you?",
    "Please provide your email address.",
   " Tell me .. how can i help you?"  ];
const fieldName=["name","location","age","email","help"];
let currentStep=0;
let answers={};
const userText=document.getElementById('user-input');



export function askNextQuestion() {
    
    showBotMessage(questions[currentStep]);
}
export function showBotMessage(text) {
    const messagesContainer = document.getElementById('messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.textContent = text;
    messagesContainer.appendChild(botMessage);
}
export function showUserMessage(text) {
    const messagesContainer = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    messagesContainer.appendChild(userMessage);
}
export function handleUserInput() {
    const value = userText.value.trim();
    if (!value) return; 
    
    showUserMessage(value);
    answers[fieldName[currentStep]]=userText.value;
    currentStep = currentStep + 1;
    userText.value = "";   // clear the input
    if (currentStep < questions.length) {
      askNextQuestion();
    } else {
      showBotMessage("Thank you... your message has been received. 🌙");
      // this is where you'll trigger the EmailJS send later
    }
}
const lines=document.querySelectorAll('#intro.line');
export function animateLines() {
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('active');
        }, index * 1500);
    });
}
export function hideLines() {
   const lines=document.querySelectorAll('#intro.line   ');
   intro.style.opacity=0;
    intro.style.pointerEvents='none';
}
// You write this part: wire the button and start the sequence
document.getElementById('send-button').addEventListener('click', handleUserReply);

animateLines();
setTimeout(hideLines, 6000); // match this to how long your 4 lines take to finish







