
document.getElementById("btn-succes").addEventListener("click", function(){
    document.querySelector(".popup-about").style.display = "flex";
  })
  document.querySelector(".close-about").addEventListener("click", function(){
    document.querySelector(".popup-about").style.display = "none";
  })


  
document.getElementById("text-right").addEventListener("click", function(){
  document.querySelector(".popup-text-right").style.display = "flex";
})
document.querySelector(".close-text-right").addEventListener("click", function(){
  document.querySelector(".popup-text-right").style.display = "none";
})

document.getElementById("btn-section-3").addEventListener("click", function(){
  document.querySelector(".popup-section-3").style.display = "flex";
})
document.querySelector(".close-section-3").addEventListener("click", function(){
  document.querySelector(".popup-section-3").style.display = "none";
})

document.getElementById("pricing-2").addEventListener("click", function(){
  document.querySelector(".popup-pricing").style.display = "flex";
})
document.querySelector(".close-pricing").addEventListener("click", function(){
  document.querySelector(".popup-pricing").style.display = "none";
})

document.getElementById("pricing-1").addEventListener("click", function(){
  document.querySelector(".popup-pricing-2").style.display = "flex";
})
document.querySelector(".close-pricing-2").addEventListener("click", function(){
  document.querySelector(".popup-pricing-2").style.display = "none";
})
document.getElementById("pricing-3").addEventListener("click", function(){
  document.querySelector(".popup-pricing-3").style.display = "flex";
})
document.querySelector(".close-pricing-3").addEventListener("click", function(){
  document.querySelector(".popup-pricing-3").style.display = "none";
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbyqqgJk-EVU-WUJaJHzXYWu7ccNmAd82noTlgZtN_l9Hhszs3KGZx4hRxR5Z1xKvAIiLA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Thank You"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

