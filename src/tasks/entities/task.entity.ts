import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Subtask } from "./subtask.entity"; 

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:false})
    completed: boolean;

    @OneToMany(() => Subtask, subtask => subtask.task) 
    subtasks: Subtask[];
}
