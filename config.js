//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://od.lk/d/NzhfNTk5OTc4MjVf/Mrsky.mp3";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ptechtanzania015@gmail.com";
global.location = "Iringa,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Mrsky02/Mrsky-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.website = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/504b26be1bb9cf690261b.jpg";
global.devs = "255715654328";
global.sudo = process.env.SUDO || "255715654328";
global.owner = process.env.OWNER_NUMBER || "255715654328";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ViaFI1RytRelJBYlR0NTkwVDRxMno0ZnhTSlR2N1NBeC9UVzZ2ZG9uUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0k5Y1lvdVBqODY1Rk42UFNBREVhQ3JlTkM3TEVhNEk4bkl4NXArc2tVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR3p6bG5Ma3JhN1pLN1JxemxadWJncC9lb0JFREUxMUJJRjgyQnVXUlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwaytMb2xpKy9TYmRBeEZ4WXBybGJQVStNUWNPYm5sYVVkVW1oS1g2SjNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPWHpIcEFMbUpCYjY5RE5MZ0RhQXUzSkNNY3ZhdFJSeG91eWE5M1V6Vms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJaWh0dHo0Sml5VUd2Y0ZpMVZSMlZVdWd3TTZZNnNvV2ZtR3VSWTVrREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xzN1N6QXF6OHo1aTFVRENPUlJFOTg5OFlhSTM1T0J3UUJtK2wxT0Mxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnBFTS9SaTFGanMvU01LSDVXMENaQXJLV3hjT1E0YXE1WEc3dEVuMVcwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpZRzBwRmYvV3h0d09GRGRjQ0xyZkxWOHp3ZEtnWVJMSzlkbUY2VmU2dW1hemFKOWZ1eHZMeTlhRk1MblRVNkNKRDAyV0E2WElKeWVhT0VTWFZGbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlRCZ1dTR0JPUk1LSUhnU3JHb1F2cWx5S3lWR3NkQlVXSm5LMWE5UkdzVW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzcyODIyNjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNCQkY3MEQ3RDkzMjAzM0FDOTEzMDYyMzk4REI1RjlBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA5Njg1OTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZRTlJ6d2FRUjI2NTJEQnJoU2lsbGciLCJwaG9uZUlkIjoiNThiMzgxZjctOTdjNC00ODE5LWE4ZTctYWRlNmQ3ZWEwNzhkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82bVp0YzV3V0pwNGk4em5RUWQzcnNkSm5Naz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ1lzQ2hIK2Q0WHBsMWlLVXZxZzlHYWtzT3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzYxUDVOTUYiLCJtZSI6eyJpZCI6IjI1NTc3MjgyMjYyMjozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV1RwNjBDRUlITHo3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIclNUN09lU0tIUFdNZkdvRjRsOGZzQ0RGdTBleXBQUk5uRk5uSjVIVGlVPSIsImFjY291bnRTaWduYXR1cmUiOiJnaE9GNGZqS09HbVpQZWZXdnRoMU11UGJ4bEJpT3AwdkpwZkJoZWZhWk92SmZFM2hva0xRMkxKbjZIWXMxZmNiVkswRDZvSEE3amF2Z3hOMnE0alVEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibEFURmFPVUhzajdtZ0NtTHlyZHNlUmN5WEhNcFd5WjlpWEhFbVlyOFFaMUxTaTlNSFNjeldvaVBZUHBQeEFEZ2Z5RGdVbnJHS0hpOGhaZWpWNHJIQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NzI4MjI2MjI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNjBrK3pua2loejFqSHhxQmVKZkg3QWd4YnRIc3FUMFRaeFRaeWVSMDRsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTY4NTkxfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "m",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " _Mrsky-Md-Whatsapp-Bot_ ",
  author: process.env.PACK_AUTHER || "MRSKY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRSKY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MRSKY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "http://,www.goog.com,https://,https://chat.whatsapp.com/,wa.me/,https://cutt.ly/,",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MRSKY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
