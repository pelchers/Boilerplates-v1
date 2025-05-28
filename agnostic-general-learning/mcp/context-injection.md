# Context Injection

## Overview
Context injection is the practice of programmatically adding relevant information, instructions, or data into the prompt or input sent to an AI model. In MCP, context injection is used to ensure the model has the necessary background, constraints, or examples to perform a task effectively.

## File Tree
```
mcp/
  context-injection.md    # This explainer
  ...
```

## Key Points
- Context injection can include system prompts, user instructions, examples, or external data.
- It is often automated based on user actions, workflow state, or retrieved knowledge.
- Proper injection improves model accuracy, relevance, and safety.
- Over-injection can lead to context window overflow or prompt dilution.

## Benefits and Drawbacks
- **Benefits:**
  - Ensures the model has all necessary information for the task.
  - Enables dynamic, adaptive, or personalized model behavior.
  - Can enforce constraints, style, or safety requirements.
- **Drawbacks:**
  - Risk of exceeding the context window if too much is injected.
  - Poorly designed injection can confuse or bias the model.

## Technical Explanation
Context injection is typically implemented by concatenating or merging various sources of information into the prompt. For example, a system prompt may be prepended, user instructions appended, and relevant knowledge snippets inserted at specific locations. Advanced MCP systems may use templates, retrieval-augmented generation (RAG), or context selectors to optimize what is injected. Careful management is needed to avoid exceeding the model's context window.

## Nontechnical Explanation
Imagine you're giving instructions to a chef. You might hand them a recipe (system prompt), tell them your preferences (user instructions), and show them a picture of the dish (example). Context injection is like making sure the chef has all these things before they start cooking, so the result matches what you want.

## Key Terms
- **Context Injection:** Adding information to the model's prompt/input.
- **System Prompt:** Initial instructions or background for the model.
- **RAG (Retrieval-Augmented Generation):** Technique for injecting retrieved knowledge.

## Resources
- [OpenAI API Docs: System and User Prompts](https://platform.openai.com/docs/guides/prompting)
- [Anthropic: Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [LangChain Docs: Prompt Templates](https://python.langchain.com/docs/modules/model_io/prompts/)

## Notes on Applicability to Stack
- Context injection is relevant for all LLMs and prompt-based workflows.
- MCP best practices recommend modular, template-driven injection for maintainability.

## Example Use
- Prepending a system prompt to enforce a style or persona.
- Injecting retrieved facts into a Q&A prompt.
- Adding user preferences to a code generation request.

## Setup
1. Identify what information needs to be injected for your use case.
2. Design prompt templates or context selectors.
3. Implement logic to merge/inject data into the prompt.
4. Test for context window fit and model performance.

## Commands
- No direct commands, but you can use tools like:
  - `npx gpt-tokenizer "your text here"` to check prompt size

## More
- Some frameworks (LangChain, LlamaIndex) support advanced context injection patterns.
- Prompt injection attacks (malicious input) are a security concern—validate injected data. 