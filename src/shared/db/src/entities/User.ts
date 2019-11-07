import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "./Todo";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "char", length: "50", nullable: false })
  email: string;

  @Column({ type: "varchar", length: "50", nullable: false })
  firstname: string;

  @Column({ type: "varchar", length: "50", nullable: false })
  lastname: string;

  @OneToMany(type => Todo, todo => todo.user, {
    cascade: ["insert", "update"]
  })
  todos: Todo[];
}
