package com.devhalos.genesis.messaging_service.conversation;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("conversations")
public class ConversationController {

    @GetMapping("search")
    public List<ConversationDTO.SearchResult> searchConversations(@RequestParam String searchText) {

        return List.of(new ConversationDTO.SearchResult(), new ConversationDTO.SearchResult());
    }
}
