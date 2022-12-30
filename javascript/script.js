const productImg = document.querySelector('main>img')

const media = (x) => {
  if (x.matches) { 
    productImg.setAttribute('src','/assets/image-product-mobile')
  } else {
    productImg.setAttribute('src','/assets/image-product-desktop.jpg')
  }
}

var x = window.matchMedia('(max-width:720px)')
media(x)
x.addEventListener(media)