const config = require('../config.json')
const { EmbedBuilder } = require('discord.js')
module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if (!interaction.guild || interaction.user.bot) return;
/*
	var whitelistedChannel = false;
	if (config.channel.length > 0) {
		for (i = 0; i < config.channel.length; i++) {
			if (config.channel[i] === interaction.channel.id) {
				whitelistedChannel = true;
			};
		};
	} else {
		whitelistedChannel = true;
	};
	if (!whitelistedChannel) {

		const nochannel = new EmbedBuilder()
		.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
		.setColor('#e6532a')
		.setDescription('<:error:1024826053908234310> You cannot use commands on this channel')
		.setTimestamp()
		.setFooter({ text: interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL() });
		  return interaction.reply({embeds: [nochannel]})
	};
	*/
		
		if (interaction.isCommand()) {

			const command = client.commands.get(interaction.commandName);
			if (!command) return;

			try {
				await command.execute(interaction, interaction.client);
			} catch (error) {
				console.log(`${error}`);
				await interaction.reply(
					{
						content: 'An unexpected error occurred report in <#1015213311740100638>',
						ephemeral: true
					}
				);
			}
		}
    }
}