import {create} from 'zustand';

interface ConversationState {
    selectedConversation: ConversationType | null
    setSelectedConversation: (conversation: ConversationType | null) => void
    messages: messageType[]
    setMessages: (messages: messageType[]) => void
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
    messages: [],
    setMessages: (messages) => set({messages})
}));

export default useConversation;