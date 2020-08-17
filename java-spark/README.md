

```
$ docker build -t hello-spark .
$ docker run -d -p 4567:4567 hello-spark
$ curl $(docker-machine ip default):4567
```
