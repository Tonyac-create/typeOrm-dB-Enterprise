import { NextFunction, Request, Response } from "express"
import { EnterpriseService } from '../service/enterpriseServices';

export class EnterpriseController {

    private enterpriseService = new EnterpriseService();

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.enterpriseService.all();
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.enterpriseService.one(+request.params.id);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }   


    async save(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.enterpriseService.create(request.body);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.enterpriseService.remove(+request.params.id);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }

}