springweb
-----------


Sample app for use in various examples

## Create from scratch
To create this from scratch you can build a simple starter app from start.spring.io. Spencer Gibb created a nice little wrapper that i modified.

Download (start-spring.sh)[https://gist.githubusercontent.com/cgrant/246f00eeff2ac1c05a07/raw/4c479c84c481a367292c9ace29c55cc0d0d587c8/spring-start.sh] to your workspace directory and ``chmod 775``.

Setup a sample project with

    $ start-spring.sh springweb web,actuator
    $ cd springweb
    $ mvn spring-boot:run

This should successufly run the app. It does nothing at this point but at least its confirmation you've got a valid app.

## Add RequestContext and response

```java
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
@SpringBootApplication
@RestController
public class SpringwebApp {
...
 @RequestMapping("/")
    public String hello(){
        return "hello";
    }

...
```
