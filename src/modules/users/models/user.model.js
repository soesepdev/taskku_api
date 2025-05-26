const getUsers = async () => {
    try {
        let result = {
            id: 1,
            fullname: 'Fullname Test',
            email: 'Email Test',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getUsers
};