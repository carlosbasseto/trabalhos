const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após concluir sua formação em academias militares, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre estratégias militares, mas também gera imagens e áudios hiper-realistas de operações e táticas. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar a carreira militar?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade da tecnologia substituir a expertise e a tomada de decisões dos oficiais militares."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para melhorar a precisão das estratégias e a eficácia das operações militares."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de estratégia militar decidiu oferecer uma série de aulas sobre como usar a IA para otimizar a formação e a execução de operações. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA na carreira militar. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia na carreira militar.",
                afirmacao: "Você conseguiu utilizar a IA para compilar informações úteis e atuais sobre como a tecnologia está transformando a estratégia e a operação militar."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA na carreira militar."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA está moldando o futuro das estratégias militares e da formação de oficiais. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode melhorar a precisão das estratégias e tornar as operações militares mais eficazes e seguras.",
                afirmacao: "Você acredita que a IA pode oferecer novas oportunidades para aprimorar a estratégia e a eficiência das operações militares."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir o julgamento humano e defendo a importância de manter a experiência e a tomada de decisão dos oficiais militares.",
                afirmacao: "Sua preocupação com a substituição da expertise humana levou você a discutir a necessidade de equilibrar a tecnologia com o julgamento e a experiência dos líderes militares."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA na carreira militar. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para ilustrar suas ideias sobre estratégias e operações militares."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de estratégia militar para apresentar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o plano. O problema é que o plano está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o plano gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade e a análise crítica."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o plano para garantir que ele atenda às necessidades específicas da missão e ao contexto militar.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a análise e a personalização das estratégias militares."
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
