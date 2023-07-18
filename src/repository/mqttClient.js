import * as MQTT from "async-mqtt"
import {mqttConfig} from "../config/mqttConfig.js"

export const mqttClient = async () => await MQTT.connect(mqttConfig.url, mqttConfig.options)