const getLogs = async () => {
    try {
        let result = {
            id: 1,
            user_id: 1,
            message: 'Log Test',
            created_at: 'timestamp',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getLogs
};