
// Data
const DISHES = [
    {
        name: 'Bruschetta',
        description: 'Tomato, picked garlic, parmesan',
        picture: './images/antipasto/bruschetta.jpg',
        price: 11,
        category: 'antipasto',
    },
    {
        name: 'Warm marinated olives',
        description: 'rosemary, citrus',
        picture: './images/antipasto/warm-marinated-olives.jpg',
        price: 8,
        category: 'antipasto',
        vegan: true
    },
    {
        name: 'Fried roman artichoke',
        description: 'rosemary, citrus',
        picture: './images/antipasto/fried-roman-artichoke.jpg',
        price: 8,
        category: 'antipasto',
        vegan: true
    },
    {
        name: 'Vongole bianco',
        description: 'rosemary, citrus',
        picture: './images/antipasto/vongole-bianco.jpg',
        price: 8,
        category: 'antipasto'
    },
    {
        name: 'Fettuccine Carbonara',
        description: 'Pancetta bacon with shallots in a parmesan cream sauce over fettuccine',
        picture: './images/pasta/fettuccine-carbonara.jpg',
        price: 13,
        category: 'pasta',
    },
    {
        name: 'Pumpkin',
        description: 'Sautéed mushrooms, garlic and herbs',
        picture: './images/pasta/pumpkin.jpg',
        price: 13,
        category: 'pasta',
        vegan: true
    },
    {
        name: 'Squash Ravioli',
        description: 'House-made ravioli stuffed with butternut squash in a browned-butter sage sauce',
        picture: './images/pasta/squash-ravioli.jpg',
        price: 16,
        category: 'pasta'
    },
    {
        name: 'Marinara',
        description: 'Tomato, garlic, oregano, and extra-virgin olive oil',
        picture: './images/pizza/marinara.jpg',
        price: 9,
        category: 'pizza',
        vegan: true
    },
    {
        name: 'Florentine',
        description: 'Tender roast chicken, spinach and cherry tomato in a ricotta cream sauce',
        picture: './images/pizza/florentine.jpg',
        price: 14,
        category: 'pizza'
    },
    {
        name: 'Sicilian',
        description: 'Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella and basil',
        picture: './images/pizza/sicilian.jpg',
        price: 14,
        category: 'pizza'
    },
    {
        name: 'Vegetariana',
        description: 'Loaded with red onion, tomato, bell pepper, mushrooms and black olives, with tomato sauce and fresh mozzarella',
        picture: './images/pizza/vegetariana.jpg',
        price: 11,
        category: 'pizza'
    },

    {
        name: 'Tiramisu',
        description: 'espresso-soaked lady fingers layered with cocoa and sweet Italian mascarpone',
        picture: './images/desserts/tiramisu.jpg',
        price: 6,
        category: 'dessert'
    },
    {
        name: 'Lemon Meringue Pie',
        description: 'made fresh daily with lemon curd filling and topped with baked Italian meringue',
        picture: './images/desserts/lemon-meringue-pie.jpg',
        price: 5.5,
        category: 'dessert'
    },
    {
        name: 'Double Chocolate Walnut Brownie',
        description: 'a rich fudge brownie, served with French Vanilla bean ice cream',
        picture: './images/desserts/double-chocolate-walnut-brownie.jpg',
        price: 6.5,
        category: 'dessert'
    },
    {
        name: 'Baked pears w. cinnamon, pecan and maple syrup',
        description: 'a rich fudge brownie, served with French Vanilla bean ice cream',
        picture: './images/desserts/baked-pears.jpg',
        price: 6.5,
        category: 'dessert'
    }
];

const sideMenu = document.querySelector('.shopping-cart-menu')
const toggleMenuButton =  document.querySelector('.toggle-menu-btn')
const closeMenuButton = document.querySelector('.close-menu-btn')
let isSideMenuOpened = false;
let totalShoppingCart = [];

toggleMenuButton.addEventListener('click', () => openSideMenu())
closeMenuButton.addEventListener('click', () => closeSideMenu())

// // Functions
function openSideMenu() {
    if(isSideMenuOpened === false) {
        sideMenu.classList.add('toggle-menu')
    }
}

function closeSideMenu() {
    sideMenu.classList.remove('toggle-menu')
}

(function toggleDarkMode() {
    const darkModeButton = document.querySelector('.dark-mode-btn')

    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
})();

(function renderDishes() {
    const main = document.querySelector('main')

    const foodSection = document.createElement('section')
    foodSection.setAttribute('class', 'food-section')
    const dishes = document.createElement('div')
    dishes.setAttribute('class', 'dishes')
    
    main.appendChild(foodSection);
    
    let dishesTitle =  document.createElement('h2')
    dishesTitle.setAttribute('class', 'dishes-title')
    dishesTitle.textContent = 'Our food menu'
    foodSection.appendChild(dishesTitle)
    foodSection.appendChild(dishes)
    

    // Iterate in DISHES array to render a card by item
    for (let DISH of DISHES) {
        const dish = document.createElement('dl')
        dish.setAttribute('class', 'dish')
        dishes.appendChild(dish)
    
        const picture = document.createElement('img')
        picture.setAttribute('class', 'picture')
        picture.src = DISH.picture
        dish.appendChild(picture)
    
        const name = document.createElement('dt')
        name.setAttribute('class', 'name')
        name.textContent = DISH.name
        dish.appendChild(name)
    
        const description = document.createElement('dd')
        description.setAttribute('class', 'description')
        description.textContent = DISH.description
        dish.appendChild(description)
    
        const dishFooter =  document.createElement('div')
        dishFooter.setAttribute('class', 'dish-footer')
        dish.appendChild(dishFooter)
    
        const price = document.createElement('dd')
        price.setAttribute('class', 'price')
        price.innerText = `${DISH.price} €`
        dishFooter.appendChild(price)
    
        const add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('class', 'add-to-cart')
        add_to_cart_btn.innerText = 'Add to cart'
        dishFooter.appendChild(add_to_cart_btn)
    }
})();

(function addDishToCart() {
    const buttons = document.querySelectorAll('.add-to-cart')

    buttons.forEach(button => button.addEventListener('click', (e) => {
        isSideMenuOpened = true;
        openSideMenu()
    }))
})();