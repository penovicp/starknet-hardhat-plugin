import "../dist/index.js";

module.exports = {
    starknet: {
        dockerizedVersion: "0.8.1",
        network: process.env.NETWORK
    },
    networks: {
        devnet: {
            url: "http://localhost:5000"
        }
    }
};
