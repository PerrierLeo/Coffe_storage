/*recup element dans lorcal storage
let recupStorage = function (listProdutc){
    for (i = 0; i < localStorage.length; i++);{
    let objectKey = localStorage.key(i) ;
    let objectJSON = localStorage.getItem(objectKey);
    let object = JSON.parse(objetJSON);
    if(object.produitType == "Entree"){
        console.log("entree");
        let produitEntree = new Produit(object.nom,
            object.quantite,
            object.prixachatht,
            object.prixventeht,
            object.id,
        );
        listProduits.push(produitEntree);
    }
    else if(object.produitType == "Plats"){
    console.log("Plats")
    let produitPlats = new Produit(object.nom,
        object.quantite,
        object.prixachatht,
        object.prixventeht,
        object.id,
      
         );
         listProduits.push(produitPlats)
    }
    else if(object.produitType == "Dessert"){
        console.log("desserts")
        let produitDessert = new Produit(object.nom,
        object.quantite,
        object.prixachatht,
        object.prixventeht,
        object.id,
        ); 
        listProduits.push(produitDessert)
    }else if (object.produitType == "Soft"){
        console.log("Soft")
        let produitSoft = new Produit(object.nom,
        object.quantite,
        object.prixachatht,
        object.prixventeht,
        object.id,
        ); 
        listProduits.push(produitSoft)
    }else if (object.produitType == "Alcools"){
        console.log("Alcool")
        let produitSoft = new Produit(object.nom,
        object.quantite,
        object.prixachatht,
        object.prixventeht,
        object.id,
        ); 
        listProduits.push(produitAlcool)
    }
        }
}


// suppr

let suppStorage = function(elem) {
    let templistProduit = [];
    recupStorage(templistProduit);
    let indexSupp = templisteProduit.findIndex(function(product){
        return produit.id == produit.id
    })
    let elemSupKey = localStorage.key(indexSupp)
    localStorage.removeItem(elemSupKey);
}*/







