var btnplus = document.querySelectorAll('.btnplus');
for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener('click', function() {
        btnplus[i].previousElementSibling.innerText++;
        prixtotale()
    })
    
}
var btnmoins = document.querySelectorAll('.btnmoins');
for (let i = 0; i < btnmoins.length; i++) {
    btnmoins[i].addEventListener('click', function() {
        if (btnmoins[i].nextElementSibling.innerText > 0) {
            btnmoins[i].nextElementSibling.innerText--;
        }
        prixtotale()
    })
    
}
var fatrash = document.querySelectorAll('.fa-trash-can');
var product = document.querySelectorAll('.card');
for (let i = 0; i < product.length; i++) {
    fatrash[i].addEventListener('click', function() {
        product[i].remove();
    });
    
}
var btnlike = document.querySelectorAll('.fa-heart');
for (let i = 0; i < btnlike.length; i++) {
    btnlike[i].addEventListener('click', function() {
        // if (btnlike[i].style.color ==='red'){
        //     btnlike[i].style.color='black';
        // }else{
        //     btnlike[i].style.color='red';
        // } 
        btnlike[i].classList.toggle('djeja')
    
})
}
var prixtotal = document.querySelector('#prixtotal');
var prix = document.querySelectorAll('.prix');

// for (let i = 0; i < btnplus.length; i++) {
//     btnplus[i].addEventListener('click', function(){
        
    
//         var sum = 0;
//         for (let i = 0; i < prix.length; i++) {
//             sum+= parseInt(prix[i].innerText)*parseInt(btnplus[i].previousElementSibling.innerText);
            
//         }

//     prixtotal.innerText = sum + 'DT';
//     })
    
// }
// for (let i = 0; i < btnmoins.length; i++) {
//     btnmoins[i].addEventListener('click', function(){
        
    
//         var sum = 0;
//         for (let i = 0; i < prix.length; i++) {
//             sum += parseInt(prix[i].innerText)*parseInt(btnmoins[i].nextElementSibling.innerText);
            
//         }

//     prixtotal.innerText = sum + 'DT';
//     })
    
// }
function prixtotale(){
            var sum = 0;
            for (let i = 0; i < prix.length; i++) {
                sum+= parseInt(prix[i].innerText)*parseInt(btnplus[i].previousElementSibling.innerText);
                
            }
    
        prixtotal.innerText = sum + 'DT';
        }
    