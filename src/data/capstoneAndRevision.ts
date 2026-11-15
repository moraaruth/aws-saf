export interface RevisionDomainSummary {
  domainId: string;
  domainTitle: string;
  weight: string;
  mustKnowConcepts: string[];
  highYieldExamTriggers: { clue: string; answer: string }[];
  commonTraps: string[];
}

export interface CapstoneStage {
  stageNumber: number;
  title: string;
  safaricomTouchpoint: string;
  awsServicesUsed: string[];
  whatHappensIn: string;
  dataIn: string;
  dataOut: string;
  responsibleAiAndSecurityControl: string;
}

export const FINAL_REVISION_DOMAINS: RevisionDomainSummary[] = [
  {
    domainId: 'domain-1',
    domainTitle: 'Domain 1: Fundamentals of AI and ML',
    weight: '20%',
    mustKnowConcepts: [
      'AI (umbrella) > Machine Learning (learns patterns from data) > Deep Learning (multi-layer neural networks for voice/images/text).',
      'Supervised learning uses labeled examples (Classification = categories like Fraud/Genuine; Regression = numbers like KES spend).',
      'Unsupervised learning finds hidden groups or anomalies in unlabeled data (e.g., IoT SIM clustering).',
      'Training = learning offline from historical data; Inference = making live predictions on new customer inputs.',
      'Pre-trained AWS AI APIs solve speech, text, document, and vision tasks immediately without training custom models.',
    ],
    highYieldExamTriggers: [
      { clue: 'Audio recordings → written text', answer: 'Amazon Transcribe' },
      { clue: 'Written text → natural spoken audio', answer: 'Amazon Polly' },
      { clue: 'Scanned PDFs, forms, tables → structured text', answer: 'Amazon Textract' },
      { clue: 'Photos/videos, faces, objects, unsafe imagery', answer: 'Amazon Rekognition' },
      { clue: 'Sentiment, key phrases, entities, PII in text', answer: 'Amazon Comprehend' },
      { clue: 'Convert text from Language A to Language B', answer: 'Amazon Translate' },
      { clue: 'Train custom ML on proprietary tabular data', answer: 'Amazon SageMaker AI' },
    ],
    commonTraps: [
      'Confusing Textract (structured documents/tables) with Rekognition (images/faces/objects).',
      'Picking SageMaker AI when a simple pre-trained API like Comprehend or Transcribe solves the problem with zero ML training.',
    ],
  },
  {
    domainId: 'domain-2',
    domainTitle: 'Domain 2: Fundamentals of Generative AI',
    weight: '24%',
    mustKnowConcepts: [
      'Foundation Models (FMs) are large pre-trained models adaptable across summarisation, drafting, Q&A, and coding.',
      'Tokens are sub-word chunks used for pricing and context-window limits; Embeddings turn meaning into searchable vectors.',
      'Decoding parameters: Temperature (near 0 = deterministic/factual; higher = creative), Top-P / Top-K limit token choices.',
      'Adaptation ladder (cheapest to most effort): Prompt Engineering → RAG → Fine-Tuning → Continued Pre-Training.',
      'Evaluation: Automated metrics (ROUGE for summaries, BLEU for translation, BERTScore for meaning) + Human evaluation for tone/trust.',
    ],
    highYieldExamTriggers: [
      { clue: 'Serverless access to multiple FMs via single API', answer: 'Amazon Bedrock' },
      { clue: 'Make model answers factual and consistent, less random', answer: 'Lower Temperature (e.g., 0.0–0.2)' },
      { clue: 'Teach model specific company tone/format with examples in prompt', answer: 'Few-Shot Prompting' },
      { clue: 'Improve multi-step reasoning in a prompt', answer: 'Chain-of-Thought (CoT) Prompting' },
      { clue: 'Structured chat/voice bot with Intents & Slots', answer: 'Amazon Lex' },
    ],
    commonTraps: [
      'Assuming Fine-Tuning adds up-to-date daily facts—fine-tuning teaches style/domain behavior; RAG adds current facts.',
      'Forgetting that Bedrock keeps your prompts and customisations private and never uses them to train underlying provider models.',
    ],
  },
  {
    domainId: 'domain-3',
    domainTitle: 'Domain 3: Applications of Foundation Models (Largest Domain)',
    weight: '28%',
    mustKnowConcepts: [
      'Retrieval-Augmented Generation (RAG) gives an FM an open-book search over chunked vector embeddings to reduce hallucinations and show citations.',
      'Knowledge Bases for Amazon Bedrock automates the entire RAG pipeline from Amazon S3.',
      'Agents for Amazon Bedrock plan multi-step workflows and invoke company APIs/Lambda functions.',
      'Amazon Q Business = turnkey employee assistant; Amazon Q Developer = IDE coding assistant.',
      'Cost/Latency optimisation: Model tiering (smaller faster models for simple tasks), Prompt Caching, Batch Inference, and Provisioned Throughput for steady high traffic.',
    ],
    highYieldExamTriggers: [
      { clue: 'Ground GenAI answers in changing PDFs with citations', answer: 'Knowledge Bases for Amazon Bedrock' },
      { clue: 'AI must plan steps and execute live APIs/tickets', answer: 'Agents for Amazon Bedrock' },
      { clue: 'Ready-made employee workplace search respecting SSO permissions', answer: 'Amazon Q Business' },
      { clue: 'Guaranteed throughput & latency for predictable peak load', answer: 'Amazon Bedrock Provisioned Throughput' },
      { clue: 'Process millions of overnight summaries at lower cost', answer: 'Batch Inference' },
    ],
    commonTraps: [
      'Buying Provisioned Throughput for a small low-traffic pilot (On-Demand is cheaper when traffic is low or spiky).',
      'Building a custom Bedrock RAG app when the question explicitly asks for a turnkey, zero-code internal employee search tool (Amazon Q Business).',
    ],
  },
  {
    domainId: 'domain-4',
    domainTitle: 'Domain 4: Guidelines for Responsible AI',
    weight: '14%',
    mustKnowConcepts: [
      'Core pillars: Fairness, Exability, Privacy & Security, Safety, Controllability, Veracity/Robustness, Governance, Transparency.',
      'Algorithmic bias comes from skewed historical data or proxy variables; requires pre-training and post-training bias audits.',
      'Exability shows *why* a prediction happened (e.g., SHAP feature importance); Transparency documents model limits (Model Cards).',
      'Human-in-the-Loop (HITL) keeps human specialists in charge of high-stakes financial or identity approvals.',
      'Runtime safety fences prevent toxicity, prompt injection, denied topics, PII leakage, and ungrounded claims.',
    ],
    highYieldExamTriggers: [
      { clue: 'Detect demographic bias & ex feature importance (SHAP)', answer: 'Amazon SageMaker Clarify' },
      { clue: 'Block harmful content, denied topics, & mask PII in GenAI', answer: 'Amazon Bedrock Guardrails' },
      { clue: 'Check if GenAI response actually matches retrieved RAG source', answer: 'Contextual Grounding Check (Guardrails)' },
      { clue: 'High-stakes decision with low model confidence', answer: 'Human-in-the-Loop (HITL) review' },
    ],
    commonTraps: [
      'Confusing SageMaker Clarify (fairness/exability on ML datasets & models) with Bedrock Guardrails (runtime filtering on GenAI chat/text).',
    ],
  },
  {
    domainId: 'domain-5',
    domainTitle: 'Domain 5: Security, Compliance, and Governance',
    weight: '14%',
    mustKnowConcepts: [
      'AWS Shared Responsibility Model: AWS secures physical servers & managed cloud infrastructure; Customer secures data, IAM permissions, KMS keys, and Guardrails.',
      'Least Privilege: IAM roles grant only the exact permissions required—never wildcard admin rights.',
      'Encryption at rest (AWS KMS Customer Managed Keys) and in transit (TLS).',
      'Sensitive data discovery (Macie), API Governance Auditing (CloudTrail), Operational Monitoring (CloudWatch), and Third-Party Compliance Reports (AWS Artifact).',
    ],
    highYieldExamTriggers: [
      { clue: 'Control who can invoke Bedrock or read an S3 bucket', answer: 'AWS IAM' },
      { clue: 'Encrypt S3 training data & fine-tuned models with own keys', answer: 'AWS KMS' },
      { clue: 'Find exposed PII/IDs hiding inside Amazon S3 buckets', answer: 'Amazon Macie' },
      { clue: 'Audit who called an API or changed Guardrail settings', answer: 'AWS CloudTrail' },
      { clue: 'Monitor model latency, token counts, and error alarms', answer: 'Amazon CloudWatch' },
      { clue: 'Download AWS SOC 2, ISO 27001, or PCI-DSS audit reports', answer: 'AWS Artifact' },
    ],
    commonTraps: [
      'Mixing up CloudTrail (API security audit: WHO did WHAT) with CloudWatch (operational performance: latency, errors, alarms).',
      'Thinking AWS automatically classifies and redacts sensitive data you upload to S3 without configuring Macie or IAM.',
    ],
  },
];

export const CAPSTONE_STAGES: CapstoneStage[] = [
  {
    stageNumber: 1,
    title: 'Channel Intake & Voice/Text Capture',
    safaricomTouchpoint: 'Customer contacts *100 by phone or messages Zuri in the MySafaricom App about an accidental PayBill payment or Home Fibre outage.',
    awsServicesUsed: ['Amazon Transcribe', 'Amazon Lex', 'Amazon Translate'],
    whatHappensIn:
      'If the customer speaks on *100, Amazon Transcribe converts the audio into punctuated text while redacting sensitive digits. If they write in Swahili on Zuri, Amazon Translate normalises it while preserving brand terms like "PayBill" and "M-PESA". Amazon Lex captures structured intent and account reference slots.',
    dataIn: 'Live *100 audio stream or Swahili/ Zuri chat message.',
    dataOut: 'Clean, structured text transcript + verified Intent ("MPESA_Reversal_Support") and Slot ("TransactionRef").',
    responsibleAiAndSecurityControl: 'Audio and chat streams travel over TLS encryption in transit; Transcribe PII redaction removes spoken ID numbers immediately.',
  },
  {
    stageNumber: 2,
    title: 'Grounded Policy Lookup & Document Reading',
    safaricomTouchpoint: 'Checking current M-PESA reversal eligibility windows or reading a scanned Lipa na M-PESA merchant receipt submitted by the customer.',
    awsServicesUsed: ['Amazon Textract', 'Amazon S3', 'Knowledge Bases for Amazon Bedrock'],
    whatHappensIn:
      'If the user uploads a receipt image or PDF, Amazon Textract extracts the merchant Till number, date, and amount accurately. Simultaneously, Knowledge Bases for Amazon Bedrock searches Safaricom’s latest official M-PESA reversal SOPs stored in Amazon S3 so the AI never guesses policy deadlines.',
    dataIn: 'Uploaded receipt PDF + official Safaricom SOP PDFs in Amazon S3.',
    dataOut: 'Structured receipt JSON fields + cited policy paragraphs.',
    responsibleAiAndSecurityControl: 'Amazon S3 buckets are encrypted with AWS KMS Customer Managed Keys and scanned regularly by Amazon Macie for stray unmasked PII.',
  },
  {
    stageNumber: 3,
    title: 'Orchestrated Reasoning & Action Execution',
    safaricomTouchpoint: 'Checking whether the reversal window is still open and preparing a pre-filled case summary for a Safaricom Care specialist.',
    awsServicesUsed: ['Amazon Bedrock', 'Agents for Amazon Bedrock'],
    whatHappensIn:
      'Agents for Amazon Bedrock coordinates the workflow: it inspects the extracted receipt amount, checks the Knowledge Base rules, invokes a read-only ticket-status AWS Lambda API, and uses a Foundation Model in Amazon Bedrock (at low Temperature 0.1) to draft a clear next-step summary.',
    dataIn: 'Structured user intent, extracted receipt data, Knowledge Base citations, and API tool schema.',
    dataOut: 'Step-by-step reasoning trace, logged draft support ticket, and clear customer update.',
    responsibleAiAndSecurityControl: 'IAM execution role enforces Least Privilege so the Agent can only log a draft review—never move M-PESA funds autonomously (Human-in-the-Loop approval required).',
  },
  {
    stageNumber: 4,
    title: 'Safety Guardrails & Multilingual Response Delivery',
    safaricomTouchpoint: 'Delivering the final reply to the customer in Zuri or via *100 voice playback.',
    awsServicesUsed: ['Amazon Bedrock Guardrails', 'Amazon Polly'],
    whatHappensIn:
      'Before the reply leaves the system, Amazon Bedrock Guardrails checks three things: (1) no harmful or off-policy advice (Denied Topics), (2) any accidental phone/ID number is masked (PII Filter), and (3) the answer matches the retrieved Safaricom SOP (Contextual Grounding). For *100 voice callers, Amazon Polly reads the approved message clearly.',
    dataIn: 'Draft Foundation Model response + retrieved SOP context.',
    dataOut: 'Policy-verified, PII-safe customer response in text (Zuri) or spoken audio (*100).',
    responsibleAiAndSecurityControl: 'Contextual Grounding blocks hallucinations (e.g., invented USSD codes); Denied Topics block unauthorised financial advice.',
  },
  {
    stageNumber: 5,
    title: 'Continuous Governance, Monitoring & Compliance',
    safaricomTouchpoint: 'Safaricom IT Operations, Risk, and Compliance teams overseeing the platform.',
    awsServicesUsed: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS Artifact', 'Amazon SageMaker Clarify'],
    whatHappensIn:
      'Amazon CloudWatch monitors response latency and token cost alarms during peak hours. AWS CloudTrail logs every API call and Guardrail change for forensic auditing. Risk officers download ISO/PCI reports via AWS Artifact, and any companion ML triage models are audited for demographic fairness with SageMaker Clarify.',
    dataIn: 'System metrics, AWS API events, model evaluation sets.',
    dataOut: 'Real-time operational dashboards, immutable audit trails, fairness reports, and compliance attestations.',
    responsibleAiAndSecurityControl: 'End-to-end compliance with the AWS Shared Responsibility Model and Safaricom customer trust standards.',
  },
];
