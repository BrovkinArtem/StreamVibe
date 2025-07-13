const pxToRem = (pixels) => {
  const HTMLElementFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize
  )

  return pixels / HTMLElementFontSize
}

export default pxToRem