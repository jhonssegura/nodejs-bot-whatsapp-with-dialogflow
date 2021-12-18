const Arena = require('bull-arena');
const { firstClient } = require('./queues');
// const barRoutes = require('./src/bar/routes');
const firstClientRoutes = require('./src/firstClient/routes');
// const firstClientRoutes = require('./routes/chat');

module.exports = (app, port, queues) => {

    const arenaConfig = Arena({
        queues,
      },
      {
        // Make the arena dashboard become available at {my-site.com}/arena.
        basePath: '/arena',
      
        // Let express handle the listening.
        disableListen: true,
      }
    );
      
    // Make arena's resources (js/css deps) available at the base app route
    app.use('/', arenaConfig);
    // barRoutes(app);
    firstClientRoutes(app);

    app.listen(port, () => {
        console.log('Queue Server on port', port)
    });
};