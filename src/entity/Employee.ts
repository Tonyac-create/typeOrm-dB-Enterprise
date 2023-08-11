
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  OneToOne, JoinColumn, ManyToOne  } from "typeorm"
import { Department } from "./Department";
import { Enterprise } from './Enterprise'

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @ManyToOne(() => Enterprise, (enterprise) => enterprise.employees)
    enterprise: Enterprise

    @OneToOne(() => Department)
    @JoinColumn()
    department: Department

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}