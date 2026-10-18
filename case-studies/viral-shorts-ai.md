# Viral Shorts AI

## Turning long videos into reviewable short-form content

Viral Shorts AI connects transcription, AI-assisted clip selection, editing and video rendering in one workflow. It is a practical example of my work across Python APIs, React interfaces and applied AI.

[Product](https://viralshortsai.com.br) · [Helio's portfolio](https://helio2323.github.io/helio-reis-portfolio/index.en.html) · [GitHub profile](https://github.com/helio2323)

### The problem

Repurposing a long video involves several separate decisions: finding a useful segment, keeping the context understandable, adapting the framing and checking captions. AI-generated suggestions also need a path to human review and a reproducible final render.

### My contribution

My full-stack work on the project focuses on Python/FastAPI services, API integrations, video-processing workflows and the web interface used to review the output. The codebase also includes MCP tooling for assisted editing. I use AI development tools as part of the engineering workflow, alongside code review and manual inspection of the result.

### A workflow worth demonstrating

1. Submit a supported video source and create a processing job.
2. Produce a timestamped transcript and use an LLM to suggest clip windows.
3. Review a suggested clip and adjust captions or trimming in the React editor.
4. Send rendering work to a worker and inspect the resulting video.
5. For assisted editing, prepare the source, review a structured plan, validate it and approve the render.

### How the system fits together

```text
Next.js / React interface
          |
      FastAPI API -------- MCP editing tools
          |                    |
  PostgreSQL / job state   Reviewed edit plan
          |                    |
   Processing workers <--------+
          |
 Transcription -> clip analysis -> FFmpeg render
          |
       Media storage -> preview and review
```

The repository separates the API from long-running processing. Pipeline and render workers can be assigned different responsibilities. Job records, heartbeat updates and retry paths help track work when a process fails or loses its assignment.

The LLM provider factory separates application logic from provider selection, with Gemini and OpenAI implementations. FFmpeg handles media rendering; AI suggestions become input to that workflow rather than a replacement for the render engine.

### An engineering detail: controlled editing through MCP

The editing implementation checks ownership of the project and clip. It validates a structured edit plan and binds approval to a signed payload. A scoped idempotency ledger allows repeated requests to reuse the recorded operation rather than apply a different payload under the same key.

This matters when an AI client can propose edits: the application still needs to decide which source, account and revision the request is allowed to change. Preparation, review, approval and rendering are separate steps.

### Stack

Python · FastAPI · Pydantic · Next.js · React · TypeScript · PostgreSQL/Supabase · FFmpeg · MCP · Docker

### Quality and practical limits

The repository includes backend tests for transcription, clip handling and MCP editing, and frontend test tooling. Generated clips still need audiovisual review: a valid edit plan does not prove that a sentence is complete or that the captions are correct. Rendering also has different resource needs from an ordinary API request.

The demonstrable result is a working product workflow linking AI-assisted suggestions to an editable, renderable media output. This case study makes no claim about revenue, customer count, processing speed or audience growth.

### Why this is relevant to a development team

The project brings together API design, asynchronous processing, typed frontend work and integration boundaries. It gives me concrete examples to discuss when a role involves Python, React, automation, media pipelines or applied AI.

Source code is private. Product demonstrations and technical walkthroughs are available on request.
