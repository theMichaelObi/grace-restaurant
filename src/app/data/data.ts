export const navdata = [
    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true,
    },
    {
        id: 2,
        name: 'About',
        target: 'about',
        active: false,
    },
    {
        id: 3,
        name: 'Menu',
        target: 'menu',
        active: false,
    },
    {
        id: 4,
        name: 'Specials',
        target: 'specials',
        active: false,
    },
    {
        id: 5,
        name: 'Events',
        target: 'events',
        active: false,
    },
    {
        id: 6,
        name: 'Reviews',
        target: 'reviews',
        active: false,
    },
    {
        id: 7,
        name: 'Gallery',
        target: 'gallery',
        active: false,
    },
    {
        id: 8,
        name: 'Contact',
        target: 'contact',
        active: false,
    },
];

export const menu = [
    //dishes
    {
        id: 1,
        name: 'Stilton and Pancetta penne',
        price: 22.00,
        preview: '/images/menu/item-1.png',
        ingredients: 'Lora, Dolor, Amet, Set, Unde omnis, Nerada',
        category: 'dishes',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        id: 2,
        name: 'Crayfish & black pepper toastie',
        price: 26.00,
        preview: '/images/menu/item-3.png',
        ingredients: 'Lora, Dolor, Amet, Set, Unde omnis, Nerada',
        category: 'dishes',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    //appetizers
    {
        id: 3,
        name: 'Seasoned Bagel w/ blueberry cream cheese',
        price: 12.00,
        preview: '/images/menu/item-2.png',
        ingredients: 'Lora, Dolor, Amet, Set, Unde omnis, Nerada',
        category: 'appetizers',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    //desserts
    {
        id: 4,
        name: 'Orange & Banana muffin',
        price: 14.00,
        preview: '/images/menu/item-4.png',
        ingredients: 'Lora, Dolor, Amet, Set, Unde omnis, Nerada',
        category: 'desserts',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    //drinks
    {
        id: 5,
        name: 'Distilled Water',
        price: 0.00,
        preview: '/images/menu/water.png',
        ingredients: 'distilled water',
        category: 'drinks',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

export const filters = [
    {
        id: 1,
        name: 'All',
        category: 'all',
        active: true,
    },
    {
        id: 2,
        name: 'Dishes',
        category: 'dishes',
        active: false,
    },
    {
        id: 3,
        name: 'Appetizers',
        category: 'appetizers',
        active: false,
    },
    {
        id: 4,
        name: 'Desserts',
        category: 'desserts',
        active: false,
    },
    {
        id: 5,
        name: 'Drinks',
        category: 'drinks',
        active: false,
    },
];

export const specials = [
    {
        id: 1,
        image: '/images/specials/special-1.png',
        title: 'Coq au Vin',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: true,
    },
    {
        id: 2,
        image: '/images/specials/special-2.png',
        title: 'Surf and Turf',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: false,
    },
    {
        id: 3,
        image: '/images/specials/special-3.png',
        title: 'Salmon en Croute',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: false,
    },
    {
        id: 4,
        image: '/images/specials/special-4.png',
        title: 'Chicken Tagine',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: false,
    },
    {
        id: 5,
        image: '/images/specials/special-5.png',
        title: 'Panna Cotta',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        content: 'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: false,
    },
];

export const specialsFilters = [
    {
        id: 1,
        name: 'Coq au Vin',
        active: true,
    },
    {
        id: 2,
        name: 'Surf and Turf',
        active: false,
    },
    {
        id: 3,
        name: 'Salmon en Croute',
        active: false,
    },
    {
        id: 4,
        name: 'Chicken Tagine',
        active: false,
    },
    {
        id: 5,
        name: 'Panna Cotta',
        active: false,
    },
];

export const events = [
    {
        id: 1,
        image: '/images/events/birthday-party.png',
        title: 'Birthday Party',
        price: 189,
        content: 'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: [
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit.',
        ],
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 2,
        image: '/images/events/dinner-party.png',
        title: 'Custom Party',
        price: 249,
        content: 'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: [
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit.',
        ],
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 3,
        image: '/images/events/ceremony.png',
        title: 'Ceremony',
        price: 215,
        content: 'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: [
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit.',
        ],
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 4,
        image: '/images/events/private-chef.png',
        title: 'Private Chef',
        price: 290,
        content: 'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        details: [
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit in voluptate velit esse cillum dolore.',
            'Duis aute irure dolor inpublichenderit.',
        ],
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
];

export const reservations = [
    {
        id: 1,
        details: {
            name: 'Example Name',
            email: 'info@example.com',
            phone: '1234567890',
            date: '2025-2-06',
            time: '11:30',
            people: 3,
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
    },
];

export const reviews = [
    {
        id: 1,
        content: `One of the best restaurants I have ever dined in. Truly exceptional.`,
        avatar: '/images/reviews/grace-wilkington.png',
        client: 'Grace Wilkington',
        position: 'CEO',
    },
    {
        id: 2,
        content: `Words can't even describe how delicious the food is here at Grace's.`,
        avatar: '/images/reviews/gabriel-fischer.png',
        client: 'Gabriel Fischer',
        position: 'Official Financial Operator',
    },
    {
        id: 3,
        content: `This restaurant has so much variety. I cant even imagine any other place that is better than this.`,
        avatar: '/images/reviews/matt-brandon.png',
        client: 'Matt Brandon',
        position: 'Consultant',
    },
    {
        id: 4,
        content: `For me, Grace's restaurant is highly recommended. You can't go wrong dining here.`,
        avatar: '/images/reviews/john-larson.png',
        client: 'John Larson',
        position: 'Store Owner',
    },
    {
        id: 5,
        content: `Dining here at Grace's was a complete game changer. You have so many options that you wont regret.`,
        avatar: '/images/reviews/sarah-wilson.png',
        client: 'Sarah Wilson',
        position: 'Entrepreneur',
    },
];

export const gallery = [
    {
        id: 1,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 2,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 3,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 4,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 5,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 6,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 7,
        image: '/images/gallery/img-1.png',
    },
    {
        id: 8,
        image: '/images/gallery/img-1.png',
    },
];

export const contacts = [
    {
        id: 1,
        details: {
            name: 'Example Name',
            email: 'info@example.com',
            subject: 'Example Subject',
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
    },
];