const modal = document.getElementById('modal-overlay')
const h2 = document.querySelector('.conteudo-modal h2')
const p = document.querySelector('.conteudo-modal p')

const openModal = () => {
  modal.classList.remove('invisible')
}

const fecharModal = () => {
  modal.classList.add('invisible')
}

function exibirInformacao(ano) {
  switch (ano) {
    case 50:
      ;(h2.innerHTML = 'Anos 50'),
        (p.innerHTML =
          'Período que pode ser considerado como os primeiros passos do rock brasileiro')
      break
    case 60:
      ;(h2.innerHTML = 'Anos 60'),
        (p.innerHTML =
          'Com o movimento Tropicália, surgem nomes como Os Mutantes, Rita Lee e Sérgio Dias. Alguns nomes aparecem nesta fase musical, Nora Ney cantora de MPB e Cauby Peixoto, que gravou a música "Rock and Roll em Copacabana", de Miguel Gustavo. Recebe grande destaque também Betinho, Tony e Celly Campello.')
      break
    case 70:
      ;(h2.innerHTML = 'Anos 70'),
        (p.innerHTML =
          'Neste mesmo período surge o Holywood Rock, festival pioneiro do rock no Brasil. No cirtuito underground, bandas como O Terço, Made in Brazil, Sá, Roudrix e Guarabira e Casa das Máquinas.')
      break
    case 80:
      ;(h2.innerHTML = 'Anos 80'),
        (p.innerHTML =
          'O Rock Nacional dos anos 80 foi um período a que se atribui a popularização do Rock no Brasil. Uma verdadeira explosão de bandas de rock no país.')
      break
    case 90:
      ;(h2.innerHTML = 'Anos 90'),
        (p.innerHTML =
          'O Rock Nacional dos anos 90 passou por grandes influências Pop e com algumas bandas cantando em inglês, com perspectivas internacionais. Surgimento da MTV no Brasil.')
      break
    case 2000:
      ;(h2.innerHTML = 'Anos 2000'),
        (p.innerHTML =
          'A continuidade do trabalho da MTV continuou a fortalecer a música no Brasil. O trabalho desenvolvido no formato acústico com muitas bandas e artistas também contribuiu para a reinvenção de algumas bandas e composições, trazendo uma nova roupagem e muitas novidades na produção artística e musical.')
      break
  }
}

let botoes = document.querySelectorAll('#button-container button')
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function (e) {
    openModal()
    console.log(this.id)
    exibirInformacao(parseInt(this.id))
  })
}

const voltar = document.getElementById('close-modal')
voltar.addEventListener('click', () => {
  fecharModal()
})