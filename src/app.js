const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const modulesPath = path.join(__dirname, 'modules');

fs.readdirSync(modulesPath).forEach((moduleName) => {
    const controllerPath = path.join(modulesPath, moduleName, 'controllers');
    if (fs.existsSync(controllerPath)) {
        fs.readdirSync(controllerPath).forEach((file) => {
            if (!file.endsWith('.js')) return;
            const fullPath = path.join(controllerPath, file);
            const controller = require(fullPath);
            const baseRoute = `/api/${moduleName}`;
            app.use(baseRoute, controller);
            // console.log(`✓ Loaded ${baseRoute} from ${file}`);
        });
    }
});

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});

module.exports = app;