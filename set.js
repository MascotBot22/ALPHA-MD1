const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "keithkeizzah",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " keithkeizzah",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '𝐀𝐋𝐏𝐇𝐀-𝐌𝐃',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/0c351a67f1dffd1f34cf5.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
session_id='eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJoRlNGUnRuNVU2d2J3azVRVjM1RXF5bmRXYVphV2JaQUMwZGNKWWdWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2dJdFM4UVZOSFhpaWZNMUJSTS9uTDZRZGdXOUJxdXUyTm9SQ0xNWGYxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRDhqWXQrNW9pSE9vRDdyNUNMNDliSjlpVTNWazVDRHljT3o0NW5CRzJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2SzVCSC9oeHFHQ1ZnR1VQeFZVekN3SzIxNy9RVUw4MDNjamErNXdTNFZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKTXpTYXR0MG5FY1NDMWRvb1JpbldaOW44TnQ2RHpDZTB0c2JWdjdERmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhENjR3UHpPd2RVU0h1ZTNLQUpuM3VpbDQySnFobmNMS291MkoyUjQyeGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hVazROOEpHUjJzYTFvQW5YUTF4cmNxTGx2T0RCMzgzS0ZUZmU3Z2ptND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmU2UitYTHp5SUNzdkpNRnI2NDh2NjZ3SVcvT3NSVXFIRjdST1o0QzNuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRLQ25BVHZZNlpWei8vSFE5NHlkNFNpb2t3Q3VQKzFaTjFud05VNTNrVzJydFB1dW1nbHo0WDhVLzl5Vnk4TmFNNnAvV1hoNC9YMTIyL3RLYkRZVURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6ImVZclc4RjhseVVVeDBXeE9CLzZBVTFiWk95VGdONkpiVVdVV0JXNHYvZkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1na1RUZDJ4UmRHS0U0el9FNVJScXciLCJwaG9uZUlkIjoiZWU4NmUxMTktZjBhNi00NzkzLWExMmQtZjU4ZDMwMjRlNTA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMY1U5V1JCYmJGZG83Ky9BdkM4eStBSjlUST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVanF3ckh5Nk9tZnFCa0ljR3p2T0tlZ0xsc2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVERYM1czNDEiLCJtZSI6eyJpZCI6IjI1NTY1MzYwOTcxNDozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy9EKzlJRkVPR0tvclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlBqbDRheFJld0twZlQyMC9xM2lJRWZuSjhVZGFVRW5CYXJyaWJ3S1ZXaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHF2endjOEh0VVFGWEp0b0pWOGRNcVBWUTNuNllpN2Fvb01uUTNSY1hpYzdvNXdWdjFhYnM5czlrWDd0Y0pHUGJjalJMeUo4VlRxeG01M0RxaEdXRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im4wZEhnUXBGU2hUYWNOYWxZQ2kwUXFKVEs4TXE2c0xrcXBVanE5bHVYUXUwMVRjVUw5QzBEY2RDVXF6YVR0MEJ6bm9xY0FRcmk2TGVrdUZmZ3JodkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjUzNjA5NzE0OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRqNDVlR3NVWHNDcVgwOXRQNnQ0aUJINXlmRkhXbEJKd1dxNjRtOENsVnAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMjAyMzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ0JjIn0='
