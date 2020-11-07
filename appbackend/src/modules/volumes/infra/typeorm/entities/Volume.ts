import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import Collection from '@modules/collections/infra/typeorm/entities/Collection';

@Entity('volumes')
class Volume {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Collection, (collection) => collection.id)
  collection: string;

  @Column()
  title: string;

  @Column('numeric')
  column_number: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Volume;
