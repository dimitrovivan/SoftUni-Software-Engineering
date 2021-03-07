function solve() {
   let totalPrice = 0;
   let outputElement = document.querySelector('textarea');
   let products = {};
   
   let buttons = document.querySelectorAll('button.add-product');

   Array.from(buttons).forEach(button => {

      button.addEventListener('click', printAndSum);

   })

   let checkOutButton = document.querySelector('button.checkout');

   checkOutButton.addEventListener('click', printAndDisable);

   function printAndSum(e) {
      
      let buttonParentElement = e.target.parentElement;

      let productParentElement = buttonParentElement.parentElement;

      let productName = productParentElement.querySelector('.product-title').innerHTML;
      let productPrice = Number(productParentElement.querySelector('.product-line-price').innerHTML);
      totalPrice += productPrice;
      
      if (!products[productName]) {
         products[productName] = productPrice;
      }
      outputElement.value +=  `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

   }

   function printAndDisable() {

      let nameResult = Object.keys(products).join(', ');

      let result = `You bought ${nameResult} for ${totalPrice}$.`;

      outputElement.value += result;

      Array.from(buttons).forEach(button => {

         button.setAttribute('disabled','true');
      })
}

}