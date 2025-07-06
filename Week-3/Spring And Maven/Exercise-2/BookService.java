package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository; // This is the dependency

    // Public setter method for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("BookService: Setting BookRepository dependency.");
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        System.out.println("BookService: Adding a book...");
        if (bookRepository != null) {
            bookRepository.save();
        } else {
            System.out.println("BookRepository is not injected!");
        }
    }
}
