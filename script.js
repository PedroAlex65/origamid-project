function handle(event){
  console.log(event.key);

  if(event.key === 't' ){
    document.documentElement.classList.toggle('textomaior')
  }if(event.key ==="T"){
    alert('CapsLock Ativado, Desative para aumentar o texto')
  }
}


window.addEventListener('keydown', handle)