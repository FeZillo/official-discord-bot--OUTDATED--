const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    return str.join(' '); 
}}

var id = 22
module.exports = {
    data: new SlashCommandBuilder()
        .setName("vender")
        .setDescription('Registra uma venda realizada.')
        .addStringOption(option =>
            option
            .setName('produto')
            .setDescription('O produto que foi vendido.')
            .setRequired(true)
            .addChoice("Coins", 'coins')
            .addChoice("Bots", 'bots')
            .addChoice("Cursos", 'cursos')
            .addChoice("Treinos", 'treinos')
            .addChoice("Scripts", 'scripts')
            .addChoice("V.I.P.", "vip")
            .addChoice("Contas", 'contas'))
        .addStringOption(option =>
            option
            .setName('quantia')
            .setDescription('A quantia exata de produtos vendidos.')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('valor')
            .setDescription('O valor que foi pago.')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('indicador')
            .setDescription('A pessoa que indicou.')
            .setRequired(true)),
    async execute(interaction){
        const produto = interaction.options.getString('produto')
        var data = new Date();

        var dia     = data.getDate();           // 1-31
        var dia_sem = data.getDay();            // 0-6 (zero=domingo)
        var mes     = data.getMonth();          // 0-11 (zero=janeiro)
        var ano2    = data.getYear();           // 2 dígitos
        var ano4    = data.getFullYear();       // 4 dígitos
        var hora    = data.getHours();          // 0-23
        var min     = data.getMinutes();        // 0-59
        var seg     = data.getSeconds();        // 0-59
        var mseg    = data.getMilliseconds();   // 0-999
        var tz      = data.getTimezoneOffset(); // em minutos

        var str_data = dia + '/' + (mes+1) + '/' + ano4;
        var str_hora = hora + ':' + min + ':' + seg;

        const quantia = interaction.options.getString('quantia')
        const valor = interaction.options.getString('valor')
        const indicador = interaction.options.getString('indicador')
        if (!interaction.member.roles.cache.has('945348848132427866')){
            await interaction.reply({content: "Você não tem permissão para utilizar esse comando.", ephemeral: true});
            return;
        };
        const embed = new MessageEmbed()
            .setColor('#000000')
            .setTitle(`**VENDA**`)
            .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
            .setDescription(`**id:** ${id.toString()} \n**Produto:** ${titleCase(produto)} \n**Quantia:** ${quantia.toString()} \n**Valor:** R$${valor.toString()} \n**Indicação:** ${indicador} \n**Data:** ${str_data} (${str_hora})`)

        id += 1;
        await interaction.reply({ embeds: [embed], files: ["./images/zve.jpeg"] });
    }
}