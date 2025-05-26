const getStatus = async () => {
    try {
        let result = {
            id: 1,
            user_id: 1,
            name: 'Status Name Test',
            icon_id: 1,
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getStatus
};