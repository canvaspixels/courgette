const fs = require('fs')
const imgs = []
fs.readdirSync('uiTestResult/stepDefinitionScreenshots').forEach((file) => {
  if (file.includes('.png')) {
    imgs.push(file)
  }
});

const imgsHtml = `${imgs.map((file) => (
  `<img src="${file}" title="${file.replace(/\..*\.png$/, '').replace(/\.png$/, '')}" />
  `
)).join('')}`;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image viewer</title>
</head>
<style>
  body {
    font-family: sans-serif;
    background: #888;
    margin: 0;
    color: white;
  }
  h1 {
    font-weight: normal;
  }
  #all-imgs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  #all-imgs img {
    width: 100%;
  }
  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .wrap {
    overflow: auto;
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
</style>
<body>
  <div id="all-imgs">
${imgsHtml}
  </div>
  <section></section>
  <script>
  const section = document.querySelector('section')
  const allImgs = document.querySelector('#all-imgs')
  document.querySelectorAll('img').forEach((el) => {
    el.addEventListener('click', () => {
      allImgs.style.visibility = 'hidden'
      section.style.display = 'block'
      const src = el.getAttribute('src')
      const title = el.getAttribute('title')
      section.innerHTML = '<div class="wrap"><h1>' + title + '</h1><img src="' + src + '" /></div>'
    })
  })
  section.addEventListener('click', () => {
    enlarged = false
    allImgs.style.visibility = 'visible'
    section.style.display = 'none'
  })
  </script>
</body>
</html>
`
fs.writeFileSync('uiTestResult/stepDefinitionScreenshots/imageViewer.html', html, 'utf8')
