const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após concluir sua graduação, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre matérias acadêmicas, mas também gera imagens e áudios hiper-realistas relacionados a conceitos e teorias. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o campo dos estudos?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade da tecnologia substituir a importância do aprendizado ativo e da interação com professores."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para enriquecer seus estudos e entender conceitos complexos com mais clareza e interatividade."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um professor decidiu oferecer uma série de aulas sobre como usar a IA para otimizar o processo de aprendizado. No fim de uma aula, ele pede que você escreva um trabalho sobre o impacto da IA no campo dos estudos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia nos estudos.",
                afirmacao: "Você conseguiu utilizar a IA para reunir informações úteis e atuais sobre como a tecnologia está transformando a educação e o aprendizado."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a influência da IA no processo de aprendizado."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, o professor realizou um debate sobre como a IA está moldando o futuro da educação e do aprendizado. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode melhorar a personalização do ensino e oferecer novas oportunidades de aprendizado para todos.",
                afirmacao: "Você acredita que a IA pode oferecer novos recursos e métodos para tornar o aprendizado mais eficiente e adaptado às necessidades individuais dos estudantes."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir a interação humana e defendo a importância de manter o contato pessoal e o papel dos educadores no aprendizado.",
                afirmacao: "Sua preocupação com a substituição da interação humana levou você a discutir a necessidade de equilibrar a tecnologia com a presença e o envolvimento dos professores."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA nos estudos. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para ilustrar suas ideias sobre a educação e o aprendizado."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de pesquisa para entregar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para gerar o conteúdo. O problema é que o conteúdo está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o conteúdo gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade e o pensamento crítico."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o conteúdo para garantir que ele reflita suas próprias ideias e a profundidade da pesquisa.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a análise e a criatividade no processo de pesquisa."
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
