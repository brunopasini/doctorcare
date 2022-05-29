window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
  // verificar se a sessão passou da linha
  // quais dados vou passar?

  // O topo da seção
  const sectionTop = section.offsetTop
  // A atura da seção
  const sectionHeight = section.offsetHeight
  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPasseTargetLine = targetLine >= sectionTop

  // Informação dos dados e da lógica

  // Verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // A seção termina onde?
  const sectioEndsAt = sectionTop + sectionHeight
  // O final da seção passou da linha avo
  const sectionEndPassedTargetLine = sectioEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPasseTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card
#about,
#about header,
about .content`)
