
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder , Modal, TextInputComponent, MessageActionRow, MessageButton, Permissions  } = require('discord.js');


module.exports =  {
	data: new SlashCommandBuilder()
		.setName('crash')     
        .setDescription('Predictor for crash'),

            async execute(interaction, client) {
                function UoA() {
                    var rand = ['Under','Above'];
                    return rand[Math.floor(Math.random()*rand.length)];
                }
                function Crash() {
                    var rating = Math.floor((Math.random() * 25) + 10) /10;
                    return rating;
                }
                function Accuracy() {
                    var rating = Math.floor((Math.random() * 50) + 50);
                    return rating;
                }

              
console.log(interaction.user.username .yellow + ' Used Crash Predictor!'.blue)

                let embed = new EmbedBuilder();
                embed.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
                embed.setColor('Green')
                embed.setTitle('🚀 Crash Predictor 🚀') 
                embed.addFields(
                    {
                    name: `**Prediction**`,
                    value: "```" + `${UoA()} ` + Crash() + "```"
                }, {
                    name: `**Accuracy**`,
                    value: "```" + Accuracy() + "%```"
                });
                embed.setTimestamp()
                embed.setFooter({ text: interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL() });
        
        
                interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
              
          }
      }
      