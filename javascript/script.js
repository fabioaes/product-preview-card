const productImg = document.getElementById('imagem')

function imgMobile(query)  {
  if (query.matches) {
    productImg.setAttribute('src','https://github.com/fabioaes/product-preview-card/blob/main/assets/image-product-mobile.jpg')
  } else {
    productImg.setAttribute('src','https://github.com/fabioaes/product-preview-card/blob/main/assets/image-product-desktop.jpg')
  }
}

var query = window.matchMedia('(max-width:720px)')
imgMobile(query)
query.addEventListener('change', imgMobile); 
