const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('preco')
        .setDescription("Veja os preços dos produtos da loja.")
        .setDefaultPermission(true)
        .addStringOption(option => 
            option
            .setName("produto")
            .setDescription("O produto que deseja ver o preço.")
            .setRequired(true)
            .addChoice("Coins", 'coins')
            .addChoice("Bots", 'bots')
            .addChoice("Cursos", 'cursos')
            .addChoice("Treinos", 'treinos')
            .addChoice("Scripts", 'scripts')
            .addChoice("V.I.P.", "vip")
            .addChoice("Contas", 'contas')),
    async execute(interaction) {
        const produto = interaction.options.getString('produto')
        if (produto === "coins"){
            const embed = new MessageEmbed()
                .setColor('#000000')
                .setTitle("**Amino Coins**")
                .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                .setDescription('**20.000:** `R$5,00` \n**50.000:** `R$10,00` \n**100.000:** `R$20,00` \n**200.000:** `R$30,00` \n**300.000:** `R$40,00`\n**400.000:** `R$50,00` \n**500.000:** `R$60,00` \n**1.000.000:** `R$100,00` \n**1.500.000:** `R$150,00` \n**2.000.000:** `R$180,00`')
                .setTimestamp()
                .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else if (produto === "bots"){
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle("**Bots de Discord**")
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription(`Faço bots personalizados para o seu servidor do discord. 
                    Quanto ao preço depende da complexidade dos comandos, porém tenho uma 'base' aqui:
                    
                    **Comandos/Tasks Simples:** R$1,00 cada
                    **Comandos/Tasks Médias:** R$5,00 cada
                    **Comandos/Tasks Complexas:** R$10,00+

                    **Requisição de DataBase:** +R$10,00
                    `)
                    .setTimestamp()
                    .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                    .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else if (produto === "cursos"){
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle("**Cursos**")
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription(`
                    **Python:**

                    https://drive.google.com/file/d/1lSpvhZcHR81KGYjSntIwij7D1e4JM568/view?usp=sharing
                    
                    Curso Python (12 módulos) --> R$20,00 (gravado) / R$30,00 (por call)
                    Metade Curso Python (6 módulos) --> R$10,00 (gravado) / R$15,00 (por call)
                    Módulo (cada módulo individualmente) --> R$3,00 / R$4,00 (por call)
                    `)
                    .setTimestamp()
                    .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                    .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else if (produto === "treinos"){
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle("**Treinos de Academia**")
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription(`
                    Faço treinos de academia personalizado para seu objetivo!
                    
                    Basta me informar o objetivo, os dias da semana em que pratica exercícios e os equipamentos disponíveis.
                    
                    Treino em casa --> R$20,00
                    Treino em academia --> R$10,00
                    `)
                    .setTimestamp()
                    .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                    .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else if (produto === 'vip'){
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle("**V.I.P.**")
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription(`O VIP está saindo por R$20,00/mês
                
                    Quais são as vantagens de ser VIP?
                    1 - Scripts a preço de custo;
                    2 - Bots personalizados 75% mais baratos;
                    3 - Participe de sorteios de valores altos;
                    4 - Ganhe treinos de academia para seu objetivo;
                    5 - Daily coins (10.000) + weekly coins (100.000).`)
                    .setTimestamp()
                    .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                    .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else if (produto === "scripts") {
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle("**Scripts**")
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription(`**Gerador Experimental:** --> R$220 Lifetime / R$55 Mensais / R$30 Semanal / R$15 Diario
                    **Gerador Antigo:** --> R$90 Lifetime / R$35 Mensais / R$20 Semanal / R$10 Diario
                    **Transferidor Massivo:** --> R$90 Lifetime / R$35 Mensal / R$20 Semanal / R$10 Diario`)
                    .setTimestamp()
                    .setFooter({text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg"})
                    .setThumbnail('attachment://gotica.jpeg');
            await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            } else {
                const embed = new MessageEmbed()
                    .setColor('#000000')
                    .setTitle('**CONTAS**')
                    .setAuthor({name: "Zvê's Store", iconURL: "attachment://zve.jpeg", url: "https://discord.gg/BhxtxRCPm8"})
                    .setDescription('**100:** `R$9,00`  \n **500:** `R$45,00` \n**1.000:** `R$75,00`')
                    .setTimestamp()
                    .setFooter({ text: "Lojinha da Zvê", iconURL: "attachment://zve.jpeg" })
                    .setThumbnail('attachment://gotica.jpeg');
                await interaction.reply({ embeds: [embed], files: ['./images/gotica.jpeg', './images/zve.jpeg']})
            };
    }
};