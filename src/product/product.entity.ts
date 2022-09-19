import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    quantity: number

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}
