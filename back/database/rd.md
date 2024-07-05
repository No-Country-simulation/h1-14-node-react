REferencias:
Curso Sequelize: https://www.youtube.com/watch?v=5wvvyrx6Fvw&list=PLn9Y084aviLmTy5TO6sw6Ky6NjEO5uCme&index=16
Documentacion Oficial: https://sequelize.org/docs/v6/other-topics/migrations/
                        https://sequelize.org/docs/v6/core-concepts/assocs/

Creating the first Model (and Migration)
Once you have properly configured CLI config file you are ready to create your first migration. It's as simple as executing a simple command.

We will use model:generate command. This command requires two options:

name: the name of the model;
attributes: the list of model attributes.
Let's create a model named User.

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string


This will:

Create a model file user in models folder;
Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.
Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.

Creating the first Seed
Suppose we want to insert some data into a few tables by default. If we follow up on the previous example we can consider creating a demo user for the User table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database tables with sample or test data.

Let's create a seed file which will add a demo user to our User table.

npx sequelize-cli seed:generate --name demo-user

This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to User table.

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

Running Seeds
In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command.

npx sequelize-cli db:seed:all

This will execute that seed file and a demo user will be inserted into the User table.

Note: Seeder execution history is not stored anywhere, unlike migrations, which use the SequelizeMeta table. If you wish to change this behavior, please read the Storage section.

Undoing Seeds
Seeders can be undone if they are using any storage. There are two commands available for that:

If you wish to undo the most recent seed:

npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

npx sequelize-cli db:seed:undo:all

Migration Skeleton
The following skeleton shows a typical migration file.

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  },
};

We can generate this file using migration:generate. This will create xxx-migration-skeleton.js in your migration folder.

npx sequelize-cli migration:generate --name migration-skeleton

The passed queryInterface object can be used to modify the database. The Sequelize object stores the available data types such as STRING or INTEGER. Function up or down should return a Promise. Let's look at an example:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  },
};

The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'Person',
          'petName',
          {
            type: Sequelize.DataTypes.STRING,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'Person',
          'favoriteColor',
          {
            type: Sequelize.DataTypes.STRING,
          },
          { transaction: t },
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Person', 'petName', { transaction: t }),
        queryInterface.removeColumn('Person', 'favoriteColor', {
          transaction: t,
        }),
      ]);
    });
  },
};

The next example is of a migration that has a foreign key. You can use references to specify a foreign key:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  },
};

The next example is of a migration that uses async/await where you create an unique index on a new column, with a manually-managed transaction:

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Person',
        'petName',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction },
      );
      await queryInterface.addIndex('Person', 'petName', {
        fields: 'petName',
        unique: true,
        transaction,
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Person', 'petName', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

The next example is of a migration that creates an unique index composed of multiple fields with a condition, which allows a relation to exist multiple times but only one can satisfy the condition:

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .createTable('Person', {
        name: Sequelize.DataTypes.STRING,
        bool: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
        },
      })
      .then((queryInterface, Sequelize) => {
        queryInterface.addIndex('Person', ['name', 'bool'], {
          indicesType: 'UNIQUE',
          where: { bool: 'true' },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  },
};

Running Migrations
Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.

npx sequelize-cli db:migrate

This command will execute these steps:

Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
Creates a table called Users with all columns as specified in its migration file.
Undoing Migrations
Now our table has been created and saved in the database. With migration you can revert to old state by just running a command.

You can use db:migrate:undo, this command will revert the most recent migration.

npx sequelize-cli db:migrate:undo

You can revert back to the initial state by undoing all migrations with the db:migrate:undo:all command. You can also revert back to a specific migration by passing its name with the --to option.

npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
