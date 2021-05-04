const Arena = require('bull-arena');

let config;
try {
  config = JSON.parse(process.env.ARENA_CONFIG);
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

let Bull, Bee, BullMQ;

Arena({
  ...config,
  get Bull() {
    return Bull || (Bull = require('bull'));
  },
  get Bee() {
    return Bee || (Bee = require('bee-queue'));
  },
  get BullMQ() {
    return BullMQ || (BullMQ = require('bullmq'));
  },
});
