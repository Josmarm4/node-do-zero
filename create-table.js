import {sql} from './sql.js';

sql `
    CREATE TABLE videos(
        id              TEXT primary key,
        title           TEXT,
        description     TEXT,
        duration        INTEGER
);
`
.then(() => {
    console.log('Tabela criada!');
});