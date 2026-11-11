package com.devhalos.genesis_service.conversation;

import java.util.List;

public class Conversation {
    public record User(String email, String firstName, String lastName, String profilePic) {}

    public record SearchResult(List<User> users) {}
}
