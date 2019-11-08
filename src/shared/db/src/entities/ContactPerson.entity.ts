import { Entity, Column, ManyToMany } from "typeorm";
import {BaseEntities} from './BaseEntities'
import {BaseRMSP} from './BaseRMSP'

@Entity()
export class ContactPerson extends BaseEntities {
    @Column({ type: "varchar", nullable: true })
    public country: string;

    @Column({ type: "varchar", nullable: true })
    public city: string;

    @Column({ type: "varchar", nullable: true })
    public street_number: string;

    @Column({ type: "varchar", nullable: true })
    public street: string;

    @Column({ type: "int", nullable: true })
    public postal_code: number;

    @ManyToMany(() => BaseRMSP, (rmsp: BaseRMSP) => rmsp.contact_list)
    public reverse_contact_list: BaseRMSP[];

}
