import { ExamDomainMeta, GlossaryTerm } from '../types/textbook';

export const EXAM_DOMAINS: ExamDomainMeta[] = [
  {
    id: 'domain-1',
    number: 1,
    title: 'Fundamentals of AI and ML',
    weightPercent: 20,
    description:
      'Core AI concepts, rule-based software versus machine learning, supervised/unsupervised/reinforcement learning, and pre-trained AWS AI services for speech, text, documents, and images.',
    weeks: [1, 2],
  },
  {
    id: 'domain-2',
    number: 2,
    title: 'Fundamentals of Generative AI',
    weightPercent: 24,
    description:
      'Foundation models, large language models, tokens, embeddings, model selection, fine-tuning versus prompting, evaluation metrics, and prompt engineering.',
    weeks: [3, 4, 5],
  },
  {
    id: 'domain-3',
    number: 3,
    title: 'Applications of Foundation Models',
    weightPercent: 28,
    description:
      'Retrieval-Augmented Generation (RAG) with Knowledge Bases, autonomous Agents calling APIs, Amazon Q enterprise assistants, cost optimisation, latency, and throughput trade-offs.',
    weeks: [6, 7, 8],
  },
  {
    id: 'domain-4',
    number: 4,
    title: 'Guidelines for Responsible AI',
    weightPercent: 14,
    description:
      'Fairness, bias detection, exability, human-in-the-loop oversight, toxicity filtering, PII redaction, hallucination checks, and trustworthy AI design.',
    weeks: [9, 10],
  },
  {
    id: 'domain-5',
    number: 5,
    title: 'Security, Compliance, and Governance',
    weightPercent: 14,
    description:
      'Shared responsibility model, least-privilege IAM permissions, KMS encryption, sensitive data discovery with Macie, CloudTrail auditing, CloudWatch monitoring, and AWS Artifact compliance.',
    weeks: [11, 12],
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'ai',
    term: 'Artificial Intelligence (AI)',
    plainDefinition:
      'Computer systems designed to perform tasks that normally require human judgement—such as understanding spoken Swahili or reading a national ID photo, or spotting an unusual payment.',
    technicalDefinition:
      'The broad field of computer science focused on building machines capable of perception, reasoning, learning, and decision-making.',
    safaricomContext:
      'Powering virtual support experiences like Zuri or helping verify documents during SIM registration.',
    introducedInWeek: 1,
  },
  {
    id: 'ml',
    term: 'Machine Learning (ML)',
    plainDefinition:
      'A way of teaching computers by showing them thousands of past examples rather than writing strict "if-then" rules by hand.',
    technicalDefinition:
      'A subset of AI in which statistical algorithms learn patterns from historical data to make predictions on new, unseen data without explicit rule programming.',
    safaricomContext:
      'Learning from historical M-PESA transaction patterns to flag suspicious reversal requests before money is lost.',
    introducedInWeek: 1,
  },
  {
    id: 'deep-learning',
    term: 'Deep Learning',
    plainDefinition:
      'A specialised type of machine learning that uses multi-layered mathematical networks (inspired loosely by brain connections) to understand complex things like voice audio, photos, and natural language.',
    technicalDefinition:
      'A subfield of machine learning utilizing multi-layer artificial neural networks to extract hierarchical representations from unstructured data.',
    safaricomContext:
      'Converting noisy *100 customer phone audio into clean written transcripts or reading handwritten M-PESA agent permits.',
    introducedInWeek: 1,
  },
  {
    id: 'training-vs-inference',
    term: 'Training vs. Inference',
    plainDefinition:
      'Training is "studying for the exam" using historical examples. Inference is "taking the exam"—using the trained model in real time to make a prediction for a live customer.',
    technicalDefinition:
      'Training optimizes model weights against labeled or unlabeled datasets; inference executes the trained model to produce outputs from live inputs.',
    safaricomContext:
      'Training happens offline on past PrePay bundle churn records; inference happens instantaneously when a customer opens the MySafaricom App.',
    introducedInWeek: 1,
  },
  {
    id: 'supervised-learning',
    term: 'Supervised Learning',
    plainDefinition:
      'Teaching a computer using past examples that already have the correct answer attached (like past M-PESA transactions labeled "Genuine" or "Fraudulent").',
    technicalDefinition:
      'ML training paradigm using labeled input-output pairs for classification (categories) or regression (continuous numbers).',
    safaricomContext:
      'Predicting whether a Home Fibre customer is likely to cancel next month, or estimating how much data a subscriber will use.',
    introducedInWeek: 1,
  },
  {
    id: 'unsupervised-learning',
    term: 'Unsupervised Learning',
    plainDefinition:
      'Giving a computer data without any answer labels and asking it to group similar items together or spot strange outliers.',
    technicalDefinition:
      'ML paradigm discovering hidden structure, clusters, or anomalies in unlabeled datasets.',
    safaricomContext:
      'Grouping Safaricom Business IoT SIM devices by usage behaviour or spotting unusual 5G cell tower traffic spikes.',
    introducedInWeek: 1,
  },
  {
    id: 'ocr-asr-nlp',
    term: 'ASR, TTS, OCR, and NLP',
    plainDefinition:
      'ASR turns speech into text; TTS turns text into spoken voice; OCR reads text off scanned pages; NLP understands the meaning and emotion inside written text.',
    technicalDefinition:
      'Automatic Speech Recognition, Text-to-Speech synthesis, Optical Character Recognition, and Natural Language Processing.',
    safaricomContext:
      'Transcribed *100 calls (ASR), automated *200 voice menus (TTS), reading Lipa na M-PESA business permits (OCR), and checking Zuri comt tone (NLP).',
    introducedInWeek: 2,
  },
  {
    id: 'foundation-model',
    term: 'Foundation Model (FM)',
    plainDefinition:
      'A giant, pre-trained AI model that has already read huge amounts of text (or seen millions of images) so it can be adapted to many tasks—summarising, drafting, translating, or answering questions—without starting from scratch.',
    technicalDefinition:
      'A large-scale neural network trained on broad, diverse datasets via self-supervised learning that serves as a general base for downstream tasks.',
    safaricomContext:
      'Using a foundation model inside Amazon Bedrock to draft helpful Home Fibre troubleshooting replies for customer care agents.',
    introducedInWeek: 3,
  },
  {
    id: 'token',
    term: 'Token',
    plainDefinition:
      'The tiny piece of text (roughly three-quarters of an  word, or one short word) that an AI model reads and charges by.',
    technicalDefinition:
      'The fundamental discrete unit of text (word, sub-word, or character sequence) processed by a tokenizer inside a transformer model.',
    safaricomContext:
      'When a customer writes a 40-word message to Zuri about M-PESA reversals, the model breaks it into roughly 55 input tokens and generates ~80 output tokens.',
    introducedInWeek: 3,
  },
  {
    id: 'embedding',
    term: 'Embedding (Vector)',
    plainDefinition:
      'A list of numbers that captures the real meaning of a sentence, so two sentences with similar meanings ("My Wi-Fi is down" and "Home Fibre has no internet") sit close together mathematically.',
    technicalDefinition:
      'A dense numerical vector representation mapping text, images, or audio into continuous semantic space where distance reflects similarity.',
    safaricomContext:
      'Matching a customer question in the MySafaricom App to the exact paragraph in Safaricom’s Roaming tariff guide even if the customer uses different wording.',
    introducedInWeek: 3,
  },
  {
    id: 'temperature',
    term: 'Temperature',
    plainDefinition:
      'A creativity dial from 0 to 1. Low temperature (near 0) makes answers consistent, factual, and predictable; high temperature makes answers more varied and creative.',
    technicalDefinition:
      'A decoding hyperparameter scaling logits before softmax sampling to control output randomness.',
    safaricomContext:
      'Set temperature near 0.0–0.2 when exing M-PESA PayBill reversal steps; set higher only for creative marketing slogans.',
    introducedInWeek: 4,
  },
  {
    id: 'fine-tuning',
    term: 'Fine-Tuning',
    plainDefinition:
      'Giving an already-trained foundation model extra lessons using your own company examples so it adopts your exact tone, format, or domain vocabulary.',
    technicalDefinition:
      'Updating a pre-trained model’s weights on a smaller, task-specific labeled dataset to specialize its behavior.',
    safaricomContext:
      'Training a model on 5,000 anonymised Daraja API developer support Q&As so it answers in Safaricom’s exact technical documentation style.',
    introducedInWeek: 4,
  },
  {
    id: 'hallucination',
    term: 'Hallucination',
    plainDefinition:
      'When a generative AI model confidently invents a wrong fact—such as making up a fake M-PESA USSD code or an incorrect Home Fibre price.',
    technicalDefinition:
      'Plausible-sounding but factually ungrounded or fabricated output generated by a probabilistic language model.',
    safaricomContext:
      'Prevented by grounding Zuri on verified Safaricom tariff documents via Retrieval-Augmented Generation (RAG).',
    introducedInWeek: 4,
  },
  {
    id: 'prompt-engineering',
    term: 'Prompt Engineering',
    plainDefinition:
      'Writing clear, structured instructions (including role, context, rules, and examples) so an AI model produces accurate, safe, and consistently formatted answers.',
    technicalDefinition:
      'The practice of designing and iteratively refining textual inputs (system instructions, few-shot examples, constraints) to steer FM outputs without altering weights.',
    safaricomContext:
      'Instructing an assistant: "You are a polite Safaricom Care helper. Ex Roaming bundles in 3 bullet points under 60 words. Never ask for an M-PESA PIN."',
    introducedInWeek: 5,
  },
  {
    id: 'rag',
    term: 'Retrieval-Augmented Generation (RAG)',
    plainDefinition:
      'Giving the AI an open-book exam: before answering, it looks up the latest official company documents and quotes only verified facts.',
    technicalDefinition:
      'An architecture that retrieves relevant chunks from an external vector store and injects them into the foundation model’s context window before generation.',
    safaricomContext:
      'Connecting Knowledge Bases for Amazon Bedrock to Safaricom’s official M-PESA Global tariff PDFs stored in Amazon S3.',
    introducedInWeek: 6,
  },
  {
    id: 'ai-agent',
    term: 'AI Agent',
    plainDefinition:
      'An AI system that does not just talk—it can plan steps and safely use approved software tools (like looking up a ticket status or initiating an API check) on a user’s behalf.',
    technicalDefinition:
      'An orchestration framework pairing a foundation model with reasoning loops (such as ReAct), memory, and action groups/API integrations.',
    safaricomContext:
      'Agents for Amazon Bedrock checking a Home Fibre outage status and booking a technician callback after verifying the account.',
    introducedInWeek: 7,
  },
  {
    id: 'provisioned-throughput',
    term: 'Provisioned Throughput vs. On-Demand',
    plainDefinition:
      'On-Demand is paying per message like a PrePay bundle; Provisioned Throughput is reserving dedicated highway lanes for predictable, heavy peak traffic.',
    technicalDefinition:
      'Pricing and capacity modes in Amazon Bedrock comparing pay-per-token serverless execution against reserved model units (MUs) with guaranteed throughput.',
    safaricomContext:
      'Using On-Demand for an internal pilot, and Provisioned Throughput when handling peak Lipa na M-PESA merchant support volume.',
    introducedInWeek: 8,
  },
  {
    id: 'algorithmic-bias',
    term: 'Algorithmic Bias & Exability',
    plainDefinition:
      'Bias happens when historical data teaches a model unfair habits; exability lets humans see *why* the model made a specific decision.',
    technicalDefinition:
      'Systematic unfairness across demographic groups caused by skewed training data or proxy features, audited via interpretability metrics like SHAP.',
    safaricomContext:
      'Using Amazon SageMaker Clarify to verify an illustrative M-PESA for Business merchant eligibility model treats rural and urban merchants fairly.',
    introducedInWeek: 9,
  },
  {
    id: 'guardrails-pii',
    term: 'Guardrails & PII Redaction',
    plainDefinition:
      'Safety fences around an AI model that automatically block harmful advice, catch off-topic requests, and hide personal details like ID numbers or phone numbers.',
    technicalDefinition:
      'Policy enforcement layers evaluating prompts and completions against content filters, denied topics, grounding thresholds, and Personally Identifiable Information (PII) masks.',
    safaricomContext:
      'Amazon Bedrock Guardrails masking a customer’s National ID or M-PESA PIN before text reaches logs or agents.',
    introducedInWeek: 10,
  },
  {
    id: 'shared-responsibility',
    term: 'AWS Shared Responsibility Model & Least Privilege',
    plainDefinition:
      'AWS protects the physical data centres and cloud hardware ("security OF the cloud"); Safaricom protects customer data, encryption keys, and who is allowed access ("security IN the cloud"). Least privilege means giving every user or app only the exact access it needs—nothing extra.',
    technicalDefinition:
      'Security governance division between cloud provider infrastructure controls and customer data, IAM policy, and encryption configurations.',
    safaricomContext:
      'Using AWS IAM roles and AWS KMS keys so only the *100 transcript processor—not marketing staff—can read encrypted call recordings in Amazon S3.',
    introducedInWeek: 11,
  },
];
