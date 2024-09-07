function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa')

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  // se campoPesquisa for uma string vazia
  if (!campoPesquisa) {
    section.innerHTML =
      '<p>Ops! 😵 Ha Ha Ha!  Tente novamente, digitando outras palavras ﭢ </p>'
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = ''
  let frase = ''

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    frase = dado.frase.toLowerCase()
    // se nome ou alguma palavra da frase  está incluída no campoPesquisa
    if (
      dado.nome.includes(campoPesquisa) ||
      dado.frase.includes(campoPesquisa) ||
      dado.tag.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.nome}</a>
              </h2>
              <p class="descricao-meta">${dado.frase}</p>
              <a href=${dado.url} target="_blank">Dica de Curso</a>
          </div>
      `
    }
  }

  if (!resultados) {
    resultados = '<p>🤔 Não pensei nisso, pois nada foi encontrado! 🕵🏻 </p>'
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados
}
