package com.brickbroker.exception;


public class AgentNotApprovedException extends RuntimeException {
    public AgentNotApprovedException(String message) {
        super(message);
    }
}

