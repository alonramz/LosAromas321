CREATE DATABASE losaromas;

USE losaromas;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
size DECIMAL(3),
price DECIMAL(3),
image VARCHAR(255)
);

CREATE TABLE content (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
top VARCHAR(50),
middle VARCHAR(50),
base VARCHAR(50)
);

CREATE TABLE Images ( 
id INT PRIMARY KEY AUTO_INCREMENT,
-- image LONGBLOB NOT NULL, 
Data MEDIUMBLOB
);


INSERT INTO products (title, size, price) 
VALUES
('Touch of Fall', 8, 10),
('Innovative', 8, 10),
('Admirer', 8, 10),
('Romance', 10, 15),
('Daylight', 10, 15),
('Comfot', 10, 15),
('Determined', 10, 15),
('Infusion', 10, 15),
('Euphoric', 10, 15),
('Serene', 11, 15),
('Brave', 12, 20),
('Vino', 11, 15);

INSERT INTO content (id, top, middle, base)
VALUES
(1, "Top: Sweet Cream", "Middle: Pumpkin", "Base: Bakery Spice"),
(2, "Top: Orange, Mandarin, Lemon", "Middle: Grapefruit, Peach", "Base: Red Currant, Vanilla"),
(3, "Top: Sea Salt, Citrus", "Middle: Cardamom, Plum", "Base: Dark Musk, Amber"),
(4, "Top: Musk", "Middle: Water Floral", "Base: Vanilla, Sandalwood"),
(5, "Top: Fruity", "Middle: Tropical, Exotic", "Base: Driftwood"),
(6, "Top: Cirtus, Raspberry", "Middle: Blackberry", "Base: Vanilla"),
(7, "Top: Citrus", "Middle: Florals", "Base: Cedar, Musk, Sandalwood"),
(8, "Top: Lemon, Mandarin", "Middle: Ginger, Bergamot", "Base: White Tea, Jasmine"),
(9, "Top: Orange", "Middle: Tobacco Leaf, Lavender, Wood, Patchouli", "Base: Caramelized Vanilla, Musk"),
(10, "Top: Eucalyptus, Pine", "Middle: Rosemary, Floral", "Base: Cedar, Sage"),
(11, "Top: Lavender", "Middle: Rosemary, Sage, Chamomile", "Base: Ceder, Sandalwood"),
(12, "Top: Black Currant", "Middle: Clove, Red Wine, Black Cherry", "Base: Amber, Vanilla, Oak");


INSERT INTO Images 
VALUES
(1, LOAD_FILE('d:\\public/images/6.png')),
(2, LOAD_FILE('d:\\public/images/7.png')),
(3, LOAD_FILE('d:\\public/images/9.png')),
(4, LOAD_FILE('d:\\public/images/1.png')),
(5, LOAD_FILE('d:\\public/images/2.png')),
(6, LOAD_FILE('d:\\public/images/3.png')),
(7, LOAD_FILE('d:\\public/images/5.png')),
(8, LOAD_FILE('d:\\public/images/4.png')),
(9, LOAD_FILE('d:\\public/images/8.png')),
(10, LOAD_FILE('d:\\public/images/11.png')),
(11, LOAD_FILE('d:\\public/images/12.png')),
(12, LOAD_FILE('d:\\public/images/10.png')
);