const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pix')
        .setDescription('Verifique a chave pix.')
        .addStringOption(option =>
            option
            .setName('tipo')
            .setDescription('O tipo da chave que deseja receber.')
            .setRequired(true)
            .addChoice('Email', 'email')
            .addChoice('Aleatória', 'aleatoria')),
    
    async execute(interaction) {
        const tipo = interaction.options.getString('tipo');
        if (tipo === 'email'){
            await interaction.reply('sofia.zillo42@gmail.com');
        } else {
            await interaction.reply('d6972b84-e10a-4cfd-9758-491952c24f7d');
        };
    }
    
    
};