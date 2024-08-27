import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { ChatContext } from "../../context/ChatContext";

const ChatBox = () => {
    const { User } = useContext(AuthContext);
    const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
    const { recipientUser } = useFetchRecipientUser(currentChat, User);


    // 디버깅용 콘솔 로그 추가
    console.log('recipientUser:', recipientUser);
    console.log('isMessagesLoading:', isMessagesLoading);

    if (!recipientUser) return (
        <p style={{ textAlign: "center", width: "100$" }}>
            No conversation selected yet ...
        </p>
    );

    if (!isMessagesLoading)
        return (
            <p style={{ textAlign: "center", width: "100$" }}>
                Chat...
            </p>
        );


    return (
    <Stack gap={4} className="chat-box">
        <div className="chat-header">
            <strong>{recipientUser?.name}</strong>
        </div>
    </Stack>);
};

export default ChatBox;