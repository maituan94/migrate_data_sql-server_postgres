import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "int" })
  status: number;

  @ManyToOne(type => User, user => user.todos, {
    cascade: true,
    onDelete: "CASCADE"
  })
  user: User;
}
