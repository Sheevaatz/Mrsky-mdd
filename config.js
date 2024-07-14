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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RqZlNxTFQ1Zm5KVjg3RmIwd1BBbG1VNHgrcmNFU0JJS3VORUR1T1BVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmpYZ1UxRUVuQ3JNeCtLRjhieWJnZVd1THpFc1U0SzVmbGUyTUQyZHIzbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQW9RdzhneFlJSS9KNEV5cGdyck53blFGcXpHZWZhUFFkTktpVnUvZUhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqUDNwbkxDOXRyenRSa2VhWWhHSkZGUVNMV1NldGp2TmNCMXVmdEhuOVRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDME5Ec1ZDNWpoMk5jcFVJcnBpSzRsRXhMdlAvbFQ0M1lpK0VhRnRMR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhRQTExakxIWGhQVlZIbDlRUnRQZmdHaXI4SUFRVlM1V0RCMHZpZzlOV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxQL2JYYjhONVVYM1ZHdjRyVXFFVHB0WnE1eDRET2pONVVYa01pcFNsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzZ6ajRjeGs5REhpMm5vcy84ZFVwajMvalN1SjI1L2V2WFNwaEljTUYybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhqZjhzelhKQkcvY1ZRMU1OeVBmMnJnZTNXS2NERlZyK3BnVHFwZ2Z2dnFwUlM3d3hxMnRNc080a2JtQzNwN0xLU0t2SFdzUTY2Rk40V1dGaHpFS2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IndIV1BodHVld2gyYVQzOTB0ZEJDWDdkbzRacUN6c1FDVkZsczVVU2FlQkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhvcUpWWnhzUUxDR19hbW9WOXJlZUEiLCJwaG9uZUlkIjoiOTgyOWQ0MTYtMzBkOC00NjYxLTg1NTgtOGJmNzAzZjQxOGY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNc0grQTVsMnVpanpZT0dyS0RHMWNaZHBsTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MlcweVlpNkk3cXlXSmxpQm1SRFRFNzl3VWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzlHQkY5QVEiLCJtZSI6eyJpZCI6IjI1NTY3Nzc4MDgwMTozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTU9XNGZFQ0VMYW95N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTEF3dGxSRVFadUZUUEJPSjh4UGdDR1RtL0l0dzB4NVJJU1hrcEdqekpXdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVZnVHVDTmpXUmlFZlpsVjgxVVI1SG5VUFNhcXVwWlpuYitIU1BGNnRXMUJIWUJKR3prUUphYWc1ZUFSK29sNFExQllTRGVUTllXVWhZZGFhOGNTRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImdFUjdnMHUzTGpFN2JBOXJVc0kzaWdibTlMUE9CdUo4TWpmY1d4WkVVRlpUSDRRZ2svVGZtOEFGa3FGVVNGZk1PU1N6bThnSVNmemFMRERVM09jUmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njc3NzgwODAxOjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN3TUxaVVJFR2JoVXp3VGlmTVQ0QWhrNXZ5TGNOTWVVU0VsNUtSbzh5VnMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4OTg2MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0lXIn0="
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
