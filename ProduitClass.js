class Produit{
    constructor(nom, type, quantite, prixachatht, prixventeht,){
    this.nom = nom,
    this.type = type,
    this.quantite = Number(quantite),
    this.prixachatht = Number(prixachatht),
    this.prixventeht= Number(prixventeht);
    this.id = Date.now();
    this.increment = function(){
            this.quantite +=1;
             };
    this.decrement = function(){
        this.quantite -=1;
    };
    this.remove = function(){
        remove(this.produit);
    }
    }
    
}
function deleteProduit(el){
    let index = listProduits.findIndex(function(produit){
        return produit.id === el.id ;
    });
    listProduits.splice(index,1);
   // suppStorage(index, 1)
    updateDom(divProduits, listProduits, tbTableau1);

}

