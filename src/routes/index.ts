import { Router } from "express";

import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const routes = Router();

routes.get('/', PageController.Home);
routes.get('/dogs', PageController.Dogs);
routes.get('/cats', PageController.Cats);
routes.get('/fishes', PageController.Fishes);

routes.get('/search/:slug', SearchController.Search);


export default routes;