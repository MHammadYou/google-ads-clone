import homeRoute from "./home";
import signupRoute from "./users/signup";
import loginRoute from "./users/login";
import logoutRoute from "./users/logout";
import profileRoute from "./users/profile";
import changeUsernameRoute from "./users/change-username";
import changePasswordRoute from "./users/change-password";
import contentRoute from "./content";
import { adViewRoutes, adCreateRoute, adUpdateRoute, adDeleteRoute } from "./ads";

const handleRoutes = (app: any) => {
  app.use('/', homeRoute);
  app.use('/users/', signupRoute);
  app.use('/users/', loginRoute);
  app.use('/users/', logoutRoute);
  app.use('/users/', profileRoute);
  app.use('/users/', changeUsernameRoute);
  app.use('/users/', changePasswordRoute);
  app.use('/', contentRoute);
  app.use('/ads', adViewRoutes);
  app.use('/ads', adCreateRoute);
  app.use('/ads', adUpdateRoute);
  app.use('/ads', adDeleteRoute);
}

export default handleRoutes;