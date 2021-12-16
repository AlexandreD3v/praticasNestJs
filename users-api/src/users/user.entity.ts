import { Injectable } from '@nestjs/common';
export class User {}
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column()
  logradouro: string;

  @Column()
  city: string;

  @Column()
  state: string;
}