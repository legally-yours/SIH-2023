import React, { useState } from "react";
import OpenAI from "openai";
import { TextField, Button } from "@mui/material";
import logoBalck from "../assets/LogoBlack.png";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([] as any[]);
  const [isTyping, setIsTyping] = useState(false);

  const askChatGPT = async (query: string) => {
    try {
      setIsTyping(true);

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [...messages, { role: "user", content: query }],
      });

      const messageContent = completion.choices[0]?.message?.content;

      setTimeout(() => {
        setMessages([
          ...messages,
          { role: "user", content: query },
          { role: "assistant", content: messageContent },
        ]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await askChatGPT(input);
    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#caf0f8",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={logoBalck}
          alt="Mira Chatbot"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <h1 style={{ color: "#3045e0" }}>Mira Chatbot</h1>
      </div>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              marginBottom: "6px",
              maxWidth: "70%",
              backgroundColor: message.role === "user" ? "#023e8a" : "#48cae4",
              alignSelf: message.role === "user" ? "flex-end" : "flex-start",
              position: "relative",
              opacity: isTyping && index === messages.length - 1 ? 0.6 : 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {message.content}
          </div>
        ))}
        {isTyping && (
          <div
            className="typing-indicator"
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "12px",
            }}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
          variant="outlined"
          style={{
            width: "calc(100% - 60px)",
            borderRadius: "4px",
            backgroundColor: "#ffffff",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            borderRadius: "4px",
            marginLeft: "10px",
            backgroundColor: "#0077b6",
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chatbot;
