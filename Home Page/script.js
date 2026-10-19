// ==========================================
// 1. DYNAMIC PROFILE & ROLE-BASED DROPDOWN
// ==========================================
const activeUser = localStorage.getItem('activeUser') || 'Staff';
const activeRole = localStorage.getItem('activeRole') || '';

// Check if the logged-in account is an Admin
const isAdmin = activeUser.toLowerCase() === 'admin' || activeRole.toLowerCase() === 'admin';
const displayRole = isAdmin ? 'Admin' : 'Staff';
const initialLetter = displayRole.charAt(0).toUpperCase();

// Update Header & Dropdown Labels
document.getElementById('user-profile-name').textContent = displayRole;
document.getElementById('dropdown-role-name').textContent = displayRole;
document.getElementById('btn-avatar-letter').textContent = initialLetter;
document.getElementById('card-avatar-letter').textContent = initialLetter;

// Show Dashboard ONLY if Admin; Staff only sees Staff + Log out
const adminSection = document.getElementById('admin-menu-section');
if (isAdmin) {
    adminSection.style.display = 'block';
} else {
    adminSection.style.display = 'none';
}

// Toggle Dropdown on click
const profileBtn = document.getElementById('profile-btn');
const dropdownCard = document.getElementById('dropdown-card');

profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownCard.classList.toggle('show');
});

// Close Dropdown when clicking anywhere outside
window.addEventListener('click', (e) => {
    if (!profileBtn.contains(e.target) && !dropdownCard.contains(e.target)) {
        dropdownCard.classList.remove('show');
    }
});

// Clear session on Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('activeUser');
    localStorage.removeItem('activeRole');
});

const menuData = {
   "milktea": [
        { name: 'Classic', price: 110, icon: '<img src="Milktea/Classic Milk Tea.png" alt="Classic">' },
        { name: 'Okinawa', price: 110, icon: '<img src="Milktea/Okinawa Milk Tea.png" alt="Okinawa">' },
        { name: 'Taro', price: 105, icon: '<img src="Milktea/Taro Milk Tea.png" alt="Taro">' },
        { name: 'Matcha', price: 120, icon: '<img src="Milktea/Matcha Milk Tea.png" alt="Matcha">' },
        { name: 'Cookies & Cream', price: 120, icon: '<img src="Milktea/Cookies N\' Cream.png" alt="Cookies & Cream">' },
        { name: 'Thai', price: 115, icon: '<img src="Milktea/Thai Milk Tea.png" alt="Thai">' },
        { name: 'Wintermelon', price: 95, icon: '<img src="Milktea/Wintermelon Milk Tea.png" alt="Wintermelon">' },
        { name: 'Blueberry', price: 120, icon: '<img src="Milktea/Blueberry Milk Tea.png" alt="Blueberry">' },
        { name: 'Strawberry', price: 110, icon: '<img src="Milktea/Strawberry Milk Tea.png" alt="Strawberry">' },
        { name: 'Lychee', price: 110, icon: '<img src="Milktea/Lychee Milk Tea.png" alt="Lychee">' },
        { name: 'Mango', price: 110, icon: '<img src="Milktea/Mango Milk Tea.png" alt="Mango">' }
    ],
    frappe: [
        { name: 'Coffee Frappe', price: 150, icon: '<img src="Frappe/Coffee.png" alt="Coffee Frappe">' },
        { name: 'Strawberry Frappe', price: 160, icon: '<img src="Frappe/Strawberry.png" alt="Strawberry Frappe">' },
        { name: 'Taro Frappe', price: 150, icon: '<img src="Frappe/Taro.png" alt="Taro Frappe">' },
        { name: 'Cookies & Cream', price: 165, icon: '<img src="Frappe/Cookies & Cream.png" alt="Cookies & Cream">' },
        { name: 'Mango Frappe', price: 150, icon: '<img src="Frappe/Mango.png" alt="Mango Frappe">' },
        { name: 'Matcha Frappe', price: 150, icon: '<img src="Frappe/Matcha.png" alt="Matcha Frappe">' },
        { name: 'Mocha Frappe', price: 150, icon: '<img src="Frappe/Mocha.png" alt="Mocha Frappe">' },
    ],
    refreshers: [
        { name: 'Lemonade', price: 100, icon: '<img src="Refreshers/lemonade.png" alt="Lemonade">' },
        { name: 'Peach Lemonade', price: 100, icon: '<img src="Refreshers/Peach lemonade.png" alt="Peach Lemonade">' },
        { name: 'Strawberry Lemonade', price: 100, icon: '<img src="Refreshers/Strawberry lemonade.png" alt="Strawberry Lemonade">' },
        { name: 'Blueberry Lemonade', price: 100, icon: '<img src="Refreshers/Blueberry lemonade.png" alt="Blueberry Lemonade">' },
        { name: 'Cucumber Lemonade', price: 95, icon: '<img src="Refreshers/Cucumber lemonade.png" alt="Cucumber Lemonade">' }
    ],
    hotCoffee: [
        { name: 'Espresso', price: 80, icon: '<img src="Hot Coffee/Espresso.png" alt="Espresso">' },
        { name: 'Americano', price: 90, icon: '<img src="Hot Coffee/Americano.png" alt="Americano">' },
        { name: 'Cappuccino', price: 120, icon: '<img src="Hot Coffee/Cappuccino.png" alt="Cappuccino">' },
        { name: 'Cafe Latte', price: 120, icon: '<img src="Hot Coffee/Cafe Latte.png" alt="Cafe Latte">' },
        { name: 'Mocha', price: 130, icon: '<img src="Hot Coffee/Mocha.png" alt="Mocha">' },
        { name: 'White Mocha', price: 135, icon: '<img src="Hot Coffee/White Mocha.png" alt="White Mocha">' },
        { name: 'Spanish Latte', price: 140, icon: '<img src="Hot Coffee/Spanish Latte.png" alt="Spanish Latte">' },
        { name: 'Caramel Latte', price: 135, icon: '<img src="Hot Coffee/Caramel Latte.png" alt="Caramel Latte">' },
        { name: 'Caramel Macchiato', price: 145, icon: '<img src="Hot Coffee/Caramel Macchiato.png" alt="Caramel Macchiato">' },
        { name: 'Flat White', price: 125, icon: '<img src="Hot Coffee/Flat White.png" alt="Flat White">' }
    ],
    tea: [
        { name: 'Chamomile Tea', price: 85, icon: '<img src="Tea/Charmomile.png" alt="Chamomile Tea">' }, 
        { name: 'Green Tea', price: 80, icon: '<img src="Tea/Green.png" alt="Green">' },
        { name: 'Honey Tea', price: 95, icon: '<img src="Tea/Honey.png" alt="Honey Tea">' },
        { name: 'Lemon Tea', price: 85, icon: '<img src="Tea/Lemon.png" alt="Lemon Tea">' },
        { name: 'Jasmine Tea', price: 90, icon: '<img src="Tea/Jasmine.png" alt="Jasmine Tea">' }
    ],
    icedCoffee: [
        { name: 'Iced Americano', price: 100, icon: '<img src="Iced Coffee/Iced Americano.png" alt="Iced Americano">' },
        { name: 'Iced Caramel Macchiato', price: 100, icon: '<img src="Iced Coffee/Iced Caramel Macchiato.png" alt="Iced Caramel Macchiato">' },
        { name: 'Iced Hazelnut Latte', price: 100, icon: '<img src="Iced Coffee/Iced Hazelnut Latte.png" alt="Iced Hazelnut Latte">' },
        { name: 'Iced Latte', price: 100, icon: '<img src="Iced Coffee/Iced Latte.png" alt="Iced Latte">' },
        { name: 'Iced Mocha', price: 100, icon: '<img src="Iced Coffee/Iced Mocha.png" alt="Iced Mocha">' },
        { name: 'Iced Salted Caramel Latte', price: 100, icon: '<img src="Iced Coffee/Iced Salted Caramel Latte.png" alt="Iced Salted Caramel Latte">' },
        { name: 'Iced Spanish Latte', price: 100, icon: '<img src="Iced Coffee/Iced Spanish Latte.png" alt="Iced Spanish Latte">' },
        { name: 'Iced Vanilla Latte', price: 100, icon: '<img src="Iced Coffee/Iced Vanilla Latte.png" alt="Iced Vanilla Latte">' },
        { name: 'Iced White Mocha', price: 100, icon: '<img src="Iced Coffee/Iced White Mocha.png" alt="Iced White Mocha">' },
    ],
    pastries: [
        { name: 'Banana Bread', price: 150, icon: '<img src="Pastries/Banana Bread.png" alt="Banana Bread">' },
        { name: 'Blueberry Muffin', price: 150, icon: '<img src="Pastries/Blueberry Muffin.png" alt="Blueberry Muffin">' },
        { name: 'Butter Croissant', price: 150 , icon: '<img src="Pastries/Butter Croissant.png" alt="Butter Croissant">' },
        { name: 'Cheesecake Slice', price: 150, icon: '<img src="Pastries/Cheesecake Slice.png" alt="Cheesecake Slice">' },
        { name: 'Chocolate Chip Cookie', price: 150, icon: '<img src="Pastries/Chocolate Chip Cookie.png" alt="Chocolate Chip Cookie">' },
        { name: 'Chocolate Croissant', price: 150, icon: '<img src="Pastries/Chocolate Croissant.png" alt="Chocolate Croissant">' },
        { name: 'Chocolate Muffin', price: 150, icon: '<img src="Pastries/Chocolate Muffin.png" alt="Chocolate Muffin">' },
    ],
    lightMeals: [
        { name: 'Tuna Sandwich', price: 80, icon: '<img src="Light Meals/Tuna Sandwich.png" alt="Tuna Sandwich">' },
        { name: 'Ham & Cheese Sandwich', price: 100, icon: '<img src="Light Meals/Ham & Cheese Sandwich.png" alt="Ham & Cheese Sandwich">' },
        { name: 'Chicken Nuggets', price: 200, icon: '<img src="Light Meals/Chicken Nuggets.png" alt="Chicken Nuggets">' },
        { name: 'Nachos', price: 200, icon: '<img src="Light Meals/Nachos.png" alt="Nachos">' },
        { name: 'French Fries', price: 150, icon: '<img src="Light Meals/French Fries.png" alt="French Fries">' },
    ]
};

// ==========================================
// 3. HTML ELEMENT SELECTION
// ==========================================
const categoryLinks = document.querySelectorAll('.category-link');
const productGrid = document.getElementById('product-grid');
const categoryTitle = document.getElementById('category-title');

// ==========================================
// 4. CART & STAGING STATE VARIABLES
// ==========================================
let currentCart = [];
let stagedItem = null; // The item currently sitting in the preview footer
let stagedQty = 1;     // The quantity in the preview footer

// ==========================================
// 5. GRID RENDERING & CATEGORY SELECTION
// ==========================================

// Function to draw the products on the screen
function renderProducts(categoryKey, categoryName) {
    categoryTitle.textContent = categoryName; 
    productGrid.innerHTML = ''; 

    const items = menuData[categoryKey] || []; 

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-icon">${item.icon}</div>
            <div class="product-name">${item.name}</div>
        `;
        
        // Clicking a product card stages it in the footer
        card.addEventListener('click', () => {
            stageItem(item);
        });

        productGrid.appendChild(card);
    });
}

// Listen for clicks on the sidebar
categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        // Remove the active class from all links
        categoryLinks.forEach(l => l.classList.remove('active'));
        
        // Add the active class to the clicked link
        this.classList.add('active');

        // Find out which category to load
        const categoryKey = this.getAttribute('data-category');
        const categoryName = this.textContent;

        // Load the products
        renderProducts(categoryKey, categoryName);
        
        // Hide the preview footer when switching categories
        document.getElementById('preview-footer').style.display = 'none';
        stagedItem = null;
    });
});

// Load Milk Tea by default when the page first opens
renderProducts('milktea', 'Milktea');

// ==========================================
// 6. STAGING FOOTER LOGIC (PREVIEW)
// ==========================================

function stageItem(item) {
    stagedItem = item;
    stagedQty = 1; // Reset quantity to 1 when a new item is clicked
    
    // Update the footer text
    document.getElementById('preview-name').textContent = item.name;
    document.getElementById('preview-qty').textContent = stagedQty;
    
    // Calculate and display price
    const itemPrice = item.price || 100;
    document.getElementById('preview-price').textContent = `₱${itemPrice.toFixed(2)}`;
    
    // Reveal the footer
    document.getElementById('preview-footer').style.display = 'flex';
}

// Plus Button listener
document.getElementById('qty-plus').addEventListener('click', () => {
    if (stagedItem) {
        stagedQty++;
        document.getElementById('preview-qty').textContent = stagedQty;
        
        // Update the preview price to reflect the new total
        const itemPrice = stagedItem.price || 100;
        document.getElementById('preview-price').textContent = `₱${(itemPrice * stagedQty).toFixed(2)}`;
    }
});

// Minus Button listener
document.getElementById('qty-minus').addEventListener('click', () => {
    if (stagedItem && stagedQty > 1) {
        stagedQty--;
        document.getElementById('preview-qty').textContent = stagedQty;
        
        // Update the preview price
        const itemPrice = stagedItem.price || 100;
        document.getElementById('preview-price').textContent = `₱${(itemPrice * stagedQty).toFixed(2)}`;
    }
});

// Add to Cart Button listener
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    if (stagedItem) {
        addToCart(stagedItem, stagedQty);
        
        // Hide the footer and reset staging variables after adding
        document.getElementById('preview-footer').style.display = 'none';
        stagedItem = null;
    }
});

// ==========================================
// 7. CART SIDEBAR LOGIC
// ==========================================

// NEW HELPER: Find the category of a product by searching menuData
function getCategoryForProduct(productName) {
    for (const [category, items] of Object.entries(menuData)) {
        if (items.some(item => item.name === productName)) {
            return category;
        }
    }
    return null;
}

function addToCart(item, quantityToAdd) {
    const existingItem = currentCart.find(cartItem => cartItem.name === item.name);
    const itemPrice = item.price || 100; 
    
    // Find out what category this item is in
    const category = getCategoryForProduct(item.name);

    if (existingItem) {
        existingItem.quantity += quantityToAdd;
    } else {
        // Only assign default values if the category qualifies
        currentCart.push({ 
            name: item.name, 
            price: itemPrice, 
            quantity: quantityToAdd,
            category: category,
            topping: category === 'milktea' ? 'Pearls' : 'None',
            ice: ['milktea', 'frappe', 'refreshers', 'icedCoffee'].includes(category) ? 'Normal Ice' : 'None',
            sugar: ['milktea', 'frappe', 'icedCoffee', 'hotCoffee'].includes(category) ? 'Normal Sugar' : 'None'
        });
    }
    
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-price');
    
    cartContainer.innerHTML = ''; 
    let grandTotal = 0;

    if (currentCart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart-msg">Cart is empty</div>';
        totalDisplay.textContent = '₱0.00';
        return;
    }

    currentCart.forEach((cartItem, index) => {
        // Base price calculation (+20 for More Pearls if applicable)
        let currentBasePrice = cartItem.price;
        if (cartItem.topping === 'More Pearls') {
            currentBasePrice += 20; 
        }

        const itemTotal = currentBasePrice * cartItem.quantity;
        grandTotal += itemTotal;

        // Determine which dropdowns should be visible for this specific item
        const showToppings = cartItem.category === 'milktea'; 
        const showIce = ['milktea', 'frappe', 'refreshers', 'icedCoffee'].includes(cartItem.category);
        const showSugar = ['milktea', 'frappe', 'icedCoffee', 'hotCoffee'].includes(cartItem.category);

        // Build the HTML for the dropdowns conditionally
        let customizationsHTML = '';
        if (showToppings || showIce || showSugar) {
            customizationsHTML += `<div class="cart-item-customizations">`;
            
            if (showToppings) {
                customizationsHTML += `
                    <select class="cart-custom-select topping-select" data-index="${index}">
                        <option value="Pearls" ${cartItem.topping === 'Pearls' ? 'selected' : ''}>Pearls</option>
                        <option value="More Pearls" ${cartItem.topping === 'More Pearls' ? 'selected' : ''}>More Pearls (+₱20)</option>
                        <option value="Coffee Jelly" ${cartItem.topping === 'Coffee Jelly' ? 'selected' : ''}>Coffee Jelly</option>
                        <option value="Nata de Coco" ${cartItem.topping === 'Nata de Coco' ? 'selected' : ''}>Nata de Coco</option>
                    </select>`;
            }
            
            if (showIce) {
                customizationsHTML += `
                    <select class="cart-custom-select ice-select" data-index="${index}">
                        <option value="Normal Ice" ${cartItem.ice === 'Normal Ice' ? 'selected' : ''}>Normal Ice</option>
                        <option value="More Ice" ${cartItem.ice === 'More Ice' ? 'selected' : ''}>More Ice</option>
                        <option value="Less Ice" ${cartItem.ice === 'Less Ice' ? 'selected' : ''}>Less Ice</option>
                    </select>`;
            }
            
            if (showSugar) {
                customizationsHTML += `
                    <select class="cart-custom-select sugar-select" data-index="${index}">
                        <option value="Normal Sugar" ${cartItem.sugar === 'Normal Sugar' ? 'selected' : ''}>Normal Sugar</option>
                        <option value="100%" ${cartItem.sugar === '100%' ? 'selected' : ''}>100% Sugar</option>
                        <option value="80%" ${cartItem.sugar === '80%' ? 'selected' : ''}>80% Sugar</option>
                        <option value="60%" ${cartItem.sugar === '60%' ? 'selected' : ''}>60% Sugar</option>
                        <option value="40%" ${cartItem.sugar === '40%' ? 'selected' : ''}>40% Sugar</option>
                        <option value="20%" ${cartItem.sugar === '20%' ? 'selected' : ''}>20% Sugar</option>
                    </select>`;
            }
            customizationsHTML += `</div>`;
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.style.flexDirection = 'column';
        itemDiv.style.alignItems = 'stretch';
        
        itemDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="cart-item-name">${cartItem.name}</span>
                <span class="cart-item-sum" style="font-weight: bold;">₱${itemTotal.toFixed(2)}</span>
            </div>
            
            <div class="cart-item-price">₱${currentBasePrice.toFixed(2)} each</div>

            ${customizationsHTML}

            <!-- IN-CART QUANTITY CONTROLS -->
            <div class="cart-item-controls">
                <button class="cart-qty-btn cart-minus" data-index="${index}">-</button>
                <span>${cartItem.quantity}</span>
                <button class="cart-qty-btn cart-plus" data-index="${index}">+</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });

    totalDisplay.textContent = `₱${grandTotal.toFixed(2)}`;

    // Listeners for Quantity Adjustments
    document.querySelectorAll('.cart-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            currentCart[index].quantity++;
            updateCartUI();
        });
    });

    document.querySelectorAll('.cart-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (currentCart[index].quantity > 1) {
                currentCart[index].quantity--;
            } else {
                currentCart.splice(index, 1);
            }
            updateCartUI();
        });
    });

    // Listeners for Customizations
    document.querySelectorAll('.topping-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-index');
            currentCart[idx].topping = e.target.value;
            updateCartUI(); 
        });
    });
    
    document.querySelectorAll('.ice-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-index');
            currentCart[idx].ice = e.target.value;
        });
    });
    
    document.querySelectorAll('.sugar-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-index');
            currentCart[idx].sugar = e.target.value;
        });
    });
}

// ==========================================
// 8. CHECKOUT & PRINT RECEIPT LOGIC
// ==========================================
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (currentCart.length === 0) {
        alert("Your cart is empty! Please select products first.");
        return;
    }

    // Calculate final total
    let finalTotal = 0;
    currentCart.forEach(item => {
        let basePrice = item.price;
        if (item.topping === 'More Pearls') {
            basePrice += 20;
        }
        finalTotal += (basePrice * item.quantity);
    });

    // Save record
    const cashierName = localStorage.getItem('activeUser') || 'Unknown';
    const saleRecord = {
        date: new Date().toISOString(),
        cashier: cashierName,
        items: currentCart, 
        total: finalTotal 
    };

    let salesHistory = JSON.parse(localStorage.getItem('posSales')) || [];
    salesHistory.push(saleRecord);
    localStorage.setItem('posSales', JSON.stringify(salesHistory));

    // Populate the HTML receipt and trigger print
    prepareAndPrintReceipt(currentCart, finalTotal, cashierName);
    
    // Clear cart
    currentCart = [];
    updateCartUI();
});

function prepareAndPrintReceipt(cart, total, cashier) {
    // 1. Fill in the header details in the HTML
    document.getElementById('receipt-date').textContent = new Date().toLocaleDateString();
    document.getElementById('receipt-cashier').textContent = cashier;
    document.getElementById('receipt-total').textContent = `₱${total.toFixed(2)}`;

    // 2. Build the item rows and inject them into the HTML table body
    const tbody = document.getElementById('receipt-items');
    tbody.innerHTML = ''; 

    cart.forEach(item => {
        let basePrice = item.price;
        if (item.topping === 'More Pearls') basePrice += 20;
        let itemTotal = basePrice * item.quantity;
        
        let customText = [];
        if (item.topping && item.topping !== 'None') customText.push(item.topping);
        if (item.ice && item.ice !== 'Normal Ice' && item.ice !== 'None') customText.push(item.ice);
        if (item.sugar && item.sugar !== 'Normal Sugar' && item.sugar !== 'None') customText.push(item.sugar);
        
        let customHtml = '';
        if (customText.length > 0) {
            customHtml = `<div class="item-meta">${customText.map(c => `<div>- ${c}</div>`).join('')}</div>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center; vertical-align: top; padding: 5px 0;">${item.quantity}</td>
            <td style="vertical-align: top; padding: 5px 0; font-weight: bold;">
                ${item.name}
                ${customHtml}
            </td>
            <td style="text-align: right; vertical-align: top; padding: 5px 0;">₱${itemTotal.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    // 3. Open the browser's print dialog
    // The CSS @media print rule will ensure only the #print-receipt div is printed
    window.print();
}