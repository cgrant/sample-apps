package hellospark;

import static spark.Spark.get;

public class Hello {

    public static void main(String[] args) {
        //port(80);

        get("/", (req, res) -> {
            return "hello worlds another";
        });
    }
}
