const responses = [
    // Bloqueios de Perfeccionismo & Análise Paralisante
    "O perfeccionismo é a arte de se torturar por detalhes que ninguém mais vai notar. Defina 'pronto' antes de 'perfeito': escreva 3 características específicas que seu projeto precisa ter para ser considerado completo. Quando atingir essas 3, declare vitória e avance.",
    
    "Pensar demais é igual a nadar em círculos - você se cansa sem sair do lugar. Use a regra 40/70: quando você tem entre 40% e 70% das informações necessárias, é hora de agir. Toda decisão além disso só te afunda mais na indecisão.",
    
    "Seu cérebro confunde planejamento com progresso. É como acreditar que estudar mapas te faz viajar de verdade. Aplique a técnica dos 'primeiros 2 minutos': comece pela menor tarefa possível do seu projeto e trabalhe nela por apenas 2 minutos. O movimento gera movimento.",
    
    "A busca pela perfeição te mantém preso no início. Implemente a 'Estratégia do Rascunho Feio': crie a pior versão possível do seu projeto em 30 minutos. A liberdade de fazer algo ruim remove a pressão e desbloqueia suas ideias verdadeiras.",
    
    // Bloqueios de Motivação & Disciplina
    "A motivação não aparece magicamente antes da ação - ela surge durante o processo. Crie um 'Calendário de Corrente': um lugar visível onde você marca cada dia que trabalhou no projeto. Após 4 dias, seu cérebro vai odiar quebrar essa sequência mais do que odeia começar a trabalhar.",
    
    "Decidir diariamente 'se' você vai trabalhar no projeto consome energia mental preciosa. Crie um compromisso automático usando a fórmula 'Se X, então Y': 'Se são 19h de terça/quinta, então trabalho no projeto por 30 minutos sem negociação'. Essa decisão antecipada elimina o desgaste mental diário.",
    
    "Seu ambiente molda diretamente sua produtividade. Seu cérebro associa espaços físicos a estados mentais. Crie um 'canto sagrado' dedicado exclusivamente ao seu projeto: um local específico, uma música particular ou um ritual simples (como preparar um chá específico) que sinaliza ao seu cérebro que é hora de criar.",
    
    "A desmotivação vem de objetivos muito distantes. Adote o 'Sistema de Mini-Vitórias': divida cada aspecto do seu projeto em partes tão pequenas que pareçam ridículas (escrever um parágrafo, organizar uma gaveta). Celebre visivelmente cada conclusão - seu cérebro se viciará na sensação de progresso.",
    
    // Bloqueios de Medo & Autojulgamento
    "O medo de falhar te paralisa porque sua mente exagera as consequências. Encare-o diretamente: escreva em detalhes o pior resultado realista possível e, ao lado, liste três coisas valiosas que você aprenderia mesmo nesse cenário. O medo perde poder quando você o encara no papel.",
    
    "A síndrome do impostor é quando seu sucesso parece acidente e seus erros parecem sua verdadeira face. Crie um 'Arquivo de Provas': liste três realizações passadas similares, feedback positivo que recebeu, e obstáculos que já superou. Consulte este arquivo quando a dúvida aparecer.",
    
    "Sua voz crítica interna fala com você de um jeito que você jamais falaria com um amigo. Dê um nome a esse crítico interno (ex: 'O Perfeccionista') e responda a ele como responderia a uma pessoa real. Este distanciamento te permite avaliar a crítica sem ser destruído por ela.",
    
    "O medo do julgamento alheio é uma prisão invisível. Aplique o 'Método dos Três Círculos': identifique (1) o que está sob seu controle total, (2) o que você pode influenciar, e (3) o que está completamente fora do seu alcance. Foque obsessivamente apenas nos círculos 1 e 2 - o resto é desperdício de energia mental.",
    
    // Bloqueios de Clareza & Direção
    "A confusão mental é como navegar sem GPS. Crie clareza em três passos: 1) Defina o propósito central em uma única frase, 2) Liste três resultados concretos que espera alcançar, 3) Determine a próxima ação física específica que pode fazer em menos de 15 minutos. Esta estrutura dissolve a névoa mental.",
    
    "Tentar fazer tudo de uma vez é garantia de não fazer nada direito. Use a técnica da 'Subtração Focada': liste todos os aspectos do seu projeto, depois corte impiedosamente pela metade, mantendo apenas o núcleo essencial. Menos elementos resultam em mais qualidade e maior chance de conclusão.",
    
    "Muitas opções geram paralisia, não liberdade. Estabeleça 3-5 princípios simples para guiar todas as suas decisões no projeto (ex: 'simplicidade acima de tudo', 'foco no usuário'). Quando surgir uma escolha, consulte apenas esses princípios - não reabra todo o processo de análise.",
    
    "A indecisão muitas vezes vem de tentar resolver problemas em sua cabeça. Use o 'Método da Visibilidade Total': coloque todas as suas ideias, opções e considerações em cartões físicos ou notas digitais que você possa ver simultaneamente. Quando tudo está visível ao mesmo tempo, padrões e prioridades emergem naturalmente.",
    
    // Bloqueios de Recursos & Tempo
    "Ver limitações como obstáculos é um erro de perspectiva. Transforme cada restrição em vantagem: 'pouco dinheiro' significa 'soluções criativas e enxutas'; 'pouco tempo' força 'foco absoluto no essencial'. As maiores inovações da história nasceram de restrições, não de recursos abundantes.",
    
    "Esperar ter 'tempo livre' é a armadilha perfeita - esse tempo nunca aparece por mágica. Crie 'Blocos Invioláveis': períodos de 25 minutos para seu projeto tratados com a mesma seriedade de uma reunião importante. Preceda-os com um ritual de 3 minutos que prepara sua mente para a transição.",
    
    "Subestimamos o poder dos pequenos passos consistentes. Adote a 'Regra do 1%': estabeleça uma meta diária tão pequena que pareça ridícula (escrever 50 palavras, desenhar por 5 minutos). A consistência diária, mesmo mínima, cria momentum que supera qualquer esforço esporádico intenso.",
    
    "A sensação de 'não ter tempo' frequentemente mascara o medo de priorizar. Aplique o 'Teste da Agenda Honesta': revise como você realmente gastou suas últimas 24 horas, em incrementos de 30 minutos. Identifique 3 atividades que consomem tempo mas geram pouco valor. Elimine uma delas completamente por 3 dias - esse tempo recuperado pertence ao seu projeto.",
    
    // Bloqueios de Significado & Propósito
    "A falta de propósito claro drena sua energia criativa. Descubra seu 'Para Quê' em três níveis: 1) Como isso beneficia você diretamente? 2) Como impacta positivamente alguém de quem você gosta? 3) Como contribui para algo maior que você valoriza? Esta clareza tripla desbloqueia motivação em múltiplos níveis.",
    
    "Projetos abstratos raramente saem do papel. Aplique o método 'Protótipo para Um': identifique uma pessoa específica (pode ser você mesmo) e crie a primeira versão do seu projeto exclusivamente para ela. Esta concretude triplicará suas chances de finalizar o que começou.",
    
    "A desilusão com projetos vem da fantasia de que todo o processo será inspirador. Aceite a 'Regra 80/20 da Criação': 80% do trabalho será mecânico, tedioso ou desafiador; apenas 20% será empolgante e inspirador. Esta expectativa realista aumenta drasticamente sua resistência aos momentos difíceis.",
    
    "Quando o significado se perde, o trabalho se torna vazio. Pratique o 'Ritual de Reconexão': antes de cada sessão de trabalho, escreva em uma frase a diferença específica que seu projeto fará na vida de alguém real. Mantenha esta frase visível enquanto trabalha. Essa âncora emocional mantém o propósito vivo durante as dificuldades técnicas.",
    
    // Meta-Bloqueios (Bloqueios sobre Bloqueios)
    "Pensar demais sobre seus bloqueios cria um novo bloqueio. Interrompa esse ciclo com uma 'Tarefa Âncora': escolha uma atividade física de 5 minutos relacionada ao projeto (organizar materiais, criar espaço de trabalho). A ação física simples interrompe o círculo vicioso mental.",
    
    "Sua capacidade de foco foi fragmentada pela hiperconexão digital. Antes de sessões criativas, implemente o 'Detox de Atenção': 30 minutos sem notificações, redes sociais ou qualquer fonte de distração digital. Este período permite que sua mente recupere a capacidade natural de concentração profunda.",
    
    "Ficar alternando entre diferentes abordagens para resolver seu bloqueio só cria mais paralisia. Use o 'Método da Decisão Definitiva': dedique 5 minutos por escrito para analisar o problema, tome uma decisão consciente sobre a abordagem e comprometa-se a segui-la por pelo menos 3 dias completos antes de considerar mudanças.",
    
    "A obsessão com encontrar a solução perfeita para seus bloqueios é apenas outra forma de procrastinação. Aplique a 'Técnica da Ação Imperfeita': identifique a abordagem que parece 'boa o suficiente' e comprometa-se a testá-la imediatamente por 10 minutos. O movimento real supera qualquer planejamento teórico.",
    
    // Bloqueios Emocionais & Burnout (Nova categoria)
    "O esgotamento mental torna impossível criar. Implemente o 'Método de Restauração Estratégica': identifique qual tipo de descanso você realmente precisa - físico (sono), mental (meditação), sensorial (natureza), criativo (arte sem pressão), emocional (conexão) ou social (tempo sozinho). Dedique 30 minutos diários ao tipo exato de descanso que seu sistema nervoso está pedindo.",
    
    "As emoções negativas não processadas drenam sua energia criativa. Pratique o 'Ritual de Liberação': escreva por 5 minutos sem parar sobre o que está te incomodando, sem filtros ou julgamentos. Depois, risque o texto ou delete-o simbolicamente. Este ato físico libera o espaço mental necessário para criar.",
    
    "A ansiedade criativa vem da sensação de que tudo precisa acontecer agora. Implemente a 'Respiração 5-5-5': inspire por 5 segundos, segure por 5, expire por 5. Faça isso 3 vezes antes de trabalhar no projeto. Esta prática ativa seu sistema parassimpático, reduzindo o estresse e permitindo acesso ao pensamento criativo.",
    
    "A pressão autoimposta é frequentemente o maior bloqueio. Adote o 'Método da Permissão Consciente': escreva uma declaração formal dando a si mesmo permissão para: falhar, criar algo medíocre, não agradar a todos, mudar de ideia, e desistir se necessário. Esta permissão explícita libera a tensão que impede o fluxo criativo.",
    
    // Bloqueios de Execução & Followthrough (Nova categoria)
    "Começar projetos sem terminar é uma armadilha comum. Implemente o 'Sistema de Conclusão Forçada': para cada novo projeto que deseja iniciar, defina uma 'multa' significativa (doação, tarefa indesejada) que você deverá pagar se não concluir o projeto atual primeiro. Este comprometimento externo cria a pressão necessária para finalizar o que começou.",
    
    "Mudar constantemente de estratégia impede qualquer progresso real. Aplique a 'Regra dos 7 Dias': comprometa-se a seguir qualquer abordagem por pelo menos 7 dias completos antes de julgá-la ou abandoná-la. Este período mínimo permite que você supere a resistência inicial e veja resultados reais.",
    
    "A falta de estrutura leva a esforços dispersos. Crie um 'Sistema de Contabilidade Visível': mantenha um registro simples e visível de (1) quanto tempo você realmente dedicou ao projeto esta semana, (2) quais resultados concretos produziu, e (3) qual sua próxima meta clara. Esta visualização impede a ilusão de progresso e mantém seu foco no que realmente importa.",
    
    "Confundir movimento com progresso é perigoso. Estabeleça 'Marcos de Validação Externa': defina 3-5 pontos no seu projeto onde você obterá feedback de alguém relevante (mentor, potencial usuário, colega). Estas validações externas previnem que você gaste meses em uma direção improdutiva."
];

const conclusions = [
    "Diagnóstico concluído. O caminho mental que estava bloqueando seu progresso foi identificado e uma solução personalizada foi encontrada. Implemente agora, enquanto a clareza está fresca em sua mente.",
    
    "Análise completa. Seu obstáculo não é falta de capacidade, mas um padrão específico de pensamento que agora pode ser redirecionado. A solução fornecida foi moldada precisamente para seu desafio.",
    
    "Mapeamento finalizado. O padrão que estava sabotando seu progresso foi identificado e neutralizado. A estratégia sugerida está alinhada exatamente com o tipo de bloqueio que você enfrenta.",
    
    "Recalibração mental concluída. As crenças limitantes que estavam segurando seu potencial foram substituídas por um novo caminho de ação claro e direto. O momento para implementar é agora.",
    
    "Desbloqueio ativado. O obstáculo que estava impedindo sua ação foi identificado e removido. Seu potencial criativo está agora disponível - use-o nas próximas horas, enquanto a clareza é máxima.",
    
    "Reprogramação concluída. O que parecia uma barreira foi transformado em uma alavanca para seu progresso. A estratégia fornecida é específica para o tipo de resistência que você estava experimentando.",
    
    "Transformação completada. Seus padrões de procrastinação foram redirecionados para caminhos de ação. A solução apresentada foi desenvolvida especificamente para seu perfil mental único.",
    
    "Scanner mental concluído. A raiz do seu bloqueio foi isolada e tratada com precisão. A estratégia oferecida funciona diretamente no ponto exato de resistência que estava limitando seu avanço.",
    
    "Recalibração neural completa. O sistema identificou com exatidão o padrão mental que estava sabotando seu progresso. A intervenção sugerida foi especificamente projetada para seu perfil único.",
    
    "Análise finalizada. Seu verdadeiro obstáculo não era o que você pensava, mas um padrão mais profundo que agora foi revelado. A solução proposta ataca a causa real, não apenas os sintomas."
];

const encouragements = [
    "Esta é uma compreensão poderosa que poucos alcançam. Você já está à frente apenas por reconhecer este padrão.",
    
    "A solução mais eficaz é frequentemente a mais simples. O que compartilhei com você não é complexo, mas é profundamente eficaz quando aplicado consistentemente.",
    
    "Lembre-se: você não está buscando motivação, está criando momentum. A clareza que você tem agora é o primeiro passo do movimento real.",
    
    "Esta estratégia funciona mesmo quando você não acredita nela inicialmente. A beleza está na ação, não na convicção prévia.",
    
    "O que diferencia realizadores de sonhadores não é talento, mas a capacidade de superar bloqueios como este. Você acaba de adquirir essa habilidade.",
    
    "A maioria das pessoas nunca identifica o real obstáculo. Você agora tem uma vantagem rara: conhecimento preciso do que realmente está te bloqueando.",
    
    "Esta solução parece simples, mas tem camadas de profundidade. Cada vez que você a aplicar, descobrirá novas dimensões de eficácia.",
    
    "O que você enfrenta não é fraqueza, é apenas um padrão neural. E padrões podem ser reprogramados com a abordagem correta.",
    
    "O próximo passo pode parecer pequeno, mas contém um poder transformador. Às vezes a mudança mais significativa começa com o movimento mais simples.",
    
    "Este insight é apenas o começo. Conforme você aplicar esta estratégia, sua mente desenvolverá naturalmente variações ainda mais eficazes para seu caso específico."
];

const initMessages = [
    "Iniciando processo de reflexão...",
    "Calibrando foco...",
    "Analisando padrões mentais...",
    "Pronto para sua resposta."
];

// Enhanced typing animation function with variable speed and natural pauses
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
                    
                    // Ritmo natural entre palavras
                    if (currentChar === ' ' && Math.random() > 0.7) {
                        speed = speed * 1.3; // Pausa ocasional entre palavras
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
    try {
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
            if (inputField) {
                inputField.focus();
                inputField.classList.add('pulse');
                setTimeout(() => {
                    inputField.classList.remove('pulse');
                }, 2000);
            }
        }, 800);
    } catch (error) {
        console.error("Erro na inicialização:", error);
        // Fallback para inicialização simples em caso de erro
        document.getElementById('initText').textContent = "Pronto para sua resposta.";
        document.getElementById('userInput').focus();
    }
}

// Adicione esta função para verificar se a entrada contém apenas pontuações
function isInvalidInput(text) {
    // Expressão regular para pontuação e espaços
    const punctuationRegex = /^[\s\p{P}]*$/u;
    
    // Expressão regular para números e espaços
    const numbersOnlyRegex = /^[\s\d]*$/;
    
    return punctuationRegex.test(text) || numbersOnlyRegex.test(text);
}


// Análise de sentimento e padrão linguístico sofisticada com tratamento de erros
async function processUserInput() {
    try {
        const inputField = document.getElementById('userInput');
        const userResponse = inputField.value.trim();
        
        if (userResponse === '') return;
        
        // Verificação atualizada: pontuação ou apenas números
        if (isInvalidInput(userResponse)) {
            // Determinar o tipo de erro para mensagem personalizada
            let errorMessage = '';
            
            if (/^[\s\p{P}]*$/u.test(userResponse)) {
                errorMessage = 'Por favor, escreva uma resposta válida, não apenas pontuações.';
            } else if (/^[\s\d]*$/.test(userResponse)) {
                errorMessage = 'Por favor, escreva uma resposta válida, não apenas números.';
            } else {
                errorMessage = 'Por favor, escreva uma resposta válida.';
            }
            
            // Mostrar feedback de erro
            const feedbackElement = document.createElement('div');
            feedbackElement.className = 'error-feedback text-red-500 text-sm mt-2 mb-2';
            feedbackElement.textContent = errorMessage;
            
            // Inserir o feedback abaixo do campo de entrada
            const inputContainer = inputField.parentElement;
            
            // Remover mensagem de erro anterior se existir
            const oldFeedback = document.querySelector('.error-feedback');
            if (oldFeedback) oldFeedback.remove();
            
            inputContainer.insertAdjacentElement('afterend', feedbackElement);
            
            // Efeito de shake no campo de entrada para feedback visual
            inputField.classList.add('shake');
            setTimeout(() => inputField.classList.remove('shake'), 500);
            
            // Fazer a mensagem desaparecer após 3 segundos
            setTimeout(() => {
                if (feedbackElement.parentNode) {
                    feedbackElement.style.opacity = '0';
                    setTimeout(() => feedbackElement.remove(), 300);
                }
            }, 3000);
            
            return; // Interrompe o processamento
        }
        
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
        
        // Análise contextual avançada integrada com pontuação ponderada
        // Sistema avançado de análise linguística e correspondência de padrões
        const analysisResult = analyzeUserInput(userResponse);
        let responseIndex = analysisResult.responseIndex;
        let dominantCategory = analysisResult.dominantCategory;
        
        // Get targeted response and show it with more natural typing
        const targetedResponse = responses[responseIndex];
        await typeWriter(document.getElementById('responseContent'), targetedResponse, 20, 40);
        
        // Select and display encouragement after a short delay
        setTimeout(async () => {
            const encouragementBox = document.getElementById('encouragementBox');
            if (encouragementBox) {
                encouragementBox.classList.remove('hidden');
                
                const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
                await typeWriter(document.getElementById('encouragementContent'), randomEncouragement, 25, 45);
            }
        }, 1200);
        
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
        }, 3000);
        
        // Análise anônima para melhorar o sistema (simulada - na realidade, isso seria uma função real)
        logAnalysis(userResponse, dominantCategory, responseIndex);
        
    } catch (error) {
        console.error("Erro no processamento:", error);
        // Recuperação elegante em caso de erro
        handleProcessingError();
    }
}

// Função avançada de análise linguística com pontuação ponderada e contexto
function analyzeUserInput(userResponse) {
    const lowercaseResponse = userResponse.toLowerCase();
    
    // Sistema de pontuação ponderada avançado com categorias expandidas
    let scores = {
        perfeccionismo: 0,
        motivacao: 0,
        medo: 0,
        clareza: 0,
        recursos: 0,
        significado: 0,
        meta: 0,
        emocional: 0,  // Nova categoria
        execucao: 0    // Nova categoria
    };
    
    // Análise de perfeccionismo - aprimorada com novos padrões
    if (lowercaseResponse.match(/perfeccion|perfect|melhor|ideal|falha|erro|detalh|nunca (está|é|fica) (bom|suficiente)|impecáv|excelên|qualidade/gi)) {
        scores.perfeccionismo += 2;
    }
    if (lowercaseResponse.match(/revis|check|conferi|certeza|verific|garant|segur|control|padrão|standard|calibr|altura|nível|refazer|polir|ajust|não ficou bom/gi)) {
        scores.perfeccionismo += 1.5;
    }
    if (lowercaseResponse.match(/não consigo entregar|sempre encontro algo para melhorar|nunca está bom o suficiente|poderia ser melhor|precisa de mais alguns ajustes|quase lá/gi)) {
        scores.perfeccionismo += 2.5;
    }
    
    // Análise de motivação/disciplina - aprimorada
    if (lowercaseResponse.match(/motiva|preguiça|força de vontade|disciplina|hábito|rotina|constância|procrastin|adiar|depois|amanhã|energia|cansad|exaust/gi)) {
        scores.motivacao += 2;
    }
    if (lowercaseResponse.match(/não consigo|difícil começar|dificuldade|iniciar|começar|continuar|manter|preguiçoso|empurr|com barriga|enrol|desanimad|sem vontade|sem força/gi)) {
        scores.motivacao += 1.5;
    }
    if (lowercaseResponse.match(/sempre deixo para depois|amanhã eu começo|não estou no clima|quando estiver inspirado|preciso estar no humor certo|não estou sentindo vontade|não tenho disciplina|não consigo me forçar/gi)) {
        scores.motivacao += 2.5;
    }
    
    // Análise de medo/autojulgamento - aprimorada
    if (lowercaseResponse.match(/medo|med|julga|critica|vergonha|humilha|ridicul|falha|fracass|erro|dúvida|incapaz|incompet|inferio|comparaç|melhor que|pior que|não sou bom|inadequad/gi)) {
        scores.medo += 2;
    }
    if (lowercaseResponse.match(/insegur|confiança|autoestima|ego|imagen|reputaç|impressionar|aprovação|opinião|pensam|acham|vão achar|o que vão|dizer|pensa|receio|intimidado|expor|ridículo/gi)) {
        scores.medo += 1.5;
    }
    if (lowercaseResponse.match(/não estou à altura|impostor|fingindo|vão descobrir|não mereço|não tenho capacidade|vão rir de mim|vão me julgar|não sou bom o suficiente|quem eu penso que sou|nunca vou conseguir|outros são melhores/gi)) {
        scores.medo += 2.5;
    }
    
    // Análise de clareza/direção - aprimorada
    if (lowercaseResponse.match(/confus|não sei|direção|rumo|caminho|perdid|indecis|escolh|opção|alternat|dúvida|incert|definir|decisão|objetivo|meta|plano|próximo passo|por onde/gi)) {
        scores.clareza += 2;
    }
    if (lowercaseResponse.match(/muitas ideias|muitas possibilid|o que fazer|como fazer|por onde começar|muitas opções|sem foco|dispers|espalhad|desorganiz|caótico|bagunç|sem norte|desorient/gi)) {
        scores.clareza += 1.5;
    }
    if (lowercaseResponse.match(/estou perdido|não sei qual direção seguir|muitas possibilidades|me sinto paralisado com tantas opções|não consigo decidir|estou num labirinto|indo em círculos|não sei qual é a prioridade|tudo parece importante/gi)) {
        scores.clareza += 2.5;
    }
    
    // Análise de recursos/tempo - aprimorada
    if (lowercaseResponse.match(/tempo|hora|dinheiro|recurso|equipamento|ferramenta|material|caro|custo|preço|financ|investi|econom|ocupad|sem tempo|falta de tempo|agenda|prioridade/gi)) {
        scores.recursos += 2;
    }
    if (lowercaseResponse.match(/não posso|não tenho|falta|ausência|escassez|limitad|restri|barreir|obstáculo|impediment|agenda cheia|compromisso|responsabilidad|priorid|competição|outras demandas/gi)) {
        scores.recursos += 1.5;
    }
    if (lowercaseResponse.match(/não tenho tempo suficiente|minha agenda está lotada|preciso de mais recursos|não tenho dinheiro para isso|precisaria de um equipamento melhor|não consigo encaixar na minha rotina|tenho muitas outras responsabilidades|não sobra tempo/gi)) {
        scores.recursos += 2.5;
    }
    
    // Análise de significado/propósito - aprimorada
    if (lowercaseResponse.match(/sentido|propósito|significado|importa|valor|relevância|motivo|razão|pra que|para que|porquê|por que|utilidade|serventia|finalidade|objetivo|impacto/gi)) {
        scores.significado += 2;
    }
    if (lowercaseResponse.match(/vale a pena|compensa|benefício|vantagem|ganho|resultado|recompensa|satisfação|realização|diferença|contribui|impacto|legado|marca|importância/gi)) {
        scores.significado += 1.5;
    }
    if (lowercaseResponse.match(/não vejo sentido|qual o propósito disso tudo|por que estou fazendo isso|isso realmente importa|vale a pena tanto esforço|não sei se faz diferença|não sei se isso tem valor|me pergunto se é relevante|questiono a importância/gi)) {
        scores.significado += 2.5;
    }
    
// Análise de meta-bloqueios - aprimorada
    if (lowercaseResponse.match(/bloqueio|travad|paralisa|imóvel|estagna|congela|não consigo nem começar|sem saber por onde|sobrecarg|overthink|pensar demais|analisa|sobrecarreg/gi)) {
        scores.meta += 2;
    }
    if (lowercaseResponse.match(/distraç|concentra|foco|atenção|dispers|ansied|estress|pressão|cobranç|frust|desânimo|desencora|cansad|esgotad|mente cheia|pensamentos|roda|loop/gi)) {
        scores.meta += 1.5;
    }
    if (lowercaseResponse.match(/minha mente não para|fico pensando sobre pensar|estou travado em círculos mentais|penso tanto que não faço nada|paralisia por análise|fico ruminando|não consigo fazer minha mente calar|muitos pensamentos ao mesmo tempo/gi)) {
        scores.meta += 2.5;
    }
    
    // Análise de bloqueios emocionais - nova categoria
    if (lowercaseResponse.match(/triste|deprimi|ansios|angúst|desânimo|esgota|burnout|exaust|cansaç|emocional|sentir|sinto|sentindo|sofrimento|dor|pesar|mágoa|trauma/gi)) {
        scores.emocional += 2;
    }
    if (lowercaseResponse.match(/não estou bem|sem energia|desmotivado|desanimado|sem paz|inquieto|agitado|nervoso|preocupado|tensão|estressado|pressão|cobranç|culpa|arrependimento/gi)) {
        scores.emocional += 1.5;
    }
    if (lowercaseResponse.match(/me sinto emocionalmente esgotado|estou no meu limite|não aguento mais pressão|estou sentindo um peso enorme|tenho estado muito ansioso|não consigo relaxar|estou consumido por preocupações|não lembro quando me senti bem pela última vez/gi)) {
        scores.emocional += 2.5;
    }
    
    // Análise de bloqueios de execução - nova categoria
    if (lowercaseResponse.match(/não termino|não concluo|começo mas não acabo|desisto|abandon|inacaba|pela metade|mudar de ideia|nova ideia|outro projeto|consistência|persistência|perseverança/gi)) {
        scores.execucao += 2;
    }
    if (lowercaseResponse.match(/não consigo manter|não vou até o fim|perco interesse|empaco no meio|desanimo no caminho|mudo de direção|disperso|novas ideias|entusiasmo inicial|depois desisto/gi)) {
        scores.execucao += 1.5;
    }
    if (lowercaseResponse.match(/sempre começo coisas que não termino|meu histórico é de projetos abandonados|me empolgo no início e depois perco interesse|tenho dificuldade em manter o foco até o final|sempre aparece algo novo e abandono o que estava fazendo/gi)) {
        scores.execucao += 2.5;
    }
    
    // Encontrar categoria com maior pontuação
    let maxCategory = "meta"; // Padrão
    let maxScore = scores.meta;
    let dominantCategory = "meta";
    
    for (const [category, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxCategory = category;
            dominantCategory = category;
        }
    }
    
    // Atribuir resposta baseada na categoria dominante
    let responseIndex;
    switch (maxCategory) {
        case "perfeccionismo":
            responseIndex = Math.floor(Math.random() * 4); // Índices 0-3
            break;
        case "motivacao":
            responseIndex = 4 + Math.floor(Math.random() * 4); // Índices 4-7
            break;
        case "medo":
            responseIndex = 8 + Math.floor(Math.random() * 4); // Índices 8-11
            break;
        case "clareza":
            responseIndex = 12 + Math.floor(Math.random() * 4); // Índices 12-15
            break;
        case "recursos":
            responseIndex = 16 + Math.floor(Math.random() * 4); // Índices 16-19
            break;
        case "significado":
            responseIndex = 20 + Math.floor(Math.random() * 4); // Índices 20-23
            break;
        case "meta":
            responseIndex = 24 + Math.floor(Math.random() * 4); // Índices 24-27
            break;
        case "emocional":
            responseIndex = 28 + Math.floor(Math.random() * 4); // Índices 28-31
            break;
        case "execucao":
            responseIndex = 32 + Math.floor(Math.random() * 4); // Índices 32-35
            break;
    }
    
    // Sistema de análise secundária para respostas ambíguas
    let hasCleanSignal = Object.values(scores).some(score => score > 1.5);
    
    // Análise contextual avançada para casos sem sinais claros
    if (!hasCleanSignal) {
        // Análise de comprimento e complexidade
        const wordCount = userResponse.split(/\s+/).length;
        const sentenceCount = userResponse.split(/[.!?]+/).length;
        const avgWordLength = userResponse.length / wordCount;
        const complexityScore = (wordCount / sentenceCount) + (avgWordLength / 3);
        
        // Análise de sentimento com reconhecimento de padrões emocionais
        const negativeWords = /não|sem|nunca|difícil|complicado|impossível|problema|frustr|desist|abandon|cansa|desânimo|ansiedade|medo|preocup|estress/gi;
        const uncertaintyWords = /talvez|acho|penso|creio|acredito|parece|possível|provável|não sei|incert|confus|dúvida|indecis/gi;
        const limitationWords = /mas|porém|entretanto|contudo|no entanto|apesar|limitaç|restri|condicion|obstáculo|empec|barreira/gi;
        
        const negMatches = (userResponse.match(negativeWords) || []).length;
        const uncMatches = (userResponse.match(uncertaintyWords) || []).length;
        const limMatches = (userResponse.match(limitationWords) || []).length;
        
        const emotionalProfile = {
            negativity: negMatches / wordCount,
            uncertainty: uncMatches / wordCount,
            limitation: limMatches / wordCount,
            complexity: complexityScore
        };
        
        // Análise de padrões sutis baseada em perfil emocional e complexidade
        if (emotionalProfile.complexity > 6) {
            // Respostas complexas e elaboradas sugerem overthinking ou perfeccionismo
            responseIndex = emotionalProfile.negativity > 0.1 ? 
                (24 + Math.floor(Math.random() * 4)) : // Meta-bloqueios
                (Math.floor(Math.random() * 4)); // Perfeccionismo
        } 
        else if (emotionalProfile.negativity > 0.15) {
            // Alto nível de negatividade sugere bloqueios emocionais ou medo
            responseIndex = emotionalProfile.limitation > 0.1 ?
                (28 + Math.floor(Math.random() * 4)) : // Bloqueios emocionais
                (8 + Math.floor(Math.random() * 4)); // Medo
        }
        else if (emotionalProfile.uncertainty > 0.15) {
            // Alto nível de incerteza sugere problemas de clareza ou significado
            responseIndex = emotionalProfile.limitation > 0.1 ?
                (12 + Math.floor(Math.random() * 4)) : // Clareza
                (20 + Math.floor(Math.random() * 4)); // Significado
        }
        else if (wordCount < 12) {
            // Respostas curtas e diretas frequentemente indicam problemas de motivação ou recursos
            responseIndex = emotionalProfile.negativity > 0.05 ?
                (16 + Math.floor(Math.random() * 4)) : // Recursos
                (4 + Math.floor(Math.random() * 4)); // Motivação
        }
        else {
            // Abordagem baseada em padrões de frase para casos ainda ambíguos
            // Analisar frases comuns que indicam categorias específicas
            const phrases = {
                execucao: ["começo mas não termino", "não consigo finalizar", "sempre começo", "nunca acabo", "perco interesse"],
                emocional: ["me sinto", "estou cansado", "sem energia", "estressado", "ansioso", "pressão"],
                perfeccionismo: ["tem que ser perfeito", "nunca está bom", "sempre encontro erros", "precisa melhorar"],
                clareza: ["não sei por onde", "muitas opções", "qual direção", "prioridade", "confuso"]
            };
            
            // Verificar frases no texto
            let bestMatchCategory = "";
            let maxPhraseMatches = 0;
            
            for (const [category, categoryPhrases] of Object.entries(phrases)) {
                let matches = 0;
                for (const phrase of categoryPhrases) {
                    if (lowercaseResponse.includes(phrase)) {
                        matches++;
                    }
                }
                
                if (matches > maxPhraseMatches) {
                    maxPhraseMatches = matches;
                    bestMatchCategory = category;
                }
            }
            
            // Se encontrou correspondências de frases, use essa categoria
            if (maxPhraseMatches > 0) {
                switch (bestMatchCategory) {
                    case "execucao":
                        responseIndex = 32 + Math.floor(Math.random() * 4);
                        break;
                    case "emocional":
                        responseIndex = 28 + Math.floor(Math.random() * 4);
                        break;
                    case "perfeccionismo":
                        responseIndex = Math.floor(Math.random() * 4);
                        break;
                    case "clareza":
                        responseIndex = 12 + Math.floor(Math.random() * 4);
                        break;
                }
            } else {
                // Resposta padrão baseada em complexidade geral para casos realmente ambíguos
                const categoryOptions = [
                    [24, 25, 26, 27], // Meta-bloqueios (alta complexidade)
                    [12, 13, 14, 15], // Clareza (média complexidade)
                    [4, 5, 6, 7]      // Motivação (baixa complexidade)
                ];
                
                const complexityIndex = complexityScore > 5 ? 0 : (complexityScore > 3 ? 1 : 2);
                const selectedOptions = categoryOptions[complexityIndex];
                responseIndex = selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
            }
        }
    }
    
    // Garantir resposta válida em caso de erro
    if (responseIndex === undefined || responseIndex >= responses.length) {
        responseIndex = Math.floor(Math.random() * responses.length);
    }
    
    return {
        responseIndex: responseIndex,
        dominantCategory: maxCategory
    };
}

// Função para lidar com erros de processamento
function handleProcessingError() {
    try {
        // Ativar interface de recuperação
        const inputField = document.getElementById('userInput');
        inputField.disabled = false;
        document.getElementById('sendButton').disabled = false;
        
        // Mostrar mensagem de erro amigável
        const responseSection = document.getElementById('responseSection');
        responseSection.classList.remove('hidden');
        
        const errorMessage = "Parece que encontrei um ponto cego em minha análise. Por favor, tente expressar seu desafio de outra forma, talvez com um pouco mais de detalhe ou contexto.";
        document.getElementById('responseContent').textContent = errorMessage;
        
        // Reset parcial para tentar novamente
        setTimeout(() => {
            document.getElementById('resetArea').classList.remove('hidden');
        }, 1000);
    } catch (criticalError) {
        console.error("Erro crítico na recuperação:", criticalError);
        // Último recurso - reset completo
        location.reload();
    }
}

// Função para registrar análises para melhoria do sistema
function logAnalysis(userInput, category, responseIndex) {
    // Em um ambiente real, isso enviaria dados anônimos para aprendizado de máquina
    // Aqui apenas registramos no console para simulação
    console.log("Análise anônima para melhoria do sistema:", {
        inputLength: userInput.length,
        wordCount: userInput.split(/\s+/).length,
        detectedCategory: category,
        responseUsed: responseIndex
    });
}

// Handle user input via Enter key with debounce
let inputTimeout = null;
document.getElementById('userInput').addEventListener('keydown', function(e) {
    // Permitir Shift+Enter para nova linha
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (this.value.trim() !== '') {
            processUserInput();
        }
    }
});


// Handle user input via Send button with debounce
document.getElementById('sendButton').addEventListener('click', function() {
    const inputField = document.getElementById('userInput');
    if (inputField.value.trim() !== '') {
        // Debounce para evitar múltiplos cliques acidentais
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
            processUserInput();
        }, 100);
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
        
        // Reset dos novos elementos
        if (document.getElementById('encouragementBox')) {
            document.getElementById('encouragementBox').classList.add('hidden');
        }
        
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

// Add auto-resize functionality to textarea for better UX
const userInput = document.getElementById('userInput');
if (userInput) {
    userInput.addEventListener('input', function() {
        // Auto-resize
        this.style.height = 'auto';
        const newHeight = Math.min(this.scrollHeight, 150); // Limitar altura máxima
        this.style.height = newHeight + 'px';
        
        // Ativar ou desativar botão de envio baseado no conteúdo
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
            sendButton.disabled = this.value.trim() === '';
        }
    });
}

// Handle window resize for responsive layout adjustments
window.addEventListener('resize', function() {
    // Ajustar layout para diferentes tamanhos de tela
    const windowWidth = window.innerWidth;
    const elements = document.querySelectorAll('.responsive-element');
    
    elements.forEach(el => {
        if (windowWidth < 768) { // Mobile
            el.classList.add('mobile-view');
        } else {
            el.classList.remove('mobile-view');
        }
    });
});

// Add error recovery for lost connections
window.addEventListener('online', function() {
    console.log("Conexão restaurada");
    // Verificar estado da aplicação e recuperar se necessário
    if (document.getElementById('userInput').disabled && !document.getElementById('responseContent').textContent) {
        handleProcessingError();
    }
});

// Helper functions para acessibilidade
function enableAccessibilityFeatures() {
    // Adicionar atributos ARIA para melhorar acessibilidade
    document.getElementById('userInput').setAttribute('aria-label', 'Descreva seu bloqueio mental atual');
    document.getElementById('sendButton').setAttribute('aria-label', 'Enviar sua resposta');
    document.getElementById('resetButton').setAttribute('aria-label', 'Recomeçar análise');
    
    // Adicionar suporte para navegação por teclado
    const focusableElements = document.querySelectorAll('button, textarea, input');
    focusableElements.forEach(el => {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                e.target.click();
            }
        });
    });
}

// Inicializar acessibilidade após carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    try {
        enableAccessibilityFeatures();
        
        // Verificar se temos todos os elementos necessários
        const requiredElements = ['userInput', 'sendButton', 'responseSection', 'conclusionBox'];
        const missingElements = requiredElements.filter(id => !document.getElementById(id));
        
        if (missingElements.length) {
            console.error("Elementos ausentes:", missingElements);
            // Tentar recuperar estrutura básica
            const mainContainer = document.querySelector('main') || document.body;
            if (!document.getElementById('userInput')) {
                const input = document.createElement('textarea');
                input.id = 'userInput';
                input.placeholder = 'Descreva seu bloqueio mental atual...';
                mainContainer.appendChild(input);
            }
        }
    } catch (error) {
        console.error("Erro ao inicializar acessibilidade:", error);
    }
});

// Initialize on load with error handling
window.addEventListener('load', function() {
    try {
        initApp();
        
        // Detectar tamanho de tela inicial para ajustes responsivos
        const windowWidth = window.innerWidth;
        const elements = document.querySelectorAll('.responsive-element');
        
        elements.forEach(el => {
            if (windowWidth < 768) { // Mobile
                el.classList.add('mobile-view');
            }
        });
        
    } catch (error) {
        console.error("Erro na inicialização:", error);
        // Fallback para inicialização simples
        document.getElementById('initText').textContent = "Pronto para sua resposta.";
        document.getElementById('userInput').focus();
    }
});