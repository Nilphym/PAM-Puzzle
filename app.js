let currentImage = 'image1'

document.getElementById('reset').addEventListener('click', () => {
  snapfit.admix(document.getElementById(currentImage))
})

document.getElementById('solve').addEventListener('click', () => {
  snapfit.solve(document.getElementById(currentImage))
})

snapfit.add(document.getElementById(currentImage), {
  mixed: true,
  aborder: true,
  polygon: true,
  space: 20,
  level: 1,
  aimage: true,
})

document.getElementById('level').addEventListener('change', evt => {
  snapfit.reset(
    document.getElementById(currentImage),
    parseInt(evt.currentTarget.options[evt.currentTarget.selectedIndex].value)
  )
  snapfit.admix(document.getElementById(currentImage))
})

document.getElementById('picture').addEventListener('change', evt => {
  snapfit.remove(document.getElementById(currentImage))
  document.getElementById(currentImage).style = 'display: none'

  currentImage = `image${
    evt.currentTarget.options[evt.currentTarget.selectedIndex].value
  }`

  document.getElementById(currentImage).style = ''

  snapfit.add(document.getElementById(currentImage), {
    mixed: true,
    aborder: true,
    polygon: true,
    space: 20,
    level: 1,
    aimage: true,
  })
})

setTimeout(() => {
  if (document.getElementById(currentImage).tagName === 'IMG') {
    location.reload()
  }
}, 1000)
