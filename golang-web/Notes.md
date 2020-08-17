## section 2.3 db schema creation

```
➜  go-for-web git:(master) sqlite3 dev.db
SQLite version 3.8.10.2 2015-05-20 18:17:19
Enter ".help" for usage hints.
sqlite> .schema
sqlite> create table books(
   ...> pk integer primary key autoincrement,
   ...> title text,
   ...> author text,
   ...> id text,
   ...> classification text
   ...> );
sqlite>
```

```
sqlite> select * from books;
```
