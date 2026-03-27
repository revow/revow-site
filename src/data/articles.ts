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
    title: "O fracasso não vem da falta de esforço. Vem do modelo mental errado.",
    date: "2026-01-28",
    excerpt:
      "Hoje, um executivo de Receita sem visão sistêmica está fadado ao fracasso. Se a base da sua gestão é linear, o resultado será insustentável.",
    axioms: ["Gestão Sistêmica", "Zona de Cegueira"],
    locale: "pt",
    content: `## A ilusão da linearidade

A crença predominante é que a Receita é uma equação linear: basta aumentar o volume na entrada para garantir o resultado na saída.

O problema? Esse modelo incentiva a otimização de silos. Quando você melhora uma parte sem entender as conexões, você frequentemente piora o sistema inteiro. Em casos extremos, a busca por eficiência local quebra a operação de vez.

## Sua operação é um organismo vivo

Esqueça as planilhas e dashboards estáticos. Variáveis como DemandState e CapacityState alteram o comportamento umas das outras em tempo real.

A interação entre elas cria dinâmicas que o modelo linear não captura:

- Dependências e atrasos;
- Gargalos e ociosidades;
- Pontos de ruptura súbitos.

Sistemas vivos são instáveis. Uma mudança na demanda ou uma decisão errada de capacidade desestabiliza todo o fluxo rapidamente.

## Pare de dirigir pelo retrovisor

Se a sua gestão é baseada apenas em resultados passados, você está cego para o contexto atual. É o famoso dirigir olhando pelo retrovisor.

Empresas perdem até 30% de sua receita anual devido a essas ineficiências de processo.

Quem só mede resultado, corrige tarde demais. Quando o problema aparece nos relatórios, o sistema já quebrou semanas atrás. Você cria o que chamamos de Zona de Cegueira.

## O novo papel do Executivo

O trabalho não é apenas bater meta. É governar com maestria um sistema em movimento. O executivo moderno precisa ser um engenheiro de receita, capaz de orquestrar fluxos e as dependências entre marketing, vendas e sucesso do cliente.

Na Gestão Linear, você reage ao número final. Na Gestão Sistêmica, você monitora o comportamento do fluxo e se antecipa a ele. A mudança de mentalidade é inegociável.

Você não pode controlar o caos do mercado, mas pode controlar como seu sistema responde a ele.

*Sua operação hoje é movida a reações tardias ou a sinais em tempo real?*`,
  },
  {
    slug: "maquina-vendas-fabrica-receita",
    title: 'Da "Máquina de Vendas" à "Fábrica de Receita"',
    date: "2026-02-03",
    excerpt:
      "O termo Máquina de Vendas foi um marco na gestão de startups. Mas na complexidade atual, a máquina tornou-se limitada. Precisamos falar sobre a Fábrica de Receita.",
    axioms: ["Fábrica de Receita", "Engenharia de Receita", "RevenueStream"],
    locale: "pt",
    content: `O termo Máquina de Vendas foi um marco na gestão principalmente de startups que estavam escalando. Ele nos ensinou a importância da repetibilidade e do processo. Mas, na velocidade e complexidade do mercado atual, a máquina tornou-se limitada. Ela foca no volume, mas ignora a eficiência. Para o próximo nível de maturidade, precisamos falar sobre a Fábrica de Receita. A diferença não é apenas semântica; é uma mudança de paradigma na Engenharia de Receita.

## A Máquina de Vendas e a Caixa Preta do Lead

A visão tradicional de máquina trata a receita como uma equação linear: você coloca Leads de um lado e espera o FinancialOutcome do outro. O problema? Ela é uma caixa preta.

Muitas vezes, o executivo só enxerga o topo e o fundo do funil. Coloca insumo de um lado, espera o resultado do outro.

Ignora-se o que acontece no meio: o SystemDelay (atraso do sistema), os gargalos invisíveis e, principalmente, a saúde financeira do fluxo.

Se uma engrenagem trava, você só descobre quando a meta do mês — o seu resultado passado — não bate.

## A Fábrica de Receita: Visibilidade e Margem no Centro

Parece uma diferença sutil, mas para um Engenheiro de Receita, ela muda tudo. Em uma fábrica, não existem caixas pretas. Existem estações de trabalho coordenadas e fluxos de materiais (RevenueStream) monitorados em tempo real. A gestão moderna exige o melhor de dois mundos: a agilidade do Growth e a precisão do DRE tradicional. Não basta crescer a qualquer custo; é preciso crescer com eficiência.

**Gestão de Fluxo Completo:** A Fábrica de Receita não monitora apenas o lead. Ela integra o CAC, a margem de contribuição e as despesas operacionais (ExpenseEvent) diretamente ao fluxo de conversão.

**Integração Financeira:** Voltamos à análise rigorosa que tínhamos lá atrás, mas com a velocidade de hoje. Se o custo de aquisição sobe ou a eficiência de uma estação de trabalho cai, o impacto no lucro é detectado instantaneamente, não no fechamento do trimestre.

## O Executivo de Receita como o Novo Engenheiro de Produção

Gerenciar receita não é sobre "bater meta" no grito: exige a mesma precisão de uma planta industrial moderna. É sobre governar uma planta industrial complexa em tempo real:

- **Visibilidade Total do Fluxo (RevenueStream):** Diferente da máquina, na fábrica você enxerga onde o material (lead/oportunidade) está parado em tempo real.
- **Identificação de Gargalos:** Você detecta o estrangulamento na CapacityState (capacidade do time) no exato momento em que a DemandState (demanda do mercado) aumenta.
- **Gestão por Anomalias:** O Engenheiro de Produção não vigia cada parafuso. Ele constrói um sistema que emite alertas inteligentes quando o RevenueEvent sai do padrão esperado.
- **Equilíbrio Sistêmico:** Se você acelera o marketing sem ajustar a vazão de vendas e CS, você cria ociosidade ou ruptura. A fábrica permite equilibrar a carga em tempo real.

## O Custo da "caixa preta": A Invisibilidade que Corrói o P&L

De acordo com a IDC, a falta de visibilidade sistêmica cobra um pedágio caro: empresas perdem entre 20% e 30% de sua receita anualmente devido a ineficiências ocultas em seus processos. São Leads que ficam estagnados, integrações que falham, processos que não funcionam e, principalmente, decisões de capacidade (CapacityState) equivocadas que destroem a margem de contribuição.

Sem sinais em tempo real de cada nó do fluxo, é impossível agir enquanto o dinheiro ainda está na mesa. O resultado é a venda perdida — uma métrica invisível quase impossível de se mensurar com exatidão e que acaba sendo convenientemente ignorada pela gestão tradicional.

A tecnologia deve servir a um propósito maior: iluminar esses fluxos para alcançar a Eficiência Sistêmica. O objetivo não é apenas crescer, mas capturar o melhor resultado com a maior lucratividade possível.

A era da gestão reativa, que dirige olhando pelo retrovisor, ficou para trás. O mercado não tolera mais a gestão por 'caixa preta'. O futuro pertence aos executivos que governam sua Fábrica de Receita em movimento, unindo a agilidade do funil com a sobriedade do P&L.

*A pergunta que fica para sua próxima reunião de board é: você continua apenas observando o que entra e sai, ou já governa sua receita com a precisão de uma fábrica em movimento?*`,
  },
  {
    slug: "metas-salsichas",
    title: "Se você soubesse como as metas e as salsichas são feitas...",
    date: "2026-02-12",
    excerpt:
      "A meta costuma ser uma peça de ficção: um número arbitrário baseado em um desejo de crescimento e não na física do sistema.",
    axioms: [
      "Arquitetura da Meta",
      "Meta Móvel",
      "Catchball",
      "InventoryState",
    ],
    locale: "pt",
    content: `Diz o ditado que quem gosta de leis e de salsichas não deve ver como elas são feitas. No mundo corporativo, a máxima se aplica perfeitamente às metas: se as pessoas soubessem como a maioria delas é definida, não teriam estômago para desdobrar o planejamento do ano.

A meta costuma ser uma peça de ficção: um número arbitrário, empurrado goela abaixo pelo Board ou CEO, baseado em um desejo de crescimento e não na física do sistema. É o "Top-Down" sem o contraponto do Catchball (a negociação real de capacidade do Hoshin Kanri). Se você aceita o plano de 2026 sem questionar a engenharia por trás dele, você não está gerindo; está torcendo.

## A Psicologia do Impossível e o Teatro do Absurdo

O estudo de Locke e Latham sobre a Teoria da Fixação de Metas prova que objetivos desafiadores aumentam a produtividade em 18%. Mas há um abismo entre o "desafiador" e o "impossível".

Quando um executivo define uma meta agressiva sem visão sistêmica, ele cria um efeito cascata de ficção. As áreas, para fazer a planilha fechar, começam a projetar taxas de conversão 5x maiores do que a histórica ou ignoram os Lead Times de contratação. O resultado? Ou o time entrega metas conservadoras para garantir o bônus ou o sistema entra em falência múltipla.

## Meta não é Poesia

Enquanto frameworks tradicionais como o SMART focam no "o quê", a Gestão Sistêmica foca no "como" o sistema se comporta. O mercado abraçou os OKRs pela promessa de agilidade, mas essa simplicidade foi mal interpretada.

Hoje, metas viraram um exercício literário: escrevem-se frases inspiradoras em post-its, mas esquece-se que a receita tem um "encanamento" que precisa suportar a pressão. Meta precisa de Cálculo de Vazão. Sem calcular o InventoryState (capacidade real e lead times de rampagem) e o DemandState (fluxo de entrada necessário vs. orçamento), você não tem um plano, tem uma alucinação.

## A Meta Móvel e a Calibração Dinâmica: A Fisiologia do Esforço e o Risco de Colapso

Gerir uma empresa com metas estáticas é como dirigir um carro olhando para um mapa de papel impresso. Você sabe onde quer chegar, mas ignora que a ponte caiu ou que o tráfego parou. Na Engenharia de Receita, a meta precisa do "Efeito Waze": se o fluxo de tráfego de entrada muda ou identificamos um gargalo na sua linha de produção ou vendas, o sistema deve recalcular a rota instantaneamente.

Insistir no plano original diante de um bloqueio sistêmico não é "resiliência", é teimosia operacional.

Pense em um maratonista de elite. Ele tem um objetivo de tempo, mas monitora sua frequência cardíaca e níveis de lactato a cada quilômetro. Se o corpo sinaliza um superaquecimento, ele calibra o ritmo. Se ele ignorar a própria fisiologia para manter o "planejamento de mesa", ele não bate o recorde; ele colapsa antes da linha de chegada.

Nas empresas, o colapso se manifesta como burnout de equipes, perda de margem e o abandono silencioso da meta. Quando o esforço exigido pelo sistema ultrapassa a capacidade física da arquitetura, a eficiência cai drasticamente. Recalibrar a meta não é "baixar a régua", é garantir que o sistema opere na sua Zona de Performance Máxima sem entrar em paralisia operacional.

## Recalcular é Inteligência, não Fraqueza

No modelo sistêmico, o esforço é uma variável de ajuste, não uma constante infinita. Se o sistema detecta que a conversão real está abaixo da projetada, a Engenharia de Receita oferece duas saídas reais:

- **Injeção de Recurso:** Aumentar a vazão para compensar a perda de eficiência.
- **Recalibração de Destino:** Ajustar o output para o que a física do sistema permite entregar com qualidade.

O que não é aceitável é a "estratégia do grito", onde se exige mais velocidade de um motor que está sem combustível. A meta móvel é o que permite que a empresa mantenha a integridade enquanto navega pela volatilidade. É a diferença entre chegar ao destino com o carro inteiro ou ficar parado no acostamento com o motor fundido, segurando um plano de negócios que ninguém mais acredita.

## A Anatomia do Erro: O Ciclo Vicioso da Autoilusão Estratégica

Sem uma visão sistêmica que projete o ano de forma dinâmica, as empresas não fazem gestão; elas operam em um estado de negação técnica onde a arquitetura dá lugar a cinco patologias críticas, muito mais profundas do que gostamos de admitir:

**1. Desdobramento por Silos:** A maioria dos executivos ainda sofre de cegueira operacional, desdobrando metas de forma isolada por área, ignorando que o sistema é interconectado e vivo. Uma meta feita corretamente não é uma lápide estática esculpida em dezembro, mas um organismo móvel e calibrado que exige o esforço trabalhoso de alinhar a vazão do funil à realidade do mercado.

**2. A Miopia do Retrovisor:** A gestão foca no fechamento do dia ou do mês como se fossem eventos isolados, ignorando que o sistema tem memória e inércia. Muitas vezes, o descolamento entre a meta e a realidade já existe em janeiro, mas a "miopia" impede que vejam o impacto acumulado no fluxo futuro. Quando percebem, no terceiro trimestre, que bater as metas mensais restantes é matematicamente impossível, o sistema já entrou em colapso.

**3. O Tabu da Revisão:** Existe uma dificuldade patológica — quase moral — em revisar metas. Em vez de recalibrar o sistema com base em dados físicos reais, a liderança opta por manter o "número de ficção", culpando a execução por falhas que são, na verdade, de design. Tratar meta como uma promessa mística em vez de um parâmetro de engenharia é o caminho mais curto para a perda de autoridade perante o time.

**4. A Desintegração de Foco:** Metas inalcançáveis matam o foco. Quando o número oficial vira folclore, o time cria metas paralelas para justificar o próprio esforço. Enquanto o KPI principal apodrece, a organização desmorona lateralmente. Não há motivação que resista ao choque entre a pressão cega da gestão e a física do impossível.

**5. Estratégias de Fim de Jogo:** É o ato final do desespero. Ao chegar ao fim do ano com o abismo exposto, autorizam-se manobras suicidas — descontos agressivos que destroem a margem ou antecipações forçadas de receita. É uma gestão que opera como se o jogo terminasse na virada do calendário, mas que apenas canibaliza o futuro e degrada a marca para o ciclo seguinte. É o triunfo da ansiedade sobre a sustentabilidade do sistema.

## Como quebrar o ciclo? Da Mágica à Engenharia

A ruptura não vem de "trabalhar mais", mas de mudar a arquitetura. É aqui que entra a necessidade de criar uma Arquitetura da Meta para o seu negócio e substituir o pânico do acompanhamento mensal pela clareza do sistema.

Se o sistema é dinâmico, a meta não pode ser fixa. Ela deve ser um algoritmo vivo que recalcula a rota assim que o DemandState ou o InventoryState sinalizam uma mudança na física do negócio. Defendo que a arquitetura da meta deve ser construída com o rigor de uma linha de produção:

**1. Definição do Output Global:** Estabelecemos a meta global no horizonte final, mas não como um decreto estático. Iniciamos o processo de Catchball, onde a diretriz estratégica é lançada para a operação. O objetivo aqui é alinhar a visão do Board ou do CEO à realidade física, tratando a meta como o output final de um sistema que precisa ser modelado, e não apenas desejado.

**2. Modelagem de Fluxo Reverso (A Materialidade da Receita):** Retrocedemos etapa por etapa do fluxo, tratando cada marco (leads, oportunidades, clientes) como a "matéria-prima" de uma linha de produção. Calculamos o que é necessário em cada estágio com base no histórico, na sazonalidade e em taxas de conversão realistas. Neste estágio, a disciplina é fundamental: metas de eficiência devem ser incrementais e atingíveis. Tentar "consertar" um plano ruim injetando ganhos de performance agressivos e irreais neste momento é o que efetivamente quebra o sistema antes mesmo da execução.

**3. Auditoria de Viabilidade do InventoryState (Capacidade Estrutural) e Alocação de Capital:** É onde a "bola" volta para a gestão com os dados da realidade. Cruzamos o fluxo projetado com os recursos disponíveis: temos máquinas, pessoas e tecnologia para processar essa vazão? O investimento disponível é condizente com o volume de demanda necessário? Por exemplo, se a projeção de leads exige um investimento de X e o orçamento libera apenas Y, o plano é impossível. É neste momento soberano que a conta precisa fechar — de trás para frente e de frente para trás. Se a conta não fecha, não "ajustamos a planilha"; ajustamos a estratégia, o processo, o investimento ou quiçá até a meta final.

O resultado final deve ser um plano de engenharia, não uma alucinação de performance. Um sistema de metas real é monitorado como um organismo vivo, onde as metas das áreas 'conversam' entre elas o tempo todo para evitar silos.

*Se você precisa triplicar a performance da sua equipe da noite para o dia para atingir o número, você não tem um plano, você tem uma esperança. Tratar meta como um número fixo em um sistema dinâmico é como um piloto que ignora o radar de tempestade só porque o plano de voo original prometia céu limpo. Se a conta não fecha na arquitetura sistêmica, bater a meta não é questão de esforço, é questão de sorte — e sorte e esperança não são variáveis que fazem diferença na estratégia de crescimento.*`,
  },
  {
    slug: "4-formas-perder-receita",
    title: "Sua empresa perde receita de 4 formas. Você provavelmente nem percebe.",
    date: "2026-03-25",
    excerpt:
      "Existe uma métrica que quase nenhuma empresa mede: a receita perdida. Não estou falando de deals perdidos no CRM. Estou falando do dinheiro que deveria ter entrado e não entrou.",
    axioms: ["Loss Typology", "Leak", "Break", "Bottleneck", "Degradation"],
    locale: "pt",
    content: `Existe uma métrica que quase nenhuma empresa mede: a receita perdida.

Não estou falando de deals perdidos no CRM ou de churn reportado no board. Estou falando do dinheiro que deveria ter entrado — e não entrou — por falhas sistêmicas que ninguém enxerga. A pessoa que esqueceu de cadastrar a data do vestibular no sistema e, toda terça-feira às 16h, a empresa perdia 20% da receita semanal. Os 3.000 leads que ficaram no limbo porque ninguém percebeu que a integração não estava funcionando. O posto que ficou sem combustível porque o gerente errou o cálculo de compra. O custo de aquisição que dobrou em seis meses e ninguém conectou ao impacto na margem.

Essas perdas não aparecem em nenhum dashboard. Não geram alerta. Não disparam reunião de crise. E, segundo a IDC, representam entre 20% e 30% da receita anual de uma empresa.

Nos últimos anos, trabalhando com empresas de educação, varejo, energia e telecom, identifiquei que toda perda de receita no fluxo segue os mesmos padrões. Não importa o setor, não importa o porte: a mecânica é a mesma.

A perda sempre se encaixa em uma de quatro categorias, cada uma com causa, sintoma, velocidade e solução completamente diferentes. Tratar uma com a receita da outra é como tomar antibiótico para uma fratura.

Chamo isso de Loss Typology.

## 1. Vazamento (Leak): a perda silenciosa

O lead entrou no sistema, progrediu até certo ponto e desapareceu. Não houve ruptura, não houve travamento. Simplesmente sumiu. Como água escorrendo por uma torneira que não fecha completamente: cada gota parece insignificante, mas no final do mês, a conta é brutal.

Em uma edtech onde trabalhei, descobrimos um dia que 3.000 leads estavam no limbo. Três mil. Tinham entrado no sistema, sido capturados corretamente, mas nunca foram distribuídos para o time comercial.

Ninguém tinha percebido porque o topo do funil continuava gerando volume e o time de vendas continuava trabalhando os leads que recebia. A ausência desses 3.000 era invisível. Não aparecia como erro, não gerava alerta, não quebrava nenhum processo. Simplesmente existia como um buraco silencioso entre a captação e o atendimento.

O vazamento é gradual e contínuo. Não gera alarme porque não há evento de ruptura. A perda é difusa — um pouco aqui, um pouco ali — e por isso é a mais difícil de detectar e a mais cara de ignorar.

## 2. Ruptura (Break): a parada súbita

Diferente do vazamento, a ruptura é um evento discreto. O fluxo estava operando normalmente e, de repente, parou. Algo que deveria estar acontecendo simplesmente deixou de acontecer.

Em uma empresa de educação, descobrimos que toda terça-feira, às 16h, a operação comercial perdia 20% da receita da semana. Toda semana. O mesmo dia, o mesmo horário, o mesmo impacto. A causa? Uma única pessoa não cadastrava a data do vestibular de algumas unidades no sistema dentro do prazo. Sem a data, o fluxo de inscrições daquele processo travava. A equipe comercial não recebia os candidatos. A tarde inteira se perdia. E na semana seguinte, acontecia de novo.

Em postos de combustível, a ruptura tem outra cara: o gerente erra o cálculo de compra, o tanque seca, a bomba para. O posto continua aberto, vendendo outros produtos, mas a receita principal simplesmente zera até a próxima entrega. Sem monitoramento automatizado de nível de estoque, nenhum alerta sobe para a central. A gestão só descobre no fechamento do mês, quando já é tarde demais.

A ruptura é abrupta e detectável se você estiver olhando o tempo todo. O problema é que a maioria dos sistemas não monitora a ausência de eventos. Se ninguém vendeu nas últimas quatro horas, não gera alerta. Deveria.

## 3. Gargalo (Bottleneck): o estrangulamento

O fluxo continua passando, mas devagar demais. A capacidade de algum ponto do sistema é menor do que a demanda que chega nele, criando uma fila que atrasa tudo — e filas, no mundo da receita, não esperam.

Vivi isso de perto em uma empresa de educação. Na época de pico de matrículas, formavam-se filas intermináveis de atendimento porque ninguém tinha dimensionado a quantidade de atendentes corretamente para o volume que chegava. O marketing tinha feito seu trabalho: a demanda estava lá. Mas a operação não conseguia processar por falta de recursos. A solução de emergência? Mutirão no fim de semana. A empresa inteira parava o que estava fazendo para atender a fila acumulada e colocar os atendimentos em dia.

Funciona uma vez. Duas. Na terceira, o time está exausto, a qualidade do atendimento despenca e o candidato que esperou dias já matriculou em outro lugar. O gargalo não matou a demanda mas matou a conversão.

O gargalo é traiçoeiro porque não impede o fluxo — apenas o retarda. Tudo parece estar funcionando, mas o tempo é inimigo da conversão. Quanto mais tempo um lead espera, maior a probabilidade de desistir.

## 4. Degradação (Degradation): a erosão progressiva

Tudo continua funcionando. O fluxo passa, as conversões acontecem, a receita entra. Mas a qualidade do fluxo está piorando mês a mês. Os custos sobem, as margens encolhem, a eficiência cai. Como uma ferrugem que corrói a estrutura sem que ninguém perceba até o dia em que a ponte cede.

Vi isso se repetir em diversas startups ao longo da minha carreira. O padrão é sempre o mesmo: nos primeiros meses, os canais de aquisição são eficientes, o custo por lead é baixo, a conversão é saudável.

Com o tempo, as taxas de conversão vão caindo ao longo do processo. Um pouco em cada etapa, nada alarmante isoladamente. O custo por lead vai subindo. A receita total muitas vezes não cai, o que mascara o problema. Mas o custo da receita está aumentando silenciosamente. A empresa cresce no topo, mas a margem encolhe por baixo. Quando alguém finalmente conecta as variáveis, a erosão já consumiu meses de eficiência.

A degradação é a perda mais perigosa porque é a mais lenta. Não há evento, não há ruptura, não há fila. Tudo parece normal. É uma febre baixa que nunca sobe o suficiente para alarmar, mas que indica uma infecção silenciosa.

## Por que ninguém vê?

Não é incompetência. É arquitetura.

E preciso dizer algo importante: as pessoas que trabalham nessas áreas são boas. A pessoa que não cadastrou a data do vestibular não é incompetente. O gerente do posto que errou o cálculo de compra não é negligente. O time de marketing que não percebeu a degradação do CAC não é descuidado. Cada um está fazendo o melhor possível dentro da visibilidade que tem.

O problema é que nenhuma pessoa, por melhor que seja, consegue ter a visão completa do sistema a partir de dentro de um silo. E não é justo esperar que tenha. A visão sistêmica não é responsabilidade de um indivíduo — é responsabilidade da organização. A empresa precisa fornecer essa visão. Se não fornece, está condenando pessoas competentes a operar no escuro.

Marketing cuida de leads, vendas cuida de pipeline, operações cuida de entrega, finanças cuida do resultado. Cada área tem seus KPIs, seus dashboards, suas reuniões. Ninguém cuida do fluxo entre eles. E é exatamente nesse espaço — na transição entre silos — que as quatro perdas acontecem.

O vazamento mora entre marketing e vendas. O gargalo surge entre vendas e operações. A degradação se manifesta na desconexão entre custo de aquisição e margem de contribuição. A ruptura acontece quando operações trava e ninguém em vendas percebe.

Marketing comemora porque gerou 10.000 leads. Vendas reclama que os leads são ruins. Operações diz que não tem capacidade. Finanças aponta que a margem encolheu. Todos estão certos. E ninguém enxerga o sistema.

Soma-se a isso dashboards que medem output (quanto fizemos?) em vez de fluxo (como o sistema está se comportando?) e alertas com thresholds fixos que ignoram o contexto (2 horas sem vender de madrugada é normal, 2 horas sem vender no sábado ao meio-dia é uma ruptura) e você tem a receita perfeita para o que chamo de Zona de Cegueira.

Quando o problema finalmente aparece nos relatórios, no fechamento do trimestre, na reunião de board, o sistema já quebrou semanas atrás. Não é diagnóstico. É autópsia.

## Da cegueira à engenharia

A resposta não é trabalhar mais. Não é cobrar mais das pessoas. É mudar a arquitetura de como a organização opera receita.

Primeiro, parar de tratar receita como um número no final do mês e começar a tratá-la como o que ela realmente é: um sistema de partes interconectadas com causalidade, onde cada elo tem capacidade, cada transição tem atrito, e cada perda tem tipo.

Segundo, entender que cada tipo de perda exige uma resposta diferente. Não adianta investir em mais mídia se o problema é um vazamento na conversão. Não adianta otimizar conversão se o problema é um gargalo de capacidade. Não adianta contratar mais gente se o problema é uma degradação silenciosa de eficiência que ninguém está monitorando.

Terceiro — e talvez o mais importante — construir um sistema que detecte essas perdas antes que se perca demais. Circuit Breakers que disparam quando o fluxo sai do padrão esperado para aquele contexto específico. Diagnóstico causal que percorre a cadeia receita → demanda → conversão → capacidade → classificação da perda → recomendação de ação. Cada conclusão rastreável. Cada recomendação auditável.

Nenhuma caixa preta.

Receita perdida não volta. Mas pode parar de escapar. E na minha experiência, essa é a maior alavanca de crescimento que a maioria das empresas nem sabe que tem porque nunca olhou para o lugar certo.`,
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
  return [...new Set(articles.map((a) => a.slug))];
}
