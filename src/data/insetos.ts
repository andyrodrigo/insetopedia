import type { Inseto } from '../types/insetopedia'

const descricaoPendente = 'Descrição ainda não definida.'

const descricaoGranovo = `Os Granovos menores são mantidos em estoque nos túneis subterrâneos das colônias, protegidos pelas Formilitares até atingirem um estágio mais avançado de desenvolvimento. Quando estão próximos da maturidade, são levados para as zonas de guerra, onde passam a fazer parte do arsenal vivo do exército.

Sua casca é extremamente dura, permitindo que os Granovos sejam arremessados contra os inimigos como verdadeiras granadas. Quanto maior a distância e a força do impacto, maior o dano causado. Apesar de sua mobilidade limitada, um Granovo ainda é capaz de se lançar contra um inimigo por conta própria. Em situações de perigo, também pode liberar um gás altamente irritante para afastar ameaças.

Quando todas as outras opções falham, o Granovo pode recorrer ao seu último recurso: explodir, sacrificando-se para proteger as trincheiras e as tropas ao seu redor.

Porém, os Granovos mais desenvolvidos possuem uma característica ainda mais peculiar. Quando estão próximos de completar sua transformação, sua casca começa a se tornar progressivamente mais fina. Nesse estágio, são arremessados contra as linhas inimigas como de costume. Ao atingir o alvo, a casca se rompe violentamente — mas, em vez de uma explosão, dela emerge uma Formilitar completamente desenvolvida, pronta para continuar o ataque.

Assim, para o exército das formigas, um Granovo não é apenas uma arma: é também um soldado em formação, aguardando o momento certo para nascer no campo de batalha.`;
const descricaoFormilitar = `À primeira vista, as Formilitares podem parecer pequenas e pouco letais. Não possuem ferrões, garras ou outras armas naturais aparentes, e seu corpo não parece especialmente preparado para o combate. Essa impressão, porém, é enganosa.

As Formilitares possuem uma força muito maior do que seu tamanho sugere. São capazes de erguer e arremessar objetos várias vezes maiores que elas e podem até lançar inimigos de tamanho consideravelmente superior. Uma Formilitar sozinha já é capaz de surpreender pela força, mas seu verdadeiro poder está em outro lugar.

Organização.

As Formilitares funcionam como um único exército. Lutam em perfeita cooperação, coordenando seus movimentos e estratégias por meio das antenas de rádio que carregam em seus capacetes. Informações podem percorrer as fileiras rapidamente, permitindo que grupos inteiros reajam como se fossem uma única criatura.

Para uma Formilitar, a guerra não é apenas uma atividade: é seu modo de vida. Elas lutam para conquistar novos territórios, proteger suas colônias e, acima de tudo, aumentar seus próprios números.

Elas compreendem uma verdade simples:

quanto maior o exército, maior o poder.

Uma Formilitar pode ser pequena. Uma dúzia pode ser perigosa. Centenas podem dominar um campo de batalha.

E quando milhares marcham juntas, torna-se difícil dizer onde termina uma Formilitar e começa o exército.`;
const descricaoFormajor = `As Formilitares são conhecidas por sua força fora do comum, mas algumas demonstram capacidades excepcionais mesmo para os padrões da colônia. Quando uma Formilitar combina força extraordinária, coragem em combate e talento natural para liderança, ela pode se desenvolver em uma Formajor.

Formajores ocupam as altas patentes militares da colônia. Lideram tropas, coordenam formações e frequentemente carregam consigo histórias que as transformaram em verdadeiros heróis de guerra. Sua aparência acompanha sua função: possuem estatura maior, quatro braços extremamente fortes e uma cabeça desproporcionalmente grande, cuja carapaça lembra um enorme e exagerado capacete.

Mesmo entre as Formajores existem diferentes patentes. Marcas naturais em seus exoesqueletos indicam sua posição na hierarquia e permitem que qualquer membro da colônia reconheça imediatamente a autoridade de uma delas.

As Formajores de maior força física podem eventualmente desenvolver-se em Formitanques, tornando-se algumas das criaturas mais poderosas da colônia. Existe, porém, outro caminho reservado àquelas cujo maior talento está dentro de seu enorme cabeção. Uma Formajor de capacidade estratégica excepcional permanece nessa forma e recebe a mais alta patente militar existente: Formidante da Guerra.

Apenas uma ocupa esse título, assumindo o comando de todo o exército da colônia. Afinal, nem todo grande cabeção precisa servir apenas para sustentar um capacete enorme.`;
const descricaoFormiloto = `Algumas Formilitares demonstram um talento natural para compreender o movimento das tropas. São mais rápidas que as demais, percebem melhor o que acontece ao seu redor e instintivamente procuram lugares altos para observar a aproximação de inimigos. Por isso, costumam ocupar posições estratégicas dentro do exército, viajando sobre Formitanques ou sendo transportadas por Formicópteros até pontos de vantagem no campo de batalha.
Ao se desenvolverem, tornam-se Formilotos. Suas asas permitem percorrer rapidamente grandes zonas de guerra, observar o movimento inimigo e realizar ataques aéreos quando necessário. Seus olhos funcionam como binóculos naturais, permitindo enxergar a grandes distâncias, enquanto suas antenas são capazes de transmitir sinais de longo alcance para coordenar tropas mesmo enquanto sobrevoam o campo de batalha.
Formilotos são especialmente eficientes em reconhecimento e preparação de ofensivas. Algumas colônias mais experientes aprenderam a reconhecer um sinal particularmente preocupante: em dias de chuva, pequenas silhuetas de Formilotos podem ser vistas sobrevoando seus territórios, parcialmente escondidas pela neblina e pelas nuvens baixas.
Quando isso acontece, dificilmente estão apenas de passagem. Estão observando.
E quando a chuva cessa, geralmente o exército que elas estavam esperando também chega.`;
const descricaoFormitanque = `Uma única Formitanque já representa uma enorme ameaça em um campo de batalha. Seu exoesqueleto é extremamente resistente, funcionando como uma verdadeira blindagem natural capaz de protegê-la de ataques que derrubariam uma Formilitar comum.
Mas sua defesa não é sua única arma. As poderosas garras dianteiras podem estraçalhar inimigos com facilidade, enquanto as enormes pinças de sua boca são capazes de agarrar, esmagar e despedaçar adversários muito maiores que uma Formilitar.
No campo de batalha, a Formitanque também exerce uma importante função de comando. Sua antena é capaz de emitir sinais de alerta que percorrem as tropas, indicando mudanças na formação, reorganizando as fileiras e coordenando complexas armadilhas de guerra. Quando uma Formitanque altera sua posição, dezenas ou até centenas de Formilitares podem mudar de estratégia em resposta aos seus sinais.
Seu exoesqueleto possui espaços internos adaptados para o transporte de tropas e munição viva. Em seu interior, uma Formitanque é capaz de carregar duas Formilitares e quatro Granovos, protegidos por sua própria carapaça durante o avanço.
E esse número pode ser ainda maior.
As Formilitares também podem se agarrar e permanecer de pé sobre o corpo da Formitanque enquanto ela avança, transformando-a em uma verdadeira plataforma móvel de combate.
Uma Formitanque não é apenas um tanque.
É um tanque, um transporte de tropas, um centro de comando e uma fortaleza móvel — tudo em uma única criatura.`;
const descricaoFormicoptero = `Formicópteros são raros, e uma colônia comum de Formilitares geralmente possui apenas um ou dois deles. Um Formicóptero surge quando um Formiloto extraordinariamente forte e habilidoso alcança sua última forma, tornando-se uma das unidades mais valiosas de todo o exército.

No campo de batalha, são capazes de causar um verdadeiro estrago. Formicópteros sobrevoam as tropas inimigas derrubando Granovos, transportam até seis Formilitares de uma só vez e realizam rasantes usando seus braços cortantes contra tudo que estiver pelo caminho. Também são fortes o suficiente para agarrar adversários e carregá-los para o céu, enquanto o barulho e a força produzidos pelo bater de suas enormes asas podem dispersar pequenas tropas antes mesmo de um confronto direto.

Fora das batalhas, porém, os Formicópteros possuem uma função ainda mais importante. Assim como os Formitanques, são indivíduos reprodutores da colônia. São eles que conseguem gerar novos Granovos e abastecer continuamente os túneis subterrâneos, permitindo que a população cresça e que novas gerações de Formilitares surjam.

Formicópteros estão entre os Formilitares de vida mais longa, e perder um deles representa muito mais do que perder uma poderosa unidade de combate. Cada Formicóptero é responsável tanto por proteger a geração atual quanto por produzir a próxima, sendo tratado como um verdadeiro tesouro de seu exército.`;

const descricaoBaratito = `Assim que a ooteca se abre, o Baratito já está pronto para cometer seus primeiros crimes. Sua coloração branca o torna facilmente visível durante a noite e, como seu exoesqueleto ainda é frágil, ele permanece dentro da própria ooteca, arrastando-a consigo e usando-a como esconderijo sempre que necessário.
Apesar da pouca experiência, Baratitos fazem questão de parecer durões. Cobrem a boca com um pedaço de tecido para parecerem mais intimidadores, tentando esconder qualquer sinal de medo ou insegurança.
O Baratito leva sua ooteca até a toca de outros insetos e permanece escondido dentro dela, esperando o momento certo para sair e roubar. Sua primeira grande habilidade a ser aperfeiçoada é a velocidade: entrar, pegar o que puder e desaparecer rapidamente é essencial para um criminoso tão pequeno.
Se algum problema surgir, o Baratito se protege dentro da casca resistente da ooteca. Lá de dentro, ele expele uma fumaça irritante que rapidamente nubla o ambiente, confundindo quem estiver por perto e lhe dando tempo para fugir.
Dentro do esconderijo de sua facção, os Baratitos ainda não são muito valorizados. Pequenos e inexperientes, ficam encarregados dos serviços menores enquanto observam os criminosos mais experientes, aprendendo com eles os truques necessários para sobreviver — e crescer — no mundo do crime.`;
const descricaoBaratuno = `Especialistas em assaltos, os Baratunos saem à noite para cometer crimes. Roubam tudo o que conseguem carregar e desaparecem antes que alguém tenha tempo de reagir. Experientes em furtividade e fuga, raramente permanecem no mesmo lugar por tempo suficiente para serem capturados.
Os Baratunos desenvolvem naturalmente uma camada de exoesqueleto que cobre grande parte do rosto, formando uma espécie de máscara natural. Além de protegê-los, essa característica dificulta sua identificação e reforça sua aparência intimidadora. Para suas vítimas, um Baratuno é apenas mais um criminoso anônimo entre tantos outros.
Seu exoesqueleto possui uma proteção reforçada no peito, onde fica o coração. Essa característica é essencial para sua sobrevivência: mesmo depois de decapitados ou gravemente esmagados, enquanto o coração continuar batendo, seus corpos são capazes de se regenerar.
Quando ficam gravemente feridos, os Baratunos retornam ao esconderijo da facção e passam dias se recuperando. Para eles, ferimentos fazem parte do ofício. Assim que estão novamente em condições de agir, deixam o esconderijo e voltam ao crime.
Os Baratunos também possuem uma arma natural. Seu corpo produz uma substância química altamente irritante, que pode ser expelida de forma concentrada através de um canal existente em seu braço direito. Para dispará-la, o Baratuno remove a própria mão, expondo a abertura do canal e permitindo que a substância seja lançada diretamente contra o alvo. Mesmo que a mão seja perdida durante a ação, ela pode ser regenerada com o tempo.
A vida de um Baratuno consiste em acumular reputação dentro da própria facção e aperfeiçoar suas habilidades de sobrevivência no mundo do crime. O importante não é apenas conseguir roubar, mas não ser capturado e sempre retornar ao esconderijo para aproveitar tudo aquilo que conseguiu levar.`;
const descricaoBaratrao = `Criminoso experiente, o Baratrão é reconhecido dentro da facção e tratado com grande respeito. Diferentemente dos outros membros, ele não esconde o rosto. Pelo contrário, faz questão de deixá-lo à mostra. Seu exoesqueleto forma sobre a cabeça uma cobertura semelhante a um chapéu, que simboliza sua posição na hierarquia e torna sua identidade imediatamente reconhecível.
Baratrões são odiados por praticamente todas as comunidades de insetos, e é comum existirem recompensas por sua captura ou morte. Suas facções também mantêm uma forte rivalidade com a Barakuza, embora possuam uma frágil aliança com os Cucarachas, principalmente para a troca de mercadorias e obtenção de néctar-kalmia.
Apesar de procurados, Baratrões são extremamente difíceis de capturar. Seu corpo é maior, mais forte e mais resistente que o de seus comparsas, e seu exoesqueleto predominantemente negro torna sua presença ainda mais intimidadora. Além disso, possuem quatro corações distribuídos por diferentes partes do corpo, fazendo com que ferimentos que seriam fatais para outros insetos dificilmente sejam suficientes para matá-los.
Seus quatro braços também tornam o Baratrão especialmente perigoso. Dois deles possuem mãos completamente funcionais, enquanto os outros são altamente especializados. Um termina em uma grande lâmina semelhante a um facão; o outro possui uma abertura capaz de disparar, em rápida sequência, a substância irritante produzida por seu corpo. Com dois braços livres para agarrar, carregar e se locomover enquanto os outros permanecem prontos para o combate, o Baratrão consegue lutar com uma ferocidade muito maior que a de um Baratuno. Sua força física, somada à extraordinária resistência de seu corpo, permite que um Baratrão continue lutando mesmo depois de sofrer ferimentos que obrigariam qualquer outro membro da facção a recuar.
Em último caso, o Baratrão revela sua característica mais inesperada: abre suas asas completamente desenvolvidas e voa diretamente contra o oponente.
Poucas coisas são mais assustadoras do que acreditar que um Baratrão está encurralado e, de repente, vê-lo levantar voo em sua direção.`;
const descricaoShinjinrata = `Shinjinratas são como são chamados os pequenos membros da Barakuza, uma organização com fins lucrativos dedicada a proteger a comunidade local — ou, pelo menos, é assim que ela própria descreve suas atividades.

Ao ingressar na organização, o jovem membro recebe no peito a tatuagem de um Escorpimônio, um símbolo que transmite um recado bastante simples: ninguém deveria se meter com aqueles que carregam sua marca. Shinjinratas ostentam a tatuagem com orgulho e crescem acreditando que, enquanto pertencerem à Barakuza, sempre terão alguém perigoso ao seu lado.

Desde cedo, recebem treinamento de luta e aprendem a utilizar seu pequeno braço afiado tanto como arma quanto como instrumento de intimidação. Apesar do tamanho e do exoesqueleto ainda pouco desenvolvido, Shinjinratas são extremamente rápidos e podem se tornar adversários perigosos quando necessário.

Dentro da Barakuza, porém, seu trabalho raramente envolve confrontos diretos. Eles atuam principalmente como vigias e informantes, observando viajantes, identificando oportunidades e levando informações aos membros mais importantes da organização.

Também é comum encontrá-los oferecendo jogos e desafios aos viajantes, normalmente propondo apostas envolvendo pequenas mercadorias. Aceitar dificilmente é uma boa ideia. Shinjinratas são especialistas tanto nos jogos quanto nos golpes que os acompanham. A vítima costuma acreditar que está ganhando no início, até perceber tarde demais que já apostou muito mais do que pretendia.

E mesmo quando alguém consegue vencer honestamente, isso não significa que receberá o prêmio. Uma Shinjinrata acuada pode simplesmente agarrar os pertences apostados e correr de volta para o esconderijo da Barakuza.

Segui-la até lá costuma ser um erro ainda maior.`;
const descricaoKoburata = `Os membros mais comuns da Barakuza, Koburatas são extremamente leais à organização e seguem à risca as ordens daqueles que ocupam posições superiores na hierarquia.

Koburatas circulam sem qualquer receio pelas comunidades locais, onde oferecem serviços de proteção em troca de alimento e mercadorias. A chegada de um deles, porém, já significa que o serviço foi contratado, independentemente de alguém ter solicitado sua presença. O pagamento é obrigatório: a Barakuza não aceita um não como resposta e é ainda menos tolerante com devedores.

Todos carregam no peito o símbolo do Escorpimônio e pintam o rosto de maneira característica, fazendo questão de serem imediatamente reconhecidos como membros da organização — ou, como preferem dizer, como protetores da comunidade. Seu antebraço afiado, aliado à velocidade característica das baratas, torna um Koburata extremamente perigoso em combate. Mesmo quando gravemente feridos, possuem uma impressionante capacidade de regeneração, tornando confrontos prolongados contra eles especialmente arriscados.

Apesar de toda a disciplina e lealdade à Barakuza, existe algo capaz de despertar facilmente a fúria de um Koburata: Baratunos.

Há uma antiga rivalidade entre a Barakuza e as facções formadas por esses malditos ladrões furtivos. Koburatas consideram os Baratunos criminosos desordeiros que roubam e assaltam dentro de territórios que julgam estar sob sua proteção. Os Baratunos, por sua vez, pouco se importam com quem a Barakuza diz proteger ou com quem acredita mandar no lugar.

Viver em uma comunidade onde Baratunos e membros da Barakuza disputam o mesmo território significa conviver com uma violência constante. De um lado, criminosos que roubam tudo que encontram pela frente; do outro, criminosos que cobram para impedir que isso aconteça.

E nenhum dos dois costuma pedir permissão.`;
const descricaoOyaburata = `Dentro da organização da Barakuza, os Oyaburatas são considerados os grandes protetores: membros mais velhos e experientes, responsáveis por garantir tanto a segurança física quanto as provisões daqueles que vivem sob sua influência. Geralmente são figuras conhecidas nas comunidades onde atuam e muitos são proprietários de estabelecimentos comerciais, mantendo uma presença muito mais estável e respeitável do que os demais membros da organização.

Oyaburatas são extremamente fortes, resistentes e quase impossíveis de matar. Durante sua transformação, abandonam o antebraço afiado que utilizavam quando Koburatas, arrancando-o deliberadamente. Para eles, depender de uma lâmina é admitir que o próprio corpo ainda não atingiu seu verdadeiro potencial. Força física e domínio absoluto do corpo representam o ápice que um inseto pode alcançar.

Para sustentar seu tamanho avantajado, um Oyaburata consome quantidades absurdas de alimento. Seus quatro braços enormes são utilizados para agarrar, imobilizar e dominar adversários diretamente. Parecem demonstrar pouca preocupação com ferimentos ou dor durante uma luta, chegando a despedaçar inimigos com as próprias mãos enquanto confiam em sua extraordinária capacidade de regeneração para reparar os danos sofridos depois.

Na comunidade, um Oyaburata dificilmente passa despercebido. Sua reputação costuma precedê-lo, e mesmo aqueles que não pertencem à Barakuza aprendem rapidamente a tratá-lo com respeito — ainda que esse respeito quase sempre venha acompanhado de medo. Para os membros mais jovens da organização, porém, ele representa segurança, provisão e a certeza de que alguém poderoso estará disposto a protegê-los.

Há, entretanto, rumores sobre a verdadeira origem da riqueza de muitos Oyaburatas. Dizem que seus estabelecimentos comerciais não passam de fachadas para uma atividade muito mais lucrativa: o comércio clandestino de néctar-kalmia, uma substância irresistível e destrutiva, extraída de flores tóxicas e responsável por arruinar incontáveis insetos, famílias e comunidades.

Naturalmente, a Barakuza nega qualquer envolvimento.`;
const descricaoNinoracha = `Nascidos nos territórios silvestres dominados pelos Formilitares, Ninorachas crescem em um ambiente marcado por guerra, ocupação e opressão. Limitados às periferias, costumam viver com suas mães e numerosos irmãos em condições miseráveis, principalmente nos aglomerados conhecidos como Los Troncos Podritos.

Grande parte das famílias é profundamente devota do Besouro da Luz, e os Ninorachas crescem cercados por essa crença desde muito pequenos. Para muitos, a fé é uma das poucas coisas que permaneceram intactas depois que suas comunidades perderam quase tudo.

Ninorachas são extremamente resilientes. Os mais desenvolvidos assumem cedo a responsabilidade de ajudar suas famílias e fazem o que estiver ao seu alcance para garantir a sobrevivência dos irmãos menores. Mendigam, procuram restos de alimento e, quando necessário, cometem pequenos furtos. São rápidos, conhecem cada passagem e esconderijo de Los Troncos Podritos e sabem desaparecer com facilidade quando perseguidos por insetos que não pertencem à comunidade.

Não existe uma única espécie da qual descendam todos os Ninorachas. Eles são resultado de gerações de cruzamentos entre diferentes populações de baratas que, expulsas de seus antigos territórios, acabaram obrigadas a conviver nos troncos amontoados das periferias. Por isso, indivíduos da mesma família podem desenvolver características bastante diferentes conforme amadurecem.

Desde pequenos, escutam dos mais velhos histórias sobre como a vida era melhor antes das invasões dos Formilitares. Crescem ouvindo sobre territórios perdidos, famílias deslocadas e tudo aquilo que teria sido tomado de seu povo. Como consequência, muitos desenvolvem um ódio profundo pelos Formilitares muito antes de sequer encontrarem um pessoalmente.

Dentro dessas comunidades, porém, existem figuras que os Ninorachas enxergam de maneira completamente diferente: as Cucarachas.

Onde conseguem estabelecer sua influência, as Cucarachas organizam Los Troncos Podritos, reprimem crimes cometidos dentro da própria comunidade e trazem recursos e alguma prosperidade para lugares que há muito haviam sido abandonados à própria sorte. Para quem observa de fora, seus métodos e negócios podem ser bastante questionáveis. Para muitos Ninorachas, isso pouco importa.

As Cucarachas são aqueles que apareceram quando ninguém mais apareceu.

Por isso, quando imaginam um futuro diferente da pobreza dos troncos, muitos Ninorachas compartilham o mesmo sonho: crescer o suficiente para, um dia, tornar-se uma delas.`;
const descricaoSicaracha = `Sicarachas são membros ativos do Cartel Cucaracha, envolvidos principalmente no controle da produção e da distribuição de néctar-kalmia. Eles recrutam insetos polinizadores para realizar a coleta e o processamento da substância, organizando depois sua distribuição para territórios muito além de Los Troncos Podritos. Doce e extremamente viciante, o néctar-kalmia provoca diferentes efeitos sobre os insetos que o consomem e seu uso prolongado pode trazer consequências devastadoras.

Apesar de suas atividades criminosas, Sicarachas possuem um forte espírito de união familiar e uma devoção profunda ao Besouro da Luz. A crença chegou a Los Troncos Podritos através de insetos vindos do deserto e encontrou terreno fértil entre uma população desesperada por esperança e consolo. Sicarachas e muitos outros habitantes da comunidade carregam o escaravelho dourado no peito, acreditando que sua luz seja capaz de ofuscar as más ações cometidas por um inseto durante sua vida.

Sicarachas também enxergam os Formilitares como ocupantes e não demonstram qualquer remorso em roubar deles ou utilizar contra eles os recursos que conseguem tomar. Ao mesmo tempo, precisam agir com cautela para evitar que suas operações com néctar-kalmia sejam descobertas. Ainda assim, confrontos entre Cucarachas e Formilitares são frequentes, provocados tanto pelas atividades criminosas do cartel quanto pela permanente rebeldia de seus membros contra a ocupação.

Nem sempre, porém, as Cucarachas foram aquilo que são hoje.

O grupo surgiu originalmente como um movimento de resistência, formado com o objetivo de expulsar os Formilitares e recuperar os antigos territórios de suas comunidades. O comércio de néctar-kalmia apareceu inicialmente como uma maneira de financiar essa luta, fornecendo recursos para sustentar seus membros e enfrentar um inimigo muito mais organizado.

Em algum momento, a finalidade e o meio começaram a trocar de lugar.

A resistência permaneceu como parte importante da identidade das Cucarachas, assim como o ódio aos Formilitares e os discursos sobre recuperar aquilo que lhes foi tomado. Na prática, porém, o controle do néctar-kalmia, a obtenção de recursos e a expansão do próprio poder passaram a ocupar uma parcela cada vez maior dos interesses do cartel.

Hoje, nem mesmo os Sicarachas parecem concordar sobre onde termina a resistência e começa o império que construíram para financiá-la.`;
const descricaoLucaracha = `Lucarachas são os membros noturnos do Cartel Cucaracha. Diferentemente de sicarachas, que são capazes de realizar voos curtos, suas asas são pouco desenvolvidas e incapazes de sustentá-los no ar, obrigando-os a permanecer no chão. Essa limitação, porém, é compensada por uma característica bastante peculiar: sua bioluminescência.

Lucarachas conseguem controlar a intensidade das estruturas luminosas espalhadas pelo corpo, permitindo que enxerguem e trabalhem em ambientes completamente escuros sem depender de qualquer fonte externa de luz. Essa capacidade os torna especialmente eficientes durante a noite e em atividades realizadas no subterrâneo.

Invasões e roubos noturnos estão entre suas especialidades, principalmente contra trincheiras, depósitos e túneis dos Formilitares. Lucarachas conseguem atravessar esses lugares no escuro, localizar recursos e desaparecer antes que sua presença seja percebida. Também são responsáveis por vigiar muitas das rotas utilizadas na coleta e produção de néctar-kalmia, permanecendo ativos enquanto grande parte dos outros insetos descansa.

Quando desejam ser vistos, entretanto, sua bioluminescência se torna uma ferramenta de intimidação. Pontos verdes surgindo repentinamente na escuridão dão aos Lucarachas uma aparência quase sobrenatural, efeito que eles exploram deliberadamente para assustar curiosos e parecer criaturas muito mais perigosas do que realmente são.

Lucarachas também controlam muitos dos pontos de comercialização de néctar-kalmia próximos a Los Troncos Podritos, onde as vendas só podem acontecer durante a noite. Sua própria luz funciona como um sistema de comunicação: quando um ponto está seguro e funcionando, um Lucaracha permanece nas proximidades e acende partes de seu corpo, sinalizando discretamente aos clientes que podem se aproximar. Ao menor sinal de perigo, as luzes desaparecem e o ponto deixa de existir na escuridão.

Entre invasões, vigilância, proteção das rotas e controle dos pontos de venda, Lucarachas são membros essenciais para o funcionamento cotidiano das Cucarachas — especialmente depois que o sol desaparece.`;
const descricaoCubaracha = `Cubarachas são conhecidos entre as Cucarachas por serem um pouco malucos. Especialistas em voo, possuem um controle extraordinário das próprias asas e são capazes de atravessar ambientes repletos de obstáculos em alta velocidade, realizando mudanças bruscas de direção que poucos insetos voadores conseguiriam acompanhar.

Menores que os demais membros das Cucarachas, possuem um corpo verde que facilita sua camuflagem entre a vegetação. A combinação entre tamanho reduzido, velocidade e habilidade de voo faz deles transportadores perfeitos para o néctar-kalmia. Cubarachas distribuem a substância para territórios distantes, evitando caminhos conhecidos e atravessando rotas alternativas que seriam impraticáveis para outros membros do cartel.

Seus olhos são especialmente adaptados ao voo, proporcionando excelente visão periférica e binocular durante manobras em alta velocidade. Suas antenas também possuem uma adaptação incomum: são capazes de captar sinais utilizados na comunicação dos Formilitares. Escutar essas transmissões permite que antecipem movimentações, percebam ataques, preparem fugas e alterem suas rotas antes que uma patrulha consiga interceptá-los.

Fora das atividades criminosas, Cubarachas estão entre os membros mais sociáveis do cartel. Divertidos e fanfarrões, adoram a enorme diversidade encontrada em Los Troncos Podritos e confraternizam com praticamente todos os tipos de insetos que habitam aquela comunidade superpovoada. Também possuem uma conhecida dificuldade em recusar desafios, principalmente quando envolvem velocidade, perigo ou alguma ideia que qualquer inseto sensato consideraria absurda.

Há quem diga, entretanto, que a imprudência dos Cubarachas possui outra explicação. Por transportarem grandes quantidades de néctar-kalmia e terem acesso constante à substância, existem suspeitas de que alguns deles consumam parte da própria carga durante o trabalho.

Os Cubarachas negam.

O comportamento deles não ajuda muito a tornar essa negativa convincente.`;

const descricaoCelularva = `Nessa fase de desenvolvimento, cada Celularva vive em seu próprio favo, localizado nas regiões mais altas da grande colmeia. Ali, é cuidadosamente alimentada e protegida, crescendo sabendo que é uma parte importante da comunidade.

Enquanto se desenvolve, a Celularva aprende com as Abelárias que o trabalho é essencial para o funcionamento da grande colmeia. Cada indivíduo possui uma função e, um dia, ela também encontrará seu lugar entre aqueles que sustentam a comunidade.

Mas as Celularvas não são completamente indefesas.

Quando um ataque acontece dentro da colmeia, elas não simplesmente se escondem. Utilizando o favo móvel que as protege, podem se lançar sobre os invasores, fazendo-o despencar sobre os inimigos e esmagá-los com seu próprio peso.

O favo também serve como sua principal proteção. Abrigadas dentro de suas paredes endurecidas, as Celularvas resistem aos ataques enquanto tentam afastar qualquer ameaça que se aproxime.

Mesmo frágeis e ainda incapazes de desempenhar as funções das Abelárias ou dos Zanguardiões, algumas Celularvas chegam a abandonar voluntariamente seus favos para participar da defesa da colmeia.

Elas sabem que ainda têm muito a aprender.

Mas também sabem que a colmeia é parte delas — e elas são parte da colmeia.`;
const descricaoAbelaria = `O dia a dia das Abelárias é marcado pelo trabalho. Dentro e fora da grande colmeia, cada grupo possui funções específicas, e todas são essenciais para o funcionamento da comunidade.
As Abelárias são especialistas em produzir e manter tudo aquilo de que a colmeia precisa. Algumas cuidam e alimentam as Celularvas, outras constroem e reparam suas estruturas, enquanto outras trabalham no transporte de recursos, na produção de alimento e no planejamento das atividades da comunidade.
Durante o crescimento, suas mãos podem assumir diferentes formas de acordo com o trabalho que realizam. Algumas desenvolvem estruturas especializadas para cortar, perfurar, serrar, golpear ou executar outras tarefas, enquanto outras mantêm mãos comuns. A cada troca de exoesqueleto, uma Abelária pode conservar a especialização que já possui ou desenvolver uma diferente, adaptando-se às funções que passa a exercer. Esse processo continua até sua última muda, quando assume definitivamente as mãos de sua forma adulta.
Para elas, nenhum trabalho é pequeno quando contribui para o bem de todas.
Mas a natureza das Abelárias muda completamente quando a colmeia é ameaçada.
Ao primeiro sinal de perigo, grupos inteiros abandonam suas funções e se unem em um enorme enxame defensivo. Centenas ou milhares podem avançar juntas contra o invasor, utilizando suas ferramentas de trabalho como armas e lutando com uma determinação que poucos inimigos esperariam de criaturas tão pequenas.
Cada Abelária está disposta a dar a própria vida por suas companheiras.
E existe algo ainda mais assustador no modo como defendem sua colmeia.
Quando uma Abelária morre, seu corpo libera um odor que funciona como um sinal de alarme. O cheiro se espalha rapidamente e pode atrair e enfurecer as outras Abelárias próximas, fazendo com que abandonem qualquer outra atividade e avancem imediatamente contra a ameaça.
Para uma Abelária, proteger a colmeia não é uma ordem.
É o trabalho mais importante de todos.`;
const descricaoZanguardiao = `Os Zanguardiões são a elite militar da grande colmeia. Diferentemente das Abelárias, que vivem principalmente dentro da colmeia e assumem a defesa quando ela é ameaçada, os Zanguardiões passam grande parte de suas vidas no exterior, patrulhando os arredores, vigiando as fronteiras e identificando qualquer ameaça que possa se aproximar.

Cada Zanguardião passa por um rígido treinamento antes de assumir seu posto. São preparados para combater, resistir e proteger a colmeia em qualquer situação. Quando encontram um intruso, não hesitam: avançam imediatamente, utilizando as armas naturais forjadas em seu próprio exoesqueleto.

Seus ataques são extremamente dolorosos e podem deixar um inimigo incapacitado mesmo após o Zanguardião ter sido abatido. O veneno presente em suas armas continua agindo no ferimento e, em alguns casos, é capaz de levar à morte um adversário que tenha sobrevivido ao confronto.

Por isso, derrotar um Zanguardião não significa necessariamente estar a salvo.

Mas existe uma regra simples entre os inimigos da grande colmeia:

um Zanguardião é uma ameaça; um enxame de Zanguardiões é uma guerra.

Quando dezenas deles avançam juntos, suas armas, disciplina e coordenação transformam uma simples patrulha em uma força de combate capaz de expulsar quase qualquer invasor de seu território.`;
const descricaoMaternelha = `Nem toda Abelária fêmea deseja passar pelo rigoroso treinamento necessário para se tornar uma Zanguardião. Embora nada as impeça de seguir esse caminho, poucas fazem essa escolha. A maioria permanece exercendo suas funções como Abelária ou opta por se tornar fértil, assumindo a importante tarefa de gerar novas Celularvas para a colmeia.

Para se tornar uma Maternelha, uma Abelária deve se alimentar continuamente de um mel especial, capaz de preparar seu organismo para a transformação. Após ser fecundada pela primeira vez, ela troca seu exoesqueleto e atravessa um período particularmente frágil enquanto seu corpo se desenvolve até assumir a forma de uma Maternelha. Uma vez concluída a transformação, futuras fecundações não exigem que ela passe novamente pelo mesmo processo.

Na colmeia, a maternidade é considerada uma função sagrada. Gerar novos indivíduos é visto não apenas como uma responsabilidade essencial para a sobrevivência da comunidade, mas também como um trabalho — e um dos mais difíceis que uma abelha pode exercer. Por isso, uma Maternelha nunca precisa cuidar sozinha de suas larvas. Abelárias atuam como assistentes durante praticamente todo o processo, cuidando das Celularvas e permitindo que a Maternelha concentre suas forças na geração de novos indivíduos.

Mesmo assim, muitas Maternelhas não abandonam completamente a vida que levavam antes da transformação. Quando não estão fecundadas, algumas retornam voluntariamente às suas antigas funções de Abelária. Para elas, permanecer ociosa quando há trabalho a ser feito é uma forma de desserviço à colmeia.`;
const descricaoSupremabelha = `Normalmente, colmeias de Abelárias não possuem uma Supremabelha simplesmente porque não necessitam de uma. A própria coletividade é capaz de organizar o trabalho e manter a colmeia funcionando como um único organismo. Entretanto, algumas colmeias atravessam períodos em que seus arredores se tornam particularmente hostis, seja pela ameaça de invasões, por ataques constantes ou até por conspirações de outras sociedades interessadas em interferir em seu funcionamento.

Nesses momentos, uma Abelária ou um Zanguardião com grande capacidade de liderança pode inflamar os ânimos da colônia e assumir a forma de uma Supremabelha. Tanto machos quanto fêmeas podem passar por essa transformação, durante a qual seu exoesqueleto se modifica e se torna especialmente preparado para comandar a colmeia e liderar seus enxames contra ameaças externas.

Uma vez estabelecida, porém, uma Supremabelha mantém sua posição até o fim de sua longa vida, mesmo que as ameaças que justificaram sua ascensão tenham desaparecido há muito tempo. Enquanto ela existir, não é necessário nenhum outra Abelária assumir a mesma função.

As ordens de uma Supremabelha estão acima de questionamentos e até mesmo dos interesses individuais daqueles que compõem a colmeia. Sua presença inevitavelmente transforma uma sociedade antes sustentada quase inteiramente pela cooperação espontânea. As Abelárias tornam-se mais desconfiadas e cautelosas umas com as outras, e a unidade coletiva passa a dividir espaço com a obediência à sua líder.

Ainda assim, revoltas contra uma Supremabelha são extremamente raras. Para muitas Abelárias, foi justamente sua liderança que permitiu à colmeia sobreviver ao período que levou à sua ascensão.`;
const descricaoMinarva = `Nascidas nos túneis que se estendem pelos arredores das colmeias de Abelárias, as Minarvas despertam protegidas dentro de suas células ambulantes. Conforme se desenvolvem, aprendem aos poucos a controlar as pequenas pernas da estrutura que as abriga. Para uma Minarva, sua célula é proteção, meio de locomoção e, principalmente, instrumento de trabalho.

Quando já estão mais desenvolvidas e compreendem sua função, as Minarvas passam a encher suas células com areia ou recursos encontrados durante as escavações e transportá-los para fora dos túneis. A areia precisa ser removida para que as galerias continuem avançando, enquanto tudo que possa ter alguma utilidade é separado e destinado à colmeia.

Na testa de cada Minarva existe uma pequena estrutura bioluminescente, capaz de iluminar os túneis completamente escuros onde passam praticamente toda essa fase de suas vidas. As pernas de suas células são relativamente grandes e, quando bem controladas, permitem que se locomovam com uma velocidade surpreendente. Minarvas inexperientes, porém, podem perder o controle de suas células e causar pequenos acidentes nos túneis.

Durante toda essa fase, uma Minarva jamais entra na colmeia. Ela apenas a observa à distância nas raras ocasiões em que deixa os túneis para descarregar o que coletou. De lá, vê Abelárias trazendo seu alimento e recolhendo os recursos extraídos da terra.

Mesmo sem conhecer a colmeia por dentro, a Minarva cresce com a certeza de que seu pequeno trabalho sob a terra faz parte de algo muito maior — e que, de alguma forma, tudo aquilo funciona em conjunto.`;
const descricaoMinerabelha = `Minerabelhas passam a maior parte de suas vidas fora da colmeia. Embora a visitem ocasionalmente, sua função está nos túneis que se espalham pelos arredores, onde trabalham continuamente na expansão das galerias e na extração de materiais necessários para a colônia.

Seu corpo é resultado de uma especialização das Abelárias para a vida subterrânea, o que gerou essa nova casta. Um de seus antebraços possui o formato de uma picareta natural, formada pelo próprio exoesqueleto e perfeitamente adaptada para escavar terrenos resistentes. A estrutura bioluminescente que já possuíam quando Minarvas permanece após seu desenvolvimento e ilumina os túneis durante o trabalho. Sua cabeça, por sua vez, possui um exoesqueleto extremamente resistente, capaz de protegê-las contra impactos e aumentar suas chances de sobrevivência em pequenos desabamentos.

Minerabelhas são escavadoras excepcionais, mas pouco preparadas para o combate. Não possuem ferrão e sua única arma é justamente o antebraço utilizado para trabalhar. Embora possa ser perigoso quando necessário, está longe de torná-las combatentes eficientes. Por isso, dependem quase completamente da proteção dos Zanguardiões para manter os arredores seguros e permitir que continuem trabalhando sem ameaças ou interrupções.

A reprodução das Minerabelhas também funciona de maneira diferente daquela das Abelárias. Sua casta não possui Maternelhas e não depende das Abelárias para cuidar de suas larvas. Todas as Minerabelhas fêmeas são férteis e, quando geram uma Minarva, recebem das Abelárias uma célula ambulante onde a larva poderá crescer protegida.

A mesma célula que serve como abrigo logo se torna seu primeiro meio de locomoção e, pouco depois, sua primeira ferramenta de trabalho. Assim, uma nova geração de Minerabelhas começa a contribuir com a colmeia muito antes de sequer conhecê-la por dentro.`;
const descricaoMarcenelha = `Algumas Minerabelhas podem se desenvolver e se transformar em Marcenelhas. Essa mudança, porém, ocorre muito mais pela necessidade da colmeia do que pelo desejo individual. Sua força física aumenta consideravelmente e um de seus antebraços se desenvolve em uma estrutura serrilhada, formada pelo próprio exoesqueleto, tornando-se uma ferramenta extremamente eficiente para cortar e trabalhar a madeira necessária à colônia.

Após a transformação, os túneis deixam de ser seu lar. Marcenelhas passam a viver em abrigos individuais construídos dentro de estruturas de madeira espalhadas pelo território da colmeia, onde encontram muito mais espaço e conforto do que possuíam durante a vida subterrânea.

Seu tamanho avantajado, sua força e a resistência de seu exoesqueleto tornam uma Marcenelha perfeitamente capaz de se defender sozinha contra ameaças menores, mesmo sem possuir ferrão. Ainda assim, elas não são combatentes e continuam dependendo da vigilância constante e, diante de perigos maiores, dos enxames de Zanguardiões responsáveis pela proteção dos arredores.

Marcenelhas são férteis, mas suas fêmeas raramente aceitam ser fecundadas. Durante esse período, precisariam retornar aos túneis para gerar e acompanhar suas Minarvas, abandonando temporariamente o conforto e a função que conquistaram na superfície. Depois da transformação, também é comum que Marcenelhas evitem se misturar com Minerabelhas, passando a enxergá-las cada vez mais como uma casta diferente da sua.

Por viverem ainda mais próximas das fronteiras do território da colmeia, Marcenelhas também estão entre as abelhas mais expostas à influência de outras sociedades. O contato frequente com indivíduos estrangeiros faz com que escutem ideias pouco comuns dentro da colmeia, principalmente aquelas relacionadas à liberdade individual e à possibilidade de uma vida desvinculada das necessidades da coletividade.

A maioria permanece fiel à colmeia. Algumas, entretanto, começam a questionar por que suas habilidades, seu trabalho e até mesmo sua transformação deveriam ser determinados pelas necessidades de uma sociedade da qual agora vivem tão distantes. Em casos extremos, esse afastamento pode transformá-las em informantes ou mesmo traidoras, fornecendo a outras sociedades informações sobre aquela mesma colmeia que os Zanguardiões passam a vida tentando proteger.`;


const descricaoKurupim = `Os Kurupins são os jovens da tribo. Vivem e servem à grande árvore que é o lar de todos, realizando diversas funções essenciais para a comunidade, desde cuidar dos ovos até buscar alimentos para a tribo.

Kurupim não possui olhos, mas isso não significa que seja incapaz de perceber o mundo ao seu redor. Ele sente tudo através dos outros sentidos, captando cada vibração no chão, cada movimento no ar e cada cheiro presente na mata. Sua comunicação também acontece através dos odores, permitindo que transmitam informações uns aos outros sem precisar sequer se mover.

Avistar um Kurupim na mata pode ser um tanto perturbador. Não há como saber se ele está de frente ou de costas. Seu corpo é completamente simétrico, tornando sua orientação impossível de identificar à primeira vista.

E existe algo ainda mais estranho.

Um Kurupim realmente pode andar para frente ou para trás sem precisar girar o corpo. Para ele, não existe diferença entre uma direção e outra.

Talvez seja justamente por isso que, quando um Kurupim percebe que está sendo observado, seja impossível ter certeza de que ele está indo embora...

ou se aproximando.`;
const descricaoGuaripim = `Os Guaripins são os guerreiros da tribo. Assim como os Kurupins, não possuem olhos e aprenderam a utilizar seus outros sentidos para perceber tudo ao seu redor. Essa característica os transforma em caçadores eficientes e guerreiros imprevisíveis.

Um Guaripim pode perceber que está sendo seguido ou detectar a presença de alguém escondido sem demonstrar que descobriu a posição do inimigo. Ele pode permanecer imóvel, fingindo não ter percebido nada, até encontrar o momento certo para agir. Então, em um movimento rápido, arremessa sua lança com precisão quase perfeita e abate o adversário antes que ele tenha tempo de reagir.

Mas a madeira não serve apenas para construir os abrigos da grande árvore.

Os Guaripins utilizam sua habilidade de serrá-la e moldá-la para produzir armas de ataque e defesa, armadilhas e, principalmente, projéteis afiados de todos os tamanhos. Cada pedaço de madeira pode se transformar em uma nova ferramenta para proteger a tribo.

As pinturas que cobrem seus corpos também possuem diferentes significados. Algumas servem para camuflagem, outras são usadas durante a guerra e outras possuem funções ritualísticas, marcando momentos importantes da vida da tribo.

Enquanto os Kurupins cuidam da comunidade e aprendem seus costumes, os Guaripins permanecem atentos às ameaças.

Eles protegem a grande árvore.

Vigiam a colônia.

E estão sempre preparados para atacar aquilo que ousar se aproximar.`;
const descricaoTuipim = `Dentro de sua tribo, o Tu'ipim é considerado um ser sagrado. É ele quem possui o poder da reprodução e permanece protegido no interior da grande árvore, gerando continuamente os ovos que um dia darão origem aos Kurupins.

Um Tu'ipim raramente deixa seu abrigo. Sua presença fora da grande árvore é reservada para ocasiões excepcionais, como cerimônias ritualísticas, mudanças de território ou quando a própria árvore sofre um ataque grave.

Nesses momentos, o Tu'ipim revela sua verdadeira natureza.

Ele abre suas asas e sobrevoa os adversários com seu enorme corpo, parecendo uma criatura saída das antigas lendas da tribo. Suas grandes presas, semelhantes a bicos de papagaio, são capazes de esmagar até mesmo os exoesqueletos mais resistentes.

Durante uma batalha, alguns Guaripins podem subir em seu corpo para atravessar o campo de combate, utilizando a altura para arremessar suas lanças contra os inimigos.

Mas existe algo ainda mais misterioso sobre os Tu'ipins.

Reza a lenda que alguns deles têm sonhos capazes de revelar acontecimentos que ainda não ocorreram. Podem sonhar com perigos que se aproximam da tribo ou com lugares desconhecidos onde uma nova comunidade poderia prosperar.

Quando um desses sonhos é considerado um sinal, o Tu'ipim pode abandonar a grande árvore e partir em busca do lugar que viu durante o sono.

Se encontrar o local, uma nova tribo poderá nascer ali.

E, segundo os antigos, toda grande árvore começou assim:

com um Tu'ipim que sonhou com um lugar onde ninguém havia chegado antes.`;
const descricaoKuxapima = `Alguns poucos Kurupins ou Guaripins tornam-se tão conectados à natureza que acabam se transformando em Kuxapimãs. Eles continuam completamente cegos, mas desenvolvem numerosas antenas, capazes de perceber coisas que parecem estar além da compreensão dos demais insetos.

Um Kuxapimã consegue identificar doenças tanto em insetos quanto em plantas e elaborar tratamentos para ambos utilizando elementos encontrados na natureza. Dizem também que são capazes de "ver" o passado e o futuro através de suas antenas quando se alimentam de uma mistura especial preparada com folhas da Grande Árvore. Ninguém sabe ao certo o que realmente percebem durante essa experiência, mas suas visões são levadas muito a sério pelos Kurupins.

Os Kuxapimãs atuam como conselheiros e guias dos Kurupins mais jovens. São também responsáveis por transmitir as tradições da tribo, ensinar o significado e a elaboração de suas pinturas e organizar celebrações e rituais.

Eles passam grande parte da vida no interior da Grande Árvore e raramente participam de batalhas. Isso, porém, não significa que sejam incapazes de lutar. Cada Kuxapimã decide por conta própria se deve assumir o papel de guerreiro quando necessário. Em algumas tribos de Kurupins, um deles ocupa naturalmente a posição de liderança; em outras, vários Kuxapimãs formam uma espécie de conselho responsável pelas decisões mais importantes.

O destino dos Kuxapimãs também pode seguir caminhos diferentes. As fêmeas que desenvolvem a capacidade de sonhar acabam se transformando em Tu'ipins, incorporando ao próximo exoesqueleto a própria folha que carregavam nas costas durante sua vida como Kuxapimã.

Entre os machos, porém, existe uma transformação muito mais rara.

Alguns poucos podem se tornar Kupinguaris.`;
const descricaoMboitapim = `Alguns Guaripins se tornam guerreiros protetores tão eficientes que acabam se transformando em M'boitapins, uma forma ainda mais especializada na proteção da Grande Árvore. Diferente dos demais, porém, o M'boitapim não acompanha grupos de caça. Ele percorre sozinho as fronteiras do território, mantendo-se atento a qualquer presença que se aproxime.

Seu exoesqueleto desenvolveu numerosos espinhos, que funcionam tanto como defesa quanto como armas. Seu corpo também produz uma substância química capaz de causar intensa irritação e desorientação em outros insetos. O M'boitapim secreta essa substância através da mordida, das garras e dos próprios espinhos, além de espalhá-la deliberadamente sobre a ponta de sua lança.

O M'boitapim continua completamente cego, mas suas numerosas antenas lhe permitem perceber o ambiente com uma precisão que supera a visão de muitos outros insetos. Ele consegue identificar a presença e até a quantidade de criaturas se aproximando a grandes distâncias e, de alguma forma, parece compreender suas intenções. Sua percepção é tão apurada que ele não ataca insetos que entram por engano no território dos Kurupins ou que apenas precisam atravessá-lo.

Por isso, sua presença nas fronteiras da Grande Árvore é considerada um aviso. Entre outros insetos, diz-se que o protetor observa não apenas quem se aproxima, mas também suas intenções — e que somente aqueles que chegam sem malícia conseguem atravessar seu território em segurança.

Durante a noite, a substância que recobre seus espinhos e antenas emite um brilho que se assemelha ao fogo. À distância, outros insetos enxergam apenas uma silhueta flamejante se movendo pela escuridão, acompanhada pelos enormes olhos de predador pintados em sua cabeça. O M'boitapim faz questão de ser visto. Exibe seu brilho para anunciar sua presença e produz sons que dão a impressão de que está cada vez mais próximo.

Mas ninguém sabe ao certo de onde esses sons estão vindo.

O M'boitapim sabe onde você está.

Você só sabe onde ele está quando ele quer.`;
const descricaoKupinguari = `De tempos em tempos, um Kuxapimã macho, após uma de suas experiências de contemplação do futuro, anuncia à tribo que irá se tornar um Kupinguari. A revelação dá início ao seu último ritual. Ele entrega a folha que carregou consigo, despede-se dos demais e agradece à Grande Árvore antes de abandonar seu território para nunca mais retornar. Para a tribo, não é uma expulsão nem uma morte, mas um rito de despedida e aceitação de seu destino.

Longe da Grande Árvore, o Kuxapimã passa por uma transformação extrema. Seu corpo cresce até atingir mais de duas vezes o tamanho que possuía anteriormente, tornando-se o enorme Kupinguari. Antes de iniciar sua nova vida, ele próprio realiza suas últimas pinturas: um único e grande olho sobre a cabeça e uma enorme boca repleta de dentes sobre o abdômen.

O olho representa a visão que ele jamais terá.

A boca representa aquilo que ele passará a devorar.

Durante a transformação, o Kupinguari perde as numerosas antenas que antes lhe permitiam compreender o mundo com extraordinária precisão. Agora, orienta-se principalmente pelo cheiro e por seus instintos. Até mesmo sua alimentação muda radicalmente: o antigo conhecedor e protetor da natureza torna-se um predador de outros insetos.

O Kupinguari passa então a vagar pelas florestas, sempre distante da Grande Árvore onde nasceu. Caça qualquer criatura que encontre pelo caminho e, com o passar do tempo, parece esquecer pouco a pouco quem um dia foi.

Suas garras e sua mordida possuem substâncias capazes de paralisar suas vítimas. Seu enorme abdômen consegue se expandir para comportar quantidades absurdas de alimento, permitindo que devore presas que, juntas, ultrapassam seu próprio tamanho. Às vezes, alimenta-se tanto que se torna incapaz de se locomover, permanecendo imóvel até que parte da digestão esteja concluída. Suas duas pernas adicionais ajudam a sustentar o enorme peso de seu corpo e tornam possível sua lenta caminhada pela mata.

Entre os habitantes da floresta, o Kupinguari é conhecido como uma das criaturas mais assustadoras que podem ser encontradas longe das grandes sociedades. Sua agressividade é comparada — e muitas vezes considerada superior — à dos próprios Escorpimônios.

Existe, porém, uma única exceção.

Um Kupinguari jamais ataca outro cupim.

Mesmo depois de perder suas antigas percepções, abandonar sua tribo e aparentemente esquecer quase tudo sobre sua vida anterior, alguma coisa permanece dentro dele. Talvez não saiba mais quem foi, mas ainda parece reconhecer aquilo a que pertence.

E, apesar de sua existência monstruosa e solitária, a jornada do Kupinguari possui um propósito.

Em algum momento de sua longa peregrinação, ele acaba vagando pelas proximidades de uma Grande Árvore desabitada. É ali que uma Tu'ipim o encontra. Diante dela, pela primeira vez desde sua transformação, o Kupinguari abandona sua agressividade e se acalma.

Os dois permanecem juntos e dão origem a uma nova tribo.

O Kupinguari vive apenas o suficiente para ver os primeiros Kurupins se desenvolverem e a nova comunidade começar a ocupar sua Grande Árvore. Seu enorme corpo então finalmente enfraquece.

Depois de uma vida de despedida, fome, violência e esquecimento, o antigo Kuxapimã pode enfim descansar.

Seu destino foi cumprido.`;

const descricaoVespescudo = `Quando o ovo se abre, Vespescudo já está protegido dentro de sua estrutura de contenção. Há espaço apenas para observar o exterior, mover-se lentamente, receber alimento e continuar seu desenvolvimento.

Quando o primeiro ferrão é forjado, os Vespaleiros abrem uma nova passagem na estrutura e encaixam a arma, transformando Vespescudo em uma verdadeira unidade militar de proteção territorial.

O ferrão utilizado muitas vezes pertenceu a um Vespaleiro que morreu em combate. Ao ser incorporado à estrutura, ele deixa de ser apenas uma arma e passa a fazer parte do próprio Vespescudo, tornando-se um membro inseparável de seu corpo.

Como integrante da tropa de defesa do exército, Vespescudo participa de grandes formações militares. Dezenas deles avançam lentamente, lado a lado, fileira após fileira, em direção aos territórios inimigos, expandindo as fronteiras de seu domínio.

Quando não estão em combate, permanecem posicionados nas fronteiras, lado a lado, formando uma enorme muralha viva. Para qualquer invasor, atravessar uma fronteira protegida por Vespescudos é como tentar atravessar uma fortaleza que marcha lentamente em sua direção.`;
const descricaoVespaleiro = `
Vespaleiros são os soldados dos territórios da Realespa. Sua vida é dedicada à guerra, à honra e à competição, e poucos prazeres são maiores para eles do que participar de torneios ou receber uma nova missão.
O ferrão-lança desenvolvido em um de seus antebraços durante a fase de Vespescudo permanece após sua transformação, tornando-se parte definitiva de seu corpo. Junto ao ferrão do abdômen, forma um conjunto de armas naturais extremamente perigoso, capaz de causar ferimentos profundos e potencialmente fatais.
Seu exoesqueleto também se torna mais espesso e resistente, formando placas que lembram uma armadura medieval e permitem que suportem grandes quantidades de dano.
Vespaleiros são extremamente territoriais, orgulhosos e facilmente provocados. Diferentemente dos Vespescudos, que normalmente só atacam quando confrontados, eles podem interpretar até pequenos movimentos em suas proximidades como uma ameaça ou desafio à sua autoridade.
Durante uma guerra, avançam lentamente atrás das fileiras de Vespescudos, utilizando a formação defensiva como proteção enquanto se aproximam do inimigo. Quando alcançam a distância necessária, levantam voo em enxame sobre seus próprios companheiros e mergulham contra as forças adversárias, iniciando um ataque violento e sem trégua.
O avanço dos Vespescudos pode parecer lento e previsível.
O que vem depois, porém, é muito diferente.
Invadir um território protegido por Vespaleiros é, para a maioria dos inimigos, pouco mais que uma sentença de morte.`;
const descricaoNobrespa = `Durante o período em que permanece como Vespescudo, alguns indivíduos são escolhidos para seguir um caminho reservado a poucos. A partir desse momento, recebem tratamento especial: alimentação diferenciada, proteção constante e visitas frequentes de Vespreiros, responsáveis pelo refinamento de seu exoesqueleto e ferrão durante o desenvolvimento.

Quando finalmente deixa sua contenção, o resultado é evidente. Seu exoesqueleto é mais resistente, brilhante e naturalmente ornamentado; seu corpo costuma ser um pouco maior e mais forte que o de um Vespaleiro comum. Um indivíduo que emerge nessas condições já não é chamado de Vespaleiro, mas de Nobrespa.

Espera-se que uma Nobrespa esteja destinada a tornar-se a próxima Realespa. Esse é seu caminho mais comum e aquele que os Vespaleiros esperam que cumpra. Nem sempre, porém, isso acontece: algumas Nobrespas acabam seguindo outro destino e tornam-se Vesplordes.

O que leva um Vespescudo a ser escolhido permanece incerto. Talvez alguns já nasçam marcados para a nobreza; talvez os Vespaleiros reconheçam precocemente aqueles com maior capacidade de liderança; a escolha pode ocorrer após uma demonstração excepcional durante suas primeiras defesas ou até resultar de interesses políticos dentro do território.

Provavelmente não existe uma única resposta. Cada colônia parece possuir seus próprios critérios para decidir quem merece receber os privilégios — e carregar as expectativas — da nobreza.`;
const descricaoVesplebeu = `Nem todo Vespescudo consegue completar seu desenvolvimento como Vespaleiro. Durante as primeiras defesas do território, sua estrutura protetora pode sofrer danos severos, ou o ferrão que daria origem à sua principal estrutura de combate pode ser permanentemente comprometido. Quando isso acontece, seu desenvolvimento segue outro caminho, dando origem ao Vesplebeu.

Embora seu exoesqueleto continue forte, ele é muito menos protegido que o de um Vespaleiro, condição suficiente para que seja considerado indigno de integrar o exército. Isso, porém, está longe de torná-lo indefeso. A estrutura danificada de seu braço se desenvolve como uma espécie de forcado natural de duas pontas, ainda afiado e perigoso, enquanto o ferrão na extremidade do abdômen permanece perfeitamente funcional. E, como qualquer vespa, sua natureza continua agressiva.

Impedidos de seguir a vida militar, os Vesplebeus formam grande parte da força de trabalho dos territórios. Coletam madeira, barro e outros materiais, cultivam recursos e trabalham na construção e manutenção dos enormes abrigos onde vivem as colônias.

Para os orgulhosos Vespaleiros, talvez sejam aqueles que não conseguiram se tornar guerreiros. Para o território, entretanto, são justamente aqueles que garantem que exista algo para os guerreiros protegerem.`;
const descricaoVesplorde = `Vesplordes vivem na região central dos territórios que controlam, próximos aos abrigos onde os Vespaleiros descansam e os Vespescudos mais jovens se desenvolvem. É fácil descobrir onde um deles repousa: seu abrigo costuma ser o maior e ocupa sempre uma das posições mais centrais e protegidas de seus domínios.
Sua principal função é supervisionar o exército e garantir que tudo esteja funcionando como deveria. Acompanham o desenvolvimento dos Vespescudos, inspecionam as tropas de Vespaleiros e mantêm constante atenção sobre as fronteiras.
Apesar de passarem a maior parte da vida dentro de seus próprios domínios, que defendem como se fossem uma extensão de seus corpos, ocasionalmente partem para sobrevoar regiões vizinhas em busca de novos lugares para expansão.
Quando encontram uma região desocupada e adequada, planejam sua ocupação.
Quando ela já possui habitantes, planejam sua invasão.
Vesplordes também participam ativamente das guerras. Habilidosos tanto em terra quanto no ar, combinam sua velocidade com um enorme ferrão para intimidar e subjugar até mesmo adversários formidáveis.
Sozinho, um Vesplorde pode ser considerado um exército de uma vespa só.
Mas dificilmente você encontrará um Vesplorde sozinho no meio de uma guerra.`;
const descricaoRealespa = `Nos territórios dos Vespaleiros erguem-se enormes abrigos, construídos de barro, madeira e outros materiais naturais conforme os costumes de cada colônia. O reino é dividido entre os Vesplordes, cada qual exercendo autoridade sobre seus próprios domínios. Entretanto, o maior, mais protegido e sofisticado dos abrigos pertence sempre à Realespa.
Uma Realespa não é necessariamente maior ou mais forte que um Vesplorde. Seu verdadeiro poder está em outro lugar: influência e autoridade. Sua palavra representa a decisão final nos assuntos do reino, e Realespas são conhecidas pelo temperamento furioso, pelo egoísmo e pela facilidade com que usam sua posição para fazer prevalecer os próprios interesses.
Seu exoesqueleto revela imediatamente sua condição. Extremamente protegido e naturalmente ornamentado, apresenta formas muito mais elaboradas que as encontradas nas demais vespas. A estrutura de sua cabeça é a característica mais evidente, desenvolvendo-se de maneira semelhante a uma grande coroa integrada à própria carapaça.
Tamanho poder inevitavelmente produz inimigos. Não é incomum que Vesplordes desprezem sua Realespa ou conspirem para substituí-la. Uma das estratégias mais discretas é criar secretamente, dentro de seus próprios domínios, um Vespescudo destinado a tornar-se Nobrespa, preparando assim um possível pretendente ao trono.
Quando uma Realespa morre, normalmente uma Nobrespa assume seu lugar e completa sua evolução. A sucessão, porém, não é uma regra inviolável. Um Vespaleiro excepcionalmente poderoso pode tomar o trono pela força, derrotando as Nobrespas que reivindicam a posição e tornando-se ele próprio uma Realespa.
Esses casos são raros, mas possuem um significado especial para os Vespaleiros: uma Realespa que conquistou o trono em combate não foi escolhida, preparada ou favorecida — provou diante de todos que era digna dele. Por isso, costuma ser especialmente respeitada e amada pelo território.`
const descricaoVespreiro = `Um Vesplebeu que demonstra habilidade excepcional em seu ofício pode, com o tempo, tornar-se um Vespreiro. Especialistas em moldar ferrões e trabalhar exoesqueletos, eles são responsáveis pela manutenção do exército e participam da construção e do reparo dos principais abrigos do território.

Diferentemente dos Vesplebeus comuns, Vespreiros são bastante respeitados pelos Vespaleiros. Alguns chegam a se tornar o braço direito de um Vesplorde, que depende constantemente de seus conhecimentos para manter seus guerreiros preparados e seus domínios protegidos.

Quando um Vespaleiro morre, seu corpo é levado a um Vespreiro. Nada é desperdiçado: o ferrão é removido, trabalhado e moldado para servir aos Vespescudos, enquanto as partes aproveitáveis do exoesqueleto são cuidadosamente reaproveitadas. Assim, mesmo depois da morte, a carapaça de um guerreiro continua servindo ao território.

Vespreiros raramente participam de combates. Isso não significa, porém, que sejam adversários fáceis. São maiores e muito mais fortes que Vesplebeus comuns, e seu poderoso antebraço em forma de martelo, desenvolvido para trabalhar os exoesqueletos mais resistentes, também é perfeitamente capaz de quebrá-los com um único golpe.

Por isso, existe entre os Vespaleiros um conselho simples: não irrite um Vespreiro.

Diz a lenda que o misterioso Vespaleiro sem cabeça aprendeu o motivo da pior maneira possível — sua cabeça teria sido esmagada depois que ele cometeu o erro de irritar um deles.`
const descricaoVespalgoz = `O raro Vespalgoz vive solitário, além das fronteiras dos territórios da Realespa. Guerreiros excepcionais, passam a vida caçando algumas das criaturas mais temidas do reino, entre elas os Escormônios e, principalmente, os Aracromantes, inimigos seculares dos Vespaleiros. Como não possuem grande habilidade para construção, costumam ocupar abrigos subterrâneos improvisados. São também conhecidos por possuir a ferroada mais dolorosa de que se tem conhecimento, capaz de imobilizar pela dor até criaturas extraordinariamente resistentes.

Tornar-se um Vespalgoz exige circunstâncias incomuns. Alguns são caçadores de Aracromantes de talento excepcional, cuja habilidade e fama os distinguem antes mesmo da última troca de exoesqueleto, quando assumem uma aparência semelhante à de um Vesplorde negro. Outros surgem como únicos sobreviventes de exércitos destruídos, obrigados a sobreviver sozinhos até completar sua transformação. Mais raramente, sua origem é política: um Vespaleiro destinado a tornar-se Vesplorde pode ser expulso para impedir que reivindique um território, sendo condenado a deixar o reino. Independentemente da origem, todos compartilham o mesmo destino: vagar sozinhos.

Embora não sejam propriamente malvistos, Vespalgozes jamais voltam a pertencer verdadeiramente ao reino. Podem atravessar seus territórios, são recebidos com respeito e até admiração, mas sempre como visitantes. Para um Vespalgoz, ser bem-vindo nunca significa poder ficar.`;

const descricaoCarribal = `Um predador pode acreditar que encontrou uma refeição fácil ao avistar um monte de ovos expostos e amontoados. Mas basta se aproximar o suficiente.

Os ovos se rompem.

De dentro deles, dezenas de Carribais se lançam sobre o invasor. O grupo inteiro sobe sobre a vítima e a devora até que não reste nada.

Assim começa a vida de um Carribal.

Desde cedo, eles aprendem as pinturas tradicionais de sua tribo e desenvolvem novas maneiras de surpreender suas presas. Às vezes permanecem enterrados no solo, esperando que uma vítima passe por cima deles. Outras vezes saltam de lugares altos para cair sobre um alvo desprevenido.

Um Carribal raramente caça sozinho.

Eles permanecem sempre juntos, agindo como uma única equipe de caça e utilizando o número de indivíduos a seu favor.

Muitos insetos acreditam que os Carribais são completamente selvagens e que chegam até mesmo a devorar uns aos outros.

Mas existe uma razão para isso.

Quando um Carribal morre, seu corpo é consumido pelos outros membros da tribo. Eles acreditam que, ao devorar seus mortos, absorvem sua força e seu espírito, mantendo aquela parte do Carribal dentro deles para que ele continue sendo parte do grupo.

Para os Carribais, a morte de um indivíduo não significa que ele deixou de pertencer à tribo.

Ele apenas deixou de existir sozinho.

A tribo possui diversos rituais e danças, além de práticas que outros insetos consideram profanas.

Um dos rituais mais perturbadores consiste em invadir o ninho de outra espécie, entrar em um de seus ovos e devorar a larva que existe dentro dele. Depois disso, o Carribal permanece escondido no interior do ninho, esperando.

Quando seus irmãos chegam, o cerco começa.

Para os outros insetos, os Carribais parecem uma ameaça sem regras.

Para eles, porém, existe uma única coisa verdadeiramente sagrada:

a própria tribo.`;
const descricaoMascapato = `À distância, um grupo de Mascapatos pode parecer uma fileira de rostos assustadores observando o horizonte.

Isso acontece porque eles mantêm as costas erguidas, apoiando-se apenas nas pernas dianteiras enquanto caminham. As outras pernas permanecem suspensas e só tocam o chão quando precisam correr ou atacar.

Mascapatos são especialistas em emboscadas.

Uma de suas estratégias mais comuns consiste em permanecerem enterrados no solo. Quando uma vítima entra no círculo formado pelo grupo, todos se levantam ao mesmo tempo, revelando suas assustadoras carapaças e deixando claro que ela está cercada.

Dizem que Mascapatos nunca dormem.

Na verdade, eles enterram a cabeça na areia enquanto descansam, permanecendo aparentemente imóveis e ainda observando o ambiente. Isso seria suficiente para enganar qualquer observador, não fosse por uma regra simples: enquanto alguns dormem, outro permanece de sentinela.

Quando chega sua vez, ele é substituído.

Por isso, pegar um grupo de Mascapatos desprevenido é praticamente impossível.

Mas existe uma prática ainda mais cruel.

O cerco.

Quando uma tribo decide invadir uma colônia, um grande número de Mascapatos se posiciona ao redor dela, formando um círculo e deixando os habitantes sem saída.

Os defensores são então obrigados a avançar.

E é exatamente isso que os Mascapatos esperam.

Antes mesmo de alcançar aquilo que parecem ser as primeiras fileiras do inimigo, os defensores podem cair em sucessivas emboscadas. Cada grupo escondido no terreno revela-se apenas quando os adversários já estão próximos demais para recuar.

Para quem observa de longe, a visão é aterrorizante.

Centenas de rostos espalhados ao redor da colônia.

Imóveis.

Silenciosos.

Pacientes.

Nenhum deles precisa avançar.

Eles apenas esperam o primeiro movimento.

Quando as defesas finalmente cedem, o círculo se fecha.

E os Mascapatos entram.

Até não sobrar nada.`;
const descricaoCarrabrigo = `
Carrabrigo é o último estágio dessa espécie.

Depois que uma tribo prospera ao se alimentar de uma colônia, os indivíduos mais desenvolvidos acumulam uma carapaça cada vez mais espessa, até que ela se transforma em um verdadeiro abrigo. Sua armadura torna-se tão grossa que parece praticamente impenetrável.

Um Carrabrigo pode esconder completamente a cabeça e as pernas no interior da carapaça, protegendo-se de quase tudo que existe do lado de fora. Quando precisa descansar, enterra a entrada no solo e pode permanecer assim por longos períodos sem precisar se alimentar.

Sua enorme carapaça torna sua caminhada lenta e pesada, mas isso não significa que um Carrabrigo seja incapaz de se mover rapidamente.

Ele pode simplesmente rolar.

Assim, consegue atravessar grandes distâncias com velocidade, além de transformar seu próprio corpo em uma arma. Um Carrabrigo pode rolar contra um adversário, esmagá-lo com sua carapaça e, depois, retornar para devorar a criatura imóvel.

Mesmo quando seu corpo deixa de oferecer as mesmas vantagens para criar emboscadas, a criatividade dos Carrabrigos permanece.

Grupos inteiros podem rolar juntos de lugares altos, transformando uma encosta em uma avalanche de carapaças.

Em outras situações, um Carrabrigo pode parecer estar sozinho quando um grupo de inimigos o cerca. Então, de dentro de sua carapaça, surgem até oito Carribais escondidos.

O abrigo nunca esteve vazio.

O objetivo final de um Carrabrigo é encontrar uma parceira dentro de sua tribo e gerar três ninhadas.

Duas delas são abandonadas durante a jornada, dando origem a novas tribos.

A terceira permanece com os pais.

Assim, uma única tribo pode se dividir e se espalhar por grandes territórios sem jamais perder a sensação de que todos pertencem à mesma família.

Cada tribo conhece suas próprias raízes.

Mesmo separadas por grandes distâncias, as diferentes comunidades de Carribais, Mascapatos e Carrabrigos mantêm um forte senso de irmandade. Em algumas ocasiões, tribos distintas se reúnem temporariamente para realizar grandes cercos ou defender seus interesses.

E existe uma visão que nenhum inseto gostaria de encontrar.

Um Carrabrigo sozinho pode ser uma ameaça.

Um grupo de Mascapatos pode ser aterrorizante.

Uma horda de Carribais pode devorar uma criatura muito maior que eles.

Mas quando os três estão juntos...

Carrabrigos, Mascapatos e Carribais reunidos no mesmo lugar significam apenas uma coisa:

uma infestação.`;

const descricaoLarvobo = `Larvobos são figuras muito presentes nos circos dos Saltimbulgas. Possuem um jeito peculiar de se movimentar, alternando movimentos caricaturalmente lentos com gestos rápidos e surpreendentes. Parecem possuir uma energia que nunca acaba.

Larvobos costumam andar atrás de outros insetos, imitando exatamente seus movimentos. Seu corpo mole proporciona uma liberdade incomum e eles possuem um talento natural para copiar gestos, expressões e comportamentos, transformando qualquer movimento em uma apresentação.

Podem se enrolar sobre si mesmos e correr como uma roda, realizando peripécias surpreendentes. Também são capazes de fazer pequenos objetos desaparecerem de suas mãos e reaparecerem momentos depois.

As larvas menores adoram os Larvobos, e até mesmo os insetos mais carrancudos têm dificuldade para resistir às suas palhaçadas.

Mas existe algo estranho neles.

Por trás da pintura divertida no rosto existe sempre aquele sorriso exagerado. A boca grande revela longos dentes afiados, enquanto os olhos parecem observar cada movimento daqueles ao seu redor com atenção demais.

Ninguém sabe exatamente o que existe por trás daquela alegria.

Talvez seja por isso que, quando uma larva se encontra sozinha pelas ruas durante a temporada do circo e vê um Larvobo vindo em sua direção, sorrindo e repetindo seus movimentos como um espelho...

ela ainda pode achar engraçado.

Até perceber que o Larvobo está se aproximando.

E que ele não está mais imitando seus movimentos.

Está imitando suas expressões.

E, quando a vítima finalmente demonstra medo, o Larvobo sorri ainda mais.`;
const descricaoEscapulgo = `Escapulgos são usados nas apresentações do circo dos Saltimbulgas. É possível perceber que os Larvobos em desenvolvimento estão lá dentro pelos olhos visíveis na fenda principal e pelas pequenas fendas espalhadas ao redor do resistente casulo.
Os Saltimbulgas possuem diversos números envolvendo os Escapulgos. Eles pulam sobre eles, utilizam-nos como plataformas de elevação e até fazem suas vozes parecerem surgir de dentro das estruturas.
Mas os números mais impressionantes são aqueles em que vários objetos afiados são atravessados pelo Escapulgo, perfurando completamente sua estrutura. Parece impossível que a criatura lá dentro possa sobreviver, mas a larva permanece tranquila.
Em outros números, o Escapulgo é completamente fechado e submetido a diversas provas de que está vazio.
E, mesmo assim, a larva simplesmente desaparece.
O maior espetáculo, porém, é o nascimento de um Saltimbulga.
As fendas do Escapulgo são completamente vedadas e os outros Saltimbulgas enchem toda a estrutura com água. A larva fica aparentemente sem qualquer possibilidade de escapar.
Então as cortinas se fecham.
Pouco depois, um Saltimbulga surge saltando do outro lado do palco.
A plateia grita e aplaude.
O Escapulgo é aberto diante de todos.
Está completamente cheio de água.
Mas está vazio.
Ninguém sabe explicar como aquilo é possível.
Ou pelo menos é isso que todos acreditam.
Existe um rumor entre os insetos que conhecem os Saltimbulgas de perto: a larva dentro do Escapulgo não está realmente presa.
Ela sabe como entrar e sair.
Às vezes, um inseto chega ao seu abrigo e encontra um Escapulgo aparentemente abandonado. No dia seguinte, ninguém encontra mais o inseto.
Mais tarde, porém, dois Saltimbulgas podem ser vistos carregando o Escapulgo de volta para o circo.
E, dessa vez, a larva está novamente lá dentro.
Como se nunca tivesse saído.`;
const descricaoSaltimbulga = `Os Saltimbulgas são insetos itinerantes que levam seu circo de uma comunidade para outra. Em troca de hospitalidade, abrigo e alimento, oferecem entretenimento durante o período em que permanecem por lá.
Saltimbulgas são artistas desde cedo. Ainda jovens, desenvolvem habilidades de acrobacia, ilusionismo e espetáculo, aprendendo a transformar suas capacidades naturais em números cada vez mais impressionantes.
Seus saltos são extraordinários, sua escalada é rápida e precisa, e sua habilidade de escapar de situações aparentemente mortais faz com que muitos de seus espetáculos sejam verdadeiros desafios à própria morte.
Diante da plateia, eles atravessam obstáculos, desaparecem de lugares impossíveis, desafiam a gravidade e realizam apresentações que fariam qualquer outro inseto acreditar que está diante de magia.
Sua aparência, porém, pode causar uma impressão muito diferente.
O corpo arredondado, os longos dentes afiados e o olhar fixo dão aos Saltimbulgas uma aparência naturalmente inquietante. Mas as pinturas coloridas espalhadas pelo corpo, combinadas com seu talento para contar histórias e falar diante de grandes multidões, fazem deles criaturas estranhamente carismáticas.
Durante a temporada, o circo se torna parte da comunidade.
As tendas são montadas, os espetáculos começam e insetos de todas as idades se reúnem para assistir às apresentações. Crianças riem dos Larvobos, adultos se impressionam com os truques dos Escapulgos e todos aguardam ansiosamente pelo próximo espetáculo.
Mas existe um rumor que acompanha o circo por onde quer que passe.
Muitos insetos desaparecem durante a temporada.
Alguns simplesmente não retornam para casa. Outros são vistos pela última vez próximos às tendas. Nunca há provas suficientes para acusar os Saltimbulgas de qualquer coisa, e os artistas sempre partem antes que alguém consiga descobrir o que aconteceu.
Por isso, nem todas as comunidades recebem o circo com entusiasmo.
Alguns insetos adoram os Saltimbulgas.
Outros preferem manter distância.
E há aqueles que simplesmente têm medo deles.
Porque, por trás dos sorrisos, das pinturas coloridas e das tendas iluminadas, talvez exista algo acontecendo.
Algo que ninguém conseguiu provar.
Ainda.`;
const descricaoAbracabulga = `Durante o período em que um Larvobo permanece em sua fase de Escapulgo, alguns demonstram um talento extraordinário para o ilusionismo. Conseguem desaparecer misteriosamente de dentro do próprio casulo, projetar sua voz para lugares distantes e até fazê-lo parecer completamente oculto, mesmo quando está diante dos olhos de quem o procura. Quando finalmente realizam seu último número e deixam o Escapulgo, esses indivíduos surgem como Abracabulgas.
Abracabulgas não são maioria nos circos das Saltimbulgas. Normalmente há apenas uma ou duas em cada companhia, quando há alguma. Seu grande diferencial é o domínio do ilusionismo: seus números são tão impressionantes que conseguem deixar plateias inteiras fascinadas enquanto realizam desaparecimentos, aparições e truques aparentemente impossíveis.
A hipnose também é uma habilidade comum entre elas. Abracabulgas frequentemente convidam insetos da plateia e os hipnotizam para que realizem todo tipo de comportamento absurdo diante do público, criando alguns dos números mais engraçados de seus espetáculos.
Talvez a única coisa intrigante seja o fato de que, em certos números de desaparecimento, o inseto nem sempre reaparece. Isso costuma acontecer quando a plateia se diverte tanto que acaba esquecendo de exigir o retorno do voluntário. Existem também estranhos relatos de insetos que, depois de hipnotizados, decidem abandonar suas colônias e partir junto ao circo das Saltimbulgas.
Curiosamente, muitos deles não estão mais com o circo quando ele retorna na temporada seguinte.`;

const descricaoMorticula = `Aproximar-se de um lago durante a noite pode ser perigoso. Insetos relatam que, vindas da margem da água, Mortículas aparecem famintas para se alimentar dos desavisados. Elas se agarram ao corpo de suas vítimas e começam a consumi-las por dentro.

Mesmo nas proximidades dos lagos, é possível que uma Mortícula esteja escondida, esperando o momento certo para atacar. Se uma trilha viscosa for encontrada perto da água, é melhor manter distância: significa que uma Mortícula provavelmente já saiu do lago e está escondida em algum lugar, esperando pela próxima vítima.

As Mortículas dependem principalmente do fator surpresa. Um ataque certeiro pode ser suficiente para derrotar um adversário muito maior, mesmo com seu corpo frágil. Sua aparência rastejante, seus olhos vermelhos e a maneira como surgem repentinamente da escuridão também podem assustar e paralisar a vítima durante os segundos cruciais.

Durante o dia, Mortículas permanecem submersas na água, escondidas e imóveis, aguardando o anoitecer.

Quando a escuridão chega, elas voltam à margem.

E começam a procurar.`;
const descricaoCriptulo = `Quando uma Mortícula se alimenta o suficiente, ela retorna à água e submerge. Seu corpo começa então a se desenvolver, formando ao redor de si uma proteção rígida em forma de caixão enquanto sua transformação acontece em seu interior.

Durante a noite, o Criptulo emerge da água. Parte da larva que ainda permanece em seu interior surge por uma abertura na parte inferior, nada até a margem e rasteja até encontrar um lugar adequado para permanecer. Ali, enterra a parte larval no solo e fica imóvel, parecendo apenas um caixão abandonado no meio da noite.

Mas se um inseto se aproximar, a parte enterrada desperta.

Ela se ergue repentinamente do solo e crava suas duas presas no corpo da vítima, alimentando-se enquanto o futuro predador continua a se desenvolver.

Pode parecer que o Criptulo deixa a água durante a noite apenas para encontrar mais alimento, mas existe outro motivo para seus deslocamentos.

Enquanto permanece imóvel, seus grandes olhos vermelhos, posicionados nas laterais do corpo, observam tudo ao seu redor. O Criptulo aprende os padrões dos outros insetos: seus esconderijos, horários, caminhos e comportamentos. Cada noite é uma nova oportunidade para estudar o ambiente e se tornar um predador mais eficiente.

Perto do amanhecer, ele retorna à água, rasteja para dentro dela e submerge novamente.

Na noite seguinte, provavelmente estará em outro lugar.

Observando.

Aprendendo.

Esperando.`;
const descricaoMosferatu = `Após sair de seu Criptulo, o Mosferatu abre suas asas, despertando com a fome acumulada durante todos os dias em que permaneceu dentro de sua contenção.

Agora um predador completamente desenvolvido, ele voa pelos céus noturnos em busca de suas vítimas. Seu método é simples: encontrar um inseto sozinho e indefeso, esconder-se nas sombras e atacar de surpresa.

Rápido, eficiente e dotado de garras afiadas e um voo extremamente preciso, o Mosferatu é uma criatura assustadora para qualquer inseto que se encontre sozinho durante a noite.

Existe, porém, outra forma de ataque.

Alguns insetos relatam ter ouvido um zunido perturbador antes de desaparecerem. Dizem que ouvi-lo por tempo demais pode causar desorientação, fazendo com que a vítima se afaste de seu grupo sem perceber. É nesse momento que o Mosferatu aproveita a oportunidade para atacar.

Acredita-se que Mosferatus não podem sair durante o dia. Na verdade, eles apenas preferem permanecer escondidos até que a noite chegue, usando a escuridão como sua principal arma. Por isso, até mesmo um lugar escuro durante o dia pode ser perigoso se um Mosferatu estiver utilizando aquele abrigo temporariamente.

Mosferatus costumam caçar sozinhos, mas alguns lugares podem estar infestados deles. Não é incomum encontrar vários voando juntos durante a noite, cercando uma presa grande demais para um único indivíduo.

Existem ainda histórias sobre uma sociedade secreta formada por Mosferatus, escondida em algum lugar além dos territórios conhecidos.

Ninguém sabe se essas histórias são verdadeiras.

Talvez sejam apenas rumores.

Ou talvez os insetos simplesmente nunca tenham encontrado o lugar onde eles se escondem.`;

const descricaoGafamelo = `A dura casca do Gafamelo resiste às mais severas intempéries do deserto. Mesmo sendo arrastado pelas ventanias de areia, seu corpo protegido não se quebra. Mas, no interior, a larva continua a se desenvolver.

Quando suas longas e poderosas pernas traseiras finalmente estão fortes o suficiente, elas rompem a parte inferior da casca e alcançam o chão quente.

Assim nasce o Gafamelo.

Ainda preso ao próprio ovo, ele consegue saltar pelo deserto, sendo levado de um lugar para outro sem sequer saber para onde está indo. Até que um dia encontra um Beduinhoto — ou consegue quebrar sozinho a parte dianteira da casca com suas patas e colocar a cabeça para fora.

Se conseguir escapar por conta própria, o Gafamelo se tornará um animal selvagem, desafiando o deserto enquanto aprende sozinho a sobreviver.

Se for encontrado por um Beduinhoto, porém, poderá ser capturado e se tornar sua montaria durante anos. Nesse caso, receberá alimento, proteção e os ensinamentos de seu cuidador, aprendendo a sobreviver ao deserto ao lado de alguém de sua própria espécie.

Seja sozinho ou acompanhado, o Gafamelo fortalece seu corpo e seu espírito.

Até que, finalmente, reúne força suficiente para romper completamente a casca.

Nesse dia, deixa de ser uma montaria.

Levanta-se sobre as próprias pernas e parte para o deserto não mais como companheiro de alguém, mas como um igual.`;
const descricaoBeduinhoto = `Especialista em sobrevivência no deserto, o Beduinhoto é um nômade que percorre as areias em busca de água e alimento. Acostumado a viver em meio à escassez, às vezes encontra um lugar onde consegue permanecer por algum tempo, até que os recursos se esgotem e seja necessário seguir viagem.

Como suas asas não são funcionais, encontrar um Gafamelo é essencial para atravessar o deserto. Com seus longos saltos, a montaria consegue percorrer grandes distâncias sobre as areias. Além disso, o cheiro da casca do ovo atrai pequenos insetos que servem de alimento durante a jornada.

Um Beduinhoto de sorte pode ter vários Gafamelos.

Às vezes, dois Beduinhotos encontram o mesmo lugar rico em recursos. Nenhum deles pode realmente reivindicá-lo como propriedade, mas ambos sabem que podem permanecer ali por algum tempo. Entre eles, a hospitalidade é uma tradição: enquanto houver alimento e água suficientes, um Beduinhoto não costuma negar abrigo a outro de sua espécie.

E quando uma ameaça surge, estar acompanhado faz toda a diferença.

Seus braços em forma de cimitarra são armas formidáveis, capazes de afastar a maioria dos predadores que ousam se aproximar. Quanto mais Beduinhotos estiverem reunidos em um mesmo lugar, mais fácil se torna proteger uns aos outros.

No deserto, sobreviver sozinho é possível.

Mas sobreviver acompanhado é muito mais fácil.`;
const descricaoGafindin = `Quando as asas do Beduinhoto finalmente se desenvolvem e suas cimitarras estão afiadas o suficiente, um Gafindin nasce.

A rápida batida de suas asas levanta uma enorme ventania de areia, escondendo seu longo abdômen e criando ao seu redor uma espécie de névoa mística. Agora, o Gafindin pode voar para onde quiser e encontrar água, alimento e outros recursos com enorme facilidade.

Para ele, as grandes distâncias do deserto parecem finalmente ter desaparecido.

O terreno que antes precisava ser atravessado em longas jornadas agora pode ser percorrido pelos céus em pouco tempo. O Gafindin dominou completamente o ambiente onde passou toda a sua vida aprendendo a sobreviver.

Quando precisa enfrentar uma ameaça, pode girar sobre si mesmo como um tornado, transformando suas cimitarras em lâminas extremamente letais.

Mas ninguém sabe exatamente o que esperar de um Gafindin.

Seu comportamento pode fazê-lo agir de maneira amigável com os Beduinhotos, ajudando-os a encontrar lugares com mais recursos, localizar alimentos, encontrar novos Gafamelos ou até mesmo protegê-los contra ameaças.

Mas outro Gafindin pode simplesmente consumir os recursos de um lugar, eliminar seus próprios semelhantes e partir sem deixar nada para trás.

Para os Beduinhotos, Gafindins são criaturas ambíguas. Alguns são tratados com respeito, outros com medo, e outros são recebidos como verdadeiros aliados.

Existe, porém, uma história que faz até mesmo os Beduinhotos mais experientes temerem o céu.

Dizem que, quando muitos Gafindins se encontram, eles podem formar uma enorme revoada e seguir juntos até algum lugar distante.

Quando chegam, não há amizade, respeito ou território.

Há apenas fome.

Em pouco tempo, tudo o que existe naquele lugar pode ser devorado.

E então a revoada desaparece tão rapidamente quanto surgiu, deixando para trás apenas o deserto vazio.

Uma praga de gafanhotos.`;

const descricaoTapuli = `Assim que o ovo eclode, Tapu-Li se vê em um vasto campo fértil, repleto de alimentos. Centenas de outros Tapu-Lis foram deixados naquele mesmo lugar e passam seus dias cultivando e se alimentando ao seu redor.

Tapu-Li não possui garras nem qualquer meio eficiente de se proteger, tornando-se um alvo fácil para praticamente qualquer inseto predador. Seu clã nunca está por perto para protegê-lo. Todos foram deixados naquele campo com um único propósito: aprender a cultivar e comer o máximo possível.

E é isso que Tapu-Li e seus irmãos fazem todos os dias. Enquanto cultivam o alimento, também acumulam energia para as próximas fases de suas vidas. Não há guerreiros para defendê-los, nem adultos para ensiná-los a lutar. Eles simplesmente continuam comendo e cultivando, mesmo quando predadores atacam o enorme grupo.

Quando isso acontece, os Tapu-Lis não tentam se defender. Apenas continuam comendo e esperam sobreviver.

Para muitos, aquele campo será seu único lar. Para os poucos que conseguirem chegar à próxima fase, porém, existe um sonho: finalmente deixar o campo para trás, encontrar seu clã e descobrir o que existe além daquele lugar.`;
const descricaoShogulo = `Quando um ou mais Tapu-Lis conseguem sobreviver aos campos e acumular energia suficiente, seus corpos começam a endurecer, formando uma espécie de armadura ao seu redor. É assim que surge o Shogulo.

Preso dentro de sua própria carapaça, o Tapu-Li finalmente começa a compreender a crueldade à qual foi submetido. Anos de trabalho sem perspectiva, a fome constante e a perda de incontáveis irmãos que não pôde proteger deixam marcas profundas em sua mente.

Nesse momento, uma imagem assustadora começa a se formar na superfície do Shogulo. Até mesmo um odor peculiar se desenvolve ao seu redor, afastando aqueles que se aproximam e criando a sensação de que há algo perigoso escondido dentro daquela carapaça.

Apesar de parecer imóvel, o Shogulo consegue se mover lentamente utilizando pequenas pernas localizadas em sua parte inferior. Enquanto isso, em seu interior, a criatura continua seu desenvolvimento, moldada pelo ressentimento e por uma compreensão cada vez mais profunda de sua própria natureza.

Toda a energia acumulada durante sua vida como Tapu-Li é transformada em força. Somada ao rancor que carrega, ela faz do Shogulo um guerreiro formidável.

Mas essa transformação tem um preço: o Shogulo aprende a sobreviver sozinho. E, quando finalmente desperta, já não pensa como parte de um grupo. Ele pensa apenas em si mesmo.`;
const descricaoMoshinobi = `Ao despertar de seu Shogulo, Moshinobi recebe sua primeira missão: encontrar seu clã.

Voando em busca de suas origens, ele descobre suas novas habilidades. Seus quatro braços agora carregam armas letais, mas sua maior vantagem está nos olhos: Moshinobi é capaz de perceber tudo ao seu redor como se o mundo estivesse se movendo em câmera lenta. Para a maioria dos adversários, acertá-lo é praticamente impossível.

Sua fome de Tapu-Li também retorna. A diferença é que agora Moshinobi pode se alimentar onde quiser e desaparecer antes que qualquer predador consiga alcançá-lo. Pela primeira vez, ele pode comer sem medo.

Apesar de sua capacidade letal, Moshinobi não gosta de lutar. Ele despreza a velocidade de seus oponentes e prefere simplesmente desviar de seus ataques, esperando o momento certo para desaparecer. Para ele, não há necessidade de vencer uma luta que pode ser evitada.

Quando finalmente encontra seu clã, porém, Moshinobi se depara com algo inesperado: um enorme grupo formado por outros Moshinobis tão egoístas quanto ele. Depois de tudo o que viveu, esperava encontrar respostas ou algum propósito. Em vez disso, encontra apenas indivíduos que aprenderam a sobreviver sozinhos.

Moshinobi prefere permanecer em silêncio e observar.

As coisas só começam a mudar quando seu clã recebe uma missão maior. Dessa vez, não se trata apenas de sobreviver ou encontrar alimento. O grupo pretende partir para uma missão capaz de causar um grande caos em algum lugar.

Pela primeira vez, Moshinobi terá que decidir se continuará vivendo apenas para si mesmo ou se encontrará um propósito para tudo aquilo que se tornou.`;

const descricaoTotzen = `Um Totzen é colocado em algum altar dos templos dos Louvolins, onde permanece como um lembrete da importância da meditação constante. Seu exterior é duro como o tronco de uma árvore antiga, tornando-o facilmente confundível com uma estátua ou parte da própria estrutura do templo.

Quando o ser em seu interior se desenvolve o suficiente, suas garras começam a cortar as laterais do ovo, criando aberturas que permitem que ele medite de maneira mais consciente. A partir desse momento, Totzen permanece em estado de contemplação durante todo o período em que continua dentro da casca.

A menos que o templo seja invadido.

Quando um intruso ameaça o local sagrado, Totzen revela que não precisa de pernas nem de olhos para enfrentar seus inimigos. Ele utiliza uma das garras que se projetam para fora da casca como apoio, girando seu corpo sobre ela enquanto a outra garra funciona como uma lâmina serrilhada rotatória.

Nos locais mais sagrados dos templos, dezenas de Totzens podem permanecer imóveis, posicionados lado a lado ao longo das paredes e corredores. Para um invasor desatento, parecem apenas estátuas de meditação.

Até que uma delas começa a girar.

E então todas as outras fazem o mesmo.`;
const descricaoLouvolin = `A vida inicial de um Louvolin é dedicada à disciplina e à meditação. Os jovens cuidam do templo e praticam constantemente sua arte marcial.

Não existe uma função única dentro da ordem. Todos se revezam entre vigiar as entradas, limpar os templos, cuidar dos Totzens e realizar as diversas tarefas necessárias para manter o local funcionando. Para os Louvolins, nenhuma dessas atividades é considerada menor: cada ação deve ser executada com atenção, graça e propósito.

A arte dos Louvolins consiste justamente nisso: transformar cada movimento em algo preciso e consciente. O treinamento continua até que o praticante alcance o nível mais elevado de sua disciplina.

Quando esse momento chega, Louvolin precisa escolher seu próprio caminho.

Pode permanecer no templo como servidor e guardião, dedicando sua vida à preservação de seus ensinamentos. Pode transformar sua habilidade em uma arma e juntar-se à luta contra os Moshinobis. Ou pode abandonar o templo e seguir seu próprio caminho pelo mundo.

A maioria escolhe a última opção.

Para os Louvolins, alcançar a perfeição não significa permanecer preso a um único caminho. Significa ter disciplina suficiente para escolher o seu próprio.`;
const descricaoParazeus = `Durante sua jornada solitária, um Louvolin pode, sem saber, comer ou beber algo que contém os minúsculos ovos de um parasita. A criatura começa então a se desenvolver dentro de seu corpo, crescendo lentamente como uma doença que ele sequer percebe existir.

Com o passar do tempo, estranhos pensamentos começam a surgir na mente do Louvolin. Aos poucos, suas próprias vontades são substituídas pelas do parasita, até que ele finalmente assume o controle completo do corpo, da mente e das memórias de seu hospedeiro.

É nesse momento que Parazeus surge.

Não existe uma aparência única para um Parazeus. O parasita não transforma seu hospedeiro em uma nova forma: ele toma aquilo que o Louvolin já havia se tornado. Sua aparência, características físicas e habilidades permanecem ligadas ao corpo infectado, tornando alguns Parazeus muito mais perigosos que outros.

Parazeus continua se alimentando e lutando, utilizando inclusive as habilidades e técnicas que seu hospedeiro aprendeu durante a vida. Mas toda a disciplina sobre quando e por que utilizá-las desaparece. Durante o combate, partes de seu corpo podem se abrir, revelando os tentáculos do parasita que vivem em seu interior. Eles funcionam como braços adicionais, capazes de agarrar, chicotear e arremessar seus adversários, muitas vezes incorporando-se à própria maneira de lutar do antigo Louvolin.

Infeliz é o inseto que cruza seu caminho.

Os antigos propósitos e a filosofia do Louvolin são abandonados e substituídos por um único objetivo: alimentar e fazer o parasita crescer.

Quando a criatura finalmente atinge seu maior desenvolvimento dentro do hospedeiro, Parazeus abandona sua jornada conhecida e parte em direção a um destino que ninguém conhece. Dizem que, ao chegar lá, o parasita deixará para trás o corpo morto do hospedeiro e se transformará em uma criatura ainda maior e completamente incontrolável.

Mas existe uma história ainda mais temida entre os Louvolins.

Conta-se que, algumas vezes, durante essa jornada, um Parazeus encontra um templo.

Quando isso acontece, ele entra.

Há apenas dois destinos possíveis.

Se o Parazeus estiver forte o suficiente, pode exterminar os Louvolins menos experientes e destruir o templo antes que os guerreiros mais habilidosos consigam detê-lo.

Ou pode ser contido e destruído antes que o parasita complete seu ciclo.

Para os Louvolins, um Parazeus não é apenas um inimigo.

É tudo aquilo que sua filosofia ensina a controlar, transformado em uma criatura que não possui mais controle sobre si mesma.`;
const descricaoLouvolinGarra = `Durante sua jornada solitária, um Louvolin pode encontrar muitas adversidades, enfrentar inimigos aterradores e precisar ser especialmente forte, corajoso e agressivo para sobreviver. Quando passa repetidamente por experiências desse tipo, é comum que seu corpo comece a se transformar, dando origem a um Louvolin-garra.

O Louvolin-garra aprendeu que a melhor maneira de superar seus adversários é tornar seu ataque tão eficiente que não lhes reste qualquer oportunidade de defesa. Seu corpo cresce e seu novo exoesqueleto torna-se muito mais especializado em força, velocidade e poder ofensivo.

Esses Louvolins costumam viver em regiões cobertas por folhas secas. Sua coloração permite que permaneçam praticamente invisíveis nesse ambiente, desaparecendo novamente entre a vegetação após cada sequência de ataques.

Suas garras tornam-se maiores, mais fortes e extremamente afiadas. Seus movimentos são explosivos: um Louvolin-garra pode surgir do meio das folhas e executar uma sequência de golpes tão rápida e brutal que seu adversário mal consegue compreender de onde veio o ataque antes que ele termine.

O que define seu estilo é a combinação de agressividade, força, furtividade e coragem. Louvolins-garra não hesitam diante de criaturas muito maiores que eles. Pelo contrário: avançam com tamanha convicção que frequentemente conseguem derrotar adversários aparentemente superiores antes mesmo que estes tenham tempo de perceber como deveriam reagir.

Para um Louvolin-garra, uma luta não deve ser uma longa troca de golpes. O ataque perfeito é aquele que encerra o confronto no mesmo instante em que começa.

Sua filosofia pode ser resumida em uma única frase:

"Meu primeiro movimento é o último, e não há defesa que o alcance antes de ele chegar."`;
const descricaoLouvolinBranco = `Nos templos dos Louvolins, os Totzens aparecem misteriosamente em suas entradas, como se fossem presentes deixados para aqueles que ali vivem. Dizem que, sempre que isso acontece, um Louvolin-branco pode ser visto à distância, observando imóvel enquanto os pequenos Totzens são encontrados. Assim que são acolhidos pelos habitantes do templo, ele desaparece.

Por isso, o Louvolin-branco é uma figura misteriosa e quase mística para os Louvolins. Aqueles que afirmam já ter estado próximos de um deles descrevem principalmente a estranha sensação de paz que parece existir ao seu redor.

A jornada para se tornar um Louvolin-branco é marcada pela meditação quase absoluta e pela busca da compreensão de tudo aquilo que o cerca. É nas plantas que ele encontra sua maior inspiração: a paciência da espera, a serenidade, os movimentos lentos, como se existissem em um tempo diferente daquele dos insetos, e principalmente a capacidade de resistir sem precisar abandonar o lugar onde criaram suas raízes.

Pouco a pouco, o Louvolin começa a praticar seus movimentos da mesma maneira que uma planta reage ao vento: cedendo quando necessário, retornando à posição original e mantendo suas raízes firmes. Seu treinamento leva o equilíbrio ao extremo.

Quando finalmente se considera preparado, escolhe uma planta e inicia sua última meditação.

Apoiando-se sobre apenas uma das pernas, permanece completamente imóvel. Não se alimenta e não realiza qualquer movimento voluntário durante meses. Sua mente entra em um estado de vazio tão profundo que sua própria existência parece se confundir com a planta sobre a qual repousa.

Enquanto isso, a vegetação cresce lentamente ao seu redor, envolvendo seu corpo como um casulo.

É de dentro dela que, algum tempo depois, emerge um Louvolin-branco.

Dizem que, depois dessa transformação, ele passa a sobreviver apenas de água e luz solar. Grande parte de sua existência é passada em constante meditação. Um Louvolin-branco jamais inicia um ataque e mantém uma postura de absoluta passividade diante daqueles que encontra.

Passividade, porém, jamais deve ser confundida com vulnerabilidade.

O Louvolin-branco é um artista marcial extraordinário. Quando atacado, reage com movimentos precisos e elegantes, desviando e redirecionando os golpes de maneira que frequentemente faz o próprio adversário atingir a si mesmo. Em outras ocasiões, seu contra-ataque é tão rápido e sutil que o inimigo somente percebe que foi cortado depois que o movimento já terminou.

Talvez o aspecto mais impressionante de observar um Louvolin-branco em combate seja perceber que ele mantém apenas um pé apoiado no chão e, ainda assim, pode vencer sem sair do lugar.

Como uma planta enfrentando uma tempestade, seu corpo se move, inclina-se e cede.

Mas sua raiz permanece onde sempre esteve.

Seu estilo é conhecido pela elegância, agilidade, imprevisibilidade, equilíbrio e precisão defensiva. Para ele, não existe razão para decidir antecipadamente como uma luta deverá acontecer. O movimento do adversário é que determina sua resposta.

Sua filosofia resume aquilo que aprendeu observando as plantas:

"Não escolho para onde sopra o vento. Apenas me movo com ele, sem jamais abandonar minhas raízes."`;
const descricaoLouvolinEscama = `Dizem que, entre todos os caminhos que um Louvolin pode percorrer, a jornada do Louvolin-escama é a mais longa.

Durante anos, ele busca conhecimento nos mais diferentes lugares. Observa outras criaturas, enfrenta adversários, conhece novas formas de viver e aprende técnicas vindas de inúmeras fontes. Com o tempo, torna-se capaz de executar incontáveis formas de ataque e defesa.

Ainda assim, não encontra a perfeição.

Quanto mais aprende, mais percebe que toda técnica possui uma fraqueza. Uma defesa perfeita contra determinado ataque pode ser inútil contra outro. Uma postura vantajosa em certo terreno pode tornar-se uma limitação em outro. Não importa quanto conhecimento acumule, sempre haverá uma situação para a qual aquilo que aprendeu não será suficiente.

Até que, em um dia de chuva, o sábio Louvolin observa a água.

Percebe que ela jamais possui uma única forma. Torna-se uma gota ao cair, acompanha o caminho que encontra sobre o solo, assume a forma daquilo que a contém e, mesmo quando encontra um obstáculo, simplesmente procura outra maneira de continuar seu percurso.

Finalmente, ele compreende aquilo que tantos anos de treinamento não conseguiram lhe ensinar.

Em vez de procurar a forma perfeita, ele não deve possuir forma alguma.

E então mergulha.

Durante meses — às vezes anos — o Louvolin adapta seu corpo e suas técnicas ao ambiente aquático. No início, seus movimentos tornam-se lentos e desajeitados. Mas ele persiste até conseguir atacar, defender-se e movimentar-se dentro da água com a mesma naturalidade que possuía em terra ou no ar.

Quando finalmente consegue permanecer submerso por períodos extraordinariamente longos, seu corpo completa a adaptação e ele emerge como um Louvolin-escama.

O que define seu estilo é sua extraordinária capacidade de adaptação. Diferente de outros Louvolins especializados em determinada estratégia, o Escama busca o equilíbrio entre ataque e defesa e transforma o próprio ambiente em parte de sua técnica. É igualmente perigoso em terra, na água ou no ar.

Suas asas permitem combinar ataques terrestres com movimentos aéreos inesperados. Paredes, árvores, pedras, correntes de água e até os movimentos de seus adversários podem ser incorporados ao combate. Existem relatos de Louvolins-escama capazes de atravessar a superfície da água durante uma luta com tamanha leveza que parecem caminhar sobre ela.

A longa transformação aquática também modifica profundamente seu exoesqueleto. As escamas que passam a revesti-lo formam uma extraordinária armadura natural. Suas garras conseguem repelir golpes violentos, enquanto seu revestimento dificulta até mesmo a penetração de ferrões.

Observar um Louvolin-escama lutar é como assistir a uma dança mortal. Ataque transforma-se em defesa, defesa transforma-se em movimento e movimento transforma-se novamente em ataque. Não importa onde o combate aconteça ou como seu adversário tente mudar a situação: o Escama parece nunca estar verdadeiramente em desvantagem.

Pouquíssimos Louvolins percorrem uma jornada longa o suficiente para alcançar essa transformação. Por isso, encontrar um deles é extremamente raro, e sua aparência incomum dificilmente passa despercebida.

Sua filosofia resume a descoberta que encerrou sua longa busca pela perfeição:

"A forma perfeita é aquela que não precisa permanecer a mesma."`;
const descricaoLouvolinFerrao = `Também conhecido como "Imortal", o Louvolin-ferrão precisa passar pelo inferno antes de se tornar aquilo que é.

Durante sua jornada, alguns Louvolins ficam fascinados pela eficiência dos insetos capazes de secretar veneno, intimidar e ferroar seus adversários. Obcecado por esse tipo de ataque, o Louvolin começa a desenvolver uma técnica própria: em vez de utilizar suas garras da maneira tradicional que aprendeu no templo, passa a atacar com suas pontas, tentando reproduzir o movimento preciso de uma ferroada.

Anos de prática o ensinam a se esquivar com uma eficiência assustadora e a identificar os pontos mais vulneráveis de seus adversários. Sua técnica passa a se basear em intimidar primeiro, atravessar os ataques do inimigo sem ser atingido e encontrar uma única abertura para acertar um ponto vital.

Mas essa busca quase inevitavelmente o conduz a um adversário mais perigoso.

Ao desafiar repetidamente criaturas peçonhentas para aperfeiçoar sua técnica, chega o momento em que o Louvolin encontra um inimigo mais habilidoso que ele. Uma esquiva falha. Um ferrão atravessa seu exoesqueleto. O veneno entra em seu corpo.

E o Louvolin é derrotado.

Aqueles que morrem encerram ali sua jornada.

Aqueles que sobrevivem renascem como Louvolins-ferrão.

Durante a transformação, seu organismo absorve e assimila a substância que quase o matou. Seu novo corpo torna-se imune a venenos e passa a produzir sua própria toxina, frequentemente semelhante àquela encontrada nos temidos Escorpimônios. A ponta de sua garra transforma-se em um verdadeiro ferrão, capaz de injetar veneno diretamente nos pontos vulneráveis que sua técnica já havia aprendido a encontrar.

O Louvolin-ferrão também desenvolve grandes expansões laterais ao redor da cabeça. Quando abertas, elas fazem sua silhueta parecer ainda mais ameaçadora, lembrando uma criatura peçonhenta prestes a atacar. A intimidação faz parte de sua técnica: uma hesitação de poucos segundos pode ser tudo aquilo de que ele precisa.

Em combate, Louvolins-ferrão são conhecidos por atravessar sequências inteiras de ataques apenas se esquivando, aproximando-se cada vez mais do adversário até encontrarem a abertura que procuram.

Então ferroam.

Uma única vez.

Sua capacidade de sobreviver ao envenenamento que desencadeia sua transformação, somada à imunidade adquirida posteriormente, deu a esses Louvolins o apelido de "Imortais".

Sua filosofia carrega a lembrança daquilo que precisaram enfrentar para existir:

"Meu corpo se tornou uma arma letal. Sobrevivi ao pior, e nada mais pode me deter."`;
const descricaoLouvolinMimico = `A busca do Louvolin-mímico é interminável.

Sua complexa jornada acaba levando-o a questionar a própria individualidade. Durante uma meditação profunda, o Louvolin compreende que aquilo que ele é não termina nas fronteiras de seu próprio corpo. Ele faz parte de algo maior e, para ele, a existência de uma unidade isolada perde o sentido quando separada do coletivo.

A partir desse momento, sua jornada deixa de ser uma busca pelo aperfeiçoamento de si mesmo e passa a ser uma tentativa de compreender como muitos indivíduos podem agir como se fossem um só.

É nessa busca que o Louvolin se depara com as Formilitares.

Ele observa fascinado seu modo de vida. Elas parecem nunca parar de lutar e, apesar de serem milhares de indivíduos, comportam-se em batalha como partes de uma única e gigantesca máquina de guerra. Cada Formilitar sabe onde deve estar, reage aos movimentos das demais e parece compreender imediatamente aquilo de que o coletivo necessita.

O Louvolin começa então uma longa observação.

Primeiro, copia seus movimentos. Depois, suas formações e estratégias. Por fim, começa a decodificar os complexos sinais transmitidos através das antenas das Formilitares.

Quando finalmente consegue compreender e reproduzir sua comunicação, ocorre sua transformação.

Seu novo exoesqueleto torna-se menor e adquire características semelhantes às de uma Formilitar, como se o Louvolin fosse apenas mais uma estranha especialização daquela sociedade. Ele perde suas asas, suas garras diminuem e suas antenas tornam-se extraordinariamente eficientes na comunicação com as formigas.

Então, pela primeira vez, o Louvolin envia um sinal.

As Formilitares o encontram.

E ele é recrutado.

A partir daquele momento, o Louvolin-mímico deixa de lutar apenas por si mesmo. Torna-se uma unidade do exército Formilitar e coloca sua extraordinária habilidade marcial a serviço do formigueiro. Em meio às guerras praticamente ininterruptas das formigas, encontra oportunidades intermináveis para continuar aperfeiçoando sua técnica.

Encontrar um Louvolin-mímico no campo de batalha é uma visão difícil de esquecer. Em meio às fileiras organizadas de Formilitares surge, repentinamente, um poderoso artista marcial, atravessando inimigos que acreditavam conhecer perfeitamente o exército que enfrentavam.

Apesar de menor, o Louvolin-mímico é estranhamente mais forte que a maioria dos outros Louvolins. Seus ataques são baseados em surpresa, coordenação e combinações com aqueles que lutam ao seu redor. Ele utiliza seus próprios aliados como extensões de sua técnica: uma formação pode se tornar sua defesa, uma investida pode criar a abertura para seu golpe e até o movimento de outra Formilitar pode ser incorporado à sua sequência de ataques.

Suas antenas permanecem em comunicação constante com o coletivo. Por isso, em batalha, o Louvolin-mímico parece saber tudo aquilo que acontece ao seu redor.

Ele nunca luta sozinho.

Talvez seja justamente por isso que sua jornada seja considerada interminável. Garra, Ferrão, Branco e Escama encontraram caminhos para aperfeiçoar aquilo que eram. O Mímico escolheu um caminho no qual seu próprio desenvolvimento depende de todos aqueles que estão ao seu redor.

Enquanto o coletivo mudar, ele também continuará mudando.

Sua filosofia resume aquilo que descobriu ao abandonar os limites de sua individualidade:

"Sozinho, sou apenas um. Com todos, meus limites deixam de ser meus."`;
const descricaoLouvolinFantasma = `Dizem que o Louvolin-fantasma pode surgir em florestas cobertas por folhas secas. Ninguém sabe ao certo se ele realmente existe, pois os únicos relatos sobre sua presença estão ligados a insetos que decidiram desafiar a própria morte.

De tempos em tempos, guerreiros que acreditam ter alcançado um nível extraordinário de habilidade partem em busca do Louvolin-fantasma. Entram sozinhos em regiões tomadas por folhas secas com a intenção de encontrá-lo e derrotá-lo.

Nenhum deles jamais retornou.

Ainda assim, insetos de visão especialmente apurada que atravessaram essas florestas afirmam ter visto algo entre a vegetação. Uma criatura assustadoramente semelhante às próprias folhas, tão perfeitamente camuflada que só podia ser percebida durante seus movimentos.

Um vulto.

Um sopro entre as folhas.

E então nada.

Esses relatos alimentam o mito do Louvolin-fantasma: um mestre capaz de decapitar seu adversário com um único golpe. Dizem que sua investida produz apenas um pequeno movimento na folhagem, semelhante a uma rajada de vento, e que a vítima sequer percebe que foi atacada antes que sua cabeça já esteja separada do corpo.

Mas nenhuma história sobre o Fantasma é tão conhecida quanto a lenda do Exército de Vespaleiros Caído.

Conta-se que um grande exército de Vespaleiros atravessava uma floresta de folhas secas em busca de um território considerado sagrado pelos Louvolins.

Então o vento soprou.

Um Vespaleiro caiu decapitado.

O exército continuou avançando.

O vento soprou novamente.

Outro caiu.

A cada novo movimento das folhas, mais um Vespaleiro perdia a cabeça. Os soldados tentavam encontrar o responsável, mas não havia inimigo algum entre eles — apenas folhas secas sendo carregadas pelo vento.

Até que finalmente o viram.

O Louvolin-fantasma surgiu abertamente diante do exército e iniciou uma sequência de investidas. Passava pelos Vespaleiros em uma velocidade impressionante, cortava seus aliados e desaparecia novamente entre as folhas antes que aqueles que haviam acabado de vê-lo conseguissem determinar para onde tinha ido.

Atacavam onde ele estivera.

Nunca onde estava.

A técnica utilizada naquele dia tornou-se conhecida nas histórias dos Louvolins como Sopro do Vento da Morte.

Dizem que nenhum Vespaleiro deixou aquela floresta.

E é justamente aí que a lenda começa a desmoronar.

Se todos os Vespaleiros morreram...

Se ninguém acompanhava o exército...

Se o Louvolin-fantasma jamais contou sua própria história...

quem viu o que aconteceu para poder contar?`;
const descricaoLouvolinLotus = `Louvolin-lotus é o título dado ao Grande Mestre que serve como guia espiritual dos templos Louvolins. Diz-se que sempre existe um deles e que, quando morre, outro eventualmente toma seu lugar.

Mas ninguém sabe exatamente como essa sucessão acontece.

O título vem daquele que teria sido o fundador da filosofia de elevação do corpo e do espírito seguida pelos Louvolins. Segundo as histórias mais antigas, o primeiro Louvolin-lotus possuía uma aparência semelhante a uma flor de lótus e parecia ter se tornado parte do próprio mundo das plantas.

Representações desse primeiro mestre podem ser encontradas nos templos. Sua imagem costuma ser construída com pétalas de flores, sempre retratado em profunda meditação.

Entretanto, algumas tradições afirmam que nunca existiu um segundo Louvolin-lotus.

Para elas, o primeiro mestre é imortal e continua vivo em algum lugar desconhecido. Outras dizem que seu corpo realmente morre, mas seu espírito retorna através de outro Louvolin, que abandona sua antiga identidade e passa a ocupar seu lugar.

Nenhuma dessas histórias jamais foi confirmada.

Existem relatos de insetos que, enquanto vagavam em busca de iluminação, sentiram um intenso perfume de flores vindo de lugares onde nenhuma deveria existir. Ao seguirem o aroma, encontraram uma região coberta por flores e, no centro dela, um Louvolin-lotus meditando.

Dizem que aqueles que chegam até ele são convidados a sentar.

E meditar.

Quando finalmente despertam do profundo transe em que entraram, não encontram mais o mestre.

Nem as flores.

Entre as inúmeras histórias atribuídas ao Louvolin-lotus, duas são especialmente conhecidas.

A primeira conta sobre um bando de insetos que decidiu encontrar e eliminar o grande mestre.

Após uma longa busca, encontraram-no meditando e o cercaram. O Louvolin-lotus não abriu os olhos, não mudou sua postura e não demonstrou qualquer reação à presença dos invasores.

Eles avançaram.

Nenhum conseguiu alcançá-lo.

Galhos desprenderam-se das árvores nos momentos exatos. Raízes fizeram alguns tropeçar. Outros caíram em direção a plantas carnívoras que pareciam não estar ali momentos antes. Insetos chocaram-se uns contra os outros, pedras se desprenderam e acontecimentos tão improváveis começaram a se suceder que aqueles que conseguiram fugir juraram que a própria floresta estava protegendo o mestre.

Durante todo o confronto, o Louvolin-lotus permaneceu meditando.

A segunda lenda fala de um grande mestre Louvolin que passou anos procurando pelo Lotus com o objetivo de aperfeiçoar sua arte marcial.

Ele finalmente o encontrou.

Diferentemente de tantos outros, pediu apenas uma coisa:

um combate.

O Louvolin-lotus aceitou.

O que aconteceu em seguida tornou-se conhecido como a técnica do Espelho da Alma.

Durante toda a luta, o desafiante teve a absoluta certeza de estar enfrentando a si mesmo.

Cada postura encontrava sua própria postura.

Cada movimento recebia exatamente o movimento necessário para anulá-lo.

Cada ataque lançado contra o Lotus parecia retornar contra aquele que o havia realizado.

Quanto mais intensamente tentava derrotar o grande mestre, mais claramente percebia que estava lutando contra suas próprias limitações.

Quando o combate terminou, o Louvolin-lotus continuava exatamente onde estivera antes de começar.

Os mestres dos templos ensinam que tornar-se um Louvolin-lotus é o maior objetivo que um Louvolin poderia alcançar.

Mas também ensinam algo que torna essa afirmação estranha:

aquele que busca tornar-se o Lotus provavelmente ainda não está pronto para sê-lo.`;
const descricaoLouvolinReiDiabo = `O Louvolin-rei-diabo é tido como um mito entre os insetos. Diz a lenda que um grande mestre Louvolin alcançou um nível de capacidade adaptativa em combate tão extraordinário que passou a acreditar que absolutamente nada poderia derrotá-lo.

Convencido de suas habilidades, iniciou uma jornada desafiando os insetos mais poderosos que encontrava e derrotando cada um deles. Esse período de sua história ficou conhecido como A Provação, quando aperfeiçoou a técnica das Mil Respostas, capaz de adaptar seu estilo de combate a qualquer adversário ou situação. Foi durante esses desafios que recebeu o título de Rei-diabo.

A segunda parte da lenda começa com seu encontro com um misterioso inseto voador chamado Barbu-lei, que o alertou de que, apesar de todas as suas vitórias, ainda havia algo que inevitavelmente o derrotaria: o tempo. O Rei-diabo então iniciou uma longa jornada em busca de superar a própria mortalidade e, segundo o mito, conseguiu tornar-se imortal.

O último grande episódio de sua história é seu encontro com o Louvolin-lotus. Certo de que não havia mais nada que pudesse superá-lo, o Rei-diabo desafiou o grande mestre e terminou derrotado, aprisionado sob as raízes de uma planta.

Permaneceu ali durante anos, incapaz de escapar e também incapaz de morrer. Foi durante esse longo aprisionamento que compreendeu a lição do Lotus sobre o verdadeiro problema de sua imortalidade e abandonou a arrogância que havia guiado sua jornada. Um dia, finalmente foi libertado.

A história do Rei-diabo é tratada principalmente como uma antiga narrativa lendária entre os insetos que não pertencem aos Louvolins. Ainda assim, de tempos em tempos surgem relatos sobre uma criatura imponente, de aparência incomum e olhos vermelhos, avistada em diferentes lugares.

Segundo essas histórias, o Rei-diabo ainda vaga pelo mundo.

Mas aquele que antes procurava os mais fortes apenas para provar que poderia derrotá-los agora aparece diante de grandes injustiças, luta por aqueles que não poderiam vencê-las sozinhos e desaparece novamente.

Se os relatos forem verdadeiros, talvez sua maior jornada tenha começado somente depois que sua lenda terminou.`;
const descricaoLouvolinMilEspinhos = `A história do Louvolin-mil-espinhos é contada e recontada há muito tempo nas aldeias dos percevejos.

Dizem que ele evita qualquer contato com outros insetos e prefere permanecer completamente sozinho, como se soubesse que sua simples proximidade representa um perigo, mesmo quando não possui intenção alguma de ferir.

Quando alguém insiste em se aproximar, o Louvolin-mil-espinhos abre suas enormes asas e revela toda a sua aparência.

Normalmente, isso basta.

As cores intensas de seu exoesqueleto anunciam o perigo antes mesmo que seja necessário demonstrá-lo. Seu corpo inteiro é coberto por espinhos venenosos, enquanto as extremidades de suas garras desenvolveram ferrões impressionantes, estruturas que dificilmente seriam associadas a um Louvolin comum.

Com as asas abertas e os grandes olhos estampados sobre elas encarando quem se aproxima, até os insetos mais corajosos costumam entender o aviso e recuar.

Mas a história que tornou o Louvolin-mil-espinhos uma lenda começou durante os constantes ataques das Moshinobis às aldeias dos percevejos.

Durante dias, elas surgiam repentinamente, saqueavam as aldeias e desapareciam antes que qualquer resistência organizada pudesse alcançá-las. Sua velocidade tornava praticamente impossível enfrentá-las.

Até que, durante mais um ataque, algo diferente apareceu sobre os galhos.

Um Louvolin observava as invasoras com suas enormes asas abertas.

Era o Mil-Espinhos.

Confiantes em sua velocidade e superioridade numérica, as Moshinobis decidiram atacá-lo juntas.

Foi um erro.

Diante da velocidade impressionante das Moshinobis, o Louvolin-mil-espinhos parecia quase desdenhoso. Esquivava-se e derrubava uma após a outra como se enfrentasse adversários comuns. Mesmo quando alguma conseguia se aproximar o suficiente para tocá-lo, descobria que isso também fazia parte de sua defesa: o simples contato com os espinhos de seu exoesqueleto podia causar um envenenamento letal.

Logo, aquilo que deveria ser um ataque coordenado transformou-se em uma fuga generalizada.

Foi então que os percevejos testemunharam a técnica que daria nome àquela criatura.

O Louvolin girou violentamente o próprio corpo. Durante o movimento, cortou parte dos espinhos que cobriam seu exoesqueleto e os lançou em todas as direções.

Os espinhos atravessaram o ar.

Uma Moshinobi caiu.

Depois outra.

E outra.

Em poucos instantes, as invasoras que fugiam começaram a cair em uma sequência quase perfeitamente sincronizada.

Os percevejos chamaram aquela técnica de Giro dos Mil Espinhos.

E o mestre que a executou passou a ser conhecido nas histórias de suas aldeias como Louvolin-mil-espinhos.

Quando os habitantes finalmente tiveram coragem de sair de seus abrigos para agradecer ao estranho que os havia protegido, encontraram apenas as Moshinobis derrotadas.

O Louvolin-mil-espinhos já havia desaparecido.`;
const descricaoLouvolinSemFace = `Tudo o que se sabe sobre o Louvolin-sem-face começa com um problema:

ele pode ser qualquer um.

Dizem que esse misterioso Louvolin é capaz de trocar seu exoesqueleto com extraordinária facilidade e, em pouco tempo, surgir com a aparência de um inseto completamente diferente.

Não se trata apenas de uma transformação visual. O Sem-Face parece compreender a comunicação, os comportamentos e até pequenos hábitos das criaturas que imita. Pode caminhar entre Formilitares como se sempre tivesse pertencido ao formigueiro, surgir entre Vespaleiros sem despertar suspeitas ou até apresentar-se como um Louvolin comum.

Ninguém sabe ao certo como consegue fazer isso com tamanha naturalidade.

Talvez porque, para o Sem-Face, já não exista uma identidade verdadeira para esconder.

Sua misteriosa capacidade de transformação é conhecida nos relatos como Troca-Casca.

Um Sem-Face pode entrar em determinado lugar como um Vespaleiro, eliminar silenciosamente um grupo de inimigos e abandoná-lo com a aparência de uma Aracromante. Quando aqueles que sobreviveram tentam reconstruir o ocorrido, as descrições parecem pertencer a criaturas completamente diferentes.

Somente durante o combate sua verdadeira natureza parece revelar-se.

Por alguns instantes, seus movimentos deixam de pertencer à criatura que está imitando. A postura muda. O corpo assume aquela precisão característica dos grandes artistas marciais Louvolins e seus braços raptoriais entram em ação.

É então que surge a sensação mais perturbadora relatada por aqueles que afirmam tê-lo visto:

os braços sempre estiveram ali.

Ninguém simplesmente havia percebido.

Algumas histórias descrevem um Sem-Face com asas. Outras juram que ele não possuía nenhuma. Há relatos de indivíduos enormes e ameaçadores, enquanto outros falam de criaturas pequenas que poderiam passar despercebidas em uma multidão.

Talvez todos estejam certos.

Talvez nenhum esteja.

Os relatos envolvendo o Louvolin-sem-face tornaram-se tão numerosos que sua própria fama passou a alimentar a descrença em sua existência. Sempre que ocorre algum acontecimento extraordinário cuja explicação parece impossível, não demora para alguém afirmar que aquela criatura era, na verdade, o Sem-Face.

Um general que inexplicavelmente abandonou uma batalha.

Um estranho que apareceu em uma aldeia pouco antes de algum acontecimento importante.

Um guerreiro desconhecido que desapareceu depois de derrotar dezenas de inimigos.

Uma criatura que alguém conhecia havia anos e que, certo dia, simplesmente nunca mais foi vista.

Sempre existe alguém disposto a dizer:

"Era ele."

E talvez seja justamente por isso que ninguém consiga descobrir o objetivo do Louvolin-sem-face.

Depois que tudo termina, procurar pelo responsável já não adianta.

Ele já é outra coisa.`;

const descricaoVudulha = `Para muitos insetos, encontrar uma Barântula é assistir à lenta aproximação da própria morte.

Há relatos de viajantes que, ao atravessarem uma encruzilhada aparentemente deserta, viram uma abertura surgir na terra e dela emergir uma Barântula. Pouco pode ser feito depois disso. Sua força é brutal: ela morde, imobiliza e arrasta sua vítima para as profundezas, levando-a até o território das Aracromantes, onde provavelmente encontrará seu fim como sacrifício em algum ritual do Coven.

Por isso, seu nome é pronunciado com cuidado por outras sociedades. Alguns evitam até mesmo repeti-lo, como se dizê-lo muitas vezes pudesse invocá-la do chão.

Para as Vudulhas, porém, uma Barântula representa algo completamente diferente.

Elas são protetoras, provedoras e figuras paternais dentro do Coven. É delas que vêm muitos dos ensinamentos transmitidos aos mais jovens, mas também boa parte da diversão e do bom humor da comunidade. Barântulas são professoras, contadoras de histórias, oradoras e líderes. Para uma jovem Vudulha, poucas coisas parecem tão grandiosas quanto um dia tornar-se uma delas.

As Aracromantes enxergam-nas com um respeito ainda mais profundo. Barântulas são seus líderes espirituais e juízes, além de representarem o auge da experiência nas habilidades e tradições que um membro do Coven pode alcançar. Seu conhecimento sobre tecelagem, caça, rituais, natureza e os costumes de seu povo faz delas não apenas autoridades, mas principalmente mentoras.

Curiosamente, as próprias Barântulas parecem dar pouca importância a tamanha reverência.

Para elas, títulos, medo e prestígio são apenas interpretações daqueles que ainda enxergam o mundo a partir de si mesmos. Uma Barântula se considera somente um instrumento de uma essência muito maior que todos os seres e que se manifesta em tudo aquilo que existe:

a matéria, o instinto, o ciclo, a contemplação da natureza e, inevitavelmente... a morte.`;
const descricaoAracromante = `Aracromantes são figuras temidas por praticamente todas as sociedades de insetos. Sua aparência sinistra, os sons que produzem, seus estranhos rituais e a maneira como caçam utilizando armadilhas sofisticadas já seriam suficientes para alimentar inúmeras histórias. Mas existe um costume que causa ainda mais temor: Aracromantes frequentemente capturam outros insetos para utilizá-los em sacrifícios.

Para uma Aracromante, porém, não existe nada de particularmente assustador nisso. Tudo faz parte das tradições e práticas religiosas de seu Coven. Elas não compreendem por que sua cultura é tratada com tamanho desprezo, afinal outras sociedades também caçam, disputam e protegem territórios, matam seus inimigos e possuem costumes que poderiam parecer estranhos quando observados por alguém de fora.

Ainda assim, quase tudo relacionado às Aracromantes é tratado como mistério, superstição ou algo que simplesmente não deveria existir.

Depois de gerações convivendo com essa reputação, elas aprenderam a encontrar nela alguma utilidade.

Aracromantes deliberadamente tornam seus territórios tão assustadores quanto as histórias contadas sobre eles. Exoesqueletos vazios são deixados próximos às entradas dos abrigos, grandes teias delimitam os caminhos e seus pelos endurecidos, semelhantes a agulhas, são espalhados em locais estratégicos. Sons e sinais utilizados pelo Coven completam a atmosfera. Quanto mais aterrorizante parecer o lugar, menor a chance de algum estranho decidir entrar.

Talvez o maior problema para sua reputação seja que praticamente tudo na vida de uma Aracromante exige algum tipo de ritual.

Há rituais para caçar, para proteger o território, para celebrar, para tomar decisões e até mesmo para se alimentar. Muitos deles exigem um sacrifício e, segundo suas tradições, o inseto oferecido precisa necessariamente estar vivo no momento em que o ritual começa.

As Aracromantes insistem que existe significado, tradição e propósito em cada uma dessas práticas.

Curiosamente, essa explicação nunca parece tranquilizar ninguém.`;
const descricaoBarantula = `Para muitos insetos, encontrar uma Barântula é assistir à lenta aproximação da própria morte.

Há relatos de viajantes que, ao atravessarem uma encruzilhada aparentemente deserta, viram uma abertura surgir na terra e dela emergir uma Barântula. Pouco pode ser feito depois disso. Sua força é brutal: ela morde, imobiliza e arrasta sua vítima para as profundezas, levando-a até o território das Aracromantes, onde provavelmente encontrará seu fim como sacrifício em algum ritual do Coven.

Por isso, seu nome é pronunciado com cuidado por outras sociedades. Alguns evitam até mesmo repeti-lo, como se dizê-lo muitas vezes pudesse invocá-la do chão.

Para as Vudulhas, porém, uma Barântula representa algo completamente diferente.

Elas são protetoras, provedoras e figuras paternais dentro do Coven. É delas que vêm muitos dos ensinamentos transmitidos aos mais jovens, mas também boa parte da diversão e do bom humor da comunidade. Barântulas são professoras, contadoras de histórias, oradoras e líderes. Para uma jovem Vudulha, poucas coisas parecem tão grandiosas quanto um dia tornar-se uma delas.

As Aracromantes enxergam-nas com um respeito ainda mais profundo. Barântulas são seus líderes espirituais e juízes, além de representarem o auge da experiência nas habilidades e tradições que um membro do Coven pode alcançar. Seu conhecimento sobre tecelagem, caça, rituais, natureza e os costumes de seu povo faz delas não apenas autoridades, mas principalmente mentoras.

Curiosamente, as próprias Barântulas parecem dar pouca importância a tamanha reverência.

Para elas, títulos, medo e prestígio são apenas interpretações daqueles que ainda enxergam o mundo a partir de si mesmos. Uma Barântula se considera somente um instrumento de uma essência muito maior que todos os seres e que se manifesta em tudo aquilo que existe:

a matéria, o instinto, o ciclo, a contemplação da natureza e, inevitavelmente... a morte.`;

const descricaoEscorpete = `Nascido diretamente das entranhas de sua mãe junto de seus irmãos, o Escorpete chega ao mundo pequeno e vulnerável. Durante seus primeiros dias, permanece agarrado às costas dela, observando silenciosamente seus hábitos, sua alimentação e sua rotina. Mesmo entre mãe e filhotes, a comunicação é mínima, limitada a poucos gestos e apenas ao necessário.

Com o passar do tempo, seu exoesqueleto endurece e ele finalmente se torna capaz de abandonar a proteção materna. Os irmãos — geralmente dois ou três — ainda tentam permanecer juntos durante os primeiros dias de independência, formando uma pequena família. Essa convivência, porém, raramente dura. Conflitos se tornam cada vez mais frequentes até que a presença uns dos outros se torna insuportável.

É então que cada Escorpete segue seu próprio rumo. Mesmo jovem, suas pinças, garras e ferrão já são suficientes para caçar, defender-se e construir seu próprio abrigo, iniciando a vida solitária que provavelmente manterá pelo resto de sua existência.

Escorpetes ainda possuem, entretanto, certos comportamentos de filhote. Gostam de brincar com suas presas e, às vezes, perseguem pequenos insetos sem qualquer intenção de comê-los. Viajantes também podem ser surpreendidos por um Escorpete que surge apenas para ameaçá-los e assustá-los antes de ir embora. Essas provocações parecem servir como uma espécie de aprendizado: é assim que descobrem como parecer perigosos, testar seus próprios limites e, principalmente, não demonstrar medo diante de outras criaturas.

Há bons motivos para que essa independência aconteça tão cedo. Relatos de Escorpetes obrigados a permanecer por muito tempo com seus irmãos quase sempre terminam da mesma maneira: as disputas se tornam violentas e, eventualmente, um deles mata e devora os demais.

Escorpetes conseguem tolerar a própria espécie por algum tempo. Gostar da companhia uns dos outros já é pedir demais.`;
const descricaoEscormonio = `Poucas coisas são piores para um inseto desavisado do que passar perto do abrigo secreto de um Escormônio quando ele está com fome. A criatura pode surgir sem aviso, agarrando a presa simultaneamente com suas garras e poderosas pinças antes de aplicar o ferrão. Seu veneno é letal e seu exoesqueleto extremamente resistente, fazendo com que poucos insetos sejam capazes de enfrentá-lo em igualdade.

Apesar do medo que provoca nas outras criaturas, a vida de um Escormônio é surpreendentemente tranquila. Depois das provocações e experiências da juventude como Escorpete, ele já não sente necessidade de demonstrar o quanto é perigoso. Torna-se um grande apreciador do silêncio e da paz, passando boa parte do tempo cuidando de seu abrigo, buscando água ou simplesmente descansando e aproveitando sua existência solitária.

Escormônios demoram a sentir fome e, quando isso acontece, deixam seus esconderijos para caçar. Fora desses períodos, geralmente só desejam não ser perturbados. Fazer barulho demais próximo ao abrigo de um é uma maneira particularmente ruim de descobrir isso. Mesmo que esteja sem fome, o Escormônio pode matar o invasor e simplesmente guardá-lo para o próximo jantar.

Talvez o período mais complicado de sua vida adulta seja justamente aquele em que precisa fazer algo para o qual sua existência inteira não o preparou: encontrar um parceiro.

Sem qualquer traquejo social, dois Escormônios precisam superar a própria introversão, territorialidade e profunda desconfiança para permanecer próximos tempo suficiente. A aproximação costuma ser lenta e cuidadosa, com ambos tentando descobrir se o outro está interessado em acasalar ou prestes a atacar.

Nem sempre eles descobrem a resposta a tempo.

Quando a corte é bem-sucedida, permanecem juntos apenas pelo necessário antes de retornarem às suas vidas solitárias. Quando não é...

às vezes um deles acaba descobrindo que compareceu ao encontro como jantar.`;
const descricaoEscorzebu = `Sua aparência é assustadora e sua força, implacável. Um Escorzebu representa uma enorme ameaça até mesmo para grupos inteiros de insetos. Enfrentá-lo é como travar uma batalha no próprio inferno: seu exoesqueleto extremamente resistente, suas pinças gigantescas, o poderoso veneno de seu ferrão e toda a experiência acumulada ao longo da vida fazem dele um adversário que poucos desejam encontrar.

Quando sente fome, deixa seu abrigo para caçar e dificilmente retorna com uma única presa. Escorzebus costumam capturar várias vítimas de uma vez, armazenando-as para os próximos períodos de alimentação.

Apesar da aparência ainda mais ameaçadora, porém, o Escorzebu já não possui o comportamento profundamente solitário de sua forma anterior. Um Escormônio somente consegue alcançar essa evolução depois de superar uma das maiores dificuldades de sua existência: conviver com outro indivíduo e tornar-se pai ou mãe ao menos uma vez.

Após os filhotes deixarem a proteção materna, a fêmea abandona seu antigo exoesqueleto e assume a forma de Escorzebu. No caso dos machos, a transformação ocorre após deixarem o abrigo da parceira depois do nascimento da prole. A experiência parece provocar uma mudança que vai muito além do corpo.

Tendo finalmente desenvolvido alguma habilidade social, Escorzebus tornam-se muito mais tolerantes ao barulho, à proximidade e à convivência. Alguns chegam a compartilhar temporariamente seus abrigos com outros indivíduos. Conflitos ainda são frequentes — afinal, continuam sendo escorpiões —, mas já não costumam terminar em morte. Algumas pinçadas, ferimentos e um perdão silencioso normalmente são suficientes para restaurar a paz.

Curiosamente, por trás da aparência de um verdadeiro soberano do inferno existe uma criatura geralmente calma e extremamente tímida. Escorzebus podem demonstrar essa timidez tanto diante de seus semelhantes quanto de outros insetos.

Naturalmente, quase nenhum inseto tem coragem de se aproximar o bastante para descobrir isso.

E talvez seja melhor assim. Timidez e fome são coisas completamente diferentes.`;

const descricaoLagracia = `Lagrácias nascem em pequenos grupos e passam sua curta infância sendo instruídas sobre a missão que deverão cumprir: espalhar a Palavra da Vida entre os outros insetos. Quando estão prontas, partem geralmente em duplas e seguem pelo mundo, visitando comunidades, povoados e até abrigos isolados para transmitir seus ensinamentos.

Durante suas viagens, podem permanecer bastante tempo em uma mesma comunidade. Falam sobre a maneira correta de viver, aconselham aqueles que encontram e contam histórias sobre a Terra das Flores Douradas e a Grande Transformação que um dia as aguarda. Em alguns lugares, são recebidas com carinho e consideradas criaturas adoráveis e dignas de admiração.

Em outros, nem tanto.

Há quem considere as Lagrácias inconvenientes, insistentes e julgadoras. Alguns reclamam que elas comem demais, falam demais e fazem de menos. Mesmo quando percebem que sua presença não é particularmente desejada, uma Lagrácia pode interpretar a hostilidade como mais um motivo para permanecer e tentar ajudar.

Por natureza, Lagrácias são lentas, tranquilas e completamente avessas à violência. Passam grande parte do tempo comendo, conversando e oferecendo conselhos, mas possuem pouca ou nenhuma capacidade de se defender. Sua aparência chamativa, somada a uma confiança quase inesgotável nas boas intenções dos outros, faz delas alvos fáceis para predadores e insetos mal-intencionados.

Por isso, muitas jamais concluem sua missão.

Uma Lagrácia pode entrar despreocupadamente em território de Aracromantes ou aproximar-se do abrigo de um Escormônio acreditando sinceramente que encontrou uma nova oportunidade para espalhar a Palavra da Vida. Para elas, nenhum inseto está além de uma boa conversa.

Essa convicção, infelizmente, nem sempre é compartilhada pelo inseto que está ouvindo.`;
const descricaoCrisanto = `Lagrácias acreditam piamente que todo inseto é capaz de passar pela Grande Transformação. Segundo a Palavra da Vida, ela pode ser alcançada por meio de boas ações, comportamento ilibado, alimentação exclusivamente vegetal e uma longa série de regras que, para a maioria dos insetos, não são nada fáceis de cumprir.

Aqueles que seguirem corretamente esses ensinamentos um dia entrariam em sua própria crisálida dourada e, após a transformação, emergiriam com o exoesqueleto completamente modificado e dotados de asas. Somente então seriam capazes de partir em busca da lendária Terra das Flores Douradas.

Para a enorme maioria dos insetos, naturalmente, isso jamais acontece.

Com as Lagrácias, porém, acontece exatamente assim.

Ao chegar o momento de sua metamorfose, uma Lagrácia transforma-se em um Crisanto, uma bela crisálida dourada cuja aparência lembra uma pequena figura sagrada. Presenciar a formação de um Crisanto pode ser uma experiência marcante, principalmente para aqueles que passaram muito tempo ouvindo uma Lagrácia falar sobre a Grande Transformação e agora a veem acontecer diante dos próprios olhos.

Por isso, algumas comunidades guardam Crisantos em seus abrigos e os protegem cuidadosamente, ansiosas pelo momento em que a transformação finalmente estará completa. Há até insetos que fazem pedidos e orações diante deles, acreditando que a criatura que um dia emergirá dali poderá atendê-los.

Curiosamente, os Crisantos parecem ouvir.

Quando alguém fala diante deles, um brilho dourado pode surgir na região de sua superfície que lembra um rosto. O fenômeno costuma ser interpretado como uma resposta positiva às preces. Alguns afirmam, inclusive, que o brilho só aparece diante daqueles que vivem de acordo com as regras da Palavra da Vida.

Ninguém sabe ao certo.

Um Crisanto pode permanecer imóvel durante meses ou até mesmo anos, pois a Grande Transformação não possui duração determinada. Durante todo esse período, é completamente indefeso e precisa ser protegido. Sem alguém que zele por ele, a espera pela transformação pode terminar de maneira muito menos gloriosa: Crisantos continuam sendo alimento para muitos predadores.`;
const descricaoSerafleta = `Serafletas são criaturas migratórias, mas seus destinos parecem seguir uma regra bastante peculiar: elas só pousam em lugares que já prosperaram.

Pequenos bandos de Serafletas surgem ocasionalmente sobre comunidades organizadas, férteis e saudáveis, onde sua chegada é recebida como um sinal de prosperidade. Para muitos insetos, poucas coisas demonstram tão claramente que uma comunidade encontrou um bom caminho quanto avistar suas enormes asas brancas se aproximando no horizonte.

Ao contrário das Lagrácias, Serafletas não se limitam a espalhar a Palavra da Vida por meio de discursos e conselhos. Durante o período em que permanecem em uma comunidade, trabalham ativamente para melhorá-la. Ajudam em tarefas coletivas, oferecem ensinamentos, fazem vigilância aérea e auxiliam os habitantes sempre que podem. Sua presença também torna o ambiente progressivamente mais fértil e belo, favorecendo o crescimento da vegetação e, principalmente, das flores.

Sua aparência agradável, suas palavras doces e, sobretudo, sua disposição genuína para ajudar fazem com que sejam amadas pela maioria dos insetos que convivem com elas. Mesmo espécies pouco interessadas na Palavra da Vida costumam receber Serafletas de braços abertos.

Entretanto, nem todos as admiram.

Serafletas jamais parecem visitar comunidades que realmente necessitam de sua ajuda. Povoados miseráveis, territórios devastados, comunidades em guerra ou lugares que simplesmente não conseguiram prosperar por conta própria são ignorados durante suas migrações. Elas podem sobrevoar regiões inteiras em dificuldade sem demonstrar qualquer intenção de pousar.

Nem mesmo a existência de uma ligação anterior parece fazer diferença. Uma comunidade que tenha acolhido Lagrácias, alimentado suas missionárias ou até protegido um Crisanto durante anos não possui qualquer garantia de receber uma Serafleta no futuro. Se o lugar não estiver próspero quando o bando passar, elas simplesmente seguem viagem.

Por isso, alguns insetos enxergam uma profunda hipocrisia na maneira como vivem. As Lagrácias ensinam que a Palavra da Vida deve ser levada a todos e frequentemente arriscam a própria vida tentando alcançar aqueles que mais precisam ouvi-la. As Serafletas, por outro lado, possuem asas, força e capacidade para realizar muito mais — mas oferecem sua ajuda justamente àqueles que já aprenderam a viver sem ela.

As próprias Serafletas não parecem incomodadas com essa contradição. Permanecem gentis e benevolentes, ajudam sinceramente enquanto estão presentes e, quando chega o momento, partem novamente com seu bando.

Quando perguntadas para onde estão indo, a resposta é sempre a mesma:

“Estamos migrando a caminho da Terra das Flores Douradas.”

As Lagrácias passam a infância inteira falando sobre esse lugar. As Serafletas passam a vida inteira afirmando estar a caminho dele.

Até hoje, porém, nenhum outro inseto jamais encontrou a Terra das Flores Douradas.`;
const descricaoJulgarta = `Julgartas são ensinadas desde a infância sobre a Palavra da Vida e seguem seus ensinamentos à risca, acreditando que somente através da obediência absoluta estarão preparadas para a Grande Transformação. Diferentemente de outras lagartas, porém, acreditam que apenas a transformação de sua própria linhagem é verdadeira. As demais seriam imitações ou falsas transformações e, por isso, não veem qualquer razão para espalhar a Palavra da Vida entre outros insetos.
Isso não significa que sejam indiferentes à maneira como os outros vivem.
Julgartas são grandes observadoras e julgadoras do comportamento alheio, frequentemente condenando e recriminando qualquer atitude que considerem contrária aos seus ensinamentos. Poucas criaturas recebem tanta reprovação quanto suas vizinhas, as Salikartas. Para as Julgartas, a coloração negra e os espinhos vermelhos dessas lagartas são sinais evidentes de uma natureza maligna, e a rivalidade entre as duas populações alimenta um conflito que parece não ter fim.
Muitos desses confrontos terminam com Julgartas mortas pelo veneno de suas adversárias. Incapazes de enfrentar sozinhas inimigos tão numerosos, estabeleceram uma aliança com as Formilitares, que auxiliam na defesa de seu território e em sua interminável guerra contra aqueles que consideram inimigos.
Esse território é chamado de Caligo. As Julgartas realizam ali seus principais ritos no início da manhã e no fim da tarde, justamente quando uma intensa luz dourada atravessa seu território.
Para elas, não existe qualquer dúvida sobre a origem desse fenômeno.
A luz vem da Terra das Flores Douradas.`;
const descricaoCrisalianca = `Quando uma Julgarta está completamente desenvolvida e preparada para a Grande Transformação, precisa passar pelo Ritual da Aliança. Durante vários dias recebe das demais uma farta alimentação e, ao final desse período, todos os chifres de seu corpo são removidos. Então faz sua aliança: promete seguir para sempre a Palavra da Vida e obedecer às Fariletas mais velhas e de maior hierarquia quando finalmente completar sua transformação.
Seu corpo começa então a formar a Crisaliança.
A estrutura resultante está entre os casulos mais duros e resistentes conhecidos, e completar a transformação em seu interior não é tarefa simples. Os ferimentos provocados pelo ritual podem matar algumas Julgartas antes mesmo que o processo termine. Outras aparentemente não encontram espaço suficiente para se desenvolver ou simplesmente não conseguem romper a rígida estrutura quando chega o momento de emergir.
Segundo as Fariletas, porém, a explicação é outra.
Elas ensinam que toda Julgarta é julgada enquanto permanece dentro da Crisaliança. Aquelas que seguiram rigidamente a Palavra da Vida e permaneceram verdadeiramente fiéis à sua promessa são aceitas pela Aliança e conseguem completar a Grande Transformação. As que morrem ou jamais conseguem sair simplesmente não foram consideradas dignas.
Não haveria, portanto, nada que pudesse ter sido feito por elas.
As Crisalianças são mantidas nas entradas de grandes árvores consideradas sagradas nas terras de Caligo, onde permanecem protegidas durante meses. Fariletas experientes costumam observá-las atentamente e afirmam conseguir reconhecer, pelo tempo transcorrido e por seu olhar inquisidor, quando uma transformação não terá sucesso.
Quando chegam a essa conclusão, derramam sobre a Crisaliança um líquido que endurece sua superfície definitivamente.
Aquelas das quais uma Farileta emerge deixam para trás apenas a lembrança do ritual. As que nunca se abrem, entretanto, permanecem intactas e tornam-se objetos extremamente valiosos, guardados como tesouros pelas Fariletas.
Seu valor ultrapassa os limites de Caligo. Crisalianças são utilizadas como mercadoria para obter recursos de outros povos e, principalmente, para sustentar a presença das Formilitares que auxiliam na defesa de seu território. Por isso, Fariletas são extremamente cuidadosas com sua coleção.
E possuem bons motivos.
Poucas coisas atraem mais rapidamente a atenção de Baratunos e Cucarachas do que descobrir onde uma Farileta guarda suas Crisalianças.`;
const descricaoFarileta = `Nada escapa ao olhar das Fariletas. Os enormes olhos representados em suas asas podem parecer assustadores, mas aqueles que convivem com elas costumam considerar muito mais intimidador o verdadeiro Olhar Inquisidor.
Fariletas possuem uma capacidade visual extraordinária. Conseguem observar o ambiente em diferentes ângulos, identificar padrões quase imperceptíveis na natureza e enxergar espectros de luz invisíveis para muitos outros insetos. Segundo elas, essa percepção também permite algo ainda mais importante: descobrir quem um inseto realmente é.
Basta olhar.
Por isso, Fariletas raramente hesitam em dizer exatamente o que enxergam em alguém. Afirmam ser capazes de perceber o mal escondido nas criaturas, em seus comportamentos e até em características de seus próprios corpos.
Os chifres das Julgartas são um exemplo. Para as Fariletas, elas nascem com essas estruturas como sinal de que ainda carregam um fardo que as impede de alcançar a Terra das Flores Douradas. Somente uma vida de rígida obediência à Palavra da Vida pode prepará-las para o momento em que finalmente removerão esse peso durante o Ritual da Aliança e estarão prontas para a verdadeira Grande Transformação.
Nas terras de Caligo, o julgamento das Fariletas possui força muito maior que uma simples opinião.
Elas governam as comunidades estabelecidas em seu território e decidem conflitos através de julgamentos raramente contestados. As Fariletas mais antigas e influentes formam a Grande Aliança, responsável por determinar os rumos de Caligo e interpretar aquilo que seus extraordinários olhos revelam.
Sua influência também ultrapassa as fronteiras.
Ao viajar para outras regiões, Fariletas frequentemente carregam consigo valiosas Crisalianças. Sua riqueza permite estabelecer alianças com líderes estrangeiros, oferecer recursos e auxílio e conquistar privilégios em troca de favores. Algumas tornam-se tão influentes que passam a exercer grande poder mesmo sobre comunidades muito distantes de sua terra natal.
Mas talvez nenhuma visão das Fariletas seja mais importante que aquela que possuem da própria Terra das Flores Douradas.
Segundo elas, essa terra não existe em algum lugar distante. Ela ocupa exatamente o mesmo mundo que Caligo, mas permanece escondida em outro espectro, invisível aos olhos daqueles incapazes de percebê-la. Uma Farileta precisa apenas mudar sua maneira de enxergar para contemplá-la.
Em determinados momentos do dia, porém, os dois lugares se aproximam. A luz dourada atravessa Caligo e permite que as Julgartas realizem seus rituais mais próximas da terra que esperam alcançar depois da Grande Transformação.
A Grande Aliança afirma enxergar ainda outra verdade.
A Terra das Flores Douradas não termina nas fronteiras de Caligo.
Ela continua pelas terras vizinhas.
Por isso, segundo as Fariletas, Caligo também deverá continuar avançando até que suas fronteiras finalmente coincidam com aquilo que elas conseguem enxergar.
A esse futuro inevitável dão o nome de Grande Caligo.`;
const descricaoSalikarta = `Salikartas são ensinadas desde a infância sobre a Palavra da Vida e seguem seus ensinamentos à risca, acreditando que somente através da obediência absoluta estarão preparadas para a Grande Transformação. Diferentemente de outras lagartas, sabem que nem todo inseto é capaz de passar por ela e, por isso, são bastante seletivas ao decidir com quem compartilhar seus ensinamentos.
Isso acaba fazendo pouca diferença.
A aparência das Salikartas faz com que poucos insetos tenham coragem de se aproximar. Seus numerosos falsos espinhos vermelhos são frequentemente confundidos com estruturas venenosas, apesar das próprias Salikartas insistirem que são completamente inofensivos.
O problema é que as Salikartas realmente são venenosas.
Sua rigorosa alimentação, determinada pelas doutrinas da Palavra da Vida, torna seus corpos tóxicos. Predadores que tentam devorá-las podem terminar gravemente envenenados, assim como inimigos que as ferem durante um confronto. Naturalmente, isso apenas reforça entre outros insetos a crença de que o veneno está nos espinhos.
As Salikartas mantêm uma guerra interminável contra as Julgartas pela posse de Caligo. Segundo suas histórias, o território pertenceu originalmente a elas, até que foram expulsas após um grande ataque das Formilitares. Desde então, permanecem espalhadas pelas regiões ao redor de Caligo, tornando qualquer tentativa de expulsá-las particularmente difícil: mesmo quando uma Salikarta é morta, seu agressor pode acabar envenenado durante o confronto.
Apesar de terem perdido o território, jamais se afastam da região.
As Salikartas acreditam que a Terra das Flores Douradas um dia começará a brotar em algum lugar próximo de Caligo e, a partir dali, suas flores se espalharão por todo o mundo. As Profeletas afirmam que isso somente acontecerá quando as Julgartas não estiverem mais naquela terra.
Quando esse dia chegar, segundo elas, as flores finalmente poderão se expandir e todos os insetos poderão compartilhá-las juntos.`;
const descricaoCrisaaba = `Nas regiões ao redor de Caligo existe um lugar sagrado para as Salikartas. Ali, enormes cipós cresceram entrelaçados de tal maneira que, quando observados à distância, parecem formar um gigantesco casulo natural.
O lugar é conhecido como Cipó-Pupa.
Toda Salikarta é aconselhada a alimentar-se bem quando sente que sua Grande Transformação se aproxima e, quando finalmente estiver preparada, iniciar uma peregrinação até o Cipó-Pupa. Ao chegar, escala seus enormes cipós em busca de um espaço onde possa se fixar e formar sua própria Crisaaba.
O resultado transformou o lugar em uma paisagem difícil de encontrar em qualquer outra região.
Centenas de Crisaabas permanecem presas aos cipós, espalhando seus padrões escuros e dourados por toda a estrutura. Mesmo insetos que não seguem a Palavra da Vida costumam considerar o Cipó-Pupa um dos lugares mais belos que podem visitar.
Uma Salikarta permanece dentro de sua Crisaaba por pelo menos um ano. Não existe, entretanto, um período máximo conhecido. Entre elas, acredita-se que quanto mais longa for a transformação, maior será a sabedoria da criatura que um dia emergirá.
Apesar da guerra constante nas regiões próximas de Caligo, insetos de diferentes espécies ainda fazem longas viagens para contemplar o Cipó-Pupa. Os mais afortunados podem até presenciar o raro momento em que uma Crisaaba finalmente se abre.
A beleza do lugar, entretanto, deve ser apreciada com certa distância.
Salikartas continuam perigosamente tóxicas durante sua transformação e, ocasionalmente, uma Crisaaba libera ao redor de si uma pequena quantidade de gás venenoso. Com centenas delas concentradas no mesmo lugar, aproximar-se demais pode transformar uma peregrinação contemplativa em um acidente bastante desagradável.
Isso não impede os mais curiosos.
Nenhuma Crisaaba possui exatamente os mesmos padrões dourados de outra. Alguns visitantes acreditam que essas formas escondem mensagens que podem ser lidas, e passam horas observando-as na tentativa de encontrar algum significado.
Os mais corajosos chegam ainda mais perto.
Nem todos consideram a mensagem que encontram digna do risco.`
const descricaoProfeleta = `Profeletas estão entre as mais majestosas das borboletas. Suas enormes asas são maiores que as de qualquer outra espécie conhecida e fazem com que dificilmente passem despercebidas. Elas governam boa parte dos territórios ao redor de Caligo, procurando manter a estabilidade das comunidades e preservar a convivência entre os diferentes insetos que habitam a região.
Seus olhos são capazes de enxergar espectros de luz invisíveis para muitas outras criaturas. Segundo as Profeletas, essa capacidade permite perceber padrões e mensagens escondidos pela própria natureza.
Nenhum lugar parece revelar tantas mensagens quanto as Crisaabas.
Depois da Grande Transformação, uma Profeleta costuma reunir outros insetos para contar aquilo que afirma ter compreendido durante o período em que permaneceu dentro de sua Crisaaba. Também interpreta os padrões encontrados em outras delas, tratando suas formas como mensagens que podem revelar acontecimentos do passado, advertências sobre o futuro, conselhos e novas interpretações da Palavra da Vida.
Nem sempre é fácil compreender aquilo que uma Profeleta anuncia.
Algumas mensagens são simples e diretas. Outras são tão enigmáticas que podem ser discutidas durante anos sem que se chegue a um consenso sobre seu verdadeiro significado. Por acumularem e interpretarem essas revelações, as Profeletas são consideradas por muitos insetos as grandes guardiãs do conhecimento.
A Grande Transformação elimina os falsos espinhos que tornavam as Salikartas tão assustadoras, mas não elimina sua toxicidade. Profeletas continuam venenosas, embora sua aparência majestosa faça com que sejam muito mais facilmente aceitas e ouvidas por outros insetos.
Algumas utilizam essa característica de maneira bastante extrema.
Há Profeletas que interpretam suas revelações como um chamado para libertar Caligo e, por isso, juntam-se aos confrontos contra as Julgartas. Não são guerreiras particularmente habilidosas, mas derrotar uma delas pode ter um preço alto: seu corpo continua venenoso, e um inimigo que a morde ou fere durante o combate pode morrer pouco depois de conseguir sua vitória.
Nem todos acreditam que as mensagens das Profeletas realmente venham da natureza. Alguns afirmam que seus padrões podem ser interpretados de inúmeras maneiras e que as próprias Profeletas enxergam neles aquilo que esperam encontrar.
Ainda assim, algumas de suas profecias mais conhecidas aparentemente se realizaram, tornando difícil ignorá-las completamente.
Entre todas, nenhuma é repetida com tanta convicção quanto aquela que anuncia o futuro surgimento da Terra das Flores Douradas.
Para as Profeletas, existe uma evidência bastante simples de que esse acontecimento ainda está por vir:
ninguém jamais encontrou a Terra das Flores Douradas.
Se ela não existe em nenhum lugar do mundo presente, dizem elas, então só pode existir no mundo que ainda está por vir.`
const descricaoMaligarta= `Maligarta é o nome pelo qual são conhecidas entre os outros insetos. Entre si, porém, elas se chamam Amigartas.
São criaturas quase completamente evitadas pelas demais comunidades. Segundo as Fariletas, as Maligartas são amaldiçoadas e descendem dos insetos alados que, nas antigas histórias, traíram a Palavra da Vida. Sua aparência seria uma manifestação dessa corrupção: o corpo negro representaria as trevas, os longos chifres revelariam o tamanho de sua maldade e os inúmeros espinhos carregariam veneno. Dizem ainda que realizam rituais profanos, produzem sons e vibrações malignas e, contrariando a ordem natural, realizam sua transformação debaixo da terra em vez de passar pela Grande Transformação.
Pouco disso é verdade.
As Maligartas realmente podem ser venenosas quando ingeridas ou feridas, mas isso é consequência de sua alimentação extremamente restrita, que faz com que substâncias tóxicas se acumulem em seu corpo. Seus espinhos, apesar da aparência ameaçadora, não possuem veneno.
A ironia é que dificilmente poderia existir um grupo mais dedicado à Palavra da Vida.
Desde muito jovens, as Amigartas são ensinadas a seguir seus ensinamentos com absoluta rigorosidade. Isso determina o que podem comer, como devem se comportar e até como devem conviver umas com as outras. Para evitar que costumes considerados inadequados contaminem sua comunidade, vivem em grupos isolados. A má fama que possuem entre os demais insetos acaba favorecendo esse isolamento: enquanto os outros não querem se aproximar delas, as próprias Amigartas também preferem manter distância.
Sua disciplina inclui longos períodos de jejum, às vezes durante vários dias. Como consequência, seu crescimento é lento e a Grande Transformação demora muito mais para chegar. Isso não é considerado um problema. Permanecer por mais tempo como Amigarta faz parte de sua formação, dando a cada uma tempo suficiente para aprender a viver de maneira perfeita segundo a Palavra da Vida.
Quando acreditam ter cometido uma falta, podem impor punições a si mesmas. Algumas envolvem privação e esforço; outras chegam a causar sofrimento físico, como permanecer expostas ao sol por longos períodos. Uma Amigarta que desobedeça repetidamente aos ensinamentos ou cometa uma transgressão grave diante da comunidade pode ser expulsa, sendo obrigada a continuar sua vida sozinha.
Apesar do que dizem sobre elas, as Amigartas não realizam sua transformação debaixo da terra.
Grande parte dessa crença surgiu por causa de uma infeliz semelhança. O Maligroso, uma pupa pertencente a outra criatura, possui características muito semelhantes às das Maligartas e muitos insetos passaram a acreditar que aquela seria a forma assumida pelas Maligartas durante sua transformação. A verdadeira crisálida das Amigartas, a Serpétrea, raramente é reconhecida como tal. Sua aparência lembra de maneira tão convincente uma serpente ameaçadora que os insetos que a encontram geralmente preferem fugir a ver o que é.
A confusão é especialmente perturbadora para aqueles que conhecem as antigas histórias da Palavra da Vida. Segundo seus ensinamentos, entre os insetos alados que traíram a Palavra havia uma lagarta que recebeu uma punição terrível:
a lagarta traidora foi transformada em uma lagarta-serpente.
E criaturas assim realmente existem.`;
const descricaoSerpetrea= `De acordo com a história inicial da Palavra da Vida, duas lagartas receberam o mesmo ensinamento: deveriam segui-lo rigorosamente para que, um dia, desenvolvessem enormes asas e uma visão extraordinária, capazes de conduzi-las até a harmoniosa e fértil Terra das Flores Douradas.
A lagarta clara seguia cada ensinamento corretamente. A lagarta escura, porém, falhava constantemente e, por isso, acabou amaldiçoada e transformada em uma serpente.
Tomada pela inveja, a serpente cometeu então sua maior transgressão: engoliu a lagarta clara.
Mas a lagarta clara havia seguido corretamente a Palavra da Vida e recebeu sua recompensa. Em vez de morrer, continuou se desenvolvendo dentro da barriga da serpente. Foi ali que ocorreu a primeira Grande Transformação. Quando seu desenvolvimento terminou, rompeu o corpo da serpente e emergiu com suas longas asas e a visão necessária para encontrar a Terra das Flores Douradas.
É essa passagem que as Amigartas reproduzem em sua própria Grande Transformação.
Quando uma Maligarta está pronta, afasta-se de sua comunidade e peregrina até um lugar isolado. Ali forma ao redor do próprio corpo a Serpétrea, uma crisálida cuja aparência lembra a cabeça ameaçadora de uma serpente. Dentro dela, permanece durante seu longo desenvolvimento, simbolicamente enfrentando e superando a mesma criatura que um dia tentou impedir a primeira Grande Transformação.
A aparência da Serpétrea também possui uma função prática. Pendurada e completamente imóvel nos galhos, sua forma serpentina intimida predadores e insetos curiosos, mantendo-os afastados durante o período em que a Maligarta está indefesa. Mesmo quando a intimidação falha, sua alimentação anterior ainda oferece uma última proteção: se a Serpétrea for devorada ou gravemente ferida, aquele que a atacou pode acabar envenenado.
Isso, porém, raramente acontece. Poucos insetos se arriscam a tocar em algo que parece uma serpente prestes a atacar.
A história da Palavra da Vida conta ainda o destino da verdadeira lagarta-serpente. Depois de morta, seu corpo foi soterrado. A terra ao seu redor tornou-se amaldiçoada e formou sobre ela uma pupa negra, venenosa e coberta de espinhos. Dessa transformação profana teria surgido a grande inimiga alada.
Por esse motivo, quando a Grande Transformação termina e a Maligarta finalmente emerge da Serpétrea, ela não abandona a antiga crisálida.
Seu primeiro alimento é a própria Serpétrea.
Ao devorar aquilo que representou a serpente, impede que seus restos alcancem o solo e repete simbolicamente a vitória da primeira lagarta sobre o mal.
Para elas, deixar uma Serpétrea apodrecer sobre a terra significaria permitir que aquilo que foi vencido retornasse à terra e pudesse contaminá-la novamente.`;
const descricaoTrevoleta= `Trevoleta é o nome pelo qual são conhecidas entre os outros insetos, uma referência à sua coloração completamente negra e à suposta ligação que possuem com as trevas. Entre si, porém, elas se chamam Ressuletas, nome que representa a vitória sobre a morte após sobreviverem à serpente devoradora durante a Grande Transformação.
Ao emergir da Serpétrea, uma Ressuleta recebe uma missão clara segundo a Palavra da Vida: encontrar os lugares-chave e prepará-los para o futuro nascimento da Terra das Flores Douradas.
Com seus grandes olhos brancos e sua visão extraordinária, grupos de Ressuletas percorrem o mundo em busca desses lugares. Quando encontram um deles, permanecem ali durante algum tempo, trabalhando em sua preparação. Quando consideram sua tarefa concluída, partem juntas em busca do próximo.
Poucos insetos, entretanto, enxergam suas peregrinações dessa maneira.
Existe um profundo preconceito em torno das Trevoletas, cuja aparência é frequentemente associada às antigas descrições das Mortiposas, descendentes da inimiga alada mencionada na Palavra da Vida. As Fariletas não cometem essa confusão. Para elas, as Trevoletas são borboletas traidoras que abandonaram o verdadeiro significado da Palavra e passaram a servir às Mortiposas.
Por isso, a chegada de um grupo de Trevoletas costuma provocar medo. Muitos insetos abandonam temporariamente os lugares onde elas começam seus trabalhos, receosos do que possa acontecer ali.
Quando finalmente retornam, porém, encontram algo difícil de conciliar com tudo aquilo que ouviram.
O lugar geralmente está melhor do que antes.
A terra pode estar mais fértil, os recursos mais abundantes e o ambiente mais favorável à vida. Para alguns, isso é suficiente para começar a questionar as histórias sobre elas.
Para as Fariletas, não.
Segundo seus ensinamentos, melhorar esses lugares faz parte da própria enganação. Afinal, a grande inimiga alada é conhecida como a Rainha da Enganação. Se suas seguidoras desejassem conquistar a confiança dos outros insetos, nada seria mais eficiente do que realizar boas ações diante deles.
Diferentemente das Amigartas, as Ressuletas não procuram se manter afastadas das demais criaturas. Após a Grande Transformação, consideram que a Palavra da Vida já está solidificada dentro delas e, portanto, não temem mais que os maus comportamentos de outros insetos possam desviá-las de seu caminho. Ainda assim, são poucos os que estão dispostos a permanecer próximos o bastante para descobrir isso.
Muitas histórias continuam circulando a seu respeito. Dizem que as Trevoletas são criaturas noturnas, que não suportam permanecer muito tempo sob a luz do sol, que seus olhos brancos enxergam coisas que deveriam permanecer ocultas e que sua presença anuncia acontecimentos terríveis.
Trevoletas podem ser vistas trabalhando tranquilamente durante o dia. Podem conversar amigavelmente com quem se aproxima. Podem deixar para trás lugares melhores do que aqueles que encontraram.
Nada disso parece suficiente.
Para aqueles que já acreditam que elas servem à Rainha da Enganação, qualquer demonstração de que não são malignas pode ser interpretada apenas como prova de que sabem esconder muito bem sua verdadeira natureza.`;
const descricaoClerigarta = '';
const descricaoConclavida = '';
const descricaoCleroleta = '';
const descricaoPontiarca = '';

const descricaoPulguito = `Pulguitos nascem em famílias tão numerosas que dificilmente conseguem lembrar quem são todos os seus irmãos — e, às vezes, nem mesmo os nomes deles.
Isso pouco importa. Entre os Pulgordos, toda a comunidade participa da criação dos filhotes. Pulguitos tratam praticamente qualquer adulto como se fosse um de seus pais, enquanto os mais velhos chamam qualquer Pulguito de filho, independentemente de quem realmente pertença à sua família.
De natureza alegre e brincalhona, passam grande parte do dia correndo, explorando e brincando por toda a comunidade. Em muitos territórios, o som de seus gritos, risadas e pequenas patas correndo de um lado para o outro é considerado uma maneira bastante confiável de medir a felicidade da população.
Por isso, mesmo as lideranças menos preocupadas com o bem-estar dos Pulgordos costumam fazer questão de proporcionar aos Pulguitos a melhor infância possível.
Existe uma razão muito prática para isso.
Quando crescem felizes, bem alimentados e protegidos, Pulguitos desenvolvem corpos grandes e arredondados e tornam-se Pulgordos. Quando passam a infância com pouco alimento, sem abrigo adequado ou em condições ruins, porém, seus corpos permanecem mais magros e pequenas asas começam a surgir em suas costas.
É o primeiro sinal de que aquele Pulguito se tornará um Pulgante.
Pulguitos alados crescerão inquietos, questionadores e rebeldes e, mais cedo ou mais tarde, provavelmente abandonarão o território onde nasceram. Para muitas lideranças, poucas coisas são tão preocupantes quanto perceber pequenas asas aparecendo nas costas das crianças de sua população.
Curiosamente, os Pulguitos possuem uma enorme capacidade de adaptação. Mesmo quando nascem em comunidades cruéis, onde Pulgordos são mantidos como escravos ou criados como alimento por insetos predadores, rapidamente aprendem a considerar aquela realidade normal.
Mas existem coisas às quais nem mesmo um Pulguito consegue se acostumar.
Falta de comida, ausência de abrigo e, principalmente, não poder brincar.
Quando uma comunidade enfrenta uma crise e pequenos pares de asas começam a aparecer por toda parte, é comum que suas lideranças tomem medidas desesperadas para acalmar os Pulguitos enquanto procuram uma solução para os problemas do território.
Uma das mais conhecidas é chamar os famosos circos de Saltimbulgas.
Poucas coisas conseguem fazer uma comunidade de Pulguitos esquecer seus problemas tão rapidamente.
Pulguitos adoram Saltimbulgas.`;
const descricaoPulgordo = `Pode-se dizer que o mundo pertence aos Pulgordos. Eles estão entre os insetos mais numerosos e abundantes que existem, espalhados por praticamente todos os lugares e convivendo lado a lado com as mais diferentes espécies. Dependendo de onde vivem, podem ser trabalhadores, aliados, vizinhos, escravos ou, em alguns casos, até mesmo comida.
Pulgordos são extremamente pacíficos, facilmente manipuláveis e trabalhadores incansáveis, apesar de sua aparência lenta e desajeitada. Não possuem grandes ambições. Tudo o que esperam é encontrar um lugar seguro onde possam se alimentar, trabalhar e criar suas numerosas famílias.
São capazes de realizar praticamente qualquer trabalho braçal em troca de alimento e abrigo, embora seja especialmente comum encontrá-los trabalhando como agricultores. Existe até a crença de que o tamanho dos Pulgordos revela a prosperidade de uma comunidade: quanto mais gordos eles forem, melhores provavelmente são as condições daquele lugar.
As Formilitares mantêm uma aliança perpétua com incontáveis populações de Pulgordos. Em praticamente todos os territórios sob seu domínio, eles constituem grande parte da população e recebem proteção em troca de seu trabalho. Sua presença é tão aceita entre as Formilitares que os Pulgordos possuem acesso até mesmo aos túneis protegidos abaixo das trincheiras.
Nem todos, porém, encontram lugares tão seguros para viver.
Sua natureza pacífica faz deles presas extremamente fáceis. Vespaleiros frequentemente os capturam para utilizá-los como escravos, enquanto algumas espécies mantêm verdadeiras fazendas de Pulgordos, oferecendo alimento e abrigo para que suas populações cresçam antes de, ocasionalmente, devorar alguns deles.
Estranhamente, nem mesmo isso costuma ser suficiente para fazê-los abandonar um território.
Enquanto houver alimento, algum abrigo e espaço para continuar criando suas famílias, os Pulgordos permanecerão por perto.
E continuarão se multiplicando.`;
const descricaoPulgante = `Quando as condições de uma comunidade começam a piorar, algo curioso acontece entre os Pulgordos. Alguns Pulguitos passam a crescer de maneira diferente: seus corpos tornam-se mais magros e grandes asas começam a se desenvolver. É assim que surgem os Pulgantes.
Ao contrário dos pacíficos e trabalhadores Pulgordos, Pulgantes são inquietos, reclamões e possuem enorme aversão ao trabalho. Dificilmente aceitam em silêncio aquilo que consideram injusto e sua natureza rebelde frequentemente acaba provocando revoltas não apenas entre os Pulgordos, mas também entre outros insetos insatisfeitos da comunidade.
Por esse motivo, Pulgantes costumam estar entre os primeiros a serem perseguidos ou utilizados como exemplo por lideranças cruéis. Isso raramente resolve o problema. Outros Pulgantes aparecem, os Pulgordos começam a se agitar e aquilo que inicialmente parecia apenas a reclamação de alguns indivíduos pode terminar em uma grande revolução.
Quando o caos finalmente se instala, porém, os Pulgantes fazem aquilo que sabem fazer melhor.
Voam embora.
Grupos inteiros partem em busca de lugares mais tranquilos e prósperos onde possam se estabelecer. Curiosamente, apesar de sua fama de rebeldes e encrenqueiros, Pulgantes migratórios costumam ser recebidos com toda a hospitalidade possível. Muitas comunidades chegam a convidá-los para permanecer definitivamente.
Todos conhecem a razão.
Quando encontram alimento abundante, segurança e boas condições de vida, seus descendentes deixam de desenvolver asas. A geração seguinte será formada principalmente pelos dóceis, trabalhadores e numerosos Pulgordos.
Os próprios Pulgantes sabem disso e costumam explicar a história de seu povo através de um antigo ditado:
“Lugares fáceis criam Pulgordos. Pulgordos demais fazem lugares difíceis. Lugares difíceis geram Pulgantes. E Pulgantes encontram lugares fáceis.”
E então tudo começa novamente.`;

const descricaoSerpreita= `A vida de uma Serpreita, assim como a de toda a sua linhagem, é marcada pela solidão.
Os ovos de sua espécie são depositados muito distantes uns dos outros, reduzindo ao máximo a possibilidade de encontro entre indivíduos. Desde o momento em que nasce, uma Serpreita precisa viver sozinha, aprender sozinha e, principalmente, sobreviver sozinha.
Para uma criatura tão vulnerável, sua aparência é sua maior vantagem.
A Serpreita não possui veneno, espinhos perigosos ou qualquer outra defesa capaz de enfrentar diretamente um predador. Por isso, passa grande parte da vida entre os galhos, onde sua aparência de serpente pode ser utilizada para intimidar qualquer criatura que se aproxime.
Quando percebe uma ameaça, ergue a parte dianteira do corpo e assume uma postura agressiva. Seus enormes olhos de serpente são apenas marcas, mas tornam o disfarce bastante convincente. A Serpreita permanece imóvel, como se estivesse observando o invasor e esperando apenas que ele se aproxime um pouco mais.
Na maioria das vezes, isso basta.
Entre outros insetos, a intimidação é ainda mais eficiente por causa das histórias da Palavra da Vida. Muitos acreditam reconhecer imediatamente naquela criatura a lagarta-serpente das antigas histórias e preferem fugir antes de descobrir se aquilo diante deles realmente é capaz de atacar.
Não é.
Ao contrário do que contam as histórias, a Serpreita não é uma predadora. Sua anatomia sequer permitiria que engolisse outro inseto como a lendária serpente devoradora. Também não conhece a Palavra da Vida, não sabe que aparece em histórias religiosas e não faz ideia do significado que sua aparência possui para grande parte dos outros insetos.
Existe ainda outra razão que torna difícil desfazer essa crença: Serpreitas não conseguem se comunicar com a maioria dos insetos.
Sua comunicação é compreendida apenas por outras mariposas. Para isso, produzem fortes vibrações através de um órgão exposto que, quando projetado, lembra uma língua bifurcada. Para outras mariposas, essas vibrações carregam informação. Para um inseto que já acredita estar diante de uma serpente amaldiçoada, porém, a criatura erguer o corpo, exibir uma "língua" bifurcada e começar a produzir vibrações incompreensíveis dificilmente ajuda a esclarecer o mal-entendido.`;
const descricaoMaligroso= `Quando uma Serpreita está pronta para se transformar, abandona os galhos onde passou a maior parte da vida, desce até o solo e cava um buraco. É ali, escondida sob a terra, que se transforma no Maligroso.
A transformação subterrânea oferece proteção durante uma das fases mais vulneráveis de sua vida. O Maligroso permanece praticamente imóvel, mas não está completamente indefeso. Sua superfície é coberta por numerosos espinhos, que dificultam que seja engolido por predadores, e, quando perturbado, consegue produzir de dentro da pupa uma forte e assustadora vibração. Na maioria das vezes, isso é suficiente para convencer uma criatura curiosa a deixá-lo em paz.
Existe, porém, uma proteção adicional que não pertence verdadeiramente ao Maligroso.
Sua aparência lembra extraordinariamente a das Maligartas: o corpo negro, os dois longos chifres, os espinhos e os pequenos detalhes vermelhos e brancos fazem com que muitos insetos acreditem que aquela seja a verdadeira crisálida delas. Como as Maligartas são conhecidas por acumularem veneno no corpo, espalhou-se também a crença de que os espinhos do Maligroso são venenosos e que devorá-lo seria fatal.
Nada disso é verdade, mas poucos predadores estão dispostos a descobrir.
A semelhança possui consequências muito maiores do que simplesmente afastar animais famintos. A forma do Maligroso é assustadoramente próxima daquela atribuída pela Palavra da Vida à pupa amaldiçoada da grande Inimiga Alada. Por isso, encontrar um deles é considerado por muitos insetos um terrível sinal de mau agouro.
A associação tornou-se tão forte que corpos negros acompanhados por dois chifres longos, espinhos e detalhes vermelhos ou brancos são imediatamente relacionados ao Maligroso, mesmo quando pertencem a criaturas completamente diferentes.
Existe ainda um problema particularmente inconveniente: segundo a tradição, um Maligroso encontrado jamais deve ser enterrado novamente.
Afinal, foi sob a terra que a pupa amaldiçoada teria se formado. Enterrá-la significaria ajudá-la a completar sua transformação.
Assim, um inseto aterrorizado pode encontrar um Maligroso exposto, recusar-se a tocá-lo e seguir seu caminho. O próximo encontra a mesma criatura. Depois outro. E outro. Aquilo que deveria permanecer escondido durante todo o desenvolvimento acaba acumulando histórias simplesmente porque ninguém quer ser responsável por colocá-lo de volta no solo.
Para os Aracromantes, porém, a situação é completamente diferente.
Como não seguem a Palavra da Vida, eles não enxergam o Maligroso como sinal de azar. Pelo contrário: encontrar um deles é considerado uma excelente oportunidade. O Maligroso pode ser levado para seus territórios e utilizado em diferentes rituais. Às vezes, alguns de seus espinhos são removidos para outros usos, algo que, apesar da aparência brutal, não impede o desenvolvimento da criatura protegida em seu interior.
Em um desses rituais, o Maligroso é mantido intacto e os participantes simplesmente aguardam.
Eles precisam assistir àquilo que nascerá de dentro dele.
Quando finalmente ocorre a transformação, emerge uma criatura cujo rosto, por uma estranha coincidência, possui certa semelhança com o das Barântulas.
Para os seguidores da Palavra da Vida, aquilo parece confirmar um dos acontecimentos mais terríveis de suas histórias.
Para os Aracromantes, significa exatamente outra coisa.
Diante da criatura que abandona o corpo imóvel no qual permaneceu encerrada, eles contemplam aquilo que consideram uma das manifestações mais puras do ciclo natural:
a morte.`;
const descricaoMortiposa= `Assim como a Serpreita, a Mortiposa é incapaz de se comunicar com insetos que não sejam mariposas. Sua comunicação ocorre através das mesmas vibrações que, para outras espécies, soam estranhas e assustadoras.
Sua vida também preserva a solidão característica de toda a linhagem. Mortiposas não formam comunidades e raramente procuram umas às outras. O contato entre indivíduos acontece principalmente durante a reprodução e, depois disso, cada uma volta ao seu próprio caminho. A fêmea perpetua esse modo de vida depositando seus ovos em locais muito distantes uns dos outros, garantindo que as novas Serpreitas também comecem suas vidas sozinhas.
Apesar da aparência ameaçadora, Mortiposas não são grandes combatentes. Possuem longas garras afiadas e certamente podem utilizá-las quando necessário, mas é provável que muitas passem a vida inteira sem precisar delas para se defender.
Isso acontece graças a uma capacidade extraordinária que nem mesmo os outros insetos compreendem.
A Mortiposa consegue liberar ao redor do próprio corpo um odor que interfere na maneira como é percebida. Sob seu efeito, pode entrar em territórios ocupados, caminhar entre seus habitantes e procurar tranquilamente aquilo de que precisa. Os insetos ao redor não fogem aterrorizados nem ficam paralisados. Simplesmente não a reconhecem como algo que exija uma reação.
Assim, uma Mortiposa pode atravessar uma comunidade inteira, alimentar-se e partir voando sem que ninguém tente verdadeiramente impedi-la.
Depois que o efeito passa, entretanto, permanecem lembranças estranhas.
Os insetos recordam que alguma coisa esteve ali. Uma figura magra, alada, com algo branco no rosto. Lembram-se de tê-la visto passar diante deles e, mais perturbador ainda, lembram-se de que nada fizeram.
Não estavam paralisados.
Não estavam escondidos.
Talvez nem estivessem com medo.
Simplesmente deixaram que ela passasse.
Esses relatos alimentam ainda mais as histórias sobre a presença constante da Inimiga Alada. Segundo a Palavra da Vida, a Rainha da Enganação é capaz de ludibriar qualquer criatura e levá-la a permitir sua passagem e suas ações sem resistência.
Para quem conhece essas histórias, descobrir que uma figura semelhante às antigas descrições esteve dentro de sua comunidade e que ninguém tentou detê-la parece uma confirmação difícil de ignorar.
Por isso, comunidades visitadas por uma Mortiposa frequentemente se tornam mais suscetíveis aos ensinamentos da Palavra da Vida. Seus habitantes sabem que alguma coisa aconteceu. Sabem que uma criatura desconhecida caminhou entre eles. Alguns conseguem descrever suas asas, seu corpo negro e, principalmente, algo branco em seu rosto.
O que ninguém consegue explicar é por que simplesmente permitiram que ela estivesse ali.`;
const descricaoCarnicalha = `A Carniçalha vive nos territórios das Aracromantes, participando ativamente de sua cultura e compartilhando seus costumes, entre eles o de se alimentar exclusivamente de outros insetos. Normalmente, uma lagarta seria tratada como refeição ou sacrifício pelo Coven, mas uma Carniçalha que não cometa nenhuma transgressão é aceita como membro da comunidade.

Ela caça junto às Aracromantes, participa dos mesmos rituais de alimentação e ajuda a cuidar e proteger seus ninhos.

A Carniçalha veste-se com uma mortalha de seda que ela mesma produz, decorando-a com pedaços dos insetos mortos durante as refeições compartilhadas. É extremamente criteriosa e escolhe cuidadosamente cada peça que fará parte de sua mortalha. Por isso, poucas visões são tão aterradoras quanto uma pequena lagarta caminhando sob um enorme manto carregado de restos mortais.

Carniçalhas possuem grande apreço por decorações fúnebres e frequentemente são responsáveis por ornamentar as teias nas entradas dos territórios das Aracromantes. Cabeças, asas, pernas e outros restos são cuidadosamente posicionados como decoração e, principalmente, como aviso para quem se aproxima.

Ninguém sabe como essa estranha aliança começou, mas a Carniçalha tornou-se uma das poucas lagartas de mariposa conhecidas por viver em comunidade.`;
const descricaoMortume = `Quando envelhece e já não consegue carregar a enorme coleção de partes de insetos de sua mortalha, a Carniçalha reorganiza cuidadosamente seus restos e os prende com novas camadas de seda, formando uma espécie de casulo mortuário conhecido como Mortume.

Lá dentro, sua transformação ocorre lentamente. É uma das metamorfoses mais demoradas conhecidas, podendo levar anos para terminar. Durante esse tempo, o Mortume acaba incorporado às próprias decorações fúnebres do Coven das Aracromantes.

As Vudulhas costumam tecer novas teias ao seu redor, formando longas linhas onde penduram bonecos de gravetos, amuletos e outras pequenas decorações. Com o passar dos anos, é comum que todos simplesmente se acostumem com sua presença e quase se esqueçam de que ainda existe algo se transformando lá dentro.

Mas um dia as teias começam a tremer.

Os bonecos pendurados balançam, chocando-se uns contra os outros e produzindo estranhos sons e vibrações por todo o emaranhado. Para as Aracromantes, esse é o sinal de que o Mortume finalmente está próximo de se abrir.

O Coven então se reúne e aguarda ansiosamente pelo novo membro, preparando um grande ritual de renascimento.

Quando finalmente se rompe, o Mortume deixa para trás apenas sua velha pilha de restos, seda e decorações acumuladas durante anos.

Uma lembrança de que aquilo que foi esquecido nem sempre deixou de existir.`;
const descricaoDecreptera = `Um Coven de Aracromantes geralmente possui apenas uma ou, no máximo, duas Decrépteras. As fêmeas costumam ser mais robustas, com cores claras e desbotadas, enquanto os machos são mais magros e escuros, além de possuírem um padrão diferente no abdômen. Independentemente do sexo, as Decrépteras emergem do Mortume já extremamente velhas e cansadas — e, contraditoriamente, podem viver por muitos anos.

Diferentemente de quando era uma Carniçalha, a Decréptera possui uma alimentação predominantemente herbívora. Sua boca envelhecida e seu organismo já não lidam tão bem com a carne de outros insetos, tornando esse tipo de alimentação difícil e desgastante. Por isso, prefere folhas e outros alimentos vegetais, embora ainda coma insetos quando sua participação em algum ritual do Coven exige.

Também se tornam mais isoladas. Costumam construir seus abrigos no interior de árvores altas, onde recebem ocasionalmente a visita de membros do Coven. Raramente descem até a comunidade, fazendo isso principalmente durante cerimônias e dias ritualísticos.

A Decréptera exerce uma função especial entre as Aracromantes: utilizando restos dos mortos, ela é capaz de ler o futuro dos insetos e alertar o Coven sobre catástrofes e maus presságios. Diz-se que seus muitos anos vasculhando cadáveres lhe deram sabedoria suficiente para reconhecer, entre ossadas e restos mortais, os padrões ocultos do destino.

Uma única Decréptera pode acompanhar várias gerações do Coven. Por isso, muitas Aracromantes que recorrem aos seus conselhos sequer eram nascidas quando ela ainda caminhava entre elas como uma Carniçalha.

Sua fama ultrapassa os territórios das Aracromantes. Mesmo conhecendo os perigos de atravessá-los, alguns insetos de fora se arriscam até o abrigo de uma Decréptera na esperança de conhecer o próprio futuro.

Geralmente, a Decréptera aceita realizar a leitura em troca de alguma coisa. Ainda assim, procurar seus serviços nunca é totalmente seguro. Mesmo que ela própria já não tenha grande interesse em comer outros insetos, nada impede que considere o visitante uma oferenda adequada para algum ritual — ou simplesmente um bom jantar para as Aracromantes.`;
const descricaoMumifigarta = `É recomendado se afastar ao encontrar uma Mumifigarta ou mesmo sinais de sua presença. À primeira vista, parecem inofensivas, apesar da aparência desagradável. Movem-se pouco, passam longos períodos se alimentando no mesmo lugar e seguem lentamente para o próximo, sempre parcialmente enroladas em sua própria seda.

Mumifigartas não costumam demonstrar agressividade. O que assusta é seu comportamento peculiar. Podem permanecer quase imóveis por horas e, repentinamente, realizar movimentos rápidos e inesperados. Sua vocalização lembra os ruídos de um inseto agonizante, acompanhados ocasionalmente por uma risada lenta e perturbadora.

Mas não se engane pensando que isso as torna criaturas pouco inteligentes.

Mumifigartas nascem de dentro dos corpos de insetos mortos, e tudo em suas vidas parece girar em torno da morte. Durante boa parte da fase de lagarta, alimentam-se exclusivamente de plantas. Em algum momento, porém, esse comportamento muda.

A Mumifigarta escolhe um local e prepara uma armadilha com sua seda. Quando outro inseto fica preso, ela se aproxima lentamente e começa a envolvê-lo com novos fios, reforçando a armadilha até que qualquer tentativa de fuga se torne impossível.

Então espera.

Ela não mata sua presa. Permanece próxima, observando-a por dias, até que morra sozinha. Há relatos de Mumifigartas que parecem rir enquanto observam o inseto definhar.

Somente depois da morte ela se alimenta.

A Mumifigarta abre uma passagem no abdômen do cadáver, devora seu interior e entra no exoesqueleto vazio.`;
const descricaoSarcosulo = `Quando uma Mumifigarta está pronta para se transformar, ela captura um inseto maior que si e começa a preparar seu Sarcosulo.

Primeiro, envolve a vítima em uma espessa bolsa de seda. Depois, abre seu abdômen e se alimenta lentamente de seu interior, até que reste apenas o exoesqueleto vazio. A Mumifigarta então entra no cadáver e permanece ali para iniciar sua transformação.

O resultado possui duas camadas de proteção. Por fora, há um resistente invólucro de seda, difícil de romper. Por dentro, o exoesqueleto da própria vítima protege a criatura durante sua transformação. O conjunto é chamado de Sarcosulo.

Diz a lenda que abrir um Sarcosulo traz anos de azar. Por isso, mesmo quando encontrados aparentemente abandonados, poucos insetos ousam tocar neles.

Aqueles que abrem um encontram, sob a seda, uma criatura cadaverizada, imóvel dentro dos restos de sua vítima. Dizem que, se ela abrir os olhos e enxergar quem perturbou seu descanso, não importa para onde esse inseto fuja: jamais escapará daquilo que um dia sairá de lá.

Sarcosulos também podem ser encontrados abertos e vazios.

Esses são considerados ainda piores.

Afinal, significa que aquilo que estava lá dentro já saiu.

E talvez ainda esteja por perto.`;
const descricaoIsetyx = `Isetyx é um inseto feminino, alado, branco e de aparência fantasmagórica que vaga durante a noite. Durante o dia, permanece adormecida, despertando apenas quando a escuridão chega e começa sua busca por parceiros.

Apesar das grandes asas, seu voo é lento e cansado. Acredita-se que isso aconteça porque Isetyx não consegue se alimentar e passou tempo demais imóvel dentro de seu Sarcosulo.

Ela não possui boca. Tudo o que a mantém viva vem do alimento acumulado antes de sua transformação.

Por isso, uma Isetyx vive apenas alguns dias.

Mas isso não serve de consolo para os outros insetos. Para muitos, encontrar uma Isetyx é a última coisa que acontecerá em suas vidas.

A criatura possui um único objetivo durante sua curta existência: reproduzir.

Quando a noite chega, Isetyx começa a liberar um poderoso feromônio pelo ambiente. Machos de diversas espécies conseguem percebê-lo a grandes distâncias e parecem incapazes de ignorar seu chamado. Mesmo sem saber exatamente o que procuram, seguem o rastro até encontrá-la.

Quando um possível parceiro finalmente se aproxima, Isetyx abre suas grandes asas brancas e se movimenta lentamente sob a luz da lua. Sua aparência apenas reforça a impressão de encantamento, mas é o perfume liberado por seu corpo que torna sua presença praticamente irresistível.

O inseto aceita seu chamado e os dois acasalam naquela mesma noite.

Ele não verá o amanhecer.

O parceiro morre durante a noite nupcial, e Isetyx deposita um ovo em seu corpo. Ali ele permanece adormecido, cercado pelo alimento que um dia poderá sustentar uma nova Mumifigarta.

Isetyx então parte imediatamente em busca do próximo parceiro. Não há descanso: cada noite pode ser sua última.

Algumas produzem armadilhas de seda para dificultar a fuga daqueles que conseguem resistir ao chamado. Outras utilizam o círculo de seda preso entre suas antenas para refletir a luz da lua, tornando-se ainda mais fáceis de encontrar na escuridão.

Mas armadilhas raramente são necessárias.

Dizem que, depois de sentir o perfume de uma Isetyx, poucos insetos conseguem abandonar sua busca. Quando finalmente a encontram de asas abertas sob a luz da lua, muitos acreditam ter sido sua beleza que os levou até ali.

Não sabem que já estavam seguindo seu chamado muito antes de vê-la.`;
const descricaoErubis = `Erubis é uma figura misteriosa entre os insetos. Embora seja o macho de sua linhagem, não possui órgãos reprodutores, fazendo com que Isetyx precise buscar parceiros entre outros insetos.

Erubis voa por diferentes lugares coletando diversas substâncias da natureza, como pólen das flores, açúcares de frutas fermentadas e outros materiais encontrados em cadáveres. Ele reúne tudo o que encontra e carrega consigo parte dessas substâncias, inclusive na boca. Estranhamente, nunca parece se alimentar, utilizando a boca apenas para transportar aquilo que coleta.

Nenhum inseto jamais viu Erubis matar alguém. Ainda assim, é comum encontrá-lo revirando cadáveres, o que frequentemente levanta suspeitas sobre o ocorrido e alimenta histórias sobre sua responsabilidade por aquelas mortes.

Erubis é capaz de reconhecer o cheiro deixado por uma Isetyx. Ele não copula com ela, mas observa o acasalamento à distância e espera até que a fêmea deposite seu ovo no corpo do parceiro morto.

Somente então Erubis se aproxima.

Ele encontra o ovo dentro do cadáver e começa a utilizar as substâncias que coletou, preparando alguma coisa em seu interior. Ninguém sabe exatamente o que ele faz ali.

Dizem que, seja lá qual for o procedimento realizado por Erubis, é ele que permite ao ovo finalmente eclodir. Enquanto nenhum Erubis aparece, o ovo permanece adormecido dentro do cadáver.

É como se somente ele fosse capaz de trazer uma Mumifigarta à vida.`;
const descricaoFalsilha = `O ciclo inteiro da linhagem da Falsilha é uma grande maluquice.

Seus ovos eclodem próximos a colônias de insetos que, por alguma razão desconhecida, possuem uma estranha ligação com elas. Desde que nasce, a pequena larva apresenta cheiro, sons e movimentos praticamente idênticos aos das crias daquela espécie.

Quando encontrada por um adulto, é comum que seja imediatamente recolhida e levada para dentro da colônia como se fosse apenas mais uma larva perdida.

E é aí que começam os problemas.

No início, a Falsilha não passa de mais uma boca a ser alimentada. Entretanto, raramente se contenta em receber o mesmo que as outras. Sua aparência inofensiva e uma extraordinária capacidade de conquistar os adultos fazem com que, pouco a pouco, consiga mais alimento, atenção e privilégios que as demais larvas.

As outras crias não costumam ser tão facilmente encantadas.

Por isso, lugares onde cresce uma Falsilha frequentemente se tornam ambientes de pequenas disputas e rivalidades, muitas delas discretamente provocadas pela própria intrusa. Nos piores casos, outras larvas têm seu desenvolvimento prejudicado enquanto a Falsilha cresce cada vez mais. Existem até relatos de crias inconvenientes que desapareceram ou morreram em circunstâncias estranhas sem que os adultos jamais suspeitassem de sua favorita.

Mas essa boa vida possui prazo determinado.

Quanto mais a Falsilha cresce, mais difícil se torna acreditar que ela pertence àquela colônia. Seu cheiro continua familiar, seus comportamentos ainda parecem corretos e os adultos que cuidaram dela por tanto tempo continuam reconhecendo naquela criatura algo da pequena larva que criaram.

A aparência, entretanto, começa a contar outra história.

A antiga favorita passa a receber olhares demorados e desconfiados. Aos poucos, aprende a evitar os adultos, escondendo-se e permanecendo isolada durante boa parte do tempo, aparecendo principalmente quando precisa ser alimentada.

A colônia continua cuidando dela.

Mas já não parece ter tanta certeza do motivo.`;
const descricaoAberrosulo = `Conforme cresce, a Falsilha percebe que alguma coisa mudou.

Os adultos que antes disputavam sua atenção passam a observá-la por mais tempo. Alguns hesitam antes de alimentá-la, outros conversam sobre sua aparência quando acreditam estar longe o suficiente para não serem ouvidos. Às vezes, ela percebe que alguém a seguiu depois que tentou se esconder.

Sua audição extraordinariamente apurada torna impossível ignorar essas mudanças. Mesmo isolada, a Falsilha escuta perguntas sobre seu tamanho, seu corpo e o motivo de continuar tão diferente das outras crias.

Ela talvez não compreenda exatamente o que acontecerá quando chegar o momento de sua transformação, mas entende algo muito mais simples:

já não confiam nela.

Por isso, quando sente que a metamorfose se aproxima, não procura ajuda nem tenta realizá-la da maneira como viu outras crias fazerem. Afasta-se e procura o lugar mais escondido que consegue encontrar.

Mas precisa fazer tudo às pressas.

Sem qualquer ensinamento sobre como preparar adequadamente sua transformação, a Falsilha começa a recolher tudo o que encontra ao redor. Folhas, gravetos, fibras e outros materiais são unidos em uma tentativa desesperada de construir uma cobertura onde possa permanecer protegida enquanto estiver indefesa.

O resultado é chamado de Aberrasulo.

Nenhum é exatamente igual ao outro, mas todos possuem a mesma aparência improvisada e inadequada. Partes mal encaixadas, materiais escolhidos sem cuidado e regiões da própria pupa que permanecem expostas denunciam uma construção feita por uma criatura que precisava desaparecer rapidamente.

Muito raramente tudo funciona. O Aberrasulo permanece escondido pelo tempo necessário e a transformação consegue terminar sem ser perturbada.

O mais comum, entretanto, é que seja encontrado.

Durante algum tempo, os habitantes da colônia apenas observam aquela estrutura com estranheza, tentando compreender o que surgiu dentro de seu próprio abrigo. Até que alguém percebe a verdade.

Aquilo era a Falsilha.

A descoberta costuma provocar medo e revolta. Os mesmos insetos que a encontraram pequena, alimentaram, protegeram e acompanharam seu crescimento finalmente compreendem que passaram todo aquele tempo criando uma criatura que nunca pertenceu àquela família.

E, incapaz de fugir ou se defender, o Aberrasulo escuta tudo.

Para a colônia, sua existência e toda a história de sua criação passam a ser vistas como uma grande aberração. Muitos Aberrasulos são destruídos antes que a transformação consiga terminar.

Alguns, entretanto, sobrevivem.`;
const descricaoFrankaptera = `O nascimento de uma Frankáptera é marcado pela dor e pela rejeição.

Quando percebe que seu Aberrasulo está sendo destruído pelos mesmos insetos que a criaram, ela não possui outra escolha além de interromper a própria transformação. Ainda incompleta, rompe aquilo que resta de sua proteção e emerge antes do momento adequado.

É assim que começa sua nova vida.

Dependendo da espécie que a criou, ela pode terminar ali mesmo. Mas algumas conseguem lutar e fugir às pressas da colônia.

A fuga costuma ser violenta. Sem que suas asas tenham sequer terminado de se formar e ainda carregando características de lagarta misturadas às de uma mariposa adulta, a Frankáptera precisa atravessar um lugar inteiro que até pouco tempo considerava seu lar. Seu tamanho geralmente avantajado lhe dá alguma chance de sobreviver e, durante a tentativa desesperada de encontrar uma saída, pode ferir ou matar alguns daqueles que tentam impedi-la.

As coisas que precisa fazer para escapar jamais são esquecidas.

Toda a atenção e o carinho que recebeu durante a infância rapidamente se tornam lembranças de um passado distante. Para aqueles que a criaram, a criatura que deixou o Aberrasulo já não é a pequena larva que um dia acolheram.

É uma aberração.

A transformação interrompida deixa seu corpo permanentemente incompleto. Alguns membros nunca terminam de se desenvolver, outros permanecem pequenos ou praticamente imóveis, enquanto partes que deveriam existir simplesmente não chegam a se formar. Somam-se a isso as mutilações e cicatrizes adquiridas durante sua fuga.

Algumas Frankápteras tentam corrigir essas imperfeições de uma maneira peculiar.

Utilizando seda, prendem ao próprio corpo partes retiradas de insetos mortos. Uma perna pode ser costurada onde deveria existir um membro que nunca se desenvolveu. Outra pode ser colocada sobre uma perna atrofiada ou imóvel. Antenas, garras e outras estruturas também podem ser adicionadas quando a Frankáptera acredita que alguma coisa está faltando em sua aparência.

Essas partes não voltam à vida e tampouco se tornam verdadeiros membros. A Frankáptera consegue movimentá-las apenas indiretamente, puxando-as através do próprio corpo ou usando-as como extensões rígidas. Muitas são pouco úteis e algumas não possuem função alguma.

Ainda assim, ela continua acrescentando e substituindo partes.

Para a Frankáptera, aquele corpo remendado pode parecer uma tentativa de finalmente possuir tudo aquilo que deveria ter desenvolvido.

Para os outros insetos, o efeito costuma ser exatamente o contrário.

Uma Frankáptera costuma passar a vida sozinha. Quando tenta se aproximar de outros insetos, sua aparência imediatamente provoca medo e repulsa, obrigando-a novamente a fugir ou se esconder.

Para quase todos que a encontram, ela é apenas um monstro.

Poucos imaginariam que, antes de se tornar aquilo, ela já teve uma família.`;
const descricaoFrankopata = `Frankopatas são extremamente raros.

Eles só conseguem surgir quando um Aberrasulo permanece escondido durante todo o período necessário para que a transformação seja concluída. Quando isso acontece, a criatura que emerge possui vantagens que uma Frankáptera jamais teve oportunidade de desenvolver completamente.

Entre elas estão suas asas e um dos antebraços, cuja extremidade forma uma estrutura longa, rígida e extremamente cortante.

Como todos de sua linhagem, o Frankopata possui uma audição extraordinariamente apurada. Mesmo antes de deixar o Aberrasulo, consegue perceber muito do que acontece ao seu redor e sabe que dificilmente será recebido como uma das criaturas que cresceram naquela colônia.

Por isso, geralmente foge assim que nasce.

Se seu Aberrasulo for encontrado próximo ao fim da transformação, pode precisar lutar para sair, mas suas asas tornam a fuga consideravelmente mais fácil. Sua coloração também permite que desapareça com enorme facilidade entre árvores, folhas secas e diversos outros ambientes.

Depois disso, porém, muitos não vão muito longe.

Frankopatas possuem uma estranha obsessão pela colônia onde foram criados.

Eles parecem se lembrar daqueles que os maltrataram quando ainda eram Falsilhas e costumam permanecer escondidos nas proximidades, esperando oportunidades para se vingar de cada um deles.

É durante a noite que esse comportamento se torna especialmente assustador. Um Frankopata pode permanecer imóvel e camuflado durante muito tempo, praticamente invisível para quem passa próximo dele. Quando finalmente encontra aquele que procura, nem sempre utiliza suas asas ou força para terminar o serviço rapidamente.

Ele prefere ser visto.

Surge diante de sua vítima depois de abandonar a camuflagem e passa a persegui-la lentamente, como se quisesse que ela compreendesse exatamente o que está acontecendo. Mesmo quando poderia alcançá-la voando, muitas vezes continua caminhando até que a perseguição finalmente termine.

Por isso, uma colônia onde nasceu um Frankopata raramente volta a se sentir completamente segura. Seus habitantes sabem que a criatura pode continuar vivendo escondida nos arredores e que talvez esteja apenas esperando alguém específico sair sozinho.

Curiosamente, essa violência não parece se estender indiscriminadamente aos demais insetos. Frankopatas demonstram pouca ou nenhuma empatia e não possuem qualquer interesse em conversar com aqueles que consideram irrelevantes. São incapazes de falar e comunicam-se com outras mariposas através de vibrações, mas geralmente nem sequer tentam estabelecer contato com outras criaturas.

Longe da colônia onde cresceram, podem levar uma vida surpreendentemente normal.

Também estão entre os poucos insetos que não demonstram repulsa diante de uma Frankáptera.

Mas a maior vingança dessa linhagem contra aqueles que a rejeitaram não está nas mortes que deixa para trás.

Tanto Frankopatas quanto Frankápteras retornam às proximidades da antiga colônia quando chega o momento de deixar seus ovos. Eles os depositam onde sabem que as pequenas larvas poderão ser encontradas.

Depois partem.

Curiosamente, ambos morrem antes que seus ovos eclodam.

E algum tempo depois, um inseto encontra uma pequena larva aparentemente perdida.

Ela possui o cheiro certo.
Produz os sons certos.
Move-se como uma de suas crias.

Então ele a recolhe.

E tudo começa novamente.`;
const descricaoLaranharta = `Para os insetos, aranhas são vistas com muita desconfiança e possuem uma péssima reputação devido à aparência assustadora, ao modo como se alimentam e à sua cultura considerada bizarra. Mas as Laranhartas conseguem ser ainda mais mal faladas do que elas.

Conta-se que a primeira Laranharta foi uma lagarta amaldiçoada por um poderoso Aracromante, tornando-se uma mistura de lagarta e aranha. Segundo a lenda, desde então as Laranhartas precisam se alimentar de outros insetos, capturando e devorando aqueles que encontram pelo caminho.

Elas andam de maneira estranha, lembrando aranhas. Quando encontram outro inseto, podem levantar parte do corpo e suas longas patas peludas, exibindo uma aparência ameaçadora. Se o inseto fugir, uma Laranharta assustada pode persegui-lo, fazendo-o correr desesperadamente.

Alguns insetos corajosos tentam enfrentá-las. Nesse caso, porém, a Laranharta pode liberar ao seu redor uma nuvem de pelos extremamente irritantes, tornando a aproximação perigosa.

Há quem diga que ser mordido por uma Laranharta ou atingido por seus pelos transmite sua maldição. Os primeiros sintomas seriam coceira e irritação pelo corpo, seguidos lentamente pela transformação do inseto em uma aranha. Por isso, acredita-se que o tratamento deva começar imediatamente, antes que a transformação se torne irreversível.

Laranhartas vivem isoladas e praticamente ninguém deseja ter contato com elas. Sua aparência e seu comportamento defensivo costumam ser suficientes para manter qualquer um afastado.

Existe, porém, um relato famoso que contradiz boa parte dessas histórias.

Durante uma perseguição, um inseto chamado Percevus acabou preso durante uma noite inteira em um buraco junto de uma Laranharta. Segundo ele, depois que percebeu que não havia como escapar, descobriu que a criatura não demonstrava qualquer intenção de devorá-lo. Parecia apenas uma lagarta extremamente introvertida e assustada, que reagia agressivamente sempre que acreditava estar em perigo.

Os dois permaneceram no buraco durante a noite e chegaram a se alimentar das mesmas plantas. Quando finalmente conseguiram sair, simplesmente seguiram caminhos diferentes.

O relato de Percevus mudou a lenda em algumas regiões, mas não exatamente da maneira que ele esperava.

Passou-se a dizer que Laranhartas só devoram insetos em determinadas noites, sob luas específicas.

O medo continuou.`;
const descricaoEnjaulupa = `Quando a Laranharta já não consegue mais conter seus instintos de transformação, procura o lugar mais isolado que puder encontrar e começa a construir sua própria contenção.

Durante muito tempo, trabalha sua seda até formar uma estrutura rendada extremamente resistente. Ela precisa ser forte o bastante para impedir que qualquer inseto consiga penetrá-la e, principalmente, para garantir que aquilo que surgir após sua transformação não consiga sair de dentro.

Quando a contenção finalmente está pronta, a Laranharta entra e começa a preparar uma segunda camada de proteção. Reveste o próprio corpo com mais seda e libera seus pelos, deixando-os presos por toda a superfície da pupa. Dessa forma, mesmo algum inseto audacioso o bastante para alcançar uma Enjaulupa terá bons motivos para não tocá-la.

A estrutura normalmente é construída suspensa em lugares altos, isolados e de difícil acesso.

As precauções são extremamente eficazes para manter predadores, curiosos e outros insetos afastados. Durante um longo período, a Enjaulupa permanece pendurada e praticamente intocada enquanto a transformação acontece silenciosamente em seu interior.

Quanto à capacidade de manter o resultado da transformação preso, porém, a história é outra.

Em uma noite de lua cheia, quando finalmente se completa a metamorfose, alguma coisa desperta dentro da Enjaulupa.

Está faminta.

Está desesperada para sair.

A contenção que a Laranharta passou tanto tempo construindo é violentamente arrebentada de dentro para fora, e a criatura que estava aprisionada ali escapa e desaparece voando pela noite.

Por isso, encontrar uma Enjaulupa intacta é motivo para manter distância.

Encontrar uma Enjaulupa arrebentada no chão é um sinal de perigo muito maior.`;
const descricaoLunaranha = `A Lunaranha é uma das criaturas mais temidas pelos insetos. Uma aberração assustadora que muitos descrevem simplesmente como uma aranha alada, maior e mais forte que uma Barântula.

Mas há uma diferença importante entre elas. Enquanto Barântulas demonstram consciência e possuem seus próprios hábitos e comportamentos, a Lunaranha parece passar boa parte da vida dominada por instintos que nem ela própria compreende.

Seu primeiro momento de vida é também um dos mais perigosos.

Assim que termina sua transformação, a Lunaranha desperta faminta dentro da Enjaulupa. Ela arrebenta a contenção construída pela própria Laranharta e imediatamente parte em busca de um inseto para se alimentar.

Seu ataque é brutal. O enorme tamanho, as patas peludas e as poderosas garras tornam extremamente difícil contê-la. Somente depois de conseguir alimento a criatura parece finalmente se acalmar.

Então procura algum reduto solitário e passa a viver afastada dos demais. Durante boa parte do tempo, há relatos de Lunaranhas alimentando-se tranquilamente de plantas e evitando outros insetos.

Seu comportamento, porém, possui uma estranha relação com os ciclos da Lua.

Durante a Lua Minguante, pode ser encontrada vagando pelas noites de maneira confusa. Sua simples aparição costuma provocar pânico, embora normalmente só ataque quando se sente ameaçada.

Durante a Lua Nova, desaparece completamente. Ninguém sabe para onde vão as Lunaranhas nessas noites.

Com a Lua Crescente, tornam-se inquietas. Voam durante a noite por grandes distâncias procurando uma parceira ou parceiro.

Mas é durante a Lua Cheia que todo inseto aprende a temê-las.

Alguma coisa parece tomar conta da Lunaranha. Seu comportamento muda, seus instintos se sobrepõem a qualquer outra coisa e surge uma necessidade incontrolável de se alimentar.

Ela caça.

E continua caçando.

Até que a noite termine, deixando um rastro de corpos por onde passou.`;
const descricaoWendivora = `Dizem que a primeira Wendívora foi uma lagarta que, incapaz de encontrar alimento durante um inverno rigoroso, acabou devorando outra lagarta. Aquele primeiro ato de canibalismo teria mudado sua natureza para sempre.

Seu corpo é longo, pálido e fino, semelhante a um galho seco caído. Os ovos das Wendívoras eclodem durante o inverno, e desde cedo elas aprendem a viver no frio e na privação. Movem-se o mínimo possível, permanecendo imóveis enquanto esperam que algum inseto cruze seu caminho.

Seu formato faz com que sejam facilmente confundidas com simples galhos. Quando uma presa se aproxima ou toca seu corpo, porém, a Wendívora ataca com velocidade impressionante, agarrando-a com suas garras e devorando-a desesperadamente.

Dizem que a Fome da Wendívora nunca passa — apenas aumenta. Ela é eternamente insaciável. Mesmo logo após se alimentar ou em períodos de abundância, continua caçando e devorando qualquer inseto que encontre, tornando-se cada vez maior à medida que se alimenta.

Sua mordida é tão fria quanto sua atitude, e suas garras extremamente afiadas perfuram com facilidade o exoesqueleto de outros insetos. Uma vez capturada, é muito difícil para uma presa escapar.

Uma das poucas maneiras de distingui-la de um galho comum é pelo cheiro de carniça que carrega consigo. Ainda assim, o melhor é observar cuidadosamente onde se pisa durante o fim do outono e, principalmente, durante o inverno.`;
const descricaoRestritupa = `Quando atinge o tamanho adequado, deixando várias mudas menores pelo caminho ao longo de sua vida, a Wendívora se contorce completamente e se transforma em uma Restritupa.

A Restritupa representa para ela um terrível período de privação. Presa lá dentro, não consegue fazer nada além de observar sua comida passando diante de seus olhos enquanto sua fome insaciável a consome.

O tempo de transformação varia de acordo com cada Wendívora. Ela permanece confinada pelo tempo que for necessário para aprender a controlar seu desejo incontrolável de comer. Somente quando isso finalmente acontece sua transformação se completa.

Mesmo assim, conquistar a liberdade não é fácil.

Para sair, ela precisa forçar uma abertura na própria Restritupa. A estrutura foi formada para conter completamente uma lagarta ainda maior do que ela própria aparenta ser, e rompê-la exige um enorme esforço. Eventualmente, porém, ela encontra uma saída e finalmente se liberta das amarras de que precisava.`;
const descricaoHematocrata = `Não existe mariposa mais simpática e elegante que uma Hematocrata. Ela possui um ar de inseto nobre e costuma ser muito cortês com os outros insetos. Pode viver dentro de comunidades ou manter-se mais afastada, mas costuma visitar a comunidade local e, às vezes, ajuda trazendo recursos dos mais variados tipos.

Hematocratas são insetos noturnos, nunca sendo vistos durante o dia. Acostumados com o frio do inverno desde a fase de lagarta, dizem que permanecem em seus abrigos porque o calor do sol os incomoda bastante. Durante a noite, podem ser vistos voando elegantemente pelo céu e, quando precisam escapar de predadores, conseguem se camuflar como folhas usando o verso de suas asas.

Apesar de toda essa gentileza incomum em uma mariposa, uma Hematocrata às vezes apresenta o olhar de alguém que está se contendo, como se desejasse algo que não pudesse demonstrar em público.

Uma Hematocrata só entra no abrigo de outro inseto quando é convidada.

Infelizmente, ela ainda precisa dos fluidos de outros insetos para sobreviver. Por isso, às vezes devora uma presa ou apenas se alimenta de sua hemolinfa, perfurando seu corpo com as presas afiadas e utilizando a tromba para sugá-la.

Insetos que sobreviveram a esses ataques às vezes não conseguem se lembrar direito do que aconteceu. Outros se recordam e chegam a acusar uma Hematocrata de tê-los atacado.

A reputação das Hematocratas, porém, costuma ser inabalável.

E, curiosamente, insetos que insistem demais nessas acusações às vezes acabam desaparecendo.`;
const descricaoZunambularva = `As Entérreas são lagartas que passam grande parte de suas vidas no subsolo. Levam uma vida relativamente comum, construindo abrigos subterrâneos e alimentando-se de raízes e outros recursos de origem vegetal.

Embora não formem comunidades próprias, costumam participar da vida agrícola de comunidades conjuntas de insetos, ajudando a fertilizar o solo e comercializando os recursos que encontram debaixo da terra.

Entretanto, o modo de vida das Entérreas favorece o contato com alguma coisa maldita que existe no solo.

De vez em quando, uma delas começa a agir de maneira estranha, apresentando comportamentos que fogem aos padrões sociais. No início, não é fácil perceber o que está acontecendo. A Entérrea parece apenas doente, mas, com o passar do tempo, começa a se comportar como se já não tivesse plena consciência de seus próprios atos.

Nesse estado, passa a perseguir outros insetos, surgindo debaixo da terra e grunhindo coisas sem sentido. É quando passam a chamá-la de Zunambularva.

Embora o mal costume surgir primeiro entre as Entérreas, ele não permanece restrito a elas. A Zunambularva passa a perseguir e atacar outros insetos e, quando consegue agarrar uma vítima, tenta feri-la repetidamente. Durante o ataque, alguma coisa parece ser deixada em seu corpo, como se tivesse sido plantada ali. Os insetos que conseguem escapar muitas vezes acreditam ter sobrevivido, até começarem a apresentar os mesmos comportamentos algum tempo depois, independentemente da espécie a que pertençam.

Nos estágios mais avançados, alguma coisa começa a crescer para fora da cabeça da Zunambularva. Ela continua vagando e agindo de maneira errática enquanto consegue se mover, até finalmente morrer, completamente paralisada pela criatura que tomou seu corpo.

Uma única Zunambularva representa um enorme perigo para qualquer colônia ou comunidade de insetos. Quando uma é identificada, deve ser eliminada imediatamente, antes que o contágio consiga se espalhar.

Há comunidades que já foram inteiramente devastadas por esse mal. Quando outros insetos finalmente chegaram até elas, encontraram apenas seus habitantes imóveis, com estranhas criaturas crescendo de seus corpos.`;
const descricaoEsporantalho = `Esporantalho é o nome dado à forma final da criatura que cresce no corpo dos insetos contaminados pelo mal das Zunambularvas.

Ele se desenvolve sobre o corpo de seu hospedeiro, assumindo uma forma assustadora que costuma espantar imediatamente os insetos que já aprenderam a reconhecer sua silhueta — e, infelizmente, contaminar aqueles que nunca a viram antes.

Nesse estágio, o Esporantalho já não pode controlar seu hospedeiro para perseguir e atacar outros insetos. Em vez disso, quando percebe alguma criatura próxima, libera uma grande quantidade de esporos ao seu redor. Se algum deles atingir outro inseto, o mal da Zunambularva pode começar a se desenvolver também naquele corpo.

Qualquer inseto que morra como Zunambularva e permaneça intocado por tempo suficiente acabará desenvolvendo um Esporantalho. Mas existe uma situação ainda pior: quando o hospedeiro estava próximo de se transformar em pupa.

Independentemente do estágio da contaminação, se o inseto iniciar sua transformação, o Esporantalho toma conta do processo. Em vez de uma metamorfose normal, surge uma criatura ainda maior e mais assustadora. As Pupoterradas estão entre as mais atingidas, pois as próprias Entérreas possuem maior chance de já carregarem o mal quando chega o momento de sua transformação.

Ao encontrar um Esporantalho pelo caminho, o melhor é manter a maior distância possível. Nem mesmo é necessário tocá-lo: o vento pode carregar seus esporos malditos até outros insetos.

Quando muitos Esporantalhos surgem em uma mesma região, permanecer ali pode se tornar impossível. Lugares assim costumam ser abandonados por tempo indeterminado, até que seja considerado seguro retornar.`;
const descricaoAssombralada = `Quando a vida de uma Entérrea segue seu ciclo normal, sem qualquer contaminação, uma Assombralada nasce de dentro da Pupoterrada.

Elas sempre emergem durante a noite, e presenciar esse momento pode ser um grande susto para quem não está acostumado. Como a Pupoterrada permanece escondida no subsolo, a Assombralada parece simplesmente surgir de dentro da terra, abrindo suas grandes asas brancas e voando de maneira errática em direção ao céu noturno.

A Assombralada não possui boca e, por isso, não consegue se comunicar como muitos outros insetos. Em vez disso, produz vibrações que resultam em sons estranhos e inquietantes, capazes de causar calafrios em quem os escuta pela primeira vez.

Assim que deixam o solo, começam quase imediatamente a procurar por parceiros. Durante essa busca, parecem ignorar completamente os insetos de outras espécies, passando por eles como se não estivessem ali — quase como se pertencessem a outro mundo.

À noite, é possível vê-las subindo e descendo repetidamente no ar, enquanto produzem seus sons vibracionais na tentativa de atrair outras Assombraladas. A visão de suas formas completamente brancas pairando na escuridão já foi responsável por muitos sustos e até pesadelos entre outros insetos.

Apesar de sua aparência e comportamento assustadores, não existe nada de maligno nas Assombraladas. Seu comportamento tem uma explicação bastante simples: elas possuem apenas poucos dias de vida e sequer são capazes de se alimentar. Todo o curto período de sua existência adulta é dedicado a encontrar um parceiro e se reproduzir.

Entender isso, entretanto, não torna menos assustador ver uma delas surgindo inesperadamente do chão no meio da noite.`;
const descricaoFlamecante = `Flamecante aprende logo cedo que o contato não será o ponto forte de sua jornada. Ainda no início da vida, ele e seus irmãos descobrem, de maneira dolorosa, que precisam manter certa distância uns dos outros.

Os espinhos urticantes que crescem por todo o seu corpo causam dor extrema e uma sensação de queimadura que pode persistir por horas após o contato. À medida que cresce, seus espinhos também aumentam, assim como a intensidade de seus efeitos.

Essa defesa é extremamente útil para afastar predadores e inimigos, mas também acaba afastando amigos e dificultando boas relações. Quanto mais Flamecante cresce, mais os outros insetos preferem manter distância. Até mesmo entre irmãos surge a necessidade de respeitar o espaço uns dos outros.

Aos poucos, Flamecante desenvolve menos apego e passa a evitar interações sociais, construindo ao redor de si uma barreira tanto física quanto psicológica.

O que é uma pena, pois sua aparência chama atenção por onde passa. Flamecante é considerada uma das lagartas mais belas e pacíficas que existem.`;
const descricaoPupandoura = `Pupandoura é o grande momento de transformação de Flamecante. Sabendo que seu corpo é perigoso para os outros, ele procura um lugar isolado e, de preferência, escondido para realizar sua transformação. Geralmente escolhe o interior de troncos, túneis ou comunidades abandonadas.

Durante a transformação, Pupandoura começa a desenvolver uma espessa camada de pelos urticantes para proteger seu interior. Os pelos maiores se desprendem aos poucos e se espalham pelo ambiente, podendo até ser carregados pelo vento para lugares mais distantes.

O problema é que Pupandoura se torna muito bela com sua camada de pelos dourados e cor de fogo, despertando a curiosidade de quem a encontra. Um inseto que tenta se aproximar acaba entrando em contato com os pelos espalhados ao redor e, ao se contorcer de dor, pode cair sobre uma quantidade ainda maior deles. Em muitos casos, isso acaba levando-o à morte.

No interior de Pupandoura, porém, a transformação não é apenas física, mas também psicológica. Dizem que, durante seu desenvolvimento, o ser lá dentro perde completamente o contato com a realidade e passa meses mergulhado em um pesadelo horrível.

Tudo o que há de belo por fora não condiz com o que acontece lá dentro.`;
const descricaoGorgondusa = `A fêmea que emerge de Pupandoura nasce como Gorgondusa. É uma mariposa sem asas, com um abdômen muito longo, próprio para produzir e carregar seus ovos. Mas, além dos ovos, seu corpo produz continuamente uma enorme quantidade de pelos urticantes ao redor da cabeça. São tantos que ela própria precisa enrolá-los para que não atrapalhem sua visão.

Gorgondusa rasteja pelo ambiente onde nasceu durante praticamente toda a sua vida, transformando aquele lugar em um abrigo escondido da sociedade. Raramente se afasta, saindo apenas para buscar alimento antes de retornar.

Seu abrigo geralmente contém vários corpos de insetos mortos, já endurecidos pelo tempo. Essa, inclusive, costuma ser a primeira visão de Gorgondusa ao nascer: os corpos daqueles que tentaram se aproximar de Pupandoura durante sua transformação. Estranhamente, ela mantém todos intactos, talvez como um lembrete para si mesma do que acontece com aqueles que se aproximam.

Entrar no abrigo de uma Gorgondusa é extremamente perigoso. Além do cenário de corpos endurecidos, pelos urticantes costumam estar espalhados por todo o lugar.

Mas o maior perigo é encontrá-la.

Ao perceber a presença de um visitante, Gorgondusa se assusta e libera de uma só vez uma quantidade tão grande de pelos que sobreviver se torna quase impossível.

Ver Gorgondusa arregalar os olhos e seus pelos se arrepiarem é, possivelmente, a última visão de um inseto.`;
const descricaoQuimerydra = `O macho que emerge de Pupandoura nasce como Quimerydra. Ele mantém a beleza colorida de sua forma como Flamecante, enquanto os pelos urticantes ao redor da cabeça lembram aqueles que cobriam Pupandoura. Ainda assim, sua aparência parece uma mistura de várias criaturas, principalmente pelas diferenças marcantes de cor entre suas asas e as diferentes seções do corpo.

Quimerydra só consegue se comunicar por vibrações com outras mariposas, mas também é capaz de produzir um forte ruído estridente para assustar quem se aproxima.

Diferentemente de Gorgondusa, ele abandona seu abrigo logo após nascer e parte voando, sempre em busca de isolamento. Quando outro inseto o encontra, Quimerydra faz o possível para afastá-lo. Primeiro utiliza seu ruído estridente e, se isso não funcionar, estende para o alto suas quatro enormes corematas. Cobertas por longos pelos e quase tão compridas quanto seu próprio corpo, elas lembram grandes serpentes. Seus movimentos dão a impressão de que cada uma possui vida própria e, por causa da aparência de Quimerydra, poucos insetos arriscam descobrir se aqueles pelos também são urticantes.

Cobertas por pelos urticantes e quase tão longas quanto seu próprio corpo, elas lembram grandes serpentes. Seus movimentos independentes dão a impressão de que cada uma possui vida própria.

Quimerydra raramente precisa fazer mais do que isso para afastar alguém. Em último caso, porém, um confronto direto costuma terminar com o adversário morto ou sofrendo fortes queimaduras.

Durante suas viagens em busca de lugares isolados, Quimerydra pode acabar entrando no abrigo de uma Gorgondusa. Ele reconhece imediatamente os sinais de um local onde alguém de sua espécie nasceu e abre suas corematas, espalhando um perfume capaz de acalmá-la completamente.

Durante a reprodução, porém, as duas mariposas acabam se envenenando mortalmente, ficando com seus dias de vida contados. Embora sejam naturalmente resistentes às próprias substâncias urticantes, essa proteção não se estende completamente às produzidas por outros indivíduos. Gorgondusa morre pouco depois de colocar seus ovos.

O último ato de Quimerydra é recolhê-los e partir em voo, levando-os para algum lugar distante dali.`;
const descricaoPaplicata = `Os ovos das Paplicatas costumam eclodir em lugares altos, de onde as pequenas lagartas passam boa parte da infância observando outros insetos e aprendendo seus comportamentos.

Desde muito jovens, possuem a capacidade de inflar e deformar partes de seus corpos moles, criando formas que lembram criaturas maiores e ameaçadoras. No início, utilizam essa habilidade apenas para afugentar possíveis predadores, mas, conforme crescem, aprendem que a imitação pode servir para algo muito mais elaborado.

Para continuar seu desenvolvimento, uma Paplicata precisa se alimentar de ovos e pequenas larvas de outros insetos.

Ela nasce com um estranho dom que torna essa tarefa possível. Depois de permanecer algum tempo em contato com determinado inseto, consegue copiar características únicas dele. Seu cheiro, seus sons e até mesmo seus hábitos podem ser reproduzidos com impressionante precisão, permitindo que a Paplicata se infiltre em colônias e abrigos como se pertencesse àquele lugar.

Curiosamente, sua aparência nunca é uma cópia perfeita. A Paplicata continua sendo uma lagarta de corpo mole, apenas inflando, comprimindo e deformando partes de si para criar uma imitação aproximada daquele que está copiando. Mesmo assim, a combinação de cheiro, sons e comportamento costuma ser suficiente para enganar os demais.

Paplicatas mais experientes podem permanecer durante bastante tempo em uma comunidade, alimentando-se discretamente sem levantar suspeitas. Alguns insetos mais atentos percebem que existe alguma coisa estranha quando as observam por tempo suficiente, mas muitas vezes só compreendem o que estão vendo quando a imitação falha de maneira evidente — e percebem que aquela figura familiar é, na verdade, uma lagarta disforme andando entre eles.

Existem relatos de Paplicatas que conseguiram imitar indivíduos importantes para obter acesso a lugares restritos e privilégios dentro de uma comunidade. Outras chegam a eliminar o inseto que copiaram, diminuindo as chances de que sua presença seja descoberta.

Mas são os ovos e as pequenas larvas que mais têm motivos para temê-las.

Quando consegue ficar sozinha com suas presas, a Paplicata já não precisa manter a encenação. Aproxima-se com seu falso rosto moldado no corpo inflado e devora as pequenas criaturas ainda vivas.

Por isso, em muitas comunidades, os filhotes crescem ouvindo histórias sobre uma criatura capaz de entrar em qualquer abrigo e assumir o lugar de alguém conhecido para encontrá-los. Às vezes essas histórias são contadas para alertá-los de um perigo verdadeiro.

Outras vezes, são apenas uma maneira bastante eficiente de fazer os pequenos se comportarem.`;
const descricaoPupargula = `Quando está completamente desenvolvida, a Paplicata pode finalmente abandonar suas imitações e iniciar sua transformação. Ela procura um lugar alto e protegido, onde constrói a pupa dentro da qual se transformará em um novo inseto.

Sua extraordinária habilidade de modelar estruturas não desaparece durante esse processo. Em vez de formar uma pupa comum, a Paplicata constrói uma estrutura extremamente resistente, moldada para imitar a aparência de uma grande e ameaçadora mariposa. Essa forma é conhecida como Pupárgula.

Para outros insetos, nem sempre é fácil compreender o que estão vendo. A criatura parece imóvel demais para estar viva, mas sua aparência imponente faz surgir a dúvida de que talvez seja uma perigosa mariposa apenas esperando o momento de atacar. Para a maioria, descobrir a resposta não vale o risco, e a simples presença de uma Pupárgula é suficiente para mantê-los afastados.

Há ainda algo que torna essa impressão muito mais convincente. A estrutura utilizada pela Pupárgula para se prender ao local pode ser contraída pelo inseto que se desenvolve em seu interior. De tempos em tempos, ela muda ligeiramente de posição, fazendo parecer que aquela estranha criatura realmente vive ali e apenas permanece imóvel durante longos períodos.

Por isso, lugares ocupados por uma Pupárgula costumam provocar a desconfortável sensação de estar sendo observado.

E essa sensação não está completamente errada.

Mesmo durante sua transformação, a criatura consegue perceber parte do que acontece ao seu redor. Continua observando movimentos e reconhecendo os insetos que passam por perto, como fazia quando ainda era uma Paplicata. Às vezes, quando alguém para e a encara diretamente, a Pupárgula lentamente muda de posição.`;
const descricaoHarpitera= `Harpítera poderia ser apenas uma mariposa comum.

Ela já não precisa se alimentar de ovos ou pequenas larvas e possui habilidades mais do que suficientes para levar uma vida segura e tranquila. Sua visão binocular e periférica é extraordinária, consegue permanecer em voo por longos períodos e possui força e uma capacidade de manobra impressionantes. Além disso, os anos passados observando e imitando outras criaturas lhe deram um profundo conhecimento sobre os hábitos e comportamentos dos mais diversos insetos.

Entretanto, poucas Harpíteras parecem interessadas em uma vida tranquila.

Fascinadas pela complexidade das relações entre outros insetos, elas costumam aceitar trabalhos que poucos estariam dispostos a realizar em troca de favores. Normalmente são procuradas para encontrar, capturar, sequestrar ou até mesmo eliminar um indivíduo específico.

Curiosamente, uma Harpítera não aceita qualquer serviço. Antes de fechar um acordo, costuma querer conhecer toda a história por trás do pedido. Quem é o alvo, por que deve ser capturado ou morto e, principalmente, o que receberá em troca são questões de grande importância para ela. Somente depois de ouvir tudo decide se aceita o trato.

Quando parte atrás de alguém, as habilidades desenvolvidas ao longo de sua vida tornam a Harpítera uma caçadora extremamente eficiente. Ela conhece os hábitos de outros insetos, enxerga movimentos a grandes distâncias e utiliza sua velocidade e extraordinária capacidade de voo para alcançar o alvo. Ao encontrá-lo, suas grandes garras permitem agarrá-lo em pleno movimento e carregá-lo para praticamente onde desejar.

Isso faz com que algumas Harpíteras sejam procuradas justamente quando alguém precisa que determinado inseto seja trazido de volta — enquanto outras são contratadas quando é preferível que ele nunca retorne.

Mas existe uma parte do acordo que jamais deve ser esquecida.

Uma Harpítera pode escolher cuidadosamente quais serviços aceita, mas, depois de aceitar um trato, espera que o outro lado também cumpra sua palavra.

Se o pagamento ou favor combinado não for realizado, ela não considera o assunto encerrado.

Harpíteras nunca esquecem uma dívida. E não costumam sentir pena de quem passa a dever algo a elas.`;
const descricaoFantasioche = `Fantasioche é uma lagarta muito pequena que desenvolveu uma estratégia bastante peculiar de sobrevivência. Ela constrói um estojo feito de poeira, areia, pelos e outros materiais e vive escondida dentro dele, em segredo.

Entretanto, para conseguir um abrigo ainda mais seguro contra predadores, ela molda seu estojo como um pequeno boneco, cuja aparência costuma atrair lagartas e outros insetos jovens.

Assim, Fantasioches acabam sendo levados para abrigos seguros e usados como brinquedos pelas larvas. Lá dentro, encontram tudo de que precisam: alimento fácil, diversão e segurança. Como conseguem se alimentar de quase qualquer coisa e são muito pequenas, podem comer sem serem percebidas, entrando e saindo de sua pequena casa por qualquer uma das duas extremidades.

Fantasioche participa das brincadeiras em segredo, e sua esperteza faz com que quase nunca seja encontrada. Às vezes, chega a abandonar temporariamente a casa para não levantar suspeitas.

Podem até se tornar brinquedos de filhotes de aranhas e, nesses casos, alimentar-se secretamente de suas teias.

O único problema é que, às vezes, são vistas se movendo sozinhas. Isso pode assustar pequenas larvas e fazer com que o brinquedo seja considerado amaldiçoado. Também podem causar problemas quando coisas começam a desaparecer sem que exista um culpado.

E não adianta culpar o boneco.`;
const descricaoApotroche = `Quando está perto de se desenvolver, Fantasioche modifica sua casa para que pareça assustadora e se fecha dentro dela para iniciar sua transformação. Essa pupa é chamada de Apotroche.

A estratégia exata depende do conhecimento que possui sobre o ambiente onde vive. Fantasioches são extremamente inteligentes e conseguem avaliar como poderão atravessar esse estágio vulnerável. Se perceberem que o boneco será considerado amaldiçoado e deixado em paz, formam o Apotroche onde já estão. Se acreditarem que será destruído, abandonam o ambiente e procuram algum lugar lá fora onde sua aparência assustadora possa manter outros insetos distantes.

Alguns sabem que podem ser usados como decoração por aranhas e Decrépteras e vão diretamente até seus refúgios, permanecendo próximos à entrada para que sejam encontrados e levados para dentro.

Alguns insetos, por medo ou superstição, mantêm distância dos Apotroches. Outros fazem justamente o contrário e os utilizam como amuletos para afastar o mal.

Dizem que a Inimiga Alada não entra em um abrigo que tenha um Apotroche.`;
const descricaoPolterposa = `Polterposa é uma mariposa pequena e extremamente esperta. Quando abandona seu Apotroche, ela já sabe exatamente onde pretende se esconder e como poderá viver no ambiente em que passou sua juventude.

Encontrar um Apotroche vazio e rompido costuma provocar diferentes interpretações. Para alguns insetos, significa que algo amaldiçoado saiu de dentro dele e agora está à solta no abrigo. Para outros, significa apenas que o amuleto cumpriu sua função, protegeu o local da Inimiga Alada e acabou destruído no processo.

No primeiro caso, Polterposa não costuma desperdiçar a oportunidade. Se os moradores abandonarem o abrigo por considerá-lo assombrado, ela permanece escondida e assume o controle do lugar. Com o tempo, outras Polterposas podem se juntar a ela, e passam a produzir vibrações, ruídos e movimentos estranhos para manter visitantes afastados. Algumas chegam a imitar vozes e sons de outros insetos sem jamais se mostrarem, preservando por muito tempo a reputação sobrenatural do local.

Nem todas, porém, precisam viver escondidas. Algumas conseguem conviver normalmente com os habitantes dos abrigos onde nasceram. As que surgem nos refúgios de Decrépteras, por exemplo, podem tornar-se suas ajudantes. Outras preferem permanecer secretas, assustando os moradores apenas quando necessário para roubar alimento ou conseguir aquilo de que precisam sem serem descobertas.

Por isso, a vida de uma Polterposa depende muito menos de força do que de sua capacidade de conhecer os insetos ao seu redor e descobrir como assustá-los. Algumas usam essa habilidade para encontrar segurança, outras para conseguir alimento ou moradia.

Mas, quando não precisam de nada disso, muitas continuam assombrando lugares mesmo assim.

Elas simplesmente gostam de pregar peças.`;
const descricaoChapelirio = `Chapelírio inicia sua vida como uma lagarta bastante comum e infantil. Convive normalmente com outros insetos e costuma ser bem-quisto, mas as coisas começam a mudar quando cresce e realiza sua primeira muda.

Ninguém sabe exatamente como ou por que isso acontece, mas sua cabeça anterior permanece sobre o novo exoesqueleto como um chapéu. A partir desse momento, o Chapelírio parece desenvolver também uma nova personalidade.

De forma bastante estranha, às vezes ele volta a agir como sua personalidade infantil anterior, mudando inclusive a própria voz. O ciclo continua a cada nova muda: uma nova cabeça se soma às anteriores e outra personalidade parece surgir, como se vários indivíduos diferentes passassem a viver dentro da mesma lagarta. Não se sabe se o Chapelírio apenas se lembra de como era antes ou se, nesses momentos, uma de suas antigas personalidades realmente volta a assumir o controle.

Com o tempo, esse comportamento começa a afastar aqueles que conviviam com ele. O mais perturbador é que cada nova personalidade parece mais insana que a anterior, tornando sua convivência cada vez mais difícil.

Quando já carrega várias de suas antigas cabeças, o Chapelírio costuma estar praticamente irreconhecível para aqueles que o conheceram no início da vida. Acaba ganhando a fama de uma lagarta maluca e bizarra, tanto pela aparência quanto pelas muitas personalidades que parecem habitar seu corpo.`;
const descricaoManicumulo = `Um Manicúmulo é considerado um dos casulos mais assustadores existentes.

Antes de preparar seu casulo, o Chapelírio retira todas as cabeças anteriores que carregava e as dispõe ao redor do próprio corpo, prendendo-as com seda. Geralmente faz isso deitado sobre uma folha, deixando inicialmente apenas sua cabeça atual para fora.

Dizem, porém, que ele também acaba se separando dessa última cabeça, abandonando-a como uma concha. Ninguém sabe ao certo o que permanece dentro do casulo depois disso, pois até a cabeça mais recente fica completamente imóvel junto às demais.

Estranhamente, durante todo o desenvolvimento, os rostos do Manicúmulo parecem vivos e mortos ao mesmo tempo. Permanecem imóveis, mas sua aparência provoca a constante impressão de que ainda há alguma coisa neles.

E sua aparência está longe de ser o aspecto mais perturbador.

Durante todo o período de transformação, é possível ouvir risadas vindas de dentro do Manicúmulo. Algumas são sombrias, outras parecem gargalhadas genuinamente divertidas e algumas possuem a voz infantil dos primeiros anos do Chapelírio. 

Às vezes, mais de uma delas pode ser ouvida ao mesmo tempo.

As vozes se sobrepõem em tons e personalidades diferentes, como se vários indivíduos estivessem rindo juntos dentro daquele único casulo.

Algumas vezes, uma risada parece provocar outra, e há quem jure ter ouvido duas das vozes conversando entre si. Nunca é possível compreender sobre o que falam.

Para muitos insetos, poucas coisas são tão assustadoras quanto escutar essas risadas durante a noite. Às vezes nem é preciso encontrar o Manicúmulo para perceber sua presença.

Basta ouvir para saber que alguma coisa muito errada está acontecendo lá dentro.`;
const descricaoGargalhaco = `Gargalhaço é uma mariposa muito esquisita. A maioria dos insetos se sente desconfortável perto dele, embora não seja exatamente por sua aparência que, apesar de estranha, pode até parecer acolhedora.

Gargalhaço costuma rir e conversar sozinho. Também tenta constantemente chamar a atenção daqueles ao redor, fazendo brincadeiras que dificilmente agradam e demonstrando uma necessidade quase incansável de divertir os outros.

Às vezes, enquanto conversa sozinho, Gargalhaço muda repentinamente a voz, a postura e o comportamento, parecendo conversar com outra de suas próprias personas. Algumas dessas vozes são muito semelhantes às que podiam ser ouvidas em seu Manicúmulo.

Possui uma habilidade teatral extraordinária, sendo capaz de assumir diferentes personas e imitar outros insetos de maneira estranhamente convincente. Vozes, trejeitos e comportamentos podem ser reproduzidos com tanta precisão que alguns ficam perplexos ou assustados ao reconhecer alguém conhecido sendo perfeitamente imitado através do rosto teatral de um Gargalhaço.

Gargalhaço parece ter muita dificuldade em compreender quando uma brincadeira deixou de ser divertida. Pode esconder objetos importantes, imitar a voz de alguém querido para enganar outro inseto, surgir inesperadamente durante a noite ou insistir em uma encenação mesmo quando todos ao redor demonstram medo. Quando finalmente percebe que passou dos limites, muitas vezes parece genuinamente confuso com a reação dos demais.

A maioria parece completamente perturbada do juízo e age muito além do que é considerado socialmente aceitável. Sua imprevisibilidade faz com que sua presença seja motivo de desconfiança e que muitos prefiram manter distância.

Estranhamente, porém, o Gargalhaço quase sempre parece estar tentando se enturmar, como se tentasse compensar o afastamento que acompanha sua linhagem desde o Chapelírio. É comum encontrá-lo sozinho e aparentemente triste. Quando alguém se aproxima, porém, sua expressão pode mudar imediatamente para uma alegria exagerada, obsessiva e assustadora.

Aqueles que tentam manter algum convívio com um Gargalhaço costumam ser surpreendidos por brincadeiras de péssimo gosto, comportamentos inconvenientes e sua completa imprevisibilidade. Apesar disso, geralmente não são vistos fazendo nada realmente errado. São seus hábitos, especialmente noturnos, e seu comportamento perturbador que acabam provocando repulsa e afastamento.

Ainda assim, sempre existe a história de algum Gargalhaço que levou uma de suas brincadeiras longe demais. Quando perguntam o que aconteceu, porém, cada inseto conta uma coisa diferente.`;
const descricaoIpupiarta = `Nascido no ambiente aquático, Ipupiarta é uma lagarta completamente adaptada a viver sob a água. Seus pelos e membros favorecem a natação, permitindo que se desloque rapidamente pelas águas.

Ipupiarta normalmente se alimenta de plantas aquáticas e possui uma aparência tranquila e indefesa. Mas é apenas fingimento. Quando algo se aproxima e surge a oportunidade, Ipupiarta abre sua poderosa mandíbula e persegue o alvo, usando também suas garras afiadas, normalmente escondidas, para se prender à presa.

Ele consegue viver alimentando-se apenas de plantas, mas comer outros insetos acelera bastante seu processo de crescimento. Por isso, está sempre atento às oportunidades.

Normalmente, seu maior truque é simplesmente ficar quieto e esperar que a presa o considere inofensivo. Mas possui outros recursos quando precisa, chegando a se fazer de vítima para atrair alguém. Um deles é ficar chorando próximo à margem da água, esperando chamar a atenção de algum inseto caridoso. Também pode se fingir de morto até que a presa esteja perto o suficiente.

Quando ela percebe o engano, geralmente já está ao alcance das garras do Ipupiarta.`;
const descricaoTesaurea = `Existe uma crença sobre a Tesáurea. Dizem que ela é capaz de realizar um desejo. Tudo que um inseto precisa fazer é encontrar uma e fazer seu pedido.

Durante a noite, em determinado estágio de seu desenvolvimento, o lugar na superfície da água onde a Tesáurea está submersa exibe um brilho dourado que pode ser visto à distância e atrai outros insetos.

Ao mergulhar e seguir a luz, o inseto deve abrir a vegetação aquática que esconde a Tesáurea e fazer seu pedido diretamente à criatura lá dentro, antes de subir novamente à superfície.

A belíssima transformação ocorre dentro de uma bolsa de seda que aprisiona uma bolha de ar, onde a Tesáurea se desenvolve enquanto uma vibração pacífica envolve aqueles que se aproximam.

Porém, algumas intercorrências podem acontecer. Às vezes, o inseto fica encantado com a beleza da Tesáurea e permanece tempo demais diante dela, afogando-se antes de conseguir retornar. Também pode ficar preso na vegetação ou ser devorado por Ipupiartas e outros seres aquáticos que estejam por perto.

Nem sempre o inseto que busca seu desejo no fundo da água retorna dela.`;
const descricaoSirentria = `Sirêntria é um inseto efêmero. Fêmea de sua espécie, possui uma vida muito curta. Não tem boca e sobrevive apenas com as reservas acumuladas anteriormente, vivendo geralmente um dia para cada inseto que devorou quando ainda era uma Ipupiarta.

É uma mariposa de asas curtas e incapaz de voar. Seu corpo é completamente adaptado ao ambiente aquático, e ela utiliza seu breve tempo de vida principalmente para encontrar e reproduzir com o macho de sua espécie, o Carrântano.

Sirêntria é considerada a mais bela das mariposas, quiçá um dos insetos mais belos existentes. Durante a noite, emerge parcialmente da água e produz uma belíssima vibração para chamar o Carrântano. Dizem que essa vibração é hipnótica e induz aqueles que a escutam a seguir em sua direção.

Quando um Carrântano chega voando, os dois podem acasalar na superfície da água. Depois disso, Sirêntria retorna às profundezas e deposita seus ovos.

O problema é que sua vibração também atrai outros insetos. Hipnotizados, eles se aproximam e, ao encontrarem a bela mariposa na água, continuam seguindo-a mesmo sem qualquer adaptação ao ambiente aquático. Enquanto a Sirêntria continuar vibrando, podem avançar cada vez mais fundo até morrerem afogados.

E ela não para até que o Carrântano chegue.

Alguns Ipupiartas aprenderam a se aproveitar disso, permanecendo próximos e esperando que algum inseto entre na água para capturá-lo.

Poucos insetos conseguiram escapar dessa armadilha para contar a história e alertar os outros.`;
const descricaoCarrantano = `Assim que sai de dentro da Tesáurea, Carrântano realiza seu último nado até a superfície e voa para os arredores da porção de água onde viveu. Macho da linhagem, ele não possui mais adaptações aquáticas e precisa passar sua curta vida nas proximidades do lugar onde nasceu.

Sem boca, sobrevive apenas das reservas acumuladas anteriormente, vivendo geralmente um dia para cada inseto que devorou quando ainda era uma Ipupiarta. Por isso, encontrar uma parceira antes que suas reservas terminem é extremamente importante.

Para evitar gastar energia desnecessariamente, Carrântano prefere caminhar lentamente ou permanecer imóvel enquanto espera que a vibração de uma Sirêntria o chame. Assim, acaba quase se confundindo com a paisagem ao redor, sem sequer parecer uma mariposa comum.

Sua aparência peluda, aliada à sujeira e ao lodo que permanecem sobre seu corpo depois de sair da água, já seria suficiente para torná-lo desagradável aos olhos de muitos insetos. Porém, suas asas possuem marcas que lembram dois enormes olhos malvados, formando uma carranca que parece pertencer a um predador muito maior. Carrântano também possui um cheiro forte, característico dos lugares úmidos onde vive.

Apesar de inofensivo, costuma causar pavor quando é encontrado. Dificilmente alguém consegue identificar imediatamente onde está seu verdadeiro rosto, confundindo a carranca formada pelas asas com a face de uma criatura muito maior.

Muitos fogem antes de perceber que o terrível monstro que encontraram estava apenas parado, esperando por uma Sirêntria.`;
const descricaoAssustrutora = `Marcada pelo trauma, a Assustrutora abandona a casa de sua mãe ainda muito jovem e imediatamente começa a reunir os materiais disponíveis ao seu redor para construir seu próprio refúgio. Galhos, folhas, cascas, musgos, líquens e outros materiais podem ser utilizados, fazendo com que cada casa tenha uma aparência diferente de acordo com o ambiente e com a própria lagarta.

Assustrutora é um nome genérico dado às lagartas de diferentes espécies que apresentam esse comportamento. Apesar de suas diferenças, todas compartilham o mesmo trauma e um forte instinto de construir, com urgência, um lugar onde possam se proteger.

Viver longe de uma sociedade organizada em um mundo repleto de predadores é praticamente uma sentença de morte para essas lagartas. Para piorar, a maioria possui um sabor muito apreciado por diversos predadores. Um refúgio bem construído acaba sendo sua principal chance de sobrevivência.

As Assustrutoras carregam suas casas nas costas e se recolhem completamente ao menor sinal de perigo. Por passarem grande parte da vida protegidas dessa forma, tornam-se facilmente ermitãs e antissociais, evitando qualquer exposição desnecessária.

Mas nenhuma casa nasce perfeita. Sua resistência acaba sendo testada durante ataques e, sempre que sobrevivem a um deles, as Assustrutoras aprendem com as falhas de sua construção. Substituem materiais, reforçam pontos vulneráveis e aperfeiçoam pouco a pouco suas habilidades, tornando o refúgio cada vez mais resistente.

Para uma Assustrutora, construir bem não é apenas uma habilidade.

É o que determina se ela terá a oportunidade de continuar crescendo.

Nem todas chegam à fase adulta, e elas sabem muito bem disso.`;
const descricaoFortrutura = `Quando chega o momento de se transformar, a Assustrutora constrói sua Fortrutura, uma estrutura feita para protegê-la durante o período mais vulnerável de sua vida. É nesse momento que tudo o que aprendeu sobre construção será colocado à prova.

Por isso, nenhuma Assustrutora inicia sua Fortrutura sem se lembrar da história das Três Assustrutoras, uma antiga narrativa transmitida cuidadosamente entre elas. Os detalhes mudam a cada versão, mas seu ensinamento permanece o mesmo: nenhuma brecha deve ser ignorada e nenhuma estrutura deve ser considerada resistente antes de ser realmente testada.

Conta-se que três Assustrutoras construíram suas casas utilizando materiais e técnicas diferentes. Quais eram esses materiais e quais técnicas utilizaram depende de quem conta a história. Depois de uma vida inteira aperfeiçoando suas construções, cada uma finalmente ergueu sua própria Fortrutura e iniciou a transformação.

Durante esse período, foram encontradas por um esperto Besteriano.

Ele atacou a primeira Fortrutura e conseguiu destruí-la. Algumas versões culpam os materiais, outras a maneira como foram encaixados ou uma pequena falha deixada durante a construção. O destino da primeira Assustrutora, entretanto, nunca muda.

O Besteriano tentou então invadir a segunda e a terceira Fortrutura. Ambas foram danificadas de maneiras diferentes, mas resistiram aos seus ataques.

Sem conseguir entrar pela força, o Besteriano esperou.

Quando as duas Assustrutoras finalmente completaram sua transformação, ele se apresentou como uma criatura bondosa e inofensiva. Uma delas acreditou nele e lhe deu exatamente a abertura de que precisava.

A outra permaneceu escondida.

No fim da história, apenas a Assustrutora mais medrosa, protegida por uma Fortrutura resistente e desconfiada demais para sair quando foi chamada, conseguiu escapar.`;
const descricaoRecluzela = `A medrosa Reclusela se desenvolve como uma mariposa adulta sem asas e de aparência larviforme. Depois de tudo o que enfrentou como Assustrutora, ela já conhece muito bem os perigos existentes fora de seu abrigo.

Algumas Recluselas continuam aperfeiçoando a casa que carregaram durante toda a vida. Reforçam seus pontos vulneráveis, substituem materiais e corrigem antigas falhas até transformá-la em uma estrutura extremamente difícil de danificar.

Até que chega o momento em que a Reclusela considera sua obra finalmente segura.

Essa decisão marca uma mudança definitiva em sua vida. Convencida de que seu abrigo é suficiente para protegê-la do mundo, ela deixa de sair. Com o passar do tempo, o medo do exterior e sua paranoia apenas aumentam, até que abandonar a segurança da casa se torna impensável.

A partir daí, a Reclusela não sai sequer para se alimentar. Consumirá lentamente as reservas acumuladas durante sua juventude e permanecerá em reclusão até gastar sua última gota de energia.

É justamente durante esse período que chega seu momento de reprodução.

Os Besterianos começam então a procurar pelas Recluselas, tentando entrar em seus abrigos ou convencê-las a permitir sua aproximação. Não é uma tarefa fácil. Algumas jamais cedem, enquanto outras acabam vencidas pela necessidade de reprodução e permitem que um Besteriano se aproxime o suficiente para acasalar.

Depois disso, a Reclusela permanece dentro de sua casa e deposita ali seus ovos.

A maioria morre antes ou pouco depois de eles eclodirem.

Os filhotes começam, portanto, a vida no mesmo lugar que deveria representar segurança absoluta. Ao redor deles estão as marcas das inúmeras tentativas de invasão sofridas pela casa e, muitas vezes, o corpo da própria mãe.

Assim que conseguem, abandonam o abrigo.

Saem para um mundo que aprenderam a temer antes mesmo de conhecê-lo, carregando consigo apenas uma lembrança da mãe: uma história que escutavam enquanto ainda estavam dentro dos ovos.

Possivelmente, a única história que ela conhecia.

A história das Três Assustrutoras.`;
const descricaoBesteriano = `O Besteriano surge da Fortrutura como uma mariposa grande, forte e alada. Assustado até mesmo com a própria força, abandona sua antiga proteção e começa a experimentar o mundo exterior com muito cuidado.

Acostumado desde pequeno a tomar medidas de segurança, ele logo percebe que muitos dos perigos que tanto temia podem ser evitados. Aprende a voar, reconhecer ameaças e escapar de situações arriscadas, tornando-se progressivamente mais confiante.

A jornada do Besteriano é, antes de tudo, uma libertação de seu próprio medo.

Depois de superar boa parte dele, porém, descobre que possui uma missão particularmente difícil: encontrar uma Reclusela e convencê-la a reproduzir.

O coitado do Besteriano provavelmente enfrenta uma das cortes mais difíceis entre todos os insetos. Convencer uma Reclusela de que ele não pretende lhe fazer mal — ou encontrar alguma maneira de atravessar a extraordinária proteção de seu abrigo — pode ser uma tarefa quase impossível.

E existe um problema ainda pior.

Besterianos também conhecem a história das Três Assustrutoras.

Eles cresceram ouvindo a mesma história que as Recluselas e sabem perfeitamente que, agora, são eles o vilão dela.

Muitos tentam cortejar várias Recluselas sem qualquer sucesso. Alguns acabam perdendo a paciência e tentam forçar uma entrada no abrigo. Raríssimos encontram alguma falha estrutural e conseguem abrir uma passagem que permita o acasalamento.

Mas toda a força de um Besteriano costuma valer muito pouco contra uma casa aperfeiçoada durante uma vida inteira.

Por isso, a maior parte dos sucessos vem da lábia.

Os mais habilidosos conseguem conquistar a confiança de mais de uma Reclusela e continuam procurando outras durante sua vida. Fora do período reprodutivo, levam uma existência relativamente solitária, mas, ao contrário das fêmeas, podem socializar com outros insetos e conhecer lugares e histórias que jamais ouviriam dentro de uma Fortrutura.

Infelizmente, boa parte dessas histórias são apenas boatos sobre mariposas e aranhas assustadoras.`;

const descricaoInfantarva = `Infantarva é como são chamadas as larvas de escaravelhos em sua primeira muda. Mesmo pertencendo a linhagens completamente diferentes, todas possuem praticamente a mesma aparência e aquela expressão infantil de quem ainda não sabe muito bem o que está fazendo naquele mundo.

Infantarvas costumam ser extremamente esfomeadas, e a primeira coisa que fazem ao nascer é começar a comer tudo o que encontram ao redor. Por esse motivo, seus ovos geralmente são deixados pelas mães em ambientes ricos em alimento. A escolha do lugar, porém, pode ter significados muito diferentes: pode ser pela alimentação disponível, por ser um território específico, pelo local de nascimento da mãe ou até por ser considerado um lugar sagrado. Isso depende da linhagem à qual a Infantarva pertence.

Apesar de serem extremamente parecidas, um observador experiente consegue identificar sua linhagem através de diferenças minúsculas: padrões de manchas, tamanho dos pelos, pequenos detalhes nas mandíbulas, discretas alterações de cor e outras características que poderiam parecer irrelevantes.

Entretanto, quem realmente conhece as diferentes linhagens muitas vezes nem precisa procurar essas marcas. O comportamento de uma Infantarva costuma denunciar sua origem, pois, mesmo tão jovem, ela já parece absorver naturalmente aspectos da cultura de sua linhagem.

Na segunda muda, as diferenças começam a se tornar muito mais evidentes. Sua aparência passa a incorporar características próprias e ela recebe um novo nome, correspondente à linhagem à qual pertence.

Na terceira e última muda larval, qualquer semelhança entre elas praticamente desaparece. As antigas Infantarvas podem apresentar diferenças enormes de tamanho, coloração, comportamento e anatomia, já possuindo muitas das características únicas que definirão sua forma final como larva.

E isso produz uma consequência muito boa para as cinco já prontas: Roninfa, Lourarva, Barbarva, Giglope e Shenanta agora deixam de ser “a larva” e passam a representar formas posteriores da infância de uma criatura que começou como Infantarva.`;
const descricaoRoninfa = `Desde que era Infantarva, ela já apresenta características próprias de um Roninfa. Demonstrando grande interesse por pequenos galhos e fibras de madeira, utilizando as mandíbulas para retirar finas tiras de material vegetal e entrelaçá-las até formar seu característico chapéu.

Roninfa também procura entre os galhos aquele que considera adequado para seu treinamento. Quando encontra o perfeito, trabalha cuidadosamente sua superfície, removendo irregularidades e ajustando seu formato até transformá-lo em uma simples espada de madeira.

Depois de aperfeiçoar suficientemente suas primeiras habilidades, toma uma decisão característica de sua linhagem: deixa o lugar onde nasceu e parte sozinho. A partir desse momento, passa a viajar em busca de alimento e aperfeiçoamento, carregando consigo apenas aquilo que produziu.

Seu chapéu esconde os olhos como um sinal de que não busca conflitos. Roninfa jamais encara outro inseto diretamente: quando encontra alguém pelo caminho, baixa o chapéu e procura um lugar pacífico onde possa continuar treinando e se alimentando.

Se for atacado, porém, precisa demonstrar o resultado de seu treinamento incessante. Apesar de ainda possuir um corpo relativamente frágil, suas habilidades de combate não devem ser subestimadas. A prática transforma seu simples galho em uma arma surpreendentemente eficiente.

Com a terceira muda, Roninfa se torna maior e mais resistente. Seu chapéu é refeito para acompanhar o novo tamanho, enquanto um novo galho é escolhido e trabalhado com muito mais cuidado. A mudança física é interpretada como consequência do próprio aperfeiçoamento, e seus treinamentos tornam-se cada vez mais exigentes.

Essas transformações deram origem à crença nas Três Etapas Espirituais do Roninfa: a primeira começa ainda como Infantarva, antes de partir; a segunda marca o abandono do lugar onde nasceu e o início de sua jornada; e a terceira representa o Roninfa maduro, que continuará vagando e aperfeiçoando corpo e espírito até encontrar o caminho que o levará à próxima fase de sua vida.`;
const descricaoGusokulo = `Após encontrar o lugar perfeito para descansar e completar as três etapas espirituais, o corpo de Roninfa se transforma em uma poderosa armadura que ele vestirá quando estiver pronto.

O Gusokulo permanece imóvel, resistindo ao vento forte, ao sol escaldante, à chuva e a qualquer outra intempérie. As pequenas pernas localizadas na parte inferior da carapaça raramente são utilizadas e só entram em ação quando outro inseto decide atacá-lo.

Mesmo parecendo incapaz de lutar, Gusokulo possui armas escondidas em sua própria estrutura. As três lâminas em suas costas e os chifres de sua carapaça podem ser usados como armas letais.

Quando necessário, Gusokulo consegue girar seu corpo com uma velocidade surpreendente, transformando sua carapaça em uma arma capaz de ferir e, por vezes, até decapitar um adversário. Tudo isso sem praticamente deixar seu lugar.

Dizem que, depois de derrotar um inimigo, Gusokulo sobe sobre o corpo daquele que caiu e permanece ali, imóvel como antes.

Para quem encontra a cena, não há dúvida sobre o significado.

É um aviso para o próximo que decidir tentar a sorte.`;
const descricaoKabutouro = `A filosofia de vida de Kabutouro é simples: viver com pouco e usar sua força para proteger aqueles que não podem se proteger sozinhos.

Kabutouro percorre diferentes sociedades de insetos e, às vezes, decide juntar-se às suas causas. Temido e respeitado, dificilmente passa despercebido por onde anda. Sua imponente armadura, seus chifres e seu letal braço em forma de katana anunciam a presença de um guerreiro que passou a vida inteira aperfeiçoando suas habilidades.

Dizem que o tamanho de seus chifres revela sua força e dedicação de treino quando era uma lagarta. Quanto maiores os chifres, mais formidável é o Kabutouro.

Quando dois Kabutouros se encontram, porém, nem sempre há espaço para convivência pacífica. É comum que desafiem um ao outro para descobrir quem é o melhor guerreiro. Essas batalhas podem durar horas e, algumas vezes, terminam com a morte de um dos combatentes.

Apesar de passar grande parte da vida viajando e lutando por aqueles que precisam de proteção, Kabutouro não permanece sozinho para sempre.

Quando sente que seus dias de batalha estão chegando ao fim, procura um lugar entre os seus. Ali, abandona a vida errante e passa o restante de sua vida formando uma família..

Depois de uma vida inteira procurando seu caminho, o velho guerreiro finalmente encontra um lugar para chamar de lar.`;
const descricaoLourarva = `A Lourarva nasce como a maioria, uma Infantarva pequena e comilona em aparência, mas possui um grande ímpeto pelo desenvolvimento e pela perfeição. Ela simplesmente não para de treinar sua força e de se desafiar a feitos cada vez maiores. Naturalmente, estabelece uma rotina de sono, alimentação e treino, que segue rigorosamente.

A rotina bem estruturada da Lourarva traz grandes resultados. Em sua terceira muda, ela se torna enorme, vigorosa e confiante. Seu espírito competitivo aumenta e ela começa a procurar adversários para competir em basicamente qualquer coisa que envolva demonstração de força, geralmente encontrando verdadeira rivalidade apenas entre os seus e insetos maiores.

A derrota é encarada como um desafio pessoal. Quando perde, a Lourarva treina e come ainda mais com um objetivo em mente. Superar a si mesma e superar seus desafiantes torna-se seu estilo de vida até chegar à última muda.

Em sua muda final, sua cabeça ganha um belo detalhe dourado, do qual se orgulha, juntamente com seu corpo enorme e poderoso. É nesse momento que a Lourarva para de competir e passa a buscar uma utilidade real para sua força.

Geralmente, procura um grupo de insetos ou uma comunidade que precise de ajuda com algo que exija grande força. O trabalho de uma Lourarva pode ser muito variado, desde um combate real contra alguém muito forte ou até mesmo um enxame, até carregar sozinha algo necessário ou recuperar alguma coisa de difícil acesso.

Esse grande trabalho é considerado o momento de glória da Lourarva. Depois de realizá-lo, ela permanece naquele lugar pelo resto de seus dias como larva, onde passa a ser admirada pelo feito que realizou.`;
const descricaoPupumento = `Quando chega o momento, a Lourarva começa a construir uma câmara no lugar onde viveu seus últimos dias como larva, dispensando a ajuda dos insetos que gostariam de auxiliá-la.

Ela cava um túnel e constrói uma enorme câmara subterrânea onde, sem qualquer receio de passar por sua fase mais vulnerável, transforma-se no Pupumento.

O Pupumento possui uma aparência que parece retratar o estilo de vida que teve como Lourarva, lembrando um inseto absurdamente forte carregando algo ainda mais pesado que o próprio corpo.

Os insetos que receberam a ajuda da Lourarva durante seu grande trabalho costumam não apenas proteger a câmara, mas também enfeitá-la com objetos e símbolos que remetem ao feito realizado. Assim, a câmara se torna um lugar de respeito e admiração pelo inseto que repousa em seu interior.

A câmara do Pupumento costuma ser visitada até mesmo por insetos de outros lugares, que oferecem algum recurso à comunidade em troca da oportunidade de conhecê-la. Quanto maior tiver sido o feito da Lourarva, mais glorificado e visitado será seu Pupumento.`;
const descricaoBesocles = `A vida de Bésocles é uma vida de aventuras. Ele costuma deixar o lugar onde foi glorificado e partir em busca de desafios maiores e, segundo ele, mais necessários, transformando a ideia de seu grande trabalho em um ideal de vida.

Bésocles mantém sua rotina de treinamento para conservar sua força. É um inseto assustadoramente forte e robusto, que utiliza seus enormes chifres e seus quatro braços para realizar os mais difíceis feitos.

Os Bésocles competem por fêmeas, geralmente várias ao longo da vida, enfrentando uns aos outros em disputas de força e combate. Nessas ocasiões, seus enormes chifres são especialmente importantes para agarrar, erguer e derrubar seus adversários.

Apesar da aparência intimidadora, Bésocles costuma ser bem-humorado e continua aceitando disputas competitivas durante suas viagens. Seu tamanho, sua força e sua aparência fazem dele um inseto frequentemente admirado, e poucos têm coragem de enfrentá-lo verdadeiramente.

Por sua dedicação quase exclusiva à força, porém, Bésocles não está entre os insetos mais inteligentes. Às vezes pode ser enganado e usado por outros, chegando a participar de guerras consideradas injustas ou a realizar feitos reprováveis sem compreender completamente aquilo em que se envolveu.

Quando percebe o que fez, isso pode atingir justamente uma das coisas das quais mais se orgulha: sua reputação.`;
const descricaoBesolita = `Diferentemente de Bésocles, Besólita não deixa o lugar onde realizou seu grande trabalho, tornando-se uma espécie de protetora local. Ela não possui a mesma força física do macho de sua linhagem nem seus enormes chifres, mas continua sendo um inseto assustadoramente grande e forte.

Besólita entende que o ideal não é possuir apenas um corpo poderoso, mas também uma mente poderosa, e inicia uma busca pelo equilíbrio entre os dois.

Durante o início de sua nova vida, aprende tudo o que pode sobre o lugar e os insetos que decidiu proteger, desenvolvendo um intelecto muito superior ao de Bésocles sem abandonar completamente seus treinamentos. Besólitas costumam se tornar excelentes líderes de enxames locais, tanto na estratégia de guerra quanto no treinamento de seus integrantes.

Quando entra em seu período fértil, ela e a comunidade organizam um grande torneio de combate, que costuma atrair Bésocles que estejam viajando pela região. As competições são assistidas por inúmeros insetos e acabam trazendo muitos recursos para a comunidade. Ao final, Besólita sempre aceita o vencedor como parceiro por um curto período.

Quando chega o momento de colocar seus ovos, Besólita viaja para longe do lugar onde vive e procura uma região com abundância de alimento para sua cria. Deposita seu ovo e parte, mesmo tendo capacidade mais do que suficiente para protegê-lo.

Para ela, isso é necessário. Uma Lourarva criada sob a proteção da mãe aprenderia a confiar na força de Besólita em vez de desenvolver a própria.`;
const descricaoBarbarva = `A Barbarva é um inseto extremamente territorial. Logo após nascer, escolhe uma pequena região para chamar de sua e passa grande parte da vida naquele local, cavando túneis e escavando troncos de madeira em decomposição.

É desse território que retira praticamente tudo de que precisa: alimento, abrigo, recursos e pedaços de madeira que transforma em ferramentas de batalha.

O nome Barbarva foi dado por outros insetos, pois a maioria é incapaz de compreender sua linguagem e afirma escutar apenas uma sequência de sons parecidos com “bar, bar, bar”. Insetos que vivem próximos às Barbarvas, entretanto, conseguem aprender a se comunicar com elas e, principalmente, sabem respeitar seus territórios.

Quando um desconhecido invade suas terras, a Barbarva não costuma atacar imediatamente. Primeiro, bate com força seu pedaço de pau contra a casca de madeira que carrega, enquanto reclama em sua língua incompreensível e encara o invasor com seu habitual olhar furioso. Normalmente, esse aviso é suficiente.

Se o invasor não for embora, porém, ela parte para o ataque com grande fúria.

Como seu exoesqueleto ainda não possui a resistência que terá na fase adulta, a Barbarva utiliza uma grossa casca de madeira para se proteger dos golpes. Com o tempo, desenvolve técnicas bastante eficientes de defesa e ataque utilizando sua proteção e seus pedaços de madeira.

Apesar de ainda ser apenas uma larva, pode ser um adversário bastante perigoso.

O recomendado é simplesmente deixá-la em paz.`;
const descricaoDraugrupa = `No território de uma Barbarva, chega um momento em que ela simplesmente parece desaparecer. Nenhum de seus pertences permanece na superfície e não há qualquer sinal de que ainda esteja por perto, como se tivesse abandonado definitivamente o lugar.

Porém, ao explorar seu território, é possível encontrar túneis recém-escavados que levam até uma câmara subterrânea. É ali que repousa a Draugrupa.

Dentro da câmara estão todos os pertences que acumulou durante sua vida como Barbarva. A Draugrupa permanece imóvel entre eles, mas seus olhos parecem acompanhar constantemente qualquer um que entre no local.

Sua aparência é perturbadora. O corpo possui a coloração e o aspecto de um inseto morto e fossilizado, embora esteja claramente vivo e pareça estar esperando por alguma coisa.

Dizem que, se alguém tentar retirar qualquer objeto de sua câmara, a Draugrupa se levanta e persegue o ladrão até a morte. Verdade ou não, poucos estão dispostos a descobrir. Esse inseto é extremamente apegado a tudo aquilo que conquistou enquanto era uma Barbarva.

Às vezes, quando permanece por muito tempo em sua câmara, é possível ouvir sons grotescos vindos das profundezas de seus túneis.

Em regiões onde os territórios de várias Barbarvas são vizinhos, existem relatos de enormes túneis compartilhados, compostos por diversas câmaras. Cada Draugrupa ocupa a sua própria câmara e protege exclusivamente seus próprios pertences.

Poucos insetos se aventuram nesses lugares.

Dizem que aqueles que o fazem costumam ter pesadelos depois.`;
const descricaoBersourkor = `O Bersourkor não é o maior dos escaravelhos e muito menos o mais forte, mas certamente está entre os mais furiosos.

Ele costuma permanecer no mesmo território que ocupava durante suas fases anteriores e se torna ainda mais agressivo na fase adulta. Agora, além de possuir um exoesqueleto duro e resistente, um de seus braços termina em uma pesada estrutura de corte. Dizem que um golpe bem aplicado é capaz de partir o exoesqueleto de outro inseto ao meio.

Mesmo com toda essa proteção natural, o Bersourkor continua utilizando sua velha casca de madeira para se defender. A combinação entre ela e seu braço de corte resulta em uma técnica de ataque e defesa impressionante, aperfeiçoada desde os tempos em que ainda era uma Barbarva.

Bersourkors são facilmente irritáveis. Pisar em seu território ou se aproximar demais de seus pertences pode ser suficiente para que alguém seja considerado seu próximo alvo.

Em combate, entram em um estado de fúria quase cega e lutam até o fim. Ferimentos que fariam outros insetos recuar parecem apenas deixá-los ainda mais perigosos. Mesmo gravemente machucado, um Bersourkor continuará lutando da maneira que conseguir.

Apesar de sua fama, eles não são irracionais. Quando abordado com cuidado e respeito, um Bersourkor é perfeitamente capaz de responder da mesma maneira. Alguns chegam a criar fortes vínculos com pequenos grupos de outros insetos e passam a considerá-los parte de seu círculo, embora esse comportamento não seja muito comum.

O Bersourkor raramente abandona seu território. Uma das poucas exceções acontece durante o período reprodutivo, quando alguns indivíduos partem em busca de parceiros.

Quando isso acontece, o melhor é não ficar no caminho.`;
const descricaoGiglope = `Giglopes nascem no interior de troncos em decomposição e logo começam a se alimentar ferozmente. Conforme devoram a madeira e outros materiais ao seu redor, as passagens abertas no tronco tornam-se sua moradia. Às vezes, ampliam essas passagens até o solo, conectando o tronco a túneis subterrâneos e formando algo semelhante a uma pequena caverna.

Um Giglope se alimenta tanto que cresce enormemente a cada muda, tornando-se uma das maiores e mais pesadas larvas entre os escaravelhos. Conforme cresce, passa a buscar cada vez mais alimentos ricos em proteína, incluindo outros insetos menores. Com seu tamanho avantajado, encontrar presas não costuma ser difícil.

As entradas das moradias dos Giglopes são consideradas lugares perigosos. Muitas vítimas veem apenas seu enorme olho falso surgir na escuridão antes que um inseto menor seja agarrado e arrastado para dentro da toca.

Um Giglope é perfeitamente capaz de conversar e interagir normalmente com outros insetos, mas não é considerado confiável. Se estiver com fome, pode decidir comer até mesmo alguém que confiava nele. Não faz isso por perder o controle, mas porque acredita que o maior tem direito sobre os menores.

Alguns insetos particularmente corajosos desafiam-se a entrar na toca de um Giglope como forma de testar sua própria bravura. Nem todos retornam. Entre muitos Vespaleiros, porém, enfrentar e derrotar um Giglope tornou-se uma espécie de desafio pessoal, criando uma antiga rivalidade entre os dois insetos.`;
const descricaoGolitauro = `Uma das piores coisas que pode acontecer a um inseto é entrar no labirinto subterrâneo de um Golitauro.

Por algum motivo, próximo de sua transformação, os túneis abaixo do tronco onde vivia o Giglope formam um imenso complexo subterrâneo onde é extremamente fácil se perder. Suas paredes são revestidas por um substrato feito com matéria do próprio tronco, tornando-as sólidas e resistentes. Possivelmente é a mesma técnica que o Giglope utilizava para reforçar os enormes túneis por onde passava.

Ninguém sabe ao certo por que o labirinto existe.

Alguns dizem que ele simplesmente se forma durante a vida do Giglope e só parece complexo para quem não conhece seus caminhos. Outros acreditam que ele o constrói propositalmente para dificultar que alguém encontre seu corpo enquanto se transforma.

Existe ainda uma explicação muito mais assustadora.

Dizem que o labirinto foi feito para que outros insetos entrem e não consigam mais sair. Assim, quando finalmente despertar, o Golitauro já terá sua primeira vítima perdida em algum lugar de seus túneis.

Existe apenas um relato conhecido de um inseto que conseguiu atravessar o labirinto, encontrar o Golitauro e ainda localizar a saída antes que ele despertasse. Segundo seu relato, a criatura permanecia imóvel em uma câmara escondida nas profundezas do complexo.

Era gigantesca, assustadora e incrivelmente dura e resistente.`;
const descricaoGladolias = `O gigantesco escaravelho Gladolias possui uma fama terrível: eles esmagam por diversão.

Sua alimentação é principalmente frutífera. São excelentes escaladores e conseguem encontrar frutas com facilidade, não tendo mais qualquer necessidade de devorar outros insetos. Isso, porém, não os impede de bater, empurrar ou esmagar algum apenas porque podem.

Gladolias ainda vive em sua complexa toca subterrânea e costuma ser arrogante e desdenhoso com insetos menores. O ideal é manter certa distância de um, pois não é incomum alguém ser simplesmente empurrado para longe sem motivo algum.

Eles também realizam disputas entre si. Durante o período reprodutivo, um macho precisa derrotar a própria fêmea em combate corporal para conquistar o direito de acasalar com ela.

Curiosamente, Gladolias adora competições de luta. É extremamente comum encontrá-los em qualquer evento que envolva combate, principalmente nos torneios realizados por aqueles que eram seus antigos inimigos quando ainda eram Giglopes: os Vespaleiros.

Gladolias parece não se importar mais com a antiga rivalidade.

Desde que tenha a oportunidade de subjugar um adversário, pouco importa quem esteja organizando o torneio.`;
const descricaoShenanta = `Ainda como Infantarva, Shenanta já demonstra uma estranha relação com as árvores. Embora seja tão esfomeada quanto qualquer outra, por vezes interrompe a alimentação e permanece imóvel diante de uma árvore por longos períodos, como se simplesmente a estivesse contemplando.

Em sua segunda muda, ela adquire sua característica coloração azulada. Costuma permanecer próxima às raízes das árvores, alimentando-se delas e passando longos períodos parcialmente enterrada em contemplação. Ninguém sabe exatamente o que chama sua atenção, mas Shenanta parece demonstrar preferência por determinadas árvores, podendo ignorar várias delas antes de se acomodar diante de uma específica.

Shenanta é sociável, embora prefira passar a maior parte do tempo sozinha, comendo e contemplando. Apesar de gostar da solidão, recebe tranquilamente a companhia de outros insetos e não parece se incomodar quando permanecem próximos enquanto ela se alimenta.

Devido à sua alimentação praticamente incessante, cresce absurdamente ao longo das mudas. Na terceira, seu tamanho já se torna impressionante e sua coloração azulada muito mais evidente.

Em sua muda final, além de atingir proporções enormes, os arredores de sua cabeça desenvolvem formas que lembram cabeças de serpentes. Isso provoca interpretações bastante diferentes entre outros insetos. Alguns grupos, especialmente seguidores da Palavra da Vida, preferem manter distância ou chegam a temer a enorme Shenanta por sua estranha aparência serpentina.

Outros povos, como os Kurupins, não veem qualquer problema e consideram a tranquila Shenanta uma criatura de aparência fascinante.

Shenanta raramente entra em conflito com outros insetos, mas, quando necessário, sabe muito bem utilizar seu enorme tamanho e peso para se proteger.`;
const descricaoShirvana = `A transformação em Shirvana ocorre de forma misteriosa. Quando chega o momento, Shenanta geralmente segue determinada em alguma direção, como se tivesse sido guiada até lá por um sinal interior.

O lugar escolhido costuma ficar sob uma árvore, e às vezes Shenanta precisa cavar até encontrar o ponto exato onde realizará sua transformação.

Shirvana emana uma estranha aura de tranquilidade. Não é incomum que um inseto viajando pelas proximidades sinta que algo o chama até aquele lugar e, ao chegar, encontre Shirvana pacificamente posicionada, como se estivesse esperando por ele. Alguns acabam imitando sua posição e permanecem diante dela por muito tempo, retornando de lá tomados por uma profunda sensação de paz.

Há quem diga que o olho na testa de Shirvana consegue enxergar aquilo que aflige um inseto e retirar dele esse peso caso permaneça em sua companhia por tempo suficiente. Por isso, encontrar uma Shirvana é considerado uma bênção.

Um viajante contou certa vez ter sentido o chamado de uma Shirvana que, estranhamente, não se encontrava sob as raízes de uma árvore, mas em um jardim oculto. Segundo ele, o próprio Louvolin-branco estava sentado diante dela. O viajante se juntou aos dois, e os três permaneceram ali, em completo silêncio, durante horas.`;
const descricaoMeganesha = `Ao despertar de sua longa transformação, Meganesha deixa para trás a quietude absoluta de Shirvana, mas parece carregar consigo parte da serenidade daquele estágio.

É uma criatura enorme e imponente, cujo peso e força poderiam facilmente torná-la ameaçadora. Apesar disso, Meganesha costuma tratar outros insetos com tranquilidade e parece especialmente disposta a ajudar aqueles que encontra enfrentando alguma dificuldade. Suas quatro mãos são fortes e habilidosas, capazes de mover grandes obstáculos, enquanto o enorme chifre à frente da cabeça permite erguer e afastar aquilo que poucos insetos conseguiriam sequer deslocar.

Talvez por isso, encontrar um Meganesha diante de um caminho bloqueado seja considerado um sinal de sorte. Ele parece sentir satisfação especial em abrir passagens, retirar troncos caídos, pedras e outros obstáculos, muitas vezes permanecendo por perto até que todos consigam atravessar.

Isso não significa que seja incapaz de lutar. Meganeshas são extremamente fortes e difíceis de derrubar. Quando precisam enfrentar outro inseto, utilizam o peso do próprio corpo, os quatro braços e seus chifres para agarrar, empurrar e levantar o adversário. Seus confrontos costumam parecer muito mais uma disputa de força do que uma tentativa de ferir, e mesmo entre eles é comum que uma luta termine assim que um dos dois demonstra não conseguir mais resistir.

Curiosamente, alguns Meganeshas também demonstram um apetite quase tão impressionante quanto aquele que possuíam quando Shenantas. Frutas maduras e seiva são capazes de fazê-los abandonar por algum tempo até mesmo suas longas caminhadas. Meganesha também parece possuir um conhecimento incomum sobre as árvores. Mesmo em lugares desconhecidos, costuma encontrar aquelas onde poderá conseguir alimento em abundância. Utilizando seus fortes braços dianteiros, abre a superfície da árvore até fazer a seiva escorrer.

Apesar de seu enorme apetite, raramente guarda o alimento apenas para si. Outros insetos que estejam por perto podem se aproximar e se alimentar da seiva que Meganesha fez brotar, e ele parece não se incomodar com a companhia.

Alguns acreditam que esse conhecimento vem do longo tempo que Shenanta passa contemplando as árvores. Outros simplesmente dizem que Meganesha sempre sabe onde procurar.`;
const descricaoMalharda = `Desde quando ainda era uma Infantarva, Malharda já demonstrava uma personalidade séria e levava tudo a sério até demais. Em sua segunda muda, desenvolve um exoesqueleto mais duro, que combina com sua natureza introvertida.

Malharda é considerada extremamente confiável e leal. Não costuma fazer promessas, mas, quando as faz, tenta o possível e o impossível para cumpri-las.

Essa característica muitas vezes é aproveitada por outros insetos. Quando convencida da importância de alguma empreitada, pode acompanhar outro inseto como uma fiel aliada. Isso acontece principalmente com as formas adultas de sua própria linhagem, que costumam convencê-la de que a parceria será um aprendizado importante para ajudá-la a um dia se tornar um Resplansouro.

A grande maioria das Malhardas torna-se facilmente seguidora do Besouro da Luz, uma vertente da Palavra da Vida que tem como figura central um Resplansouro lendário. Elas seguem à risca os ensinamentos dessa vertente, conciliando-os com seus próprios ideais de honra e lealdade.`;
const descricaoEscalibupa = `A Escalibupa define aquilo em que a Malharda se tornará. Quando chega o momento de sua transformação, ela precisa encontrar uma raiz forte que possa se tornar parte de sua futura arma. Para isso, cava o subterrâneo de diferentes plantas em busca da raiz ideal. Quando finalmente a encontra, finca um dos braços firmemente nela e inicia sua transformação em Escalibupa.

Todo o processo faz parte de uma grande tradição e possui diversos objetivos. O primeiro é conseguir unificar o braço à raiz. Durante a transformação, seu exoesqueleto penetra a raiz de forma afiada e passa a envolvê-la, formando uma estrutura de corte e combate semelhante aos ferrões, lâminas e outras armas naturais encontradas em diferentes insetos.

O processo alonga o braço enquanto mantém a raiz em seu interior. Algumas Escalibupas conseguem produzir uma estrutura perfeitamente afiada; outras... nem tanto.

Outro objetivo é desenvolver um exoesqueleto tão belo e resistente quanto possível. Dizem que a escolha da raiz correta influencia diretamente o resultado. Outros afirmam que depende do caráter da Malharda, de seu destino ou até de sua devoção ao Besouro da Luz. Há quem acredite que esses fatores determinam inclusive a cor e a homogeneidade do futuro exoesqueleto.

A maioria das que não consegue realizar corretamente a união com a raiz torna-se Glorifário. Aquelas que conseguem podem se transformar em Prataladinos ou Resplansouros.

A união com a raiz não é biologicamente necessária para que a Escalibupa complete sua transformação. Entretanto, sem ela, sua forma adulta não desenvolverá adequadamente o característico braço afiado, algo que representa uma enorme perda de prestígio entre os membros da linhagem.

Por isso, embora não seja necessária para sobreviver, encontrar a raiz tornou-se uma parte essencial da transformação.`;
const descricaoGlorifario = `Ao contrário do que muitos pensam, um Glorifário pode possuir um braço afiado conquistado durante sua fase de Escalibupa. Geralmente, porém, sua lâmina não é tão afiada ou uniforme quanto a dos outros dois. Estranhamente, isso costuma gerar ainda mais preconceito. Dizem que um Glorifário que conseguiu desenvolver o braço afiado não possuía bom caráter e, por isso, não foi digno de receber um exoesqueleto de prata ou ouro. Já os mais comuns, que sequer desenvolveram a lâmina, são vistos apenas como indivíduos sem prestígio.

O exoesqueleto do Glorifário ainda é belo e resistente, mesmo sem as colorações mais prestigiadas da linhagem. Pode apresentar diferentes tons, como bronze, castanho ou cores mais escuras, embora o mais comum seja alguma tonalidade de verde-jade, com ou sem manchas escuras de formatos variados.

Quando não possuem o braço afiado, lutam utilizando os espinhos cortantes nas laterais dos braços. Alguns também os utilizam para escalar e realizar ataques surpresa, prática eficiente, mas considerada desonrada entre os membros de sua linhagem.

Glorifários são frequentemente vistos acompanhados por uma Malharda, cuja lealdade utilizam como suporte de combate e, algumas vezes, até mesmo como isca para ataques surpresa. Juntos, partem em missões pelas quais o Glorifário espera conquistar a glória que não obteve durante sua Escalibupa.

Essas missões geralmente exigem algum pagamento em recursos ou serviços. Isso tende a prejudicar ainda mais a reputação dos Glorifários, pois cobrar por seus feitos é visto com maus olhos por muitos de sua linhagem. Para o Glorifário, entretanto, é também uma necessidade: ele precisa de recursos suficientes para manter a si mesmo e sua Malharda na ativa.`;
const descricaoPrataladino = `O Prataladino é a forma que conseguiu desenvolver um exoesqueleto de prata. Essa coloração representa enorme prestígio dentro da linhagem. Seu exoesqueleto brilha e reflete a luz de maneira impressionante, e Prataladinos são frequentemente vistos como modelos de comportamento, moral e ética. Os costumes da crença do Besouro da Luz são profundamente assimilados por eles e tornam-se a base tanto de sua conduta pessoal quanto da imagem que representam perante a sociedade.

Por algum motivo desconhecido, Prataladinos desenvolvem o braço afiado com grande facilidade, sendo extremamente raro encontrar um que não o possua. Quando isso acontece, geralmente significa que ele entrou na fase de Escalibupa antes de encontrar sua raiz. Mesmo sem possuir o prestigioso braço afiado, esses indivíduos costumam ser considerados destinados, pois ainda assim alcançaram o exoesqueleto prateado.

Apesar de toda a fama, o exoesqueleto de um Prataladino não é necessariamente mais resistente que o de um Glorifário. Quanto à beleza e ao prestígio, porém, poucos membros da linhagem ousariam fazer a mesma comparação.

Seu braço afiado e uniforme é um dos maiores símbolos de seu prestígio. Prataladinos aprendem a utilizá-lo com grande habilidade em combate, e os mais respeitados entre os guerreiros costumam ser aqueles que melhor dominam sua própria lâmina.

Prataladinos são frequentemente cooptados para integrar o Exército do Besouro da Luz. Após participarem de alguma missão determinada pela organização, recebem um pequeno território próprio dentro do gigantesco domínio das Sacerdoletas. Essas missões geralmente envolvem a conquista de novos territórios ou a recuperação de regiões destinadas à Organização do Besouro da Luz.

Sua reputação costuma ser ilibada, e os Prataladinos sabem utilizá-la quando necessário. Quando não estão servindo ao exército, normalmente vivem em seus próprios territórios, acolhendo como protegidos outros insetos que ali habitam e procurando manter aquelas terras prósperas e seguras.

Para os insetos que vivem sob sua proteção, o Prataladino é visto como um senhor responsável pela segurança do território e das rotas pertencentes à Organização do Besouro da Luz.`;
const descricaoResplansouro = `O prestígio do Resplansouro vem puramente da coloração dourada de seu exoesqueleto. Objetivamente, ele não possui qualquer superioridade em relação ao Prataladino. Toda essa distinção existe por causa da conhecida história do Besouro da Luz, que teria sido um Resplansouro.

De acordo com a história, um Resplansouro apareceu nas regiões próximas a Caligo afirmando ter estado na Terra das Flores Douradas, onde teria encontrado a Borboleta da Luz, conhecida como o primeiro inseto a realizar a Grande Transformação após cumprir a Palavra da Vida.

Ele passou a ser conhecido como Besouro da Luz por vários motivos: por afirmar ter sido escolhido como enviado da Borboleta da Luz para conduzir outros insetos à Terra das Flores Douradas; por possuir um exoesqueleto dourado considerado perfeito e luminoso; e, principalmente, porque refletia uma luz branca e perfeita nos períodos que antecediam o início e o fim do dia.

Segundo a crença, aqueles banhados por essa luz poderiam entrar na Terra das Flores Douradas. Suas más ações seriam ofuscadas pela luz que vinha diretamente daquele lugar, permitindo que mesmo aqueles que até então não haviam seguido a Palavra da Vida pudessem ser aceitos pela Borboleta da Luz.

Durante sua passagem, o Besouro da Luz reuniu insetos de diferentes espécies e, ao lado deles, enfrentou incontáveis inimigos. Seus feitos extraordinários foram narrados tantas vezes que hoje são conhecidos em quase todos os lugares.

A história termina quando ele reúne um grande grupo de seguidores e os conduz pelo caminho para a Terra das Flores Douradas. Nenhum deles jamais foi visto novamente.

A veracidade dessa história é motivo de constantes debates. Questiona-se quanto de seus feitos realmente aconteceu, se foram exagerados com o tempo, se o Besouro da Luz realmente encontrou aquilo que dizia ter encontrado, se era apenas um mentiroso ou até mesmo se existiu.

Ainda assim, sua narrativa alcançou lugares e povos extremamente diferentes. Existem até mesmo baratas que seguem seus ensinamentos, algo que muitos considerariam impossível.

Seja qual for a verdade sobre o Besouro da Luz, uma consequência é incontestável: nascer Resplansouro praticamente torna o indivíduo automaticamente associado à sua figura.`;

const dadosPendentes = {
  caracteristicas: [] as string[],
  habitat: [] as string[],
  comportamento: [] as string[],
  tags: [] as string[],
}

export const insetos: Inseto[] = [
  {
    id: 'granovo',
    nome: 'Granovo',
    nomeIngles: 'Grenegg',
    imagem: '/images/formigas/granovo.png',
    descricao: descricaoGranovo,
    linhagem: 'formigas',
    estagio: 'forma ovo',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [{ insetoId: 'formilitar', tipo: 'linear' }],
  },
  {
    id: 'formilitar',
    nome: 'Formilitar',
    nomeIngles: 'Antrooper',
    imagem: '/images/formigas/formilitar.png',
    descricao: descricaoFormilitar,
    linhagem: 'formigas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [{ insetoId: 'formajor', tipo: 'ramificada' }, { insetoId: 'formiloto', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'granovo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'formajor',
    nome: 'Formajor',
    nomeIngles: 'Majant',
    imagem: '/images/formigas/formajor.png',
    descricao: descricaoFormajor,
    linhagem: 'formigas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [{ insetoId: 'formitanque', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'formilitar', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'formiloto',
    nome: 'Formiloto',
    nomeIngles: 'Antilot',
    imagem: '/images/formigas/formiloto.png',
    descricao: descricaoFormiloto,
    linhagem: 'formigas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    evolucoes: [{ insetoId: 'formicoptero', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'formilitar', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'formitanque',
    nome: 'Formitanque',
    nomeIngles: 'Antank',
    imagem: '/images/formigas/formitanque.png',
    descricao: descricaoFormitanque,
    linhagem: 'formigas',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'formajor', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'formicoptero',
    nome: 'Formicóptero',
    nomeIngles: 'Antchopper',
    imagem: '/images/formigas/formicoptero.png',
    descricao: descricaoFormicoptero,
    linhagem: 'formigas',
    estagio: 'forma rara',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'formiloto', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'baratito',
    nome: 'Baratito',
    nomeIngles: 'Roochie',
    imagem: '/images/baratas/baratito.png',
    descricao: descricaoBaratito,
    linhagem: 'baratas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'baratuno', tipo: 'linear' }],
  },
  {
    id: 'baratuno',
    nome: 'Baratuno',
    nomeIngles: 'Croach',
    imagem: '/images/baratas/baratuno.png',
    descricao: descricaoBaratuno,
    linhagem: 'baratas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'baratrao', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'baratito', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'baratrao',
    nome: 'Baratrão',
    nomeIngles: 'Roacheeter',
    imagem: '/images/baratas/baratrao.png',
    descricao: descricaoBaratrao,
    linhagem: 'baratas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'baratuno', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'shinjinrata',
    nome: 'Shinjinrata',
    nomeIngles: 'Shinjinroach',
    imagem: '/images/baratas/shinjinrata.png',
    descricao: descricaoShinjinrata,
    linhagem: 'baratas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'koburata', tipo: 'linear' }],
  },
  {
    id: 'koburata',
    nome: 'Koburata',
    nomeIngles: 'Koburoach',
    imagem: '/images/baratas/koburata.png',
    descricao: descricaoKoburata,
    linhagem: 'baratas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'oyaburata', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'shinjinrata', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'oyaburata',
    nome: 'Oyaburata',
    nomeIngles: 'Oyaburoach',
    imagem: '/images/baratas/oyaburata.png',
    descricao: descricaoOyaburata,
    linhagem: 'baratas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'koburata', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'ninoracha',
    nome: 'Ninoracha',
    nomeIngles: 'Ninoracha',
    imagem: '/images/baratas/ninoracha.png',
    descricao: descricaoNinoracha,
    linhagem: 'baratas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'sicaracha', tipo: 'ramificada' }, { insetoId: 'lucaracha', tipo: 'ramificada' }, { insetoId: 'cubaracha', tipo: 'ramificada' }],
  },
  {
    id: 'sicaracha',
    nome: 'Sicaracha',
    nomeIngles: 'Sicaracha',
    imagem: '/images/baratas/sicaracha.png',
    descricao: descricaoSicaracha,
    linhagem: 'baratas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'ninoracha', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'lucaracha',
    nome: 'Lucaracha',
    nomeIngles: 'Lucaracha',
    imagem: '/images/baratas/lucaracha.png',
    descricao: descricaoLucaracha,
    linhagem: 'baratas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'ninoracha', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'cubaracha',
    nome: 'Cubaracha',
    nomeIngles: 'Cubaracha',
    imagem: '/images/baratas/cubaracha.png',
    descricao: descricaoCubaracha,
    linhagem: 'baratas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'ninoracha', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'vespescudo',
    nome: 'Vespescudo',
    nomeIngles: 'Waspield',
    imagem: '/images/vespas/vespescudo.png',
    descricao: descricaoVespescudo,
    linhagem: 'vespas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'vespaleiro', tipo: 'linear' }, { insetoId: 'nobrespa', tipo: 'especial' }, { insetoId: 'vesplebeu', tipo: 'ramificada' } ],
  },
  {
    id: 'vespaleiro',
    nome: 'Vespaleiro',
    nomeIngles: 'Waspight',
    imagem: '/images/vespas/vespaleiro.png',
    descricao: descricaoVespaleiro,
    linhagem: 'vespas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'vesplorde', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vespescudo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'nobrespa',
    nome: 'Nobrespa',
    nomeIngles: 'Noblasp',
    imagem: '/images/vespas/nobrespa.png',
    descricao: descricaoNobrespa,
    linhagem: 'vespas',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'realespa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vespescudo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vesplebeu',
    nome: 'Vesplebeu',
    nomeIngles: 'Waspleb',
    imagem: '/images/vespas/vesplebeu.png',
    descricao: descricaoVesplebeu,
    linhagem: 'vespas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'vespreiro', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vespescudo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vesplorde',
    nome: 'Vesplorde',
    nomeIngles: 'Wasplord',
    imagem: '/images/vespas/vesplorde.png',
    descricao: descricaoVesplorde,
    linhagem: 'vespas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'vespaleiro', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'realespa',
    nome: 'Realespa',
    nomeIngles: 'Royalasp',
    imagem: '/images/vespas/realespa.png',
    descricao: descricaoRealespa,
    linhagem: 'vespas',
    estagio: 'forma raríssima',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'nobrespa', tipo: 'linear' }],
    tipoEvolucao: 'especial',
  },
  {
    id: 'vespreiro',
    nome: 'Vespreiro',
    nomeIngles: 'Wasmith',
    imagem: '/images/vespas/vespreiro.png',
    descricao: descricaoVespreiro,
    linhagem: 'vespas',
    estagio: 'forma rara',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'vesplebeu', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vespalgoz',
    nome: 'Vespalgoz',
    nomeIngles: 'Waslayer',
    imagem: '/images/vespas/vespalgoz.png',
    descricao: descricaoVespalgoz,
    linhagem: 'vespas',
    estagio: 'forma lendária',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'vespaleiro', tipo: 'linear' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'celularva',
    nome: 'Celularva',
    nomeIngles: 'Cellularva',
    imagem: '/images/abelhas/celularva.png',
    descricao: descricaoCelularva,
    linhagem: 'abelhas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'abelaria', tipo: 'linear' }],
  },
  {
    id: 'abelaria',
    nome: 'Abelária',
    nomeIngles: 'Beetariat',
    imagem: '/images/abelhas/abelaria.png',
    descricao: descricaoAbelaria,
    linhagem: 'abelhas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'zanguardiao', tipo: 'ramificada' }, { insetoId: 'maternelha', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'celularva', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'zanguardiao',
    nome: 'Zanguardião',
    nomeIngles: 'Dronguard',
    imagem: '/images/abelhas/zanguardiao.png',
    descricao: descricaoZanguardiao,
    linhagem: 'abelhas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'supremabelha', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'abelaria', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'maternelha',
    nome: 'Maternelha',
    nomeIngles: 'Materbee',
    imagem: '/images/abelhas/maternelha.png',
    descricao: descricaoMaternelha,
    linhagem: 'abelhas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'abelaria', tipo: 'ramificada' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'supremabelha',
    nome: 'Supremabelha',
    nomeIngles: 'Supremebee',
    imagem: '/images/abelhas/supremabelha.png',
    descricao: descricaoSupremabelha,
    linhagem: 'abelhas',
    estagio: 'forma raríssima',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'zanguardiao', tipo: 'linear' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'minarva',
    nome: 'Minarva',
    nomeIngles: 'Minarva',
    imagem: '/images/abelhas/minarva.png',
    descricao: descricaoMinarva,
    linhagem: 'abelhas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'minerabelha', tipo: 'linear' }],
  },
  {
    id: 'minerabelha',
    nome: 'Minerabelha',
    nomeIngles: 'Minebee',
    imagem: '/images/abelhas/minerabelha.png',
    descricao: descricaoMinerabelha,
    linhagem: 'abelhas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'marcenelha', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'minarva', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'marcenelha',
    nome: 'Marcenelha',
    nomeIngles: 'Timbee',
    imagem: '/images/abelhas/marcenelha.png',
    descricao: descricaoMarcenelha,
    linhagem: 'abelhas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'minerabelha', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'totzen',
    nome: 'Totzen',
    nomeIngles: 'Totzen',
    imagem: '/images/louva-deus/totzen.png',
    descricao: descricaoTotzen,
    linhagem: 'louva-deus',
    estagio: 'forma ovo',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolin', tipo: 'linear' }],
  },
  {
    id: 'louvolin',
    nome: 'Louvolin',
    nomeIngles: 'Mantolin',
    imagem: '/images/louva-deus/louvolin.png',
    descricao: descricaoLouvolin,
    linhagem: 'louva-deus',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolingarra', tipo: 'ramificada' }, { insetoId: 'louvolinbranco', tipo: 'ramificada' }, { insetoId: 'louvolinescama', tipo: 'ramificada' }, { insetoId: 'louvolinferrao', tipo: 'ramificada' }, { insetoId: 'louvolinmimico', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'totzen', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'louvolingarra',
    nome: 'Louvolin-Garra',
    nomeIngles: 'Claw Mantolin',
    imagem: '/images/louva-deus/louvolinGarra.png',
    descricao: descricaoLouvolinGarra,
    linhagem: 'louva-deus',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolinfantasma', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'louvolinbranco',
    nome: 'Louvolin-Branco',
    nomeIngles: 'White Mantolin',
    imagem: '/images/louva-deus/louvolinBranco.png',
    descricao: descricaoLouvolinBranco,
    linhagem: 'louva-deus',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolinlotus', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'louvolinescama',
    nome: 'Louvolin-Escama',
    nomeIngles: 'Scaled Mantolin',
    imagem: '/images/louva-deus/louvolinEscama.png',
    descricao: descricaoLouvolinEscama,
    linhagem: 'louva-deus',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolinreidiabo', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'louvolinferrao',
    nome: 'Louvolin-Ferrão',
    nomeIngles: 'Sting Mantolin',
    imagem: '/images/louva-deus/louvolinFerrao.png',
    descricao: descricaoLouvolinFerrao,
    linhagem: 'louva-deus',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolinmilespinhos', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'louvolinmimico',
    nome: 'Louvolin-Mímico',
    nomeIngles: 'Mimic Mantolin',
    imagem: '/images/louva-deus/louvolinMimico.png',
    descricao: descricaoLouvolinMimico,
    linhagem: 'louva-deus',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'louvolinsemface', tipo: 'lendaria' }],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'louvolinfantasma',
    nome: 'Louvolin-Fantasma',
    nomeIngles: 'Phantom Mantolin',
    imagem: '/images/louva-deus/louvolinFantasma.png',
    descricao: descricaoLouvolinFantasma,
    linhagem: 'louva-deus',
    estagio: 'forma lendaria',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin-garra', tipo: 'ramificada' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'louvolinlotus',
    nome: 'Louvolin-Lótus',
    nomeIngles: 'Lotus Mantolin',
    imagem: '/images/louva-deus/louvolinLotus.png',
    descricao: descricaoLouvolinLotus,
    linhagem: 'louva-deus',
    estagio: 'forma lendaria',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin-branco', tipo: 'ramificada' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'louvolinreidiabo',
    nome: 'Louvolin-Rei-Diabo',
    nomeIngles: 'Devil-King Mantolin',
    imagem: '/images/louva-deus/louvolinReiDiabo.png',
    descricao: descricaoLouvolinReiDiabo,
    linhagem: 'louva-deus',
    estagio: 'forma lendaria',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin-escama', tipo: 'ramificada' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'louvolinmilespinhos',
    nome: 'Louvolin-Mil-Espinhos',
    nomeIngles: 'Thousand-Thorn Mantolin',
    imagem: '/images/louva-deus/louvolinMilEspinhos.png',
    descricao: descricaoLouvolinMilEspinhos,
    linhagem: 'louva-deus',
    estagio: 'forma lendaria',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin-ferrao', tipo: 'ramificada' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'louvolinsemface',
    nome: 'Louvolin-Sem-Face',
    nomeIngles: 'Faceless Mantolin',
    imagem: '/images/louva-deus/louvolinSemFace.png',
    descricao: descricaoLouvolinSemFace,
    linhagem: 'louva-deus',
    estagio: 'forma lendaria',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin-mimico', tipo: 'ramificada' }],
    tipoEvolucao: 'lendaria',
  },
  {
    id: 'parazeus',
    nome: 'Parazeus',
    nomeIngles: 'Parazeus',
    imagem: '/images/louva-deus/parazeus.png',
    descricao: descricaoParazeus,
    linhagem: 'louva-deus',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'ramificada' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'infantarva',
    nome: 'Infantarva',
    nomeIngles: 'Infantarva',
    imagem: '/images/besouros/infantarva.png',
    descricao: descricaoInfantarva,
    linhagem: 'besouros',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'roninfa', tipo: 'ramificada' }, { insetoId: 'lourarva', tipo: 'ramificada' }, { insetoId: 'barbarva', tipo: 'ramificada' }, { insetoId: 'giglope', tipo: 'ramificada' }, { insetoId: 'shenanta', tipo: 'ramificada' }, { insetoId: 'malharda', tipo: 'ramificada' }],
  },
  {
    id: 'roninfa',
    nome: 'Roninfa',
    nomeIngles: 'Roninfa',
    imagem: '/images/besouros/roninfa.png',
    descricao: descricaoRoninfa,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'gusokulo', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'gusokulo',
    nome: 'Gusokulo',
    nomeIngles: 'Gusokoon',
    imagem: '/images/besouros/gusokulo.png',
    descricao: descricaoGusokulo,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'kabutouro', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'roninfa', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'kabutouro',
    nome: 'Kabutouro',
    nomeIngles: 'Kabeetle',
    imagem: '/images/besouros/kabutouro.png',
    descricao: descricaoKabutouro,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'gusokulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'lourarva',
    nome: 'Lourarva',
    nomeIngles: 'Laurarva',
    imagem: '/images/besouros/lourarva.png',
    descricao: descricaoLourarva,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'pupumento', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'pupumento',
    nome: 'Pupumento',
    nomeIngles: 'Pupument',
    imagem: '/images/besouros/pupumento.png',
    descricao: descricaoPupumento,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'besocles', tipo: 'ramificada' },{ insetoId: 'besolita', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'lourarva', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'besocles',
    nome: 'Bésocles',
    nomeIngles: 'Beetlecles',
    imagem: '/images/besouros/besocles.png',
    descricao: descricaoBesocles,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupumento', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'besolita',
    nome: 'Besólita',
    nomeIngles: 'Beetlolyta',
    imagem: '/images/besouros/besolita.png',
    descricao: descricaoBesolita,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupumento', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'barbarva',
    nome: 'Barbarva',
    nomeIngles: 'Barbarva',
    imagem: '/images/besouros/barbarva.png',
    descricao: descricaoBarbarva,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'draugrupa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'draugrupa',
    nome: 'Draugrupa',
    nomeIngles: 'Draugrupa',
    imagem: '/images/besouros/draugrupa.png',
    descricao: descricaoDraugrupa,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'bersourkor', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'barbarva', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'bersourkor',
    nome: 'Bersourkor',
    nomeIngles: 'Berserkeetle',
    imagem: '/images/besouros/bersourkor.png',
    descricao: descricaoBersourkor,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'draugrupa', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'giglope',
    nome: 'Giglope',
    nomeIngles: 'Giglope',
    imagem: '/images/besouros/giglope.png',
    descricao: descricaoGiglope,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'golitauro', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'golitauro',
    nome: 'Golitauro',
    nomeIngles: 'Golitauro',
    imagem: '/images/besouros/golitauro.png',
    descricao: descricaoGolitauro,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'gladolias', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'giglope', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'gladolias',
    nome: 'Gladolias',
    nomeIngles: 'Gladolias',
    imagem: '/images/besouros/gladolias.png',
    descricao: descricaoGladolias,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'golitauro', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'shenanta',
    nome: 'Shenanta',
    nomeIngles: 'Shenanta',
    imagem: '/images/besouros/shenanta.png',
    descricao: descricaoShenanta,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'shirvana', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'shirvana',
    nome: 'Shirvana',
    nomeIngles: 'Shirvana',
    imagem: '/images/besouros/shirvana.png',
    descricao: descricaoShirvana,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'meganesha', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'shenanta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'meganesha',
    nome: 'Meganesha',
    nomeIngles: 'Meganesha',
    imagem: '/images/besouros/meganesha.png',
    descricao: descricaoMeganesha,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'shirvana', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'malharda',
    nome: 'Malharda',
    nomeIngles: 'Malharda',
    imagem: '/images/besouros/malharda.png',
    descricao: descricaoMalharda,
    linhagem: 'besouros',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'escalibupa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'infantarva', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'escalibupa',
    nome: 'Escalibupa',
    nomeIngles: 'Escalibupa',
    imagem: '/images/besouros/escalibupa.png',
    descricao: descricaoEscalibupa,
    linhagem: 'besouros',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'glorifario', tipo: 'ramificada' },{ insetoId: 'prataladino', tipo: 'ramificada' },{ insetoId: 'resplansouro', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'malharda', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'glorifario',
    nome: 'Glorifário',
    nomeIngles: 'Gloriflar',
    imagem: '/images/besouros/glorifario.png',
    descricao: descricaoGlorifario,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escalibupa', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'prataladino',
    nome: 'Prataladino',
    nomeIngles: 'Silverladin',
    imagem: '/images/besouros/prataladino.png',
    descricao: descricaoPrataladino,
    linhagem: 'besouros',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escalibupa', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'resplansouro',
    nome: 'Resplansouro',
    nomeIngles: 'Resplansouro',
    imagem: '/images/besouros/resplansouro.png',
    descricao: descricaoResplansouro,
    linhagem: 'besouros',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escalibupa', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'morticula',
    nome: 'Morticula',
    nomeIngles: 'Morticle',
    imagem: '/images/mosquitos/morticula.png',
    descricao: descricaoMorticula,
    linhagem: 'mosquitos',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mosquitos'],
    evolucoes: [{ insetoId: 'criptulo', tipo: 'linear' }],
  },
  {
    id: 'criptulo',
    nome: 'Criptulo',
    nomeIngles: 'Cryptalis',
    imagem: '/images/mosquitos/criptulo.png',
    descricao: descricaoCriptulo,
    linhagem: 'mosquitos',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mosquitos'],
    evolucoes: [{ insetoId: 'mosferatu', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'morticle', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'mosferatu',
    nome: 'Mosferatu',
    nomeIngles: 'Mosferatu',
    imagem: '/images/mosquitos/mosferatu.png',
    descricao: descricaoMosferatu,
    linhagem: 'mosquitos',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['mosquitos'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'criptulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'kurupim',
    nome: 'Kurupim',
    nomeIngles: 'Kurumite',
    imagem: '/images/cupins/kurupim.png',
    descricao: descricaoKurupim,
    linhagem: 'cupins',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [{ insetoId: 'guaripim', tipo: 'linear' }, { insetoId: 'kuxapima', tipo: 'ramificada' }],
  },
  {
    id: 'guaripim',
    nome: 'Guaripim',
    nomeIngles: 'Guarimite',
    imagem: '/images/cupins/guaripim.png',
    descricao: descricaoGuaripim,
    linhagem: 'cupins',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [{ insetoId: 'mboitapim', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'kurupim', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'mboitapim',
    nome: 'Mboitapim',
    nomeIngles: 'Termitatá',
    imagem: '/images/cupins/mboitapim.png',
    descricao: descricaoMboitapim,
    linhagem: 'cupins',
    estagio: 'forma rara',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'Guaripim', tipo: 'linear'}],
    tipoEvolucao: 'linear',
  },
  {
    id: 'kuxapima',
    nome: 'Kuxapimã',
    nomeIngles: 'Tershamante',
    imagem: '/images/cupins/kuxapima.png',
    descricao: descricaoKuxapima,
    linhagem: 'cupins',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [{ insetoId: 'tuipim', tipo: 'ramificada' }, { insetoId: 'kupinguari', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'kurupim', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'tuipim',
    nome: "Tu'ipim",
    nomeIngles: "Tu'imite",
    imagem: '/images/cupins/tuipim.png',
    descricao: descricaoTuipim,
    linhagem: 'cupins',
    estagio: 'forma raríssima',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'kuxapima', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'kupinguari',
    nome: "Kupinguari",
    nomeIngles: "Terminguari",
    imagem: '/images/cupins/kupinguari.png',
    descricao: descricaoKupinguari,
    linhagem: 'cupins',
    estagio: 'forma raríssima',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'kuxapima', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'gafamelo',
    nome: 'Gafamelo',
    nomeIngles: 'Hoppamel',
    imagem: '/images/gafanhotos/gafamelo.png',
    descricao: descricaoGafamelo,
    linhagem: 'gafanhotos',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['gafanhotos'],
    evolucoes: [{ insetoId: 'beduinhoto', tipo: 'linear' }],
  },
  {
    id: 'beduinhoto',
    nome: 'Beduinhoto',
    nomeIngles: 'Bedoupper',
    imagem: '/images/gafanhotos/beduinhoto.png',
    descricao: descricaoBeduinhoto,
    linhagem: 'gafanhotos',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['gafanhotos'],
    evolucoes: [{ insetoId: 'gafindin', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'gafamelo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'gafindin',
    nome: 'Gafindin',
    nomeIngles: 'Hopdjin',
    imagem: '/images/gafanhotos/gafindin.png',
    descricao: descricaoGafindin,
    linhagem: 'gafanhotos',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['gafanhotos'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'beduinhoto', tipo: 'linear' }],
    tipoEvolucao: 'especial',
  },
  {
    id: 'larvobo',
    nome: 'Larvobo',
    nomeIngles: 'Larvool',
    imagem: '/images/pulgas/larvobo.png',
    descricao: descricaoLarvobo,
    linhagem: 'pulgas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [{ insetoId: 'escapulgo', tipo: 'linear' }],
  },
  {
    id: 'escapulgo',
    nome: 'Escapulgo',
    nomeIngles: 'Escaflee',
    imagem: '/images/pulgas/escapulgo.png',
    descricao: descricaoEscapulgo,
    linhagem: 'pulgas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [{ insetoId: 'saltimbulga', tipo: 'linear' }, { insetoId: 'abracabulga', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'larvobo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'saltimbulga',
    nome: 'Saltimbulga',
    nomeIngles: 'Fleatimpler',
    imagem: '/images/pulgas/saltimbulga.png',
    descricao: descricaoSaltimbulga,
    linhagem: 'pulgas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escapulgo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'abracabulga',
    nome: 'Abracabulga',
    nomeIngles: 'Fleakadabra',
    imagem: '/images/pulgas/abracabulga.png',
    descricao: descricaoAbracabulga,
    linhagem: 'pulgas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escapulgo', tipo: 'ramificada' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'carribal',
    nome: 'Carribal',
    nomeIngles: 'Tickbal',
    imagem: '/images/carrapatos/carribal.png',
    descricao: descricaoCarribal,
    linhagem: 'carrapatos',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['carrapatos'],
    evolucoes: [{ insetoId: 'mascapato', tipo: 'linear' }],
  },
  {
    id: 'mascapato',
    nome: 'Mascapato',
    nomeIngles: 'Mastick',
    imagem: '/images/carrapatos/mascapato.png',
    descricao: descricaoMascapato,
    linhagem: 'carrapatos',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['carrapatos'],
    evolucoes: [{ insetoId: 'carrabrigo', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'carribal', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'carrabrigo',
    nome: 'Carrabrigo',
    nomeIngles: 'Tickhaven',
    imagem: '/images/carrapatos/carrabrigo.png',
    descricao: descricaoCarrabrigo,
    linhagem: 'carrapatos',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['carrapatos'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'mascapato', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'tapuli',
    nome: 'Tapu-li',
    nomeIngles: 'Maggo-lee',
    imagem: '/images/moscas/tapuli.png',
    descricao: descricaoTapuli,
    linhagem: 'moscas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [{ insetoId: 'pupula', tipo: 'linear' }, { insetoId: 'shogulo', tipo: 'linear' }],
  },
  {
    id: 'pupula',
    nome: '???',
    nomeIngles: 'Shogoon',
    imagem: '/images/moscas/pupula.png',
    descricao: descricaoPendente,
    linhagem: 'moscas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [{ insetoId: 'moscaville', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'tapuli', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'shogulo',
    nome: 'Shogulo',
    nomeIngles: 'Shogoon',
    imagem: '/images/moscas/shogulo.png',
    descricao: descricaoShogulo,
    linhagem: 'moscas',
    estagio: 'forma alternativa',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [{ insetoId: 'moshinobi', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'tapuli', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'moscaville',
    nome: '???',
    nomeIngles: 'Flynobi',
    imagem: '/images/moscas/moscaville.png',
    descricao: descricaoPendente,
    linhagem: 'moscas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupula', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'moshinobi',
    nome: 'Moshinobi',
    nomeIngles: 'Flynobi',
    imagem: '/images/moscas/moshinobi.png',
    descricao: descricaoMoshinobi,
    linhagem: 'moscas',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'shogulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vudulha',
    nome: 'Vudulha',
    nomeIngles: 'Needoo',
    imagem: '/images/aranhas/vudulha.png',
    descricao: descricaoVudulha,
    linhagem: 'aranhas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['aranhas'],
    evolucoes: [{ insetoId: 'aracromante', tipo: 'linear' }],
  },
  {
    id: 'aracromante',
    nome: 'Aracromante',
    nomeIngles: 'Arachnomancer',
    imagem: '/images/aranhas/aracromante.png',
    descricao: descricaoAracromante,
    linhagem: 'aranhas',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['aranhas'],
    evolucoes: [{ insetoId: 'barantula', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vudulha', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'barantula',
    nome: 'Barântula',
    nomeIngles: 'Barontula',
    imagem: '/images/aranhas/barantula.png',
    descricao: descricaoBarantula,
    linhagem: 'aranhas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['aranhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'aracromante', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'escorpete',
    nome: 'Escorpete',
    nomeIngles: 'Impion',
    imagem: '/images/escorpioes/escorpete.png',
    descricao: descricaoEscorpete,
    linhagem: 'escorpioes',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['escorpioes'],
    evolucoes: [{ insetoId: 'escormonio', tipo: 'linear' }],
  },
  {
    id: 'escormonio',
    nome: 'Escormônio',
    nomeIngles: 'Demonpion',
    imagem: '/images/escorpioes/escormonio.png',
    descricao: descricaoEscormonio,
    linhagem: 'escorpioes',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['escorpioes'],
    evolucoes: [{ insetoId: 'escorzebu', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'escorpete', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'escorzebu',
    nome: 'escorzebu',
    nomeIngles: 'Beelzepion',
    imagem: '/images/escorpioes/escorzebu.png',
    descricao: descricaoEscorzebu,
    linhagem: 'escorpioes',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['escorpioes'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escormonio', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'lagracia',
    nome: 'Lagrácia',
    nomeIngles: 'Catergrace',
    imagem: '/images/borboletas/lagracia.png',
    descricao: descricaoLagracia,
    linhagem: 'borboletas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'crisanto', tipo: 'linear' }],
  },
  {
    id: 'crisanto',
    nome: 'Crisanto',
    nomeIngles: 'Chrysant',
    imagem: '/images/borboletas/crisanto.png',
    descricao: descricaoCrisanto,
    linhagem: 'borboletas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'serafleta', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'lagracia', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'serafleta',
    nome: 'Serafleta',
    nomeIngles: 'Seraphly',
    imagem: '/images/borboletas/serafleta.png',
    descricao: descricaoSerafleta,
    linhagem: 'borboletas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'crisanto', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'clerigarta',
    nome: 'Clerigarta',
    nomeIngles: 'Clerillar',
    imagem: '/images/borboletas/clerigarta.png',
    descricao: descricaoClerigarta,
    linhagem: 'borboletas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'conclavida', tipo: 'linear' }],
  },
  {
    id: 'conclavida',
    nome: 'Conclávida',
    nomeIngles: 'Conclrysalis',
    imagem: '/images/borboletas/conclavida.png',
    descricao: descricaoConclavida,
    linhagem: 'borboletas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'trevoleta', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'clerigarta', tipo: 'ramificada' }, { insetoId: 'pontiarca', tipo: 'ramificada' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'cleroleta',
    nome: 'Cleroleta',
    nomeIngles: 'Clergyfly',
    imagem: '/images/borboletas/cleroleta.png',
    descricao: descricaoCleroleta,
    linhagem: 'borboletas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'conclavida', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'pontiarca',
    nome: 'Pontíarca',
    nomeIngles: 'Pontiarca',
    imagem: '/images/borboletas/pontiarca.png',
    descricao: descricaoPontiarca,
    linhagem: 'borboletas',
    estagio: 'forma rara',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'conclavida', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'julgarta',
    nome: 'Julgarta',
    nomeIngles: 'Judgillar',
    imagem: '/images/borboletas/julgarta.png',
    descricao: descricaoJulgarta,
    linhagem: 'borboletas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'crisalianca', tipo: 'linear' }],
  },
  {
    id: 'crisalianca',
    nome: 'Crisaliança',
    nomeIngles: 'Chrysalliance',
    imagem: '/images/borboletas/crisalianca.png',
    descricao: descricaoCrisalianca,
    linhagem: 'borboletas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'farileta', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'julgarta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'farileta',
    nome: 'Farileta',
    nomeIngles: 'Pharifly',
    imagem: '/images/borboletas/farileta.png',
    descricao: descricaoFarileta,
    linhagem: 'borboletas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'crisalianca', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'salikarta',
    nome: 'Salikarta',
    nomeIngles: 'Salikater',
    imagem: '/images/borboletas/salikarta.png',
    descricao: descricaoSalikarta,
    linhagem: 'borboletas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'crisaaba', tipo: 'linear' }],
  },
  {
    id: 'crisaaba',
    nome: 'Crisaaba',
    nomeIngles: 'Chrysaaba',
    imagem: '/images/borboletas/crisaaba.png',
    descricao: descricaoCrisaaba,
    linhagem: 'borboletas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'profeleta', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'salikarta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'profeleta',
    nome: 'Profeleta',
    nomeIngles: 'Prophefly',
    imagem: '/images/borboletas/profeleta.png',
    descricao: descricaoProfeleta,
    linhagem: 'borboletas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'crisaaba', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'maligarta',
    nome: 'Maligarta',
    nomeIngles: 'Maligillar',
    imagem: '/images/borboletas/maligarta2.png',
    descricao: descricaoMaligarta,
    linhagem: 'borboletas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'serpetrea', tipo: 'linear' }],
  },
  {
    id: 'serpetrea',
    nome: 'Serpétrea',
    nomeIngles: 'Serpentrify',
    imagem: '/images/borboletas/serpetrea.png',
    descricao: descricaoSerpetrea,
    linhagem: 'borboletas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [{ insetoId: 'trevoleta', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'maligarta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'trevoleta',
    nome: 'Trevoleta',
    nomeIngles: 'Murkfly',
    imagem: '/images/borboletas/trevoleta.png',
    descricao: descricaoTrevoleta,
    linhagem: 'borboletas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['borboletas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'serpetrea', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'serpreita',
    nome: 'Serpreita',
    nomeIngles: 'Serpentrap',
    imagem: '/images/mariposas/serpreita2.png',
    descricao: descricaoSerpreita,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'maligroso', tipo: 'linear' }],
  },
  {
    id: 'maligroso',
    nome: 'Maligroso',
    nomeIngles: 'Maligrous',
    imagem: '/images/mariposas/maligroso.png',
    descricao: descricaoMaligroso,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'mortiposa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'serpreita', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'mortiposa',
    nome: 'Mortiposa',
    nomeIngles: 'Mortmoth',
    imagem: '/images/mariposas/mortiposa.png',
    descricao: descricaoMortiposa,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'maligroso', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'carnicalha',
    nome: 'Carniçalha',
    nomeIngles: 'Shroudead',
    imagem: '/images/mariposas/carnicalha.png',
    descricao: descricaoCarnicalha,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'mortume', tipo: 'linear' }],
  },
  {
    id: 'mortume',
    nome: 'Mortume',
    nomeIngles: 'Corpsile',
    imagem: '/images/mariposas/mortume.png',
    descricao: descricaoMortume,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'decreptera', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'carnicalha', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'decreptera',
    nome: 'Decréptera',
    nomeIngles: 'Decreptera',
    imagem: '/images/mariposas/decreptera.png',
    descricao: descricaoDecreptera,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'mortume', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'mumifigarta',
    nome: 'Mumifigarta',
    nomeIngles: 'Mummifillar',
    imagem: '/images/mariposas/mumifigarta.png',
    descricao: descricaoMumifigarta,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'sarcosulo', tipo: 'linear' }],
  },
  {
    id: 'sarcosulo',
    nome: 'Sarcosulo',
    nomeIngles: 'Sarcocoon',
    imagem: '/images/mariposas/sarcosulo.png',
    descricao: descricaoSarcosulo,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'isetyx', tipo: 'ramificada' }, { insetoId: 'erubis', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'mumifigarta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'isetyx',
    nome: 'Isetyx',
    nomeIngles: 'Isetyx',
    imagem: '/images/mariposas/isetyx.png',
    descricao: descricaoIsetyx,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'sarcosulo', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'erubis',
    nome: 'Erubis',
    nomeIngles: 'Erubis',
    imagem: '/images/mariposas/erubis.png',
    descricao: descricaoErubis,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'sarcosulo', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'falsilha',
    nome: 'Falsilha',
    nomeIngles: 'Falspring',
    imagem: '/images/mariposas/falsilha.png',
    descricao: descricaoFalsilha,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'aberrosulo', tipo: 'linear' }],
  },
  {
    id: 'aberrosulo',
    nome: 'Aberrosulo',
    nomeIngles: 'Aberrasalis',
    imagem: '/images/mariposas/aberrosulo.png',
    descricao: descricaoAberrosulo,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'frankaptera', tipo: 'ramificada' }, { insetoId: 'frankopata', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'falsilha', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'frankaptera',
    nome: 'Frankáptera',
    nomeIngles: 'Frankaptera',
    imagem: '/images/mariposas/frankaptera.png',
    descricao: descricaoFrankaptera,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'aberrosulo', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'frankopata',
    nome: 'Frankopata',
    nomeIngles: 'Frankopath',
    imagem: '/images/mariposas/frankopata.png',
    descricao: descricaoFrankopata,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'aberrosulo', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'laranharta',
    nome: 'Laranharta',
    nomeIngles: 'Werespider',
    imagem: '/images/mariposas/laranharta.png',
    descricao: descricaoLaranharta,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'enjaulupa', tipo: 'linear' }],
  },
  {
    id: 'enjaulupa',
    nome: 'Enjaulupa',
    nomeIngles: 'Encagecoon',
    imagem: '/images/mariposas/enjaulupa.png',
    descricao: descricaoEnjaulupa,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'lunaranha', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'laranharta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'lunaranha',
    nome: 'Lunaranha',
    nomeIngles: 'Lunarachnid',
    imagem: '/images/mariposas/lunaranha.png',
    descricao: descricaoLunaranha,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'enjaulupa', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'wendivora',
    nome: 'Wendívora',
    nomeIngles: 'Wendigore',
    imagem: '/images/mariposas/wendivora.png',
    descricao: descricaoWendivora,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'restritupa', tipo: 'linear' }],
  },
  {
    id: 'restritupa',
    nome: 'Restritupa',
    nomeIngles: 'Restrictupa',
    imagem: '/images/mariposas/restritupa.png',
    descricao: descricaoRestritupa,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'hematocrata', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'wendivora', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'hematocrata',
    nome: 'Hematocrata',
    nomeIngles: 'Hematocrat',
    imagem: '/images/mariposas/hematocrata.png',
    descricao: descricaoHematocrata,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'restritupa', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  //Entérrea (Buriarth)
  {
    id: 'zunambularva',
    nome: 'Zunambularva',
    nomeIngles: 'Zomnambularva',
    imagem: '/images/mariposas/zunambularva.png',
    descricao: descricaoZunambularva,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'esporantalho', tipo: 'linear' }],
  },
  //Pupoterrada (Pupentombed)
  {
    id: 'esporantalho',
    nome: 'Esporantalho',
    nomeIngles: 'Sporescrow',
    imagem: '/images/mariposas/esporantalho.png',
    descricao: descricaoEsporantalho,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'assombralada', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'zunambularva', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'assombralada',
    nome: 'Assombralada',
    nomeIngles: 'Phaunted',
    imagem: '/images/mariposas/assombralada.png',
    descricao: descricaoAssombralada,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'esporantalho', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'paplicata',
    nome: 'Paplicata',
    nomeIngles: 'Bogeygänger',
    imagem: '/images/mariposas/paplicata.png',
    descricao: descricaoPaplicata,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'pupargula', tipo: 'linear' }],
  },
  {
    id: 'pupargula',
    nome: 'Pupárgula',
    nomeIngles: 'Pupargoyle',
    imagem: '/images/mariposas/pupargula.png',
    descricao: descricaoPupargula,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'harpitera', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'paplicata', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'harpitera',
    nome: 'Harpítera',
    nomeIngles: 'Harptera',
    imagem: '/images/mariposas/harpitera.png',
    descricao: descricaoHarpitera,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupargula', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'ipupiarta',
    nome: 'Ipupiarta',
    nomeIngles: 'Ipupillar',
    imagem: '/images/mariposas/ipupiarta.png',
    descricao: descricaoIpupiarta,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'tesaurea', tipo: 'linear' }],
  },
  {
    id: 'tesaurea',
    nome: 'Tesáurea',
    nomeIngles: 'Treasureate',
    imagem: '/images/mariposas/tesaurea.png',
    descricao: descricaoTesaurea,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'sirentria', tipo: 'ramificada' }, { insetoId: 'carrantano', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'ipupiarta', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'sirentria',
    nome: 'Sirêntria',
    nomeIngles: 'Sirentria',
    imagem: '/images/mariposas/sirentria.png',
    descricao: descricaoSirentria,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'tesaurea', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'carrantano',
    nome: 'Carrântano',
    nomeIngles: 'Frowamp',
    imagem: '/images/mariposas/carrantano.png',
    descricao: descricaoCarrantano,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'tesaurea', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'flamecante',
    nome: 'Flamecante',
    nomeIngles: 'Flamesting',
    imagem: '/images/mariposas/flamecante.png',
    descricao: descricaoFlamecante,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'pupandoura', tipo: 'linear' }],
  },
  {
    id: 'pupandoura',
    nome: 'Pupandoura',
    nomeIngles: 'Pupandorild',
    imagem: '/images/mariposas/pupandoura.png',
    descricao: descricaoPupandoura,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'gorgondusa', tipo: 'ramificada' }, { insetoId: 'quimerydra', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'flamecante', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'gorgondusa',
    nome: 'Gorgondusa',
    nomeIngles: 'Gorgondusa',
    imagem: '/images/mariposas/gorgondusa.png',
    descricao: descricaoGorgondusa,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupandoura', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'quimerydra',
    nome: 'Quimerydra',
    nomeIngles: 'Chimaerydra',
    imagem: '/images/mariposas/quimerydra.png',
    descricao: descricaoQuimerydra,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pupandoura', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'assustrutora',
    nome: 'Assustrutora',
    nomeIngles: 'Frightructor',
    imagem: '/images/mariposas/assustrutora.png',
    descricao: descricaoAssustrutora,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'fortrutura', tipo: 'linear' }],
  },
  {
    id: 'fortrutura',
    nome: 'Fortrutura',
    nomeIngles: 'Fortructure',
    imagem: '/images/mariposas/fortrutura.png',
    descricao: descricaoFortrutura,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'recluzela', tipo: 'ramificada' }, { insetoId: 'besteriano', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'assustrutora', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'recluzela',
    nome: 'Recluzela',
    nomeIngles: 'Reclusel',
    imagem: '/images/mariposas/recluzela.png',
    descricao: descricaoRecluzela,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'fortrutura', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'besteriano',
    nome: 'Besteriano',
    nomeIngles: 'Beastherian',
    imagem: '/images/mariposas/besteriano.png',
    descricao: descricaoBesteriano,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'fortrutura', tipo: 'linear' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'fantasioche',
    nome: 'Fantasioche',
    nomeIngles: 'Fantoppet',
    imagem: '/images/mariposas/fantasioche.png',
    descricao: descricaoFantasioche,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'apotroche', tipo: 'linear' }],
  },
  {
    id: 'apotroche',
    nome: 'Apotroche',
    nomeIngles: 'Apotroppet',
    imagem: '/images/mariposas/apotroche.png',
    descricao: descricaoApotroche,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'polterposa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'fantasioche', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'polterposa',
    nome: 'Polterposa',
    nomeIngles: 'Polterguise',
    imagem: '/images/mariposas/polterposa.png',
    descricao: descricaoPolterposa,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'apotroche', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'chapelirio',
    nome: 'Chapelírio',
    nomeIngles: 'Hatteniac',
    imagem: '/images/mariposas/chapelirio.png',
    descricao: descricaoChapelirio,
    linhagem: 'mariposas',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'manicumulo', tipo: 'linear' }],
  },
  {
    id: 'manicumulo',
    nome: 'Manicúmulo',
    nomeIngles: 'Asylomb',
    imagem: '/images/mariposas/manicumulo.png',
    descricao: descricaoManicumulo,
    linhagem: 'mariposas',
    estagio: 'forma casulo',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [{ insetoId: 'gargalhaco', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'chapelirio', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'gargalhaco',
    nome: 'Gargalhaço',
    nomeIngles: 'Cacklown',
    imagem: '/images/mariposas/gargalhaco.png',
    descricao: descricaoGargalhaco,
    linhagem: 'mariposas',
    estagio: 'forma final',
    ...dadosPendentes,
    tags: ['mariposas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'manicumulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'pulguito',
    nome: 'pulguito',
    nomeIngles: 'Aphiling',
    imagem: '/images/pulgoes/pulguito.png',
    descricao: descricaoPulguito,
    linhagem: 'pulgoes',
    estagio: 'forma inicial',
    ...dadosPendentes,
    tags: ['pulgoes'],
    evolucoes: [{ insetoId: 'pulgordo', tipo: 'linear' }, { insetoId: 'pulgante', tipo: 'especial' }],
  },
  {
    id: 'pulgordo',
    nome: 'Pulgordo',
    nomeIngles: 'Plumphid',
    imagem: '/images/pulgoes/pulgordo.png',
    descricao: descricaoPulgordo,
    linhagem: 'pulgoes',
    estagio: 'forma comum',
    ...dadosPendentes,
    tags: ['pulgoes'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pulguito', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'pulgante',
    nome: 'Pulgante',
    nomeIngles: 'Rovephid',
    imagem: '/images/pulgoes/pulgante.png',
    descricao: descricaoPulgante,
    linhagem: 'pulgoes',
    estagio: 'forma especial',
    ...dadosPendentes,
    tags: ['pulgoes'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'pulguito', tipo: 'linear' }],
    tipoEvolucao: 'especial',
  },
]