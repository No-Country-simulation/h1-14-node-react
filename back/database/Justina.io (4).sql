CREATE TABLE `Laboratorios` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Farmacias` (
  `id` integer PRIMARY KEY,
  `laboratoriosId` integer NOT NULL,
  `name` varchar(255),
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Medicamentos` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `patologiasId` integer NOT NULL,
  `tratamientosId` integer NOT NULL,
  `farmaciasId` integer NOT NULL,
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Tratamientos` (
  `id` integer PRIMARY KEY,
  `description` varchar(255),
  `patologiasId` integer NOT NULL,
  `pacienteId` integer NOT NULL,
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Receta` (
  `id` integer PRIMARY KEY,
  `tratamientosId` integer NOT NULL,
  `medicamentosId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `calendarioMedicamentos` (
  `id` integer PRIMARY KEY,
  `time` varchar(255),
  `medicamentosId` integer NOT NULL,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Patologias` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `especialidadesId` integer,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Especialidades` (
  `id` integer PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `PersonalMedico` (
  `id` integer PRIMARY KEY,
  `especialidadesId` integer,
  `usuario` integer,
  `numeroMatricula` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Pacientes` (
  `id` integer PRIMARY KEY,
  `entidadesId` integer,
  `financiadoresId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `patologiasId` integer NOT NULL,
  `usuariosID` integer NOT NULL,
  `factorSanguineo` integer,
  `Active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `PersonalMedicoPaciente` (
  `id` integer PRIMARY KEY,
  `pacientesId` integer,
  `personalMedicoId` integer NOT NULL,
  `Active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Usuarios` (
  `id` integer PRIMARY KEY,
  `rol` rolUsuario,
  `dni` integer,
  `tipoDocumentosId` tipoDocumento,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `email` varchar(255),
  `birthDay` date,
  `gender` varchar(255),
  `password` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Financiadores` (
  `id` integer PRIMARY KEY COMMENT 'Prepagas obras sociales',
  `personalMedicoId` integer NOT NULL,
  `name` varchar(255),
  `descripcion` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Ubicacion` (
  `id` integer PRIMARY KEY,
  `usuariosId` integer NOT NULL,
  `contry` varchar(255),
  `province` varchar(255),
  `locality` varchar(255),
  `address` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `FinanciadoresUsuarios` (
  `id` integer PRIMARY KEY,
  `financierasId` integer,
  `usuariosId` integer NOT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Entidades` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Laboratorios_Farmacias` (
  `Laboratorios_id` integer,
  `Farmacias_laboratoriosId` integer,
  PRIMARY KEY (`Laboratorios_id`, `Farmacias_laboratoriosId`)
);

ALTER TABLE `Laboratorios_Farmacias` ADD FOREIGN KEY (`Laboratorios_id`) REFERENCES `Laboratorios` (`id`);

ALTER TABLE `Laboratorios_Farmacias` ADD FOREIGN KEY (`Farmacias_laboratoriosId`) REFERENCES `Farmacias` (`laboratoriosId`);


CREATE TABLE `Patologias_Medicamentos` (
  `Patologias_id` integer,
  `Medicamentos_patologiasId` integer,
  PRIMARY KEY (`Patologias_id`, `Medicamentos_patologiasId`)
);

ALTER TABLE `Patologias_Medicamentos` ADD FOREIGN KEY (`Patologias_id`) REFERENCES `Patologias` (`id`);

ALTER TABLE `Patologias_Medicamentos` ADD FOREIGN KEY (`Medicamentos_patologiasId`) REFERENCES `Medicamentos` (`patologiasId`);


CREATE TABLE `Tratamientos_Medicamentos` (
  `Tratamientos_id` integer,
  `Medicamentos_tratamientosId` integer,
  PRIMARY KEY (`Tratamientos_id`, `Medicamentos_tratamientosId`)
);

ALTER TABLE `Tratamientos_Medicamentos` ADD FOREIGN KEY (`Tratamientos_id`) REFERENCES `Tratamientos` (`id`);

ALTER TABLE `Tratamientos_Medicamentos` ADD FOREIGN KEY (`Medicamentos_tratamientosId`) REFERENCES `Medicamentos` (`tratamientosId`);


CREATE TABLE `Farmacias_Medicamentos` (
  `Farmacias_id` integer,
  `Medicamentos_farmaciasId` integer,
  PRIMARY KEY (`Farmacias_id`, `Medicamentos_farmaciasId`)
);

ALTER TABLE `Farmacias_Medicamentos` ADD FOREIGN KEY (`Farmacias_id`) REFERENCES `Farmacias` (`id`);

ALTER TABLE `Farmacias_Medicamentos` ADD FOREIGN KEY (`Medicamentos_farmaciasId`) REFERENCES `Medicamentos` (`farmaciasId`);


ALTER TABLE `Tratamientos` ADD FOREIGN KEY (`patologiasId`) REFERENCES `Patologias` (`id`);

CREATE TABLE `Pacientes_Tratamientos` (
  `Pacientes_id` integer,
  `Tratamientos_pacienteId` integer,
  PRIMARY KEY (`Pacientes_id`, `Tratamientos_pacienteId`)
);

ALTER TABLE `Pacientes_Tratamientos` ADD FOREIGN KEY (`Pacientes_id`) REFERENCES `Pacientes` (`id`);

ALTER TABLE `Pacientes_Tratamientos` ADD FOREIGN KEY (`Tratamientos_pacienteId`) REFERENCES `Tratamientos` (`pacienteId`);


CREATE TABLE `Tratamientos_Receta` (
  `Tratamientos_id` integer,
  `Receta_tratamientosId` integer,
  PRIMARY KEY (`Tratamientos_id`, `Receta_tratamientosId`)
);

ALTER TABLE `Tratamientos_Receta` ADD FOREIGN KEY (`Tratamientos_id`) REFERENCES `Tratamientos` (`id`);

ALTER TABLE `Tratamientos_Receta` ADD FOREIGN KEY (`Receta_tratamientosId`) REFERENCES `Receta` (`tratamientosId`);


CREATE TABLE `Medicamentos_Receta` (
  `Medicamentos_id` integer,
  `Receta_medicamentosId` integer,
  PRIMARY KEY (`Medicamentos_id`, `Receta_medicamentosId`)
);

ALTER TABLE `Medicamentos_Receta` ADD FOREIGN KEY (`Medicamentos_id`) REFERENCES `Medicamentos` (`id`);

ALTER TABLE `Medicamentos_Receta` ADD FOREIGN KEY (`Receta_medicamentosId`) REFERENCES `Receta` (`medicamentosId`);


CREATE TABLE `PersonalMedico_Receta` (
  `PersonalMedico_id` integer,
  `Receta_personalMedicoId` integer,
  PRIMARY KEY (`PersonalMedico_id`, `Receta_personalMedicoId`)
);

ALTER TABLE `PersonalMedico_Receta` ADD FOREIGN KEY (`PersonalMedico_id`) REFERENCES `PersonalMedico` (`id`);

ALTER TABLE `PersonalMedico_Receta` ADD FOREIGN KEY (`Receta_personalMedicoId`) REFERENCES `Receta` (`personalMedicoId`);


CREATE TABLE `Medicamentos_calendarioMedicamentos` (
  `Medicamentos_id` integer,
  `calendarioMedicamentos_medicamentosId` integer,
  PRIMARY KEY (`Medicamentos_id`, `calendarioMedicamentos_medicamentosId`)
);

ALTER TABLE `Medicamentos_calendarioMedicamentos` ADD FOREIGN KEY (`Medicamentos_id`) REFERENCES `Medicamentos` (`id`);

ALTER TABLE `Medicamentos_calendarioMedicamentos` ADD FOREIGN KEY (`calendarioMedicamentos_medicamentosId`) REFERENCES `calendarioMedicamentos` (`medicamentosId`);


CREATE TABLE `Especialidades_Patologias` (
  `Especialidades_id` integer,
  `Patologias_especialidadesId` integer,
  PRIMARY KEY (`Especialidades_id`, `Patologias_especialidadesId`)
);

ALTER TABLE `Especialidades_Patologias` ADD FOREIGN KEY (`Especialidades_id`) REFERENCES `Especialidades` (`id`);

ALTER TABLE `Especialidades_Patologias` ADD FOREIGN KEY (`Patologias_especialidadesId`) REFERENCES `Patologias` (`especialidadesId`);


CREATE TABLE `Especialidades_PersonalMedico` (
  `Especialidades_id` integer,
  `PersonalMedico_especialidadesId` integer,
  PRIMARY KEY (`Especialidades_id`, `PersonalMedico_especialidadesId`)
);

ALTER TABLE `Especialidades_PersonalMedico` ADD FOREIGN KEY (`Especialidades_id`) REFERENCES `Especialidades` (`id`);

ALTER TABLE `Especialidades_PersonalMedico` ADD FOREIGN KEY (`PersonalMedico_especialidadesId`) REFERENCES `PersonalMedico` (`especialidadesId`);


ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`usuario`) REFERENCES `Usuarios` (`id`);

ALTER TABLE `Pacientes` ADD FOREIGN KEY (`entidadesId`) REFERENCES `Entidades` (`id`);

ALTER TABLE `Financiadores` ADD FOREIGN KEY (`id`) REFERENCES `Pacientes` (`financiadoresId`);

CREATE TABLE `PersonalMedico_Pacientes` (
  `PersonalMedico_id` integer,
  `Pacientes_personalMedicoId` integer,
  PRIMARY KEY (`PersonalMedico_id`, `Pacientes_personalMedicoId`)
);

ALTER TABLE `PersonalMedico_Pacientes` ADD FOREIGN KEY (`PersonalMedico_id`) REFERENCES `PersonalMedico` (`id`);

ALTER TABLE `PersonalMedico_Pacientes` ADD FOREIGN KEY (`Pacientes_personalMedicoId`) REFERENCES `Pacientes` (`personalMedicoId`);


CREATE TABLE `Patologias_Pacientes` (
  `Patologias_id` integer,
  `Pacientes_patologiasId` integer,
  PRIMARY KEY (`Patologias_id`, `Pacientes_patologiasId`)
);

ALTER TABLE `Patologias_Pacientes` ADD FOREIGN KEY (`Patologias_id`) REFERENCES `Patologias` (`id`);

ALTER TABLE `Patologias_Pacientes` ADD FOREIGN KEY (`Pacientes_patologiasId`) REFERENCES `Pacientes` (`patologiasId`);


ALTER TABLE `Pacientes` ADD FOREIGN KEY (`usuariosID`) REFERENCES `Usuarios` (`id`);

CREATE TABLE `Pacientes_PersonalMedicoPaciente` (
  `Pacientes_id` integer,
  `PersonalMedicoPaciente_pacientesId` integer,
  PRIMARY KEY (`Pacientes_id`, `PersonalMedicoPaciente_pacientesId`)
);

ALTER TABLE `Pacientes_PersonalMedicoPaciente` ADD FOREIGN KEY (`Pacientes_id`) REFERENCES `Pacientes` (`id`);

ALTER TABLE `Pacientes_PersonalMedicoPaciente` ADD FOREIGN KEY (`PersonalMedicoPaciente_pacientesId`) REFERENCES `PersonalMedicoPaciente` (`pacientesId`);


ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`id`) REFERENCES `PersonalMedicoPaciente` (`personalMedicoId`);

ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`id`) REFERENCES `Financiadores` (`personalMedicoId`);

ALTER TABLE `Usuarios` ADD FOREIGN KEY (`id`) REFERENCES `Ubicacion` (`usuariosId`);

CREATE TABLE `Financiadores_FinanciadoresUsuarios` (
  `Financiadores_id` integer,
  `FinanciadoresUsuarios_financierasId` integer,
  PRIMARY KEY (`Financiadores_id`, `FinanciadoresUsuarios_financierasId`)
);

ALTER TABLE `Financiadores_FinanciadoresUsuarios` ADD FOREIGN KEY (`Financiadores_id`) REFERENCES `Financiadores` (`id`);

ALTER TABLE `Financiadores_FinanciadoresUsuarios` ADD FOREIGN KEY (`FinanciadoresUsuarios_financierasId`) REFERENCES `FinanciadoresUsuarios` (`financierasId`);


ALTER TABLE `Usuarios` ADD FOREIGN KEY (`id`) REFERENCES `FinanciadoresUsuarios` (`usuariosId`);
