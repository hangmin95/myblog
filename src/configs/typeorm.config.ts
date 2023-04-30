import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'my_blog',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false, //운영에서는 false 사용할 것
}