import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Employee } from './Employee'
import { Department } from './Department'

@Entity()
export class Enterprise {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Employee, (employee) => employee.enterprise)
    employees: Employee[]

    @OneToMany(() => Department, (department) => department.enterprise)
    departments: Department[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}