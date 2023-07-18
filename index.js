import {PublishController} from "./src/controllers/publishController.js";
import {mqttClient} from "./src/repository/mqttClient.js";
let cachedMQTT = null;

/*******************MQTT************************/
const connectMQTT = async () => {
    console.log('In side Connect Redis');
    if (cachedMQTT) {
        console.log('using cached MQTT instance');
        return cachedMQTT;
    }
    const client = await mqttClient()
    cachedMQTT =client
    return cachedMQTT;
};
export const handler = async (event) => {
    return await PublishController(event, await connectMQTT()).then(res => {
        if (res.status) {
            return {
                statusCode: 200,
                body: JSON.stringify(
                    {
                        message: 'Success'
                    },
                    null,
                    2
                ),
            };
        }
    }).catch((e) => {
        return {
            statusCode: e.statusCode || 500,
            body: JSON.stringify({
                message: e.message || e
            })
        };
    });
};
