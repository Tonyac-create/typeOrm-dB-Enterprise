import { AppDataSource } from "../data-source"
import { Employee } from "../entity/Employee"
import { EmployeeInterface } from '../interface/EmployeeInterface';


export class EmployeeService {

    private employeeRepository = AppDataSource.getRepository(Employee)

    async all() {
        try {
            return await this.employeeRepository.find();
        }
        catch (error) {
            console.log("🚀 ~ file: UserService.ts:15 ~ UserService ~ all ~ error:", error)
        }
    }

    async one(id: number) {
        try {
            const employe = await this.employeeRepository.findOne(
                {
                    where: {
                        id: id,
                    }
                }
            );
            if (employe) return employe;

            return {
                success: 'ko',
                message: 'user not found'
            }
        }
        catch (error) {
            console.log("🚀 ~ file: UserService.ts:15 ~ UserService ~ all ~ error:", error)
        }
    }

    async create(body: EmployeeInterface) {
        try {
            const newEmployee = this.employeeRepository.create(body);
            return await this.employeeRepository.save(newEmployee);
        }
        catch (error) {
            return {
                success: 'ko',
                message: error.message
            }
        }
    }

    async remove(id: number) {
        try {
            const deleteEmployee = await this.employeeRepository.findOne(
                {
                    where: {
                        id: id,
                    }
                }
            );

            if (deleteEmployee) {
                console.log(deleteEmployee);
                
                return await this.employeeRepository.remove(deleteEmployee);
                
            } else {
                return {
                    success: 'ko',
                    message: 'enterprise not found'
                }
            }
        }  
        catch (error) {
            console.log("🚀 ~ file: UserService.ts:15 ~ UserService ~ all ~ error:", error)
        }
    }
}