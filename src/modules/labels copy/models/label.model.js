const getLabels = async () => {
    try {
        let result = {
            id: 1,
            user_id: 1,
            task_id: 1,
            name: 'Label Test',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getLabels
};