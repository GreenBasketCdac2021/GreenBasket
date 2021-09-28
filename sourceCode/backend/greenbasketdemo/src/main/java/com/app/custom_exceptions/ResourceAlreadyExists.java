package com.app.custom_exceptions;

@SuppressWarnings("serial")
public class ResourceAlreadyExists extends RuntimeException {

    public ResourceAlreadyExists(String message) {
        super(message);
    }

}
