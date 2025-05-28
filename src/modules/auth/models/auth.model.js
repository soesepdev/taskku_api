const login = async () => {
    try {
        let result = {
            id: 1,
            name: 'Auth Test',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    login
};