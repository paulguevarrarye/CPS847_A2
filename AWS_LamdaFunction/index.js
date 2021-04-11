exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        output: event.first_name.concat(" "+ event.last_name)  ,
    };
    return response;
};
