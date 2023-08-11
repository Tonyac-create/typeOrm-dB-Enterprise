import { NextFunction, Request, Response } from "express"
import { EmployeeService } from '../service/EmployeeServices';

export class EmployeeController {

    private employeeeService = new EmployeeService();

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.employeeeService.all();
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.employeeeService.one(+request.params.id);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }   


    async save(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.employeeeService.create(request.body);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.employeeeService.remove(+request.params.id);
        }
        catch (error) {
            console.log("🚀 ~ file: UserController.ts:13 ~ UserController ~ all ~ error:", error)
        }
    }
}