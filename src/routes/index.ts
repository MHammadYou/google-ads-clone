import homeRoute from "./home";
import dashboardRoute from "./dashboard";
import signupRoute from "./users/signup";
import loginRoute from "./users/login";
import logoutRoute from "./users/logout";
import profileRoute from "./users/profile";
import changeUsernameRoute from "./users/change-username";
import changePasswordRoute from "./users/change-password";
import iframeRoutes from "./get-iframe";
import { adViewRoutes, adCreateRoute, adUpdateRoute, adDeleteRoute } from "./ads";

import express from "express";

const handleRoutes = (app: express.Express) => {
  app.use('/', homeRoute);
  app.use('/', dashboardRoute);
  app.use('/users/', signupRoute);
  app.use('/users/', loginRoute);
  app.use('/users/', logoutRoute);
  app.use('/users/', profileRoute);
  app.use('/users/', changeUsernameRoute);
  app.use('/users/', changePasswordRoute);
  app.use('/get-iframe/', iframeRoutes);
  app.use('/ads', adViewRoutes);
  app.use('/ads', adCreateRoute);
  app.use('/ads', adUpdateRoute);
  app.use('/ads', adDeleteRoute);

  app.use((req, res) => {
    res.status(404).send("Not found")
  });
}

export default handleRoutes;