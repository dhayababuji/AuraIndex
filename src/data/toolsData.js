export const toolsData = [
  // CHATBOTS & WRITING
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "OpenAI's conversational AI assistant for editing, writing, brainstorming, and coding.",
    description: "ChatGPT is a state-of-the-art conversational model by OpenAI that can answer questions, draft essays, generate code, translate text, and act as a personalized brainstorm assistant.",
    category: "chatbots",
    pricing: "freemium",
    upvotes: 1245,
    rating: 4.8,
    url: "https://chatgpt.com",
    emoji: "💬",
    features: [
      "Real-time voice and conversational interface",
      "Custom GPT creation for specialized tasks",
      "Advanced file analysis and chart generation",
      "Web browsing and live search integration"
    ],
    tags: ["OpenAI", "LLM", "Writing", "Chatbot"]
  },
  {
    id: "claude",
    name: "Claude AI",
    tagline: "Anthropic's helpful, harmless, and honest assistant with a massive context window.",
    description: "Claude by Anthropic is built with safety in mind. It excels at complex reasoning, coding, writing long documents, and analyzing multi-file workspaces using its state-of-the-art context processing capabilities.",
    category: "chatbots",
    pricing: "freemium",
    upvotes: 982,
    rating: 4.9,
    url: "https://claude.ai",
    emoji: "🧠",
    features: [
      "Extremely long context window (200k+ tokens)",
      "Superior code generation and logical debugging",
      "Artifacts workspace for live coding preview",
      "High compliance and ethical AI safety standards"
    ],
    tags: ["Anthropic", "Coding", "Writing", "Chatbot"]
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Google's natively multimodal AI built to reason across text, images, video, and code.",
    description: "Gemini is Google's largest and most capable AI model family, integrated into Google Workspace, search, and developer platforms to reason seamlessly across diverse media modalities.",
    category: "chatbots",
    pricing: "freemium",
    upvotes: 754,
    rating: 4.6,
    url: "https://gemini.google.com",
    emoji: "♊",
    features: [
      "Natively multimodal reasoning (text, audio, image, video)",
      "Direct integration with Google Workspace and Drive",
      "Up to 2 million token context window (Gemini 1.5 Pro)",
      "Accurate Google Search grounding for facts"
    ],
    tags: ["Google", "Multimodal", "Search", "Assistant"]
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    tagline: "Conversational answer engine providing cited research and search answers.",
    description: "Perplexity AI redefines search by providing summarized conversational answers with inline citations from the web, allowing deep exploration via follow-up questions.",
    category: "productivity",
    pricing: "freemium",
    upvotes: 912,
    rating: 4.7,
    url: "https://perplexity.ai",
    emoji: "🔍",
    features: [
      "Conversational search with precise, inline citations",
      "Choice of underlying models (Claude, GPT, Gemini)",
      "Copilot mode for guided search and structured queries",
      "File parsing and mathematical processing"
    ],
    tags: ["Search", "Research", "Citations", "Productivity"]
  },
  {
    id: "jasper",
    name: "Jasper AI",
    tagline: "Enterprise-grade copywriter for blog posts, social ads, and marketing copy.",
    description: "Jasper is a specialized copywriter and marketing platform designed to help teams scale content creation, align with brand voice, and write high-converting copy across channels.",
    category: "chatbots",
    pricing: "paid",
    upvotes: 456,
    rating: 4.5,
    url: "https://jasper.ai",
    emoji: "✍️",
    features: [
      "Custom Brand Voice training and styling guides",
      "SEO-friendly blog generator and campaign wizard",
      "Chrome extension for writing on any web platform",
      "Multi-language content translation tools"
    ],
    tags: ["Marketing", "Writing", "SEO", "Copywriting"]
  },
  {
    id: "writesonic",
    name: "Writesonic",
    tagline: "Create SEO-optimized articles, product descriptions, and landing pages.",
    description: "Writesonic is an AI writing assistant that specializes in generating articles, social media copy, and landing pages. It includes features like Photosonic for image generation and Chatsonic for cited search.",
    category: "chatbots",
    pricing: "freemium",
    upvotes: 388,
    rating: 4.4,
    url: "https://writesonic.com",
    emoji: "✒️",
    features: [
      "Article Writer 5.0 for fact-checked, cited longform blogs",
      "Integrates with SurferSEO for keyword optimization",
      "AI Landing Page builder and call-to-action writer",
      "Paraphrasing and text expansion tools"
    ],
    tags: ["Writing", "SEO", "Blogs", "Marketing"]
  },

  // IMAGE GENERATION
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "Produce photorealistic and highly stylized art from textual descriptions.",
    description: "Midjourney is an independent research lab producing an AI image generator renowned for its artistic interpretations, photorealism, and rich text-to-image capabilities operated via Discord or Web Alpha.",
    category: "image",
    pricing: "paid",
    upvotes: 1189,
    rating: 4.9,
    url: "https://midjourney.com",
    emoji: "🎨",
    features: [
      "Stunning photorealistic and illustrative image generation",
      "Inpainting, outpainting, and aspect ratio resizing",
      "Vibrant community showcase and style reference systems",
      "Character consistency and styling commands"
    ],
    tags: ["Image Gen", "Art", "Discord", "Design"]
  },
  {
    id: "dalle",
    name: "DALL-E 3",
    tagline: "OpenAI's precise image creator integrated natively inside ChatGPT.",
    description: "DALL-E 3 by OpenAI translates complex prompts into extremely accurate, high-fidelity images. It excels at following precise details, adding text inside images, and rendering complex objects.",
    category: "image",
    pricing: "freemium",
    upvotes: 824,
    rating: 4.7,
    url: "https://openai.com/dall-e-3",
    emoji: "🖼️",
    features: [
      "Natively understands conversational prompts inside ChatGPT",
      "Excellent render of text within images",
      "Safety guardrails for copyrighted/sensitive content",
      "Supports aspect ratios and custom image edit brushes"
    ],
    tags: ["OpenAI", "Image Gen", "ChatGPT", "Art"]
  },
  {
    id: "stablediffusion",
    name: "Stable Diffusion",
    tagline: "Open-source, highly customizable image generation model for local hosting.",
    description: "Stable Diffusion (by Stability AI) is an open-weights image generation engine. Its open nature makes it the go-to choice for developers creating custom training, LoRAs, and control nets.",
    category: "image",
    pricing: "free",
    upvotes: 765,
    rating: 4.8,
    url: "https://stability.ai",
    emoji: "🌀",
    features: [
      "Runs locally on consumer hardware or via API",
      "ControlNet for precise structural and pose guidance",
      "Custom models (LoRAs, Checkpoints, Textual Inversions)",
      "High speed generation and deep developer control"
    ],
    tags: ["Open Weights", "Image Gen", "Local Setup", "Developer"]
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    tagline: "Create production-quality assets for game development and design projects.",
    description: "Leonardo AI provides a web-based image generation suite tailored for game developers, artists, and creators. It offers fine-tuned models, texture generators, and canvas editor panels.",
    category: "image",
    pricing: "freemium",
    upvotes: 592,
    rating: 4.6,
    url: "https://leonardo.ai",
    emoji: "🦁",
    features: [
      "Real-time canvas for sketch-to-image and painting",
      "Fine-tuned models for pixel art, RPG items, and anime",
      "AI Motion for adding simple animations to images",
      "3D Texture map generator"
    ],
    tags: ["Game Dev", "Asset Gen", "Real-time Canvas", "Image Gen"]
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    tagline: "Commercially safe generative AI for creator tools integrated into Photoshop.",
    description: "Adobe Firefly is Adobe's generative AI model suite designed to be commercially safe. It powers tools like Generative Fill, Text Effects, and Generative Recolor within Creative Cloud.",
    category: "image",
    pricing: "freemium",
    upvotes: 498,
    rating: 4.5,
    url: "https://www.adobe.com/products/firefly.html",
    emoji: "🔥",
    features: [
      "Trained on licensed content and public domain images",
      "Seamless Photoshop Generative Fill and Expand tools",
      "Vector graphic recoloring within Illustrator",
      "Content Authenticity credentials attached automatically"
    ],
    tags: ["Adobe", "Commercial Safe", "Design", "Photoshop"]
  },

  // CODE & DEVELOPMENT
  {
    id: "copilot",
    name: "GitHub Copilot",
    tagline: "AI pair programmer suggesting code completions in real-time in your editor.",
    description: "GitHub Copilot helps developers write code faster and with less effort. It integrates directly into popular IDEs (VS Code, JetBrains) to suggest lines of code, test blocks, and entire functions.",
    category: "coding",
    pricing: "paid",
    upvotes: 1102,
    rating: 4.7,
    url: "https://github.com/features/copilot",
    emoji: "🐙",
    features: [
      "Inline code autocomplete matching your project context",
      "Chat interface for explaining, refactoring, and debugging",
      "Terminal CLI commands suggestion tool",
      "Unit test suite generator"
    ],
    tags: ["GitHub", "IDE", "Autocomplete", "Coding"]
  },
  {
    id: "cursor",
    name: "Cursor Editor",
    tagline: "An AI-first code editor fork of VS Code designed for speed and navigation.",
    description: "Cursor is a custom VS Code fork built from the ground up to pair-program with AI. It features multi-file editing, chat context references, code indexing, and terminal code generation.",
    category: "coding",
    pricing: "freemium",
    upvotes: 1045,
    rating: 4.9,
    url: "https://cursor.com",
    emoji: "🎛️",
    features: [
      "Copilot++ for predictive multi-line edits",
      "Context referencing via '@' (files, codebase, web, docs)",
      "Composer mode for multi-file code creation from scratch",
      "Codebase indexing for semantic search and queries"
    ],
    tags: ["IDE", "VSCode", "Coding", "Agent"]
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    tagline: "Generative UI system producing production-ready React and Tailwind components.",
    description: "v0.dev by Vercel uses generative models to construct, refine, and compile React, HTML, and Tailwind CSS code blocks from simple visual descriptions or mockups.",
    category: "coding",
    pricing: "freemium",
    upvotes: 890,
    rating: 4.8,
    url: "https://v0.dev",
    emoji: "⚡",
    features: [
      "Generate React code utilizing Shadcn/ui and Tailwind",
      "Interactive component preview and code editor",
      "Figma-to-code or screenshot-to-code support",
      "NPM CLI copy command support"
    ],
    tags: ["Vercel", "Tailwind", "React", "Frontend"]
  },
  {
    id: "replitagent",
    name: "Replit Agent",
    tagline: "Build and deploy complete web applications from natural language prompts.",
    description: "Replit Agent is an autonomous coder that creates database schemas, server endpoints, and frontend pages, sets up packages, and deploys the resulting web app in a click.",
    category: "coding",
    pricing: "paid",
    upvotes: 812,
    rating: 4.6,
    url: "https://replit.com",
    emoji: "🌀",
    features: [
      "Autonomous full-stack application creation",
      "Database migration and schema management",
      "Automatic server configuration and execution",
      "Instant cloud hosting and deployment"
    ],
    tags: ["Replit", "Agent", "Deployment", "Fullstack"]
  },

  // VIDEO & ANIMATION
  {
    id: "runway",
    name: "Runway Gen-3 Alpha",
    tagline: "Generative video model producing high-fidelity realistic movies and animations.",
    description: "Runway Gen-3 Alpha is a state-of-the-art text-to-video and image-to-video generator, providing cinema-grade camera motion, realistic details, and artistic controls.",
    category: "video",
    pricing: "freemium",
    upvotes: 945,
    rating: 4.8,
    url: "https://runwayml.com",
    emoji: "🎬",
    features: [
      "Ultra-realistic physics and camera pan movements",
      "Motion Brush for animating specific portions of an image",
      "Multi-motion director and keyframe timing controls",
      "Upscaling and slow-motion video editors"
    ],
    tags: ["Video Gen", "Runway", "Text-to-Video", "Cinema"]
  },
  {
    id: "heygen",
    name: "HeyGen",
    tagline: "Create high-fidelity human avatars and voice cloning for video content.",
    description: "HeyGen is an AI video generator that allows marketing teams to convert scripts into videos with realistic AI avatars speaking naturally and gesturing like real humans.",
    category: "video",
    pricing: "freemium",
    upvotes: 689,
    rating: 4.7,
    url: "https://heygen.com",
    emoji: "👤",
    features: [
      "100+ hyper-realistic digital avatars",
      "Voice cloning and automatic lip-sync in 40+ languages",
      "Interactive avatar API for live web widgets",
      "Auto-generated video templates for sales pitches"
    ],
    tags: ["Avatars", "Marketing", "Voice Clone", "Sales"]
  },

  // AUDIO & MUSIC
  {
    id: "suno",
    name: "Suno AI",
    tagline: "Generate complete vocal and instrumental songs in any musical style.",
    description: "Suno is a state-of-the-art music creation engine. Users input a theme, genre description, and lyrics, and Suno outputs radio-ready vocal and instrumental tracks in seconds.",
    category: "audio",
    pricing: "freemium",
    upvotes: 1012,
    rating: 4.8,
    url: "https://suno.com",
    emoji: "🎵",
    features: [
      "Generate complete 4-minute songs with vocals",
      "Instrumental mode for soundtracks and beats",
      "Custom lyrics input with section markings (Verse, Chorus)",
      "Audio extension and stem extraction tools"
    ],
    tags: ["Music Gen", "Songwriting", "Vocals", "Audio"]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Prime AI text-to-speech, voice cloning, and audio effect generator.",
    description: "ElevenLabs generates natural-sounding voices with context-aware emotional accents. It is popular for audiobooks, video voiceovers, video games, and speech translation.",
    category: "audio",
    pricing: "freemium",
    upvotes: 894,
    rating: 4.9,
    url: "https://elevenlabs.io",
    emoji: "🗣️",
    features: [
      "Ultra-realistic text-to-speech engine with emotional range",
      "Voice Design to create entirely new custom speakers",
      "Speech-to-Speech voice changer and translator",
      "Sound effects generator from text descriptors"
    ],
    tags: ["Voice Clone", "TTS", "Audiobook", "Sound FX"]
  },

  // DESIGN & UI
  {
    id: "figma",
    name: "Figma AI",
    tagline: "Figma's integrated AI for brainstorming, mockups, and layout creation.",
    description: "Figma AI introduces generative features directly within the design canvas, allowing designers to outline wireframes, write copy, rename layers, and translate mockups automatically.",
    category: "design",
    pricing: "paid",
    upvotes: 789,
    rating: 4.6,
    url: "https://figma.com",
    emoji: "❖",
    features: [
      "Generates UI wireframes and layouts from text",
      "Automated layer renaming and component grouping",
      "Instantly replace text placeholders with realistic copy",
      "Create interactive prototyping connections automatically"
    ],
    tags: ["Figma", "UI/UX", "Wireframe", "Design"]
  },
  {
    id: "canva",
    name: "Canva Magic Studio",
    tagline: "Generate flyers, presentations, and graphic designs inside Canva.",
    description: "Canva Magic Studio brings a suite of AI features to the popular drag-and-drop designer, introducing Magic Write, Magic Design, Magic Media, and background removers.",
    category: "design",
    pricing: "freemium",
    upvotes: 624,
    rating: 4.5,
    url: "https://canva.com",
    emoji: "✨",
    features: [
      "Magic Design generates templates from user photos/text",
      "Magic Grab isolates individual image subjects for movement",
      "Instant background and object removal",
      "AI text translation for localizing marketing posts"
    ],
    tags: ["Templates", "Design", "Marketing", "Graphics"]
  },

  // PRODUCTIVITY & SEARCH
  {
    id: "notion",
    name: "Notion AI",
    tagline: "Summarize databases, write wikis, and organize workspace pages.",
    description: "Notion AI sits directly inside your Notion workspace, helping you summarize meeting transcripts, auto-generate tags, write documentation drafts, and query pages database search.",
    category: "productivity",
    pricing: "paid",
    upvotes: 698,
    rating: 4.6,
    url: "https://notion.so",
    emoji: "📓",
    features: [
      "Q&A to search and summarize info across all company pages",
      "Autofill columns in databases using page text analysis",
      "AI action-item extractor for meeting transcripts",
      "One-click text rewrite and formatting cleanup"
    ],
    tags: ["Notion", "Wikis", "Productivity", "Documents"]
  },
  {
    id: "gamma",
    name: "Gamma App",
    tagline: "Generate beautiful presentation slides, webpages, and docs from text.",
    description: "Gamma compiles beautiful slide decks, briefs, or website pages from markdown copy or basic bullet lists, offering instant theme changes and design alignments.",
    category: "productivity",
    pricing: "freemium",
    upvotes: 788,
    rating: 4.8,
    url: "https://gamma.app",
    emoji: "📐",
    features: [
      "Draft presentation decks from plain text templates",
      "Responsive layout cards that adapt to slides or web pages",
      "Embedded videos, forms, and live web previews",
      "One-click professional theme switching"
    ],
    tags: ["Slides", "Presentation", "Websites", "Design"]
  }
];