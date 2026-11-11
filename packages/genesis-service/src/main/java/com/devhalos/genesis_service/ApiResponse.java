package com.devhalos.genesis_service;

public class ApiResponse<D> {
    private final D data;

    public ApiResponse(D data) {
        this.data = data;
    }

    public D getData() {
        return data;
    }
}
