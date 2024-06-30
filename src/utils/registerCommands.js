
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const settings = require("../settings.json")
const commands = [
  {
    name: 'reg',
    description: 'Зарегистрироваься на сервере',
    options: [
        {
            name: 'username',
            description: 'Ваш ник на сервере',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ]
  },
  {
    name: 'delete_user',
    description: '[ADMIN] Удалить пользователя',
    options: [
        {
            name: 'target',
            description: 'Ник пользователя, которого нужно удалить',
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ]
  },
  {
    name: 'change_password',
    description: 'Изменить пароль',
  },
  {
    name: 'skin',
    description: 'Загрузить скин',
    options: [
      {
        name: 'skin',
        description: 'Добавьте .png версию своего скина. Допустимы форматы 64x64 и 32x64',
        type: ApplicationCommandOptionType.Attachment,
        required: true
      }
    ]
  },
  {
    name: 'cloak',
    description: 'Загрузить плащ',
    options: [
      {
        name: 'cloak',
        description: 'Добавьте .png версию своего плаща. Допустимы форматы 64x64 и 32x64',
        type: ApplicationCommandOptionType.Attachment,
        required: true
      }
    ]
  },
  {
    name: 'user',
    description: 'Вывести информацию о пользователе',
  },
];

const rest = new REST({ version: '10' }).setToken(settings.discord.token);

(async () => {
  try {

    await rest.put(
      Routes.applicationGuildCommands(
          settings.discord.bot_id,
          settings.discord.guild_id
      ),
      { body: commands }
    );

  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
})();