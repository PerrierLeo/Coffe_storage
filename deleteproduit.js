
/*

function modifContact (pModif, pModifModif, pPlace ,contactModif ){
    

    pModif.style.display = "none";
    pPlace.insertAdjacentElement("afterend", pModifModif);
    pModifModif.innerText = "";
    pModifModif.focus();
    pModifModif.addEventListener("blur", function(e){
    pModifModif.remove();
    contactModif = pModifModif.value;
    pModifModif.innerText = "";
    pModif.innerText = `${contactModif}`;
    pModif.style.display = "block";
   

    })};

    /*function modifProduit (pNom, pNomModif, produitNom,){*/

    