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
            }
        ];
    }

    getRaceById(id: number): Race{
        return this.races.find(x => x.id == id);
    }
}
