import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { logger } from "../../config/logger.js";
import Ticket from "../Tickets/Schemas/ticketSchema.js";
configDotenv();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendMail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: `${process.env.MAIL_USERNAME}`,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado correctamente.");
  } catch (error) {
    console.error(`Error al enviar el correo electrónico error: ${error.message}`, error);
    throw new Error("Error al enviar el correo electrónico");
  }
};

export const statusEmailService = async (id, role) => {
  logger.info(id);
  logger.info(role);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      logger.info(`ID inválido: ${id}`);
      throw new Error("ID inválido");
    }

    const ticket = await Ticket.findById(id)
      .select("agent user status")
      .populate("agent")
      .populate("user");

    if (!ticket) {
      logger.error("Ticket no encontrado");
      throw new Error("Ticket no encontrado");
    }

    let email = "";
    if (role === "Cliente") {
      email = ticket.agent.email;
    } else if (role === "Tecnico") {
      email = ticket.user.email;
    } else {
      throw new Error("Rol no válido");
    }

    const status = ticket.status;
    await sendMail(
      email,
      `Cambio de estado del ticket: ${id}`,
      /*html*/ `<p>El estado del ticket: ${id} fue actualizado a ${status}</p>`
    );
    logger.info("Correo electrónico enviado correctamente.");
    return;
  } catch (error) {
    console.error(`Error al enviar el correo electrónico error: ${error.message}`, error);
    throw error;
  }
};

export const commentsEmailService = async (id, role) => {
  logger.info(id);
  logger.info(role);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      logger.info(`ID inválido: ${id}`);
      throw new Error("ID inválido");
    }

    const ticket = await Ticket.findById(id)
      .select("agent user status")
      .populate("agent")
      .populate("user");

    if (!ticket) {
      logger.error("Ticket no encontrado");
      throw new Error("Ticket no encontrado");
    }

    let email = "";
    if (role === "Cliente") {
      email = ticket.agent.email;
    } else if (role === "Tecnico") {
      email = ticket.user.email;
    } else {
      throw new Error("Rol no válido");
    }

    await sendMail(
      email,
      `Nuevo comentario en el ticket: ${id}`,
      /*html*/ `<p>Se a agegado un nuevo comentario en el ticket: ${id}</p>`
    );
    logger.info("Correo electrónico enviado correctamente.");
    return;
  } catch (error) {
    console.error(`Error al enviar el correo electrónico error: ${error.message}`, error);
    throw error;
  }
};
