class SessionCreateService {

    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({email, password}) {
        const sessionCreated = await this.productsRepository.create({email, password});
        return sessionCreated;
    }
}

module.exports = SessionCreateService;