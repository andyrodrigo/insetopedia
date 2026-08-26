import type { Linhagem } from '../types/insetopedia'

const descricaoPendente = 'Descrição ainda não definida.'

const descricaoFormigas = `As Formilitares vivem em vastas colônias subterrâneas, cujas entradas fortificadas são conhecidas como Trincheiras. Sua sociedade é inteiramente organizada segundo uma rígida hierarquia militar, dividida em diferentes patentes e funções. Cada indivíduo conhece seu lugar na colônia e reconhece imediatamente a autoridade daqueles acima de sua patente.

Expansionistas por natureza, as Formilitares buscam constantemente ampliar seus números e conquistar novos territórios. Por isso, novas colônias surgem com frequência próximas a zonas de conflito, transformando antigos campos de batalha em novos pontos de expansão.

Grande parte de sua coordenação ocorre silenciosamente. Além dos meios naturais das formigas, desenvolveram um complexo sistema de sinais realizados com as antenas, capaz de transmitir ordens e informações sem denunciar sua posição. Para um estranho, uma Trincheira pode parecer silenciosa; para as Formilitares, porém, ela está repleta de ordens sendo dadas e obedecidas.`;

const descricaoBaratas = `Os Baratunos vivem à margem das demais sociedades, escondidos em refúgios improvisados onde diferentes facções disputam influência, território e oportunidades. Não possuem uma autoridade comum: cada grupo segue suas próprias regras e lideranças, sobrevivendo principalmente de roubos, assaltos e incursões contra outras comunidades.

Dentro de uma facção, o crime é também uma carreira. Baratunos que acumulam experiência, reputação e recursos conquistam posições cada vez mais importantes, enquanto os menos experientes assumem os trabalhos mais arriscados. Confrontá-los, porém, raramente é simples: são resistentes, noturnos e especialistas em desaparecer quando a situação deixa de favorecê-los.

Um esconderijo pode ser descoberto e uma quadrilha aparentemente eliminada, mas acabar definitivamente com Baratunos é outra história. Eles são extraordinariamente difíceis de matar — e ainda melhores em fugir.`;

const descricaoAbelhas = `As Abelárias formam a classe dominante da colmeia, mas sua posição não representa uma vida de privilégios. Entre elas, nada está acima do trabalho e da continuidade da comunidade. Cada indivíduo possui uma função, e todas são consideradas necessárias para que a colmeia permaneça forte, abastecida e organizada.

A divisão de tarefas orienta praticamente toda a sociedade. Enquanto as Abelárias mantêm o funcionamento interno da colmeia, os Zanguardiões passam grande parte da vida do lado de fora, patrulhando os arredores, protegendo fronteiras e enfrentando ameaças antes que elas alcancem a comunidade.

Apesar das diferenças entre funções e responsabilidades, prevalece a ideia de que nenhum indivíduo é dispensável. Para as Abelárias, o valor de cada membro está naquilo que ele oferece ao coletivo: uma colmeia prospera não pelo trabalho de um único indivíduo, mas pela soma do trabalho de todos.`;

const descricaoCupins = `Os Kurupins vivem no grande cupinzeiro construído em torno da Grande Árvore, com a qual mantêm uma relação de profundo respeito e harmonia. Sua tribo procura viver como parte do ambiente que a cerca, retirando da natureza aquilo de que necessita sem enxergá-la como algo separado de sua própria existência.

A direção da tribo cabe aos raros Tu'ipins, enormes seres alados que passam a maior parte do tempo recolhidos nas profundezas do cupinzeiro. Diferentemente dos demais membros da linhagem, eles possuem olhos e são capazes de contemplar o mundo do alto. Seus sonhos são interpretados como orientações para o futuro, e é a partir deles que muitas das decisões da comunidade são tomadas.

Enquanto os Tu'ipins sonham, os Kurupins mantêm a Grande Árvore e os Guaripins percorrem seus arredores, caçando e protegendo a tribo. Assim, cada geração cumpre seu papel em uma sociedade guiada tanto pelos ritmos da natureza quanto pelas misteriosas visões daqueles que conseguem enxergá-la.`;

const descricaoVespas = `Os Vespaleiros vivem em territórios fortemente defendidos, onde seus abrigos de barro se acumulam ao longo das gerações até formarem estruturas que, para uma vespa, lembram enormes castelos. Extremamente territoriais, respondem agressivamente a invasões e são conhecidos por perseguir seus inimigos muito além de suas fronteiras quando têm a oportunidade.

Cada território é comandado por um Vesplorde, escolhido tanto por sua força quanto por sua capacidade como estrategista militar. Diferentes territórios, por sua vez, pertencem a um mesmo reino sob a autoridade da Realespa. Suas fronteiras são protegidas pelos Vespescudos, que se agrupam para formar verdadeiras paredes vivas contra invasores.

Apesar de sua natureza agressiva, os Vespaleiros possuem um forte código de honra. Força e habilidade são admiradas, e disputas entre indivíduos podem ser resolvidas em torneios de combate, transformados também em uma das principais formas de entretenimento de sua sociedade. Para um Vespaleiro, defender seu território é um dever; demonstrar que é capaz disso, uma questão de honra.`;

const descricaoCarrapatos = `Os Carrapatos vivem em tribos predatórias que raramente precisam construir muralhas ou fortificações: eles próprios são a defesa de seu território. Pacientes e extremamente coordenados, preferem preparar o terreno e esperar que suas presas entrem voluntariamente em uma posição da qual seja difícil escapar.

Os Carribais são caçadores especializados em emboscadas, capazes de permanecer enterrados e camuflados até o momento oportuno. Já os Mascapatos utilizam sua estranha anatomia para fincar a cabeça no solo e permanecer imóveis, formando barreiras de falsas faces que delimitam caminhos e desencorajam qualquer tentativa de passagem.

Os enormes Carrabrigos completam essa organização, usando suas gigantescas carapaças tanto como proteção quanto como abrigo para os demais membros da tribo. Assim, um território de Carrapatos pode parecer vazio para quem chega — até que o chão, as barreiras e até aquilo que parecia uma formação natural revelem que a tribo esteve ali o tempo inteiro.`;

const descricaoPulgas = `As Saltimbulgas são artistas itinerantes que percorrem diferentes territórios levando seus espetáculos às comunidades de outros insetos. Acrobatas extraordinárias, transformam seus saltos naturais em apresentações elaboradas, aproveitando raízes, galhos e qualquer formação do ambiente que possa servir como palco.

Seus grupos viajam acompanhados por Escapulgos, cuja estranha imobilidade é incorporada aos números como apoio para equilíbrios e acrobacias, e pelos pequenos Larvobos, que também participam das apresentações. Não possuem grandes cidades ou territórios próprios: onde houver uma plateia disposta a assistir, há um lugar para o espetáculo.

Por isso, a chegada das Saltimbulgas costuma despertar curiosidade e reunir multidões. Seus shows são imprevisíveis, habilidosos e difíceis de ignorar — embora alguns espectadores particularmente desconfiados prefiram conferir seus pertences depois que a trupe vai embora.`;

const descricaoMosquitos = `Os Mosferatus não formam uma sociedade organizada no sentido tradicional. Sua existência gira em torno de um ciclo simples: nascer, transformar-se e buscar sangue. Costumam habitar regiões úmidas e de águas paradas, onde as Mortículas permanecem submersas durante os primeiros momentos de sua existência e, mais tarde, transformam-se nos imóveis Criptulos.

Ao emergirem como Mosferatus, abandonam esses locais durante a noite e percorrem grandes distâncias em busca de alimento. Podem dividir o mesmo habitat e partir em grupos, mas não constroem cidades, estabelecem hierarquias ou demonstram grande interesse pela vida coletiva.

Para outras sociedades, um lago habitado por Mortículas pode parecer pouco ameaçador durante o dia. O verdadeiro problema começa ao anoitecer, quando os Mosferatus despertam e deixam suas margens em busca de sangue.`;

const descricaoGafanhotos = `Os Beduinhotos são povos nômades que atravessam as vastas regiões desérticas da Insetopedia, raramente permanecendo por muito tempo no mesmo lugar. Adaptados ao calor e às longas jornadas, viajam em pequenos grupos acompanhados por Gafamelos, criaturas resistentes utilizadas como montaria e companheiras nas travessias pelas dunas.

Sua cultura é profundamente marcada pelo deserto e por seus mistérios. Entre todos eles, nenhum é maior que o surgimento de um Gafindin. Encontrar um desses raros seres é considerado um acontecimento extraordinário, capaz de interromper até mesmo uma longa jornada. Alguns Beduinhotos os reverenciam, outros os temem, e diferentes grupos atribuem significados distintos à sua aparição.

Sem grandes cidades ou fronteiras permanentes, os Beduinhotos consideram o próprio deserto seu território. Seus caminhos mudam, seus grupos seguem adiante e seus Gafamelos carregam-nos através das areias — sempre sob a possibilidade de que, em algum lugar entre as dunas, um Gafindin esteja esperando.`;

const descricaoMoscas = `Os Moshinobis não constroem grandes comunidades nem demonstram interesse em conquistar territórios. Vivem em pequenos grupos dispersos e estão quase sempre em movimento, surgindo repentinamente onde encontram recursos antes de desaparecerem tão rápido quanto chegaram.

Sua extraordinária percepção e velocidade fazem com que seus ataques pareçam acontecer em instantes. Quando vários Moshinobis convergem para o mesmo lugar, formam enxames capazes de devastar comunidades inteiras, atravessando suas defesas antes que seus habitantes consigam organizar qualquer resistência.

Por isso, outras sociedades aprenderam que enfrentar um enxame raramente é uma boa escolha. Quando os primeiros Moshinobis são avistados, a reação mais comum é abandonar o local. Afinal, para criaturas capazes de perceber o mundo quase em câmera lenta, uma população em fuga ainda parece bastante devagar.`;

const descricaoLouvaDeus = `Os Louvolins vivem em comunidades disciplinadas, geralmente estabelecidas no interior de grandes troncos, onde espaços naturais são cuidadosamente mantidos como templos de contemplação e treinamento. Para eles, aperfeiçoar o corpo e dominar a própria mente são partes inseparáveis da mesma prática.

Não dependem de mestres para conduzir cada exercício. Desde cedo, os Louvolins aprendem observando e repetindo os movimentos da comunidade, treinando juntos até que suas técnicas marciais se tornem quase instintivas. O silêncio, a paciência e o autocontrole são tão valorizados quanto a habilidade em combate.

No centro de suas tradições estão os Totzens, diante dos quais os Louvolins passam longos períodos em meditação. O verdadeiro significado dessas criaturas para sua cultura permanece pouco compreendido por estrangeiros. Os Louvolins raramente explicam suas crenças — e parecem perfeitamente satisfeitos em deixar que os outros continuem sem entender.`;

const descricaoBesouros = `Os Kabutouros são conhecidos por suas longas jornadas solitárias. Ainda como Roninfas, deixam seus locais de origem e percorrem o mundo seguindo uma tradição dividida em três etapas, cada uma representando um aprendizado que deve ser dominado durante a viagem.

Quando completam as três etapas de sua formação, tornam-se Gusokulos, permanecendo imóveis dentro de suas resistentes armaduras enquanto passam pela transformação que dará origem ao Kabutouro. Ao emergirem, retomam sua jornada maiores, mais experientes e preparados para colocar em prática aquilo que aprenderam.

Entretanto, a peregrinação não dura para sempre. Próximos ao fim de sua jornada, Kabutouros procuram outros de sua espécie, estabelecem uma moradia e podem formar família. Assim, para eles, viajar sozinho não significa viver sozinho: é o caminho que precisam percorrer antes de finalmente escolher onde permanecer.`;

const descricaoAranhas = `As Aracromantes vivem em pequenos Covens, comunidades isoladas construídas em regiões protegidas por teias, armadilhas e abrigos subterrâneos. Sua sociedade é profundamente ligada aos rituais e às tradições transmitidas entre gerações, e praticamente todas as atividades importantes — da caça à alimentação — possuem algum significado cerimonial. Vudulhas crescem coletivamente dentro do Coven, aprendendo desde cedo a tecer, caçar, dançar e produzir seus curiosos bonecos, enquanto observam os adultos e participam dos primeiros rituais. Ao tornarem-se Aracromantes, passam a assumir responsabilidades na proteção, obtenção de alimento e realização das cerimônias da comunidade. Cada Coven é orientado por suas Barântulas, indivíduos mais velhos que atuam como líderes espirituais, professores e juízes, sendo respeitados pela experiência e pelo conhecimento acumulado. Para sociedades estrangeiras, os Covens são lugares assustadores, cercados de superstições devido aos sacrifícios, exoesqueletos e estranhos costumes de seus habitantes. Para uma Aracromante, porém, essas práticas não possuem qualquer intenção maligna: fazem parte de sua compreensão do instinto, da matéria, da natureza e do ciclo inevitável da vida e da morte.`

const descricaoEscorpioes = `Os Escorpimônios são criaturas essencialmente solitárias, que vivem em abrigos subterrâneos próprios e demonstram pouca necessidade da companhia de seus semelhantes. Sua convivência começa ainda filhotes, quando Escorpetes permanecem sobre as costas da mãe até que seus exoesqueletos estejam resistentes o suficiente para abandoná-la. Mesmo entre irmãos, essa proximidade dura pouco: disputas tornam-se cada vez mais frequentes conforme crescem, levando cada um a procurar seu próprio território. Escormônios passam grande parte da vida cuidando de seus abrigos, caçando e evitando uns aos outros, encontrando parceiros apenas durante o período reprodutivo. Curiosamente, aqueles que chegam à forma de Escorzebu tornam-se mais tolerantes após a experiência de formar uma família, podendo compartilhar temporariamente territórios e abrigos com outros de sua espécie. Ainda assim, os escorpimônios não possuem cidades, governos ou líderes. Para eles, conviver significa saber respeitar o espaço do outro — e poucas regras são levadas tão a sério quanto não entrar sem convite no abrigo de um escorpimônio.`

export const linhagens: Linhagem[] = [
  {
    id: 'formigas',
    nome: 'Formigas',
    insetoBase: 'granovo',
    descricao: descricaoFormigas,
    imagemCapa: '/images/formigas/capa.png',
    tema: '#8f4f24',
    criaturas: ['granovo', 'formilitar', 'formajor', 'formiloto', 'formitanque', 'formicoptero'],
  },
  {
    id: 'baratas',
    nome: 'Baratas',
    insetoBase: 'baratito',
    descricao: descricaoBaratas,
    imagemCapa: '/images/baratas/capa.png',
    tema: '#5c4b3a',
    criaturas: ['baratito', 'baratuno', 'baratrao','shinjinrata','koburata','oyaburata', 'ninoracha', 'sicaracha','lucaracha', 'cubaracha'],
  },
  {
    id: 'abelhas',
    nome: 'Abelhas',
    insetoBase: 'celularva',
    descricao: descricaoAbelhas,
    imagemCapa: '/images/abelhas/capa.png',
    tema: '#d69b16',
    criaturas: ['celularva', 'abelaria', 'zanguardiao', 'maternelha', 'supremabelha', 'minarva','minerabelha','marcenelha'],
  },
  {
    id: 'cupins',
    nome: 'Cupins',
    insetoBase: 'kurupim',
    descricao: descricaoCupins,
    imagemCapa: '/images/cupins/capa.png',
    tema: '#b17845',
    criaturas: ['kurupim', 'guaripim', 'tuipim', 'mboitapim', 'kuxapima', 'kupinguari'],
  },
  {
    id: 'vespas',
    nome: 'Vespas',
    insetoBase: 'vespescudo',
    descricao: descricaoVespas,
    imagemCapa: '/images/vespas/capa.png',
    tema: '#557e8a',
    criaturas: ['vespescudo', 'vesplebeu','vespaleiro', 'nobrespa', 'vespreiro', 'vesplorde', 'realespa', 'vespalgoz'],
  },
  {
    id: 'carrapatos',
    nome: 'Carrapatos',
    insetoBase: 'carribal',
    descricao: descricaoCarrapatos,
    imagemCapa: '/images/carrapatos/capa.png',
    tema: '#6f5846',
    criaturas: ['carribal', 'mascapato', 'carrabrigo'],
  },
  {
    id: 'pulgas',
    nome: 'Pulgas',
    insetoBase: 'larvobo',
    descricao: descricaoPulgas,
    imagemCapa: '/images/pulgas/capa.png',
    tema: '#7c4a56',
    criaturas: ['larvobo', 'escapulgo', 'saltimbulga', 'abracabulga'],
  },
  {
    id: 'mosquitos',
    nome: 'Mosquitos',
    insetoBase: 'morticle',
    descricao: descricaoMosquitos,
    imagemCapa: '/images/mosquitos/capa.png',
    tema: '#557e8a',
    criaturas: ['morticula', 'criptulo', 'mosferatu'],
  },
  {
    id: 'gafanhotos',
    nome: 'Gafanhotos',
    insetoBase: 'gafamelo',
    descricao: descricaoGafanhotos,
    imagemCapa: '/images/gafanhotos/capa.png',
    tema: '#79953e',
    criaturas: ['gafamelo', 'beduinhoto', 'gafindin'],
  },
  {
    id: 'moscas',
    nome: 'Moscas',
    insetoBase: 'tapuli',
    descricao: descricaoMoscas,
    imagemCapa: '/images/moscas/capa.png',
    tema: '#5c4b3a',
    criaturas: ['tapuli','pupula', 'shogulo', 'moshinobi', 'moscaville', 'vareninja'],
  },
  {
    id: 'louva-deus',
    nome: 'Louva-Deus',
    insetoBase: 'totzen',
    descricao: descricaoLouvaDeus,
    imagemCapa: '/images/louva-deus/capa.png',
    tema: '#568c45',
    criaturas: ['totzen', 'louvolin', 'parazeus', 'louvolingarra', 'louvolinbranco', 'louvolinescama', 'louvolinferrao', 'louvolinmimico', 'louvolinfantasma', 'louvolinlotus', 'louvolinreidiabo', 'louvolinmilespinhos', 'louvolinsemface'],
  },
  {
    id: 'besouros',
    nome: 'Besouros',
    insetoBase: 'roninfa',
    descricao: descricaoBesouros,
    imagemCapa: '/images/besouros/capa.png',
    tema: '#49505a',
    criaturas: ['roninfa', 'gusokulo', 'kabutouro'],
  },
  {
    id: 'aranhas',
    nome: 'Aranhas',
    insetoBase: 'vudulha',
    descricao: descricaoAranhas,
    imagemCapa: '/images/aranhas/capa.png',
    tema: '#49505a',
    criaturas: ['vudulha', 'aracromante', 'barantula'],
  },
  {
    id: 'escorpioes',
    nome: 'Escorpiões',
    insetoBase: 'escorpete',
    descricao: descricaoEscorpioes,
    imagemCapa: '/images/escorpioes/capa.png',
    tema: '#49505a',
    criaturas: ['escorpete', 'escormonio', 'escorzebu'],
  },
]
