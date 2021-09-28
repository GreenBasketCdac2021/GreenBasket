package com.app.custom_exceptions;

@SuppressWarnings("serial")
public class CustomException extends RuntimeException {

    public CustomException(String message) {
        super(message);
    }

}
