import { AwsServiceGuideEntry } from '../types/textbook';

export const AWS_SERVICES_GUIDE: AwsServiceGuideEntry[] = [
  {
    id: 'amazon-bedrock',
    name: 'Amazon Bedrock',
    category: 'Generative AI & Foundation Models',
    oneLineRule: 'Serverless API access to top foundation models (text, chat, images, embeddings) plus Guardrails, Knowledge Bases, and Agents—no servers to manage.',
    whatItIs:
      'A fully managed AWS service that gives you single-API access to leading foundation models from Anthropic (Claude), Amazon (Nova / Titan), Meta (Llama), Mistral, Cohere, and Stability AI, along with built-in tools to customise, ground, evaluate, and safeguard them.',
    problemItSolves:
      'Building a generative AI model from scratch costs millions of dollars and requires massive GPU clusters. Amazon Bedrock lets teams pick a ready-made foundation model, keep data private inside AWS (not used to train base models), and build enterprise GenAI apps quickly.',
    inputs: 'Text prompts, chat histories, uploaded documents/images (for multimodal models), system instructions, and optional fine-tuning JSONL datasets.',
    outputs: 'Generated text, summaries, structured JSON, translations, vector embeddings, or images.',
    whenToUse: [
      'You want to build generative AI features (drafting replies, summarising calls, conversational answers) without managing GPU servers.',
      'You want to compare or switch between multiple foundation model families (e.g., Claude vs Amazon Nova vs Llama) using one unified API.',
      'You need built-in enterprise RAG (Knowledge Bases), tool calling (Agents), or safety controls (Guardrails).',
    ],
    whenNotToUse: [
      'You need to build a traditional tabular prediction model (like predicting numeric churn scores from spreadsheets)—use Amazon SageMaker AI.',
      'You only need simple speech-to-text, text-to-speech, or document OCR—use dedicated single-purpose services (Transcribe, Polly, Textract), which are cheaper and purpose-built.',
      'You need low-level control over custom PyTorch training clusters or bespoke neural network architectures—use Amazon SageMaker AI.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Drafting concise, accurate Home Fibre troubleshooting explanations for customer care agents handling *100 escalations, grounded in Safaricom’s technical manuals.',
    examRecognitionClues: [
      '"Build a generative AI application without managing infrastructure"',
      '"Access multiple foundation models through a single API"',
      '"Data must not be used to train the underlying provider model"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon SageMaker AI',
        difference: 'Bedrock is serverless access to pre-trained foundation models; SageMaker AI is a full ML workshop for building, training, and hosting custom ML models (and open-weight models with infrastructure control).',
      },
      {
        otherService: 'Amazon Q',
        difference: 'Bedrock is a developer platform for building your own GenAI apps; Amazon Q is a ready-to-use software assistant for employees or developers.',
      },
    ],
    taughtInWeeks: [3, 4, 5, 8, 10],
  },
  {
    id: 'amazon-sagemaker-ai',
    name: 'Amazon SageMaker AI',
    category: 'Machine Learning Platform',
    oneLineRule: 'The complete machine learning workshop to prepare data, build, train, tune, and deploy custom ML models at scale.',
    whatItIs:
      'A comprehensive, managed machine learning platform for data scientists and engineers to label data, prepare features, train custom ML algorithms (such as fraud detection or churn forecasting), tune hyperparameters, and host real-time or batch endpoints.',
    problemItSolves:
      'Pre-trained APIs cannot predict proprietary business numbers—like which specific Safaricom PrePay customer is likely to churn next week or whether a custom M-PESA reversal pattern looks anomalous. SageMaker AI lets teams train models on their own historical tabular or domain data.',
    inputs: 'Historical structured tables (CSV/Parquet in Amazon S3), feature datasets, custom training scripts, or Hugging Face / JumpStart model packages.',
    outputs: 'Trained custom model artifacts, real-time HTTPS prediction endpoints, or bulk Batch Transform predictions.',
    whenToUse: [
      'You need traditional predictive ML (churn prediction, numeric forecasting, anomaly detection on tabular transaction rows).',
      'You want full control over model architecture, custom training scripts, GPU instance types, and hyperparameter tuning.',
      'You want to deploy open-source foundation models (via SageMaker JumpStart) on dedicated infrastructure you control.',
    ],
    whenNotToUse: [
      'A non-technical business team simply wants a ready-made API for speech-to-text or receipt reading—use Transcribe or Textract.',
      'You want serverless generative AI text/chat with zero server provisioning—use Amazon Bedrock.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Training a supervised tabular model on anonymised historical Home Fibre tenure, outage tickets, and payment patterns to predict renewal risk.',
    examRecognitionClues: [
      '"Train a custom ML model on historical tabular data"',
      '"Full control over training infrastructure, hyperparameter tuning, or custom algorithms"',
      '"MLOps pipeline, Feature Store, or SageMaker JumpStart"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Bedrock',
        difference: 'SageMaker AI = build/train/host custom ML & manage endpoints; Bedrock = serverless API for foundation models.',
      },
      {
        otherService: 'Amazon Comprehend',
        difference: 'Comprehend is a pre-trained NLP API with zero ML coding; SageMaker AI requires building/training your own model.',
      },
    ],
    taughtInWeeks: [1, 4, 8],
  },
  {
    id: 'knowledge-bases-bedrock',
    name: 'Knowledge Bases for Amazon Bedrock',
    category: 'Generative AI & Foundation Models',
    oneLineRule: 'Turnkey RAG: connects foundation models to your company documents in Amazon S3 so answers are grounded in real facts with citations.',
    whatItIs:
      'A fully managed Retrieval-Augmented Generation (RAG) capability inside Amazon Bedrock that automatically chunks documents, converts them into vector embeddings, stores them in a vector database, retrieves relevant excerpts for each user question, and cites sources.',
    problemItSolves:
      'Foundation models do not know Safaricom’s private or newly updated tariffs (such as new M-PESA Global rates or 5G router setup steps) and can hallucinate when asked about internal policies. Knowledge Bases gives the model an "open-book" lookup before answering.',
    inputs: 'Company PDFs, Word docs, HTML pages, or text files stored in Amazon S3 (plus a user question at query time).',
    outputs: 'Factually grounded answers accompanied by source citations pointing back to the exact document excerpts.',
    whenToUse: [
      'You want a generative AI assistant to answer questions accurately from your own private, frequently updated documents.',
      'You want to reduce hallucinations without the cost or staleness of fine-tuning.',
      'You need source citations so customer care agents can verify where an answer came from.',
    ],
    whenNotToUse: [
      'You need the AI to take multi-step actions (like resetting a router or querying a live customer balance API)—pair with Agents for Amazon Bedrock.',
      'You only want to change the writing tone/style without adding new facts—use prompting or fine-tuning.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Connecting Zuri or an agent-assist portal to official Safaricom Roaming tariffs, PayBill onboarding guides, and Home Fibre FAQs in Amazon S3.',
    examRecognitionClues: [
      '"Reduce hallucinations using up-to-date proprietary company documents"',
      '"Managed RAG workflow with vector embeddings and source citations"',
      '"Avoid retraining/fine-tuning when policies change weekly"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Fine-tuning in Amazon Bedrock',
        difference: 'Fine-tuning teaches style/format/domain patterns; Knowledge Bases (RAG) injects dynamic, verifiable facts at runtime.',
      },
      {
        otherService: 'Agents for Amazon Bedrock',
        difference: 'Knowledge Bases retrieves documents (read-only knowledge); Agents execute multi-step workflows and call external APIs.',
      },
    ],
    taughtInWeeks: [6],
  },
  {
    id: 'agents-bedrock',
    name: 'Agents for Amazon Bedrock',
    category: 'Conversational & Workplace Assistants',
    oneLineRule: 'Autonomous multi-step task execution: plans reasoning steps, queries knowledge bases, and calls your APIs (via AWS Lambda) to get work done.',
    whatItIs:
      'A managed orchestration feature in Amazon Bedrock that enables foundation models to break down complex user requests into logical steps, ask follow-up questions if information is missing, query Knowledge Bases, and invoke enterprise APIs securely.',
    problemItSolves:
      'A normal chatbot can ex *how* an M-PESA reversal works, but it cannot check a ticket ID, look up an account status, and log a case note automatically. Agents bridge conversation with real operational systems.',
    inputs: 'Natural language user goals, OpenAPI schemas defining available actions, AWS Lambda functions, and optional Knowledge Bases.',
    outputs: 'Multi-step reasoning traces, executed API calls, and a final natural-language confirmation to the user.',
    whenToUse: [
      'A user request requires multiple sequential steps and live system lookups (check eligibility → verify status → create service ticket).',
      'You want the foundation model to decide dynamically which API/tool to invoke based on conversation context.',
    ],
    whenNotToUse: [
      'A simple fixed menu flow (e.g., Press 1 for balance, Press 2 for PUK) is enough—Amazon Lex is simpler and more deterministic.',
      'You only need read-only document Q&A—Knowledge Bases alone is sufficient.',
    ],
    safaricomExample:
      'Illustrative learning scenario: An enterprise support assistant for Daraja API developers that reads API docs via Knowledge Bases and runs an approved sandbox status check via an action group.',
    examRecognitionClues: [
      '"Orchestrate multi-step tasks and invoke company APIs / AWS Lambda functions"',
      '"Reason, plan, and execute actions autonomously"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Knowledge Bases for Amazon Bedrock',
        difference: 'Knowledge Bases = look up documents; Agents = plan steps and execute actions/APIs.',
      },
      {
        otherService: 'Amazon Lex',
        difference: 'Lex captures structured intents and slots in a predictable conversation tree; Agents use FM reasoning to dynamically chain tools.',
      },
    ],
    taughtInWeeks: [7],
  },
  {
    id: 'amazon-transcribe',
    name: 'Amazon Transcribe',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Speech-to-Text (ASR): converts spoken audio or call recordings into accurate written transcripts.',
    whatItIs:
      'An Automatic Speech Recognition (ASR) service that converts audio files or live audio streams into punctuated text, with support for speaker identification (who spoke when), custom vocabulary (like "M-PESA" or "PayBill"), and automatic PII redaction.',
    problemItSolves:
      'Contact-centre agents spend minutes after every *100 or *200 voice call typing up summaries, and supervisors cannot search thousands of hours of raw MP3 recordings for quality trends.',
    inputs: 'Audio files (WAV, MP3, FLAC, Ogg) in Amazon S3 or live streaming audio.',
    outputs: 'JSON or -text transcripts with timestamps, speaker labels, and confidence scores.',
    whenToUse: [
      'Converting recorded or live customer support phone calls into searchable text.',
      'Generating subtitles or meeting transcripts with speaker separation.',
    ],
    whenNotToUse: [
      'Converting written text into spoken audio—use Amazon Polly.',
      'Detecting customer sentiment (positive/negative) inside the text—pipe the transcript into Amazon Comprehend.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Converting authorised *100 M-PESA reversal support recordings into written transcripts with PII redaction for faster case documentation.',
    examRecognitionClues: [
      '"Speech-to-text"',
      '"Convert call centre audio recordings into written transcripts"',
      '"Automatic Speech Recognition (ASR) with speaker diarisation"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Polly',
        difference: 'Transcribe = Speech → Text (ears); Polly = Text → Speech (voice).',
      },
      {
        otherService: 'Amazon Comprehend',
        difference: 'Transcribe hears audio and writes words; Comprehend reads text and analyses sentiment/entities.',
      },
    ],
    taughtInWeeks: [2],
  },
  {
    id: 'amazon-polly',
    name: 'Amazon Polly',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Text-to-Speech (TTS): turns written text into natural-sounding spoken audio.',
    whatItIs:
      'A managed Text-to-Speech service using deep learning to synthesise lifelike human voices across dozens of languages and accents, with SSML controls for pacing, pauses, and pronunciation.',
    problemItSolves:
      'Recording human voice actors every time a Data Bundle price, Home Fibre outage notice, or *200 menu option changes is slow and expensive. Polly generates clear spoken audio immediately from text.',
    inputs: ' text or Speech Synthesis Markup Language (SSML) scripts.',
    outputs: 'Spoken audio streams or MP3/OGG/PCM audio files.',
    whenToUse: [
      'Generating dynamic voice responses for IVR phone systems (*100 / *200).',
      'Adding spoken audio accessibility to mobile apps like MySafaricom App.',
    ],
    whenNotToUse: [
      'Converting recorded customer speech into text—use Amazon Transcribe.',
      'Translating written  text into Swahili text—use Amazon Translate first, then Polly.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Reading personalised PostPay bill balances or Home Fibre maintenance updates aloud clearly in an automated *200 voice menu.',
    examRecognitionClues: [
      '"Text-to-speech (TTS)"',
      '"Read text aloud with natural lifelike voices"',
      '"Voice output for accessibility or IVR announcements"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Transcribe',
        difference: 'Polly speaks written text aloud; Transcribe listens to speech and writes it down.',
      },
    ],
    taughtInWeeks: [2],
  },
  {
    id: 'amazon-translate',
    name: 'Amazon Translate',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Neural Machine Translation: translates written text accurately between languages (e.g., Swahili ↔ ).',
    whatItIs:
      'A fast, managed neural machine translation service supporting 75+ languages—including Swahili and —with Custom Terminology support so brand names like "M-PESA", "Lipa na M-PESA", and "PayBill" remain untouched.',
    problemItSolves:
      'Kenya is multilingual: customers write support messages in , Swahili, or mixed phrasing, while regional roaming travellers may write in French or Arabic. Manual translation slows down customer care.',
    inputs: 'Written text strings or batch documents in a source language (or auto-detected language).',
    outputs: 'Translated text in the target language.',
    whenToUse: [
      'Translating customer chat messages, knowledge articles, or SMS/app alerts across languages at scale.',
      'Real-time multilingual customer support workflows.',
    ],
    whenNotToUse: [
      'Analysing whether a message is angry or happy—use Amazon Comprehend.',
      'Drafting brand-new creative replies from scratch—use Amazon Bedrock.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Translating Swahili Zuri support messages or Roaming visitor enquiries into  for specialist escalation teams while keeping Safaricom product names intact.',
    examRecognitionClues: [
      '"Translate text from one language to another"',
      '"Custom terminology so product names are not translated"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Comprehend',
        difference: 'Translate converts Language A → Language B; Comprehend extracts meaning, sentiment, and key phrases.',
      },
      {
        otherService: 'Amazon Transcribe',
        difference: 'Transcribe converts speech audio to text; Translate converts written text between languages.',
      },
    ],
    taughtInWeeks: [2],
  },
  {
    id: 'amazon-comprehend',
    name: 'Amazon Comprehend',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Natural Language Processing (NLP): analyses written text for sentiment, key phrases, entities, language, and PII—without writing ML code.',
    whatItIs:
      'A pre-trained NLP service that reads unstructured text and extracts structured insights: Sentiment (Positive, Negative, Neutral, Mixed), Entities (names, dates, locations), Key Phrases, Topics, Dominant Language, and Personally Identifiable Information (PII).',
    problemItSolves:
      'Reading 50,000 MySafaricom App reviews or *100 call transcripts manually to see why customers are frustrated with 4G speeds or Data bundles takes weeks. Comprehend classifies and measures sentiment automatically.',
    inputs: 'Unstructured text (customer reviews, call transcripts, emails, chat logs).',
    outputs: 'Structured JSON annotations: sentiment scores, entity lists, PII offsets/redacted text, or custom document classifications.',
    whenToUse: [
      'Detecting customer sentiment across thousands of app reviews or support transcripts.',
      'Automatically detecting and redacting PII (phone numbers, ID numbers) inside text.',
      'Routing incoming customer emails/tickets into categories using Comprehend Custom Classification.',
    ],
    whenNotToUse: [
      'Extracting text from a scanned PDF image or photo—use Amazon Textract first.',
      'Generating conversational paragraph replies—use Amazon Bedrock.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Analysing thousands of MySafaricom App feedback comments after a Data Bundle update to quantify sentiment by product and redact customer phone numbers.',
    examRecognitionClues: [
      '"Sentiment analysis, entity extraction, key phrases, or topic modelling"',
      '"Detect and redact PII in unstructured text"',
      '"Classify support tickets without building custom ML models"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Textract',
        difference: 'Textract extracts raw text/tables from scanned images/PDFs; Comprehend analyses the meaning/sentiment of text.',
      },
      {
        otherService: 'Amazon Macie',
        difference: 'Comprehend detects PII inside individual text streams/apps; Macie continuously scans entire Amazon S3 buckets for sensitive data compliance.',
      },
    ],
    taughtInWeeks: [2, 10],
  },
  {
    id: 'amazon-textract',
    name: 'Amazon Textract',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Intelligent Document OCR: extracts printed/handwritten text, form fields (key-value pairs), and tables from scanned documents and PDFs.',
    whatItIs:
      'A machine learning document-processing service that goes far beyond simple OCR—it understands document layout, linking labels like "Till Number:" to their values, preserving table rows/columns, and reading standard IDs or invoices.',
    problemItSolves:
      'When merchants apply for Lipa na M-PESA Buy Goods Till Numbers or PayBill accounts, or enterprises submit Safaricom Business contracts, staff spend hours manually re-typing fields from PDFs and scanned certificates.',
    inputs: 'Scanned document images (JPEG, PNG) or multi-page PDF files.',
    outputs: 'Structured JSON containing extracted text lines, key-value form pairs, table cells, and confidence scores.',
    whenToUse: [
      'Extracting structured form fields and tables from scanned applications, invoices, business permits, or PDFs.',
      'Automating merchant onboarding or SIM/enterprise paperwork entry.',
    ],
    whenNotToUse: [
      'Identifying objects, faces, or unsafe imagery in everyday photographs or CCTV video—use Amazon Rekognition.',
      'Analysing customer emotion in text—use Amazon Comprehend.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Extracting business registration numbers, directors’ names, and bank settlement table rows from scanned Lipa na M-PESA merchant onboarding forms.',
    examRecognitionClues: [
      '"Extract text, tables, and key-value pairs from scanned forms or PDFs"',
      '"Intelligent Optical Character Recognition (OCR) on documents"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Rekognition',
        difference: 'Textract = documents, forms, tables, PDFs; Rekognition = photos, scenes, objects, faces, videos.',
      },
    ],
    taughtInWeeks: [2],
  },
  {
    id: 'amazon-rekognition',
    name: 'Amazon Rekognition',
    category: 'Pre-Trained Speech, Language & Vision',
    oneLineRule: 'Computer Vision for images & video: detects objects, scenes, faces, PPE, inappropriate content, and text-in-the-wild.',
    whatItIs:
      'A pre-trained image and video analysis service capable of labelling objects and scenes, detecting inappropriate/unsafe content, comparing faces for identity verification, checking liveness, and reading short text on signs or equipment.',
    problemItSolves:
      'M-PESA Agent shop branding audits, SIM registration identity matching, or field technician safety checks on 5G masts require visual inspection across thousands of photos—impossible to review manually in real time.',
    inputs: 'Images (JPEG, PNG) or stored/streaming videos.',
    outputs: 'Detected labels, bounding-box coordinates, face similarity scores, moderation flags, and confidence percentages.',
    whenToUse: [
      'Matching a selfie against an ID photo (face comparison) or verifying a live human is present (Face Liveness).',
      'Moderating user-uploaded photos or inspecting field equipment photos for objects/safety gear.',
    ],
    whenNotToUse: [
      'Reading multi-page PDF contracts, structured tables, or tax forms—use Amazon Textract.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Comparing a customer’s selfie during digital SIM registration with the portrait on their uploaded ID card (with human fallback for low confidence), or checking M-PESA Agent kiosk signage photos.',
    examRecognitionClues: [
      '"Identify objects, faces, or unsafe content in images and videos"',
      '"Face comparison / identity verification / content moderation"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Textract',
        difference: 'Rekognition analyses visual scenes, objects, and faces; Textract reads structured documents, forms, and tables.',
      },
    ],
    taughtInWeeks: [2],
  },
  {
    id: 'amazon-lex',
    name: 'Amazon Lex',
    category: 'Conversational & Workplace Assistants',
    oneLineRule: 'Structured conversational bot builder: understands user intents and collects required slots across voice (*100 IVR) and chat.',
    whatItIs:
      'The conversational AI service (sharing technology with Amazon Alexa) for building structured voice and text chatbots using Intents (what the user wants), Utterances (ways they say it), and Slots (specific details needed, like phone number or amount).',
    problemItSolves:
      'Customers calling *100 or messaging Zuri often want clear, repeatable transactions—like checking a Home Fibre installation appointment, buying a Data Bundle, or starting an M-PESA reversal—where missing details must be collected reliably step by step.',
    inputs: 'Spoken voice audio or typed chat messages.',
    outputs: 'Identified Intent, filled Slot values, follow-up clarification prompts, and fulfillment triggers to AWS Lambda.',
    whenToUse: [
      'Building structured self-service chatbots and phone IVR menus that collect specific parameters (account number, date, bundle size).',
      'You want predictable, rules-safe transactional routing—optionally enhanced with Bedrock for open-ended fallback.',
    ],
    whenNotToUse: [
      'You only need one-way speech-to-text transcription—use Amazon Transcribe.',
      'You want an internal enterprise search assistant over SharePoint/wikis with zero bot-flow building—use Amazon Q Business.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Capturing the customer intent ("Check Home Fibre outage") and collecting required slots (account number and estate name) in Zuri or *100 voice self-service.',
    examRecognitionClues: [
      '"Intents, utterances, and slots"',
      '"Conversational IVR voice and text chatbot"',
      '"Guided multi-turn form filling by chat or phone"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Polly / Transcribe',
        difference: 'Transcribe and Polly only convert audio↔text; Lex manages the two-way conversation logic (intents & slots).',
      },
      {
        otherService: 'Amazon Q Business',
        difference: 'Lex is for building customer-facing transactional bots; Amazon Q Business is an out-of-the-box internal workplace assistant.',
      },
    ],
    taughtInWeeks: [5],
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q',
    category: 'Conversational & Workplace Assistants',
    oneLineRule: 'Ready-made generative AI assistant: Amazon Q Business for employees searching company knowledge; Amazon Q Developer for software teams.',
    whatItIs:
      'A family of turnkey generative AI assistants built by AWS. Amazon Q Business connects directly to 40+ workplace tools (S3, SharePoint, Confluence, Jira, ServiceNow) respecting existing user permissions. Amazon Q Developer helps engineers write, debug, and test code.',
    problemItSolves:
      'Employees waste hours hunting across internal portals, HR policies, and technical wikis, while Daraja API integration developers spend significant time writing boilerplate code and tests. Amazon Q delivers instant answers out of the box.',
    inputs: 'Employee natural-language questions (respecting their SSO permissions) or developer code/prompts inside an IDE.',
    outputs: 'Permission-aware answers with citations, drafted summaries/emails, or code suggestions and security scans.',
    whenToUse: [
      'You want an out-of-the-box internal workplace assistant for employees without building a custom RAG pipeline from scratch.',
      'Software engineers want AI coding help inside their IDE (Amazon Q Developer).',
    ],
    whenNotToUse: [
      'You are building a custom external customer-facing mobile app experience (like Zuri inside MySafaricom App)—build with Amazon Bedrock + Knowledge Bases.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Amazon Q Business helping Safaricom Business sales and customer care leads look up internal enterprise SLA rules, while Amazon Q Developer helps engineering teams build Daraja API integrations faster.',
    examRecognitionClues: [
      '"Out-of-the-box / turnkey enterprise assistant for employees"',
      '"Respects existing user access permissions across SharePoint/Jira/S3"',
      '"AI coding assistant inside IDE (Amazon Q Developer)"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Bedrock + Knowledge Bases',
        difference: 'Amazon Q is a finished SaaS assistant for employees/developers; Bedrock is the API toolkit to build your own custom customer-facing AI app.',
      },
    ],
    taughtInWeeks: [7],
  },
  {
    id: 'amazon-s3',
    name: 'Amazon S3',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Cloud object storage foundation: stores training datasets, call recordings, PDFs for RAG, and model artifacts durably and securely.',
    whatItIs:
      'Amazon Simple Storage Service (S3) is highly durable, scalable object storage used across almost every AWS AI architecture as the landing zone for unstructured and structured files.',
    problemItSolves:
      'AI services need a central, secure, infinitely scalable place to read PDFs, MP3 call recordings, ID images, and CSV training data—and to write transcripts or batch outputs.',
    inputs: 'Any file/object (PDFs, MP3s, JPEGs, JSONL, CSV, Parquet).',
    outputs: 'Securely stored objects accessible by IAM-authorised AI services via S3 URIs.',
    whenToUse: [
      'Storing source documents for Knowledge Bases for Amazon Bedrock.',
      'Storing training/validation data for Amazon SageMaker AI or batch transcripts from Amazon Transcribe.',
    ],
    whenNotToUse: [
      'When you need low-latency semantic vector similarity search—Knowledge Bases syncs S3 files into a vector database rather than querying raw PDFs directly.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Storing encrypted *100 audio files, official M-PESA Global tariff PDFs, and anonymised Home Fibre training datasets under strict bucket policies.',
    examRecognitionClues: [
      '"Central data lake / object storage for AI training data or RAG source documents"',
      '"Bucket policies, versioning, and server-side KMS encryption"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Knowledge Bases for Amazon Bedrock',
        difference: 'S3 stores the raw files; Knowledge Bases indexes those S3 files as vector embeddings for RAG.',
      },
    ],
    taughtInWeeks: [1, 6, 11],
  },
  {
    id: 'aws-iam',
    name: 'AWS IAM',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Identity & Access Management: enforces Least Privilege so only authorised people and services can invoke models or read data.',
    whatItIs:
      'The core AWS security service that controls authentication (who you are) and authorisation (exactly which AWS AI APIs, Bedrock models, or S3 buckets you are allowed to access).',
    problemItSolves:
      'If every employee or service had blanket admin access, a marketing script could accidentally invoke expensive models or read sensitive M-PESA reversal transcripts. IAM enforces strict least-privilege boundaries.',
    inputs: 'Users, roles, service principals, and JSON IAM permission policies.',
    outputs: 'Allow or Deny access decisions on every AWS API call.',
    whenToUse: [
      'Granting a Bedrock Agent role permission to read only one specific S3 bucket and invoke one specific Lambda function.',
      'Enforcing Role-Based Access Control (RBAC) across teams.',
    ],
    whenNotToUse: [
      'Encrypting the bytes inside a file (use AWS KMS) or logging who called an API yesterday (use AWS CloudTrail).',
    ],
    safaricomExample:
      'Illustrative learning scenario: Restricting access so the *100 transcription role can write transcripts to a secure S3 folder, while retail sales dashboards cannot access raw call audio.',
    examRecognitionClues: [
      '"Principle of least privilege"',
      '"Control which users or roles can invoke Amazon Bedrock models or read S3"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'AWS KMS',
        difference: 'IAM controls *who can call the API*; KMS manages the *cryptographic keys* that lock the data.',
      },
    ],
    taughtInWeeks: [11],
  },
  {
    id: 'aws-kms',
    name: 'AWS KMS',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Key Management Service: creates and controls encryption keys to protect sensitive AI data at rest in S3, Bedrock, and SageMaker.',
    whatItIs:
      'A managed cryptographic service that creates, rotates, and audits encryption keys—allowing enterprises to use Customer Managed Keys (CMKs) to lock data stored in S3, fine-tuned models, Knowledge Bases, and SageMaker volumes.',
    problemItSolves:
      'Regulated financial and telecommunications organisations must prove that customer records, national IDs, and M-PESA logs remain encrypted using keys they control and can audit or revoke.',
    inputs: 'Key policies, rotation schedules, and data-encryption requests from AWS services.',
    outputs: 'Encrypted/decrypted data keys and key usage audit trails.',
    whenToUse: [
      'Encrypting fine-tuned custom models in Amazon Bedrock, vector stores, S3 training buckets, or SageMaker notebooks with Customer Managed Keys.',
    ],
    whenNotToUse: [
      'Scanning buckets to discover where PII is hiding (use Amazon Macie).',
    ],
    safaricomExample:
      'Illustrative learning scenario: Encrypting SIM registration validation images and M-PESA Global compliance documents in Amazon S3 using a dedicated Customer Managed Key.',
    examRecognitionClues: [
      '"Encrypt data at rest with Customer Managed Keys (CMK)"',
      '"Control key rotation and cryptographic access policies"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'AWS IAM',
        difference: 'IAM = permissions for identities; KMS = cryptographic encryption keys.',
      },
    ],
    taughtInWeeks: [11],
  },
  {
    id: 'amazon-macie',
    name: 'Amazon Macie',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Automated S3 Sensitive Data Discovery: uses ML to find exposed PII, national IDs, or financial numbers inside Amazon S3 buckets.',
    whatItIs:
      'A fully managed data security service that continuously evaluates S3 buckets and uses machine learning and pattern matching to discover sensitive data (names, IDs, phone numbers, financial details) and alert on overly permissive public buckets.',
    problemItSolves:
      'Before feeding historical customer logs into an AI training job or Knowledge Base, teams must verify that no unredacted M-PESA transaction details or national ID numbers were accidentally left in an S3 folder.',
    inputs: 'Amazon S3 bucket configurations and stored files.',
    outputs: 'Sensitive data discovery findings, severity scores, and bucket security alerts.',
    whenToUse: [
      'Auditing S3 training datasets or RAG document buckets to discover forgotten PII or financial records before training/indexing.',
    ],
    whenNotToUse: [
      'Real-time blocking of a customer typing a PIN inside a live Bedrock chat prompt—use Amazon Bedrock Guardrails (PII redaction) for live prompts.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Scanning an Amazon S3 analytics bucket containing historical *100 notes to detect and flag unmasked customer phone numbers or ID strings before ML training.',
    examRecognitionClues: [
      '"Automatically discover sensitive data / PII stored in Amazon S3"',
      '"Alert on unencrypted or publicly accessible S3 buckets containing PII"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Bedrock Guardrails / Comprehend PII',
        difference: 'Macie scans S3 storage buckets at rest; Guardrails filters live GenAI prompts/responses; Comprehend detects PII in text APIs.',
      },
    ],
    taughtInWeeks: [11],
  },
  {
    id: 'aws-cloudtrail',
    name: 'AWS CloudTrail',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Governance Audit Log ("Who did what, when?"): records every AWS API call for security auditing and compliance.',
    whatItIs:
      'An auditing and governance service that continuously logs every API action across your AWS account—recording which IAM user or role invoked Bedrock, modified an IAM policy, deleted an S3 object, or created a SageMaker endpoint, along with timestamp and IP.',
    problemItSolves:
      'During an internal security audit or regulatory review, Safaricom governance teams need an immutable record proving who accessed an AI model configuration, changed Guardrails, or exported training data.',
    inputs: 'AWS management and data-plane API calls across services.',
    outputs: 'Immutable JSON audit event logs delivered to CloudTrail Event History and Amazon S3.',
    whenToUse: [
      'Answering "Who changed the Bedrock Guardrail settings?" or "Which role accessed the SIM registration S3 bucket?"',
      'Compliance auditing and security incident investigation.',
    ],
    whenNotToUse: [
      'Tracking model latency, error rates, or GPU CPU utilisation—use Amazon CloudWatch.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Maintaining an auditable governance trail of every configuration change and model invocation role activity across a Safaricom Business AI environment.',
    examRecognitionClues: [
      '"Audit who made an API call or changed a configuration"',
      '"Governance trail / compliance forensics"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon CloudWatch',
        difference: 'CloudTrail = Who did what API action (Audit); CloudWatch = How fast/healthy is the system running (Performance/Metrics/Alarms).',
      },
    ],
    taughtInWeeks: [12],
  },
  {
    id: 'amazon-cloudwatch',
    name: 'Amazon CloudWatch',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Operational Monitoring & Alarms: tracks model latency, token counts, invocation errors, and endpoint health in real time.',
    whatItIs:
      'An observability and monitoring service that collects operational metrics, application logs, and model invocation logs, enabling dashboards and automated alarms when latency spikes or errors increase.',
    problemItSolves:
      'If Zuri’s response time jumps from 1 second to 12 seconds during an evening Data Bundle promotion, or if Bedrock invocations start throttling, operations teams need immediate alerts and dashboards.',
    inputs: 'Metrics (latency, invocation count, token usage, 4xx/5xx errors) and application/model logs.',
    outputs: 'Real-time dashboards, threshold alarms, and automated notifications/auto-scaling triggers.',
    whenToUse: [
      'Monitoring GenAI latency, token consumption, throttling, and SageMaker endpoint health.',
      'Triggering alarms when error rates exceed SLA thresholds.',
    ],
    whenNotToUse: [
      'Auditing which administrator modified an IAM user policy—use AWS CloudTrail.',
      'Downloading third-party ISO/SOC compliance certificates—use AWS Artifact.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Monitoring peak-hour invocation latency and token volume on a Lipa na M-PESA merchant support assistant and alerting on-call engineers if latency exceeds 3 seconds.',
    examRecognitionClues: [
      '"Monitor performance metrics, latency, token usage, and set alarms"',
      '"Operational logs and dashboards"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'AWS CloudTrail',
        difference: 'CloudWatch = performance & health monitoring; CloudTrail = security & governance API audit log.',
      },
    ],
    taughtInWeeks: [8, 12],
  },
  {
    id: 'aws-artifact',
    name: 'AWS Artifact',
    category: 'Storage, Security, Governance & Monitoring',
    oneLineRule: 'Compliance Report Portal: self-service access to AWS’s independent third-party audit reports (ISO 27001, SOC 2, PCI-DSS).',
    whatItIs:
      'A central self-service portal providing on-demand access to AWS security and compliance certifications, independent auditor reports (SOC 1/2/3, ISO 27001, PCI-DSS), and agreements such as BAA/GDPR addenda.',
    problemItSolves:
      'When risk, legal, and compliance officers evaluate whether AWS cloud infrastructure meets banking/telecom security standards for M-PESA or enterprise workloads, they need official auditor reports—not marketing slides.',
    inputs: 'Compliance document selection by framework/region.',
    outputs: 'Downloadable official third-party audit reports and compliance agreements.',
    whenToUse: [
      'Providing risk & compliance teams with AWS’s SOC, ISO, or PCI-DSS compliance certifications.',
    ],
    whenNotToUse: [
      'Checking whether your own S3 bucket contains exposed PII (use Amazon Macie) or logging your own API calls (use AWS CloudTrail).',
    ],
    safaricomExample:
      'Illustrative learning scenario: Risk and governance teams downloading AWS’s ISO 27001 and PCI-DSS attestation reports when conducting due diligence for an M-PESA for Business AI pilot.',
    examRecognitionClues: [
      '"Download AWS SOC, ISO, or PCI-DSS compliance reports"',
      '"Independent third-party audit attestations and agreements"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'AWS CloudTrail',
        difference: 'Artifact gives you *AWS’s* independent compliance certifications; CloudTrail records *your* account’s API activity.',
      },
    ],
    taughtInWeeks: [12],
  },
  {
    id: 'sagemaker-clarify',
    name: 'Amazon SageMaker Clarify',
    category: 'Machine Learning Platform',
    oneLineRule: 'Fairness & Exability Auditor: detects statistical bias in datasets/models and exs which features drove a prediction.',
    whatItIs:
      'A specialised Responsible AI capability in SageMaker that inspects training datasets before training (pre-training bias), evaluates trained models for unfair disparities across demographic groups (post-training bias), and produces feature-attribution explanations (SHAP values).',
    problemItSolves:
      'If an ML model trained on historical data inadvertently gives lower eligibility scores to merchants in specific counties or age brackets, the business needs mathematical proof of bias and clear explanations of why each decision occurred.',
    inputs: 'Training dataset or model endpoint + sensitive/protected attributes (e.g., region, age group, gender) to audit.',
    outputs: 'Bias metrics (e.g., Class Imbalance, Disparate Impact) and feature importance / SHAP exability reports.',
    whenToUse: [
      'Auditing ML models for fairness/bias before and after training.',
      'Exing to regulators or supervisors why a model approved or flagged a specific record.',
    ],
    whenNotToUse: [
      'Filtering toxic language or PII inside a generative AI chatbot prompt—use Amazon Bedrock Guardrails.',
    ],
    safaricomExample:
      'Illustrative learning scenario: Auditing an illustrative PostPay or M-PESA for Business merchant scoring model to ensure rural and urban merchants are evaluated fairly and revealing which factors influenced a score.',
    examRecognitionClues: [
      '"Detect bias in training data or model predictions"',
      '"Model exability / feature importance / SHAP values"',
    ],
    commonlyConfusedWith: [
      {
        otherService: 'Amazon Bedrock Guardrails',
        difference: 'SageMaker Clarify audits ML datasets/models for statistical bias and feature exability; Bedrock Guardrails filters live GenAI prompts/outputs for toxicity, denied topics, and PII.',
      },
    ],
    taughtInWeeks: [9],
  },
];

export interface ComparisonPair {
  id: string;
  title: string;
  leftService: string;
  rightService: string;
  keyDistinction: string;
  safaricomRuleOfThumb: string;
}

export const SERVICE_COMPARISON_PAIRS: ComparisonPair[] = [
  {
    id: 'transcribe-vs-polly',
    title: 'Amazon Transcribe vs. Amazon Polly',
    leftService: 'Amazon Transcribe',
    rightService: 'Amazon Polly',
    keyDistinction: 'Transcribe converts human speech INTO written text (ASR). Polly converts written text INTO spoken audio (TTS).',
    safaricomRuleOfThumb: '*100 customer speaks → Transcribe writes case notes. *200 IVR needs to announce a balance → Polly speaks the text.',
  },
  {
    id: 'textract-vs-rekognition',
    title: 'Amazon Textract vs. Amazon Rekognition',
    leftService: 'Amazon Textract',
    rightService: 'Amazon Rekognition',
    keyDistinction: 'Textract extracts structured text, form key-value pairs, and tables from documents/PDFs. Rekognition analyses scenes, objects, faces, and safety in photos/videos.',
    safaricomRuleOfThumb: 'Lipa na M-PESA PDF business permit & tables → Textract. SIM registration selfie vs ID face match → Rekognition.',
  },
  {
    id: 'comprehend-vs-translate',
    title: 'Amazon Comprehend vs. Amazon Translate',
    leftService: 'Amazon Comprehend',
    rightService: 'Amazon Translate',
    keyDistinction: 'Comprehend analyses text for sentiment, entities, key phrases, and PII. Translate converts written text from one language into another.',
    safaricomRuleOfThumb: 'Is a MySafaricom App review angry or happy? → Comprehend. Turn a Swahili query into  → Translate.',
  },
  {
    id: 'bedrock-vs-sagemaker',
    title: 'Amazon Bedrock vs. Amazon SageMaker AI',
    leftService: 'Amazon Bedrock',
    rightService: 'Amazon SageMaker AI',
    keyDistinction: 'Bedrock gives serverless API access to pre-trained Foundation Models with zero server management. SageMaker AI is the full workshop to build, train, and host custom ML models (e.g., tabular churn/fraud) or custom-managed open weights.',
    safaricomRuleOfThumb: 'Draft Zuri replies or build RAG over Home Fibre PDFs fast → Bedrock. Train a custom numeric churn model on PrePay tables → SageMaker AI.',
  },
  {
    id: 'kb-vs-agents-vs-q',
    title: 'Knowledge Bases vs. Agents vs. Amazon Q',
    leftService: 'Knowledge Bases / Agents (Bedrock)',
    rightService: 'Amazon Q Business / Developer',
    keyDistinction: 'Knowledge Bases adds custom RAG facts; Agents adds multi-step API execution for apps you build. Amazon Q is an out-of-the-box finished assistant for internal employees or developers.',
    safaricomRuleOfThumb: 'Powering customer-facing Zuri with docs + API checks → Bedrock Knowledge Bases & Agents. Ready-made internal search for staff or Daraja coding → Amazon Q.',
  },
  {
    id: 'clarify-vs-guardrails',
    title: 'Amazon SageMaker Clarify vs. Bedrock Guardrails',
    leftService: 'Amazon SageMaker Clarify',
    rightService: 'Amazon Bedrock Guardrails',
    keyDistinction: 'Clarify audits ML data/models for statistical bias and feature exability (SHAP). Guardrails enforces live runtime safety on GenAI prompts/answers (toxicity, denied topics, PII, grounding).',
    safaricomRuleOfThumb: 'Check if merchant scoring treats counties fairly → SageMaker Clarify. Block Zuri from outputting customer IDs or off-policy advice → Bedrock Guardrails.',
  },
  {
    id: 'cloudtrail-vs-cloudwatch-vs-macie',
    title: 'AWS CloudTrail vs. Amazon CloudWatch vs. Amazon Macie',
    leftService: 'CloudTrail & Artifact',
    rightService: 'CloudWatch & Macie',
    keyDistinction: 'CloudTrail audits WHO made API calls; CloudWatch monitors operational latency/errors; Macie scans S3 buckets to find exposed PII; Artifact downloads AWS compliance certificates.',
    safaricomRuleOfThumb: 'Who changed permissions? → CloudTrail. Why is Zuri slow right now? → CloudWatch. Did someone leave ID numbers in S3? → Macie. Need ISO/PCI PDF? → Artifact.',
  },
];
