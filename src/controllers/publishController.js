import {PublishUsecase} from "../usecase/publishUsecase.js";

export const PublishController = async (event, mqtt) => {
    console.log('inside controller');
    const mqttReq = JSON.parse(event.body)
    return await PublishUsecase(mqttReq, mqtt);
}