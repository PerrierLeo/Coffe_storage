/*
//function update dom//
function updateDom(){
    //boucle pour que produit de list produit soit creer//
    for(const produit of listProduits)
    let div = document.createElement("div");
    let pNom = document.createElement("p");
    let pType = document.createElement("p");
    let pQuantite = document.createElement("p");
    let pPrixAchatHT = document.createElement("p");
    let pPrixVenteHT = document.createElement("p");
    let pMarge= document.createElement("p");
    let pVenteTTC = document.createElement("p");

    //puis placé dans le doc//

    divProduits.appendChild(div);
    div.appendChild(pNom);
    div.appendChild(pType);
    div.appendChild(pQuantite);
    div.appendChild(pPrixAchatHT);
    div.appendChild(pPrixVenteHT);
    div.appendChild(pMarge);
    div.appendChild(pVenteTTC);

    //puis récupération text//

    pNom.innerText = `Produit : ${produit.nom}`;
    pType.innerText = `Type : ${produit.type}`;
    pQuantite.innerText = `Produit : ${produit.quantite}`;
    pPrixAchatHT.innerText = `Type : ${produit.prixachatht}`;
    pPrixVenteHT.innerText = `Type : ${produit.prixventeht}`;
    pMarge.innerText = `Type : ${produit.prixventeht - produit.prixachatht}`;
    pPrixVenteTTC.innerText = `Type : ${produit.prixventeht * 1,2}`;
    

}*/