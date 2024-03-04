import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Task } from "./task.entity"; // Importa la entidad Task

@Entity()
export class Subtask {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:false})
    completed: boolean;

    @ManyToOne(() => Task, task => task.subtasks)
    task: Task;
}
