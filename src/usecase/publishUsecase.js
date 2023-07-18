export const PublishUsecase = async (event, mqtt) => {
    try {
        console.log('inside PublishUsecase');
        console.log(event);
        await mqtt.publish(`Soundbox/${event.DeviceID}`, JSON.stringify(event));
        return {status: 1}
    } catch (error) {
        console.log(`error occurred , ${error}`);
        throw new Error('Error occurred');
    }
}