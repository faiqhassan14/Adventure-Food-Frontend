        const menuItems = [
            {
                id: 1,
                name: "Vegetable Original",
                description: "Fresh organic vegetables with special herbs and sauce",
                price: 22.00,
                category: "Vegetable",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Organic"
            },
            {
                id: 2,
                name: "Vegetable Seafood",
                description: "Fresh seafood mixed with seasonal vegetables",
                price: 22.00,
                category: "Seafood",
                image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Chef's Special"
            },
            {
                id: 3,
                name: "Tempeh Sandwich",
                description: "Organic tempeh with fresh greens and special sauce",
                price: 25.00,
                category: "Vegetable",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Vegan"
            },
            {
                id: 4,
                name: "Chickpea Burger",
                description: "Homemade chickpea patty with avocado and sprouts",
                price: 24.00,
                category: "Vegetable",
                image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Gluten-Free"
            },
            {
                id: 5,
                name: "Noodles Spacy With Egg",
                description: "Spicy noodles with organic egg and vegetables",
                price: 32.00,
                category: "Specialties",
                image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Spicy"
            },
            {
                id: 6,
                name: "Vegetable Burrito",
                description: "Fresh vegetables wrapped in a warm tortilla",
                price: 22.00,
                category: "Vegetable",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Fresh"
            },
            {
                id: 7,
                name: "Avocado Salad with Tuna",
                description: "Fresh avocado salad with seared tuna steak",
                price: 25.00,
                category: "Seafood",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Healthy"
            },
            {
                id: 8,
                name: "Vegetable Seafood Platter",
                description: "A variety of seafood with grilled vegetables",
                price: 34.00,
                category: "Seafood",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                badge: "Premium"
            }
        ];

        let cart = [];
        const cartIcon = document.querySelector('.cart-icon');
        const cartCount = document.querySelector('.cart-count');
        const menuGrid = document.querySelector('.menu-grid');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const notification = document.querySelector('.notification');
        const notificationText = document.querySelector('.notification-text');


        document.addEventListener('DOMContentLoaded', () => {
            renderMenuItems();
            updateCart();
          
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
              
                    tabButtons.forEach(btn => btn.classList.remove('active'));
               
                    button.classList.add('active');
                    
                    const category = button.textContent;
                    renderMenuItems(category === 'All' ? null : category);
                });
            });
            
            document.querySelector('.order-btn').addEventListener('click', () => {
                document.querySelector('#menu').scrollIntoView({behavior: 'smooth'});
            });
        });

        function renderMenuItems(category = null) {
            menuGrid.innerHTML = '';
            
            const filteredItems = category 
                ? menuItems.filter(item => item.category === category)
                : menuItems;
            
            filteredItems.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.classList.add('menu-item');
                menuItemElement.innerHTML = `
                    <div class="menu-item-badge">${item.badge}</div>
                    <div class="menu-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                        <button class="add-to-cart" data-id="${item.id}">
                            <i class="fas fa-plus"></i> Add to Cart
                        </button>
                    </div>
                `;
                
                menuGrid.appendChild(menuItemElement);
            });
            
          
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.closest('.add-to-cart').dataset.id);
                    addToCart(itemId);
                });
            });
        }

      
        function addToCart(itemId) {
            const menuItem = menuItems.find(item => item.id === itemId);
            const existingItem = cart.find(item => item.id === itemId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    ...menuItem,
                    quantity: 1
                });
            }
            
            updateCart();
            showNotification(`${menuItem.name} added to cart!`);
            
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 300);
        }


        function updateCart() {
           
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

  
        function showNotification(message) {
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });