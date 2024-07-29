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
  `personalMedicoId` integer NOT NULL,
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Recetas` (
  `id` integer PRIMARY KEY,
  `tratamientosId` integer NOT NULL,
  `medicamentosId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `CalendarioMedicamentos` (
  `id` integer PRIMARY KEY,
  `time` varchar(255),
  `medicamentosId` integer NOT NULL,
  `pacientesId` integer,
  `description` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `aderenciaMedicamentos` (
  `id` integer PRIMARY KEY,
  `calendarioMedicamentosId` integer NOT NULL,
  `tomoMedicamento` boolean,
  `createdAt` timestamp
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
  `usuarioId` integer,
  `numeroMatricula` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `Pacientes` (
  `id` integer PRIMARY KEY,
  `entidadesSaludId` integer,
  `financiadoresId` integer NOT NULL,
  `personalMedicoId` integer NOT NULL,
  `patologiasId` integer NOT NULL,
  `usuariosID` integer NOT NULL,
  `factorSanguineo` integer,
  `Active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `PatologiasPacientes` (
  `id` integer PRIMARY KEY,
  `pacientesId` integer,
  `patologiasId` integer NOT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `PersonalMedicoPaciente` (
  `id` integer PRIMARY KEY,
  `pacientesId` integer,
  `personalMedicoId` integer NOT NULL,
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
  `financiadoresId` integer,
  `usuariosId` integer NOT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `EntidadesSalud` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `active` boolean,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `EntidadesSaludUsuarios` (
  `id` integer PRIMARY KEY,
  `entidadesSaludId` integer,
  `usuariosId` integer NOT NULL,
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


CREATE TABLE `PersonalMedico_Tratamientos` (
  `PersonalMedico_id` integer,
  `Tratamientos_personalMedicoId` integer,
  PRIMARY KEY (`PersonalMedico_id`, `Tratamientos_personalMedicoId`)
);

ALTER TABLE `PersonalMedico_Tratamientos` ADD FOREIGN KEY (`PersonalMedico_id`) REFERENCES `PersonalMedico` (`id`);

ALTER TABLE `PersonalMedico_Tratamientos` ADD FOREIGN KEY (`Tratamientos_personalMedicoId`) REFERENCES `Tratamientos` (`personalMedicoId`);


CREATE TABLE `Tratamientos_Recetas` (
  `Tratamientos_id` integer,
  `Recetas_tratamientosId` integer,
  PRIMARY KEY (`Tratamientos_id`, `Recetas_tratamientosId`)
);

ALTER TABLE `Tratamientos_Recetas` ADD FOREIGN KEY (`Tratamientos_id`) REFERENCES `Tratamientos` (`id`);

ALTER TABLE `Tratamientos_Recetas` ADD FOREIGN KEY (`Recetas_tratamientosId`) REFERENCES `Recetas` (`tratamientosId`);


CREATE TABLE `Medicamentos_Recetas` (
  `Medicamentos_id` integer,
  `Recetas_medicamentosId` integer,
  PRIMARY KEY (`Medicamentos_id`, `Recetas_medicamentosId`)
);

ALTER TABLE `Medicamentos_Recetas` ADD FOREIGN KEY (`Medicamentos_id`) REFERENCES `Medicamentos` (`id`);

ALTER TABLE `Medicamentos_Recetas` ADD FOREIGN KEY (`Recetas_medicamentosId`) REFERENCES `Recetas` (`medicamentosId`);


CREATE TABLE `PersonalMedico_Recetas` (
  `PersonalMedico_id` integer,
  `Recetas_personalMedicoId` integer,
  PRIMARY KEY (`PersonalMedico_id`, `Recetas_personalMedicoId`)
);

ALTER TABLE `PersonalMedico_Recetas` ADD FOREIGN KEY (`PersonalMedico_id`) REFERENCES `PersonalMedico` (`id`);

ALTER TABLE `PersonalMedico_Recetas` ADD FOREIGN KEY (`Recetas_personalMedicoId`) REFERENCES `Recetas` (`personalMedicoId`);


CREATE TABLE `Medicamentos_CalendarioMedicamentos` (
  `Medicamentos_id` integer,
  `CalendarioMedicamentos_medicamentosId` integer,
  PRIMARY KEY (`Medicamentos_id`, `CalendarioMedicamentos_medicamentosId`)
);

ALTER TABLE `Medicamentos_CalendarioMedicamentos` ADD FOREIGN KEY (`Medicamentos_id`) REFERENCES `Medicamentos` (`id`);

ALTER TABLE `Medicamentos_CalendarioMedicamentos` ADD FOREIGN KEY (`CalendarioMedicamentos_medicamentosId`) REFERENCES `CalendarioMedicamentos` (`medicamentosId`);


CREATE TABLE `Pacientes_CalendarioMedicamentos` (
  `Pacientes_id` integer,
  `CalendarioMedicamentos_pacientesId` integer,
  PRIMARY KEY (`Pacientes_id`, `CalendarioMedicamentos_pacientesId`)
);

ALTER TABLE `Pacientes_CalendarioMedicamentos` ADD FOREIGN KEY (`Pacientes_id`) REFERENCES `Pacientes` (`id`);

ALTER TABLE `Pacientes_CalendarioMedicamentos` ADD FOREIGN KEY (`CalendarioMedicamentos_pacientesId`) REFERENCES `CalendarioMedicamentos` (`pacientesId`);


CREATE TABLE `CalendarioMedicamentos_aderenciaMedicamentos` (
  `CalendarioMedicamentos_id` integer,
  `aderenciaMedicamentos_calendarioMedicamentosId` integer,
  PRIMARY KEY (`CalendarioMedicamentos_id`, `aderenciaMedicamentos_calendarioMedicamentosId`)
);

ALTER TABLE `CalendarioMedicamentos_aderenciaMedicamentos` ADD FOREIGN KEY (`CalendarioMedicamentos_id`) REFERENCES `CalendarioMedicamentos` (`id`);

ALTER TABLE `CalendarioMedicamentos_aderenciaMedicamentos` ADD FOREIGN KEY (`aderenciaMedicamentos_calendarioMedicamentosId`) REFERENCES `aderenciaMedicamentos` (`calendarioMedicamentosId`);


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


ALTER TABLE `PersonalMedico` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios` (`id`);

ALTER TABLE `Pacientes` ADD FOREIGN KEY (`entidadesSaludId`) REFERENCES `EntidadesSalud` (`id`);

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

CREATE TABLE `Pacientes_PatologiasPacientes` (
  `Pacientes_id` integer,
  `PatologiasPacientes_pacientesId` integer,
  PRIMARY KEY (`Pacientes_id`, `PatologiasPacientes_pacientesId`)
);

ALTER TABLE `Pacientes_PatologiasPacientes` ADD FOREIGN KEY (`Pacientes_id`) REFERENCES `Pacientes` (`id`);

ALTER TABLE `Pacientes_PatologiasPacientes` ADD FOREIGN KEY (`PatologiasPacientes_pacientesId`) REFERENCES `PatologiasPacientes` (`pacientesId`);


ALTER TABLE `Patologias` ADD FOREIGN KEY (`id`) REFERENCES `PatologiasPacientes` (`patologiasId`);

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
  `FinanciadoresUsuarios_financiadoresId` integer,
  PRIMARY KEY (`Financiadores_id`, `FinanciadoresUsuarios_financiadoresId`)
);

ALTER TABLE `Financiadores_FinanciadoresUsuarios` ADD FOREIGN KEY (`Financiadores_id`) REFERENCES `Financiadores` (`id`);

ALTER TABLE `Financiadores_FinanciadoresUsuarios` ADD FOREIGN KEY (`FinanciadoresUsuarios_financiadoresId`) REFERENCES `FinanciadoresUsuarios` (`financiadoresId`);


ALTER TABLE `Usuarios` ADD FOREIGN KEY (`id`) REFERENCES `FinanciadoresUsuarios` (`usuariosId`);

CREATE TABLE `EntidadesSalud_EntidadesSaludUsuarios` (
  `EntidadesSalud_id` integer,
  `EntidadesSaludUsuarios_entidadesSaludId` integer,
  PRIMARY KEY (`EntidadesSalud_id`, `EntidadesSaludUsuarios_entidadesSaludId`)
);

ALTER TABLE `EntidadesSalud_EntidadesSaludUsuarios` ADD FOREIGN KEY (`EntidadesSalud_id`) REFERENCES `EntidadesSalud` (`id`);

ALTER TABLE `EntidadesSalud_EntidadesSaludUsuarios` ADD FOREIGN KEY (`EntidadesSaludUsuarios_entidadesSaludId`) REFERENCES `EntidadesSaludUsuarios` (`entidadesSaludId`);


ALTER TABLE `Usuarios` ADD FOREIGN KEY (`id`) REFERENCES `EntidadesSaludUsuarios` (`usuariosId`);
