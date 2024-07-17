import { logger } from "../../config/logger.js";
import { resFail, resSuccess } from "../../config/utils/response.js";
import { commentsEmailService, statusEmailService } from "./services.js";

export const statusEmail = async (req, res) => {
  const { id, role } = req.body;
  try {
    statusEmailService(id, role);
    resSuccess(res, 200, "Envio exitoso");
  } catch (error) {
    logger.error("Error:", error);
    resFail(res, 400, "Envio fallido", error);
  }
};

export const commentsEmail = async (req, res) => {
  const { id, role } = req.body;
  try {
    commentsEmailService(id, role);
    resSuccess(res, 200, "Envio exitoso");
  } catch (error) {
    logger.error("Error:", error);
    resFail(res, 400, "Envio fallido", error);
  }
};
