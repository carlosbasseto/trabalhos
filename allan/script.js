const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar em Educação Física, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre exercícios e nutrição, mas também gera imagens e áudios hiper-realistas de treinos e dietas. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo do fitness?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com o impacto da tecnologia sobre a orientação pessoal e a interação humana nos treinos."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou animado com a possibilidade de usar a IA para criar treinos personalizados e ajudar as pessoas a atingirem seus objetivos de forma mais eficaz."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de educação física decidiu fazer uma série de aulas sobre como usar a IA para melhorar os treinos e a nutrição. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA no fitness. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia no fitness.",
                afirmacao: "Você conseguiu utilizar a IA para obter informações úteis e relevantes sobre como a tecnologia pode influenciar os treinos e a nutrição."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e conhecimentos para elaborar um trabalho que reflete sua perspectiva pessoal sobre a tecnologia no fitness."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA está moldando o futuro do fitness e da nutrição. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode melhorar a personalização dos treinos e ajudar a alcançar melhores resultados mais rapidamente.",
                afirmacao: "Você acredita que a IA pode ser uma ferramenta poderosa para personalizar e otimizar o desempenho no fitness."
            },
            {
                texto: "Me preocupo com a substituição do toque pessoal dos treinadores e defendo a importância de manter a interação humana no treinamento físico.",
                afirmacao: "Sua preocupação com a redução da interação humana levou você a promover um debate sobre o equilíbrio entre tecnologia e contato pessoal no fitness."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA no mundo do fitness. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para representar suas ideias de fitness."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de academia para apresentar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o plano de treino. O problema é que o plano está completamente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o plano gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode comprometer a originalidade e agora busca equilibrar o uso da tecnologia com suas próprias ideias."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o plano de treino para garantir que ele atenda às necessidades reais dos clientes.",
                afirmacao: "Você entendeu que a IA deve ser um complemento e não um substituto total para a personalização e atenção ao cliente na academia."
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
