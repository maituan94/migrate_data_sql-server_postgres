import {BaseRMSP} from './BaseRMSP'
import { ManyToMany,JoinTable,Entity } from "typeorm";
import { ContactPerson } from './ContactPerson.entity'

@Entity()
class Producer extends BaseRMSP{
    
}

export {Producer}
