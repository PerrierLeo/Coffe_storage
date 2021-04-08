//container par onglet//
let divAjouter = document.getElementById("divAjouter2");
let divAlcools = document.getElementById("divAlcools1");
let divSofts = document.getElementById("divSofts1");
let divDesserts = document.getElementById("divDesserts1");
let divPlats = document.getElementById("divPlats1");
let divEntrees = document.getElementById("divEntrees1");
let divProduits = document.getElementById("divProduits1");
let tbTableau1 = document.getElementById("tbTableau1");
let tbTableau2 = document.getElementById("tbTableau2");
let tbTableau3 = document.getElementById("tbTableau3");
let tbTableau4 = document.getElementById("tbTableau4");
let tbTableau5 = document.getElementById("tbTableau5");
let tbTableau6 = document.getElementById("tbTableau6");
// display tableau //
let classTable = document.getElementsByClassName("classTh");




let trTableau = document.getElementById("trTableau");
//click sur barre nav par type//
let barreAjouter = document.getElementById("AjouterProduits");
let barreAlcools = document.getElementById("Alcools");
let barreSofts = document.getElementById("Softs");
let barreDesserts = document.getElementById("Desserts");
let barrePlats = document.getElementById("Plats");
let barreEntrees = document.getElementById("Entrees");
let barreProduits = document.getElementById("Produits");
// affichage length tableau type HTML//
let nombreProduit = document.getElementById("nombreProduits");
let nombreEntree = document.getElementById("nombreEntrees");
let nombrePlats = document.getElementById("nombrePlats");
let nombreDesserts = document.getElementById("nombreDesserts");
let nombreSofts = document.getElementById("nombreSofts");
let nombreAlcools = document.getElementById("nombreAlcools");
// declaration chaines de caracteres en let pour fonction//

//creation tableau produits//
let listProduits= [];
let listEntree = [];
let listPlats = [];
let listDesserts = [];
let listSofts = [];
let listAlcools= [];
//recuperation INPUT et bouton//

let selectType = document.getElementById("selectType");
let inputQuantite = document.getElementById("inputQuantite");
let inputPrixAchat = document.getElementById("inputPrixAchat");
let inputPrixVente = document.getElementById("inputPrixVente");
let btnAdd = document.getElementById("btnAdd");







//click en fonction de l'onglet//
barreAjouter.addEventListener("click", function(e){
    onglet(divAjouter, barreAjouter, divProduits, barreProduits, divEntrees, barreEntrees, divPlats, barrePlats, divDesserts, barreDesserts, divAlcools, barreAlcools, divSofts, barreSofts)  
    
});
barreAlcools.addEventListener("click", function(e){
    onglet(divAlcools, barreAlcools, divAjouter, barreAjouter, divProduits, barreProduits, divEntrees, barreEntrees, divPlats, barrePlats, divDesserts, barreDesserts, divSofts, barreSofts);
    triAlcools();
    updateDom(divAlcools, listAlcools, tbTableau6)
});
barreSofts.addEventListener("click", function(e){
    onglet(divSofts, barreSofts, divAlcools, barreAlcools, divAjouter, barreAjouter, divProduits, barreProduits, divEntrees, barreEntrees, divPlats, barrePlats, divDesserts, barreDesserts);
    triSofts();
    updateDom(divSofts, listSofts, tbTableau5) 
});
barreDesserts.addEventListener("click", function(e){
    onglet(divDesserts, barreDesserts, divSofts, barreSofts, divAlcools, barreAlcools, divAjouter, barreAjouter, divProduits, barreProduits, divEntrees, barreEntrees, divPlats, barrePlats);
    triDesserts();
    updateDom(divDesserts, listDesserts, tbTableau4)
});
barrePlats.addEventListener("click", function(e){
    onglet(divPlats, barrePlats, divDesserts, barreDesserts, divSofts, barreSofts, divAlcools, barreAlcools, divAjouter, barreAjouter, divProduits, barreProduits, divEntrees, barreEntrees);
    triPlats();
    updateDom(divPlats, listPlats, tbTableau3);
});
barreEntrees.addEventListener("click", function(e){
    onglet(divEntrees, barreEntrees, divPlats, barrePlats, divDesserts, barreDesserts, divSofts, barreSofts, divAlcools, barreAlcools, divAjouter, barreAjouter, divProduits, barreProduits);
    triEntree();
    updateDom(divEntrees, listEntree, tbTableau2);
});
barreProduits.addEventListener("click", function(e){
    onglet(divProduits, barreProduits, divEntrees, barreEntrees, divPlats, barrePlats, divDesserts, barreDesserts, divSofts, barreSofts, divAlcools, barreAlcools, divAjouter, barreAjouter);
    
});
btnAdd.addEventListener("click", function(e){
 let produit = new Produit(inputNom.value, selectType.value, inputQuantite.value, inputPrixAchat.value, inputPrixVente.value);
 if(inputPrixAchat.value !=="" && inputPrixAchat.value >=0 && inputPrixVente.value !=="" && inputPrixVente.value >=0 && inputNom.value !== ""){
 listProduits.push(produit);
 console.log(listProduits);
 updateDom(divProduits, listProduits, tbTableau1)
 /*let produit_json = JSON.stringify(produit)
 localStorage.setItem(produit.id, produit_json);;*/
}
 else(
     alert("merci de remplir les cases et de mettre des valeurs positive")
 )
});





//function update dom//

function updateDom(divProduits, listProduits, tbTableau1){

    tbTableau1.innerText="";

    // notification nombre d'element dans type//
    nombreProduit.innerText =`${listProduits.length}`;
    nombreEntree.innerText =`${listEntree.length}`;
    nombrePlats.innerText =`${listPlats.length}`;
    nombreDesserts.innerText =`${listDesserts.length}`;
    nombreSofts.innerText =`${listSofts.length}`;
    nombreAlcools.innerText =`${listAlcools.length}`;

    //boucle pour que produit de list produit soit creer//
    for(const produit of listProduits){
    
    let tr = document.createElement("tr");
    let pNom = document.createElement("td");
    let pType = document.createElement("td");
    let pQuantite = document.createElement("td");
    let pPrixAchatHT = document.createElement("td");
    let pPrixVenteHT = document.createElement("td");
    let pMarge= document.createElement("td");
    let pPrixVenteTTC = document.createElement("td");
    let tdBtn = document.createElement("td");
    let btnSuppr = document.createElement("button");
    let btnLess = document.createElement("button");
    let btnMore = document.createElement("button");
    //let qrCode = document.createElement("div");
    
   
    //puis placé dans le doc//
    tbTableau1.appendChild(tr);
    tr.appendChild(pNom);
    tr.appendChild(pType);
    tr.appendChild(pQuantite);
    tr.appendChild(pPrixAchatHT);
    tr.appendChild(pPrixVenteHT);
    tr.appendChild(pMarge);
    tr.appendChild(pPrixVenteTTC);
    tr.appendChild(tdBtn);
    tdBtn.appendChild(btnSuppr);
    tdBtn.appendChild(btnLess);
    tdBtn.appendChild(btnMore);
    //tdBtn.appendChild(qrCode);
    // creation pour modif // 
    
    
    pPrixTTC = document.createElement("input");


    
    //variable calcul stock//
    let prixVente = (produit.prixventeht * (1.2));

    function alertStock(){
        if(produit.quantite === 0){
            pQuantite.style.backgroundColor = "red";
        }else if(produit.quantite > 0 && produit.quantite <= 4){
            pQuantite.style.backgroundColor = "orange";
        }else if(produit.quantite > 4){
            pQuantite.style.backgroundColor = "green";
        }else{
        alert("un stock ne peut être négatif");
        };}
    

        //puis récupération text//
        pNom.innerText = `${produit.nom}`;
        pType.innerText = `${produit.type}`;
        pQuantite.innerText = `${produit.quantite}`;
        alertStock()
        pPrixAchatHT.innerText = `${produit.prixachatht}€`;
        pPrixVenteHT.innerText = `${produit.prixventeht}€`;
        pMarge.innerText = `${produit.prixventeht - produit.prixachatht}€`;
        pPrixVenteTTC.innerText = `${prixVente.toFixed(2)}€`;
        btnSuppr.innerText = "Delete";
        btnLess.innerText = " - ";
        btnMore.innerText = " + ";

    // ajustement proprietes css// 
        pNom.style.margin = "10px";
        pType.style.margin = "10px";
        pQuantite.style.margin = "10px";
        pPrixAchatHT.style.margin = "10px";
        pPrixVenteHT.style.margin = "10px";
        pMarge.style.margin = "10px";
        pPrixVenteTTC.style.margin = "10px";
        btnSuppr.style.borderRadius = "10%";
        btnSuppr.style.backgroundColor = "#20c997";
        btnSuppr.style.color = "white";
        btnSuppr.style.margin = "7px";
        btnSuppr.style.border = "none";
        btnSuppr.style.padding= "10px";
        btnLess.style.borderRadius = "10%";
        btnLess.style.border = "none";
        btnLess.style.backgroundColor = "#20c997";
        btnLess.style.color = "white";
        btnLess.style.margin = "6px";
        btnLess.style.padding= "10px";
        btnMore.style.borderRadius = "10%";
        btnMore.style.backgroundColor = "#20c997";
        btnMore.style.color = "white";
        btnMore.style.margin = "7px";
        btnMore.style.border = "none";
        btnMore.style.padding= "10px";

/*
        qrCode.style.src = "http://jindo.dev.naver.com/collier";
        qrCode.style.width = "10px";
        qrCode.style.height = "10px";
        qrCode.style.colorDark = "#000000";
        qrCode.style.colorLight = "#ffffff";
        qrCode.style.CorrectLevel = "QRCode.CorrectLevel.H";
        qrcode.makeCode = "http://naver.com";     */      
            
    
   
    // couleur pour quantité//
   

   //btn add more
    btnMore.addEventListener("click", function(){
        produit.increment();
        pQuantite.innerText = produit.quantite;
   
        updateDom(divProduits, listProduits, tbTableau1)
        alerStock();;
    })

    btnLess.addEventListener("click", function(){
        if (produit.quantite > 0){
        produit.decrement();
        pQuantite.innerText = produit.quantite;
        updateDom(divProduits, listProduits, tbTableau1)
        }else{
            alert("ne peut etre negatif")};
    })

    btnSuppr.addEventListener("click", function(){
        deleteProduit(produit);
    })
 
    // click modif  NOM//
    pNom.addEventListener("click",function(){
        pNom.innerText="";
        let pNomModif = document.createElement("input");
        pNom.appendChild(pNomModif);
        pNomModif.focus();
        pNomModif.addEventListener("change",function(){
            produit.nom = pNomModif.value;
            pNom.innerText=pNomModif.value;
            pNomModif.style.display="none";
            updateDom(divProduits, listProduits, tbTableau1);
            updateDom(divEntrees, listEntree, tbTableau2)
        })

        });

    // click modif  Type//

        pType.addEventListener("click",function(){
            pType.innerText="";
            let pTypeModif = document.createElement("select");
            let pEntrees = document.createElement("option");
            let pPlats = document.createElement("option");
            let pDesserts = document.createElement("option");
            let pSofts = document.createElement("option");
            let pAlcools = document.createElement("option");

            pEntrees.innerText = "Entree";
            pPlats.innerText = "Plats";
            pDesserts.innerText = "Dessert";
            pSofts.innerText = "Soft";
            pAlcools.innerText = "Plats";
            pType.appendChild(pTypeModif);
            pTypeModif.appendChild(pEntrees);
            pTypeModif.appendChild(pPlats);
            pTypeModif.appendChild(pDesserts);
            pTypeModif.appendChild(pSofts);
            pTypeModif.appendChild(pAlcools);
            pTypeModif.focus();
            pTypeModif.addEventListener("blur",function(){
                produit.type = pTypeModif.value;
                pType.innerText=pTypeModif.value;
                pTypeModif.style.display="none";
                updateDom(divProduits, listProduits, tbTableau1);
            })})
        // click modif  AchatHT//

        pPrixAchatHT.addEventListener("click",function(){
            pPrixAchatHT.innerText="";
            let pHTMODIF = document.createElement("input");
            pHTMODIF.type = "number";
            
            pPrixAchatHT.appendChild(pHTMODIF);
            pHTMODIF.focus();
            pHTMODIF.addEventListener("change",function(){
                produit.prixachatht = pHTMODIF.value;
                if(pHTMODIF.value >= 0){
                    pPrixAchatHT.innerText=pHTMODIF.value;
                pHTMODIF.style.display="none";
                updateDom(divProduits, listProduits, tbTableau1);
                    
                }else{
                    alert("valeur positive seulement")
                }
                
            })
         
            })
        
        // click modif  venteHT//

        pPrixVenteHT.addEventListener("click",function(){
            pPrixVenteHT.innerText="";
            let pVHTMODIF = document.createElement("input");
            pVHTMODIF.type = "number";
            pPrixVenteHT.appendChild(pVHTMODIF);
            pVHTMODIF.focus();
            pVHTMODIF.addEventListener("change",function(){
                produit.prixventeht = pVHTMODIF.value;
                if(pVHTMODIF.value >= 0){
                
                pPrixVenteHT.innerText=pVHTMODIF.value;
                pVHTMODIF.style.display="none";
                updateDom(divProduits, listProduits, tbTableau1)}
                else{ 
                    alert("valeur positive seulement")

                }

            })
         
            })
   
        

}};

/*fpname.addEventListener("click", function (e) {
            pname.innerText = "";
           let inputName = document.createElement("input");
           pname.appendChild(inputName);
           inputName.focus();
           inputName.addEventListener("change",function(e){
            Stock.nom = inputName.value ;
            inputName.style.display = "none";
            save();
            updateDom(); 

           }); 
          });

    })}*/