import type { Inseto } from '../types/insetopedia'

const descricaoPendente = 'Descrição ainda não definida.'

const descricaoGranovo = `Os Granovos menores são mantidos em estoque nos túneis subterrâneos das colônias, protegidos pelas Formilitares até atingirem um estágio mais avançado de desenvolvimento. Quando estão próximos da maturidade, são levados para as zonas de guerra, onde passam a fazer parte do arsenal vivo do exército.

Sua casca é extremamente dura, permitindo que os Granovos sejam arremessados contra os inimigos como verdadeiras granadas. Quanto maior a distância e a força do impacto, maior o dano causado. Apesar de sua mobilidade limitada, um Granovo ainda é capaz de se lançar contra um inimigo por conta própria. Em situações de perigo, também pode liberar um gás altamente irritante para afastar ameaças.

Quando todas as outras opções falham, o Granovo pode recorrer ao seu último recurso: explodir, sacrificando-se para proteger as trincheiras e as tropas ao seu redor.

Porém, os Granovos mais desenvolvidos possuem uma característica ainda mais peculiar. Quando estão próximos de completar sua transformação, sua casca começa a se tornar progressivamente mais fina. Nesse estágio, são arremessados contra as linhas inimigas como de costume. Ao atingir o alvo, a casca se rompe violentamente — mas, em vez de uma explosão, dela emerge uma Formilitar completamente desenvolvida, pronta para continuar o ataque.

Assim, para o exército das formigas, um Granovo não é apenas uma arma: é também um soldado em formação, aguardando o momento certo para nascer no campo de batalha.`;
const descricaoFormilitar = `As Formilitares são os soldados principais das colônias de formigas. Elas são responsáveis por proteger a colônia e combater ameaças externas.

Sua carapuça é extremamente resistente, permitindo que resistam a ataques de inimigos poderosos. Além disso, possuem mandíbulas afiadas que utilizam para cortar alimentos e defender a colônia.

Formilitares são conhecidas por sua capacidade de trabalhar em equipe, coordenando-se para realizar tarefas complexas como a construção de túneis e a defesa contra invasores.`;
const descricaoFormitanque = `Uma única Formitanque já representa uma enorme ameaça em um campo de batalha. Seu exoesqueleto é extremamente resistente, funcionando como uma verdadeira blindagem natural capaz de protegê-la de ataques que derrubariam uma Formilitar comum.

Mas sua defesa não é sua única arma. As poderosas garras dianteiras podem estraçalhar inimigos com facilidade, enquanto as enormes pinças de sua boca são capazes de agarrar, esmagar e despedaçar adversários muito maiores que uma Formilitar.

No campo de batalha, a Formitanque também exerce uma importante função de comando. Sua antena é capaz de emitir sinais de alerta que percorrem as tropas, indicando mudanças na formação, reorganizando as fileiras e coordenando complexas armadilhas de guerra. Quando uma Formitanque altera sua posição, dezenas ou até centenas de Formilitares podem mudar de estratégia em resposta aos seus sinais.

Seu exoesqueleto possui espaços internos adaptados para o transporte de tropas e munição viva. Em seu interior, uma Formitanque é capaz de carregar duas Formilitares e quatro Granovos, protegidos por sua própria carapaça durante o avanço.

E esse número pode ser ainda maior.

As Formilitares também podem se agarrar e permanecer de pé sobre o corpo da Formitanque enquanto ela avança, transformando-a em uma verdadeira plataforma móvel de combate.

Uma Formitanque não é apenas um tanque.

É um tanque, um transporte de tropas, um centro de comando e uma fortaleza móvel — tudo em uma única criatura.`;

const descricaoBaratito = `Assim que a ooteca se abre, o Baratito já está pronto para cometer crimes. Sua coloração branca o torna facilmente visível durante a noite e, por ainda ser frágil, ele permanece dentro da própria ooteca, arrastando-a consigo e usando-a como esconderijo sempre que necessário.

Apesar da pouca experiência, Baratitos fazem questão de parecer durões. Eles cobrem a boca com um pedaço de tecido, imitando os bandidos dos velhos faroestes e tentando esconder qualquer sinal de medo ou insegurança.

O Baratito leva sua ooteca até a toca de outros insetos e permanece escondido dentro dela, esperando o momento exato para sair e roubar. Sua primeira grande habilidade é a velocidade: entrar e sair rapidamente é essencial para um criminoso tão pequeno.

Se algum problema surgir, o Baratito se protege dentro da casca resistente da ooteca. Pela abertura de sua mão direita, pode disparar uma gosma irritante contra o adversário, ganhando tempo para fugir — ou, se necessário, para sair da defensiva e atacar.

Dentro do esconderijo de sua facção, os Baratitos ainda não são muito valorizados. Por serem pequenos e inexperientes, ficam encarregados apenas dos serviços menores, enquanto observam os criminosos mais experientes e aprendem com eles.`;
const descricaoBaratuno = `Especialistas em assaltos, os Baratunos saem à noite para cometer crimes. Roubam tudo o que conseguem carregar e desaparecem antes que alguém consiga reagir. Com sua experiência em furtividade e fuga, raramente permanecem em um mesmo lugar por tempo suficiente para serem capturados.

Baratunos cobrem completamente o rosto para evitar serem reconhecidos e, principalmente, para parecerem sempre iguais. Para suas vítimas, um Baratuno é apenas mais um criminoso anônimo entre tantos outros.

Seu exoesqueleto possui uma proteção extra no peito, onde fica seu coração. Essa característica é essencial para sua sobrevivência: mesmo depois de decapitados ou esmagados, enquanto o coração continuar batendo, seus corpos são capazes de se regenerar.

Quando ficam gravemente feridos, os Baratunos retornam ao esconderijo da facção e passam dias se recuperando. Para eles, ferimentos fazem parte do ofício. Assim que estiverem novamente em condições de lutar, deixam o esconderijo e voltam ao crime.`;
const descricaoBaratrao = `Criminoso experiente, o Baratrão é reconhecido dentro da facção e tratado com grande respeito. Diferente dos outros membros, ele não esconde o rosto. Pelo contrário, faz questão de deixá-lo à mostra e usa um chapéu que simboliza sua posição na hierarquia.

O Baratrão possui um corpo maior, mais forte e mais resistente que o de seus comparsas. Seu exoesqueleto é predominantemente negro, tornando sua presença ainda mais intimidadora. Além disso, possui quatro corações distribuídos por diferentes partes do corpo, o que faz dele um adversário extremamente difícil de matar.

Seus quatro braços também são armas por si só. Um deles termina em uma lâmina semelhante a um facão, enquanto outro possui uma abertura capaz de disparar uma sequência de gosmas irritantes, como uma metralhadora. Os outros dois são usados para combate e locomoção, permitindo que o Baratrão lute com uma ferocidade muito maior que a de um Baratuno.

Em último caso, o Baratrão revela sua característica mais inesperada: abre suas asas completamente desenvolvidas e voa diretamente contra o oponente.

Poucas coisas são mais assustadoras do que acreditar que um Baratrão está encurralado e, de repente, vê-lo levantar voo em sua direção.`;

const descricaoCelularva = `Nessa fase de desenvolvimento, cada Celularva vive em seu próprio favo, localizado nas regiões mais altas da grande colmeia. Ali, é cuidadosamente alimentada e protegida, crescendo sabendo que é uma parte importante da comunidade.

Enquanto se desenvolve, a Celularva aprende com as Abelárias que o trabalho é essencial para o funcionamento da grande colmeia. Cada indivíduo possui uma função e, um dia, ela também encontrará seu lugar entre aqueles que sustentam a comunidade.

Mas as Celularvas não são completamente indefesas.

Quando um ataque acontece dentro da colmeia, elas não simplesmente se escondem. Utilizando o favo móvel que as protege, podem se lançar sobre os invasores, fazendo-o despencar sobre os inimigos e esmagá-los com seu próprio peso.

O favo também serve como sua principal proteção. Abrigadas dentro de suas paredes endurecidas, as Celularvas resistem aos ataques enquanto tentam afastar qualquer ameaça que se aproxime.

Mesmo frágeis e ainda incapazes de desempenhar as funções das Abelárias ou dos Zanguardiões, algumas Celularvas chegam a abandonar voluntariamente seus favos para participar da defesa da colmeia.

Elas sabem que ainda têm muito a aprender.

Mas também sabem que a colmeia é parte delas — e elas são parte da colmeia.`;
const descricaoAbelaria = `O dia a dia das Abelárias é marcado pelo trabalho. Dentro e fora da grande colmeia, cada grupo possui funções específicas e todas são essenciais para o funcionamento da comunidade.

As Abelárias são especialistas em produzir e manter tudo aquilo de que a colmeia precisa. Algumas cuidam e alimentam as Celularvas, outras constroem e reparam suas estruturas, enquanto outras trabalham no transporte de recursos, na produção de alimento e no planejamento das atividades da comunidade.

Para elas, nenhum trabalho é pequeno quando contribui para o bem de todas.

Mas a natureza das Abelárias muda completamente quando a colmeia é ameaçada.

Ao primeiro sinal de perigo, grupos inteiros abandonam suas funções e se unem em um enorme enxame defensivo. Centenas ou milhares podem avançar juntas contra o invasor, utilizando suas ferramentas de trabalho como armas e lutando com uma determinação que poucos inimigos esperariam de criaturas tão pequenas.

Cada Abelária está disposta a dar a própria vida por suas companheiras.

E existe algo ainda mais assustador no modo como defendem sua colmeia.

Quando uma Abelária morre, seu corpo libera um odor que funciona como um sinal de alarme. O cheiro se espalha rapidamente e pode atrair e enfurecer as outras Abelárias próximas, fazendo com que abandonem qualquer outra atividade e avancem imediatamente contra a ameaça.

Para uma Abelária, proteger a colmeia não é uma ordem.

É o trabalho mais importante de todos.`;
const descricaoZanguardiao = `Os Zanguardões são a elite militar da grande colmeia. Diferentemente das Abelárias, que vivem principalmente dentro da colmeia e assumem a defesa quando ela é ameaçada, os Zanguardões passam grande parte de suas vidas no exterior, patrulhando os arredores, vigiando as fronteiras e identificando qualquer ameaça que possa se aproximar.

Cada Zanguardião passa por um rígido treinamento antes de assumir seu posto. São preparados para combater, resistir e proteger a colmeia em qualquer situação. Quando encontram um intruso, não hesitam: avançam imediatamente, utilizando as armas naturais forjadas em seu próprio exoesqueleto.

Seus ataques são extremamente dolorosos e podem deixar um inimigo incapacitado mesmo após o Zanguardião ter sido abatido. O veneno presente em suas armas continua agindo no ferimento e, em alguns casos, é capaz de levar à morte um adversário que tenha sobrevivido ao confronto.

Por isso, derrotar um Zanguardião não significa necessariamente estar a salvo.

Mas existe uma regra simples entre os inimigos da grande colmeia:

um Zanguardião é uma ameaça; um enxame de Zanguardões é uma guerra.

Quando dezenas deles avançam juntos, suas armas, disciplina e coordenação transformam uma simples patrulha em uma força de combate capaz de expulsar quase qualquer invasor de seu território.`;

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

const descricaoVespescudo = `Quando o ovo se abre, Vespescudo já está protegido dentro de sua estrutura de contenção. Há espaço apenas para observar o exterior, mover-se lentamente, receber alimento e continuar seu desenvolvimento.

Quando o primeiro ferrão é forjado, os Vespaleiros abrem uma nova passagem na estrutura e encaixam a arma, transformando Vespescudo em uma verdadeira unidade militar de proteção territorial.

O ferrão utilizado muitas vezes pertenceu a um Vespaleiro que morreu em combate. Ao ser incorporado à estrutura, ele deixa de ser apenas uma arma e passa a fazer parte do próprio Vespescudo, tornando-se um membro inseparável de seu corpo.

Como integrante da tropa de defesa do exército, Vespescudo participa de grandes formações militares. Dezenas deles avançam lentamente, lado a lado, fileira após fileira, em direção aos territórios inimigos, expandindo as fronteiras de seu domínio.

Quando não estão em combate, permanecem posicionados nas fronteiras, lado a lado, formando uma enorme muralha viva. Para qualquer invasor, atravessar uma fronteira protegida por Vespescudos é como tentar atravessar uma fortaleza que marcha lentamente em sua direção.`;
const descricaoVespaleiro = `
Vespaleiros são extremamente territoriais e agressivos. Diferente dos Vespescudos, que só atacam quando são confrontados, os Vespaleiros são orgulhosos e facilmente provocados. O menor movimento nas proximidades de um deles pode ser interpretado como uma ameaça e dar início a um grande conflito.

Seu exoesqueleto, semelhante a uma armadura medieval, é capaz de resistir a grandes quantidades de dano. Seus dois ferrões também são armas naturais extremamente perigosas: um assume a forma de uma espada, enquanto o outro se transforma em uma lança, capazes de causar ferimentos profundos e potencialmente fatais.

Durante uma guerra, os Vespaleiros avançam lentamente atrás das fileiras de Vespescudos, usando-os como proteção enquanto se aproximam do inimigo. Quando estão próximos o suficiente, o enxame de Vespaleiros levanta voo por cima das formações e inicia um ataque violento e sem trégua.

O avanço dos Vespescudos pode parecer lento e previsível. O que vem depois, porém, é muito diferente.

Invadir um território protegido por Vespaleiros é, para a maioria dos inimigos, pouco mais que uma sentença de morte.`;
const descricaoVesplorde = `Vesplordes vivem na região central de seus territórios, próximos às estruturas de abrigo onde os Vespaleiros descansam e os Vespescudos mais jovens se desenvolvem. É fácil saber onde um Vesplorde repousa: seus abrigos são os maiores e ficam sempre nas posições mais centrais e protegidas do território.

A principal função dos Vesplordes é supervisionar seu exército e garantir que tudo dentro de seus domínios esteja funcionando como deveria. Eles acompanham o desenvolvimento dos Vespescudos, verificam as tropas de Vespaleiros e monitoram constantemente as fronteiras.

Apesar de passarem a maior parte do tempo em seu próprio território, que defendem como se fosse uma extensão de seu próprio corpo, ocasionalmente deixam seus domínios para sobrevoar regiões vizinhas em busca de novos territórios promissores.

Quando encontram uma região desocupada e adequada, a expansão é planejada. Se o território já estiver ocupado, porém, um plano de invasão é elaborado.

Vesplordes também participam ativamente das guerras. Habilidosos no uso de seu enorme ferrão e de seu antebraço transformado em escudo, são capazes de intimidar e subjugar até mesmo os adversários mais formidáveis.

Sozinho, um Vesplorde pode ser considerado um exército de uma vespa só.

Mas dificilmente você encontrará um Vesplorde sozinho no meio de uma guerra.`;

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

Parazeus continua se alimentando e lutando, mas toda a disciplina e serenidade que um dia fizeram parte de sua vida desaparecem. Seus movimentos tornam-se violentos e imprevisíveis. Durante o combate, partes de seu corpo podem se abrir, revelando os tentáculos do parasita que vivem em seu interior. Eles funcionam como braços adicionais, capazes de agarrar, chicotear e arremessar seus adversários.

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

const descricaoRoninfa = `Roninfa viaja solitário em busca de alimento e aperfeiçoamento. Quando encontra o galho perfeito, ele o refina cuidadosamente até transformá-lo em sua espada de treinamento.

Seu chapéu de palha esconde os olhos como um sinal de que não busca conflitos. Roninfa jamais encara outro inseto diretamente: quando encontra alguém pelo caminho, baixa o chapéu e procura um lugar pacífico onde possa continuar treinando e se alimentando.

Se for atacado, porém, Roninfa precisa demonstrar o resultado de seu treinamento incessante. Apesar de possuir um corpo frágil, suas habilidades de combate não devem ser subestimadas. Anos de prática transformam seu simples galho em uma arma surpreendentemente eficiente.

Roninfa passa anos vagando pelo mundo, aperfeiçoando corpo e espírito enquanto busca o caminho que o levará à próxima fase de sua vida.

Dizem que, durante sua existência como larva, Roninfa passa por três grandes estágios de evolução espiritual. São conhecidos como as Três Etapas Espirituais do Roninfa.`;
const descricaoGusokulo = `Após encontrar o lugar perfeito para descansar e completar as três etapas espirituais, o corpo de Roninfa se transforma em uma poderosa armadura que ele vestirá quando estiver pronto.

O Gusokulo permanece imóvel, resistindo ao vento forte, ao sol escaldante, à chuva e a qualquer outra intempérie. As pequenas pernas localizadas na parte inferior da carapaça raramente são utilizadas e só entram em ação quando outro inseto decide atacá-lo.

Mesmo parecendo incapaz de lutar, Gusokulo possui armas escondidas em sua própria estrutura. As três lâminas em suas costas e os chifres de sua carapaça podem ser usados como armas letais.

Quando necessário, Gusokulo consegue girar seu corpo com uma velocidade surpreendente, transformando sua carapaça em uma arma capaz de ferir e, por vezes, até decapitar um adversário. Tudo isso sem praticamente deixar seu lugar.

Dizem que, depois de derrotar um inimigo, Gusokulo sobe sobre o corpo daquele que caiu e permanece ali, imóvel como antes.

Para quem encontra a cena, não há dúvida sobre o significado.

É um aviso para o próximo que decidir tentar a sorte.`;
const descricaoKabutouro = `A filosofia de vida de Kabutouro é simples: viver com pouco e usar sua força para proteger aqueles que não podem se proteger sozinhos.

Kabutouro percorre diferentes sociedades de insetos e, às vezes, decide juntar-se às suas causas. Temido e respeitado, dificilmente passa despercebido por onde anda. Sua imponente armadura, seus chifres e seu letal braço em forma de katana anunciam a presença de um guerreiro que passou a vida inteira aperfeiçoando suas habilidades.

Dizem que o tamanho de seus chifres revela sua força e experiência. Quanto maiores os chifres, mais velho e formidável é o Kabutouro.

Quando dois Kabutouros se encontram, porém, nem sempre há espaço para convivência pacífica. É comum que desafiem um ao outro para descobrir quem é o melhor guerreiro. Essas batalhas podem durar horas e, algumas vezes, terminam com a morte de um dos combatentes.

Apesar de passar grande parte da vida viajando e lutando por aqueles que precisam de proteção, Kabutouro não permanece sozinho para sempre.

Quando sente que seus dias de batalha estão chegando ao fim, procura um lugar entre os seus. Ali, abandona a vida errante e passa seus últimos anos formando uma família.

Depois de uma vida inteira procurando seu caminho, o velho guerreiro finalmente encontra um lugar para chamar de lar.`;

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
    estagio: 'base',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['formigas'],
    evolucoes: [{ insetoId: 'formajor', tipo: 'linear' }, { insetoId: 'formiloto', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'granovo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'formajor',
    nome: 'Formajor',
    nomeIngles: 'Majant',
    imagem: '/images/formigas/formajor.png',
    descricao: descricaoPendente,
    linhagem: 'formigas',
    estagio: 'evolucao',
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
    descricao: descricaoPendente,
    linhagem: 'formigas',
    estagio: 'evolucao',
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
    estagio: 'evolucao',
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
    descricao: descricaoPendente,
    linhagem: 'formigas',
    estagio: 'evolucao',
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
    estagio: 'base',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [{ insetoId: 'baratrao', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'baratito', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'baratrao',
    nome: 'Baratrao',
    nomeIngles: 'Roacheeter',
    imagem: '/images/baratas/baratrao.png',
    descricao: descricaoBaratrao,
    linhagem: 'baratas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['baratas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'baratuno', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vespescudo',
    nome: 'Vespescudo',
    nomeIngles: 'Waspield',
    imagem: '/images/vespas/vespescudo.png',
    descricao: descricaoVespescudo,
    linhagem: 'vespas',
    estagio: 'base',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'vesplebeu', tipo: 'ramificada' }, { insetoId: 'vespaleiro', tipo: 'ramificada' }, { insetoId: 'nobrespa', tipo: 'ramificada' }],
  },
  {
    id: 'vesplebeu',
    nome: 'Vesplebeu',
    nomeIngles: 'Waspleb',
    imagem: '/images/vespas/vesplebeu.png',
    descricao: descricaoPendente,
    linhagem: 'vespas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'vespreiro', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vespescudo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vespaleiro',
    nome: 'Vespaleiro',
    nomeIngles: 'Waspight',
    imagem: '/images/vespas/vespaleiro.png',
    descricao: descricaoVespaleiro,
    linhagem: 'vespas',
    estagio: 'evolucao',
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
    descricao: descricaoPendente,
    linhagem: 'vespas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [{ insetoId: 'realespa', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'vespescudo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vespreiro',
    nome: 'Vespreiro',
    nomeIngles: 'Wasmith',
    imagem: '/images/vespas/vespreiro.png',
    descricao: descricaoPendente,
    linhagem: 'vespas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'vesplebeu', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'vesplorde',
    nome: 'Vesplorde',
    nomeIngles: 'Wasplord',
    imagem: '/images/vespas/vesplorde.png',
    descricao: descricaoVesplorde,
    linhagem: 'vespas',
    estagio: 'evolucao',
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
    descricao: descricaoPendente,
    linhagem: 'vespas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['vespas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'nobrespa', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'celularva',
    nome: 'Celularva',
    nomeIngles: 'Cellularva',
    imagem: '/images/abelhas/celularva.png',
    descricao: descricaoCelularva,
    linhagem: 'abelhas',
    estagio: 'base',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [{ insetoId: 'zanguardiao', tipo: 'linear' }, { insetoId: 'supremabelha', tipo: 'linear' }],
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'abelaria', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'supremabelha',
    nome: 'Supremebee',
    nomeIngles: 'Dronguard',
    imagem: '/images/abelhas/supremabelha.png',
    descricao: descricaoPendente,
    linhagem: 'abelhas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['abelhas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'abelaria', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'totzen',
    nome: 'Totzen',
    nomeIngles: 'Totzen',
    imagem: '/images/louva-deus/totzen.png',
    descricao: descricaoTotzen,
    linhagem: 'louva-deus',
    estagio: 'base',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [{ insetoId: 'parazeus', tipo: 'ramificada' }, { insetoId: 'louvomestre', tipo: 'ramificada' }],
    evolucaoDe: [{ insetoId: 'totzen', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'louvomestre',
    nome: '???',
    nomeIngles: '',
    imagem: '/images/louva-deus/louvomestre.png',
    descricao: descricaoPendente,
    linhagem: 'louva-deus',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'parazeus',
    nome: 'Parazeus',
    nomeIngles: 'Parazeus',
    imagem: '/images/louva-deus/parazeus.png',
    descricao: descricaoParazeus,
    linhagem: 'louva-deus',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['louva-deus'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'louvolin', tipo: 'ramificada' }],
    tipoEvolucao: 'ramificada',
  },
  {
    id: 'roninfa',
    nome: 'Roninfa',
    nomeIngles: 'Roninfa',
    imagem: '/images/besouros/roninfa.png',
    descricao: descricaoRoninfa,
    linhagem: 'besouros',
    estagio: 'base',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [{ insetoId: 'gusokulo', tipo: 'linear' }],
  },
  {
    id: 'gusokulo',
    nome: 'Gusokulo',
    nomeIngles: 'Gusokoon',
    imagem: '/images/besouros/gusokulo.png',
    descricao: descricaoGusokulo,
    linhagem: 'besouros',
    estagio: 'evolucao',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['besouros'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'gusokulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'morticula',
    nome: 'Morticula',
    nomeIngles: 'Morticle',
    imagem: '/images/mosquitos/morticula.png',
    descricao: descricaoMorticula,
    linhagem: 'mosquitos',
    estagio: 'base',
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
    estagio: 'evolucao',
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
    estagio: 'evolucao',
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
    estagio: 'base',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [{ insetoId: 'guaripim', tipo: 'linear' }],
  },
  {
    id: 'guaripim',
    nome: 'Guaripim',
    nomeIngles: 'Guarimite',
    imagem: '/images/cupins/guaripim.png',
    descricao: descricaoGuaripim,
    linhagem: 'cupins',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [{ insetoId: 'tuipim', tipo: 'linear' }],
    evolucaoDe: [{ insetoId: 'kurupim', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'tuipim',
    nome: "Tu'ipim",
    nomeIngles: "Tu'imite",
    imagem: '/images/cupins/tuipim.png',
    descricao: descricaoTuipim,
    linhagem: 'cupins',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['cupins'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'guaripim', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'gafamelo',
    nome: 'Gafamelo',
    nomeIngles: 'Hoppamel',
    imagem: '/images/gafanhotos/gafamelo.png',
    descricao: descricaoGafamelo,
    linhagem: 'gafanhotos',
    estagio: 'base',
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
    estagio: 'evolucao',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['gafanhotos'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'beduinhoto', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'larvobo',
    nome: 'Larvobo',
    nomeIngles: 'Larvool',
    imagem: '/images/pulgas/larvobo.png',
    descricao: descricaoLarvobo,
    linhagem: 'pulgas',
    estagio: 'base',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [{ insetoId: 'saltimbulga', tipo: 'linear' }, { insetoId: 'magipulga', tipo: 'linear' }],
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escapulgo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'magipulga',
    nome: 'Magipulga',
    nomeIngles: 'Flegician',
    imagem: '/images/pulgas/magipulga.png',
    descricao: descricaoPendente,
    linhagem: 'pulgas',
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['pulgas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'escapulgo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
  {
    id: 'carribal',
    nome: 'Carribal',
    nomeIngles: 'Tickbal',
    imagem: '/images/carrapatos/carribal.png',
    descricao: descricaoCarribal,
    linhagem: 'carrapatos',
    estagio: 'base',
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
    estagio: 'evolucao',
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
    estagio: 'evolucao',
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
    estagio: 'base',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [{ insetoId: 'shogulo', tipo: 'linear' }, { insetoId: 'pupula', tipo: 'linear' }],
  },
  {
    id: 'pupula',
    nome: '???',
    nomeIngles: 'Shogoon',
    imagem: '/images/moscas/pupula.png',
    descricao: descricaoPendente,
    linhagem: 'moscas',
    estagio: 'evolucao',
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
    estagio: 'evolucao',
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
    estagio: 'evolucao',
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
    estagio: 'evolucao',
    ...dadosPendentes,
    tags: ['moscas'],
    evolucoes: [],
    evolucaoDe: [{ insetoId: 'shogulo', tipo: 'linear' }],
    tipoEvolucao: 'linear',
  },
]
