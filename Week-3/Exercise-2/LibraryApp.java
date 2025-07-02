package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryApp {
    public static void main(String[] args) {
        // Load the Spring context from the XML configuration file
        System.out.println("Loading Spring Application Context...");
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Application Context loaded.");

        // Retrieve the BookService bean from the Spring container
        System.out.println("Retrieving BookService bean...");
        BookService bookService = context.getBean("bookService", BookService.class);
        System.out.println("BookService bean retrieved.");

        // Call a method on the BookService to trigger its dependency
        bookService.addBook();

        // Close the context (important in standalone applications to release resources)
        ((ClassPathXmlApplicationContext) context).close();
    }
}

