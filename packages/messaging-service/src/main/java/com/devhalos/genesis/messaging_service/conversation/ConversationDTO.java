package com.devhalos.genesis.messaging_service.conversation;

import java.util.List;

public class ConversationDTO {
    public record User(String email, String firstName, String lastName, String profilePic) {}

    public record SearchResult(List<User> user) {}
}
