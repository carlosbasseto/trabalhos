const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após decidir fazer sua primeira tatuagem, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre cuidados e estilos de tatuagens, mas também gera imagens e áudios hiper-realistas de diferentes designs e técnicas. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo das tatuagens?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade da tecnologia substituir a criatividade e a habilidade dos tatuadores profissionais."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para explorar novos designs e obter informações detalhadas sobre os cuidados necessários para suas tatuagens."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um artista de tatuagem decidiu oferecer uma série de workshops sobre como usar a IA para criar e visualizar designs de tatuagens. No fim de um workshop, ele pede que você escreva um trabalho sobre o impacto da IA no mundo das tatuagens. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia no design e cuidados com tatuagens.",
                afirmacao: "Você conseguiu utilizar a IA para reunir informações úteis e atuais sobre como a tecnologia está influenciando o mundo das tatuagens."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com tatuadores, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA na arte da tatuagem."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, o artista realizou um debate sobre como a IA está moldando o futuro do design de tatuagens e dos cuidados pós-tatuagem. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode oferecer novas possibilidades criativas e tornar o design de tatuagens mais acessível e diversificado.",
                afirmacao: "Você acredita que a IA pode ajudar a explorar novas formas de arte e a personalizar tatuagens de acordo com as preferências individuais dos clientes."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir a habilidade e o estilo pessoal dos tatuadores e defendo a importância de manter a arte e a técnica humanas.",
                afirmacao: "Sua preocupação com a substituição da arte tradicional levou você a discutir a necessidade de equilibrar a tecnologia com o toque pessoal e a experiência dos tatuadores."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA nas tatuagens. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para explorar novos designs e estilos de tatuagens."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de design de tatuagem para apresentar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o design. O problema é que o design está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o design gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade e a expressão pessoal."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o design para garantir que ele reflita suas próprias ideias e o estilo desejado.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a criatividade e a personalização no design de tatuagens."
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
