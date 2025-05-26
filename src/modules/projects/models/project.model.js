const getProjects = async () => {
    try {
        let result = {
            id: 1,
            user_id: 1,
            name: 'Project Name Test',
        };
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getProjects
};