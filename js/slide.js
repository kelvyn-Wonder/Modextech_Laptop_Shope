document.addEventListener('DOMContentLoaded', () => {
  // product cards Display
  let productContainerWidth = document.querySelector('.product-cards-container').offsetWidth;
  let productCardWidth = 260;
  let productCardsPerRow = Math.floor(productContainerWidth / (productCardWidth + 10));
  let marginSpacing = (productContainerWidth - (productCardsPerRow * productCardWidth)) / (productCardsPerRow - 1);

  let lastElement = productCardsPerRow - 1;
  let productCards;

  let productSections = document.querySelectorAll('.product-section');
  productSections.forEach((section) => {
    productCards = section.querySelectorAll('.product-card');

    for (let i = 0; i < productCardsPerRow; i++) {
      productCards[i].classList.add('active');

      if (i === lastElement) {
        productCards[i].style.marginRight = '0px';
      } else {
        productCards[i].style.marginRight = `${marginSpacing}px`;
      }
    }
  });

  //Add Items to Wish List
  let WishListCount = document.querySelector('#wishlist-link span');
  let heartButtons = document.querySelectorAll('.heart-button')


  heartButtons.forEach((button) => {
      button.addEventListener('click', () =>{
        button.classList.toggle('active');
        WishListCount.innerHTML = document.querySelectorAll('.heart-button.active').length
      })
  })

  //Add items to Card 
  let cartCount = document.querySelector('#cart-link span');
  let cartButton = document.querySelectorAll('.product-card .blue-button');

    cartButton.forEach((button) => {
      button.addEventListener('click', () =>{
        button.classList.toggle('active');

        let buttonString = button.innerHTML.trim()
        if(button.innerHTML.trim() === "Add to cart") {
          button.innerHTML = "Remove"
        }
        else if (button.innerHTML === "Remove") {
          button.innerHTML = "Add to cart"
        }
        else {
          console.log("Error: Adding item to cart failed.",button.innerHTML);
        }
        cartCount.innerHTML = document.querySelectorAll('.product-card .blue-button.active').length
      })
  })
});