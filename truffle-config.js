module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
      // * Block limit:  6721975 (0x6691b7)
      //gas: 9999999,
      gas: 6100000

    }
  },
  compilers: {
    solc: {
      version: "0.4.25"
    }
  }
};