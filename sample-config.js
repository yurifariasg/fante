module.exports = {
  mail: {
    host: "smtp.myserver.com",
    port: 587,
    user: "user@email.com",
    pass: "password",
    from: '"Fante Notifier" <no-reply@example.com>',
    to: ["your@email.com"],
  },
  redis: {
    host: "localhost",
    port: 6379,
    password: "password",
  },
};
