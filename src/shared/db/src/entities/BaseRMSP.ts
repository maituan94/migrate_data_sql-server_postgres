import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntities } from './BaseEntities';
import {ContactPerson} from './ContactPerson.entity'
//RMSP => Raw Material Suppliers & Producers
@Entity()
abstract class BaseRMSP extends BaseEntities {

    @Column({ type: "varchar", length: "50", nullable: false })
    name: string;

    @Column({ type: "varchar", length: "50", nullable: true })
    country: string;

    @Column({ type: "varchar", length: "50", nullable: true })
    city: string;

    @Column({ type: "varchar", length: "20", nullable: true })
    street_number: string;

    @Column({ type: "varchar", length: "200", nullable: true })
    street: string;

    @Column({ type: "int", nullable: true })
    postal_code: number;

    @Column({ type: "varchar", length: "600", nullable: false })
    comment: string;

    @ManyToMany(() => ContactPerson, (contact: ContactPerson) => contact.reverse_contact_list)
    @JoinTable()
    public contact_list: ContactPerson[];
}

export { BaseRMSP };