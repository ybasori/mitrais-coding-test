-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2019 at 12:50 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mitrais_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(225) NOT NULL,
  `firstname` varchar(225) NOT NULL,
  `lastname` varchar(225) NOT NULL,
  `mobile` varchar(225) NOT NULL,
  `gender` varchar(225) DEFAULT NULL,
  `dob` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `dob`) VALUES
(1, 'ybasori@gmail.com', 'Yusuf', 'Basori', '+6287785291477', NULL, NULL),
(2, 'baru@email.com', 'user', 'baru', '+621234567890', NULL, NULL),
(3, 'yusuf@email.cm', 'Yusuf', 'Basori', '+628126789', 'male', '1994-06-01'),
(4, 'yusuf@email.com', 'Yusuf', 'Basori', '+62123456789', 'male', '1994-06-01'),
(5, 'ybasori@email.com', 'yusuf', 'basori', '+6209854321', NULL, NULL),
(6, 'yusuf@yahoo.co.id', 'yusuf', 'basori', '+626789065432', NULL, NULL),
(7, 'yusuf@toke.com', 'ysuf', 'basdsfs', '+62123456123456', NULL, NULL),
(8, 'ybasri@ymail.com', 'yusufb', 'asrori', '+624567899875', NULL, NULL),
(9, 'sdjflk@ldkfja.com', 'ysuf', 'kldsjfl', '+6209876543321', NULL, NULL),
(10, 'sdfa@dfa.com', 'ksajdfl', 'kljlkjkl', '+62456789054321', NULL, NULL),
(11, 'sadfsad@adfsd.com', 'sydfi', 'uiuiyi', '+6263582369', NULL, NULL),
(12, 'sdfsda@dlfkasd.com', 'jasdkfkj', 'lskfjasldkjf', '+62748397235', NULL, NULL),
(13, 'sdflkasdfj@lkjfalsd.com', 'yusuf', 'lkbjalkd', '+62687987304981', NULL, NULL),
(14, 'dsafds@sdflkasd.com', 'Yusuf', 'Basori', '+62345340943', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
