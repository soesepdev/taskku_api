const getIcons = async () => {
    try {
        let result = {
            id: 1,
            name: 'Name Test',
            icon: 'Icon Test',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getIcons
};