export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  axioms: string[];
  locale: string;
}

export const articles: Article[] = [
  {
    slug: "fracasso-modelo-mental-errado",
    title: "O fracasso nao vem da falta de esforco. Vem do modelo mental errado.",
    date: "2026-01-28",
    excerpt:
      "Hoje, um executivo de Receita sem visao sistemica esta fadado ao fracasso. Se a base da sua gestao e linear, o resultado sera insustentavel.",
    axioms: ["Gestao Sistemica", "Zona de Cegueira"],
    locale: "pt",
    content: `## A ilusao da linearidade

A crenca predominante e que a Receita e uma equacao linear: basta aumentar o volume na entrada para garantir o resultado na saida.

O problema? Esse modelo incentiva a otimizacao de silos. Quando voce melhora uma parte sem entender as conexoes, voce frequentemente piora o sistema inteiro. Em casos extremos, a busca por eficiencia local quebra a operacao de vez.

## Sua operacao e um organismo vivo

Esqueca as planilhas e dashboards estaticos. Variaveis como DemandState e CapacityState alteram o comportamento umas das outras em tempo real.

A interacao entre elas cria dinamicas que o modelo linear nao captura:

- Dependencias e atrasos
- Gargalos e ociosidades
- Pontos de ruptura subitos

Sistemas vivos sao instaveis. Uma mudanca na demanda ou uma decisao errada de capacidade desestabiliza todo o fluxo rapidamente.

## Pare de dirigir pelo retrovisor

Se a sua gestao e baseada apenas em resultados passados, voce esta cego para o contexto atual. E o famoso dirigir olhando pelo retrovisor.

Empresas perdem ate 30% de sua receita anual devido a essas ineficiencias de processo.

Quem so mede resultado, corrige tarde demais. Quando o problema aparece nos relatorios, o sistema ja quebrou semanas atras. Voce cria o que chamamos de Zona de Cegueira.

## O novo papel do Executivo

O trabalho nao e apenas bater meta. E governar com maestria um sistema em movimento. O executivo moderno precisa ser um engenheiro de receita, capaz de orquestrar fluxos e as dependencias entre marketing, vendas e sucesso do cliente.

Na Gestao Linear, voce reage ao numero final. Na Gestao Sistemica, voce monitora o comportamento do fluxo e se antecipa a ele. A mudanca de mentalidade e inegociavel.

Voce nao pode controlar o caos do mercado, mas pode controlar como seu sistema responde a ele.

*Sua operacao hoje e movida a reacoes tardias ou a sinais em tempo real?*`,
  },
  {
    slug: "maquina-vendas-fabrica-receita",
    title: 'Da "Maquina de Vendas" a "Fabrica de Receita"',
    date: "2026-02-03",
    excerpt:
      "O termo Maquina de Vendas foi um marco na gestao de startups. Mas na complexidade atual, a maquina tornou-se limitada. Precisamos falar sobre a Fabrica de Receita.",
    axioms: ["Fabrica de Receita", "Engenharia de Receita", "RevenueStream"],
    locale: "pt",
    content: `O termo Maquina de Vendas foi um marco na gestao principalmente de startups que estavam escalando. Ele nos ensinou a importancia da repetibilidade e do processo. Mas, na velocidade e complexidade do mercado atual, a maquina tornou-se limitada. Ela foca no volume, mas ignora a eficiencia. Para o proximo nivel de maturidade, precisamos falar sobre a Fabrica de Receita. A diferenca nao e apenas semantica; e uma mudanca de paradigma na Engenharia de Receita.

## A Maquina de Vendas e a Caixa Preta do Lead

A visao tradicional de maquina trata a receita como uma equacao linear: voce coloca Leads de um lado e espera o FinancialOutcome do outro. O problema? Ela e uma caixa preta.

Muitas vezes, o executivo so enxerga o topo e o fundo do funil. Coloca insumo de um lado, espera o resultado do outro.

Ignora-se o que acontece no meio: o SystemDelay (atraso do sistema), os gargalos invisiveis e, principalmente, a saude financeira do fluxo.

Se uma engrenagem trava, voce so descobre quando a meta do mes nao bate.

## A Fabrica de Receita: Visibilidade e Margem no Centro

Parece uma diferenca sutil, mas para um Engenheiro de Receita, ela muda tudo. Em uma fabrica, nao existem caixas pretas. Existem estacoes de trabalho coordenadas e fluxos de materiais (RevenueStream) monitorados em tempo real.

**Gestao de Fluxo Completo:** A Fabrica de Receita nao monitora apenas o lead. Ela integra o CAC, a margem de contribuicao e as despesas operacionais (ExpenseEvent) diretamente ao fluxo de conversao.

**Integracao Financeira:** Voltamos a analise rigorosa que tinhamos la atras, mas com a velocidade de hoje. Se o custo de aquisicao sobe ou a eficiencia de uma estacao de trabalho cai, o impacto no lucro e detectado instantaneamente.

## O Executivo de Receita como o Novo Engenheiro de Producao

Gerenciar receita exige a mesma precisao de uma planta industrial moderna:

- **Visibilidade Total do Fluxo:** Diferente da maquina, na fabrica voce enxerga onde o material esta parado em tempo real.
- **Identificacao de Gargalos:** Voce detecta o estrangulamento na capacidade no exato momento em que a demanda aumenta.
- **Gestao por Anomalias:** O Engenheiro de Producao nao vigia cada parafuso. Ele constroi um sistema que emite alertas inteligentes quando algo sai do padrao.
- **Equilibrio Sistemico:** Se voce acelera o marketing sem ajustar a vazao de vendas e CS, voce cria ociosidade ou ruptura.

## O Custo da "caixa preta"

De acordo com a IDC, a falta de visibilidade sistemica cobra um pedagio caro: empresas perdem entre 20% e 30% de sua receita anualmente devido a ineficiencias ocultas em seus processos.

Sem sinais em tempo real de cada no do fluxo, e impossivel agir enquanto o dinheiro ainda esta na mesa. O resultado e a venda perdida — uma metrica invisivel quase impossivel de se mensurar com exatidao.

*A pergunta que fica: voce continua apenas observando o que entra e sai, ou ja governa sua receita com a precisao de uma fabrica em movimento?*`,
  },
  {
    slug: "metas-salsichas",
    title: "Se voce soubesse como as metas e as salsichas sao feitas...",
    date: "2026-02-12",
    excerpt:
      "A meta costuma ser uma peca de ficcao: um numero arbitrario baseado em um desejo de crescimento e nao na fisica do sistema.",
    axioms: [
      "Arquitetura da Meta",
      "Meta Movel",
      "Catchball",
      "InventoryState",
    ],
    locale: "pt",
    content: `Diz o ditado que quem gosta de leis e de salsichas nao deve ver como elas sao feitas. No mundo corporativo, a maxima se aplica perfeitamente as metas: se as pessoas soubessem como a maioria delas e definida, nao teriam estomago para desdobrar o planejamento do ano.

A meta costuma ser uma peca de ficcao: um numero arbitrario, empurrado goela abaixo pelo Board ou CEO, baseado em um desejo de crescimento e nao na fisica do sistema.

## A Psicologia do Impossivel e o Teatro do Absurdo

O estudo de Locke e Latham sobre a Teoria da Fixacao de Metas prova que objetivos desafiadores aumentam a produtividade em 18%. Mas ha um abismo entre o "desafiador" e o "impossivel".

Quando um executivo define uma meta agressiva sem visao sistemica, ele cria um efeito cascata de ficcao. As areas, para fazer a planilha fechar, comecam a projetar taxas de conversao 5x maiores do que a historica.

## Meta nao e Poesia

Enquanto frameworks tradicionais como o SMART focam no "o que", a Gestao Sistemica foca no "como" o sistema se comporta. Meta precisa de Calculo de Vazao. Sem calcular a capacidade real e lead times de rampagem e o fluxo de entrada necessario vs. orcamento, voce nao tem um plano, tem uma alucinacao.

## A Meta Movel e a Calibracao Dinamica

Gerir uma empresa com metas estaticas e como dirigir um carro olhando para um mapa de papel impresso. Na Engenharia de Receita, a meta precisa do "Efeito Waze": se o fluxo de trafego muda ou identificamos um gargalo, o sistema deve recalcular a rota instantaneamente.

Insistir no plano original diante de um bloqueio sistemico nao e "resiliencia", e teimosia operacional.

## A Anatomia do Erro: 5 Patologias Criticas

**1. Desdobramento por Silos:** A maioria dos executivos ainda sofre de cegueira operacional, desdobrando metas de forma isolada por area.

**2. A Miopia do Retrovisor:** A gestao foca no fechamento como se fossem eventos isolados, ignorando que o sistema tem memoria e inercia.

**3. O Tabu da Revisao:** Existe uma dificuldade patologica em revisar metas. Tratar meta como uma promessa mistica em vez de um parametro de engenharia e o caminho mais curto para a perda de autoridade.

**4. A Desintegracao de Foco:** Metas inalcancaveis matam o foco. Quando o numero oficial vira folclore, o time cria metas paralelas para justificar o proprio esforco.

**5. Estrategias de Fim de Jogo:** Descontos agressivos que destroem a margem ou antecipacoes forcadas de receita. E o triunfo da ansiedade sobre a sustentabilidade.

## Como quebrar o ciclo? Da Magica a Engenharia

**1. Definicao do Output Global:** Estabelecemos a meta global, mas nao como um decreto estatico. Iniciamos o processo de Catchball.

**2. Modelagem de Fluxo Reverso:** Retrocedemos etapa por etapa do fluxo, calculando o que e necessario em cada estagio com base no historico e taxas de conversao realistas.

**3. Auditoria de Viabilidade:** Cruzamos o fluxo projetado com os recursos disponiveis. Se a conta nao fecha, ajustamos a estrategia, o processo, o investimento ou ate a meta final.

*Se voce precisa triplicar a performance da noite para o dia para atingir o numero, voce nao tem um plano, voce tem uma esperanca.*`,
  },
  {
    slug: "vergonha-mudar-de-lado",
    title: "A vergonha precisa mudar de lado: minha jornada em busca do feminino",
    date: "2026-03-08",
    excerpt:
      "Quando comecei minha carreira eu nao tinha referencias femininas. Por mais de quinze anos, tentei me adaptar a um ambiente feito por homens, para homens.",
    axioms: ["Lideranca Feminina"],
    locale: "pt",
    content: `Quando comecei minha carreira eu nao tinha referencias femininas. Nenhuma. As mulheres que trabalhavam comigo estavam aprendendo a mesma coisa que eu: como sobreviver em um ambiente feito por homens, para homens.

## Eu acreditei que precisava virar mais um deles para crescer na carreira.

Fiquei mais agressiva. Comecei a falar palavrao. Endureci. Um dia ouvi um chefe dizendo para outra lideranca: *"Pode falar na frente dela. Ela e brother."*

Ser "brother" significava ouvir piadas e comentarios sobre mulheres que eu preferia nunca ter escutado. Durante anos, esse foi o jogo.

Enquanto isso, eu via homens sendo promovidos mais rapido, ganhando mais, tendo mais oportunidades — mesmo quando muitas de nos trabalhavamos mais e eramos mais competentes.

## Nos tambem fomos criadas dentro da mesma estrutura

Tem uma parte dessa historia que pouca gente fala: nos, mulheres, tambem fomos educadas dentro do mesmo sistema machista. Demorou anos para eu entender o que realmente estava acontecendo.

Por mais de quinze anos de carreira, eu nunca usei um vestido ou uma saia para trabalhar. Eu falava como eles. Me vestia como eles. Tentava pensar como eles tambem.

## A virada

Minha grande virada aconteceu quando trabalhei em uma empresa de varejo extremamente machista. Ali eu percebi que nao importava o quanto eu tentasse me adaptar: eu nunca faria parte do grupo 'deles'.

Pouco tempo depois pedi demissao. Tentar ficar do lado deles nunca me ajudou. Estava so perpetuando uma cultura que nao era a que eu queria para o mundo que minha filha iria crescer.

## Abracando a feminilidade

Foi quando comecei a abracar minha feminilidade. Foram anos de busca, terapia, conversas profundas e reflexoes para chegar num equilibrio entre as duas energias.

A mudanca aconteceu em todos os aspectos: desde a forma que eu me vestia ate a forma que eu me comportava, falava e pensava. Me abrir para a vulnerabilidade. Comecar a ver coisas que tinha preferido ignorar.

E algo magico aconteceu: minha lideranca mudou. Minha maternidade mudou. Minhas relacoes mudaram. Tudo mudou.

## A luta continua

A identificacao do machismo em alguns momentos e uma linha tenue — dificil de explicar, facil de invalidar. Nao foi porque eu aprendi a me posicionar que parei de conviver com o machismo.

## Hoje

Hoje eu sei exatamente quem e a Mariana mulher, amiga, filha, mae e lider. E nao tenho mais vergonha nenhuma da minha trajetoria. Como disse Gisele Pelicot: a vergonha precisa mudar de lado.

Porque a lideranca feminina nao e sobre falar mais alto. E sobre mudar a forma como o seu poder e exercido.

*A gente nao vai mais ter vergonha. Muito pelo contrario: agora nos temos orgulho.*`,
  },
  {
    slug: "4-formas-perder-receita",
    title: "Sua empresa perde receita de 4 formas. Voce provavelmente nem percebe.",
    date: "2026-03-25",
    excerpt:
      "Existe uma metrica que quase nenhuma empresa mede: a receita perdida. Nao estou falando de deals perdidos no CRM. Estou falando do dinheiro que deveria ter entrado e nao entrou.",
    axioms: ["Loss Typology", "Leak", "Break", "Bottleneck", "Degradation"],
    locale: "pt",
    content: `Existe uma metrica que quase nenhuma empresa mede: a receita perdida.

Nao estou falando de deals perdidos no CRM ou de churn reportado no board. Estou falando do dinheiro que deveria ter entrado — e nao entrou — por falhas sistemicas que ninguem enxerga. Essas perdas nao aparecem em nenhum dashboard. Nao geram alerta. E, segundo a IDC, representam entre 20% e 30% da receita anual de uma empresa.

Nos ultimos anos, trabalhando com empresas de educacao, varejo, energia e telecom, identifiquei que toda perda de receita no fluxo segue os mesmos padroes. A perda sempre se encaixa em uma de quatro categorias.

Chamo isso de Loss Typology.

## 1. Vazamento (Leak): a perda silenciosa

O lead entrou no sistema, progrediu ate certo ponto e desapareceu. Nao houve ruptura, nao houve travamento. Simplesmente sumiu.

Em uma edtech, descobrimos que 3.000 leads estavam no limbo. Tinham entrado no sistema, sido capturados corretamente, mas nunca foram distribuidos para o time comercial. Ninguem tinha percebido porque o topo do funil continuava gerando volume.

O vazamento e gradual e continuo. Nao gera alarme porque nao ha evento de ruptura.

## 2. Ruptura (Break): a parada subita

Diferente do vazamento, a ruptura e um evento discreto. O fluxo estava operando normalmente e, de repente, parou.

Em uma empresa de educacao, descobrimos que toda terca-feira, as 16h, a operacao perdia 20% da receita da semana. A causa? Uma unica pessoa nao cadastrava a data do vestibular no sistema dentro do prazo.

A ruptura e abrupta e detectavel se voce estiver olhando o tempo todo. O problema e que a maioria dos sistemas nao monitora a ausencia de eventos.

## 3. Gargalo (Bottleneck): o estrangulamento

O fluxo continua passando, mas devagar demais. A capacidade e menor do que a demanda, criando uma fila que atrasa tudo.

Na epoca de pico de matriculas, formavam-se filas interminaveis de atendimento porque ninguem tinha dimensionado a quantidade de atendentes corretamente. O marketing tinha feito seu trabalho: a demanda estava la. Mas a operacao nao conseguia processar.

O gargalo nao matou a demanda, mas matou a conversao.

## 4. Degradacao (Degradation): a erosao progressiva

Tudo continua funcionando. O fluxo passa, as conversoes acontecem, a receita entra. Mas a qualidade do fluxo esta piorando mes a mes. Os custos sobem, as margens encolhem, a eficiencia cai.

A empresa cresce no topo, mas a margem encolhe por baixo. Quando alguem finalmente conecta as variaveis, a erosao ja consumiu meses de eficiencia.

A degradacao e a perda mais perigosa porque e a mais lenta.

## Por que ninguem ve?

Nao e incompetencia. E arquitetura.

Marketing cuida de leads, vendas cuida de pipeline, operacoes cuida de entrega, financas cuida do resultado. Cada area tem seus KPIs. Ninguem cuida do fluxo entre eles. E e exatamente nesse espaco — na transicao entre silos — que as quatro perdas acontecem.

## Da cegueira a engenharia

A resposta nao e trabalhar mais. E mudar a arquitetura de como a organizacao opera receita.

Primeiro, parar de tratar receita como um numero no final do mes e comecar a trata-la como o que ela realmente e: um sistema de partes interconectadas.

Segundo, entender que cada tipo de perda exige uma resposta diferente.

Terceiro, construir um sistema que detecte essas perdas antes que se perca demais. Circuit Breakers que disparam quando o fluxo sai do padrao esperado. Diagnostico causal. Cada conclusao rastreavel. Cada recomendacao auditavel. Nenhuma caixa preta.

*Receita perdida nao volta. Mas pode parar de escapar.*`,
  },
];

export function getArticlesByLocale(locale: string): Article[] {
  return articles.filter((a) => a.locale === locale);
}

export function getArticleBySlug(
  slug: string,
  locale: string
): Article | undefined {
  return articles.find((a) => a.slug === slug && a.locale === locale);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
