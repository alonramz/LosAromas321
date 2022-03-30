CREATE DATABASE losaromas;

USE losaromas;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
scent VARCHAR(50),
top VARCHAR(50),
middle VARCHAR(50),
base VARCHAR(50)
size VARCHAR(5),
price DECIMAL(3),
imgSrc VARCHAR(100)
);


INSERT INTO products (id, title, scent, top, middle, base, size, price, imgSrc) 
VALUES
(1, 'Touch of Fall', 'Vanilla Pumpkin Marshmallow', 'Top: Sweet Cream', 'Middle: Pumpkin', 'Base: Bakery Spice', 8, 10, '/images/6.png'),
(2, 'Innovative', 'Grapefuit & Mango', "Top: Sweet Cream", "Middle: Pumpkin", "Base: Bakery Spice", 8, 10, "/images/7.png"),
(3, 'Admirer', 'Black Sea', "Top: Sea Salt, Citrus", "Middle: Cardamom, Plum", "Base: Dark Musk, Amber", 8, 10, "/images/9.png"),
(4, 'Romance', 'Amber Romance', "Top: Musk", "Middle: Water Floral", "Base: Vanilla, Sandalwood", 10, 15, "/images/1.png"),
(5, 'Daylight', 'Fruit Slices', "Top: Fruity", "Middle: Tropical, Exotic", "Base: Driftwood", 10, 15, "/images/2.png"),
(6, 'Comfort', 'Black Raspberry Vanilla', "Top: Cirtus, Raspberry", "Middle: Blackberry", "Base: Vanilla" 10, 15, "/images/3.png"),
(7, 'Determined', 'Tobacco Bay Leaf', "Top: Citrus", "Middle: Florals", "Base: Cedar, Musk, Sandalwood" 10, 15, "/images/5.png"),
(8, 'Infusion', 'White Tea', "Top: Lemon, Mandarin", "Middle: Ginger, Bergamot", "Base: White Tea, Jasmine", 10, 15, "/images/4.png"),
(9 'Euphoric', 'Tobacco Caramel', "Top: Orange", "Middle: Tobacco Leaf, Lavender, Wood, Patchouli", "Base: Caramelized Vanilla, Musk", 10, 15, "/images/8.png"),
(10, 'Serene', 'White Sage Lavender', "Top: Eucalyptus, Pine", "Middle: Rosemary, Floral", "Base: Cedar, Sage", 11, 15, "/images/11.png"),
(11, 'Brave', 'Mahogany Teakwood', "Top: Lavender", "Middle: Rosemary, Sage, Chamomile", "Base: Ceder, Sandalwood", 12, 20, "/images/12.png"),
(12, 'Vino', 'Black Cherry Merlot', "Top: Black Currant", "Middle: Clove, Red Wine, Black Cherry", "Base: Amber, Vanilla, Oak", 11, 15, "/images/10.png");
