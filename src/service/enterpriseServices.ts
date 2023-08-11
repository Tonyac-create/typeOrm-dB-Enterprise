import { AppDataSource } from "../data-source"
import { Enterprise } from "../entity/Enterprise"
import { EnterpriseInterface } from '../interface/EnterpriseInterface';


export class EnterpriseService {

    private enterpriseRepository = AppDataSource.getRepository(Enterprise)

    async all() {
        try {
            return await this.enterpriseRepository.find();
        }
        catch (error) {
            console.log("🚀 ~ file: UserService.ts:15 ~ UserService ~ all ~ error:", error)
        }
    }

    async one(id: number) {
        try {
            const enterprise = await this.enterpriseRepository.findOne(
                {
                    where: {
                        id: id,
                    }
                }
            );
            
            if (enterprise) return enterprise;

            return {
                success: 'ko',
                message: 'user not found'
            }
        }
        catch (error) {
            console.log("🚀 ~ file: UserService.ts:15 ~ UserService ~ all ~ error:", error)
        }
    }

    async create(body: EnterpriseInterface) {
        try {
            const newEnterprise = this.enterpriseRepository.create(body);
            return await this.enterpriseRepository.save(newEnterprise);
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
            const deleteEnterprise = await this.enterpriseRepository.findOne(
                {
                    where: {
                        id: id,
                    }
                }
            );

            if (deleteEnterprise) {
                console.log(deleteEnterprise);
                
                return await this.enterpriseRepository.remove(deleteEnterprise);
                
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