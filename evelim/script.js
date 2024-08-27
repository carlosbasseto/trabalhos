const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você termina um curso de moda, se depara com uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre roupas femininas, mas também gera imagens e áudios hiper-realistas de looks e tendências. Qual é o seu primeiro pensamento sobre como essa inovação pode transformar o mundo da moda?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você se sentiu apreensiva com a ideia de confiar tanto na tecnologia para criar e inspirar moda."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou animada com a possibilidade de explorar novas tendências e ideias através da IA."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de design de moda decidiu fazer uma sequência de aulas sobre como usar a IA na criação de roupas femininas. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA no design de moda. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicações sobre o tema.",
                afirmacao: "Você conseguiu utilizar a IA para encontrar e compilar informações úteis sobre como a tecnologia pode influenciar o design de moda."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você preferiu usar seus próprios recursos e conhecimentos para elaborar um trabalho mais pessoal e reflexivo."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa, foi discutido o impacto da IA na moda e no design de roupas femininas. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades na moda e melhorar a criatividade dos designers.",
                afirmacao: "Você acredita que a IA pode ser uma ferramenta poderosa para impulsionar a inovação e a criatividade no design de moda."
            },
            {
                texto: "Me preocupo com as possíveis consequências da IA substituindo o trabalho criativo humano e defendo a importância de manter o toque pessoal no design de moda.",
                afirmacao: "Sua preocupação com o impacto da tecnologia na criatividade humana levou você a promover um debate sobre o equilíbrio entre tecnologia e toque pessoal no design."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre o impacto da IA no design de roupas femininas. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como utilizar a IA para expressar suas ideias de moda."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de moda para entregar na semana seguinte, o andamento do projeto está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o design. O problema é que o design está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o projeto, por isso não é um problema utilizar o design inteiro.",
                afirmacao: "Você percebeu que depender demais da IA para criar designs pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a criatividade pessoal."
            },
            {
                texto: "O chat pode ser uma tecnologia útil, mas é importante revisar e adicionar um toque pessoal ao design para garantir que ele reflita suas próprias ideias.",
                afirmacao: "Você entendeu que a IA deve servir como uma ferramenta auxiliar e não como substituto total da criatividade humana no design de moda."
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
