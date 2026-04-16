import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_produtos' }) // Cria uma tabela chamada 'tb_produtos' no banco de dados
export class Produto {

    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto-incrementa
    id!: number;

    @IsNotEmpty() // Verifica se o campo não está vazio
    @Column({ length: 100, nullable: false }) // Cria uma coluna chamada 'nome' do tipo string, com tamanho máximo de 100 caracteres e não permite valores nulos
    nome!: string;

    @IsNotEmpty() // Verifica se o campo não está vazio
    @Column({ length: 100, nullable: false }) // Cria uma coluna chamada 'marca' do tipo string, com tamanho máximo de 100 caracteres e não permite valores nulos
    marca!: string;

    @IsNotEmpty() // Verifica se o campo não está vazio
    @Column('decimal', { precision: 10, scale: 2, nullable: false }) // Cria uma coluna chamada 'preco' do tipo decimal, com precisão de 10 dígitos e escala de 2 casas decimais, e não permite valores nulos
    preco!: number;

    @UpdateDateColumn() // Cria uma coluna chamada 'data' do tipo date, que é atualizada automaticamente quando o registro é modificado
    data!: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {  // Cria um relacionamento ManyToOne com a entidade Categoria, onde um produto pertence a uma categoria.
    onDelete: 'CASCADE' // Define a ação de exclusão em cascata, ou seja, quando uma categoria for excluída, todos os produtos relacionados a essa categoria também serão excluídos.
    })
    categoria!: Categoria; // Define a propriedade 'categoria' do tipo Categoria, que representa a categoria à qual o produto pertence.

}