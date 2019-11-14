const { serverEvents, utilities } = require('hapi-ado-core-plugins'),
    ComponentLibrary = require(__dirname + '/plugins/componentLibrary/index'),
    Hapi = require('@hapi/hapi'),
    Inert = require('@hapi/inert'),
    pack = require(__dirname, '../package'),
    Vision = require('@hapi/vision'),
    port = process.env.PORT || 3005;

const server = new Hapi.Server({
    host: '0.0.0.0',
    port,
    router: {
        stripTrailingSlash: true
    }
    // debug: { request: ['error'] }
});

const main = async () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log('Server loading. Please wait... (>10 minutes to npm install all versions of all hpc packages)');
    }

    try {
        await server.register([
            Inert,
            Vision,
            {
                plugin: ComponentLibrary
            }
        ]);

    } catch(err) { console.error(err); }

    await server.start();
}

main().catch(console.error);
