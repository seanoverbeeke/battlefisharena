const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082});

var Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("https://u0fumkuoje:EUzNsFjSKYV5bYtabSeITyMdUUnZyN6xrMbL_iWYvoI@u0dnyhg3r9-u0xexzmwnk-rpc.us0-aws.kaleido.io/"));

wss.on("connection", ws => {
    console.log("New Client Connected!");
   
    ws.on("close", () => {
        console.log("Client has disconnected!");
 
    });

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
    });
});


async function getbalance1(){
    const balance1 = await web3.eth.getBalance("0xe25b6f49884341eDF0280f6586752153f297099E") / 1000000000000000000;
    const balance2 = await web3.eth.getBalance("0x618169F41507F30CB8C521077fd9C2286AFfe34e") / 1000000000000000000;
    const balance3 = await web3.eth.getBalance("0x54Bbd9F80Db95f899c7534453ebDdE27653dA55D") / 1000000000000000000;
    const balance4 = await web3.eth.getBalance("0xeF081Cc2DC08F7fda31A3e8F2B44e270Fbf31b45") / 1000000000000000000;
    const balance5 = await web3.eth.getBalance("0x4bB08b2b6aF4b46d760f1B6ea21a4b247ad1b455") / 1000000000000000000;
    const leaderboard = {
        fish1: balance1,
        fish2: balance2,
        fish3: balance3,
        fish4: balance4,
        fish5: balance5
    };

    const leaderboardStr = JSON.stringify(leaderboard);
    
    wss.on("connection", ws => {
    
        ws.send(leaderboardStr);
    });
    }


setInterval(getbalance1, 10000)








