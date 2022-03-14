import homeRoute from "./home";
import signupRoute from "./users/signup";
import loginRoute from "./users/login";
import logoutRoute from "./users/logout";
import profileRoute from "./users/profile";
import contentRoute from "./content";
import { adViewRoutes, adUpdateRoute, adDeleteRoute } from "./ads";
import adCreateRoute from "./ads/create";


const handleRoutes = (app: any) => {
  app.use('/', homeRoute);
  app.use('/users/', signupRoute);
  app.use('/users/', loginRoute);
  app.use('/users/', logoutRoute);
  app.use('/users/', profileRoute);
  app.use('/', contentRoute);
  app.use('/ads', adViewRoutes);
  app.use('/ads', adCreateRoute);
  app.use('/ads', adUpdateRoute);
  app.use('/ads', adDeleteRoute);
}

export default handleRoutes;