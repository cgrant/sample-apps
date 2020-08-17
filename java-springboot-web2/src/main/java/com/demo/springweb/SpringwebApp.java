package com.demo.springweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Random;

@SpringBootApplication
@RestController
public class SpringwebApp {

    private Random random = new Random();

    @RequestMapping("/")
    public String hello(){
        return ADJ[random.nextInt(ADJ.length)] + "-" + NOUN[random.nextInt(NOUN.length)];
    }

    public static final String[] ADJ = new String [] {
        "standing", "moldy", "colossal", "shivering",
        "dark", "curved", "fresh", "thirsty", "mixed",
        "angry", "wild", "fabulous", "stormy", "silent"
    };
    public static final String[] NOUN = new String [] {
        "afternoon", "scent", "bed", "alarm",
        "car", "lake", "frog", "badge", "brick",
        "hill", "song", "blanket", "flower", "book"
    };

	public static void main(String[] args) {
		SpringApplication.run(SpringwebApp.class, args);
	}
}
