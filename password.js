const { ReadStream } = require("fs");
const { stringify } = require("querystring");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question('Welcome to the password validator! What is your password?', function(input){
    if (input.length >= 10) {
        console.log(' _______ __   __ ___ _______   ___ _______   _______   _______ _______ ______   _______ __    _ _______   _______ _______ _______ _______ _     _ _______ ______   ______  \n' +
        '|       |  | |  |   |       | |   |       | |   _   | |       |       |    _ | |       |  |  | |       | |       |   _   |       |       | | _ | |       |    _ | |      | \n' +
        '|_     _|  |_|  |   |  _____| |   |  _____| |  |_|  | |  _____|_     _|   | || |   _   |   |_| |    ___| |    _  |  |_|  |  _____|  _____| || || |   _   |   | || |  _    |\n' +
        '  |   | |       |   | |_____  |   | |_____  |       | | |_____  |   | |   |_||_|  | |  |       |   | __  |   |_| |       | |_____| |_____|       |  | |  |   |_||_| | |   |\n' +
        '  |   | |       |   |_____  | |   |_____  | |       | |_____  | |   | |    __  |  |_|  |  _    |   ||  | |    ___|       |_____  |_____  |       |  |_|  |    __  | |_|   |\n' +
        '  |   | |   _   |   |_____| | |   |_____| | |   _   |  _____| | |   | |   |  | |       | | |   |   |_| | |   |   |   _   |_____| |_____| |   _   |       |   |  | |       |\n' +
        '  |___| |__| |__|___|_______| |___|_______| |__| |__| |_______| |___| |___|  |_|_______|_|  |__|_______| |___|   |__| |__|_______|_______|__| |__|_______|___|  |_|______| \n');
    }
    else {
        console.log (' __   __ _______ __   __ ______     _______ _______ _______ _______ _     _ _______ ______   ______    ___ _______   _     _ _______ _______ ___   _ __  \n'+
        '|  | |  |       |  | |  |    _ |   |       |   _   |       |       | | _ | |       |    _ | |      |  |   |       | | | _ | |       |   _   |   | | |  | \n' +
        '|  |_|  |   _   |  | |  |   | ||   |    _  |  |_|  |  _____|  _____| || || |   _   |   | || |  _    | |   |  _____| | || || |    ___|  |_|  |   |_| |  | \n' +
        '|       |  | |  |  |_|  |   |_||_  |   |_| |       | |_____| |_____|       |  | |  |   |_||_| | |   | |   | |_____  |       |   |___|       |      _|  | \n' +
        '|_     _|  |_|  |       |    __  | |    ___|       |_____  |_____  |       |  |_|  |    __  | |_|   | |   |_____  | |       |    ___|       |     |_|__| \n' +
        '  |   | |       |       |   |  | | |   |   |   _   |_____| |_____| |   _   |       |   |  | |       | |   |_____| | |   _   |   |___|   _   |    _  |__  \n' +
        '  |___| |_______|_______|___|  |_| |___|   |__| |__|_______|_______|__| |__|_______|___|  |_|______|  |___|_______| |__| |__|_______|__| |__|___| |_|__| \n')
    }

    reader.close() 
});