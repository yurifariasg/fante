const Redis = require("ioredis");

const {
  redis: { host, port, password },
} = require("./configs");

const { templateFor } = require("./template");
const { sendEmail } = require("./emailer");
const { shuffle } = require("./utils");

const redis = new Redis(port, host, {
  password,
});

const main = async () => {
  const content = await redis.get("content");
  redis.disconnect();

  const learningItems = shuffle(JSON.parse(content));

  const emailContent = await templateFor(learningItems.splice(0, 5));
  await sendEmail(emailContent);
};

main();
