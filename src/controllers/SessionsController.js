const SessionRepository = require("../repositories/SessionRepository");
const SessionCreateService = require("../services/SessionCreateService");
const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");

class SessionController {
  async create(request, response) {
    try {
      const { email, password } = request.body;
      const sessionRepository = new SessionRepository();
      const sessionCreateService = new SessionCreateService(sessionRepository);

      const user = await sessionCreateService.execute({ email, password });

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({ role: user.role }, secret, {
        subject: String(user.id),
        expiresIn,
      });

      response.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      response.status(201).json({ user });
    } catch (error) {
      throw new AppError(error.message, error.status);
    }
  }
}

module.exports = SessionController;
