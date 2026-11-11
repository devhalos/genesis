package com.devhalos.genesis_service.conversation;

import com.devhalos.genesis_service.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "conversations", version = "1", produces = "application/vnd.devhalos.genesis+json")
public class ConversationController {

    @GetMapping("search")
    public ApiResponse<Conversation.SearchResult> searchConversations(@RequestParam String searchText) {
        return new ApiResponse<>(null);
    }
}
