import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntities } from './BaseEntities';
import {ContactPerson} from './ContactPerson.entity'

//RMSP => Raw Material Suppliers & Producers
@Entity()
abstract class BaseRMSP extends BaseEntities {

    @Column({ type: "varchar", length: "50", nullable: false })
    public name: string;

    @Column({ type: "varchar", length: "50", nullable: true })
    public country: string;

    @Column({ type: "varchar", length: "50", nullable: true })
    public city: string;

    @Column({ type: "varchar", length: "20", nullable: true })
    public street_number: string;

    @Column({ type: "varchar", length: "200", nullable: true })
    public street: string;

    @Column({ type: "int", nullable: true })
    public postal_code: number;

    @Column({ type: "varchar", length: "600", nullable: false })
    public comment: string;

    @ManyToMany(() => ContactPerson, (contact: ContactPerson) => contact.reverse_contact_list)
    @JoinTable()
    public contact_list: ContactPerson[];
}

export { BaseRMSP };