class SessionCreateService {
  constructor(sessionRepository) {
    this.sessionRepository = sessionRepository;
  }

  async execute({ email, password }) {
    const sessionCreated = await this.sessionRepository.create({
      email,
      password,
    });
    return sessionCreated;
  }
}

module.exports = SessionCreateService;
