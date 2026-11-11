package com.devhalos.genesis_service;

public class PaginatedApiResponse<D, P> extends ApiResponse<D> {
    private final P page;

    public record Page(Integer first, Integer last, Integer prev, Integer next, Integer total) {}

    public record CursorPage(String prev, String next) {}

    public PaginatedApiResponse(D data, P page) {
        super(data);
        this.page = page;
    }

    public P getPage() {
        return page;
    }
}
