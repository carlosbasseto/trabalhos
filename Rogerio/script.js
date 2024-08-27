const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após comprar um carro novo, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre manutenção e reparos de veículos, mas também gera imagens e áudios hiper-realistas de diagnósticos e procedimentos. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo da manutenção de carros?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade de a tecnologia substituir o trabalho dos mecânicos e reduzir a importância da experiência humana na manutenção de veículos."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para obter orientações detalhadas, diagnósticos precisos e melhorar o cuidado com seu carro."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um mecânico decidiu oferecer uma série de workshops sobre como usar a IA para diagnosticar e reparar carros. No fim de um workshop, ele pede que você escreva um trabalho sobre o impacto da IA na manutenção de veículos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia na manutenção e reparo de carros.",
                afirmacao: "Você conseguiu utilizar a IA para reunir informações úteis e atuais sobre como a tecnologia está influenciando o setor automotivo."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com mecânicos, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA na manutenção e reparo de veículos."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, o mecânico realizou um debate sobre como a IA está moldando o futuro da manutenção de carros e dos serviços automotivos. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode oferecer diagnósticos mais rápidos e precisos e melhorar a eficiência na manutenção de veículos.",
                afirmacao: "Você acredita que a IA pode ajudar a tornar os serviços automotivos mais acessíveis e melhorar a precisão dos diagnósticos e reparos."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir a habilidade dos mecânicos e defendo a importância de manter o trabalho humano na manutenção de veículos.",
                afirmacao: "Sua preocupação com a substituição da experiência humana levou você a discutir a necessidade de equilibrar a tecnologia com a expertise e o toque pessoal dos profissionais de manutenção."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA na manutenção de carros. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para explorar novas ideias visuais sobre a manutenção de veículos."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de manutenção de carro para entregar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para gerar o plano de manutenção. O problema é que o plano está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o plano gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a personalização e o conhecimento técnico."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o plano para garantir que ele reflita suas próprias ideias e as especificidades do veículo.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para o planejamento e a análise personalizada na manutenção de carros."
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
