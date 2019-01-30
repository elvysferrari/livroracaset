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
            }
        ];
    }

    getRaceById(id: number): Race{
        return this.races.find(x => x.id == id);
    }
}
