/** @format */


import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}lisa`,
		        dm: true,
                        aliases: ['h','?','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const lisa = 
			"https://c.tenor.com/dE_Ph_z5kz0AAAPo/anime-pink-hair.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: lisa },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🎀ᴀɴɴʏᴇᴏɴɢʜᴀꜱᴇʏᴏ' !

🪆 𝐇𝐞𝐲𝐚! 𝐈'𝐦 *Lisa Manoban* , 𝐞𝐧𝐣𝐨𝐲 𝐮𝐬𝐢𝐧𝐠 𝐦𝐲 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬..! 
🎋 𝐇𝐞𝐫𝐞 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐋𝐢𝐬𝐭𝐞𝐝 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 : -

🎊 𝐅𝐔𝐍 🎊

🔖 ғᴀᴄᴛ  
🔖 ǫᴜᴏᴛᴇ
🔖 ғǫᴜᴏᴛᴇ      
🔖 ᴡʜʏ
🔖 ᴊᴏᴋᴇ        
🔖 ᴛʀɪɢɢᴇʀ
🔖 ᴀᴅᴠɪᴄᴇ
🔖 ᴀᴋᴀᴛꜱᴜᴋɪ
🔖 ɢᴀʏ
🔖 ᴊᴀɪʟ
🔖 ʀɪᴘ
🔖 ꜱʜɪᴘ
🔖 ᴛʀᴀꜱʜ
🔖 ᴡᴀɴᴛᴇᴅ
🔖 ʟɪꜱᴀ
🔖 ᴄɪʀᴄʟᴇ
🔖 ᴅᴀʀᴇ
🔖 ᴍᴇᴍᴇ
🔖 ᴛʀᴜᴛʜ

⛩️ 𝐖𝐄𝐄𝐁 ⛩️

🏷️ ᴡᴀɪғᴜ            
🏷️ ɴᴇᴋᴏ
🏷️ ᴀɴɪᴍᴇ      
🏷️ ʟᴏʟɪ
🏷️ ʀᴘᴀᴘᴇʀ          
🏷️ ᴋɪᴛsᴜɴᴇ
🏷️ ᴀɴɪᴍᴇᴘᴀᴘᴇʀ
🏷️ ᴀɴɪᴍᴇQᴜᴏᴛᴇ
🏷️ ᴀɴɪᴍᴇᴍᴇᴍᴇ
🏷️ ɢᴇɴ𝐬ʜɪɴ ᴄʜᴀʀᴀᴄᴛᴇʀ
🏷️ ᴄʜᴀʀᴀᴄᴛᴇʀ
🏷️ ᴄʀᴏꜱꜱᴘʟᴀʏ
🏷️ ʜᴀɪɢᴜꜱʜᴀ
🏷️ ᴍᴀɴɢᴀ
🏷️ ᴘᴏᴋᴇᴍᴏɴ
🏷️ ʀᴇᴄᴏᴍᴍᴇɴᴅ
🏷️ ɪɴꜰᴏᴡᴀɪꜰᴜ
🏷️ ᴡᴀʟʟᴘᴀᴘᴇʀ

🎐 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 🎐

♐ ᴀᴅᴍɪɴs               
♐ ᴍᴏᴅs
♐ ᴘʀᴏғɪʟᴇ        
♐ xᴘ
♐ ᴄʜᴀᴛ
♐ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
♐ ʜɪ
♐ ɪɴꜰᴏ
♐ ʀᴜʟᴇꜱ
♐ ꜱᴜᴘᴘᴏʀᴛ

🎼 𝐌𝐄𝐃𝐈𝐀 🎼

🎶 ʟʏʀɪᴄs     
🎶 sᴘᴏᴛɪғʏ
🎶 ʏᴛᴀᴜᴅɪᴏ         
🎶 ʏᴛᴠɪᴅᴇᴏ
🎶 ʏᴛꜱᴇᴀʀᴄʜ         
🎶 ᴘʟᴀʏ
🎶 ɪɢᴜꜱᴇʀ
🎶 ᴋᴀʀᴀᴏᴋᴇ
🎶 ɪɢ
🎶 ɪɢᴘʀ
🎶 ᴘɪɴ
🎶 ʏᴛᴍᴘ3

📃 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐕𝐄 📃

⛓️ ʙʀᴀɪɴʟʏ          
⛓️ ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
⛓️ ᴄʀʏᴘᴛᴏ
⛓️ ᴄᴏᴠɪᴅ  
⛓️ ᴡᴇᴀᴛʜᴇʀ
⛓️ ᴇʟᴇᴍᴇɴᴛ
⛓️ ᴛʀɪᴠɪᴀ
⛓️ ɪᴘ
⛓️ ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ

📯 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐈𝐎𝐍 📯

📍ᴀᴄᴛɪᴠᴀᴛᴇ     
📍ᴄʟᴏsᴇ
📍ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ   
📍ᴏᴘᴇɴ
📍ᴅᴇᴍᴏᴛᴇ        
📍ᴘᴜʀɢᴇ
📍ᴘʀᴏᴍᴏᴛᴇ       
📍ʀᴇᴍᴏᴠᴇ
📍ᴀᴅᴅ
📍ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ
📍ʀᴇᴠᴏᴋᴇ
📍ᴅᴇʟᴇᴛᴇ
📍ᴇᴠᴇʀʏᴏɴᴇ

⚠️ 𝐍𝐒𝐅𝐖 ⚠️

🀄 ʙʟᴏᴡᴊᴏʙ    
🀄 ɴsғᴡᴋɪᴛꜱᴜɴᴇ
🀄 ɴsғᴡʟᴏʟɪ  
🀄 ɴsғᴡᴘᴀᴘᴇʀ
🀄 ɴsғᴡɴᴇᴋᴏ
🀄 ɴsғᴡᴡᴀɪꜰᴜ
🀄 ᴘᴜꜱꜱʏ
🀄 ᴛʜɪɢʜꜱ
🀄 ᴀɴᴀʟ
🀄 ᴍᴀɪᴅ
🀄 ʜꜱᴇᴀʀᴄʜ
🀄 ɴʜᴇɴᴛᴀɪ
🀄 ʀʜᴇɴᴛᴀɪ
🀄 ᴍᴀɪᴅ
🀄 ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ


🎭 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 🎭

🎗️ ʙɪᴛᴇ        
🎗️ ʜɪɢʜғɪᴠᴇ
🎗️ ʙʟᴜsʜ       
🎗️ sᴍᴜɢ
🎗️ ʙᴏɴᴋ        
🎗️ ʜᴜɢ
🎗️ ʙᴜʟʟʏ       
🎗️ ᴋɪᴄᴋ
🎗️ ᴄʀɪɴɢᴇ      
🎗️ ᴋɪʟʟ
🎗️ ᴄʀʏ         
🎗️ ᴋɪss
🎗️ ᴄᴜᴅᴅʟᴇ      
🎗️ ʟɪᴄᴋ
🎗️ ᴅᴀɴᴄᴇ       
🎗️ ᴘᴀᴛ
🎗️ ᴇᴀᴛ         
🎗️ ᴘᴏᴋᴇ
🎗️ ʜᴀɴᴅʜᴏʟᴅ    
🎗️ sʟᴀᴘ
🎗️ ʜᴀᴘᴘʏ       
🎗️ sᴍɪʟᴇ
🎗️ ᴜʟᴛʀᴀʜᴜɢ    
🎗️ ᴡᴀᴠᴇ
🎗️ ᴡɪɴᴋ        
🎗️ ʏᴇᴇᴛ

🪦 𝐔𝐓𝐋𝐈𝐒 🪦

⏳ ʙʟᴜʀ    
⏳ sᴛɪᴄᴋᴇʀ
⏳ sᴛᴇᴀʟ   
⏳ sᴜʙʀᴇᴅ
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳
⏳

🖥️ 𝐃𝐄𝐕 🖥️

💻 ʙᴀɴ
💻 ᴅɪ𝐬ᴀʙʟᴇ
💻 ᴇɴᴀʙʟᴇ
💻 ᴇᴠᴀʟ
💻 ʟᴇᴀᴠᴇ
💻 sᴛᴀᴛᴜs
💻 ᴜɴʙᴀɴ
 
𓊈𒆜𝐋𝐢𝐬𝐚-𝐁𝐨𝐭𒆜𓊉`,
			}
		);
	};
}  
