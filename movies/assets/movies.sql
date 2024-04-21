-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 22 Mai 2018 à 15:21
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `movies`
--

-- --------------------------------------------------------

--
-- Structure de la table `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `actors`
--

INSERT INTO `actors` (`id`, `firstname`, `lastname`) VALUES
(1, 'Jake', 'Gyllenhaal'),
(2, 'Holmes', 'Osborne'),
(3, 'Maggie', 'Gyllenhaal'),
(4, 'Ken\'ichi', 'Matsuyama'),
(5, 'Tatsuya', 'Fujiwara'),
(6, 'Erika', 'Toda'),
(7, 'Kevin', 'Costner'),
(8, 'Tina', 'Majorino'),
(9, 'Jeanne', 'Tripplehorn'),
(10, 'Dennis', 'Hopper'),
(11, 'Jack', 'Black'),
(12, 'Emile', 'Hirsch'),
(13, 'Marcia ', 'Gay Harden'),
(14, 'William', 'Hurt');

-- --------------------------------------------------------

--
-- Structure de la table `actors_movies`
--

CREATE TABLE `actors_movies` (
  `actors_id` int(11) NOT NULL,
  `movies_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `actors_movies`
--

INSERT INTO `actors_movies` (`actors_id`, `movies_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 4),
(13, 4),
(14, 4);

-- --------------------------------------------------------

--
-- Structure de la table `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `directors`
--

INSERT INTO `directors` (`id`, `firstname`, `lastname`) VALUES
(1, 'Richard', 'Kelly'),
(2, 'Shūsuke ', 'Kaneko'),
(3, 'Kevin ', 'Reynolds'),
(4, 'Sean', 'Penn');

-- --------------------------------------------------------

--
-- Structure de la table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Thriller'),
(2, 'Science fiction'),
(3, 'Drame'),
(4, 'Fantasy'),
(5, 'Action');

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext,
  `year` year(4) DEFAULT NULL,
  `poster` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `year`, `poster`) VALUES
(1, 'Donnie Darko', 'Donnie Darko est un adolescent de seize ans pas comme les autres. Intelligent et doté d\'une grande imagination, il a pour ami Frank, une créature que lui seul peut voir et entendre.Lorsque Donnie survit par miracle à un accident, Frank lui propose un étrange marché. La fin du monde approche et ce dernier doit accomplir sa destinée. Des événements bizarres surviennent dans la petite ville tranquille, mais Donnie sait que derrière tout cela se cachent d\'inavouables secrets. Frank l\'aidera à les mettre à jour, semant ainsi le trouble au sein de la communauté. ', 2001, 'assets/posters/donnie_darko.jpg'),
(2, 'Death Note', 'Le cahier de la mort. Il suffit d\'y apposer le nom d\'une personne que l\'on souhaite châtier et de garder en tête son visage pour que cette dernière meure. Quand ce cahier tombe entre les mains de Light, brillant lycéen au tempérament assez taciturne, il décide de l\'exploiter pour appliquer sa propre justice et devenir l\'égal de la mort. Ainsi Light note soigneusement les noms des meurtriers les plus recherchés par la police et restés impunis jusqu\'alors.', 2006, 'assets/posters/death_note.jpg'),
(3, 'Waterworld', 'Le monde s\'est transformé en un immense océan. Dans des embarcations délabrées et dans des villes flottantes improvisées appelées, les atolls, on lutte dans l\'espoir de trouver un jour le Dryland mythique. Deacon, le chef de la bande des pirates, attaque l\'atoll où habitent la jeune Enola et Helen se mère adoptive. Mais Mariner, un vagabond, découvre que la jeune Enola possède un trésor qui peut le monde.', 1995, 'assets/posters/waterworld.jpg'),
(4, 'Into The Wild', 'Tout juste diplômé, Christopher McCandless, 22 ans, est promis à un brillant avenir. Pourtant, tournant le dos à l\'existence confortable et sans surprise qui l\'attend, le jeune homme décide de prendre la route en laissant tout derrière lui. Des champs de blé du Dakota aux flots tumultueux du Colorado, en passant par les communautés hippies de Californie, Christopher va rencontrer des personnages hauts en couleur. Chacun, à sa manière, va façonner sa vision de la vie et des autres.', 2008, 'assets/posters/into_the_wild.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `movies_directors`
--

CREATE TABLE `movies_directors` (
  `movies_id` int(11) NOT NULL,
  `directors_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `movies_directors`
--

INSERT INTO `movies_directors` (`movies_id`, `directors_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `movies_genres`
--

CREATE TABLE `movies_genres` (
  `movies_id` int(11) NOT NULL,
  `genres_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `movies_genres`
--

INSERT INTO `movies_genres` (`movies_id`, `genres_id`) VALUES
(1, 1),
(3, 1),
(1, 2),
(3, 2),
(2, 3),
(4, 3),
(2, 4),
(4, 5);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `actors_movies`
--
ALTER TABLE `actors_movies`
  ADD PRIMARY KEY (`actors_id`,`movies_id`),
  ADD KEY `fk_actors_has_movies_movies1_idx` (`movies_id`),
  ADD KEY `fk_actors_has_movies_actors1_idx` (`actors_id`);

--
-- Index pour la table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movies_directors`
--
ALTER TABLE `movies_directors`
  ADD PRIMARY KEY (`movies_id`,`directors_id`),
  ADD KEY `fk_movies_has_directors_directors1_idx` (`directors_id`),
  ADD KEY `fk_movies_has_directors_movies_idx` (`movies_id`);

--
-- Index pour la table `movies_genres`
--
ALTER TABLE `movies_genres`
  ADD PRIMARY KEY (`movies_id`,`genres_id`),
  ADD KEY `fk_movies_has_genres_genres1_idx` (`genres_id`),
  ADD KEY `fk_movies_has_genres_movies1_idx` (`movies_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `actors_movies`
--
ALTER TABLE `actors_movies`
  ADD CONSTRAINT `fk_actors_has_movies_actors1` FOREIGN KEY (`actors_id`) REFERENCES `actors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actors_has_movies_movies1` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `movies_directors`
--
ALTER TABLE `movies_directors`
  ADD CONSTRAINT `fk_movies_has_directors_directors1` FOREIGN KEY (`directors_id`) REFERENCES `directors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_movies_has_directors_movies` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `movies_genres`
--
ALTER TABLE `movies_genres`
  ADD CONSTRAINT `fk_movies_has_genres_genres1` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_movies_has_genres_movies1` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
