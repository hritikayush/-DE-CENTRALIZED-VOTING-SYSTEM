const routes = require('next-routes')();   //returns a function

routes
    .add('/events/new', '/events/new')
    .add('/events/:address', '/events/show')
    .add('/events/:address/teams', '/events/teams/index')
    .add('/events/:address/teams/new', '/events/teams/new')
    .add('/events/:address/teams/winner', '/events/teams/winner')

module.exports = routes;

