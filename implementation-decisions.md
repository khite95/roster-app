## Runtime

This app is based on [create react app](https://github.com/facebookincubator/create-react-app), which has a lot to offer out of the box such as ES6, hot reloading, and clean error messages. I originally tried using parcel because it is bundled in the provided skeleton, but I ran into a few different issues running the e2e tests because of the way it bundled the modules in my solution. 

## State Management

[Redux](https://redux.js.org//) was chosen as the state management framework because its simple to understand and easy to test.

## Routing

[React router](https://github.com/ReactTraining/react-router) was chosen for the routing framework as it's the standard for routing in react apps. It was straightforward to implement and a good choice for handling the routing aspects required by the players app such as browing history and protected routes.

## UX and UI Design

A primary goal for this project was to produce a modern, clean design without spending too much time on this particular area. [Reactstrap](https://reactstrap.github.io//) was chosen in order to integrate bootstrap components in my react components, along with bootstrap 4 styling. Code was reused from some of the bootstrap samples in order to improve the look and feel. A third-party template named [Argon](https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html) was used to add a Google material-ui feel.

## Testing

I think that testing is an important part of application development. Unfortunately, I did not have as much time as I would have liked to focus on rigorous testing.  If I had more time I would’ve added unit tests for redux actions and reducers. I also would’ve added snapshot testing for react components that render data. I would have chosen [Jest](https://jestjs.io/) as my unit testing framework beacuse it's easy to use and bundled with create react app.