-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2020 at 10:55 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink'),
(3, 'Merchandise'),
(4, 'test'),
(5, 'test');

-- --------------------------------------------------------

--
-- Table structure for table `detail_transaction`
--

CREATE TABLE `detail_transaction` (
  `id` int(11) NOT NULL,
  `idTransaction` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail_transaction`
--

INSERT INTO `detail_transaction` (`id`, `idTransaction`, `productId`, `stock`, `price`) VALUES
(62, 'odgcb3swk7ob98eu', 1, 2, 40000),
(63, 'odgcb3swk7ob98eu', 2, 2, 44000),
(64, 'odgcb3swk7obdhs0', 3, 3, 60000),
(65, 'odgcb3swk7obktj7', 4, 1, 18000),
(66, 'odgcb3swk7oblzk3', 1, 5, 100000),
(67, 'odgcb7q0k7t9xl31', 1, 4, 80000),
(68, 'odgcb7q0k7t9xl31', 2, 4, 88000),
(69, 'odgcb7q0k7t9xl31', 3, 4, 80000),
(70, 'odgcb7q0k7tapzs9', 1, 4, 80000),
(71, 'odgcb7q0k7tapzs9', 2, 4, 88000),
(72, 'odgcb7q0k7tapzs9', 3, 4, 80000),
(73, 'odgcbo8k89wevzq', 2, 8, 176000),
(74, 'odgcb9n4k8h4i4uk', 7, 1, 35000),
(75, 'odgcb9n4k8h4i4uk', 3, 1, 20000),
(76, 'odgcbckwk9tbvuq9', 2, 1, 22000),
(77, 'odgcbckwk9tbvuq9', 3, 1, 20000),
(78, 'odgcbckwk9tbvuq9', 7, 1, 35000),
(79, 'odgcbckwk9tbvuq9', 10, 1, 3000),
(80, '23', 4, 5, 160000),
(81, '23', 5, 5, 105000),
(82, '56e4325f', 4, 5, 160000),
(83, '56e4325f', 5, 5, 105000),
(84, 'b46', 4, 5, 160000),
(85, 'b46', 5, 5, 105000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `stock`, `create_at`, `update_at`) VALUES
(1, 'Milk Shake', NULL, 'images/odgcb8cgk6yxb7il.jpg', 2, 22000, 153, '2020-02-23 11:02:56', '2020-05-05 03:03:24'),
(2, 'Latte', 'null', 'images/odgcbbi8k6zvazxo.jpg', 2, 20000, 20, '2020-02-24 02:54:33', '2020-05-05 03:03:24'),
(3, 'Cireng', 'Mantap', 'images/odgcbai8k7bgtp1f.jpg', 1, 18000, 995, '2020-03-03 05:42:25', '2020-04-01 08:09:43'),
(4, 'Fruit Tea', 'mantap', 'images/odgcbadck7bgy1py.jpg', 2, 32000, 15, '2020-03-03 05:45:48', '2020-04-01 08:09:55'),
(5, 'Macchiato', 'Segar', 'images/odgcbadck7bgzo8u.jpg', 2, 21000, 15, '2020-03-03 05:47:04', '2020-04-01 08:10:07'),
(6, 'Fried Bananas', 'Besar dan Panjang', 'images/odgcbadck7bizdiq.jpg', 1, 35000, 998, '2020-03-03 06:42:49', '2020-05-05 03:03:24'),
(7, 'Ice Blend', 'Segar', 'images/odgcbadck7bj29k8.jpg', 2, 18000, 999, '2020-03-03 06:45:04', '2020-04-01 08:10:26'),
(8, 'Martabak', '123wer', 'images/odgcbcb8k7owaiqj.jpeg', 1, 12000, 35, '2020-03-12 15:16:25', '2020-04-01 08:10:32'),
(9, 'Stiker', 'Keren loh', 'images/odgcbba8k89h3hop.jpg', 3, 3000, 199, '2020-03-27 00:54:12', '2020-05-05 03:03:24'),
(10, 'martabak', 'enak', 'http://192.168.43.88:8000/uploads/gayain.png', 2, 35000, 45, '2020-12-10 08:58:28', '2020-12-10 08:58:28');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `idTransaction` varchar(255) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `date_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`idTransaction`, `totalPayment`, `date_added`) VALUES
('23', 265000, '2020-12-10'),
('56e4325f', 265000, '2020-12-10'),
('b46', 265000, '2020-12-10'),
('odgcb3swk7ob98eu', 84000, '2020-03-12'),
('odgcb3swk7obdhs0', 60000, '2020-03-12'),
('odgcb3swk7obktj7', 18000, '2020-03-12'),
('odgcb3swk7oblzk3', 100000, '2020-03-12'),
('odgcb7q0k7t9xl31', 248000, '2020-03-15'),
('odgcb7q0k7tapzs9', 248000, '2020-03-16'),
('odgcb9n4k8h4i4uk', 55000, '2020-04-01'),
('odgcbckwk9tbvuq9', 80000, '2020-05-05'),
('odgcbo8k89wevzq', 176000, '2020-03-27');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `status` varchar(25) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `image`, `email`, `username`, `password`, `alamat`, `salt`, `status`, `created`, `updated`) VALUES
(6, 'Andi Irsandi', NULL, 'andi@gmail.com', 'andi', '32435gdfgdfg', 'indo', '', '0', '2020-12-10 08:50:49', '2020-12-10 08:50:49'),
(7, 'rifki', 'http://192.168.43.88:8000/uploads/user.png', 'mamang666@gmail.com', 'mamang', '723cd056acc48a5da998c3445095d9e9ee8ead435b7cd355112c965dc8f947f7a4f6d7bde714b325393760705a02d848d9f7e46090bbc242b53aba96e95cdd93', 'ind', '051dd6b287001ce051', '2', '2020-12-10 08:54:32', '2020-12-10 08:54:32'),
(8, 'rifki', 'http://192.168.43.88:8000/uploads/user.png', 'mamang@gmail.com', 'mamang', '56f2009a2a45d9d17abd70c89cd1d6231dfda90577300bcf50462df902b0f4673db3ce6031389fd78af9f1cc731332b2ad0dbfaca4bfc7b06154ca2f93a404fc', 'ind', 'f28448f83296421f77', '2', '2020-12-10 08:55:15', '2020-12-10 08:55:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_transaction`
--
ALTER TABLE `detail_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_id` (`idTransaction`),
  ADD KEY `producId` (`productId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`idTransaction`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail_transaction`
--
ALTER TABLE `detail_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_transaction`
--
ALTER TABLE `detail_transaction`
  ADD CONSTRAINT `detail_transaction_ibfk_1` FOREIGN KEY (`idTransaction`) REFERENCES `transaction` (`idTransaction`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
