import { Injectable } from "@angular/core";
import { Race } from "./race.model";

@Injectable()
export class RaceService {
    races: Race[] = [];

    getAllRaces(): Race[]{
        return this.races = [
            {
                id: 1,
                nome: "ALLGRUULK",
                constelacao: "Escultor",
                primeiraVisita: "125 A.C",
                descricao: "Vem da constelação Sculptor (Escultor). Descendem de uma raça de reptilianos que já não existe. São especialistas na construção de naves e outros dispositivos necessários para viajar no espaço. Também viajam na procura incessante por matéria primas. Podem viver até 230 anos. Foram vistos pela última vez em Tóquio (Japão) no ano de 2005.",
                imageUrl: "~/app/images/allgruulk.png",
                pacifica: undefined
            },{
                id: 2,
                nome: "KIILY-TOKURT",
                constelacao: "Vela",
                primeiraVisita: undefined,
                descricao: "Esta raça vem da constelação Vela (Velame) perto da estrela Suhail al Muhlif. Podem atingir 2 metros de altura e viver 200 anos. Podem mudar de forma ('shapesift') e são incrívelmente difíceis de detectar. Quando mudam a única coisa que não conseguem mudar é a forma e a cor dos olhos. São uma das raças mais antigas conhecidas. Abduzem seres humanos. A última vez que foram vistos na Terra foi em Julho de 2008.",
                imageUrl: "~/app/images/kiilitokurt.png",
                pacifica: undefined
            },{
                id: 3,
                nome: "PLEIADIANOS",
                constelacao: "Plêiades",
                primeiraVisita: "10.000 A.C",
                descricao: "Esta raça é originária de sistemas solares junto às Plêiades. Mais precisamente do planeta Erra, perto da estrela Taygeta. São frequentemente associados a crescimento espiritual. Podem crescer até 2,5 m ( 8´). Praticam o 'Cultivo do Sexo', a diferença nítida entre as expressões sexuais e as emoções sensuais. As suas naves são conhecidas como 'beamship'. Embora ainda visitem a Terra têm-se mantido bastante silenciosos desde 10.000 AC. São uma das raças mais antigas conhecidas. Continuam a desenvolver as suas capacidades mentais necessárias para eventualmente atingirem o seu objectivo: um estado espiritual ainda superior.", 
                imageUrl: "~/app/images/pleiadianos.png",
                pacifica: true
            },{
                id: 4,
                nome: "KYLLIMIR-AUK",
                constelacao: "Volans",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação Volans (Peixe Voador). Os avistamentos desta raça são raros na Terra. Eles são uma 'raça mistério'. Diz-se que foram proibidos de visitar a Terra cerca de 100 AC. mas não pararam completamente de vir ao nosso planeta, devido aos seus aliados: a raça Maitre. Última vez que foram avistados na Terra - Dezembro de 1989.", 
                imageUrl: "~/app/images/Kyllimir-Auk.png",
                pacifica: undefined
            },{
                id: 5,
                nome: "KURS",
                constelacao: "Dillimuns",
                primeiraVisita: undefined,
                descricao: "Acredita-se que está ligada à raça Anunnaki. Vêm do planeta Dillimuns. Estão por de trás da história de Enlil e Ninlil. Estão diretamente envolvidos no desenvolvimento da raça humana no início da nossa civilização. Depois de centenas de anos afastados da Terra, recentemente regressaram. O seu próprio chefe está entre os recentes visitantes. Vão agora ficar na Terra permanentemente... terão um papel importante nos anos futuros. Passam tempos imersos num liquido dourado precioso que acreditam que aumente a duração da sua vida.", 
                imageUrl: "~/app/images/kurs.png",
                pacifica: true
            },{
                id: 6,
                nome: "HAV-HANNUAE-KONDRS",
                constelacao: "Sextans",
                primeiraVisita: "934 D.C",
                descricao: "Vêm da galáxia anã de Sextans. Visitaram a Terra pela primeira vez em 934 AC na região que atualmente é a Romênia. Frequentemente abduzem e matam humanos... e retiram e bebem o sangue dos humanos assim como dos animais. São os 'responsáveis' pelo mito dos vampiros. Vários governos conhecem e aceitam a sua ação. Os corpos humanos que abduzem nunca são devolvidos. A última vez que foram vistos na Terra - Escócia, 1996.", 
                imageUrl: "~/app/images/Hav-Hannuae-Kondrs.png",
                pacifica: false
            },{
                id: 7,
                nome: "MAZAREK",
                constelacao: "Girafa",
                primeiraVisita: "Séc. XIV",
                descricao: "Vêm da constelação Camelopardalis (Girafa). Desde o Século XIV ao princípio do Século XX (calendário humano) não lhes foi permitido sair do seu planeta, por outras raças extraterrestres. São uma raça muito violenta e predadora. Foram aliados da raça Maitre. Podem atingir 1,6 m (5'). A última vez que foram vistos na Terra foi em Agosto de 2001.", 
                imageUrl: "~/app/images/mazarek.png",
                pacifica: false
            },{
                id: 8,
                nome: "AL-GRUALIX",
                constelacao: "Baleia",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação Cetus (Baleia) perto de Deneb Kaitos Shemali. Embora sejam muitas vezes confundidos com reptilianos não têm nada de comum, exceto a aparência. Têm uma altura de cerca de 2 metros (6') e podem viver até 350 anos. Esta é uma das 21 raças que constam como tendo mais de 2 sexos (gêneros). Esta raça tem 8 sexos distintos e todos podem reproduzir com contato sexual com qualquer das outras. O objetivo da sua visita à Terra é desconhecido. A última vez que foram detectados foi perto de Lima no Peru, em Dezembro de 2004.", 
                imageUrl: "~/app/images/Al-Grualix.png",
                pacifica: undefined
            },{
                id: 9,
                nome: "OS MENSAGEIROS",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Provavelmente a mais enigmática das raças. Não se sabe muito sobre eles. Visitam a Terra com intervalos aproximados de 300 anos. A sua próxima visita pode agora acontecer em qualquer momento. Não se revelam, Não fazem contato direto com os humanos. Deixam gravuras nas rochas (desenhos e escrita) e símbolos nos monumentos históricos (por exemplo). As suas naves têm o formato de 'lágrima' e são prateados.", 
                imageUrl: "~/app/images/osmensageiros.png",
                pacifica: true
            },{
                id: 10,
                nome: "RAMAY",
                constelacao: "Cocheiro",
                primeiraVisita: "Maias",
                descricao: "Vêm de Capella, Constelação Auriga (Cocheiro). Uma raça muito pacífica. Eles tentaram coexistir  connosco. 'Criaram' a civilização Maia pegando em seres humanos de vários lugares do mundo e colocando-os na América do Sul. São uma raça de 'cientistas' ...ensinaram os Maias sobre astronomia e 'tempo'. Deixaram os Maias quando esta cultura estava no seu maior esplendor. Foi depois de deixarem os Maias que começaram os sacrifícios sangrentos em seu nome. Esta raça visitou-nos muitas vezes depois disso... Último avistamento: Bora-Bora em 2001. Sexo masculino vivem 130 anos. Sexo feminino vivem 26 anos.", 
                imageUrl: "~/app/images/ramay.png",
                pacifica: true
            },{
                id: 11,
                nome: "MOONVIANTHAN-KAYPHIK",
                constelacao: "Raposa",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação Vulpecula (Raposa). Tiveram encontros com, pelo menos, 2 presidentes americanos e com muitos líderes de topo da União Soviética e Russos. Trocam alguma tecnologia com a contrapartida de poderem fazer abduções 'à vontade'. Não envolvem outras raças extraterrestres neste processo. Tiveram um grande papel na cultura Siberiana e Tibetana. Ainda têm bases nessas áreas, que estão escondidas na face norte das montanhas. Colonizaram mais de 40 planetas... por enquanto todos fora do nosso sistema solar!", 
                imageUrl: "~/app/images/Moonvianthan-Kayphik.png",
                pacifica: false
            },{
                id: 12,
                nome: "RAK",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Visitaram a Terra menos vezes que as demais, apenas 5 vezes, sendo a ultima no ano 71 DC, gerando a crença nos gênios no Islamismo e no oriente médio ,mas deixaram de visitar este planeta por ser incompatível como sistema imunológico deles.", 
                imageUrl: "~/app/images/rak.png",
                pacifica: undefined
            },{
                id: 13,
                nome: "OS INVÍSIVEIS",
                constelacao: "Meseta",
                primeiraVisita: undefined,
                descricao: "Esta raça ficou conhecida por ser 'vista' em locais de alta segurança. São quase completamente invisíveis a olho nú. Tanto o exército russo como o americano, desenvolveram tecnologia que permite detectá-los no radar (as naves) , mas não os seres. Sabe-se três coisas : 1 . Deixam um cheiro ácido onde estiveram 2.Quando estão em janelas vê-se uma figura indistinta ( como um fantasma) , foram detectados em câmaras de segurança 3. Quando os cães começam a ladrar sem razão aparente é provável que se encontrem perto (eles ou os reptilianos). Vêm da constelação MENSA (Meseta). O seu objetivo é desconhecido.", 
                imageUrl: "~/app/images/invisiveis.png",
                pacifica: undefined
            },{
                id: 14,
                nome: "ALLAMAHULUK-STRAT-163",
                constelacao: "Júpiter",
                primeiraVisita: undefined,
                descricao: "Depois de perderem uma batalha contra os reptóides na índia antiga ( em data não identificada) foram forçados a abandonar o planeta que vinham visitando há uns 200 anos. Recomeçaram as visitas desde 1948. Tecnologicamente é uma raça muito avançada. As suas naves são frequentemente invisíveis ( ao radar e à vista humana ) e vestem um tipo de fato que também os torna invisíveis. Pensa-se que vêm de Júpiter ou de uma das suas luas. Último avistamento: Portugal, Maio 2005.", 
                imageUrl: "~/app/images/163.png",
                pacifica: undefined
            },{
                id: 15,
                nome: "AL NANNA",
                constelacao: "Gêmeos",
                primeiraVisita: "1235 A.C",
                descricao: "Os membros desta raça são a razão porque os humanos criaram o termo de Marcianos. Vêm da constelação Gemini (Gêmeos). Têm bases permanentes em Marte há milhares de anos onde recolhem um mineral parecido com o ouro. A primeira visita à Terra registada foi em 1235 A.C no Japão. Último avistamento: Madagáscar, 2003.", 
                imageUrl: "~/app/images/allnanna.png",
                pacifica: undefined
            },{
                id: 16,
                nome: "INDUGUTK",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Esta raça tem várias bases na superficie e na Lua, onde extraem minério. (matéria desconhecida). Usam escravos para fazer a maior parte do trabalho... tratam muito bem estes 'escravos', e os Indugutk consideram-nos indíspensáveis. As suas operações na superficie e na Lua são muito secretas. Estão quase em permanente contacto com altas patentes dos governos Russo, Chinês e Americano! Têm a capacidade de mudarem de forma ('Shapeshift') quase perfeitamente ficando como seres humanos. Também são conhecidos como 'Men in Black' pois usam fatos escuros especiais (para proteger a sua pele) quando tomam a forma humana para executarem operações especiais na Terra.", 
                imageUrl: "~/app/images/indugutk.png",
                pacifica: undefined
            },{
                id: 17,
                nome: "2017",
                constelacao: "UDFJ-39546284",
                primeiraVisita: "1935 D.C",
                descricao: "Só contactaram os humanos uma única vez: na URSS em 1935. De acordo com os relatos, eles falam uma espécie de dialeto eslavo. Deixaram uma mensagem de 10 frases. Oriundos da galáxia UDFJ-39546284, a uma distância estimada de 13,2 bilhões de anos-luz. Viajam usando aquilo que outras raças extraterrestres designam de 'buraco de minhoca' o que lhes permite curvar o espaço/tempo. Conforme os relatos, estes seres são altos, loiros, de cabelos compridos e 'cheiravam a flores'.", 
                imageUrl: "~/app/images/2017.png",
                pacifica: true
            },{
                id: 18,
                nome: "EL-MANOUK",
                constelacao: "Grus",
                primeiraVisita: "1935 D.C",
                descricao: "Vem da constelação de Grus, próxima de Alnair. É uma das raças mais pacíficas. É uma das raças criadoras da 'Aliança das 5 Raças' (Conselho dos 5), mas não faz parte dela. Conselho dos 5 é um grupo de 5 raças extraterrestres que protegem os humanos contra raças menos pacíficas. Criaram a frase '5 Universos, 2500 espécies, 1 raça'. O conselho deverá encontrar-se na Terra durando os 10 últimos dias de Agosto de 2013, e a razão se dá por conta de a Terra ter recebido muitas visitas de novas raças alienígenas nos últimos 500 anos. Último avistamento na Terra: setembro de 2002, perto do Mar de Cortez.", 
                imageUrl: "~/app/images/El-Manouk.png",
                pacifica: true
            },{
                id: 19,
                nome: "JI GHANTIK",
                constelacao: "Horologium",
                primeiraVisita: undefined,
                descricao: "Mantém contatos esporádicos com 3 governos da Terra, mas não com os mais poderosos (URSS, Rússia ou China). As outras raças consideram-nos como seres de natureza violenta. Tem nos visitado há 3000 anos. Vem da constelação de Horologium e são aliados da raça Maitre. Último avistamento: 1 de fevereiro de 2003, perto de Houston, Rússia.", 
                imageUrl: "~/app/images/Ji Ghantik.png",
                pacifica: false
            },{
                id: 20,
                nome: "JEFOK",
                constelacao: "Indus",
                primeiraVisita: "1500 A.C",
                descricao: "Vem da constelação Indus. São conhecidos pelas outras raças como 'pacificadores'. São extremamente avançados tecnologicamente. O primeiro avistamento na Terra data de 1500 A.C. Encontraram-se com JFK 3 semanas antes de ser assassinado. Também se encontraram com outros líderes humanos, por volta da mesma data. Não são vistos na Terra desde a morte de JFK. Em 1965 mandaram uma mensagem aos líderes humanos, de países com grande poderio nuclear (conteúdo desconhecido)", 
                imageUrl: "~/app/images/Jefok.png",
                pacifica: true
            },{
                id: 21,
                nome: "DORSAY",
                constelacao: "Cassiopéia",
                primeiraVisita: undefined,
                descricao: "Atingem altura máxima de 0,5 metros. Visitaram a Terra pelo menos 250 vezes. Vem da constelação de Cassiopéia, onde possuem 2 planetas de origem. Comem outros tipos de extraterrestres e também seres humanos. Sua raça tem, pelo menos, 4 bilhões de anos, e tem estado em guerra com uma outra espécie alienígena há 2 bilhões de anos. O último avistamento na Terra data de novembro de 2001, nos Alpes italianos.", 
                imageUrl: "~/app/images/Dorsay.png",
                pacifica: true
            },{
                id: 22,
                nome: "MAGELL",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Sabe-se que é uma raça muito pacífica. Têm duas bases permanentes na América do Sul. São 100% noturnos. Não interagem com os humanos, e são descritos pelas outras raças extraterrestres como 'tímidos'. Apanham roedores e insetos aos milhares por mês... Razão: desconhecida. Pelo menos 3 deles estiveram sob custódia militar brasileira nos últimos 12 anos. Último avistamento: perto de Oaxaca, México em 2003. São visitados pela sua própria espécie de 20 em 20 anos... a próxima visita será cerca de 2016.", 
                imageUrl: "~/app/images/MAGELL.png",
                pacifica: true
            },{
                id: 23,
                nome: "AKART",
                constelacao: "Sextante",
                primeiraVisita: undefined,
                descricao: "Vem da constelação Sextans (Sextante). Uma das suas naves despenhou-se perto de Varginha (Brasil) em 1996. Dois dos seus ocupantes estão sob custódia dos EUA, depois de terem pago bilhôes de dólares ao governo brasileiro. Têm as naves mais rápidas de todas as raças extraterrestres conhecidas. Último avistamento: Fevereiro 2002, perto de Varginha (Brasil) outra vez!.", 
                imageUrl: "~/app/images/Akart.png",
                pacifica: undefined
            },{
                id: 24,
                nome: "MAITRE",
                constelacao: "Magopei",
                primeiraVisita: "Pré-histórica",
                descricao: "Têm 2 planetas de origem na constelação Megopei. Têm a mesma altura que os humanos, e são considerados por muitas raças extraterrestres como 'parasitas'. Visitaram a Terra pela primeira vez na época pré-histórica (data desconhecida). O rapto dos humanos é feito abertamente. Têm o objetivo de colonizar a Terra, o que não aconteceu devido à proteção das outras raças extraterrestres, como o 'Conselho dos 5'. São hermafroditas e a vida deles pode durar 120 anos. Colonizaram pelo menos 26 planetas. Raptaram cerca de 5000 Humanos (Homens). Visitaram a terra pelo menos 200 vezes. Último avistamento: Setembro de 2006, perto de Nome, Alaska, URSS.", 
                imageUrl: "~/app/images/maitre.png",
                pacifica: false
            },{
                id: 25,
                nome: "DRIES",
                constelacao: "Cetus",
                primeiraVisita: undefined,
                descricao: "Crescem até cerca de 2,5 metros. A estrutura do seu crânio é muito complexa. Visitaram  planeta Terra pelo menos 20 vezes. Fazem abduções de Humanos que usam para reprodução Humana. Roubaram cerca de 520 pessoas (homens e mulheres). Vêm da terceira estrela da constelação Cetus. Têm 2 planetas de origem, colonizaram 40 planetas com a ajuda de 'escravos'. Dez desses planetas foram conquistados à força. Trabalham com mais 3 raças. Comem sobretudo produtos derivados de proteína animal. De acordo com os relatos extraterrestres não estão ainda 'mentalmente/espiritualmente' preparados para interagir com a maior parte das outras raças. A composição química dos 2 planetas de origem é semelhante à da Terra. Espera-se que se 'revelem' abertamente à raça humana em 2022.", 
                imageUrl: "~/app/images/Dries.png",
                pacifica: false
            },{
                id: 26,
                nome: "LANG",
                constelacao: "Cabeleira de Berenice",
                primeiraVisita: undefined,
                descricao: "É uma espécie pequena que cresce só até 70 cm. Vêm da terceira estrela da constelação Coma Berenices (Cabeleira de Berenice). Têm 3 planetas de origem (talvez 4) e colonizaram pelo menos 10. Foi uma das primeiras raças a visitar a Terra. Foram a raça que deu origem às 'histórias' sobre Fadas. Duas raças extraterrestres afirmam que abduziram 10 milhôes de Humanos ao longo da história (este número é muito constestado por outra raça... dizem que o número é muito inferior... e uma raça até fez uma declaração a um Presidente russo dizendo que a raça Lang nunca abduziu um Humano). Último avistamento: Nova Zelândia em janeiro de 2006... o grupo era formado por 20 indivíduos.", 
                imageUrl: "~/app/images/lang.png",
                pacifica: true
            },{
                id: 27,
                nome: "SMAD",
                constelacao: "Batteray",
                primeiraVisita: "2500 A. Atrás. ",
                descricao: "Vêm do planeta Svokk, constelação Batteray. As naves têm forma cónica. A sua aparência é semelhante aos humanos. De acordo com uma raça extraterrestre só lhes restam 6 naves. Colonizaram 20 planetas, 18 dos quais eram habitados. A sua primeira visita à Terra foi há 2500 anos e estão extremamente interessados com as nossas crenças religiosas. É uma raça em declínio ('enfraquecendo' segundo outras raças).", 
                imageUrl: "~/app/images/smad.png",
                pacifica: undefined
            },{
                id: 28,
                nome: "TENGRI TENGRI",
                constelacao: "F1340",
                primeiraVisita: "10.000 A. Atrás",
                descricao: "Vêm do planeta Tengri (setor galático 56, sistema estelar F1342). Fazem vida subterrânea e têm uma população de 10 milhôes. Primeira visita à Terra: hà cerca de 10.000 anos atrás. Não precisam de atmosfera ou água para sobreviverem. Têm uma nave onde cabem 5 milhôes deles. Ao longo da história têm tido vários contatos com governos da Terra. Último avistamento perto de Buenos Aires, Argentina, em 2013.", 
                imageUrl: "~/app/images/Tengri-Tengri.png",
                pacifica: true
            },{
                id: 29,
                nome: "GRAYSLI",
                constelacao: "Virgem",
                primeiraVisita: "3.000 A. Atrás",
                descricao: "A altura é semelhante à do homem. O corpo está coberto de pêlo sedoso curto. Têm 2 planetas de origem na constelação Virgo (Virgem). Visitaram a terra 12 vezes pelo menos. A primeira visita foi na era (dinastias) dos Faraós do Egito há cerca de 3000 anos. Permaneceram 10 anos seguidos lá nessa época. A pirâmide Djoser foi construída em sua honra!. Têm observado de perto o nosso desenvolvimento nos últimos 200 anos, sabendo que alguns humanos poderosos podem ser (e são) desencainhados por algumas raças extraterrestres (disfarçadas de Humanos). Em cada nave viajam apenas 6. Os últimos avistamentos foram em Julho de 2002 e em Fevereiro de 2004.", 
                imageUrl: "~/app/images/Graysli.png",
                pacifica: true
            },{
                id: 30,
                nome: "ANUNNAKI",
                constelacao: "Nibiru",
                primeiraVisita: undefined,
                descricao: "Vêm do planeta Nibirue (ou Nibiru). O seu planeta é parte do sistema solar da Terra, mas com uma órbita muito maior... aproxima-se do Sol de 4000 em 4000 anos e não a cada 3500 (mais ou menos) como é suposto. São semelhantes aos homens mas de maior estatura (2,5 metros), e mais musculados. De acordo com o livro, quando chegaram à Terra, já cá estavam outras raças estabelecidas... algumas malevolentes e com poderes sobrenaturais. Os Anunakene derrotaram-nos e tornaram-se a raça mais poderosa na Terra. Fizeram engenharia genética na espécie mais inteligente da Terra (nós... na altura pouco mais que primatas espertos) para ter uma raça de escravos à sua disposição. Nessa época Samael e Lilith eram o Rei e Rainha Anunnaki. Não se aperceberam da presença dos reptilianos na Terra. Só cooperaram com outra raça extraterrestre os Zeta Reticulai. Não devem ser confundidos com a raça Solipsi Rai(ou 'Grays'). Eventualmente foram-se embora da Terra (razões desconhecidas) mas antes de se irem embora, criaram uma subespécie de Zeta... esta espécie eventualmente tornou-se os governantes do Egito (Faraós) até os Reptilianos se terem infiltrado (como Sacerdotes) e acabado o seu reinado. Deram origem às lendas sobre 'gigantes'. Eles vão regressar um dia, como prometeram, contudo a data do regresso é ainda um mistério. Sabem tudo o que se passa na Terra tal como nos outros planetas onde tiveram influência (e/ou ainda têm). A proximidade do planeta Nibirue (ou Nibiru) causa instabilidade cósmica e repercussões climáticas em todos os planetas do nosso sistema solar, mas não causa a quantidade de destruição que geralmente se supões ou se acredita. Quão longe estão é ainda um mistério.", 
                imageUrl: "~/app/images/Anunnaki.png",
                pacifica: undefined
            },{
                id: 31,
                nome: "AFIM",
                constelacao: "Lyra",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação de Lyra. Chamam-se a si próprios 'AFIM SPIANSTSY' por causa da guerra que lutaram contra uma raça chamada 'Spiantsy'... a raça 'Spiantsy' tinha 12 vezes mais membros e 35 vezes mais naves e recursos que os 'AFIM'... mas os 'AFIM' foi quem ganhou no final. Portanto juntaram o nome 'Spiantsy' ao nome da sua raça, como aviso para outras raças. São de estatura menor que a dos humanos, pele azul e às manchas, mais escuros no gênero masculino e mais claro no feminino. O seu planeta chama-se Crimea Ai Petri. Tecnologicamente são muito desenvolvidos. Conseguem vir do seu planeta para a Terra em 20 minutos. Não precisam de oxigênio. Eles têm uma atmosfera mais constituída predominantemente por uma mistura de hidrogênio e afins. Colonizaram 10 planetas de modo não violento. Quando estão perto dos humanos podem tornar-se invisíveis mas os humanos vão sentir uma certa dose de ansiedade inexplicável. As naves são pequenas e esféricas. Uma das razões porque nos visitam é para estudar o que chamam de 'desvio humano', para determinar o desenvolvimento futuro da raça humana.", 
                imageUrl: "~/app/images/Afim-Spianstsy.png",
                pacifica: true
            },{
                id: 32,
                nome: "SOLIPSI RAI",
                constelacao: "Cisne",
                primeiraVisita: undefined,
                descricao: "Raça harmoniosa em todos os aspectos. Têm um líder principal. O seu nome é... Ymartyyn. A sua civilização tem 2 bilhões de anos... já estiveram no mesmo nívem de desenvolvimento que nós. Não têm colônias... estão completamente concentrados no desenvolvimento dos outros planetas e raças. Vêm da constelação Cygnus (Cisne). Têm uma arma poderosa que mantém afastadas as raças vizinhas violentas e outros que tentassem invádi-los... uma vez a raça Maitre perdeu 5 naves devivo a isso. Dizem que raça Humana nos próximos milhares de anos ainda em 645 opções para nos salvarmos a nós, ao nosso planeta e garantir o futuro da nossa raça... mas dependerá da nossa capacidade de viajar no espaço. Eles são a raça Solipsi Rai, mas nós chamamos-lhes... 'Os Grays'!.", 
                imageUrl: "~/app/images/grays.png",
                pacifica: true
            },{
                id: 33,
                nome: "PUXHITY",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Esta raça foi muito influente no desenvolvimento de várias civilizações na América do Sul e Central. Numa certa época houve mais 2000 membros vivendo entre os humanos nessa região... até um dia em que a maior parte deles se foi embora deixando apenas 25 por sua conta... e os Humanos os mataram. Não mais voltaram à Terra depois desse 'incidente'. Sabe-se que eram muito altos... há relatos de uma raça extraterrestre dizem que alguns deles chegavam aos 4 metros. As razões pelas quais os Humanos da região mataram os 25 são desconhecidas.", 
                imageUrl: "~/app/images/Puxhity.png",
                pacifica: true
            },{
                id: 34,
                nome: "X5-TYKUT",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Esta raã foi criada pela raça Maitre para servirem de escravos deles... e é para isso que eles ainda servem. São frequentemente enviados pelos Maitre para regiçoes sensíveis em segurança trabalhando como mensageiros e também para organizarem abduções. Podem vivier para sempre porque não são orgânicos... contudo as matérias-primas que os Maitre precisam para 'construir' um deles, são muito raras. Portanto não há muitos deles (estimativa: menos de 300). Têm a capacidade de conduzir naves e de usarem 'pensamento racional' (quando programados), assim como pilotar naves e outras tarefas. Vistos pela última vez na Terra em julho de 1997 perto de Brisbane (Austrália).", 
                imageUrl: "~/app/images/X5-Tykut.png",
                pacifica: false
            },{
                id: 35,
                nome: "TANZANY",
                constelacao: "Perseu",
                primeiraVisita: undefined,
                descricao: "Esta raça vem da constelação Perseus (Perseu), perto da estrela Gorgonea Secunda. Causaram milhares (talvez milhões) de mortes na Terra (e outros planetas), pois um dos seus interesses (ou área de 'estudo') é ver como outras raças reagem a tragédias e cataclismos. São muito avançados tecnologicamente. Uma raça extraterrestre declarou que eles (os Tanzany) causaram tanto o acidente de Hindenburg como o afundamento do Titanic. São muitas vezes vistos perto de 'tragédias'. Podem viver até 500 anos e têm uma altura cerca de 1,7 metros. As outras raças extraterrestres tentam não fazer contato com eles. Último avistamento: Janeiro de 1999 no estado de Nova Iorque.", 
                imageUrl: "~/app/images/Tanzany.png",
                pacifica: false
            },{
                id: 36,
                nome: "AIRK",
                constelacao: "Ofiúco",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação Ophiucus (Ofiúco) perto da estrela Yed Prior. São considerados pelas outras raças como uma raça pacífica. O seu objetivo é desconhecido... Nunca ficam muito tempo na Terra e não interagem com Humanos ou outros extraterrestres quando estão aqui. Usam a Terra como local onde 'param' (para colher algo que podem precisar) antes de irem para o seu destino. São sobretudo noturnos. As suas naves emitem uma luz brilhante alaranjada e são (na maior parte, mas não todas) de forma octagonal. O último avistamento foi perto de Londres (Inglaterra) em Maio de 2003.", 
                imageUrl: "~/app/images/Airk.png",
                pacifica: true
            },{
                id: 37,
                nome: "VINNITUARY",
                constelacao: "Pavão",
                primeiraVisita: "1000 D.C",
                descricao: "Vêm da constelação Pavo (Pavão). São uma raça muito respeitada e pacífica e presume-se que tem poderes místicos. Têm vindo à Terra pelo menos desde 1000 D.C. Não abduzem humanos. Não interagem com os humanos. Podem viver até 2000 anos. A sua estatura é igual à dos Humanos. São vegetarianos. Último avistamento: perto de Odessa (Ucrânia) em Julho de 1995.", 
                imageUrl: "~/app/images/Vinni-Tuary.png",
                pacifica: true
            },{
                id: 38,
                nome: "KALENIA",
                constelacao: "Águia",
                primeiraVisita: "300 A.C",
                descricao: "Vêm da constelação Aquila (Águia), estrela Tazared. Colonizaram 3 planetas e a duração de vida é de 150 anos. As suas naves são vistas frequentemente no Norte da África e na região do Sahara. A primeira visita na Terra foi cerca de 300 A.C. Não fazem abduções. Principal interesse na Terra: minerais. Último avistamento foi em 2003 perto de um vulcão, na Islândia.", 
                imageUrl: "~/app/images/Kalenia.png",
                pacifica: true
            },{
                id: 39,
                nome: "STROM",
                constelacao: "Ursa Menor",
                primeiraVisita: "Idade do Gelo",
                descricao: "Vêm da constelação Ursa Minor (Ursa Menor). Os Storm são invertebrados celenterados. Estatura média de 2 metros. A vegetação é muito importante para sua cultura, é o principal objetivo das suas visitas. Fizeram pelo menos 200 visitas à Terra. Esta raça age com muita cautela e raramente é vista pelos Humanos. A primeira visita à terra foi no fim da última idade do gelo. Têm 20 colônias espalhadas pela Via Láctea. As suas naves têm forma de um octógono. Último avistamento: Outubro 1976 no Oregon, EUA.", 
                imageUrl: "~/app/images/Strom.png",
                pacifica: true
            },{
                id: 40,
                nome: "MYTHLAE",
                constelacao: "Serpente",
                primeiraVisita: "1963 D.C",
                descricao: "São parentes distantes da espécie reptiloide, mas não são reptilianos. Vêm da constelação Serpens (Serpente), estrela Alya. Visitaram a Terra pela primeira vez em 13 de Junho de 1963. Não são considerados uma ameaça para espécie humana. Vistos frequentemente perto da Antártida. A razão das suas visitas é desconhecida. Último avistamento: Antártida, 1 Maio 1997.", 
                imageUrl: "~/app/images/Mythilae.png",
                pacifica: true
            },{
                id: 41,
                nome: "ALCOHBATA",
                constelacao: "Perseu",
                primeiraVisita: undefined,
                descricao: "Pensa-se que têm mais de 5000 naves e colonizaram à sua conta mais de 100 planetas. Considerada pelas outras raças extraterrestres como uma das raças parasitas. Estão a decorrer abduções frequentes. Objetivo das abduções: desconhecido. Não gostam de interagir com outras raças extraterrestres. Vêm da constelação Perseus (Perseu) e são muito agressivos. Suspeita-se que estejam envolvidos em várias quedas de aviões, como o voô do KA 007, sobre URSS em 1983. O governo soviético aceitou as culpas desse acidente. Última vez que foram vistos na Terra: Setembro de 2001, no Canadá.", 
                imageUrl: "~/app/images/Alcohbata.png",
                pacifica: false
            },{
                id: 42,
                nome: "NEGUMAK",
                constelacao: undefined,
                primeiraVisita: "1989 D.C",
                descricao: "Primeira visita na Terra, que se conheça, 1989. Abduzem seres humanos e controlam a mente das pessoas que capturam (humanos abduzidos), e usam-nos, depois de libertados para objetivos desconhecidos. Foi esta raça a verdadeira inspiração para os alienígenas no filme 'Dia da Independência'. São uma das raças mais antigas que existem. Também são uma das raças que os governos da Terra mais temem, tendo em consideração o futuro dos Humanos.", 
                imageUrl: "~/app/images/Negumak.png",
                pacifica: false
            },{
                id: 43,
                nome: "ZETA RETICULAI",
                constelacao: "Nets",
                primeiraVisita: "4000 A.C",
                descricao: "Muitas vezes confundidos (devido à aparência) com as raças Maitre e Solipsi Rai (ou 'Grays'). Vêm da constelação Nets. São aliados dos Anunnaki e cooperam com eles em diferentes planetas... São os representantes dos Anunnaki na Terra e mandam-lhes informação sobre os Humanos e este planeta pelo menos 25 vezes por ano. Os Anunnaki fizeram engenharia genética numa subespécie dos Zeta para que eles ficassem com uma aparência mais próxima da humana, mas deixando suficientes diferenças físicas para os Humanos os distinguirem. Mais tarde tornaram-se alguns Faraós do Egito. O mais conhecido de todos foi AKHENATON a quem os reptilianos tomaram o poder... infiltraram-se na Corte como Sacerdotes do Templo. Os primeiros relatos sobre os ZETAS datam de 4000 A.C, mas é bem plausível que o número seja maior. Foram os primeiros híbridos criados por engenharia genética pelos Anunnaki. A subespécie Zeta ainda existe na Terra e ainda (pelo menos 30%) apresenta as mesmas diferenças físicas com as quais foram criados. Ainda hoje, cerca de 30% deles têm malformações. Existem aqui ainda em duas formas... a original e a híbrida. A sua localização na Terra é desconhecida.", 
                imageUrl: "~/app/images/Zeta-Reticulai.png",
                pacifica: undefined
            }, {
                id: 44,
                nome: "TARICE",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "A sua origem é desconhecida. São muitas vezes vistos perto (ou a voar perto) de vulcões. (identificam-se devido à sofisticada natureza das suas navez). Nunca contactaram os Humanos e não existem relatos de violência ou abduções. Embora seja discretos, a sua presença na Terra é frequente e não tentam ocultar a sua presença. Há vários relatos contraditórios sobre a sua aparência. Último avistamento: juntp à costa da Noruega em 2000.", 
                imageUrl: "~/app/images/Tarice.png",
                pacifica: undefined
            },{
                id: 45,
                nome: "PURITAV-ILLUMU",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "A sua origem é desconhecida. São avistados com frequência no Noroeste amerciano (especialmente na zona do Oregon). Parecem estar interessados nos oceanos e sabe-se que têm naves subaquáticas (ou USO's). Nos anos 80 e 90 houve choques com navios da marinha americana, quando os americanos estavam a testar os novos sistemas de sonar e radar. São pacíficos e sobretudo noturnos. O último avistamento foi em 2000 perto de São Francisco.", 
                imageUrl: "~/app/images/puritav-illumu.png",
                pacifica: true
            },{
                id: 46,
                nome: "X-1Z",
                constelacao: undefined,
                primeiraVisita: "Séc. XVI",
                descricao: "Foram apenas avistados 2 vezes na Terra. De acordo com os relatos de outras raças, são capazes de mudar de forma 'shapeshift' e até 4 vezes em 10 segundos. A origem é desconhecida. Fazem abduções frequentes e executam experiências médicas em humanos. Visitam a Terra desde meados do Séc. XVI. Os únicos 2 avistamentos confirmados foram ao pé de Elazig (Turquia).", 
                imageUrl: "~/app/images/x-1z.png",
                pacifica: false
            },{
                id: 47,
                nome: "CARAVELDI",
                constelacao: "Camaleão",
                primeiraVisita: undefined,
                descricao: "Considerada (por vezes) extremamente perigosa para os Humanos, assim como para outras espécies. Vêm da constelação de Chamaeleon (Camaleão). Estiveram em conflito com algumas outras raças por mais de 500 anos (do nosso tempo). São raramente vistos na Terra. Podem viver até 150 anos e atingir 3 metros de altura e têm 4 braços. O último avistamento foi perto de Nova Orleães (EUA) em 1976.", 
                imageUrl: "~/app/images/caraveldi.png",
                pacifica: false
            },{
                id: 48,
                nome: "ELFFAF",
                constelacao: "Boieiro",
                primeiraVisita: undefined,
                descricao: "Vêm da constelação Bootes (Boieiro) perto da estrela Asellus Primus. São parecidos com certos tipos de Grays mas não são 'aparentados'. A sua espécie tem 4 sexos (gêneros) diferentes, e são conhecidos como benevolentes. O objetivo da sua visita é desconhecido mas têm especial interesse em materiais/minerais pois são vistos perto de minas antigas. Último avistamento: San Isidro de El General (Costa Rica).", 
                imageUrl: "~/app/images/elffaf.png",
                pacifica: true
            },{
                id: 49,
                nome: "MATRAX",
                constelacao: "Delfim",
                primeiraVisita: "4.000 A. Atrás",
                descricao: "Apesar da sua aparência (provoca medo aos humanos que os avistam) esta raça não é considerada agressiva. Podem viver até 400 anos, e vêm da constelação Delphinus, (Delfim) perto de Sualocin. Têm visitado a Terra pelo menos desde há 4.000 anos, mas foram avistados com frequência durante o Séc. XIX. Serviram de inspiração também para o filme 'O dia da Independência'. O último avistamento aconteceu perto de Marselha, França, em 1996.", 
                imageUrl: "~/app/images/matrax.png",
                pacifica: true
            },{
                id: 50,
                nome: "TISAR-3",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "A sua origem é desconhecida mas há relatos que afirmam que levam 2 anos a chegar a este planeta. São os sobreviventes de uma raça reptóide extinta e não possuem o mesmo nível de tecnologia ou conhecimentos das outras raças que visitam a Terra. Têm algumas carcterísticas semelhantes às dos humanos, como a pele. Em 1977, ou 1978, perto de Siena (Itália), 2 da sua espécie foram capturados após aterrarem atrás de uma igreja em ruínas... 3 dias depois foram transferidos para uma base aérea americana na Itália, e finalmente levados para um local secreto onde, supostamente, ainda se encontram, os contatos mencionaram que se encontram alguns no Pacífico Sul e em outra base americana perto do Japão. O APIS/3 Soviético pode obter uma gravação de vídeo desta espécie. Último avistamento: 3 de Janeiro de 2001, perto de Vitoria, Canadá.", 
                imageUrl: "~/app/images/tisar-3.png",
                pacifica: undefined
            },{
                id: 51,
                nome: "ELLINA",
                constelacao: undefined,
                primeiraVisita: undefined,
                descricao: "Supostamente foi esta raça que originou o mito dos Elfos (Elfo). São avistados com frequência nos países germânicos no interior de florestas. Não consta que sejam letais para os Humanos, no entanto são 'maliciosos'... parece que se divertem a assustar os Humanos quando estes se aproximam demais. Houve relatos que terem atráido Humanos para longe dos carros para roubar os seus pertences... e quando os Humanos se afastam dos veículos (e eles já roubaram o que queriam) assustam-nos o que faz que os humanos abandonem o local. Último avistamento: perto de Munique, Alemanha, em Dezembro de 2004.", 
                imageUrl: "~/app/images/ellina.png",
                pacifica: undefined
            },{
                id: 52,
                nome: "KILLIMAT-ARR",
                constelacao: "Cruzeiro do Sul",
                primeiraVisita: undefined,
                descricao: "Eles vêm da constelação Crux (Cruzeiro do Sul) perto de GaCrux (estrela Gamma Crucis). É uma raça muito difícil de detectar ou seguir o rastro. Tanto o exército russo como o dos URSS, desenvolveram uma câmera especial e um sistema de radar que permite detectá-los quando estão entre nós. Mesmo assim só foram detectados 8 vezes. O objetivo das suas visitas é desconhecido. Quando são avistados geralmente acontece na zona conhecida como Triângulo das Bermudas.", 
                imageUrl: "~/app/images/Killimat-Arr.png",
                pacifica: undefined
            },{
                id: 53,
                nome: "REPTILIANOS",
                constelacao: "Dragão",
                primeiraVisita: "15.000 A. Atrás",
                descricao: "A espécie mais conhecida e temida das espécies Reptóides (há pelo menos 3 espécies). Tem estado na Terra permanentemente há mais de 15.000 anos (confirmado), mas crê-se que podem ter cá estado (permanentemente ou intermitentemente) há milhôes de anos. Vêm da constelação de Draco (Dragão). Estão presentes em milhares de planetas e colonizara pelo menos 500 planetas através de infiltração dos governos e outros lugares de chefia em todos esses planetas. Alguns (mas não todos) os membros têm a capacidade de mudar de forma ('shapeshift') assim como capacidades telepáticas. Na Terra não precisaram de se encontrarem continuamente no poder pois têm vivido lado a lado com os Humanos (sem eles se darem conta) e 'vivera' a nossa evolução (em todos os aspectos). São considerados como uma das espécies tecnologicamente mais avançadas mas preferem trabalhar na 'sombra', usando isso como uma vantagem para o seu progresso ou planos/agenda. Conseguem viajar inter-dimensionalmente (a maior parte das raças não consegue) e alguns dos seus membros de mais alto nível também têm o poder de se tornar invisíveis... para ter esse poder um reptiliano tem primeiro de ser aceito no que eles chamam de 'o Draco', um grupo de elite de Reptilianos. Os Reptilianos do 'Draco' estão infiltrados (ou mesmo são co-fundadores) dos Illuminati. Têm 3 bases principais na Terra: na área do Triângulo das Bermudas; ao largo da costa da Dinamarca e ao largo da costa da Nova Zelândia. Há quem diga que não irão embora, pelo menos de sua própria vontade.", 
                imageUrl: "~/app/images/Reptilianos.png",
                pacifica: false
            }
        ];
        
    }

    getRaceById(id: number): Race{
        return this.races.find(x => x.id == id);
    }
}
