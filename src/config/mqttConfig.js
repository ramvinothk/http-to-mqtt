const env = process.env['STAGE'] || 'dev';

const dev = {
    options: {
        username: "",
        password: "",   // We can use AWS SSM
        clean: true
    },
    url: 'mqtt://broker.mqttdashboard.com:1883',
};

const prd = {
    options: {
        username: "",
        password: "",  // We can use AWS SSM
        clean: true
    },
    url: 'mqtt://broker.mqttdashboard.com:1883',
};

const config = {
    dev,
    prd,
};

export const mqttConfig = config[`${env.toLowerCase()}`]
    ? config[`${env.toLowerCase()}`]
    : config['dev'];
