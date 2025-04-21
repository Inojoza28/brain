const responses = [
    // Bloqueios de Perfeccionismo & Análise Paralisante
    "O perfeccionismo é a arte de se torturar por detalhes que ninguém mais vai notar. Defina 'pronto' antes de 'perfeito': escreva 3 características específicas que seu projeto precisa ter para ser considerado completo. Quando atingir essas 3, declare vitória e avance.",
    
    "Pensar demais é igual a nadar em círculos - você se cansa sem sair do lugar. Use a regra 40/70: quando você tem entre 40% e 70% das informações necessárias, é hora de agir. Toda decisão além disso só te afunda mais na indecisão.",
    
    "Seu cérebro confunde planejamento com progresso. É como acreditar que estudar mapas te faz viajar de verdade. Aplique a técnica dos 'primeiros 2 minutos': comece pela menor tarefa possível do seu projeto e trabalhe nela por apenas 2 minutos. O movimento gera movimento.",
    
    // Bloqueios de Motivação & Disciplina
    "A motivação não aparece magicamente antes da ação - ela surge durante o processo. Crie um 'Calendário de Corrente': um lugar visível onde você marca cada dia que trabalhou no projeto. Após 4 dias, seu cérebro vai odiar quebrar essa sequência mais do que odeia começar a trabalha.",
    
    "Decidir diariamente 'se' você vai trabalhar no projeto consome energia mental preciosa. Crie um compromisso automático usando a fórmula 'Se X, então Y': 'Se são 19h de terça/quinta, então trabalho no projeto por 30 minutos sem negociação'. Essa decisão antecipada elimina o desgaste mental diário.",
    
    "Seu ambiente molda diretamente sua produtividade. Seu cérebro associa espaços físicos a estados mentais. Crie um 'canto sagrado' dedicado exclusivamente ao seu projeto: um local específico, uma música particular ou um ritual simples (como preparar um chá específico) que sinaliza ao seu cérebro que é hora de criar.",
    
    // Bloqueios de Medo & Autojulgamento
    "O medo de falhar te paralisa porque sua mente exagera as consequências. Encare-o diretamente: escreva em detalhes o pior resultado realista possível e, ao lado, liste três coisas valiosas que você aprenderia mesmo nesse cenário. O medo perde poder quando você o encara no papel.",
    
    "A síndrome do impostor é quando seu sucesso parece acidente e seus erros parecem sua verdadeira face. Crie um 'Arquivo de Provas': liste três realizações passadas similares, feedback positivo que recebeu, e obstáculos que já superou. Consulte este arquivo quando a dúvida aparecer.",
    
    "Sua voz crítica interna fala com você de um jeito que você jamais falaria com um amigo. Dê um nome a esse crítico interno (ex: 'O Perfeccionista') e responda a ele como responderia a uma pessoa real. Este distanciamento te permite avaliar a crítica sem ser destruído por ela.",
    
    // Bloqueios de Clareza & Direção
    "A confusão mental é como navegar sem GPS. Crie clareza em três passos: 1) Defina o propósito central em uma única frase, 2) Liste três resultados concretos que espera alcançar, 3) Determine a próxima ação física específica que pode fazer em menos de 15 minutos. Esta estrutura dissolve a névoa mental.",
    
    "Tentar fazer tudo de uma vez é garantia de não fazer nada direito. Use a técnica da 'Subtração Focada': liste todos os aspectos do seu projeto, depois corte impiedosamente pela metade, mantendo apenas o núcleo essencial. Menos elementos resultam em mais qualidade e maior chance de conclusão.",
    
    "Muitas opções geram paralisia, não liberdade. Estabeleça 3-5 princípios simples para guiar todas as suas decisões no projeto (ex: 'simplicidade acima de tudo', 'foco no usuário'). Quando surgir uma escolha, consulte apenas esses princípios - não reabra todo o processo de análise.",
    
    // Bloqueios de Recursos & Tempo
    "Ver limitações como obstáculos é um erro de perspectiva. Transforme cada restrição em vantagem: 'pouco dinheiro' significa 'soluções criativas e enxutas'; 'pouco tempo' força 'foco absoluto no essencial'. As maiores inovações da história nasceram de restrições, não de recursos abundantes.",
    
    "Esperar ter 'tempo livre' é a armadilha perfeita - esse tempo nunca aparece por mágica. Crie 'Blocos Invioláveis': períodos de 25 minutos para seu projeto tratados com a mesma seriedade de uma reunião importante. Preceda-os com um ritual de 3 minutos que prepara sua mente para a transição.",
    
    "Subestimamos o poder dos pequenos passos consistentes. Adote a 'Regra do 1%': estabeleça uma meta diária tão pequena que pareça ridícula (escrever 50 palavras, desenhar por 5 minutos). A consistência diária, mesmo mínima, cria momentum que supera qualquer esforço esporádico intenso.",
    
    // Bloqueios de Significado & Propósito
    "A falta de propósito claro drena sua energia criativa. Descubra seu 'Para Quê' em três níveis: 1) Como isso beneficia você diretamente? 2) Como impacta positivamente alguém de quem você gosta? 3) Como contribui para algo maior que você valoriza? Esta clareza tripla desbloqueia motivação em múltiplos níveis.",
    
    "Projetos abstratos raramente saem do papel. Aplique o método 'Protótipo para Um': identifique uma pessoa específica (pode ser você mesmo) e crie a primeira versão do seu projeto exclusivamente para ela. Esta concretude triplicará suas chances de finalizar o que começou.",
    
    "A desilusão com projetos vem da fantasia de que todo o processo será inspirador. Aceite a 'Regra 80/20 da Criação': 80% do trabalho será mecânico, tedioso ou desafiador; apenas 20% será empolgante e inspirador. Esta expectativa realista aumenta drasticamente sua resistência aos momentos difíceis.",
    
    // Meta-Bloqueios (Bloqueios sobre Bloqueios)
    "Pensar demais sobre seus bloqueios cria um novo bloqueio. Interrompa esse ciclo com uma 'Tarefa Âncora': escolha uma atividade física de 5 minutos relacionada ao projeto (organizar materiais, criar espaço de trabalho). A ação física simples interrompe o círculo vicioso mental.",
    
    "Sua capacidade de foco foi fragmentada pela hiperconexão digital. Antes de sessões criativas, implemente o 'Detox de Atenção': 30 minutos sem notificações, redes sociais ou qualquer fonte de distração digital. Este período permite que sua mente recupere a capacidade natural de concentração profunda.",
    
    "Ficar alternando entre diferentes abordagens para resolver seu bloqueio só cria mais paralisia. Use o 'Método da Decisão Definitiva': dedique 5 minutos por escrito para analisar o problema, tome uma decisão consciente sobre a abordagem e comprometa-se a segui-la por pelo menos 3 dias completos antes de considerar mudanças."
];

const conclusions = [
    "Diagnóstico concluído. O caminho mental que estava bloqueando seu progresso foi identificado e uma solução personalizada foi encontrada. Implemente agora, enquanto a clareza está fresca em sua mente.",
    
    "Análise completa. Seu obstáculo não é falta de capacidade, mas um padrão específico de pensamento que agora pode ser redirecionado. A solução fornecida foi moldada precisamente para seu desafio.",
    
    "Mapeamento finalizado. O padrão que estava sabotando seu progresso foi identificado e neutralizado. A estratégia sugerida está alinhada exatamente com o tipo de bloqueio que você enfrenta.",
    
    "Recalibração mental concluída. As crenças limitantes que estavam segurando seu potencial foram substituídas por um novo caminho de ação claro e direto. O momento para implementar é agora.",
    
    "Desbloqueio ativado. O obstáculo que estava impedindo sua ação foi identificado e removido. Seu potencial criativo está agora disponível - use-o nas próximas horas, enquanto a clareza é máxima.",
    
    "Reprogramação concluída. O que parecia uma barreira foi transformado em uma alavanca para seu progresso. A estratégia fornecida é específica para o tipo de resistência que você estava experimentando.",
    
    "Transformação completada. Seus padrões de procrastinação foram redirecionados para caminhos de ação. A solução apresentada foi desenvolvida especificamente para seu perfil mental único."
];

const initMessages = [
    "Iniciando processo de reflexão...",
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
                    // Análise de pontuação para pausas mais naturais
                    let speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
                    
                    // Pausas mais longas em pontuações específicas
                    const currentChar = text.charAt(i);
                    if (['.', '!', '?', ':'].includes(currentChar)) {
                        speed = speed * 3; // Pausa maior após pontuação
                    } else if ([',', ';'].includes(currentChar)) {
                        speed = speed * 1.5; // Pausa média após vírgulas e ponto-e-vírgula
                    }
                    
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

// Análise de sentimento e padrão linguístico sofisticada
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
    
    // Sistema avançado de análise linguística e correspondência de padrões
    let responseIndex;
    const lowercaseResponse = userResponse.toLowerCase();
    
    // Criação de análise por categorias com pontuação ponderada
    let scores = {
        perfeccionismo: 0,
        motivacao: 0,
        medo: 0,
        clareza: 0,
        recursos: 0,
        significado: 0,
        meta: 0
    };
    
    // Análise de perfeccionismo
    if (lowercaseResponse.match(/perfeccion|perfect|melhor|ideal|falha|erro|detalh|nunca (está|é|fica) (bom|suficiente)|impecáv|excelên|qualidade/gi)) {
        scores.perfeccionismo += 2;
    }
    if (lowercaseResponse.match(/revis|check|conferi|certeza|verific|garant|segur|control/gi)) {
        scores.perfeccionismo += 1;
    }
    
    // Análise de motivação/disciplina
    if (lowercaseResponse.match(/motiva|preguiça|força de vontade|disciplina|hábito|rotina|constância|procrastin|adiar|depois|amanhã|energia|cansad|exaust/gi)) {
        scores.motivacao += 2;
    }
    if (lowercaseResponse.match(/não consigo|difícil começar|dificuldade|iniciar|começar|continuar|manter|preguiçoso/gi)) {
        scores.motivacao += 1;
    }
    
    // Análise de medo/autojulgamento
    if (lowercaseResponse.match(/medo|med|julga|critica|vergonha|humilha|ridicul|falha|fracass|erro|dúvida|incapaz|incompet|inferio|comparaç|melhor que|pior que|não sou bom|inadequad/gi)) {
        scores.medo += 2;
    }
    if (lowercaseResponse.match(/insegur|confiança|autoestima|ego|imagen|reputaç|impressionar|aprovação|opinião|pensam|acham|vão achar/gi)) {
        scores.medo += 1;
    }
    
    // Análise de clareza/direção
    if (lowercaseResponse.match(/confus|não sei|direção|rumo|caminho|perdid|indecis|escolh|opção|alternat|dúvida|incert|definir|decisão|objetivo|meta|plano/gi)) {
        scores.clareza += 2;
    }
    if (lowercaseResponse.match(/muitas ideias|muitas possibilid|o que fazer|como fazer|por onde começar|muitas opções/gi)) {
        scores.clareza += 1;
    }
    
    // Análise de recursos/tempo
    if (lowercaseResponse.match(/tempo|hora|dinheiro|recurso|equipamento|ferramenta|material|caro|custo|preço|financ|investi|econom|ocupad|sem tempo|falta de tempo|agenda|prioridade/gi)) {
        scores.recursos += 2;
    }
    if (lowercaseResponse.match(/não posso|não tenho|falta|ausência|escassez|limitad|restri|barreir|obstáculo|impediment/gi)) {
        scores.recursos += 1;
    }
    
    // Análise de significado/propósito
    if (lowercaseResponse.match(/sentido|propósito|significado|importa|valor|relevância|motivo|razão|pra que|para que|porquê|por que|utilidade|serventia|finalidade|objetivo/gi)) {
        scores.significado += 2;
    }
    if (lowercaseResponse.match(/vale a pena|compensa|benefício|vantagem|ganho|resultado|recompensa|satisfação|realização/gi)) {
        scores.significado += 1;
    }
    
    // Análise de meta-bloqueios
    if (lowercaseResponse.match(/bloqueio|travad|paralisa|imóvel|estagna|congela|não consigo nem começar|sem saber por onde|sobrecarg|overthink|pensar demais|analisa|sobrecarreg/gi)) {
        scores.meta += 2;
    }
    if (lowercaseResponse.match(/distraç|concentra|foco|atenção|dispers|ansied|estress|pressão|cobranç|frust|desânimo|desencora|cansad|esgotad/gi)) {
        scores.meta += 1;
    }
    
    // Encontrar categoria com maior pontuação
    let maxCategory = "meta"; // Padrão
    let maxScore = scores.meta;
    
    for (const [category, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxCategory = category;
        }
    }
    
    // Atribuir resposta baseada na categoria dominante
    switch (maxCategory) {
        case "perfeccionismo":
            responseIndex = Math.floor(Math.random() * 3); // Índices 0-2
            break;
        case "motivacao":
            responseIndex = 3 + Math.floor(Math.random() * 3); // Índices 3-5
            break;
        case "medo":
            responseIndex = 6 + Math.floor(Math.random() * 3); // Índices 6-8
            break;
        case "clareza":
            responseIndex = 9 + Math.floor(Math.random() * 3); // Índices 9-11
            break;
        case "recursos":
            responseIndex = 12 + Math.floor(Math.random() * 3); // Índices 12-14
            break;
        case "significado":
            responseIndex = 15 + Math.floor(Math.random() * 3); // Índices 15-17
            break;
        case "meta":
            responseIndex = 18 + Math.floor(Math.random() * 3); // Índices 18-20
            break;
    }
    
    // Verificar se houve análise clara (pontuação acima de zero)
    let hasCleanSignal = Object.values(scores).some(score => score > 0);
    
    // Se não houver sinal claro, fazer análise de comprimento e complexidade
    if (!hasCleanSignal) {
        // Respostas longas e complexas sugerem overthinking (meta-bloqueios)
        if (userResponse.length > 100 || userResponse.split(' ').length > 20) {
            responseIndex = 18 + Math.floor(Math.random() * 3); // Meta-bloqueios
        } 
        // Respostas curtas sugerem possivelmente falta de clareza ou motivação
        else if (userResponse.length < 15) {
            responseIndex = Math.random() > 0.5 ? 
                (3 + Math.floor(Math.random() * 3)) : // Motivação
                (9 + Math.floor(Math.random() * 3));  // Clareza
        }
        // Resposta padrão para casos sem padrão claro
        else {
            // Avaliação de sentimento geral (positivo vs negativo)
            const negativeWords = /não|sem|nunca|difícil|complicado|impossível|problema|frustr|desist|abandon|cansa|desânimo/gi;
            const matches = userResponse.match(negativeWords) || [];
            
            if (matches.length > 0) {
                // Tom negativo sugere medo ou falta de motivação
                responseIndex = Math.random() > 0.5 ? 
                    (6 + Math.floor(Math.random() * 3)) : // Medo
                    (3 + Math.floor(Math.random() * 3));  // Motivação
            } else {
                // Sem tom negativo claro, provavelmente questão de clareza ou propósito
                responseIndex = Math.random() > 0.5 ? 
                    (9 + Math.floor(Math.random() * 3)) : // Clareza
                    (15 + Math.floor(Math.random() * 3)); // Significado
            }
        }
    }
    
    // Garantir resposta válida em caso de erro
    if (responseIndex === undefined || responseIndex >= responses.length) {
        responseIndex = Math.floor(Math.random() * responses.length);
    }
    
    // Get targeted response and show it with more natural typing
    const targetedResponse = responses[responseIndex];
    await typeWriter(document.getElementById('responseContent'), targetedResponse, 20, 40);
    
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
    
    // Análise anônima para melhorar o sistema (simulada - na realidade, isso seria uma função real)
    function analyzeInput(userInput, categoryDetected) {
        // Esta função simularia o envio anônimo de dados para melhoria do algoritmo
        // No contexto real, isso poderia utilizar machine learning para melhorar as respostas
        console.log("Análise anônima para melhoria do sistema");
    }
    
    // Chamada simulada - em um ambiente real, isso enviaria dados anônimos para melhoria
    analyzeInput(userResponse, maxCategory);
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