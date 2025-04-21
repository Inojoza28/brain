const responses = [
    "Os maiores obstáculos são internos. Para cada barreira mental identificada, estabeleça uma ação prática específica para superá-la.",
    "Comece pequeno, mas comece hoje. A implementação imperfeita de uma ideia supera o planejamento perfeito que nunca sai do papel.",
    "Simplifique seu processo: divida seu projeto em tarefas de 25 minutos. Apenas uma por dia já cria momentum suficiente.",
    "A hesitação é um padrão de pensamento, não uma realidade. Estabeleça um ritual de início para sinalizar ao cérebro que é hora de agir.",
    "Seus projetos não precisam ser revolucionários para terem valor. A consistência transforma ações simples em resultados extraordinários.",
    "O perfeccionismo é o inimigo silencioso da criatividade. Adote a filosofia do 'bom o suficiente' para as primeiras versões.",
    "Criar é um músculo que precisa ser exercitado. Comece com projetos menores para desenvolver sua confiança criativa.",
    "Seus recursos atuais são suficientes para começar. A escassez estimula a criatividade quando você se compromete com a ação.",
    "O medo do julgamento bloqueia mais projetos do que a falta de habilidade. Crie primeiro para você, depois para o mundo.",
    "Cada projeto concluído, independente do resultado, é um avanço em sua trajetória. O fracasso não é oposto ao sucesso; é parte dele.",
    "Sua mente busca clareza antes de agir, mas a clareza frequentemente surge durante o processo, não antes dele.",
    "Estabeleça um tempo definido diário para seu projeto, mesmo que sejam apenas 15 minutos. A regularidade supera a intensidade.",
    "Sua capacidade de começar sem garantias é uma das habilidades mais valiosas que você pode desenvolver.",
    "A motivação é resultado da ação, não sua precursora. Estabeleça um sistema que não dependa de como você se sente.",
    "A dúvida é um processo natural, não um sinal para parar. Permita-se questionar enquanto continua avançando."
];

const conclusions = [
    "Sua mente foi recalibrada. Agora, transforme reflexão em movimento.",
    "Autopercepção ativada. Você está pronto para criar algo significativo.",
    "Novo mindset estabelecido. O caminho para a realização está aberto.",
    "Potencial desbloqueado. Sua jornada criativa começa agora.",
    "Clareza mental. É o momento de dar o primeiro passo."
];

const initMessages = [
    "Iniciando processo de reflexão...",
    "Preparando ambiente mental...",
    "Calibrando foco...",
    "Pronto para sua resposta."
];

// Enhanced typing animation function with variable speed
function typeWriter(element, text, minSpeed = 30, maxSpeed = 50, startDelay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            let i = 0;
            element.innerHTML = '';
            element.classList.add('typing-indicator');
            
            function type() {
                if (i < text.length) {
                    // Random typing speed for more natural effect
                    const speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
                    
                    element.innerHTML = text.substring(0, i + 1);
                    i++;
                    setTimeout(type, speed);
                } else {
                    element.classList.remove('typing-indicator');
                    resolve();
                }
            }
            
            type();
        }, startDelay);
    });
}

// Enhanced initialization with smoother transitions
async function initApp() {
    const initText = document.getElementById('initText');
    
    for (let i = 0; i < initMessages.length; i++) {
        await typeWriter(initText, initMessages[i], 25, 45, i === 0 ? 400 : 500);
        if (i < initMessages.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 600));
        }
    }
    
    // Subtle focus on input after initialization
    setTimeout(() => {
        const inputField = document.getElementById('userInput');
        inputField.focus();
        inputField.classList.add('pulse');
        setTimeout(() => {
            inputField.classList.remove('pulse');
        }, 2000);
    }, 800);
}

// Enhanced processing with scroll animations
async function processUserInput() {
    const inputField = document.getElementById('userInput');
    const userResponse = inputField.value.trim();
    
    if (userResponse === '') return;
    
    // Disable and clear input
    inputField.value = '';
    inputField.disabled = true;
    document.getElementById('sendButton').disabled = true;
    
    // Smooth scroll to response
    const responseSection = document.getElementById('responseSection');
    responseSection.classList.remove('hidden');
    
    // Animate scroll to response
    setTimeout(() => {
        responseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    
    // Display user response
    document.getElementById('userResponseDisplay').textContent = `${userResponse}`;
    
    // Get random response and show it with more natural typing
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    await typeWriter(document.getElementById('responseContent'), randomResponse, 20, 40);
    
    // Show conclusion after delay with animation
    setTimeout(async () => {
        const conclusionBox = document.getElementById('conclusionBox');
        conclusionBox.classList.remove('hidden');
        
        // Subtle scroll to conclusion
        setTimeout(() => {
            conclusionBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
        
        const randomConclusion = conclusions[Math.floor(Math.random() * conclusions.length)];
        await typeWriter(document.getElementById('conclusionContent'), randomConclusion, 30, 50);
        
        // Show reset button with fade effect
        setTimeout(() => {
            document.getElementById('resetArea').classList.remove('hidden');
        }, 1000);
    }, 1800);
}

// Handle user input via Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        processUserInput();
    }
});

// Handle user input via Send button
document.getElementById('sendButton').addEventListener('click', function() {
    const inputField = document.getElementById('userInput');
    if (inputField.value.trim() !== '') {
        processUserInput();
    }
});

// Reset the application with smooth transition
document.getElementById('resetButton').addEventListener('click', function() {
    // Add transition effect
    document.getElementById('responseSection').style.opacity = '0';
    document.getElementById('responseSection').style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        // Reset everything
        const inputField = document.getElementById('userInput');
        inputField.value = '';
        inputField.disabled = false;
        document.getElementById('sendButton').disabled = false;
        document.getElementById('responseSection').classList.add('hidden');
        document.getElementById('conclusionBox').classList.add('hidden');
        document.getElementById('resetArea').classList.add('hidden');
        
        // Reset styles
        document.getElementById('responseSection').style.opacity = '';
        document.getElementById('responseSection').style.transform = '';
        
        // Smooth scroll to question section
        document.getElementById('questionSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Focus on input with animation
        setTimeout(() => {
            inputField.focus();
            inputField.classList.add('pulse');
            setTimeout(() => {
                inputField.classList.remove('pulse');
            }, 2000);
        }, 600);
    }, 300);
});

// Initialize on load
window.addEventListener('load', initApp);