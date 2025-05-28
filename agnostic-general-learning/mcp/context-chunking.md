# Context Chunking

## Overview
Context chunking is the process of breaking up large inputs (such as documents, transcripts, or codebases) into smaller, manageable pieces (chunks) that fit within a model's context window. In MCP, chunking is essential for working with information that exceeds the model's token limit.

## File Tree
```
mcp/
  context-chunking.md    # This explainer
  ...
```

## Key Points
- Chunking is necessary when input exceeds the model's context window.
- Chunks can be based on sentences, paragraphs, sections, or semantic units.
- Overlapping chunks can help preserve context between pieces.
- Chunking strategies affect model performance and output quality.

## Benefits and Drawbacks
- **Benefits:**
  - Enables processing of large documents or datasets.
  - Reduces risk of truncation and information loss.
  - Allows for parallel or sequential processing of chunks.
- **Drawbacks:**
  - May lose context between chunks if not managed carefully.
  - Requires additional logic to stitch together results or maintain continuity.

## Technical Explanation
Chunking involves splitting input data into segments that fit within the model's context window. For example, a 20,000-token document might be split into 10 overlapping 2,000-token chunks. Each chunk is sent to the model separately, and results are aggregated or post-processed. Overlap (e.g., 10-20% of tokens) helps maintain continuity between chunks. Advanced chunking may use semantic boundaries, topic modeling, or vector similarity to optimize splits.

## Nontechnical Explanation
Imagine you have a huge book, but the AI can only read a few pages at a time. You break the book into chapters or sections, and give each part to the AI one at a time. Sometimes you repeat a paragraph at the end of one chunk and the start of the next, so the AI doesn't lose track of the story.

## Key Terms
- **Chunk:** A segment of input data that fits within the context window.
- **Overlap:** Repeating part of one chunk in the next to preserve context.
- **Aggregation:** Combining results from multiple chunks.

## Resources
- [OpenAI Cookbook: Working with Long Contexts](https://cookbook.openai.com/examples/how_to_handle_long_contexts)
- [LangChain Docs: Chunking](https://python.langchain.com/docs/modules/data_connection/document_transformers/)

## Notes on Applicability to Stack
- Chunking is relevant for all LLMs and any workflow where input may exceed the context window.
- MCP best practices recommend chunking for long documents, transcripts, or codebases.

## Example Use
- Splitting a long PDF into 1,000-token chunks for summarization.
- Processing a transcript in overlapping 500-token segments for Q&A.

## Setup
1. Determine the model's context window size.
2. Choose a chunk size (e.g., 80-90% of the window).
3. Implement chunking logic (manual, script, or library).
4. Optionally, add overlap between chunks.

## Commands
- No direct commands, but you can use tools like:
  - `npx gpt-tokenizer "your text here"` to estimate chunk sizes

## More
- Some libraries (LangChain, LlamaIndex) offer built-in chunking utilities.
- Semantic chunking (splitting by meaning, not just length) can improve results. 