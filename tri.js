
// TRIE ENTREE //
function triEntree(){
listEntree = listProduits.filter(function(Produit){
    
    if(Produit.type == "Entree"){
        return true
    }else{
        return false
    }

})
console.log(listEntree);
};
// TRI PLATS //
function triPlats(){
    listPlats = listProduits.filter(function(Produit){
        
        if(Produit.type === "Plats"){
            return true
        }else{
            return false
        }
    })
};
// TRIE DESSERT //
    function triDesserts(){
        listDesserts = listProduits.filter(function(Produit){
            
            if(Produit.type === "Dessert"){
                return true
            }else{
                return false
            }
        })
};
// TRIE SOFT//
function triSofts(){
    listSofts = listProduits.filter(function(Produit){
        
        if(Produit.type === "Soft"){
            return true
        }else{
            return false
        }
    })
};
// TRIE ALCOOL//
function triAlcools(){
    listAlcools = listProduits.filter(function(Produit){
        
        if(Produit.type === "Alcool"){
            return true
        }else{
            return false
        }
    })
};
