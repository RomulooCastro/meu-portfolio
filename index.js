// Seleciona o botão do menu hambúrguer no cabeçalho
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')

// Seleciona o menu pequeno que será exibido
const smallMenu = document.querySelector('.header__sm-menu')

// Seleciona o ícone de menu hambúrguer aberto no cabeçalho
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')

// Seleciona o ícone de menu hambúrguer fechado no cabeçalho
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')

// Seleciona todos os links do menu pequeno
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

// Adiciona um evento de clique ao botão do menu hambúrguer
hamMenuBtn.addEventListener('click', () => {
  // Verifica se o menu pequeno está ativo e alterna sua visibilidade
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  // Alterna a visibilidade dos ícones de menu hambúrguer aberto e fechado
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

// Adiciona um evento de clique a cada link do menu pequeno
for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    // Fecha o menu pequeno ao clicar em um link
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// Seleciona o container do logo do cabeçalho
//const headerLogoConatiner = document.querySelector('.header__logo-container')

// Adiciona um evento de clique ao container do logo do cabeçalho
//headerLogoConatiner.addEventListener('click', () => {
  // Redireciona para a página inicial ao clicar no logo
  //location.href = '/'
//})