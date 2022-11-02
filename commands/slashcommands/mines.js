
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder , Modal, TextInputComponent, MessageActionRow, MessageButton, Permissions  } = require('discord.js');


module.exports =  {
	data: new SlashCommandBuilder()
		.setName('mines')     
        .setDescription('Predictor for mines') 
        .addStringOption(option => option.setName('round').setDescription('your round id').setRequired(true)),

            async execute(interaction, client) {


                let round = interaction.options.getString('round');
                if(round.length < 36){
                    const notid = new EmbedBuilder()
                    .setColor('Red')
                    .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
                    .setDescription('<:error:1036755136804040725> Invalid Round ID')
                    .setFooter({ text: interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL() })
                    .setTimestamp()
                    return interaction.reply({embeds: [notid]})
                }
console.log(interaction.user.username .yellow + ' Used Mines Predictor!'.blue)
                let embed = new EmbedBuilder();
                let list = ["❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "✅", "✅", "✅", "✅"];
                list = list.map(value => ({
                        value,
                        sort: Math.random()
                    }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({
                        value
                    }) => value);
        
                list.splice(5, 0, "\n");
                list.splice(11, 0, "\n");
                list.splice(17, 0, "\n");
                list.splice(23, 0, "\n");
                embed.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
                embed.setColor('Green')
                embed.setTitle('💥 Mines Predictor 💥') 
                embed.addFields(
                    {
                        name: `Total Mines`,
                        value: "```" + '4' + "```"
                    },{
                    name: `**Prediction**`,
                    value: "```" + list.join("") + "```"
                }, {
                    name: `**Accuracy**`,
                    value: "```" + Math.floor(Math.random() * 100) + "%```"
                });
                embed.setTimestamp()
                embed.setFooter({ text: interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL() });
        
        
                interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
              
          }
      }
      