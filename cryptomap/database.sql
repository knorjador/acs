-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 06, 2018 at 02:02 PM
-- Server version: 10.1.26-MariaDB-0+deb9u1
-- PHP Version: 7.2.6-1+0~20180611145758.22+stretch~1.gbpe20e8b

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cryptomap`
--

-- --------------------------------------------------------

--
-- Table structure for table `atms`
--

CREATE TABLE `atms` (
  `id` int(11) NOT NULL,
  `atm_name` varchar(255) NOT NULL,
  `atm_longitude` varchar(50) NOT NULL,
  `atm_lattitude` varchar(50) NOT NULL,
  `atm_adress` varchar(255) NOT NULL,
  `atm_currency` varchar(50) NOT NULL DEFAULT '',
  `verified` varchar(4) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `atms`
--

INSERT INTO `atms` (`id`, `atm_name`, `atm_longitude`, `atm_lattitude`, `atm_adress`, `atm_currency`, `verified`) VALUES
(1, 'UNPI 34 Chambre des Propriétaires et Copropriétaires', '3.874618', '43.607483', '23 Boulevard du Jeu de Paume, 34000 Montpellier, France', 'BTC-EUR', 'yes'),
(2, 'PcDuo', '2.272410', '48.913338', '5 Rue du Général Leclerc, 92270 Bois-Colombes, France', 'BTC-EUR', 'yes'),
(3, 'Coinhouse', '2.350023', '48.867668', '35 rue du Caire, 75002 Paris, France', 'BTC-EUR', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `venues`
--

CREATE TABLE `venues` (
  `id` int(10) NOT NULL,
  `venue_name` varchar(255) NOT NULL,
  `venue_longitude` varchar(50) NOT NULL,
  `venue_lattitude` varchar(50) NOT NULL,
  `venue_category` varchar(50) NOT NULL,
  `venue_adress` varchar(255) NOT NULL,
  `verified` varchar(100) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `venues`
--

INSERT INTO `venues` (`id`, `venue_name`, `venue_longitude`, `venue_lattitude`, `venue_category`, `venue_adress`, `verified`) VALUES
(3965, 'Le Gros Bar', '0.691889', '47.3961491', 'nightlife', '108 Rue Colbert, 37000 Tours, France', 'yes'),
(3966, 'John Landot', '2.2443054', '48.8431028', 'shopping', '76 Rue du Château, 92100 Boulogne-Billancourt, France', 'no'),
(3968, 'Restaurant Le 43', '2.3500641', '48.8281212', 'food', '43 Rue des cinq Diamants, 75013 Paris, France', ''),
(3969, 'Gite de la Fontaine', '2.7152861', '44.3352159', 'lodging', 'Unnamed Road, 12290 Le Vibal, France', ''),
(3970, 'Guest house', '5.5569534', '43.7262734', 'lodging', '1190 D135, 84240 La Tour-d\'Aigues, France', ''),
(3971, 'Mark Hachem', '2.3661152', '48.8562186', 'default', '28 Place des Vosges, 75003 Paris, France', 'yes'),
(3972, 'Experience Paris', '2.3079261', '48.853361', 'default', '13 Avenue Duquesne, 75007 Paris, France', ''),
(3973, 'Atelier de la Guitare', '1.4408606', '43.6019697', 'default', '45 Rue Peyrolières, 31000 Toulouse, France', ''),
(3974, 'FlashInformatik', '3.658297', '43.403452', 'default', '21 Rue des Tadornes, 34200 Sète, France', ''),
(3975, 'Radiobomb Studios', '0.7006726', '44.6444524', 'default', 'Unnamed Road, 47210 Mazières-Naresse, France', 'no'),
(3976, 'osteoadomicile', '2.1960189', '48.8661718', 'default', '14 Rue Paul Gimont, 92500 Rueil-Malmaison, France', ''),
(3977, 'Nordmograph', '3.1387337', '50.686282', 'default', '10 Rue Camille Desmoulins, 59290 Wasquehal, France', 'yes'),
(3981, 'Mon Film Video', '-1.1337052', '44.6356522', 'default', '69 Avenue Charles de Gaulle, 33260 La Teste-de-Buch, France', ''),
(3982, 'La Boutique Du Mineur.com', '2.4001815', '49.0505121', 'default', '2 Rue du Moulin, 95720 Le Mesnil-Aubry, France', ''),
(3983, 'Paris By Polaroid', '2.334313', '48.8636581', 'default', '167 Rue Saint Honoré, 75001 Paris, France', ''),
(3984, 'Freelance Web Developer', '2.3343243', '48.8636267', 'default', '167 Rue Saint Honoré, 75001 Paris, France', ''),
(3986, 'INFORMAT SYSTEMS', '7.7484647', '48.5792217', 'shopping', '17 Rue de la Division Leclerc, 67000 Strasbourg, France', ''),
(3987, 'Ricochets', '2.7145132', '44.3352659', 'default', 'Unnamed Road, 12290 Le Vibal, France', ''),
(3991, 'Orientation Carrière', '2.3171971', '48.8351932', 'default', '8 Rue Crocé-Spinelli, 75014 Paris, France', ''),
(3992, 'Monkey Bar', '6.867778', '45.9191199', 'nightlife', '81 Place Edmond Desailloud, 74400 Chamonix-Mont-Blanc, France', 'yes'),
(3993, 'Vegan Mania', '2.418549', '48.7221639', 'default', '8 Rue du Bac, 94480 Ablon-sur-Seine, France', 'no'),
(3994, 'Miniplanes', '-1.5922535', '47.2756553', 'default', '1 Rue Pasteur, 44119 Treillières, France', 'yes'),
(3995, 'Le Picotin', '2.4022375', '48.8434604', 'food', '35 Rue Sibuet, 75012 Paris, France', 'yes'),
(3996, 'Pizza & Love', '2.3978486', '48.880375', 'food', '77 Rue de Mouzaïa, 75019 Paris, France', 'yes'),
(3997, 'Graphothérapeute - Nathalie Favin-Lévêque', '2.168062', '48.7639315', 'default', '11 Place de la Division Leclerc, 78350 Jouy-en-Josas, France', ''),
(3998, 'Filament-ABS.fr', '-0.2787576', '44.4196928', 'default', '3 Grand Louvet, 33430 Lignan-de-Bazas, France', 'yes'),
(3999, 'ISI Restaurant', '7.2764069', '43.697533', 'food', '8 Rue Mascoinat, 06300 Nice, France', 'yes'),
(4000, 'Arasia-Shop', '1.3731165', '43.4972197', 'shopping', '6 Rue du Carlitte, 31120 Roquettes, France', 'no'),
(4003, 'ArqConnect', '1.4484051', '43.5872163', 'default', '3 Rue du Gorp, 31400 Toulouse, France', ''),
(4004, 'Recup Disque', '4.8818754', '46.3089581', 'default', '86 Rue du Paget, 01750 Replonges, France', ''),
(4005, 'Mediacafe au Calice du Dragon', '-0.5669786', '44.8370086', 'cafe', '68 Rue de la Rousselle, 33000 Bordeaux, France', 'yes'),
(4006, 'Restaurant Il Bugigattolo', '2.3395767', '48.890891', 'food', '18 Rue de la Fontaine du But, 75018 Paris, France', ''),
(4008, 'Envies de saison', '3.0209538', '50.6327635', 'food', '165 Avenue de Bretagne, 59000 Lille, France', ''),
(4009, 'Annaka', '-1.1578604', '45.3781168', 'default', '6 Avenue de l\'Océan, 33930 Vendays-Montalivet, France', ''),
(4010, 'Beaubien', '2.3595567', '48.8672153', 'shopping', '21 Rue Notre Dame de Nazareth, 75003 Paris, France', ''),
(4012, 'Stickerzlab', '-0.2510217', '44.5563059', 'default', '36 Cours Sadi Carnot, 33210 Langon, France', ''),
(4013, 'PCDUO.FR', '2.2722251', '48.9132678', 'default', '7 Rue du Général Leclerc, 92270 Bois-Colombes, France', 'no'),
(4015, 'modulix', '-0.6458531', '44.8005776', 'default', '5 Allée Claude Bernard, 33600 Pessac, France', ''),
(4016, 'Villa Les Papillons', '1.3318564', '50.0439938', 'lodging', '5 Avenue des Cottages, 76910 Criel-sur-Mer, France', ''),
(4017, 'Atelier de verre Les Boulassots', '3.7691288', '46.8363542', 'default', '62 Les Boulassots, 58250 Remilly, France', ''),
(4018, 'Chromatiko', '5.051691', '43.9174321', 'default', '55 Espl. Robert Vasse, 84800 L\'Isle-sur-la-Sorgue, France', ''),
(4019, 'La Maison du Bitcoin', '2.3498106', '48.8674576', 'default', '35 Rue du Caire, 75002 Paris', ''),
(4020, 'AABC Menuiserie', '7.7667707204819', '48.564875678589', 'default', '54 Rue de Benfeld, 67100 Strasbourg, France', ''),
(4021, 'BitcoinSolution', '7.7612614631653', '48.565830624798', 'default', '12 Rue de Sélestat, 67100 Strasbourg, France', ''),
(4022, 'Xiloror Service', '7.7612614631653', '48.570061991025', 'shopping', '38 Avenue Jean Jaurès, 67100 Strasbourg, France', ''),
(4024, 'Little Olive Tree B&B', '2.2535483', '48.7348495', 'lodging', '18 Allée Jules Guesde, 91300 Massy, France', ''),
(4025, 'luxury bitcoin store', '7.2832406', '43.7000198', 'default', '7 Rue Emmanuel Philibert, 06300 Nice, France', ''),
(4026, 'FLEX SENSE SAS', '-1.4352178573608', '46.674077254614', 'default', '109 Boulevard Louis Blanc, 85000 La Roche-sur-Yon, France', ''),
(4027, 'PARLIER ENVIRONNEMENT SAS', '-1.2049072980881', '46.149420391016', 'default', '1 Rue Jean Torlais, 17000 La Rochelle, France', ''),
(4028, 'Clic Cool', '1.6057205200195', '42.977965002349', 'default', '15 Cité du Pont de l\'Écho, 09000 Foix, France', ''),
(4029, 'Pagot Avocat', '5.3764396905899', '43.293871886534', 'default', '16 Rue Paradis, 13001 Marseille, France', ''),
(4030, 'Cabinet Viglielmo Stephane Henri', '5.3842985630035', '43.305927697053', 'default', '3 Rue Guibal, 13003 Marseille, France', ''),
(4031, 'Domaine-Pack.fr', '7.2361600399017', '43.685330760431', 'default', '219 Prom. des Anglais, 06200 Nice, France', 'no'),
(4032, 'Structure Façade', '-2.7514100074768', '48.538261283753', 'default', '36 Rue de la ville Tourault, 22190 Plérin, France', ''),
(4033, 'Dream in Design', '-1.5126800537109', '47.318417675216', 'shopping', 'Gorio, 44470 Carquefou, France', ''),
(4034, 'Social Reflex', '2.1882051229477', '48.803044140395', 'default', '32 Rue Anatole France, 92370 Chaville, France', ''),
(4035, 'Tulip Salon', '2.2935086488724', '48.8429471525', 'sports', '8 Rue de l\'Abbé Groult, 75015 Paris, France', ''),
(4036, 'Crea-Shop', '2.3913019895554', '48.836849678394', 'shopping', '266 Rue de Charenton, 75012 Paris, France', ''),
(4037, 'Alzon', '2.3660141229629', '48.856205801672', 'shopping', '28 Place des Vosges, 75003 Paris, France', ''),
(4039, 'Nagatomi', '2.3480594158173', '48.871189919226', 'food', '6 Rue du Faubourg Poissonnière, 75010 Paris, France', ''),
(4040, 'Butte aux Thaï', '2.3501408100128', '48.828134686454', 'food', '41 Rue des cinq Diamants, 75013 Paris, France', ''),
(4041, 'Organse', '2.3068928718567', '48.857345825082', 'shopping', '9 Rue Duvivier, 75007 Paris, France', ''),
(4042, 'Boutique Végétale', '0.68218231201172', '47.382079094818', 'default', '109 Rue Lakanal, 37000 Tours, France', ''),
(4043, 'Chez Gusto', '2.3171174526215', '48.895100158461', 'food', '93 Rue de La Jonquière, 75017 Paris, France', ''),
(4044, 'E-mProvement', '2.3079389333725', '48.871126406764', 'default', '35 Rue de Ponthieu, 75008 Paris, France', ''),
(4045, 'Euratechnologies', '3.0201351642609', '50.633028944397', 'default', '165 Avenue de Bretagne, 59000 Lille, France', ''),
(4046, 'Comet animalerie', '-1.4917856454849', '43.49531623646', 'shopping', '22 Chemin de Sabalce, 64100 Bayonne, France', ''),
(4047, 'Bellissime toiture et menuiserie', '7.1121883392334', '43.722482432421', 'default', '3 Place du Grand Jardin, 06140 Vence, France', ''),
(4048, 'Studio Bercy', '2.3909264802933', '48.832298155756', 'default', '82 Cour du Levant, 75012 Paris, France', ''),
(4050, 'Si7v', '2.0408177375794', '50.373270336621', 'default', '9 Boulevard Sébastopol, 62140 Hesdin, France', ''),
(4052, 'Le temps suspendu', '6.9234842061997', '43.65969510188', 'shopping', '21 Rue de l\'Oratoire, 06130 Grasse, France', ''),
(4054, 'La Guinguette vagabonde food-truck', '6.8161636590958', '47.443915056829', 'food', '8 Rue des Granges, 25350 Mandeure, France', ''),
(4055, 'PixAile.com', '0.57573080062866', '46.788894822611', 'default', '13 Rue Paul Fort, 86100 Châtellerault, France', ''),
(4056, 'Pierre MAIRÉ', '0.53955852985382', '46.813505336253', 'default', '34 Rue de l\'Angelarde, 86100 Châtellerault, France', ''),
(4057, 'Dépanneur Dae', '2.408891916275', '48.846579863221', 'shopping', '44 Rue de la Voûte, 75012 Paris, France', ''),
(4058, 'Oda Jeanne - shoes', '2.3487889766693', '48.864781811323', 'shopping', '22 Rue Tiquetonne, 75002 Paris, France', ''),
(4059, 'La Petite Ourse', '2.3486441373825', '48.864827687258', 'shopping', '6 Rue Dussoubs, 75002 Paris, France', ''),
(4060, 'Restaurant Le Pas Sage', '2.3496901988983', '48.86459830716', 'food', '6 Rue Tiquetonne, 75002 Paris, France', ''),
(4061, 'Le Labo (boutique)', '2.3496741056442', '48.864612422889', 'shopping', '6 Rue Tiquetonne, 75002 Paris, France', ''),
(4062, 'Khara Tuki', '2.3498779535294', '48.864520670581', 'shopping', '2 Passage du Grand Cerf, 75002 Paris', ''),
(4063, 'Lil Weasel', '2.3499047756195', '48.864538315269', 'shopping', '1-4 Passage du Grand Cerf, 75002 Paris', ''),
(4064, 'De Marseille et d’ailleurs', '2.3499369621277', '48.864566546756', 'shopping', '1 Passage du Grand Cerf, 75002 Paris', ''),
(4065, 'MOBILBOARD ', '7.7529466152191', '48.578633682117', 'attraction', '5 Rue Klein, 67000 Strasbourg, France', ''),
(4066, 'Didier Guillemain, jewelry store', '2.3495078086853', '48.864640654334', 'shopping', '10 Rue Tiquetonne, 75002 Paris, France', ''),
(4068, 'Pour Vos Beaux Yeux', '2.3494756221771', '48.864707703953', 'shopping', '1 Passage du Grand Cerf, 75002 Paris, France', ''),
(4069, 'Marie & Benoit', '2.3496955633164', '48.864584191428', 'shopping', '6 Rue Tiquetonne, 75002 Paris, France', ''),
(4070, 'Espace 2001', '2.8509521484375', '46.547527672243', 'default', 'Matonnière, 03350 Louroux-Bourbonnais, France', ''),
(4071, 'Silver47 Europe', '7.3079198598862', '48.343175818197', 'grocery', '2 Rue d\'Albe, 67220 Villé, France', ''),
(4072, 'Riviera Secret', '7.2814464569092', '43.699092748911', 'transport', '18 Rue Catherine Segurane, 06300 Nice, France', ''),
(4073, 'DesBitcoins.com', '2.380787730217', '48.869344496517', 'default', '62 Boulevard de Belleville, 75020 Paris, France', ''),
(4074, 'Milfa7', '2.3769950866699', '48.87196970454', 'default', '30 Rue Louis Bonnet, 75011 Paris, France', ''),
(4075, 'YeFormation', '2.3806589841843', '48.869326853524', 'sports', '64 Boulevard de Belleville, 75020 Paris, France', ''),
(4076, 'Avocats Wahl Kois Burkard-Ruby', '7.345894575119', '47.751533643374', 'default', '41 Rue Jean Mieg, 68100 Mulhouse, France', ''),
(4077, 'Dr Christophe Walter chirurgien -dentiste', '7.3493707180023', '47.780790587257', 'default', '8 Rue Kielmann, 68110 Illzach, France', ''),
(4078, 'EXPERTA EVOLUTION', '7.28555560112', '43.698735939035', 'default', '5 Place de l\'Île de Beauté, 06300 Nice, France', ''),
(4079, 'Cabinet BNZ AVOCATS / VINOJURIS', '2.2959172725677', '48.879773944978', 'default', '15 Rue Saussier-Leroy, 75017 Paris, France', ''),
(4080, 'CERAMIQUES IN GIRUM', '2.36403465271', '48.852623206183', 'shopping', '21 Rue du Petit Musc, 75004 Paris, France', ''),
(4081, 'Kdo parapente', '6.2129616737366', '45.848666655264', 'sports', '109 Chemin de Pré Monteux, 74290 Talloires-Montmin, France', ''),
(4082, 'Les Fees confiot', '3.3313465118408', '43.533864928654', 'shopping', '2 Rue du Four, 34320 Neffiès, France', ''),
(4083, 'E-liquide Aquablue', '2.1193528175354', '48.746982225233', 'shopping', '6 Avenue de l\'Europe, 78117 Toussus-le-Noble, France', ''),
(4084, 'Brasserie La Mer', '1.8487823009491', '50.960197265559', 'food', '30 Rue de la Mer, 62100 Calais, France', ''),
(4085, 'La Strat', '3.8352048397064', '43.632406147081', 'default', '114 Rue Louis Girardin, 34090 Montpellier, France', ''),
(4086, 'CHAMOUX', '4.7991693019867', '45.769161962264', 'default', '72 Rue Gorge de Loup, 69009 Lyon, France', ''),
(4087, 'Cabinet dentaire dr Philippe Mazières', '1.445340514183', '43.59815126224', 'default', '27 Rue du Languedoc, 31000 Toulouse, France', ''),
(4088, 'Le Grand Chêne de Sillans', '6.1585289239883', '43.567363485829', 'food', 'D560, 83690 Sillans-la-Cascade, France', ''),
(4089, 'Droneshop', '-1.5696716308594', '47.264320080255', 'shopping', '27 Boulevard Albert Einstein, 44300 Nantes, France', ''),
(4091, '\"WONDER.TATS\" private tattoo studio', '2.4155759811401', '48.860663392549', 'default', '113 Avenue Gallieni, 93170 Bagnolet, France', ''),
(4092, 'Golden Thai Spa', '2.684810757637', '48.945095474892', 'default', '17 Rue Jean Jaurès, 77410 Claye-Souilly, France', ''),
(4093, '3rdH Preface Web', '1.1741638183594', '43.630111446719', 'shopping', '34 Prade d\'en Haut, 31530 Lasserre, France', ''),
(4094, 'Instavape.fr', '6.0041624307632', '45.817778680085', 'shopping', '134 Chemin de Viry, 74540 Alby-sur-Chéran, France', ''),
(4095, 'John Doe et Fils', '-1.5539056062698', '47.223029288904', 'default', '1 Rue Saget, 44000 Nantes, France', ''),
(4096, 'Tassa Cuir', '2.3441380262375', '48.898228315606', 'shopping', '1 Avenue de la Porte de Clignancourt, 75018 Paris, France', ''),
(4098, 'Charles BOUCHEZ', '-1.575368642807', '47.238095525434', 'default', '16 Rue Gabriel Poulain, 44300 Nantes, France', ''),
(4100, 'Lanieri Paris Atelier', '2.3298109', '48.8564283', 'shopping', '8 Rue du Pré aux Clercs, 75007 Paris, France', ''),
(4101, 'GGorQQ Gaming', '2.032470703125', '48.891809563206', 'default', '4 Chemin de la Tuilerie, 78240 Chambourcy, France', ''),
(4102, 'Hotel Sable & Soleil', '6.7465335130692', '43.425567327581', 'lodging', '158 Rue Paul Arene, 83600 Fréjus, France', ''),
(4103, 'Societe chauffeur privée Elna ', '2.3499584197998', '48.862794990077', 'transport', '92bis Rue Saint-Denis, 75001 Paris, France', ''),
(4104, 'Ubitech', '1.9551479816437', '48.829134091895', 'shopping', '4 Rue des Frères Lumière, 78370 Plaisir, France', ''),
(4105, 'EVE-N-MICK COIFFURE', '-0.57644963264465', '44.837277982813', 'default', '22 Place Pey Berland, 33000 Bordeaux, France', ''),
(4106, 'Alarme Maison', '2.3009490966797', '48.835006520445', 'shopping', '2 Square Marcel Toussaint, 75015 Paris-15E-Arrondissement, France', ''),
(4107, 'Jean BÉRET', '1.2449043989182', '43.482624678504', 'default', '11 Rue de la Paix, 31600 Lamasquère, France', ''),
(4108, 'papier jm', '7.2238540649414', '48.063489749838', 'default', '13 Rue de la Mairie, 68230 Walbach, France', ''),
(4109, 'Riviera Photo Tours', '7.2798156738281', '43.695431468429', 'attraction', 'Allée Professeur Benoît, 06300 Nice, France', ''),
(4110, 'Poivron Vert', '7.3312604427338', '43.708535803692', 'shopping', '27 Boulevard Marinoni, 06310 Beaulieu-sur-Mer, France', ''),
(4111, 'Poivron Rouge', '7.3302626609802', '43.706942028975', 'shopping', '36 Boulevard Marinoni, 06310 Beaulieu-sur-Mer, France', ''),
(4113, 'Roland Lannier', '3.5479885339737', '45.857525468836', 'shopping', '10 Rue Victor Hugo, 63300 Thiers, France', ''),
(4114, 'Le Brindezingue', '3.5460251569748', '45.856004887118', 'food', '20 Rue Camille Joubert, 63300 Thiers, France', ''),
(4115, 'Morzine Autotech', '6.6823107004166', '46.193898406414', 'default', '284 Route d\'Essert-Romand, 74110 Morzine, France', ''),
(4116, 'Osteopathe Jeremy Collard', '2.1576064825058', '48.83923650247', 'default', '10 Grande Rue, 92420 Vaucresson, France', ''),
(4118, 'Edouard REHM, Ostéopathe D.O.', '4.5932775735855', '44.090189692507', 'default', '226 Rue de la République, 30330 Connaux, France', ''),
(4119, 'Rehm Informatique', '4.5973438024521', '44.262635314047', 'default', '5 Prom. Saint-Paul, 30130 Saint-Paulet-de-Caisson, France', ''),
(4120, 'TERAA PROJECT', '2.2523528337479', '48.720265586096', 'default', '18 Rue du Dr Roux, 91120 Palaiseau, France', ''),
(4121, 'Coach, oui Coach !', '2.3978412151337', '48.856939937371', 'sports', '34 Rue de Bagnolet, 75020 Paris, France', ''),
(4123, 'Just-Mining', '6.1221313476562', '49.318632347292', 'default', '12 Rue Robert de la Marck, 57190 Florange, France', ''),
(4124, 'Profil’in', '1.5866500139236', '43.959684688414', 'shopping', '160 Route de Monclar, 81630 Montdurausse, France', ''),
(4125, 'AKAOMA', '1.2794888019562', '49.04948575952', 'shopping', '2 Rue du Vieux Puits, 27120 Jouy-sur-Eure, France', ''),
(4128, 'SARL Verseaubat', '2.3266392946243', '48.825708485015', 'default', '99 bis Avenue du Général Leclerc, 75014 Paris, France', ''),
(4129, 'Compost Urbain', '2.3580640554428', '48.888917328525', 'shopping', '10 Rue Doudeauville, 75018 Paris, France', ''),
(4130, 'Camping le petit baigneur', '3.8597416877747', '44.112540392742', 'lodging', '1053 La Bigore, 30270 Saint-Jean-du-Gard, France', ''),
(4131, 'Village de gîtes Ravel', '3.8891118764877', '44.118278867714', 'lodging', 'Ravel, 30270 Saint-Jean-du-Gard, France', ''),
(4132, 'Techno Mambo ', '6.5344995260239', '43.171528243696', 'nightlife', 'Rue St Pierre, 83240 Cavalaire-sur-Mer, France', ''),
(4133, 'Herbet antoine ', '5.3801894187927', '43.28582814485', 'default', '175 Rue Paradis, 13006 Marseille, France', ''),
(4134, 'Cabochon.fr', '1.457576751709', '44.604218389359', 'default', 'Larroque, 46310 Montamel, France', ''),
(4135, 'FDS Informatique', '1.9857841730118', '46.590403604337', 'default', 'La Gare, 36400 Montgivray, France', ''),
(4136, 'ETIOPATHE - J. Benjamin Marcelis', '2.4044126272201', '48.869912597566', 'default', '26 Rue du Groupe Manouchian, 75020 Paris, France', ''),
(4137, 'QI GONG - Dojo les sens du Monde', '2.4029588699341', '48.86227974469', 'default', '17 Rue Lisfranc, 75020 Paris-20E-Arrondissement, France', ''),
(4138, 'QI GONG - Vitality', '2.2842013835907', '48.886956157148', 'default', '4 Rue Louise Michel, 92300 Levallois-Perret, France', ''),
(4139, 'HARAN', '-1.1477065086365', '45.847909312811', 'default', '23 Rue de L Hôtel de ville, 17560 Bourcefranc-le-Chapus, France', ''),
(4140, 'Nicebycab', '7.3013162612915', '43.70645341802', 'transport', '1 Boulevard de la Corne d\'Or, 06230 Villefranche-sur-Mer, France', ''),
(4141, 'nice-airport-minibus-shuttle.com', '7.3007583618164', '43.705639057577', 'transport', '98 Corniche André de Joly, 06300 Nice, France', ''),
(4144, 'La Serre Ô Délices', '-1.0186386108398', '44.69196600811', 'default', '19 Rue Bertrand de Goth, 33980 Audenge, France', ''),
(4145, 'Donga carrelages', '4.8303612953896', '46.173560231268', 'shopping', '1003 Route de Bourg, 01140 Saint-Didier-sur-Chalaronne, France', ''),
(4147, 'William JEAN, Ostéopathe', '2.3499745130539', '48.849587505915', 'default', '43 Boulevard Saint-Germain, 75005 Paris, France', ''),
(4148, 'SoroS', '3.9132463932037', '43.619599745154', 'default', '418 Rue du Mas de Verchant, 34000 Montpellier, France', ''),
(4150, 'David Mahat', '2.347104549408', '48.864778282403', 'default', '37 Rue Tiquetonne, 75002 Paris, France', ''),
(4151, 'Antibes Free Walking Tours', '7.1206748485565', '43.580561840529', 'attraction', '11 Place Général de Gaulle, 06600 Antibes, France', ''),
(4152, 'KHYKS', '2.7100825309753', '48.893188606446', 'shopping', '2 Rue Louis Martin, 77400 Thorigny-sur-Marne, France', 'yes'),
(4153, 'Crêperie Chez Pierrick', '2.3228842020035', '48.844454635874', 'food', '55 Boulevard du Montparnasse, 75006 Paris, France', 'yes'),
(4154, 'Bradmesz', '2.351068854332', '48.856781110849', 'default', '7 Place de l\'Hôtel de Ville, 75004 Paris, France', 'yes'),
(4155, 'VR Evolution', '0.19347846508026', '48.005199285853', 'attraction', '29 Rue Gambetta, 72100 Le Mans, France', 'yes'),
(4156, 'Lasserre & Papillon', '-0.56854784488678', '44.859504118191', 'default', '104 Cours du Médoc, 33300 Bordeaux, France', 'yes'),
(4157, 'CupPlante', '5.3813695907593', '43.247234637078', 'shopping', '104 Avenue des Goumiers, 13008 Marseille, France', 'yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atms`
--
ALTER TABLE `atms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venues`
--
ALTER TABLE `venues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atms`
--
ALTER TABLE `atms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `venues`
--
ALTER TABLE `venues`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4158;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
