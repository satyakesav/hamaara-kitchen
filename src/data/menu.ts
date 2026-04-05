export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isSignature?: boolean;
  isBoneIn?: boolean;
}

export interface MenuSubSection {
  title: string;
  items: MenuItem[];
  note?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subSections?: MenuSubSection[];
  items?: MenuItem[];
  note?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "specialty",
    name: "Our Specialty Selections",
    subSections: [
      {
        title: "Idly Kothu Specials",
        items: [
          { name: "Egg Kothu Podi Idly", price: "$13.49", description: "Soft mini idlies tossed in ghee tempering, coated with house paruppu podi, topped with egg bhurji (onions & tomatoes) and finished with a kothu masala sprinkle." },
          { name: "Chicken Kothu Podi Idly", price: "$14.49", description: "Soft mini idlies tossed in ghee tempering, coated with house paruppu podi, topped with chicken & egg bhurji (onions & tomatoes) and finished with a kothu masala sprinkle." },
          { name: "Goat Kothu Podi Idly", price: "$15.49", description: "Soft mini idlies tossed in ghee tempering, coated with house paruppu podi, topped with egg bhurji & shredded mutton (onions & tomatoes), finished with a punchy kothu masala sprinkle." },
        ],
      },
      {
        title: "Signature Paal Parotta",
        items: [
          { name: "Egg Burji Paal Parotta", price: "$15.99", description: "Flaky parotta soaked in creamy coconut milk, topped with a sizzling egg and stuffed with egg burji salna, finished with cashews & dry grapes, banana-leaf wrapped and tawa-sautéed for a smoky finish.", isSignature: true },
          { name: "Chicken Ghee Roast Paal Parotta", price: "$16.99", description: "Flaky parotta soaked in creamy coconut milk, stuffed with chicken ghee roast, finished with cashews & dry grapes, banana-leaf wrapped and tawa-sautéed for a smoky finish.", isSignature: true },
          { name: "Goat Chukka Paal Parotta", price: "$17.99", description: "Flaky parotta soaked in creamy coconut milk, stuffed with spicy goat ghee roast, finished with cashews & dry grapes, banana-leaf wrapped and tawa-sautéed for a smoky finish.", isSignature: true },
        ],
      },
      {
        title: "Kizhi / Potallam Parotta Specials",
        items: [
          { name: "Kizhi Chicken Parotta", price: "$16.99", description: "Flaky parotta stuffed with spicy chicken masala, banana-leaf wrapped and tawa-sautéed for a rich, smoky finish." },
          { name: "Kizhi Goat Parotta", price: "$17.99", description: "Banana-leaf wrapped parotta stuffed with spicy goat masala, tawa-roasted for a rich, smoky finish." },
        ],
      },
      {
        title: "Dosa Keema Specials",
        items: [
          { name: "Chicken Keema Kothu Kari Dosa", price: "$16.99", description: "Spicy dosa layered with house paste, filled with shredded chicken kothu masala sautéed with onions, tomatoes & green chilies, finished with signature topping masala." },
          { name: "Goat Keema Kothu Kari Dosa", price: "$17.99", description: "Spicy dosa layered with house paste, filled with mutton keema (kothu masala) sautéed with onions, tomatoes & green chilies, finished with signature topping masala." },
        ],
      },
      {
        title: "Signature Combo Specials",
        items: [
          { name: "Veg Biryani + Soup + Parotta", price: "$19.99", description: "1 Parotta + Jackfruit Biryani + Curry Leaf Gobi + Veg Kurma + Dessert" },
          { name: "Chicken Biryani 65 + Parotta", price: "$21.99", description: "1 Parotta + Ambur Chicken Biryani + Chicken 65 + Chicken Curry + Dessert" },
          { name: "Chicken Biryani Ghee Roast + Parotta", price: "$22.49", description: "1 Parotta + Ambur Chicken Biryani + Chicken Ghee Roast + Chicken Curry + Dessert" },
          { name: "Goat Biryani 65 + Parotta", price: "$23.49", description: "1 Parotta + Ambur Goat Biryani + Chicken 65 + Goat Curry + Dessert" },
          { name: "Goat Biryani Ghee Roast + Parotta", price: "$23.99", description: "1 Parotta + Ambur Goat Biryani + Goat Ghee Roast + Goat Curry + Dessert" },
        ],
      },
    ],
  },
  {
    id: "tiffin",
    name: "Tiffin Treats",
    note: "Top up: Chicken/Fish Curry +$1.99",
    subSections: [
      {
        title: "Idly & Vada",
        items: [
          { name: "Idly (2pc)", price: "$7.49" },
          { name: "Ghee Podi Idly (2pc)", price: "$8.49" },
          { name: "Curry Leaf Podi Idly (2pc)", price: "$8.49" },
          { name: "Sambar Idly — Dipped (2pc)", price: "$7.99" },
          { name: "Mini Idli (12pc)", price: "$7.99" },
          { name: "Ghee Podi Mini Idly (12pc)", price: "$8.49" },
          { name: "Curry Leaf Ghee Podi Idly (12pc)", price: "$8.99" },
          { name: "Mini Idli — Dipped (12pc)", price: "$8.99" },
          { name: "Thatte Idli (2pc)", price: "$8.99" },
          { name: "Thatte Ghee Podi Idli (2pc)", price: "$8.99" },
          { name: "Thatte Curry Leaf Podi Idli (2pc)", price: "$8.99" },
          { name: "Double Podi Thatte Idli (2pc)", price: "$8.99" },
          { name: "Medu Vada (3pc)", price: "$9.49" },
          { name: "Sambar Vada — Dipped (2pc)", price: "$8.49" },
          { name: "Ghee Pongal", price: "$8.49" },
          { name: "Upma", price: "$7.99" },
          { name: "Samosa (2pc)", price: "$5.99" },
          { name: "Idiyappam (3pc) with Coconut Milk", price: "$10.99" },
        ],
      },
      {
        title: "Combo Platter",
        items: [
          { name: "Idly (2) + Vada (2) Combo", price: "$10.99" },
          { name: "Idly (2) + Pongal Combo", price: "$10.99" },
          { name: "Vada (2) + Pongal Combo", price: "$10.99" },
          { name: "Idly (2) + Vada (2) + Pongal", price: "$12.49" },
          { name: "Dosa + Vada (2) + Pongal", price: "$12.99" },
          { name: "Non Veg Mini Tiffin", price: "$13.49", description: "Idly (2), Masala Dosa (1), Egg Omlette" },
          { name: "Mini Tiffin", price: "$14.49", description: "Mini Sambar Idly (5pc), Masala Dosa (1), Pongal, Vada (1pc) & Sweet" },
        ],
      },
      {
        title: "Snacks",
        items: [
          { name: "Poori with Aloo Masala (3pc)", price: "$11.49" },
          { name: "Punnugulu", price: "$7.99" },
          { name: "Mix Veg Pokora", price: "$8.99" },
          { name: "Onion Pokora", price: "$8.99" },
          { name: "Potato Bajji", price: "$7.99" },
          { name: "Mirchi Bajji", price: "$8.49" },
          { name: "Egg Bonda", price: "$8.99" },
        ],
      },
    ],
  },
  {
    id: "dosa",
    name: "Dosa Junction",
    note: "Top up: Chicken/Fish Curry +$1.99 | Masala, Podi additional +$1.00",
    items: [
      { name: "Plain Dosa", price: "$9.99" },
      { name: "Ghee Dosa", price: "$11.49" },
      { name: "Cheese Dosa", price: "$12.49" },
      { name: "Curry Leaf Dosa", price: "$12.49", isSignature: true },
      { name: "Green Chili Dosa", price: "$12.49", isSignature: true },
      { name: "Mysore Dosa", price: "$12.49" },
      { name: "Onion Dosa", price: "$11.99" },
      { name: "Paneer Dosa", price: "$12.99" },
      { name: "Andhra Kara Dosa", price: "$12.99" },
      { name: "Ragi Dosa", price: "$12.99" },
      { name: "Set Dosa", price: "$12.99" },
      { name: "Benne Dosa", price: "$11.99" },
      { name: "Chocolate Dosa", price: "$9.99" },
      { name: "Plain Uthappam", price: "$13.49" },
      { name: "Onion Uthappam", price: "$13.99" },
      { name: "Onion Chilli Uthappam", price: "$14.49" },
      { name: "Onion Tomato Uthappam", price: "$14.49" },
      { name: "Mix Veg Uthappam", price: "$14.99" },
      { name: "Egg Dosa", price: "$13.49" },
      { name: "Balaji Mess Special Dosa", price: "$13.99", isSignature: true, description: "Shredded paneer, mix veggies, onions, Andhra Kara & Mysore paste" },
    ],
  },
  {
    id: "bread",
    name: "Bread Junction",
    items: [
      { name: "Chapati / Roti (2pc)", price: "$2.49" },
      { name: "Parotta (1pc)", price: "$3.49" },
      { name: "Parotta + Veg Salan (2pc)", price: "$11.99" },
      { name: "Parotta + Chicken Salna (2pc)", price: "$13.49" },
      { name: "Veg Kothu Parotta", price: "$13.49" },
      { name: "Paneer Kothu Parotta", price: "$14.49" },
      { name: "Egg Kothu Parotta", price: "$14.49" },
      { name: "Chicken Kothu Parotta", price: "$14.99" },
      { name: "Goat Kothu Parotta", price: "$15.49" },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    subSections: [
      {
        title: "Gobi (Cauliflower)",
        items: [
          { name: "Gobi 65", price: "$12.99" },
          { name: "Curry Leaf Gobi Fry", price: "$13.49", isSignature: true },
          { name: "Green Chilli Gobi Fry", price: "$13.49", isSignature: true },
          { name: "Gobi Ghee Roast", price: "$13.99" },
          { name: "Gobi Manjurian", price: "$12.99" },
          { name: "Gobi Dynamite", price: "$13.49" },
        ],
      },
      {
        title: "Paneer",
        items: [
          { name: "Paneer 65", price: "$12.99" },
          { name: "Curry Leaf Paneer Fry", price: "$13.99", isSignature: true },
          { name: "Green Chilli Paneer Fry", price: "$13.99", isSignature: true },
          { name: "Paneer Ghee Roast", price: "$13.99" },
          { name: "Paneer Manjurian", price: "$13.49" },
          { name: "Apollo Paneer", price: "$13.99" },
        ],
      },
      {
        title: "Baby Corn",
        items: [
          { name: "Baby Corn 65", price: "$12.49" },
          { name: "Curry Leaf Baby Corn", price: "$12.99", isSignature: true },
          { name: "Green Chili Baby Corn", price: "$12.99", isSignature: true },
          { name: "Baby Corn Manjurian", price: "$12.49" },
        ],
      },
      {
        title: "Chicken",
        items: [
          { name: "Chicken 65", price: "$13.99" },
          { name: "Curry Leaf Chicken", price: "$14.49", isSignature: true, isBoneIn: true },
          { name: "Green Chili Chicken", price: "$14.49", isSignature: true, isBoneIn: true },
          { name: "Gongura Chicken", price: "$13.99", isBoneIn: true },
          { name: "Chili Chicken", price: "$13.99", isBoneIn: true },
          { name: "Chicken Ghee Roast", price: "$14.99", isBoneIn: true },
          { name: "Chicken Chukka", price: "$14.99", isBoneIn: true },
          { name: "Dynamite Chicken", price: "$14.49" },
        ],
      },
      {
        title: "Goat",
        items: [
          { name: "Goat Ghee Roast", price: "$15.99", isSignature: true },
          { name: "Goat Chukka", price: "$15.99", isSignature: true },
          { name: "Gongura Goat", price: "$15.49" },
        ],
      },
      {
        title: "Seafood",
        items: [
          { name: "Fish 65", price: "$14.49" },
          { name: "Curry Leaf Fish", price: "$14.99", isSignature: true },
          { name: "Green Chili Fish", price: "$14.99", isSignature: true },
          { name: "Apollo Fish", price: "$14.99", isSignature: true },
          { name: "Tawa Fish", price: "$15.49", isSignature: true },
          { name: "Meen Policha", price: "$15.99", isSignature: true },
          { name: "Prawn 65", price: "$15.49" },
          { name: "Prawn Ghee Roast", price: "$15.99" },
          { name: "Green Chili Prawn", price: "$15.99", isSignature: true },
          { name: "Curry Leaf Prawn", price: "$15.99", isSignature: true },
        ],
      },
      {
        title: "Egg",
        items: [
          { name: "Egg Kalaki", price: "$6.49" },
          { name: "Egg Podimas", price: "$6.49" },
          { name: "Egg Varuval", price: "$6.99" },
          { name: "Egg Full Omlette", price: "$6.49" },
          { name: "Half Boiled Egg (Sunny Side Up)", price: "$4.49" },
          { name: "Boiled Egg (2pc)", price: "$3.99" },
        ],
      },
    ],
  },
  {
    id: "soup",
    name: "Soups",
    items: [
      { name: "Rasam Soup", price: "$4.99" },
      { name: "Veg Pepper Soup", price: "$5.99" },
      { name: "Chicken Pepper Soup", price: "$6.49" },
      { name: "Goat Pepper Soup", price: "$6.99" },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    items: [
      { name: "Ghee Jeera Rice", price: "$10.99" },
      { name: "Garlic Fried Rice", price: "$11.49" },
      { name: "Veg Fried Rice", price: "$11.99" },
      { name: "Paneer Fried Rice", price: "$12.49" },
      { name: "Egg Fried Rice", price: "$12.99" },
      { name: "Chicken Fried Rice", price: "$13.49" },
      { name: "Prawns Fried Rice", price: "$14.49" },
      { name: "Mixed Special Fried Rice", price: "$14.99" },
    ],
  },
  {
    id: "curries",
    name: "Curries",
    subSections: [
      {
        title: "Vegetarian Curries",
        items: [
          { name: "Paneer Butter Masala", price: "$14.49" },
          { name: "Kadai Paneer", price: "$14.99" },
          { name: "Saag Paneer", price: "$14.49" },
          { name: "Paneer Kaju Curry", price: "$14.99" },
          { name: "Mix Veg Kaju Curry", price: "$14.49" },
          { name: "Mix Veg Chettinadu Curry", price: "$13.49" },
          { name: "Kadai Vegetable", price: "$13.49" },
          { name: "Channa Masala", price: "$13.49" },
          { name: "Gunti Venkayya (Eggplant)", price: "$12.99" },
        ],
      },
      {
        title: "Non-Vegetarian Curries",
        items: [
          { name: "Chicken Butter Masala", price: "$14.49" },
          { name: "Chicken Chettinadu", price: "$14.49" },
          { name: "Gongura Chicken", price: "$14.49" },
          { name: "Kadai Chicken", price: "$14.49" },
          { name: "Saag Chicken Curry", price: "$14.49" },
          { name: "Goat Chettinadu", price: "$15.49" },
          { name: "Gongura Goat", price: "$15.99" },
          { name: "Saag Goat Curry", price: "$15.49" },
          { name: "Mango Fish Pulusu", price: "$14.49" },
          { name: "Fish Chettinadu", price: "$14.99" },
          { name: "Egg Curry", price: "$12.99" },
          { name: "Prawn Chettinadu", price: "$15.99" },
          { name: "Gongura Prawn", price: "$15.99" },
        ],
      },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    subSections: [
      {
        title: "Vegetarian Biryani",
        items: [
          { name: "Veg Dum Biryani", price: "$13.99" },
          { name: "Ambur Jackfruit Biryani", price: "$14.99", isSignature: true },
          { name: "Paneer Dum Biryani", price: "$14.49" },
          { name: "Paneer Ghee Roast Biryani", price: "$14.99", isSignature: true },
          { name: "Gongura Paneer Biryani", price: "$14.99" },
          { name: "Paneer 65 Biryani", price: "$14.49" },
          { name: "Fried Paneer Biryani", price: "$14.99" },
          { name: "Gobi 65 Biryani", price: "$14.49" },
          { name: "Gobi Ghee Roast Biryani", price: "$14.99", isSignature: true },
        ],
      },
      {
        title: "Non-Vegetarian Biryani",
        items: [
          { name: "BM Fried Chicken Boneless Biryani", price: "$14.99", isSignature: true },
          { name: "Chicken Dum Biryani", price: "$14.49" },
          { name: "Ambur Chicken Biryani", price: "$14.99", isSignature: true },
          { name: "Chicken Boneless Ghee Roast Biryani", price: "$14.99" },
          { name: "Chicken Boneless Chukka Biryani", price: "$14.49" },
          { name: "Pachi Mirchi Boneless Chicken Biryani", price: "$14.49" },
          { name: "Chicken 65 Boneless Biryani", price: "$14.49", isSignature: true },
          { name: "Gongura Boneless Chicken Biryani", price: "$14.49" },
          { name: "Vijayawada Boneless Chicken Biryani", price: "$14.99", isSignature: true },
          { name: "Goat Dum Biryani", price: "$15.99" },
          { name: "Ambur Goat Biryani", price: "$15.99", isSignature: true },
          { name: "Goat Ghee Roast Biryani", price: "$16.49" },
          { name: "Goat Chukka Biryani", price: "$16.49" },
          { name: "Gongura Goat Biryani", price: "$16.49" },
          { name: "Prawn Dum Biryani", price: "$16.49", isSignature: true },
          { name: "Balaji Mess Special Fish Dum Biryani", price: "$15.99", isSignature: true },
          { name: "Egg Dum Biryani", price: "$13.99" },
        ],
      },
    ],
  },
  {
    id: "thali",
    name: "Thali & Meals",
    items: [
      { name: "Vegetarian Meals (Weekday)", price: "$16.99", description: "Rice, Chapati, Appetizer, Biryani, Salan, Sambar, Rasam, Poriyal, Kootu, Pappad, Curd & Dessert" },
      { name: "Non Vegetarian Meals (Weekday)", price: "$16.99", description: "Rice, Chapati, Appetizer, Biryani, Salan, Rasam, Poriyal, Kootu, Choice of Fish/Chicken/Goat Curry, Curd & Dessert" },
      { name: "Unlimited Veg Meals (Weekend)", price: "$18.99", description: "Soup, Rice, Chapati/Parotta, Biryani, Salan, Appetizer, Sambar, Rasam, Poriyal, Kootu, Vatha Kozhumbu, Pappad, Curd & Dessert" },
      { name: "Unlimited Non Veg Meals (Weekend)", price: "$20.99", description: "Soup, Rice, Chapati/Parotta, Biryani, Salan, Appetizer, Rasam, Poriyal, Kootu, Chicken Kozhumbu, Goat/Fish Kozhumbu, Pappad, Curd & Dessert" },
      { name: "Seasoned Curd Rice", price: "$6.99" },
      { name: "Side of Rice", price: "$2.99" },
      { name: "Basmati Rice", price: "$2.99" },
    ],
  },
  {
    id: "sides",
    name: "Sides & Take Out",
    subSections: [
      {
        title: "Sides",
        items: [
          { name: "Sambar – Lunch", price: "$6.99" },
          { name: "Rasam", price: "$5.99" },
          { name: "Poriyal", price: "$6.99" },
          { name: "Kootu", price: "$6.99" },
          { name: "Vatha Kozhumbu", price: "$9.99" },
          { name: "Sambar – Tiffin", price: "$5.99" },
          { name: "Coconut Chutney", price: "$4.99" },
          { name: "Tomato Chutney", price: "$4.99" },
          { name: "Veg Kurma", price: "$6.99" },
          { name: "Veg Salna", price: "$6.99" },
        ],
      },
      {
        title: "Hot Lunch (comes with rice)",
        items: [
          { name: "Veg Hot Lunch", price: "$23.99", description: "Sambar 16oz, Rasam 16oz, Poriyal 12oz, Kootu 12oz" },
          { name: "Non Veg Hot Lunch", price: "$24.99", description: "Rasam 16oz, Egg Curry 12oz, Chicken/Fish Curry 12oz" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Beverages",
    subSections: [
      {
        title: "Desserts",
        items: [
          { name: "Rava Kesari", price: "$5.99" },
          { name: "Gulab Jamun", price: "$5.99" },
          { name: "Sweet of the Day", price: "$5.99" },
        ],
      },
      {
        title: "Beverages",
        items: [
          { name: "Degree Filter Coffee", price: "$3.99" },
          { name: "Masala Tea / Chai", price: "$3.99" },
          { name: "Mango Lassi", price: "$4.49" },
          { name: "Rose Milk", price: "$3.99" },
          { name: "Masala Butter Milk", price: "$3.49" },
          { name: "Soda (24oz)", price: "$2.49" },
        ],
      },
      {
        title: "Fresh Batter",
        items: [
          { name: "Idly Batter", price: "$5.99" },
          { name: "Dosa Batter", price: "$5.99" },
          { name: "Ragi Batter", price: "$5.99" },
        ],
      },
    ],
  },
];
