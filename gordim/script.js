const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar em design de moda, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre moda masculina, mas também gera imagens e áudios hiper-realistas de roupas e tendências. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo da moda masculina?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou receoso com a possibilidade da tecnologia substituir o trabalho criativo e a consultoria pessoal na moda masculina."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a chance de usar a IA para criar looks personalizados e explorar novas tendências no universo da moda masculina."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de design de moda decidiu oferecer uma série de aulas sobre como usar a IA na criação de roupas masculinas. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA no design de moda masculina. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia na moda masculina.",
                afirmacao: "Você conseguiu utilizar a IA para compilar informações valiosas e atuais sobre como a tecnologia está transformando o design de moda masculina."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a integração da IA no design de moda masculina."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA está moldando o futuro do design de moda masculina. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode trazer inovações significativas e aprimorar o design de roupas masculinas.",
                afirmacao: "Você acredita que a IA pode ser uma ferramenta poderosa para inovação e criatividade na moda masculina, oferecendo novas possibilidades para designers."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir o trabalho criativo dos designers e defendo a importância de manter o toque pessoal no design de moda masculina.",
                afirmacao: "Sua preocupação com o impacto da tecnologia na criatividade humana levou você a promover uma discussão sobre a importância de preservar a criatividade pessoal no design de moda masculina."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA no design de roupas masculinas. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para ilustrar suas ideias de moda masculina."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de moda masculina para apresentar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o design. O problema é que o design está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o design gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade pessoal."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é crucial revisar e personalizar o design para garantir que ele refleta a visão e o estilo desejado.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a criatividade e personalização no design de moda masculina."
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
