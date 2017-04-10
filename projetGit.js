//Création d'un personnage pour un jeu de rôle en ligne.


var perso = 
    {
    nom: "LoneWanderer",
    strength: 6,
    perception: 4,
    endurance: 5,
	charisma: 9,
	intelligence: 8,
	agility: 3,
	luck: 2,	

    // Renvoie la description du personnage
    decrire: function () 
        {
        var description = this.nom + " possède les caractéristique S.P.E.C.I.A.L suivantes: " + "\nForce : " + this.strength + "\nPerception : " + this.perception + "\nEndurance : " + this.endurance + "\nCharisme : " + this.charisma + "\nIntelligence : " + this.intelligence + "\nAgilité : " + this.agility + "\nChance : " + this.luck;
        return description;
        }
    };

console.log(perso.decrire());

// LoneWanderder augmente avec beaucoup d'entrainement sont agilité
perso.agility = perso.agility + 1;

// LoneWanderder boit trop et diminue son intelligence 
perso.intelligence = perso.intelligence - 2;

console.log(perso.decrire());