var $ = document.querySelector.bind( document )


const visor  = $('#visor')
const teclas = $('.teclas')


  let vp = Math.min(innerWidth, innerHeight)
      vp > 500 ? vp = 500 : vp = vp
      vp  /= 4.7
      vp = Number(vp).toFixed(2)
  
  document.body.style.setProperty('--vp', vp+'px')

const botoes = teclas.querySelectorAll('button')

botoes.forEach((btn)=>{
    // const largura = window.getComputedStyle(btn)
    //                 .getPropertyValue('width')
                   
    //       btn.style.setProperty('--medida', largura)
          
          btn.onclick = ()=> digitar( btn.innerText )
})


const alturaDasTeclas = parseInt( window.getComputedStyle( teclas ).getPropertyValue('height') ) + 60


visor.style.setProperty('height', window.innerHeight - alturaDasTeclas + 'px' )



function digitar( tecla )
{

  const opcoes = {
        'C' : ()=> visor.innerHTML = '',
        '' : ()=>{
            let texto = visor.innerHTML
            visor.innerHTML = texto.substring( texto.length - 1, 0)
        },
        '=' : ()=>{
            let expressao = visor.innerHTML
              .replace(/×/g,'*').replace(/÷/g,'/')
              .replace(/\^/g,'**')
              .replace(/\%/g,'/100*')
              .replace(/,/g,'.')
            
                expressao = eval(expressao).toFixed(4)
            
            let resultado   = eval( expressao )
            visor.innerHTML = String(resultado)
            .replace(/\./g,',')
        }
  }
  
  opcoes[tecla] ? opcoes[tecla]() :  visor.innerHTML += tecla
  visor.innerHTML = String( visor.innerText ).replace(/××/g,'^')
}


window.addEventListener('error',(e)=>{
  alert(e.message)
})

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
       let telaDeAbertura = document.querySelector('.abertura')
           telaDeAbertura.remove()
    }, 2000)
})

