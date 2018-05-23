CREATE DATABASE `examen` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `examen`;

CREATE TABLE IF NOT EXISTS `compras` (
  `id` int(4) NOT NULL,
  `compra` varchar(12) NOT NULL,
  `folio` int(8) NOT NULL,
  `idusuario` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `compras` (`id`, `compra`, `folio`, `idusuario`) VALUES
(901, 'patineta', 100011, 68),
(902, 'patineta', 100012, 69),
(903, 'resortera', 100013, 70),
(904, 'balero', 100014, 70),
(905, 'resortera', 100015, 68);

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(3) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `correo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `usuarios` (`id`, `nombre`, `correo`) VALUES
(68, 'Hugo', 'hugo@gmail.com '),
(69, 'Paco', 'paco@hotmail.com'),
(70, 'Luis', 'luis@yahoo.com');