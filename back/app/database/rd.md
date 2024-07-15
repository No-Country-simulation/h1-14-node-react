Referencias:
Model ER: https://dbdiagram.io/d/Justina-io-668496439939893daee07814
Curso Sequelize: https://www.youtube.com/watch?v=5wvvyrx6Fvw&list=PLn9Y084aviLmTy5TO6sw6Ky6NjEO5uCme&index=16
Documentacion Oficial: https://sequelize.org/docs/v6/other-topics/migrations/
                        https://sequelize.org/docs/v6/core-concepts/assocs/

Creating of models:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Make to Seed

npx sequelize-cli seed:generate --name demo-user

Make to Seeding

npx sequelize-cli db:seed:all

Undoing Seeds

npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

npx sequelize-cli db:seed:undo:all

Make to Migration 

npx sequelize-cli migration:generate --name migration-skeleton

npx sequelize-cli db:migrate --debug

npx sequelize-cli db:migrate:undo:all
