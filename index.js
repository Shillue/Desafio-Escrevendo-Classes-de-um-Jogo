class hero{
    constructor(name, age, tipo){
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch(this.tipo){
            case "mago": 
                ataque = "magia";
            break;
            case "guerreiro":
                ataque = "uma espada";
            break;
            case "monge":
                ataque = "artes marciais";
            break;
            case "ninja":
                ataque ="um shuriken";
            break;
            default:
                ataque ="um ataque desconhecido";
            break;        
        }
        const mensagem = `O ${this.tipo} ${this.name} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

const hero1 = new hero("Gandalf", 150, "mago");
const hero2 = new hero("Herbert", 70, "guerreiro");
const hero3 = new hero("Igor", 200, "monge");
const hero4 = new hero("Kato", 40, "ninja");
const hero5 = new hero("Bundy", 30, "assassino");

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();
hero5.atacar();