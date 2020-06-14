export default {
  jwt: {
    // palavra chave = mamãe é o topo do mundo
    secret: process.env.APP_SECRET,
    expiresIn: '180d',
  },
};
