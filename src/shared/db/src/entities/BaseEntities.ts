
import { BaseEntity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";
const uuidv4 = require('uuid/v4');
abstract class BaseEntities extends BaseEntity {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;
  
    @CreateDateColumn({ type: 'timestamp', name: 'create_at', default: () => 'LOCALTIMESTAMP' })
    public createAt: string;
    
    @UpdateDateColumn({ type: 'timestamp', name: 'update_at', default: () => 'LOCALTIMESTAMP' })
    public updateAt: string;
  
    constructor() {
      super();
      if (!this.id) {
        this.id = uuidv4();
      }
    }
}

export {BaseEntities};