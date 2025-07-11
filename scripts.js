    // Simple cart functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Cart count animation
      const cartCount = document.querySelector('.cart-count');
      const cartIcon = document.querySelector('.cart-icon');
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      let cartItems = 3;
      
      cartIcon.addEventListener('click', function() {
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
          cartCount.style.transform = 'scale(1)';
        }, 300);
      });
      
      // Add to cart functionality
      addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
          cartItems++;
          cartCount.textContent = cartItems;
          
          // Animation effect
          cartCount.style.transform = 'scale(1.5)';
          setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
          }, 300);
          
          // Show notification
          const productName = this.closest('.product-card').querySelector('.product-name').textContent;
          alert(`${productName} added to cart!`);
        });
      });
      
      // Simple animation for product cards
      const productCards = document.querySelectorAll('.product-card');
      
      productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
      
      // Mega menu hover effect
      const menuItems = document.querySelectorAll('.menu-list > li');
      
      menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'transparent';
        });
      });
    });
