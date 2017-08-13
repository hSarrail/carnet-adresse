export class Personne {
  id: number;
  prenom: string;
  nom: string;
  adresse: {};
  constructor(id: number, prenom: string, nom: string, rue: string, codePostale: number, ville: string, pays: string) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
  }


}
interface Adresse {
  rue: string;

  codePostale: number;
  ville: string;
  pays: string;
}
