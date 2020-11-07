import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVolumesTable1604533464276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'volumes',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'collection_id',
              type: 'uuid',
            },
            {
              name: 'title',
              type: 'varchar',
            },
            {
              name: 'volume_number',
              type: 'numeric',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'CollectionId',
              referencedTableName: 'collections',
              referencedColumnNames: ['id'],
              columnNames: ['collection_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        },
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('volumes');
  }
}
