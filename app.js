document.getElementById('reset').addEventListener('click', () => {
  snapfit.admix(document.getElementById('image'))
})

document.getElementById('solve').addEventListener('click', () => {
  snapfit.solve(document.getElementById('image'))
})

snapfit.add(document.getElementById('image'), {
  mixed: true,
  aborder: true,
  polygon: true,
  space: 50,
  level: 1,
  aimage: true,
})

document.getElementById('level').addEventListener('change', evt => {
  snapfit.reset(
    document.getElementById('image'),
    parseInt(evt.currentTarget.options[evt.currentTarget.selectedIndex].value)
  )
  snapfit.admix(document.getElementById('image'))
})

document.getElementById('picture').addEventListener('change', evt => {
  snapfit.remove(document.getElementById('image'))
  document.getElementById('image').src = `./images/${
    evt.currentTarget.options[evt.currentTarget.selectedIndex].value
  }.jpg`
  snapfit.add(document.getElementById('image'), {
    mixed: true,
    aborder: true,
    polygon: true,
    space: 50,
    level: 1,
    aimage: true,
  })
})

setTimeout(() => {
  if (document.getElementById('image').tagName === "IMG") {
    location.reload();
  }
}, 1000);
