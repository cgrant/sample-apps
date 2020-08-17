# Springboot Docker

A simple hello world application to use in deployment demos

Java Build

```
    $ mvn package
```

Docker Image Build

```
    $ docker build . -t temp/hello-springboot
    $ docker run -d --rm -p 8080:8080 temp/hello-springboot
    $ open http://localhost:8080

```


Cleanup

```
    $ docker stop $(docker ps -a -q -f "ancestor=temp/hello-springboot")
    $ docker rmi temp/hello-springboot
```



