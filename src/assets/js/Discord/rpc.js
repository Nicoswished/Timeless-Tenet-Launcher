const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = 'TU_CLIENT_ID_AQUI';

RPC.register(clientId);

client.on('ready', () => {
    console.log(`✅ Conectado a Discord como ${client.user.username}`);

    client.setActivity({
        details: 'Explorando el launcher',
        state: 'Configurando Minecraft',
        startTimestamp: new Date(),
        largeImageKey: 'logo_grande', // nombre del asset subido
        largeImageText: 'Mi Launcher',
        smallImageKey: 'icono_pequeño',
        smallImageText: 'v1.0.0',
        buttons: [
            { label: 'Descargar Launcher', url: 'https://tusitio.com' },
            { label: 'Discord Oficial', url: 'https://discord.gg/tuserver' }
        ]
    });
});

client.login({ clientId }).catch(console.error);