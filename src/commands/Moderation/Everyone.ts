/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "everyone",
			description: "Tags all users in group chat",
			aliases: ["all", "tagall", "ping"],
			category: "moderation",
			usage: `${client.config.prefix}everyone`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide a Message to tag.`));
		const term = joined.trim();
		const gifs = [		
			"https://c.tenor.com/XVLRX-3bx6MAAAPo/lisa-cute.mp4",
		];

	        const selected = gifs[Math.floor(Math.random() * gifs.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const gif = await axios
			.get(
				`https://g.tenor.com/v1/search?q=${selected}&key=${this.client.config.gifApi}&limit=100`
			)
			.catch(() => null);
		
		return void (await M.reply(
			{ url: selected },
				MessageType.video,
				Mimetype.gif,
				M.groupMetadata?.participants.map((user) => user.jid)
		));
	                
	} else
		return void (await M.reply(
				`${
					M.groupMetadata?.subject || "*EVERYONE*"
				}\n*READ QUOTED MESSAGE*\n*[TAGGED MAGICALLY]*`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
	        };
}
