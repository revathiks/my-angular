-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2018 at 02:03 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varbinary(100) DEFAULT NULL,
  `country` int(50) NOT NULL,
  `state` int(50) NOT NULL,
  `city` int(50) NOT NULL,
  `status` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `country`, `state`, `city`, `status`) VALUES
(16, 'dsfsd', 'hfgh', 0x73646673646640672e636f6d, 0, 0, 0, 1),
(17, 'revathi', 'reva123', 0x7265766140676d61696c2e636f6d, 0, 0, 0, 1),
(18, 'gsdg', 'ghgfhf', 0x647367736440672e636f6d, 1, 1, 2, 1),
(19, 'gsdg', 'ghgfhf', 0x64736773736440672e636f6d, 1, 1, 2, 1),
(20, 'maya', 'sdasdas', 0x6d61796140676d61696c2e636f6d, 1, 1, 4, 1),
(21, 'null', 'null', 0x6e756c6c, 0, 0, 0, 1),
(22, 'csd', 'fdfdg', 0x73646673646673646640672e636f6d, 2, 3, 10, 1),
(23, 'dsg', 'fdgg', 0x73646773646740672e636f6d, 1, 2, 7, 1),
(24, 'fdg', 'fdg', 0x666467666440672e636f6d, 1, 1, 2, 1),
(25, 'ghj', 'ghj', 0x68676a6768, 2, 4, 13, 1),
(26, 'ret', 'fdgdfg', 0x7479727440672e636f6d, 2, 3, 10, 1),
(27, 'gh', 'fghfg', 0x666768666768, 2, 3, 10, 1),
(28, 'dasd', 'ghfh', 0x736164736164736140672e636f6d, 3, 5, 14, 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
