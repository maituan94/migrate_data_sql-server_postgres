import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", nullable: false, unique: true })
  BusinessEntityID: number;

  @Column({ type: "char", length: "2", nullable: false })
  PersonType: string;

  @Column({ type: "boolean", default: false, nullable: false })
  NameStyle: boolean;

  @Column({ type: "varchar", length: "8", nullable: true })
  Title: string;

  @Column({ type: "varchar", length: "50", nullable: false })
  FirstName: string;

  @Column({ type: "varchar", length: "50", nullable: true })
  MiddleName: string;

  @Column({ type: "varchar", length: "50", nullable: false })
  LastName: string;

  @Column({ type: "varchar", length: "10", nullable: true })
  Suffix: string;

  @Column({ type: "int", default: 0, nullable: false })
  EmailPromotion: number;

  @Column({ type: "xml", nullable: true })
  AdditionalContactInfo: string;

  @Column({ type: "xml", nullable: true })
  Demographics: string;

  @Column({ type: "char", nullable: true })
  @PrimaryGeneratedColumn("uuid")
  rowguid: string;

  @Column({
    type: "timestamp",
    precision: 3,
    default: () => "CURRENT_TIMESTAMP(3)",
    onUpdate: "CURRENT_TIMESTAMP(3)",
    nullable: true
  })
  ModifiedDate: String;
}
