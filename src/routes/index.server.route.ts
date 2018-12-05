import { Express } from "express";
import { indexController } from "../controllers/index.server.controller";
import { testController } from "../controllers/test.controller";

export default class IndexRoute {
	constructor(app: Express) {
		app.route("/")
			.get(indexController.index);
		app.route("/msg")
			.get(indexController.msg);
		app.route("/test")
			.get(testController.index);
	}
}