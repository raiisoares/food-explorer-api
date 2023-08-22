const AppError = require("../utils/AppError");
class UsersController {

     create(request, response) {
        const { name, email, password } = request.body;

        if(!name) throw new AppError("nome obrigatório");

        response.status(201).json({ name })
    }

}

module.exports = UsersController;