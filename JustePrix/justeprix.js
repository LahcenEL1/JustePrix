// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error= document.querySelector('small');
let formulaire= document.querySelector('#formulaire');
let nbCoups=0;
let nbchoisi;



// Etape 2 - Cacher l'erreur
error.style.display='none';
// Etape 3 - Générer un nombre aléatoire
  //nb aleatoire entre  0 et 1000

let nombreAleatoire = Math.floor(Math.random() * 1001); 
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup',()=>{
    if(isNaN(input.value)){
        error.style.display='block';
    }else{
      
        error.style.display='none';
    }
});


// Etape 6 - Créer la fonction vérifier

function verifier(nb){
  let instruction = document.createElement('div');
  
  
  if(nb < nombreAleatoire){
    instruction.textContent= "#"+nbCoups+"("+nb+") c'est plus";
    instruction.className="instruction plus";
  }
  else if (nb > nombreAleatoire){
    instruction.textContent= "#"+nbCoups+"("+nb+") c'est moins";
    instruction.className="instruction moins";
  }else{
    instruction.textContent= "#"+nbCoups+"("+nb+") felicitation";
    instruction.className="instruction fini";
    input.disabled=true;
  }
  //Ajouter l'element
  document.querySelector('#instructions').prepend(instruction);
}


// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  if(isNaN(input.value) || input.value =='' ){
     input.style.borderColor='red';
  }else{
    nbCoups++;
    input.style.borderColor='silver';
    nbchoisi= input.value;
    input.value='';
    verifier(nbchoisi);

  }
    
    
});
