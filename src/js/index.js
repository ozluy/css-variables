const timerChanger = document.querySelector('#theme-changer')
timerChanger.onclick = () => {
  const root = document.querySelector(':root')
  const rootStyles = getComputedStyle(root)
  const red = rootStyles.getPropertyValue('--color-red')
  const newColor = red.trim() === '#ef0d33' ? '#ff0000' : '#ef0d33'
  root.style.setProperty('--color-red', newColor)
}
