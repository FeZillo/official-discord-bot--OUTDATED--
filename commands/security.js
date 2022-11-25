const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Reporta um membro.')
        .addUserOption(option =>
            option
            .setName('pessoa')
            .setDescription('O membro que será reportado.')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName("motivo")
            .setDescription('Motivo do report (em uma ou duas palavras).')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('provas')
            .setDescription('Se há provas ou prints que comprovem o report')
            .setRequired(true)
            .addChoice('Sim, tenho provas!', 'sim')
            .addChoice('Não tenho provas.', 'nao')
            ),
    
    async execute(interaction){
        const pessoa = interaction.options.getMember('pessoa');
        const motivo = interaction.options.getString('motivo');
        const provas = interaction.options.getString('provas');
        let channel = interaction.client.channels.cache.find(r => r.id === '945491082186227712');
        if (pessoa.id === interaction.user.id){
            await interaction.reply({content: "Você não pode se auto-reportar.", ephemeral: true});
            return;
        };
        if (provas === 'sim'){
            var embed = new MessageEmbed()
                .setColor('#000000')
                .setTitle('**REPORT!**')
                .setDescription(`**Pessoa:** ${pessoa.mention} \n**Motivo:** ${motivo} \n**Provas:** Sim, há provas!`)
        } else {
            var embed = new MessageEmbed()
                .setColor('#000000')
                .setTitle('**REPORT!**')
                .setDescription(`**Pessoa:** ${pessoa.mention} \n**Motivo:** ${motivo} \n**Provas:** Não há provas...`)
        };
        await channel.send({ embeds: [embed] });
        await interaction.reply('Reported!');
    }
};