# Context Window

## Overview
A context window is the maximum amount of information (tokens, words, or characters) that an AI model can consider at once when generating responses. In MCP, understanding and managing the context window is critical for effective communication with models, especially for large or complex tasks.

## File Tree
```
mcp/
  context-window.md    # This explainer
  ...
```

## Key Points
- The context window is measured in tokens (roughly words or word pieces).
- All input (prompt, instructions, history, etc.) and output must fit within the model's context window.
- Exceeding the context window causes truncation or ignored input.
- Different models have different context window sizes (e.g., 4k, 8k, 32k tokens).
- Efficient context management is crucial for long or multi-step tasks.

## Benefits and Drawbacks
- **Benefits:**
  - Enables models to reason over large amounts of information.
  - Allows for rich, multi-turn conversations or complex instructions.
- **Drawbacks:**
  - Limited window means some information may be lost or ignored.
  - Requires careful prompt engineering and context management.

## Technical Explanation
The context window is a hard limit set by the model architecture. For example, GPT-4 may have a 8,192-token window. All input (system prompt, user messages, function calls, etc.) and the model's output must fit within this window. If the combined input/output exceeds the limit, the oldest or least recent tokens are truncated, which can lead to loss of important context or instructions.

## Nontechnical Explanation
Think of the context window like a whiteboard: you can only write so much on it at once. If you run out of space, you have to erase something old to make room for something new. The AI can only "see" what's currently on the whiteboard when it decides what to do next.

## Key Terms
- **Context Window:** The maximum number of tokens a model can process at once.
- **Token:** A chunk of text (word, part of a word, or symbol) used by the model.
- **Truncation:** Cutting off input that exceeds the context window.

## Resources
- [OpenAI: Tokenizer Tool](https://platform.openai.com/tokenizer)
- [OpenAI API Docs: Token Limits](https://platform.openai.com/docs/guides/limits)
- [Anthropic: Context Windows](https://docs.anthropic.com/claude/docs/context-windows)

## Notes on Applicability to Stack
- All LLMs (OpenAI, Anthropic, Google, etc.) have context windows, but sizes and truncation strategies may differ.
- MCP strategies should always account for the model's context window.

## Example Use
- When sending a long document to a model, you may need to chunk or summarize it to fit within the context window.
- In a chat, if the conversation history is too long, older messages may be dropped.

## Setup
1. Check your model's documentation for its context window size.
2. Use a tokenizer tool to estimate token counts for your input.
3. Design prompts and context management strategies to stay within the limit.

## Commands
- No direct commands, but you can use tools like:
  - `npx gpt-tokenizer "your text here"` (if available)

## More
- Some advanced models support "sliding window" or "attention window" techniques to handle longer contexts.
- Prompt engineering and context compression are active areas of research in MCP. 