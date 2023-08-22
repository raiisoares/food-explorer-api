const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");


describe("UserCreateService", () => {
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    })

    it("User should be create", async () => {
        const user = {
            name: "User Test",
            email: "user@email.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user);

        expect(userCreated).toHaveProperty("id");
    });


    it("User should not be created with existing email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user1@email.com",
            password: "123"
        }

        const user2 = {
            name: "User Test 2",
            email: "user1@email.com",
            password: "321"
        }

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este email já está em uso."));

    });

})
