const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiscStorage = require("../providers/discStorage");


class ProductAvatarController {
    async update(request, response) {
        const product = request.user.id;
        const avatarFileName = request.file.filename;
        const discStorage = new DiscStorage();
        const [user] = await knex("users").where({ id: user_id });

        if (!user) throw new AppError("Somente usuários administradores podem mudar o avatar.", 401);
        if (user.avatar) await discStorage.deleteFile(user.avatar);
        
        const filename = await discStorage.saveFile(avatarFileName);
        user.avatar = filename;
        await knex("users").update(user).where({ id: user_id });

        return response.status(200).json(user);
    }
}

module.exports = ProductAvatarController;