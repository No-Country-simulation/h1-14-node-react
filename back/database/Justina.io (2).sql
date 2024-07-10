CREATE TABLE `Financiadores` (
  `id` integer PRIMARY KEY COMMENT 'Prepagas obras sociales',
  `personalMedicoId` integer NOT NULL,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Laboratorio` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Farmacia` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Medicamento` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `patologiasId` integer NOT NULL,
  `tratamientoId` integer NOT NULL,
  `farmaciaId` integer NOT NULL,
  `laboratorioId` integer NOT NULL,
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Especialidad` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `PersonalMedico` (
  `id` integer PRIMARY KEY,
  `especialidadId` integer,
  `usuario` integer,
  `numeroMatricula` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Paciente` (
  `id` integer PRIMARY KEY,
  `entidadesId` integer,
  `financiadoresId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `patologiasId` integer NOT NULL,
  `usuarioID` integer NOT NULL,
  `factorSanguineo` integer,
  `Activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Usuario` (
  `id` integer PRIMARY KEY,
  `rol` ENUM ('medico', 'paciente'),
  `dni` integer,
  `tipoDocumentoId` ENUM ('dni', 'libreDeEnrolamiento', 'libretaCivica'),
  `nombre` varchar(255),
  `apellido` varchar(255),
  `email` varchar(255),
  `fechaNacimiento` date,
  `Sexo` varchar(255),
  `password` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Ubicacion` (
  `id` integer PRIMARY KEY,
  `usuarioId` integer NOT NULL,
  `pais` varchar(255),
  `provincia` varchar(255),
  `localidad` varchar(255),
  `direccion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Entidades` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Tratamiento` (
  `id` integer PRIMARY KEY,
  `descripcion` varchar(255),
  `patologiasId` integer NOT NULL,
  `pacienteId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Receta` (
  `id` integer PRIMARY KEY,
  `tratamientoId` integer NOT NULL,
  `medicamentoId` integer NOT NULL,
  `descripcion` varchar(255),
  `activo` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Patologias` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `especialidadId` integer,
  `descripcion` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp
);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`id`) REFERENCES `Financiadores` (`personalMedicoId`);

ALTER TABLE `Patologias` ADD FOREIGN KEY (`id`) REFERENCES `Medicamento` (`patologiasId`);

ALTER TABLE `Tratamiento` ADD FOREIGN KEY (`id`) REFERENCES `Medicamento` (`tratamientoId`);

ALTER TABLE `Farmacia` ADD FOREIGN KEY (`id`) REFERENCES `Medicamento` (`farmaciaId`);

ALTER TABLE `Laboratorio` ADD FOREIGN KEY (`id`) REFERENCES `Medicamento` (`laboratorioId`);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`especialidadId`) REFERENCES `Especialidad` (`id`);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuario` (`id`);

ALTER TABLE `Entidades` ADD FOREIGN KEY (`id`) REFERENCES `Paciente` (`entidadesId`);

ALTER TABLE `Financiadores` ADD FOREIGN KEY (`id`) REFERENCES `Paciente` (`financiadoresId`);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`id`) REFERENCES `Paciente` (`personalMedicoId`);

ALTER TABLE `Patologias` ADD FOREIGN KEY (`id`) REFERENCES `Paciente` (`patologiasId`);

ALTER TABLE `Usuario` ADD FOREIGN KEY (`id`) REFERENCES `Paciente` (`usuarioID`);

ALTER TABLE `Usuario` ADD FOREIGN KEY (`id`) REFERENCES `Ubicacion` (`usuarioId`);

ALTER TABLE `Patologias` ADD FOREIGN KEY (`id`) REFERENCES `Tratamiento` (`patologiasId`);

ALTER TABLE `Paciente` ADD FOREIGN KEY (`id`) REFERENCES `Tratamiento` (`pacienteId`);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`id`) REFERENCES `Tratamiento` (`personalMedicoId`);

ALTER TABLE `Tratamiento` ADD FOREIGN KEY (`id`) REFERENCES `Receta` (`tratamientoId`);

ALTER TABLE `Medicamento` ADD FOREIGN KEY (`id`) REFERENCES `Receta` (`medicamentoId`);

ALTER TABLE `Patologias` ADD FOREIGN KEY (`especialidadId`) REFERENCES `Especialidad` (`id`);
