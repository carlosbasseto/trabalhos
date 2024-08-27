const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar em Educação Física com especialização em esportes, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre futebol, mas também gera imagens e áudios hiper-realistas de táticas e jogadas. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo do futebol?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade da tecnologia substituir o trabalho dos treinadores e a análise tática no futebol."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a chance de usar a IA para melhorar a análise de jogo, estratégias e treinamentos no futebol."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de educação física decidiu oferecer uma série de aulas sobre como usar a IA para otimizar treinos e estratégias de futebol. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA no futebol. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia no futebol.",
                afirmacao: "Você conseguiu utilizar a IA para obter informações úteis e atuais sobre como a tecnologia está transformando o esporte e as estratégias de futebol."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você preferiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA no futebol."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA está moldando o futuro do futebol e das estratégias de jogo. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode revolucionar a análise de desempenho e aprimorar as estratégias de jogo no futebol.",
                afirmacao: "Você acredita que a IA pode oferecer novas oportunidades para melhorar o desempenho dos jogadores e a eficiência das estratégias no futebol."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir a expertise dos treinadores e defendo a importância de manter o toque humano na análise e nas decisões do futebol.",
                afirmacao: "Sua preocupação com a substituição da experiência humana levou você a discutir a necessidade de equilibrar a tecnologia com a visão e o julgamento dos treinadores."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA no futebol. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para ilustrar suas ideias sobre futebol."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de análise tática para entregar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o plano de jogo. O problema é que o plano está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o plano gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade e o pensamento estratégico."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o plano para garantir que ele atenda às necessidades específicas da equipe e do jogo.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a análise e a criatividade humana no futebol."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
