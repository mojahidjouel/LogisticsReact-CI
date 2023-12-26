-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 07:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ng_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Gucci'),
(2, 'Louis Vuitton'),
(3, 'Versace'),
(4, 'Prada'),
(5, 'Valentino');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Women\'s Clothing'),
(2, 'Men\'s Clothing'),
(3, 'Accessories'),
(4, 'Footwear');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expert`
--

CREATE TABLE `expert` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expert`
--

INSERT INTO `expert` (`id`, `name`, `image`, `description`) VALUES
(1, 'mojahid', 'team-1.jpg', 'kkkk'),
(4, 'dell', '65262c48da0f5144.jpeg', 'aaaabbb');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `name`, `image`, `description`) VALUES
(1, 'Worldwide Service', 'fa fa-globe text-primary fa-3x flex-shrink-0', 'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet'),
(2, 'On Time Delivery', 'fa fa-shipping-fast text-primary fa-3x flex-shrink-0', 'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet'),
(4, '24/7 Telephone Support', 'fa fa-headphones text-primary fa-3x flex-shrink-0', 'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `image`) VALUES
(1, 1, 'img/product/product1.jpg'),
(2, 2, 'img/product/product2.jpg'),
(3, 3, 'img/product/product3.jpg'),
(4, 4, 'img/product/product4.jpg'),
(5, 5, 'img/product/product-5.jpg'),
(6, 6, 'img\\product\\product-6.jpg'),
(7, 7, 'img\\product\\product-7.jpg'),
(8, 8, 'img\\product\\product-8.jpg'),
(9, 1, 'img\\product\\product01.jpg'),
(10, 1, 'img\\product\\product001.jpg'),
(11, 1, 'img\\product\\product0001.jpg'),
(12, 3, 'img\\product\\product03.jpg'),
(13, 3, 'img\\product\\product003.jpg'),
(14, 3, 'img\\product\\product0003.jpg'),
(15, 2, 'img\\product\\product02.jpg'),
(16, 2, 'img\\product\\product002.jpg'),
(17, 2, 'img\\product\\product0002.jpg'),
(18, 4, 'img\\product\\product04.jpg'),
(19, 4, 'img\\product\\product004.jpg'),
(20, 4, 'img\\product\\product0004.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `id` int(11) NOT NULL,
  `to_city` int(11) NOT NULL,
  `from_city` int(11) NOT NULL,
  `base_price` int(11) NOT NULL,
  `unit_size` varchar(255) DEFAULT NULL,
  `unite_price` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`id`, `to_city`, `from_city`, `base_price`, `unit_size`, `unite_price`, `created_at`, `updated_at`) VALUES
(1, 0, 0, 0, NULL, 0, NULL, NULL),
(2, 0, 0, 0, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `brand`) VALUES
(1, 'HP', '4500', '12', 'Samsung');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `specification` text DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `short_description`, `long_description`, `price`, `discount`, `specification`, `category_id`, `brand_id`, `image`) VALUES
(1, 'Long Sleeve T-Shirt', 'A T-shirt with long sleeves, suitable for cooler weather or as a layering piece.', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 1, 1, 'img/product/product1.jpg'),
(2, 'Urban Chic Shirt', 'City-inspired fashion for the modern man and woman.', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 2, 2, 'img/product/product2.jpg'),
(3, 'Short Sleeved Midi Dress', 'A dress with the essence of a power blazer for confident women.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 1, 3, 'img/product/product3.jpg'),
(4, 'Luxe Linen Shirt', 'Light and breathable linen shirts for any occasion.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 2, 4, 'img/product/product4.jpg'),
(5, 'Vintage Vibes T-Shirt', 'Nostalgic tees that evoke the spirit of bygone eras.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 2, 5, 'img/product/product-5.jpg'),
(6, 'Tegan Printed Dress', 'Phasellus faucibus arcu sit amet velit vehicula', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 1, 1, 'img/product/product-6.jpg'),
(7, 'Silk Satin Tank Top', 'Praesent egestas blandit bibendum non tempor mauris faucibus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 1, 2, 'img/product/product-7.jpg'),
(8, 'Dapper Denim Shirt', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 2, 3, 'img/product/product-8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `password`, `token`, `image`) VALUES
(1, 'mojahid', 'mojahidjouel@yahoo.com', '123', '169631022865964b0803d8f6b8c4241979629cd8a4665', 'img/user/651ba3d40c868597.jpeg'),
(2, 'MUHAMMAD MOJAHEDUL ISLAM', 'mojahidjouel@yahoo.com', '123', '169631414388064b0803d8f6b8c4241979629cd8a4665', 'img/user/651bb31fc7580664.jpeg'),
(3, 'mojahid', 'mojahidjouel@yahoo.com', '123', '169727666640964b0803d8f6b8c4241979629cd8a4665', 'img/user/652a62fa50641660.jpeg'),
(4, 'mojahid', 'mojahidjouel@yahoo.com', '123', '169727681249964b0803d8f6b8c4241979629cd8a4665', 'img/user/652a638c7d78f541.jpeg'),
(5, 'mojahid', 'mojahidjouel@yahoo.com', '123', '169727693377664b0803d8f6b8c4241979629cd8a4665', 'img/user/652a6405441d7204.jpeg'),
(6, 'mojahid', 'mojahidjouel@yahoo.com', '123', '169751199387364b0803d8f6b8c4241979629cd8a4665', 'img/user/652dfa3984482945.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `image`, `description`) VALUES
(2, 'Ocean Freight', '651babae93afb999.jpeg', 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lore'),
(3, 'Road Freight', '651babcb3f70b902.jpeg', 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.'),
(4, 'Train Freight', '651babe2d7f37976.jpeg', 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.'),
(5, 'Customs Clearance', '651babfaaf1f1780.jpeg', 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `subj` varchar(255) DEFAULT NULL,
  `mes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `subj`, `mes`, `created_at`, `updated_at`) VALUES
(1, 'kaiser', 'kaiser@gmail.com', 'Bangla', 'Love You', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expert`
--
ALTER TABLE `expert`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expert`
--
ALTER TABLE `expert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
