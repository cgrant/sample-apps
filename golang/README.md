# docker-go-sample


A simple hello world application to use in deployment demos


Docker Image Build

```
    $ docker build . -t temp/hello-go
    $ docker run -d --rm -p 80:80 temp/hello-go
    $ open http://localhost:80

```


Cleanup

```
    $ docker stop $(docker ps -a -q -f "ancestor=temp/hello-go")
    $ docker rmi temp/hello-go
```


