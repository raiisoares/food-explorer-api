const SessionRepository = require("../repositories/SessionRepository");
const SessionCreateService = require("../services/SessionCreateService");
const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");

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
                expiresIn
            });

            response.cookie("token", token, {
                httpOnly: true,
                sameSite: "Strict",
                secure: true,
                maxAge: 15 * 60 * 1000
            });

            response.status(201).json({ user })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = SessionController;