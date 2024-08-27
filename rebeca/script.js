const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar em literatura, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre livros e autores, mas também gera resenhas e análises literárias hiper-realistas. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo da leitura?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade de a tecnologia substituir a interpretação e o insight crítico dos leitores e críticos literários."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para explorar novas interpretações, obter resenhas detalhadas e enriquecer sua experiência de leitura."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um professor de literatura decidiu oferecer uma série de aulas sobre como usar a IA para analisar e compreender melhor textos literários. No fim de uma aula, ele pede que você escreva um trabalho sobre o impacto da IA no mundo da leitura. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia na literatura e na análise de textos.",
                afirmacao: "Você conseguiu utilizar a IA para reunir informações úteis e atuais sobre como a tecnologia está influenciando a leitura e a crítica literária."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA na interpretação e apreciação de textos literários."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, o professor realizou um debate sobre como a IA está moldando o futuro da literatura e da crítica literária. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode oferecer novas perspectivas e enriquecer a análise literária ao fornecer diferentes interpretações e insights.",
                afirmacao: "Você acredita que a IA pode ajudar a explorar novas camadas de significado e tornar a leitura mais acessível e diversificada."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir a interpretação humana e defendo a importância de manter o papel dos leitores e críticos na apreciação e análise dos textos.",
                afirmacao: "Sua preocupação com a substituição da crítica humana levou você a discutir a necessidade de equilibrar a tecnologia com o insight e a sensibilidade dos leitores e críticos literários."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA na leitura. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para explorar novas ideias visuais sobre a leitura e a literatura."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de análise literária para entregar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para gerar a análise. O problema é que a análise está totalmente igual à do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar a análise gerada pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade e o pensamento crítico."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar a análise para garantir que ela reflita suas próprias ideias e interpretações.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a análise e a interpretação pessoal dos textos literários."
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
