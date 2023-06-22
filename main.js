const experience = document.querySelector('.experience')

// chevron up and down 
const chevronMove = e => {
  chevron = e.target.classList
  let text = (e.target.parentElement).nextElementSibling
  if (chevron.contains('fa-chevron-down')){
    chevron.remove('fa-chevron-down')
    chevron.add('fa-chevron-up')
    text.style.display = 'block'
  }
  else if (chevron.contains('fa-chevron-up')){
    chevron.remove('fa-chevron-up')
    chevron.add('fa-chevron-down')
    text.style.display = 'none'
  }
}

experience.addEventListener("click", chevronMove)
