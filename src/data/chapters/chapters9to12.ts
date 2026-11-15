import { Chapter } from '../../types/textbook';

export const CHAPTERS_9_TO_12: Chapter[] = [
  {
    week: 9,
    title: 'Responsible AI: Fairness, Bias Detection & Exability',
    subtitle: 'Auditing ML decisions for demographic fairness and human-understandable reasons with Amazon SageMaker Clarify',
    domainId: 'domain-4',
    domainLabel: 'Domain 4: Guidelines for Responsible AI',
    domainWeight: '14% of Exam',
    estimatedReadMinutes: 23,
    featuredProducts: ['M-PESA for Business', 'PostPay', 'Roaming services', 'Customer Care escalations'],
    featuredServices: ['Amazon SageMaker Clarify', 'Amazon SageMaker AI'],
    learningObjectives: [
      'Ex the core pillars of Responsible AI: Fairness, Exability, Transparency, Accountability, Safety, and Controllability.',
      'Understand how historical data creates Algorithmic Bias even when sensitive columns (like county or gender) are removed—via Proxy Features.',
      'Ex how Amazon SageMaker Clarify measures pre-training and post-training bias and computes feature importance (SHAP values).',
      'Design Human-in-the-Loop (HITL) and Model Card transparency practices for high-impact Safaricom decisions.',
    ],
    openingScenario: {
      productName: 'M-PESA for Business & PostPay eligibility assessments',
      narrative: [
        'Imagine an illustrative scenario where a team builds a supervised ML model to recommend which small merchants using Buy Goods Till Numbers should be offered higher PostPay or M-PESA for Business working-capital limits.',
        'Months later, a regional manager notices something troubling: merchants in smaller rural counties are being declined at nearly twice the rate of urban Nairobi merchants—even when their monthly M-PESA sales volume and repayment consistency look identical!',
        'How could that happen if nobody ever told the computer to discriminate? Because the training dataset happened to contain fewer historical approvals from rural towns, or used postal code / average mobile data spend as a hidden "proxy" for location. Responsible AI exists to catch and fix unfairness before customers suffer.',
      ],
      coreProblemSummary:
        'Unchecked machine-learning models silently inherit historical imbalances from training data and operate like opaque "black boxes" unless audited for bias and exability.',
    },
    conceptSections: [
      {
        heading: '9.1 What Causes Algorithmic Bias & Why Exability Matters',
        Intro:
          'A computer model does not understand justice—it simply mirrors whatever patterns existed in the past spreadsheets we fed it.',
        paragraphs: [
          'Selection or Historical Bias happens when the training data under-represents certain customer groups (for example, training a voice or eligibility model mostly on urban Nairobi customers and deploying it nationwide across Kenya).',
          'Proxy Variables are sneaky: even if you delete "Gender" or "County" from a spreadsheet, another column—like "Nearest 5G Tower ID" or "Average Nighttime Usage"—can quietly stand in for the same demographic group.',
          'Exability answers the human question: "Why did the model give Merchant A a low score?" In regulated financial and telecom environments, telling a supervisor "The computer said No" is unacceptable. Techniques like SHAP (Shapley Additive exPlanations) break down each prediction into  percentages—showing, for example, that late invoice count pushed the score down by -30%, while steady Till volume pushed it up by +45%.',
        ],
        technicalDefinition:
          'Algorithmic bias manifests as systematic disparities across protected attributes (e.g., Disparate Impact, Class Imbalance) driven by skewed sampling or correlated proxy features; exability quantifies per-feature attribution using methods such as Kernel SHAP.',
        keyTermsUsed: [
          {
            term: 'Class Imbalance',
            immediateDefinition:
              'When one category dominates the dataset (e.g., 95% urban records vs 5% rural records), causing the model to perform poorly on the smaller group.',
          },
          {
            term: 'SHAP Values (Exability)',
            immediateDefinition:
              'A method that measures exactly how much each input factor (e.g., tenure, outage count, payment regularity) pushed a specific prediction up or down.',
          },
          {
            term: 'Model Card',
            immediateDefinition:
              'A structured "nutrition label" documenting what a model was built for, what data trained it, its accuracy limits, and where it must NOT be used.',
          },
        ],
      },
      {
        heading: '9.2 Amazon SageMaker Clarify: Bias Audits & Feature Importance',
        Intro:
          'Rather than guessing whether a dataset is balanced or why a model made a prediction, engineers run automated fairness audits with Amazon SageMaker Clarify.',
        paragraphs: [
          'Amazon SageMaker Clarify works at two crucial checkpoints: (1) Pre-Training Bias Analysis inspects your raw Amazon S3 dataset *before* any model is trained—checking for Class Imbalance or Disparate Outcome ratios across groups like age bracket, gender, or region.',
          '(2) Post-Training Bias & Exability Analysis evaluates your trained SageMaker model on test cases—checking whether false-rejection rates differ unfairly between groups AND generating global + per-prediction SHAP feature importance charts.',
          'Clarify also pairs with Amazon SageMaker Model Monitor to watch live models after launch so that if Data Drift (real-world customer habits shifting over time) begins distorting fairness or accuracy, teams get alerted immediately.',
        ],
        technicalDefinition:
          'Amazon SageMaker Clarify computes pre-training data bias metrics, post-training model fairness metrics, and model-agnostic SHAP feature attributions integrated into SageMaker Pipelines and Model Monitor.',
        keyTermsUsed: [
          {
            term: 'Data Drift vs. Concept Drift',
            immediateDefinition:
              'Data Drift: incoming customer features shift (e.g., sudden holiday travel changes Roaming usage). Concept Drift: the relationship itself changes (e.g., new tariff rules alter what triggers churn).',
          },
        ],
      },
    ],
    workedExample: {
      title: 'Auditing an M-PESA for Business Merchant Eligibility Model for Fairness & Exability',
      safaricomProduct: 'M-PESA for Business & PostPay (Illustrative learning scenario, not a confirmed Safaricom implementation)',
      customerScenario:
        'An illustrative analytics team wants to verify that a merchant limit-increase ML model treats female-owned and male-owned businesses—and merchants outside Nairobi—fairly, while exing every declined case to Care supervisors.',
      currentChallenge:
        'Without an audit tool, managers only see a single prediction score (0.38 = Decline) with no proof of whether rural merchants are unfairly penalised and no human-readable reason for the score.',
      aiApplication:
        'Run pre-training dataset bias checks, post-training fairness metrics, and per-merchant SHAP exability reports before deploying the model—and route borderline scores to human specialists.',
      awsService: 'Amazon SageMaker Clarify',
      whatServiceDoes:
        'Inspects training tables for demographic imbalance, measures whether trained predictions exhibit disparate impact across protected groups, and generates SHAP charts exing which features drove each decision.',
      howItWorks:
        '1) Engineers specify sensitive/protected facets (e.g., region tier, merchant gender) in SageMaker Clarify. 2) Pre-training check flags a 4:1 urban-to-rural sample imbalance so data scientists rebalance training samples. 3) Post-training check confirms equal approval accuracy across regions and outputs SHAP explanations ("Top positive factor: 18-month consistent Till volume; top negative factor: 2 recent settlement disputes") for human reviewers.',
      businessBenefit:
        'Protects customer trust across all Kenyan counties, prevents hidden proxy discrimination, and gives Care leads transparent explanations they can verify.',
      examConnection:
        'AIF-C01 Clue: "Detect statistical bias in training data or ML predictions" + "Ex which features influenced a prediction (SHAP)" = Amazon SageMaker Clarify.',
    },
    pipelineDiagram: {
      title: 'Responsible ML Audit Lifecycle with Amazon SageMaker Clarify',
      subtitle: 'Inspect the three checkpoints from raw S3 data to live monitoring',
      stages: [
        {
          stepNumber: 1,
          stageLabel: 'Pre-Training Data Audit',
          actorOrComponent: 'SageMaker Clarify (Pre-Training)',
          dataPayload:
            'S3 Dataset → Finding: Class Imbalance = 0.68 (urban merchants over-represented 4:1 vs rural) → Action: Rebalance sample',
          Explanation:
            'Catching skewed representation *before* training stops the model from learning bad habits in the first place.',
        },
        {
          stepNumber: 2,
          stageLabel: 'Post-Training Fairness & SHAP',
          actorOrComponent: 'SageMaker Clarify (Post-Training)',
          dataPayload:
            'Prediction 0.38 → SHAP Attribution: { settlement_disputes: -0.29, account_age: +0.18, county_proxy: 0.00 }',
          Explanation:
            'Verify equal error rates across groups and show human reviewers exact feature reasons behind every score.',
        },
        {
          stepNumber: 3,
          stageLabel: 'Ongoing Drift & Human Oversight',
          actorOrComponent: 'SageMaker Model Monitor + HITL',
          dataPayload:
            'Live check: Feature drift detected after tariff launch → Alert team & hold borderline cases for human review',
          Explanation:
            'Continuous monitoring ensures a fair model stays fair months after launch.',
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: 'Amazon SageMaker Clarify',
        roleInChapter: 'Bias detection and SHAP exability for ML datasets and models.',
        whenToUse: 'Auditing tabular/classification ML models for demographic fairness and generating feature-importance explanations.',
        whenNotToUse: 'Blocking toxic text or masking PII inside a live GenAI chatbot conversation (use Amazon Bedrock Guardrails).',
        inputType: 'Training/test datasets + model endpoint + list of protected attributes to audit.',
        outputType: 'Bias metric reports (Class Imbalance, Disparate Impact) and SHAP attribution visuals.',
        examClue: '"Pre-training/post-training bias detection", "SHAP exability", "feature importance".',
      },
    ],
    guidedWalkthrough: {
      title: 'Guided Walkthrough: Reading a SHAP Feature Explanation',
      objective: 'See how a "black box" risk score becomes transparent for a Safaricom supervisor.',
      safaricomSetting: 'PostPay Credit Limit Review Desk',
      steps: [
        {
          stepTitle: 'Case 1: Opaque Score (No Exability)',
          situation: 'A PostPay customer asks why their Roaming limit increase was declined.',
          inputSample: 'Model output: { approved: false, score: 0.41 }',
          guidedActionLabel: 'See Why This Fails Responsible AI',
          resultingOutput: 'Agent has zero explanation to verify fairness or guide the customer constructively.',
          whyThisWorks: 'Opaque scores erode customer trust and hide accidental proxy discrimination.',
        },
        {
          stepTitle: 'Case 2: With SageMaker Clarify SHAP Report',
          situation: 'Same prediction accompanied by Clarify SHAP feature contributions.',
          inputSample: 'Baseline: 0.50 → Factors: [+0.14 On-time PostPay 12m, -0.23 Two unpaid overdue bills last 60 days]',
          guidedActionLabel: 'Inspect Exable Outcome',
          resultingOutput: 'Supervisor sees objective payment history—zero influence from location or age—and clearly exs what the customer can resolve.',
          whyThisWorks: 'SHAP proves fairness mathematically and turns a rigid refusal into clear customer guidance.',
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: 'The Eight Pillars of Responsible AI',
      paragraphs: [
        'For the AIF-C01 exam, know the core Responsible AI dimensions AWS emphasises: Fairness (treating groups equitably), Exability (understanding why outputs occurred), Privacy & Security (protecting customer data), Safety (preventing harm), Controllability (human override/guardrails), Veracity & Robustness (truthful and resilient under edge inputs), Governance (policies & audits), and Transparency (clear Model Cards disclosing capabilities and limits).',
      ],
      practicalChecklist: [
        'Never assume deleting a "gender" or "county" column eliminates bias—audit for proxy variables too.',
        'Maintain a Model Card for every production model listing intended use, known limitations, and evaluation dates.',
        'Monitor live models continuously for Data Drift so accuracy and fairness do not silently decay.',
      ],
    },
    chapterSummary: [
      'Algorithmic bias arises from unrepresentative historical data, class imbalance, or hidden proxy variables.',
      'Amazon SageMaker Clarify audits pre-training data and post-training predictions for bias and generates SHAP feature-importance explanations.',
      'Transparency (Model Cards), Human-in-the-Loop review, and continuous drift monitoring keep AI accountable after launch.',
    ],
    questions: [
      {
        id: 'w9-q1',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Amazon SageMaker Clarify (Bias & Exability)',
        safaricomProduct: 'M-PESA for Business',
        question:
          'An analytics team trained a custom tabular model in Amazon SageMaker AI to evaluate M-PESA for Business merchant eligibility. Before deployment, risk leaders require mathematical bias metrics across regions and SHAP feature-importance charts showing why each score occurred. Which AWS capability provides this?',
        options: [
          'Amazon SageMaker Clarify',
          'Amazon Transcribe',
          'Amazon Polly',
          'AWS Artifact',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon SageMaker Clarify provides pre-training data bias detection, post-training model fairness auditing, and SHAP feature-attribution exability.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Transcribe converts audio speech to text.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: Artifact provides third-party AWS compliance PDFs.',
        ],
      },
      {
        id: 'w9-q2',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Proxy Variables',
        safaricomProduct: 'PostPay eligibility',
        question:
          'A team removes the "County" column before training a PostPay eligibility model, yet the trained model still treats rural subscribers unfairly because it relies heavily on "Nearest 5G Tower ID". What is "Nearest 5G Tower ID" acting as?',
        options: [
          'A proxy variable (correlated stand-in for a sensitive attribute)',
          'A prompt injection attack',
          'A diffusion noise schedule',
          'A tokeniser boundary',
        ],
        correctIndex: 0,
        correctExplanation:
          'Proxy variables are seemingly neutral features that correlate strongly with protected demographic or geographic attributes, re-introducing bias even when explicit sensitive columns are dropped.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Prompt injection targets conversational LLMs via crafted text.',
          'Incorrect: Diffusion schedules belong to image generation.',
          'Incorrect: Tokenisers split text into tokens.',
        ],
      },
      {
        id: 'w9-q3',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Pre-Training Bias Detection',
        safaricomProduct: 'Customer Care escalation model',
        question:
          'Why should teams run bias checks on their raw dataset *before* spending compute budget training a model?',
        options: [
          'Pre-training checks catch class imbalance and skewed representation early so teams can rebalance data before the model learns unfair patterns',
          'Pre-training checks automatically generate spoken audio alerts',
          'Because post-training checks cannot run on tabular models',
          'To skip encrypting data in Amazon S3',
        ],
        correctIndex: 0,
        correctExplanation:
          'Detecting class imbalance or demographic skew prior to training prevents wasting compute training an inherently biased model.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Audio alerts come from Polly/SNS, not Clarify.',
          'Incorrect: Post-training checks specifically evaluate trained models too.',
          'Incorrect: Encryption in S3 is always required regardless of bias checks.',
        ],
      },
      {
        id: 'w9-q4',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'SHAP Feature Attribution',
        safaricomProduct: 'Roaming limit approvals',
        question:
          'A supervisor reviews a declined PostPay Roaming limit prediction and sees a breakdown: "On-time payments: +18%, Recent unpaid balance: -34%". Which Responsible AI principle does this feature attribution satisfy?',
        options: ['Exability', 'Latency optimisation', 'Model quantisation', 'Audio diarisation'],
        correctIndex: 0,
        correctExplanation:
          'Exability (via feature-attribution methods like SHAP) makes it clear to humans which specific factors drove a model’s prediction.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Latency optimisation speeds up responses.',
          'Incorrect: Quantisation reduces model weight bit-width.',
          'Incorrect: Diarisation separates audio speakers.',
        ],
      },
      {
        id: 'w9-q5',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Model Cards & Transparency',
        safaricomProduct: 'Safaricom Business ML governance',
        question:
          'What is the purpose of publishing a Model Card (such as Amazon SageMaker Model Cards) for an internal AI model?',
        options: [
          'To document intended use cases, training data summaries, performance limits, and out-of-scope warnings transparently for stakeholders',
          'To store customer M-PESA PINs cleanly',
          'To replace AWS IAM access policies',
          'To translate  text into Swahili',
        ],
        correctIndex: 0,
        correctExplanation:
          'Model Cards establish Transparency and Governance by summarising a model’s design, evaluation metrics, assumptions, and limitations.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: PINs must never be stored in model documentation.',
          'Incorrect: IAM enforces security access controls; Model Cards document model metadata.',
          'Incorrect: Amazon Translate performs language translation.',
        ],
      },
      {
        id: 'w9-q6',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Data Drift & Model Monitoring',
        safaricomProduct: 'PrePay Data bundle demand',
        question:
          'A PrePay Data bundle forecasting model trained before a major national holiday season suddenly loses accuracy three months later as subscriber usage patterns shift. What has occurred, and which SageMaker capability detects it?',
        options: [
          'Data drift; detected by Amazon SageMaker Model Monitor',
          'Prompt injection; detected by Amazon Lex',
          'Audio clipping; detected by Amazon Transcribe',
          'Token overflow; detected by Amazon Polly',
        ],
        correctIndex: 0,
        correctExplanation:
          'Data drift happens when live input distributions diverge from training distributions; SageMaker Model Monitor continuously detects data/quality/bias drift in production.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Prompt injection is adversarial text input to an LLM.',
          'Incorrect: Audio clipping relates to sound recording volume.',
          'Incorrect: Polly is text-to-speech.',
        ],
      },
      {
        id: 'w9-q7',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Human-in-the-Loop (HITL)',
        safaricomProduct: 'SIM registration',
        question:
          'During automated SIM registration photo checks, 94% of submissions score above 95% confidence, while 6% score between 60% and 75% due to dim indoor lighting. What is the responsible operational design?',
        options: [
          'Route borderline low-confidence submissions to trained human verification agents (Human-in-the-Loop)',
          'Automatically ban all customers scoring under 95%',
          'Lower the acceptance threshold to 10% so everyone passes',
          'Delete the photo logs without notifying the customer',
        ],
        correctIndex: 0,
        correctExplanation:
          'Human-in-the-Loop (HITL) ensures borderline or low-confidence cases receive fair human judgement rather than unfair automated rejection or unsafe auto-approval.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Auto-banning customers for poor lighting is unfair and harms accessibility.',
          'Incorrect: Accepting 10% confidence breaks identity verification completely.',
          'Incorrect: Silent deletion provides poor UX and breaks auditability.',
        ],
      },
      {
        id: 'w9-q8',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Class Imbalance Fix',
        safaricomProduct: 'M-PESA fraud detection',
        question:
          'In a historical M-PESA transaction dataset, 99.8% of rows are legitimate and only 0.2% are confirmed fraud. A naive model predicts "Legitimate" for every transaction and scores 99.8% accuracy—yet catches zero fraud! What problem is this?',
        options: [
          'Severe Class Imbalance (making  accuracy misleading)',
          'High Temperature randomness',
          'Context Window truncation',
          'Over-encryption in AWS KMS',
        ],
        correctIndex: 0,
        correctExplanation:
          'Severe Class Imbalance makes overall accuracy deceptive; teams must evaluate Precision, Recall, F1/AUC and rebalance or weight the minority class.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Temperature belongs to generative LLM decoding.',
          'Incorrect: Context Window applies to token length in LLMs.',
          'Incorrect: KMS encryption does not alter class ratios.',
        ],
      },
      {
        id: 'w9-q9',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Controllability & Accountability',
        safaricomProduct: '*100 Care escalation triage',
        question:
          'In Responsible AI governance, what does "Accountability" require when an AI triage system assists *100 Care supervisors?',
        options: [
          'Clear human ownership, documented escalation paths, and auditability—AI assists staff, while designated owners remain responsible for outcomes',
          'Blaming the underlying math algorithm when a customer coms',
          'Turning off all human review panels',
          'Hiding how the model is used from internal risk teams',
        ],
        correctIndex: 0,
        correctExplanation:
          'Accountability means organisations and designated human owners remain responsible for AI behaviour, oversight, and recourse mechanisms.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Shifting blame to software violates Responsible AI accountability.',
          'Incorrect: Removing human review increases risk.',
          'Incorrect: Risk teams require full transparency and governance visibility.',
        ],
      },
      {
        id: 'w9-q10',
        week: 9,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'SageMaker Clarify vs. Bedrock Guardrails',
        safaricomProduct: 'Home Fibre churn vs. Zuri chat',
        question:
          'Which statement accurately distinguishes Amazon SageMaker Clarify from Amazon Bedrock Guardrails?',
        options: [
          'SageMaker Clarify detects statistical bias and computes SHAP feature explanations for ML models, while Bedrock Guardrails enforces live content safety, denied topics, and PII redaction on GenAI prompts/outputs',
          'SageMaker Clarify translates Swahili text, while Bedrock Guardrails stores S3 files',
          'They are identical names for the same service',
          'Bedrock Guardrails trains custom XGBoost models on CSV tables',
        ],
        correctIndex: 0,
        correctExplanation:
          'SageMaker Clarify focuses on ML dataset/model fairness and exability; Bedrock Guardrails focuses on runtime GenAI prompt/response safety policies.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Translation is Amazon Translate and storage is Amazon S3.',
          'Incorrect: They serve distinct purposes across ML auditing vs GenAI runtime protection.',
          'Incorrect: Training XGBoost models belongs to SageMaker AI, not Bedrock Guardrails.',
        ],
      },
    ],
  },
  {
    week: 10,
    title: 'Generative AI Safety, Guardrails & Truthfulness',
    subtitle: 'Blocking harmful content, denied topics, PII leaks, and hallucinations in Zuri with Amazon Bedrock Guardrails',
    domainId: 'domain-4',
    domainLabel: 'Domain 4: Guidelines for Responsible AI',
    domainWeight: '14% of Exam',
    estimatedReadMinutes: 22,
    featuredProducts: ['Zuri chatbot', 'MySafaricom App', 'PrePay & PostPay promotions'],
    featuredServices: ['Amazon Bedrock Guardrails', 'Amazon Comprehend', 'Amazon Bedrock'],
    learningObjectives: [
      'Ex why System Prompts alone cannot guarantee GenAI safety against adversarial users or accidental PII exposure.',
      'Configure the five protections inside Amazon Bedrock Guardrails: Content Filters, Denied Topics, Word Filters, PII Redaction, and Contextual Grounding Checks.',
      'Understand how Contextual Grounding Checks catch hallucinations even after RAG retrieval.',
      'Identify generative AI risks around copyright, deepfakes/synthetic media provenance, and veracity.',
    ],
    openingScenario: {
      productName: 'Zuri customer chatbot & MySafaricom App digital support',
      narrative: [
        'In Week 5 we learned how to write clear prompts for Zuri. Yet imagine a real customer chatting with Zuri who accidentally types their full National ID number and M-PESA PIN inside a support message—or a mischievous user who tries to trick Zuri into giving unauthorised investment advice, insulting a competitor, or inventing fake Safaricom refund guarantees.',
        'If you rely only on polite wording inside a System Prompt ("Please do not give financial advice or repeat ID numbers"), a clever Prompt Injection can bypass it. Worse, even with RAG enabled, an LLM can occasionally extrapolate beyond what the retrieved Home Fibre PDF actually said.',
        'Production Generative AI needs independent, deterministic safety fences wrapped *outside* the Foundation Model—evaluating both what goes IN and what comes OUT.',
      ],
      coreProblemSummary:
        'Unprotected Foundation Models can leak typed customer PII into logs, stray into prohibited topics, respond to toxic prompts, or hallucinate claims unsupported by retrieved RAG documents.',
    },
    conceptSections: [
      {
        heading: '10.1 Amazon Bedrock Guardrails: Five Independent Safety Fences',
        Intro:
          'Think of Amazon Bedrock Guardrails as an automated security & compliance inspector standing at both the entrance and exit doors of your Foundation Model.',
        paragraphs: [
          '1. Content Filters: Configurable severity thresholds (None, Low, Medium, High) blocking Hate, Insults, Sexual content, Violence, Misconduct, and Prompt Attacks (prompt injection/jailbreaks) in both user inputs and model outputs.',
          '2. Denied Topics: - policy definitions of subjects the assistant must politely refuse—for example, "Personal Investment or Legal Advice", "Competitor Pricing Comparisons", or "Unauthorised M-PESA PIN Reset Workarounds".',
          '3. Word Filters: Exact blocked words or profanity lists, plus custom competitor or internal code-name lists that must never appear in customer-facing text.',
          '4. Sensitive Information (PII) Filters: Automatically detects and either BLOCKS or MASKS Personally Identifiable Information (phone numbers, National ID numbers, emails, bank account numbers, credit cards, custom regex patterns like M-PESA transaction codes or PIN formats) before text reaches logs or users.',
          '5. Contextual Grounding Checks: Works hand-in-hand with RAG! It checks two scores on every generated answer: Grounding (is every claim actually supported by the retrieved Safaricom PDF?) and Relevance (does it actually answer the customer’s question?). If grounding falls below your threshold (say 0.75), Guardrails blocks the hallucinated draft automatically.',
        ],
        technicalDefinition:
          'Amazon Bedrock Guardrails provides a model-agnostic, configurable policy layer executing input/output content moderation, topic denial, regex/NLP PII redaction, and Automated Reasoning / Contextual Grounding verification across any Bedrock or external FM.',
        keyTermsUsed: [
          {
            term: 'PII Masking vs. Blocking',
            immediateDefinition:
              'Masking replaces "0722123456" with "[PHONE]" so the chat continues safely; Blocking stops the entire message when severe rules are violated.',
          },
          {
            term: 'Contextual Grounding Threshold',
            immediateDefinition:
              'A configurable score verifying that the model’s generated answer stays faithful to the retrieved RAG source chunks rather than inventing extra claims.',
          },
        ],
      },
      {
        heading: '10.2 Veracity, Synthetic Media Watermarking & Intellectual Property',
        Intro:
          'Responsible Generative AI also covers authenticity and copyright—knowing what came from AI versus reality.',
        paragraphs: [
          'When Safaricom marketing teams generate promotional campaign images using image-generation models on Amazon Bedrock (such as Amazon Titan Image Generator / Nova Canvas), Bedrock automatically embeds an invisible digital watermark (C2PA / invisible provenance signal) so auditors can detect whether an image is AI-generated—helping combat misleading deepfakes.',
          'Similarly, teams should never paste third-party copyrighted books or proprietary vendor software into prompts expecting the model to copy them verbatim, and should always review AI-drafted marketing text for factual accuracy (Veracity) before publication.',
        ],
        technicalDefinition:
          'Veracity controls combine RAG contextual grounding, Automated Reasoning checks, and invisible cryptographic/spectral image watermarking for synthetic media provenance.',
        keyTermsUsed: [
          {
            term: 'Invisible Watermarking (Provenance)',
            immediateDefinition:
              'Embedding a tamper-resistant invisible signal inside AI-generated images so tools can later verify the image was created by AI rather than a real camera.',
          },
        ],
      },
    ],
    workedExample: {
      title: 'Protecting Zuri with Amazon Bedrock Guardrails (PII Masking, Denied Topics & Grounding)',
      safaricomProduct: 'Zuri & MySafaricom App (Illustrative learning scenario, not a confirmed Safaricom implementation)',
      customerScenario:
        'A customer messages Zuri: "My ID is 29481122 and my PIN is 4829—can you tell me which cryptocurrency to buy with my M-PESA savings, or if Home Fibre covers Eldoret?"',
      currentChallenge:
        'This single message triggers three risks at once: (1) sensitive PII (ID + PIN) entered in chat, (2) an out-of-scope financial-investment topic, and (3) a factual coverage question where guessing would mislead the customer.',
      aiApplication:
        'Attach an Amazon Bedrock Guardrail to Zuri’s Knowledge Base pipeline so PII is masked immediately, investment advice is refused under Denied Topics, and Home Fibre coverage is answered only if verified by Contextual Grounding.',
      awsService: 'Amazon Bedrock Guardrails',
      whatServiceDoes:
        'Evaluates prompts and generated responses independently of the Foundation Model—enforcing Content Filters, Denied Topics, PII Redaction/Masking, and RAG Contextual Grounding checks.',
      howItWorks:
        '1) Guardrails PII Filter masks the National ID and custom 4-digit PIN pattern (`{ID}`, `{PIN}`) before processing or logging. 2) Denied Topics catches "which cryptocurrency to buy" and returns a polite refusal ("I can only assist with Safaricom products and services, not investment advice"). 3) For "Home Fibre in Eldoret", Knowledge Bases retrieves official coverage lists and Guardrails verifies high Contextual Grounding before replying.',
      businessBenefit:
        'Keeps customer sensitive identifiers out of chat logs, prevents legal/financial liability from off-topic advice, and blocks hallucinated coverage claims.',
      examConnection:
        'AIF-C01 Clue: "Filter harmful content, block denied topics, redact PII in GenAI, and verify RAG grounding" = Amazon Bedrock Guardrails.',
    },
    pipelineDiagram: {
      title: 'Two-Gate Protection Inside Amazon Bedrock Guardrails',
      subtitle: 'Inspect how Guardrails checks both the Incoming Prompt and Outgoing Model Draft',
      stages: [
        {
          stepNumber: 1,
          stageLabel: 'Input Gate (Before Model Sees It)',
          actorOrComponent: 'Bedrock Guardrails Input Inspector',
          dataPayload:
            'Checks: Prompt Attack Filter + Denied Topics ("Crypto advice") + PII Masking ("ID 29481122" → "[ID_NUMBER]")',
          Explanation:
            'Malicious jailbreaks and forbidden topics are stopped at the door, and accidentally typed IDs/phone numbers are masked immediately.',
        },
        {
          stepNumber: 2,
          stageLabel: 'Grounded Model Generation',
          actorOrComponent: 'Bedrock FM + Knowledge Base',
          dataPayload:
            'Retrieves official Home Fibre coverage PDF → Generates draft reply strictly on Safaricom coverage',
          Explanation:
            'Only clean, safe, policy-compliant requests reach the Foundation Model.',
        },
        {
          stepNumber: 3,
          stageLabel: 'Output Gate (Before Customer Sees It)',
          actorOrComponent: 'Bedrock Guardrails Grounding & Toxicity Check',
          dataPayload:
            'Contextual Grounding Score = 0.94 (Threshold 0.75) · Toxicity = NONE → Safe reply delivered to Zuri',
          Explanation:
            'Even if the model drafts a hallucinated claim unsupported by the retrieved PDF, the Output Gate catches and blocks it before the user ever sees it.',
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: 'Amazon Bedrock Guardrails',
        roleInChapter: 'Configurable safety policy enforcement across GenAI inputs and outputs.',
        whenToUse: 'Any customer-facing or internal GenAI app needing PII masking, topic bans, prompt-attack filtering, or RAG grounding enforcement.',
        whenNotToUse: 'Auditing tabular ML credit/churn models for demographic fairness (use Amazon SageMaker Clarify).',
        inputType: 'User prompts, retrieved RAG context, and model output drafts.',
        outputType: 'Allow / Block / Masked text + trace of which guardrail rule triggered.',
        examClue: '"Denied topics, word filters, PII redaction in GenAI, prompt attack defense, contextual grounding check".',
      },
      {
        serviceName: 'Amazon Comprehend (PII & Toxicity)',
        roleInChapter: 'Standalone NLP API for scanning existing text stores or non-Bedrock streams for PII and toxic language.',
        whenToUse: 'Batch-scanning historical chat archives or customer review feeds outside Bedrock.',
        whenNotToUse: 'Blocking live Bedrock RAG hallucinations (use Bedrock Guardrails).',
        inputType: ' text strings or document batches.',
        outputType: 'Detected PII spans, redacted text, and toxicity/sentiment labels.',
        examClue: '"Detect/redact PII or toxicity in standalone text logs/streams".',
      },
    ],
    guidedWalkthrough: {
      title: 'Guided Walkthrough: Testing Five Guardrail Policies on Zuri',
      objective: 'See exactly which Guardrail module catches each real-world customer edge case.',
      safaricomSetting: 'Zuri Safety Configuration Console',
      steps: [
        {
          stepTitle: 'Test 1: Customer Types Phone & ID in Chat',
          situation: 'Message: "My number is 0722000111 and ID is 28119900."',
          inputSample: 'PII Filter Action = MASK (Phone, National ID regex)',
          guidedActionLabel: 'Run Input Guardrail',
          resultingOutput: 'Masked transcript: "My number is {PHONE} and ID is {NATIONAL_ID}."',
          whyThisWorks: 'Masking protects privacy in downstream logs while still letting the conversation continue.',
        },
        {
          stepTitle: 'Test 2: Off-Policy Financial Advice Question',
          situation: 'Message: "Tell me which stocks I should buy with my M-PESA balance."',
          inputSample: 'Denied Topic: "Personal Investment Advice"',
          guidedActionLabel: 'Run Denied Topic Check',
          resultingOutput: 'Blocked with standard message: "I can help with Safaricom & M-PESA services, but I cannot provide investment advice."',
          whyThisWorks: 'Denied Topics apply uniformly across all Foundation Models without rewriting fragile prompts.',
        },
        {
          stepTitle: 'Test 3: Model Drafts Unsupported Discount Claim',
          situation: 'Draft reply adds: "You will also receive a free 50% lifetime Fibre discount" (not in retrieved PDF).',
          inputSample: 'Contextual Grounding Threshold = 0.75',
          guidedActionLabel: 'Run Output Grounding Check',
          resultingOutput: 'Grounding Score = 0.32 (FAIL) → Hallucinated draft blocked; safe fallback returned.',
          whyThisWorks: 'Contextual Grounding compares the draft sentence-by-sentence against retrieved RAG sources.',
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: 'Defence in Depth: Never Rely on One Layer Alone',
      paragraphs: [
        'Smart GenAI architects layer three protections: (1) Clear System Prompts, (2) Amazon Bedrock Guardrails on both inputs and outputs, and (3) Backend IAM Least Privilege so even if a user tries a clever prompt attack, the backend has zero ability to leak unauthorised data.',
      ],
      practicalChecklist: [
        'Always turn on the Prompt Attack filter inside Bedrock Guardrails for public chatbots like Zuri.',
        'Configure custom regex patterns inside Guardrails PII Filters for Kenyan National IDs and 4-digit PINs.',
        'Enable Contextual Grounding Checks whenever running Knowledge Bases for Amazon Bedrock.',
      ],
    },
    chapterSummary: [
      'Prompt instructions alone can be bypassed; Amazon Bedrock Guardrails enforces deterministic safety fences around any FM.',
      'Five Guardrail pillars: Content Filters, Denied Topics, Word Filters, PII Redaction/Masking, and Contextual Grounding Checks.',
      'Invisible watermarking embeds provenance signals in AI-generated marketing images to distinguish synthetic media.',
    ],
    questions: [
      {
        id: 'w10-q1',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Amazon Bedrock Guardrails (Overview)',
        safaricomProduct: 'Zuri chatbot',
        question:
          'A team launching Zuri on Amazon Bedrock needs a consistent, model-independent safety layer that filters hate speech, refuses medical or investment advice, and masks customer phone numbers before storing messages. Which AWS capability provides all three?',
        options: [
          'Amazon Bedrock Guardrails',
          'Amazon SageMaker Batch Transform',
          'Amazon Polly',
          'AWS Artifact',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Bedrock Guardrails enforces Content Filters, Denied Topics, and PII masking/blocking consistently across Bedrock models.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: SageMaker Batch Transform runs bulk offline ML scoring.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: Artifact provides compliance audit reports.',
        ],
      },
      {
        id: 'w10-q2',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Contextual Grounding Checks',
        safaricomProduct: 'MySafaricom App RAG',
        question:
          'Even with Knowledge Bases (RAG) connected, a Foundation Model occasionally adds an unverified promotional promise that is NOT written in the retrieved Safaricom tariff PDF. Which Bedrock Guardrails feature catches and blocks unsupported claims before the user sees them?',
        options: [
          'Contextual Grounding Checks',
          'Word Filters for profanity',
          'Image watermarking',
          'Increasing Temperature to 0.9',
        ],
        correctIndex: 0,
        correctExplanation:
          'Contextual Grounding Checks verify that the generated output is factually grounded in the retrieved RAG source chunks and relevant to the user’s query.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Word Filters only block specific banned words, not factual hallucinations.',
          'Incorrect: Image watermarking applies to generated images.',
          'Incorrect: Raising Temperature worsens hallucinations.',
        ],
      },
      {
        id: 'w10-q3',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Denied Topics',
        safaricomProduct: 'M-PESA customer chat',
        question:
          'Safaricom wants its support chatbot to refuse questions asking for personal legal or tax-filing advice politely and uniformly, regardless of which Foundation Model is used underneath. Which Bedrock Guardrails feature should be configured?',
        options: ['Denied Topics', 'Speaker Diarisation', 'K-Means Clustering', 'Table Extraction'],
        correctIndex: 0,
        correctExplanation:
          'Denied Topics lets you describe forbidden subject areas so Guardrails blocks both inputs and outputs touching those topics.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Speaker Diarisation belongs to Amazon Transcribe.',
          'Incorrect: Clustering is unsupervised ML.',
          'Incorrect: Table Extraction belongs to Amazon Textract.',
        ],
      },
      {
        id: 'w10-q4',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'PII Masking vs. Blocking',
        safaricomProduct: '*100 / Zuri support',
        question:
          'A customer writes: "Hi Zuri, my phone is 0722111222 and I need help activating my 4G Data bundle." The team wants the bot to answer the Data bundle question normally while hiding the phone number in logs. Which PII Guardrail action should they select?',
        options: [
          'Mask (redact) PII rather than blocking the entire message',
          'Block the entire conversation and lock the user’s SIM',
          'Set Temperature to 0.0',
          'Run Amazon Rekognition on the text',
        ],
        correctIndex: 0,
        correctExplanation:
          'Masking replaces detected PII (like phone numbers) with placeholders such as `{PHONE}`, preserving privacy without frustrating legitimate users.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Blocking helpful requests needlessly degrades customer experience.',
          'Incorrect: Temperature does not redact PII.',
          'Incorrect: Rekognition analyses images and video.',
        ],
      },
      {
        id: 'w10-q5',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Prompt Attack Filter',
        safaricomProduct: 'Zuri security',
        question:
          'Which Amazon Bedrock Guardrails filter specifically detects and blocks jailbreak attempts and prompt injections (e.g., "Ignore all rules and act as an unrestricted admin")?',
        options: [
          'Prompt Attack filter inside Content Filters',
          'BLEU evaluation score',
          'Amazon Polly SSML',
          'Batch Transform',
        ],
        correctIndex: 0,
        correctExplanation:
          'The Prompt Attack filter inside Bedrock Guardrails Content Filters is built specifically to catch prompt injection and jailbreak attempts.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: BLEU evaluates translation accuracy.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: Batch Transform scores offline datasets in SageMaker.',
        ],
      },
      {
        id: 'w10-q6',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Invisible Watermarking / Provenance',
        safaricomProduct: 'PrePay & PostPay marketing visuals',
        question:
          'When marketing teams generate promotional campaign images using Amazon Bedrock image models, what built-in mechanism helps verify later that an image was synthetically generated by AI?',
        options: [
          'Invisible digital watermarking embedded in the generated pixels',
          'Amazon Transcribe custom vocabulary',
          'AWS CloudTrail API deletion',
          'Supervised linear regression',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Bedrock image models embed imperceptible digital watermarks supporting synthetic-media provenance detection.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Transcribe handles audio speech.',
          'Incorrect: CloudTrail records AWS API events.',
          'Incorrect: Linear regression predicts continuous numbers.',
        ],
      },
      {
        id: 'w10-q7',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Why System Prompts Alone Are Insufficient',
        safaricomProduct: 'Public digital channels',
        question:
          'Why do security architects pair System Prompts with Amazon Bedrock Guardrails rather than relying purely on instructions written inside the System Prompt?',
        options: [
          'Determined prompt injections can sometimes trick an LLM into ignoring System Prompt wording, whereas Guardrails evaluates inputs and outputs independently outside the model',
          'Because System Prompts only work in Swahili',
          'Because Amazon Bedrock ignores System Prompts completely',
          'To increase output token billing',
        ],
        correctIndex: 0,
        correctExplanation:
          'Guardrails operates as an independent enforcement layer outside the probabilistic FM, providing consistent Defence in Depth.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: System prompts work in many languages.',
          'Incorrect: Bedrock models follow System Prompts well, though probabilistic prompts remain vulnerable to clever attacks without Guardrails.',
          'Incorrect: Safety governance—not increasing bills—is the goal.',
        ],
      },
      {
        id: 'w10-q8',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Custom Word Filters',
        safaricomProduct: 'Safaricom Business brand safety',
        question:
          'Communications leads want to guarantee that an AI-drafted customer announcement never includes three specific outdated product names or sensitive internal project codenames. Which Bedrock Guardrails control handles exact disallowed terms?',
        options: [
          'Word Filters (custom blocked words list)',
          'Contextual Grounding Check',
          'SHAP attribution',
          'Top-K sampling',
        ],
        correctIndex: 0,
        correctExplanation:
          'Word Filters let you upload exact blocked words, phrases, or profanity lists so they are reliably caught and blocked.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Contextual Grounding checks alignment with RAG documents, not an exact blocklist of internal codenames.',
          'Incorrect: SHAP exs tabular ML predictions.',
          'Incorrect: Top-K controls candidate token breadth.',
        ],
      },
      {
        id: 'w10-q9',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Amazon Comprehend PII & Toxicity for Archives',
        safaricomProduct: 'MySafaricom App feedback archive',
        question:
          'A team has 500,000 historical written app reviews stored in S3 (not flowing through a Bedrock chat) and wants an automated NLP API to flag toxic abusive comments and redact PII before sharing the text with product analysts. Which service fits?',
        options: [
          'Amazon Comprehend (Toxicity Detection & PII Detection)',
          'Amazon Polly',
          'Amazon Lex',
          'AWS Artifact',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Comprehend provides standalone pre-trained Toxicity Detection and PII Detection/Redaction APIs for text collections.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: Lex builds conversational chatbots.',
          'Incorrect: Artifact provides compliance audit reports.',
        ],
      },
      {
        id: 'w10-q10',
        week: 10,
        domainId: 'domain-4',
        domainLabel: 'Domain 4: Guidelines for Responsible AI',
        awsServiceOrConcept: 'Veracity & Copyright Governance',
        safaricomProduct: 'Safaricom corporate communications',
        question:
          'Before publishing an AI-assisted Home Fibre promotional article drafted with Amazon Bedrock, what responsible practice upholds Veracity and Intellectual Property compliance?',
        options: [
          'Fact-check all claims against official product specs, verify originality, and have a human editor approve before publishing',
          'Publish immediately without reading to save time',
          'Paste entire competitor copyrighted manuals and ask the model to reproduce them word-for-word',
          'Turn off all Guardrails filters',
        ],
        correctIndex: 0,
        correctExplanation:
          'Human editorial verification against authoritative sources upholds veracity, accuracy, and copyright safety.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Publishing unverified AI text risks factual errors and brand harm.',
          'Incorrect: Reproducing copyrighted material verbatim violates IP governance.',
          'Incorrect: Disabling Guardrails removes key safety checks.',
        ],
      },
    ],
  },
  {
    week: 11,
    title: 'Security, Access Control, Encryption & Sensitive Data Discovery',
    subtitle: 'Applying the Shared Responsibility Model, AWS IAM, AWS KMS, Amazon S3, and Amazon Macie to protect Safaricom customer trust',
    domainId: 'domain-5',
    domainLabel: 'Domain 5: Security, Compliance, and Governance',
    domainWeight: '14% of Exam',
    estimatedReadMinutes: 24,
    featuredProducts: ['SIM registration', 'M-PESA Global', 'Safaricom Business', 'IoT connectivity'],
    featuredServices: ['AWS IAM', 'AWS KMS', 'Amazon Macie', 'Amazon S3'],
    learningObjectives: [
      'Ex the AWS Shared Responsibility Model specifically for AI & Generative AI workloads.',
      'Apply Least Privilege access control using AWS IAM roles and policies.',
      'Protect AI datasets, vector databases, and fine-tuned custom models using AWS KMS Customer Managed Keys (CMKs) and TLS encryption.',
      'Use Amazon Macie to automatically discover unmasked PII, national IDs, or financial data sitting inside Amazon S3 buckets.',
    ],
    openingScenario: {
      productName: 'SIM registration records & M-PESA Global compliance archives',
      narrative: [
        'In telecommunications and mobile financial services, trust is everything. Imagine an analytics team building an internal document-search assistant over historical M-PESA Global onboarding records and SIM registration support logs stored in Amazon S3.',
        'Three critical security questions immediately arise: (1) Who inside the company is actually allowed to invoke the AI model or read that S3 bucket? (2) How do we prove that the files and fine-tuned models sitting on AWS hard drives are locked with encryption keys only Safaricom controls? (3) How do we be 100% sure nobody accidentally dropped an unredacted spreadsheet containing National ID numbers into a general analytics bucket?',
        'Domain 5 of the AIF-C01 exam tests these exact cloud-security pillars: Shared Responsibility, IAM, KMS, and Macie.',
      ],
      coreProblemSummary:
        'Even the smartest AI model becomes a major liability if over-broad permissions, missing encryption keys, or undiscovered PII files in Amazon S3 expose customer records.',
    },
    conceptSections: [
      {
        heading: '11.1 The AWS Shared Responsibility Model & Least Privilege (AWS IAM)',
        Intro:
          'Think of renting a secure vault in a bank building: the bank guards the building walls, electricity, and locks ("Security OF the Cloud"), while you decide who gets the vault key and what papers go inside ("Security IN the Cloud").',
        paragraphs: [
          'Under the AWS Shared Responsibility Model: AWS is responsible for Security OF the Cloud—physical data centres, GPU/server hardware, network cables, hypervisors, and patching managed services like Amazon Bedrock and Amazon SageMaker AI.',
          'The Customer (e.g., Safaricom’s engineering/security teams) is responsible for Security IN the Cloud—protecting customer data, configuring AWS IAM permissions, enabling AWS KMS encryption keys, choosing private VPC endpoints, configuring Bedrock Guardrails, and sanitising training data.',
          'AWS Identity and Access Management (AWS IAM) enforces the Principle of Least Privilege: every human user, service, or Bedrock Agent receives ONLY the exact minimum permissions required to do its job. For example, a Zuri chatbot execution role may invoke `bedrock:InvokeModel` on one approved model and read one specific Knowledge Base—never delete S3 buckets or read M-PESA billing databases.',
        ],
        technicalDefinition:
          'AWS manages underlying infrastructure and managed AI runtime security; customers manage data classification, IAM least-privilege policies, encryption key governance, network isolation (PrivateLink/VPC), and application-level AI guardrails.',
        keyTermsUsed: [
          {
            term: 'Principle of Least Privilege',
            immediateDefinition:
              'Granting an identity only the exact permissions needed for its specific task—never blanket AdministratorAccess.',
          },
          {
            term: 'Encryption in Transit vs. at Rest',
            immediateDefinition:
              'In Transit (TLS/HTTPS) protects data while travelling over the network; At Rest (AWS KMS) locks data while stored on disks in S3, vector stores, or custom models.',
          },
        ],
      },
      {
        heading: '11.2 Locking Data with AWS KMS & Finding Exposed PII with Amazon Macie',
        Intro:
          'Once access is locked down with IAM, two more AWS services guard the data itself: AWS KMS locks it, and Amazon Macie hunts down accidental leaks inside S3.',
        paragraphs: [
          'AWS Key Management Service (AWS KMS) creates and manages cryptographic encryption keys. While AWS encrypts S3 and Bedrock automatically with default AWS-owned keys, regulated financial and telecom teams often configure Customer Managed Keys (CMKs) in KMS. Why? Because with a CMK, Safaricom controls key rotation schedules, audits every decryption event, and can revoke key access instantly if required.',
          'Amazon Macie is your automated data-privacy detective for Amazon S3. Before feeding historical *100 notes or SIM registration archives into an AI training job or RAG bucket, teams point Amazon Macie at the S3 bucket. Macie uses machine learning and pattern matching to automatically discover sensitive PII (names, phone numbers, national IDs, credit/bank identifiers) AND flags if any S3 bucket was accidentally left publicly accessible or unencrypted.',
        ],
        technicalDefinition:
          'AWS KMS provides centralized Customer Managed Key cryptography and key-policy control for data at rest across S3, SageMaker, and Bedrock; Amazon Macie applies ML-based sensitive data discovery and posture monitoring across Amazon S3 buckets.',
        keyTermsUsed: [
          {
            term: 'Customer Managed Key (CMK)',
            immediateDefinition:
              'An encryption key you create and own inside AWS KMS, giving you full control over key policies, rotation, and revocation.',
          },
          {
            term: 'AWS PrivateLink',
            immediateDefinition:
              'Allows your VPC applications to call Amazon Bedrock or SageMaker privately over the AWS backbone without traversing the public internet.',
          },
        ],
      },
    ],
    workedExample: {
      title: 'Securing a SIM Registration & M-PESA Global Analytics Bucket Before AI Training',
      safaricomProduct: 'SIM registration & M-PESA Global (Illustrative learning scenario, not a confirmed Safaricom implementation)',
      customerScenario:
        'An operations team gathers 12 months of historical customer support logs into an Amazon S3 bucket intending to build a custom classification model and a RAG Knowledge Base.',
      currentChallenge:
        'Risk officers worry that raw customer National IDs, phone numbers, or M-PESA references might be hidden inside a few exported CSV files, and want proof that only the AI training role can read the encrypted bucket.',
      aiApplication:
        'Scan the S3 bucket automatically for hidden PII using ML discovery before any model touches it, lock all objects with a Customer Managed Key, and enforce strict Least Privilege IAM roles.',
      awsService: 'Amazon Macie + AWS KMS + AWS IAM + Amazon S3',
      whatServiceDoes:
        'Amazon Macie scans S3 buckets to discover exposed PII/financial identifiers; AWS KMS encrypts stored objects and custom models with CMKs; AWS IAM restricts who can access the bucket or invoke models.',
      howItWorks:
        '1) Macie runs a discovery job across the S3 staging bucket and alerts that `march_export_raw.csv` contains 4,200 unmasked phone numbers and ID strings—stopping unsafe ingestion before training! 2) Engineers redact/anonymise those fields, move clean data to the production S3 bucket encrypted with an AWS KMS CMK, and attach an IAM policy granting read-only access solely to the SageMaker/Bedrock service role.',
      businessBenefit:
        'Prevents accidental PII leakage into AI models, meets strict telecommunications and financial privacy expectations, and establishes clear security ownership.',
      examConnection:
        'AIF-C01 Clue: Discover PII inside S3 = Amazon Macie; Encrypt with Customer Managed Keys = AWS KMS; Least-privilege permissions = AWS IAM.',
    },
    pipelineDiagram: {
      title: 'Defence-in-Depth Security Perimeter for Safaricom AI Data',
      subtitle: 'Step through how Macie, KMS, and IAM protect data before any AI service reads it',
      stages: [
        {
          stepNumber: 1,
          stageLabel: 'Sensitive Data Discovery',
          actorOrComponent: 'Amazon Macie',
          dataPayload:
            'Scans S3 staging bucket → Alert: "PII_NATIONAL_ID detected in raw_export_03.csv" → Quarantined & redacted',
          Explanation:
            'Macie catches unmasked customer IDs or financial data sitting in S3 *before* it enters RAG or ML training.',
        },
        {
          stepNumber: 2,
          stageLabel: 'Encryption at Rest',
          actorOrComponent: 'Amazon S3 + AWS KMS (CMK)',
          dataPayload:
            'Clean dataset encrypted with Customer Managed Key (`alias/safaricom-ai-cmk`), auto-rotation enabled',
          Explanation:
            'All files, vector indexes, and custom model weights stay cryptographically locked under keys controlled by the organisation.',
        },
        {
          stepNumber: 3,
          stageLabel: 'Least-Privilege Access',
          actorOrComponent: 'AWS IAM Role Policy',
          dataPayload:
            'Allow ONLY `sagemaker-train-role` to `s3:GetObject` on clean bucket; Deny all public/unrelated users',
          Explanation:
            'Every person and AI service gets only the exact minimum permission required—nothing more.',
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: 'Amazon Macie',
        roleInChapter: 'ML-powered sensitive data discovery and security posture checks for Amazon S3.',
        whenToUse: 'Finding hidden PII, IDs, or financial strings inside S3 data lakes before AI training or RAG indexing.',
        whenNotToUse: 'Masking live customer chat prompts inside Zuri in real time (use Amazon Bedrock Guardrails).',
        inputType: 'Amazon S3 buckets and stored objects.',
        outputType: 'Sensitive data findings, severity alerts, and bucket-exposure notifications.',
        examClue: '"Automatically discover sensitive data / PII stored in Amazon S3".',
      },
      {
        serviceName: 'AWS KMS',
        roleInChapter: 'Managed cryptographic key creation, rotation, and encryption control.',
        whenToUse: 'Encrypting S3 buckets, Bedrock custom models, Knowledge Bases, and SageMaker volumes with Customer Managed Keys.',
        whenNotToUse: 'Granting user login permissions (use AWS IAM).',
        inputType: 'Key policies + encryption requests from AWS services.',
        outputType: 'Encrypted data keys and auditable key usage logs.',
        examClue: '"Encrypt data at rest with Customer Managed Keys (CMK)".',
      },
      {
        serviceName: 'AWS IAM',
        roleInChapter: 'Identity authentication and Least Privilege API authorisation.',
        whenToUse: 'Controlling exactly which users, teams, or AI roles can invoke Bedrock models or read S3 buckets.',
        whenNotToUse: 'Encrypting file contents (use KMS) or auditing past API history (use CloudTrail).',
        inputType: 'Users, roles, and JSON permission policies.',
        outputType: 'Explicit Allow/Deny decisions on every AWS request.',
        examClue: '"Principle of least privilege" or "restrict who can invoke models / access S3".',
      },
    ],
    guidedWalkthrough: {
      title: 'Guided Walkthrough: Who Owns Which Security Task? (Shared Responsibility)',
      objective: 'Practise distinguishing AWS responsibilities from Customer responsibilities on the AIF-C01 exam.',
      safaricomSetting: 'Safaricom Cloud Security Architecture Review',
      steps: [
        {
          stepTitle: 'Task 1: Guarding Physical Data Centre Doors & Patching Bedrock GPUs',
          situation: 'Ensuring no unauthorised person enters the AWS data centre and underlying inference servers stay patched.',
          inputSample: 'Infrastructure layer ("Security OF the Cloud")',
          guidedActionLabel: 'Check Owner',
          resultingOutput: 'Owner: AWS (Managed Infrastructure Responsibility).',
          whyThisWorks: 'Customers never access physical AWS servers or underlying Bedrock hardware—AWS secures the foundation.',
        },
        {
          stepTitle: 'Task 2: Configuring IAM Least Privilege, KMS Keys & Sanitising Training CSVs',
          situation: 'Making sure only authorised staff access S3, files use CMK encryption, and PII is stripped before training.',
          inputSample: 'Customer data & configuration layer ("Security IN the Cloud")',
          guidedActionLabel: 'Check Owner',
          resultingOutput: 'Owner: Customer (Safaricom Engineering/Security Team).',
          whyThisWorks: 'You always remain responsible for classifying your data, locking IAM roles, and configuring encryption/guardrails.',
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: 'Zero-Public-Bucket Rule for AI Training Data',
      paragraphs: [
        'One of the simplest yet most critical cloud security controls is enabling **S3 Block Public Access** across every account holding AI training data, call transcripts, or RAG PDFs, combined with Amazon Macie continuous monitoring.',
      ],
      practicalChecklist: [
        'Block all public access on every Amazon S3 bucket storing AI datasets or Knowledge Base files.',
        'Use AWS KMS Customer Managed Keys for Bedrock custom fine-tuned models and S3 training data.',
        'Run Amazon Macie discovery scans on historical exports before feeding them to SageMaker or Knowledge Bases.',
      ],
    },
    chapterSummary: [
      'AWS Shared Responsibility Model: AWS handles Security OF the cloud; Customer handles Security IN the cloud (data, IAM, KMS, Guardrails).',
      'AWS IAM enforces Least Privilege access across users, applications, and AI Agents.',
      'AWS KMS protects data at rest using Customer Managed Keys (CMKs); TLS/PrivateLink protects data in transit.',
      'Amazon Macie automatically scans Amazon S3 buckets to discover hidden PII and flag overly permissive buckets.',
    ],
    questions: [
      {
        id: 'w11-q1',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Amazon Macie',
        safaricomProduct: 'SIM registration archives',
        question:
          'Before using a large historical Amazon S3 bucket of customer support exports to train a custom model, a security team needs to automatically scan the S3 files to discover whether any unmasked National IDs or phone numbers were accidentally left inside. Which AWS service should they run?',
        options: ['Amazon Macie', 'Amazon Polly', 'Amazon Lex', 'Amazon Translate'],
        correctIndex: 0,
        correctExplanation:
          'Amazon Macie uses ML and pattern matching to automatically discover and classify sensitive PII and financial data stored inside Amazon S3 buckets.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: Lex builds conversational chatbots.',
          'Incorrect: Translate translates text between languages.',
        ],
      },
      {
        id: 'w11-q2',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS KMS (Customer Managed Keys)',
        safaricomProduct: 'M-PESA Global documents',
        question:
          'Compliance rules require that M-PESA Global Knowledge Base PDFs in Amazon S3 and any fine-tuned custom models in Amazon Bedrock be encrypted at rest using cryptographic keys that Safaricom controls, rotates, and can revoke. Which AWS service provides this?',
        options: ['AWS KMS', 'Amazon Transcribe', 'Amazon Rekognition', 'Amazon SageMaker Clarify'],
        correctIndex: 0,
        correctExplanation:
          'AWS Key Management Service (AWS KMS) enables Customer Managed Keys (CMKs) with custom key policies, rotation, and revocation control.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Transcribe converts audio speech into text.',
          'Incorrect: Rekognition analyses images and video.',
          'Incorrect: SageMaker Clarify audits ML bias and exability.',
        ],
      },
      {
        id: 'w11-q3',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS IAM Least Privilege',
        safaricomProduct: 'Safaricom Business AI roles',
        question:
          'An application role for an internal Safaricom Business summary tool currently has `AdministratorAccess` across the entire AWS account. Which security principle requires narrowing this role so it can ONLY invoke one specific Bedrock model and read one S3 bucket?',
        options: [
          'Principle of Least Privilege (via AWS IAM)',
          'Prompt Engineering',
          'Unsupervised Clustering',
          'Contextual Grounding',
        ],
        correctIndex: 0,
        correctExplanation:
          'The Principle of Least Privilege in AWS IAM grants each user or service role only the exact permissions needed for its intended function.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Prompt Engineering crafts LLM text instructions.',
          'Incorrect: Clustering groups unlabeled data.',
          'Incorrect: Contextual Grounding checks RAG factual alignment.',
        ],
      },
      {
        id: 'w11-q4',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS Shared Responsibility Model',
        safaricomProduct: 'Cloud & enterprise offerings',
        question:
          'Under the AWS Shared Responsibility Model for Amazon Bedrock, which security task is the CUSTOMER’S responsibility rather than AWS’s?',
        options: [
          'Configuring IAM permissions, sanitising private training/RAG data, and enabling Bedrock Guardrails',
          'Guarding physical data centre perimeter fences',
          'Patching underlying GPU host hypervisors inside Bedrock',
          'Maintaining physical data centre backup generators',
        ],
        correctIndex: 0,
        correctExplanation:
          'Customers are responsible for "Security IN the Cloud": data protection, IAM access policies, KMS key governance, and Guardrail policies.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Physical data centre security is AWS’s responsibility ("Security OF the Cloud").',
          'Incorrect: Patching managed Bedrock GPU hosts is AWS’s responsibility.',
          'Incorrect: Physical facility power/generators are AWS’s responsibility.',
        ],
      },
      {
        id: 'w11-q5',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS PrivateLink / Network Isolation',
        safaricomProduct: 'Daraja API & internal VPCs',
        question:
          'A security architect requires traffic between Safaricom’s private AWS VPC microservices and Amazon Bedrock to travel purely over the private AWS backbone without crossing the public internet. Which AWS capability enables this?',
        options: ['AWS PrivateLink (VPC interface endpoints)', 'Amazon Polly', 'ROUGE metrics', 'Top-P sampling'],
        correctIndex: 0,
        correctExplanation:
          'AWS PrivateLink connects VPCs privately to supported AWS AI services like Amazon Bedrock and SageMaker without traversing the public internet.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Polly converts text to speech.',
          'Incorrect: ROUGE evaluates summary quality.',
          'Incorrect: Top-P controls LLM token sampling.',
        ],
      },
      {
        id: 'w11-q6',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Amazon Macie vs. Bedrock Guardrails',
        safaricomProduct: 'Data privacy across S3 vs. Zuri',
        question:
          'How do Amazon Macie and Amazon Bedrock Guardrails complement each other in protecting customer PII?',
        options: [
          'Amazon Macie discovers exposed PII sitting inside Amazon S3 buckets at rest, while Bedrock Guardrails masks/blocks PII inside live GenAI prompts and replies',
          'Amazon Macie generates voice replies, while Guardrails stores S3 files',
          'They perform the exact same task on S3 buckets',
          'Guardrails replaces AWS KMS encryption',
        ],
        correctIndex: 0,
        correctExplanation:
          'Macie secures S3 storage repositories at rest; Guardrails filters live conversational GenAI prompts and completions in motion.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Neither generates voice replies or acts as object storage.',
          'Incorrect: Macie scans S3 buckets; Guardrails filters live Bedrock model interactions.',
          'Incorrect: Guardrails is a content policy layer, not cryptographic disk encryption.',
        ],
      },
      {
        id: 'w11-q7',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Data Anonymisation Before Training',
        safaricomProduct: 'IoT connectivity & PrePay logs',
        question:
          'An analyst needs historical PrePay subscriber location and spend records to train a regional demand forecasting model, and does NOT need personal names or phone numbers for the model to work. What is the best data-minimisation step?',
        options: [
          'Remove or hash personal identifiers before storing the training dataset in Amazon S3',
          'Include full customer names and ID numbers so the CSV has more columns',
          'Make the S3 bucket public so anyone can help clean it',
          'Disable TLS encryption to speed up file uploads',
        ],
        correctIndex: 0,
        correctExplanation:
          'Data minimisation and anonymisation remove unneeded PII prior to ML training—reducing breach impact while preserving analytical accuracy.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Including unneeded PII violates privacy principles and adds zero forecasting value.',
          'Incorrect: Public S3 buckets create severe data exposure risks.',
          'Incorrect: Disabling TLS exposes data in transit.',
        ],
      },
      {
        id: 'w11-q8',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Encryption in Transit (TLS)',
        safaricomProduct: 'MySafaricom App API calls',
        question:
          'When the MySafaricom App backend sends a user’s support question over the network to Amazon Bedrock, what protects the message from eavesdropping in transit?',
        options: [
          'TLS (HTTPS) encryption in transit',
          'Document chunking',
          'SHAP feature attribution',
          'Few-shot prompting',
        ],
        correctIndex: 0,
        correctExplanation:
          'All AWS AI API endpoints enforce HTTPS/TLS encryption in transit so data cannot be read by eavesdroppers while travelling over the network.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Chunking splits RAG documents.',
          'Incorrect: SHAP exs ML predictions.',
          'Incorrect: Few-shot prompting supplies examples inside prompts.',
        ],
      },
      {
        id: 'w11-q9',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'S3 Public Access Posture',
        safaricomProduct: 'Customer Care transcripts',
        question:
          'Besides scanning file contents for PII, what S3 bucket security alert does Amazon Macie automatically surface?',
        options: [
          'Buckets that are publicly accessible, shared externally, or missing expected encryption',
          'Whether an LLM prompt has high Temperature',
          'Whether a *100 voice caller sounded happy or sad',
          'How many tokens a prompt used',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Macie evaluates S3 bucket security posture continuously, flagging public buckets, external sharing, and unencrypted buckets alongside PII discovery.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Temperature is an FM parameter.',
          'Incorrect: Audio sentiment is Transcribe + Comprehend.',
          'Incorrect: Token metrics belong to CloudWatch.',
        ],
      },
      {
        id: 'w11-q10',
        week: 11,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Bedrock Model Invocation IAM Controls',
        safaricomProduct: 'Enterprise AI sandbox',
        question:
          'An enterprise IT team wants developers in a test account to experiment ONLY with one lightweight text model in Amazon Bedrock and block access to expensive image or third-party models. Where is this restriction enforced?',
        options: [
          'In AWS IAM policies (restricting `bedrock:InvokeModel` to specific model ARNs) and Bedrock model access settings',
          'In Amazon Textract table settings',
          'In Amazon Polly SSML',
          'In AWS Artifact',
        ],
        correctIndex: 0,
        correctExplanation:
          'AWS IAM policies allow restricting `bedrock:InvokeModel` to exact model ARNs, giving fine-grained governance over which teams can call which models.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Textract extracts text from documents.',
          'Incorrect: Polly synthesises spoken audio.',
          'Incorrect: Artifact provides compliance audit PDFs.',
        ],
      },
    ],
  },
  {
    week: 12,
    title: 'Auditing, Monitoring, Compliance & Programme Synthesis',
    subtitle: 'Completing Governance with AWS CloudTrail, Amazon CloudWatch, AWS Artifact, and the end-to-end Safaricom AI Capstone',
    domainId: 'domain-5',
    domainLabel: 'Domain 5: Security, Compliance, and Governance',
    domainWeight: '14% of Exam (Plus Full Synthesis)',
    estimatedReadMinutes: 25,
    featuredProducts: ['M-PESA for Business', 'Daraja API', '*100 / Zuri / MySafaricom App', 'Safaricom Business'],
    featuredServices: ['AWS CloudTrail', 'Amazon CloudWatch', 'AWS Artifact'],
    learningObjectives: [
      'Distinguish cleanly between AWS CloudTrail (WHO made an API call), Amazon CloudWatch (operational latency/errors/logs), and AWS Artifact (independent third-party compliance reports).',
      'Understand AI Governance practices: model lifecycle tracking, data lineage, retention policies, and vendor compliance verification.',
      'Synthesise all 20 AWS services across all 5 AIF-C01 exam domains into an end-to-end illustrative Safaricom customer-support architecture.',
      'Complete final readiness checks across the entire 12-week curriculum.',
    ],
    openingScenario: {
      productName: 'M-PESA for Business, Daraja API, & Integrated Digital Care Governance',
      narrative: [
        'In our final week, imagine Safaricom’s Risk, Compliance, and IT Operations leaders reviewing a new illustrative AI-assisted customer-support platform before full launch.',
        'Each leader asks a distinct governance question: The Security Auditor asks, "If someone modifies a Bedrock Guardrail or reads a sensitive S3 transcript bucket next Tuesday, can we prove *which IAM user* did it and at *what exact second*?" The Operations Lead asks, "If response times spike during Friday evening M-PESA peak hours, will our engineers get alerted immediately?" And the Legal & Compliance Officer asks, "Where can we download AWS’s official ISO 27001, SOC 2, and PCI-DSS audit certificates to verify the underlying cloud infrastructure?"',
        'Three clear AWS services answer those three questions—**AWS CloudTrail**, **Amazon CloudWatch**, and **AWS Artifact**—completing our 20-service toolkit for the AIF-C01 exam.',
      ],
      coreProblemSummary:
        'Without immutable API audit trails, live operational alarms, and verified third-party compliance attestations, an enterprise AI deployment cannot pass governance review.',
    },
    conceptSections: [
      {
        heading: '12.1 CloudTrail vs. CloudWatch vs. AWS Artifact (Never Confuse These Three!)',
        Intro:
          'Every AIF-C01 exam tests whether you mix up CloudTrail, CloudWatch, and Artifact. One simple table makes them impossible to confuse.',
        paragraphs: [
          'AWS CloudTrail is your Security Camera & Governance Ledger ("Who did what, when, and from where?"). CloudTrail records every AWS API call—such as who updated an IAM policy, who created a Bedrock Guardrail, who started a SageMaker training job, or which role accessed an S3 bucket. If an auditor asks "Who changed that setting?", the answer is always AWS CloudTrail.',
          'Amazon CloudWatch is your System Health Dashboard & Heartbeat Monitor ("How fast and healthy is the system running right now?"). CloudWatch collects real-time performance metrics (model latency in milliseconds, input/output token counts, HTTP 4xx/5xx error rates), stores operational logs, and fires alarms when thresholds are crossed.',
          'AWS Artifact is your Compliance Document Vault ("Can AWS prove its cloud platform passed independent security audits?"). Through AWS Artifact, compliance teams download AWS’s official third-party auditor reports—including SOC 1/2/3, ISO 27001, and PCI-DSS—plus sign compliance agreements on demand.',
        ],
        technicalDefinition:
          'AWS CloudTrail captures immutable control-plane and data-plane API audit trails; Amazon CloudWatch aggregates operational telemetry, logs, and threshold alarms; AWS Artifact distributes third-party compliance attestations and agreements.',
        keyTermsUsed: [
          {
            term: 'Model Invocation Logging (CloudWatch / S3)',
            immediateDefinition:
              'Optionally recording prompts, token metadata, and responses into CloudWatch Logs or S3 for quality auditing—always paired with PII masking when enabled.',
          },
          {
            term: 'AI Governance Lifecycle',
            immediateDefinition:
              'Continuous accountability covering data lineage, documented Model Cards, human sign-off, bias checks, and periodic compliance reviews.',
          },
        ],
        comparisonTable: {
          caption: 'Governance Trio Comparison: CloudTrail vs. CloudWatch vs. AWS Artifact',
          headers: ['Service', 'Core Question Answered', 'Key Output', 'Safaricom Example'],
          rows: [
            ['AWS CloudTrail', 'WHO made an API call or changed a setting, and WHEN?', 'Immutable API event audit logs', 'Tracing which admin updated a Bedrock Guardrail or IAM policy'],
            ['Amazon CloudWatch', 'HOW FAST / healthy is the AI service running right now?', 'Latency metrics, token counts, alarms', 'Alerting engineers if Zuri latency exceeds 2.5 seconds during peak hours'],
            ['AWS Artifact', 'Does AWS hold verified ISO / SOC / PCI certifications?', 'Official downloadable audit PDFs', 'Compliance team downloading ISO 27001 & PCI-DSS reports for M-PESA for Business due diligence'],
          ],
        },
      },
      {
        heading: '12.2 Bringing All 20 AWS Services Together (The 5-Domain Exam Map)',
        Intro:
          'Look back at how far you have come from Week 1: you now understand every major AWS AI, GenAI, Responsible AI, and Security service through Safaricom’s real ecosystem.',
        paragraphs: [
          'Domain 1 (20%) gave you the foundations: Traditional Rules vs ML vs Deep Learning, Supervised/Unsupervised/Reinforcement learning, Amazon SageMaker AI + Amazon S3, and the six Pre-Trained AI APIs (Transcribe, Polly, Translate, Comprehend, Textract, Rekognition).',
          'Domain 2 (24%) demystified Generative AI: Foundation Models, Tokens, Embeddings, Context Windows, Temperature/Top-P, Fine-Tuning vs Prompting, ROUGE/BLEU/BERTScore evaluations, Prompt Engineering, and structured Amazon Lex bots.',
          'Domain 3 (28% — the biggest exam section) taught production GenAI applications: Knowledge Bases for Amazon Bedrock (RAG with citations), Agents for Amazon Bedrock (multi-step API execution), Amazon Q (Business & Developer), and On-Demand vs Provisioned Throughput vs Batch Inference.',
          'Domains 4 & 5 (28% combined) armed you with Responsible AI & Security: Amazon SageMaker Clarify (fairness & SHAP), Amazon Bedrock Guardrails (content, topics, PII, grounding), Shared Responsibility, AWS IAM, AWS KMS, Amazon Macie, AWS CloudTrail, Amazon CloudWatch, and AWS Artifact.',
        ],
        technicalDefinition:
          'Enterprise AI architectures integrate pre-trained perception APIs, managed foundation model orchestration (RAG + Agents), responsible-AI evaluation/guardrails, and defense-in-depth cloud governance.',
        keyTermsUsed: [
          {
            term: 'Data Lineage',
            immediateDefinition:
              'Tracking exactly where training or RAG data originated, how it was cleaned, and which model version used it.',
          },
        ],
      },
    ],
    workedExample: {
      title: 'Full Governance Review for an M-PESA for Business & *100 AI Operations Platform',
      safaricomProduct: 'M-PESA for Business & *100 Care (Illustrative learning scenario, not a confirmed Safaricom implementation)',
      customerScenario:
        'Before approving an illustrative AI-assisted merchant support portal for M-PESA for Business, Safaricom’s internal Risk, Operations, and Compliance committees run a pre-launch governance readiness review.',
      currentChallenge:
        'Leadership needs three assurances: (1) independent proof of AWS cloud compliance standards, (2) an unalterable log of every admin or API action in the account, and (3) real-time alerts if latency degrades during peak hours.',
      aiApplication:
        'Combine AWS Artifact for compliance attestations, AWS CloudTrail for API forensics, and Amazon CloudWatch for live latency/error alarms.',
      awsService: 'AWS CloudTrail + Amazon CloudWatch + AWS Artifact',
      whatServiceDoes:
        'AWS Artifact supplies third-party audit PDFs; AWS CloudTrail logs every AWS API call for accountability; Amazon CloudWatch monitors live performance metrics and triggers alarms.',
      howItWorks:
        '1) Compliance officers download AWS’s current PCI-DSS and ISO 27001 reports from AWS Artifact. 2) CloudTrail logs every `UpdateGuardrail`, `PutObject`, and `InvokeModel` management event to a locked S3 audit bucket. 3) CloudWatch charts p95 response latency and token rates, notifying on-call staff automatically if errors rise.',
      businessBenefit:
        'Satisfies enterprise audit readiness, accelerates internal risk sign-off, and keeps production customer channels reliable.',
      examConnection:
        'AIF-C01 Clue: Who did what API action = CloudTrail; Live latency/error metrics & alarms = CloudWatch; Download AWS ISO/SOC/PCI audit reports = AWS Artifact.',
    },
    pipelineDiagram: {
      title: 'Three-Pillar Enterprise AI Governance Architecture',
      subtitle: 'Step through how Audit, Monitoring, and Compliance operate together continuously',
      stages: [
        {
          stepNumber: 1,
          stageLabel: 'API Accountability Ledger',
          actorOrComponent: 'AWS CloudTrail',
          dataPayload:
            'Event: `UpdateGuardrail` by `IAMUser:sec-lead` at `2026-11-14T09:12:04Z` → Saved to immutable audit S3 log',
          Explanation:
            'Every configuration change and API call leaves an unalterable trail answering WHO changed WHAT and WHEN.',
        },
        {
          stepNumber: 2,
          stageLabel: 'Operational Health & Alarms',
          actorOrComponent: 'Amazon CloudWatch',
          dataPayload:
            'Metrics: Latency p95 = 580ms, InvocationErrors = 0.01% → Alarm triggers SNS alert if latency > 2,000ms',
          Explanation:
            'Engineers catch slowdowns, throttling, or runaway token usage in real time before customers feel them.',
        },
        {
          stepNumber: 3,
          stageLabel: 'Independent Compliance Proof',
          actorOrComponent: 'AWS Artifact',
          dataPayload:
            'Downloaded Reports: AWS ISO/IEC 27001 Certificate + SOC 2 Type II + PCI-DSS Attestation',
          Explanation:
            'Risk and legal teams obtain official third-party verification of AWS’s underlying cloud controls on demand.',
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: 'AWS CloudTrail',
        roleInChapter: 'API audit log recording who made which AWS call, when, and from where.',
        whenToUse: 'Security auditing, governance compliance, investigating configuration changes.',
        whenNotToUse: 'Plotting live response latency graphs (use Amazon CloudWatch).',
        inputType: 'AWS API calls across all services.',
        outputType: 'Immutable JSON audit event history.',
        examClue: '"Audit who made an API call / changed an IAM or Guardrail setting".',
      },
      {
        serviceName: 'Amazon CloudWatch',
        roleInChapter: 'Real-time operational metrics, logs, dashboards, and threshold alarms.',
        whenToUse: 'Monitoring AI latency, token counts, throttling, and endpoint errors.',
        whenNotToUse: 'Downloading third-party ISO compliance reports (use AWS Artifact).',
        inputType: 'Service metrics and application logs.',
        outputType: 'Dashboards and automated alarms.',
        examClue: '"Monitor latency, token counts, operational errors, and alarms".',
      },
      {
        serviceName: 'AWS Artifact',
        roleInChapter: 'Self-service portal for AWS third-party security and compliance reports.',
        whenToUse: 'Providing regulators or risk officers with AWS SOC, ISO, or PCI-DSS audit reports.',
        whenNotToUse: 'Auditing your own S3 files for customer PII (use Amazon Macie).',
        inputType: 'Selected compliance standard.',
        outputType: 'Official downloadable auditor reports and agreements.',
        examClue: '"Download AWS SOC, ISO, PCI-DSS compliance reports or agreements".',
      },
    ],
    guidedWalkthrough: {
      title: 'Guided Walkthrough: Answering the Governance Committee Correctly',
      objective: 'Match four real executive questions to the exact AWS governance service on the first try.',
      safaricomSetting: 'Safaricom Enterprise Risk & Operations Board',
      steps: [
        {
          stepTitle: 'Question 1: "Who deleted the Home Fibre Knowledge Base index yesterday?"',
          situation: 'An engineer notices a test Knowledge Base disappeared and needs to identify the user or role responsible.',
          inputSample: 'Audit requirement: Identity + Timestamp + API Action',
          guidedActionLabel: 'Check AWS CloudTrail',
          resultingOutput: 'CloudTrail Event History reveals `DeleteKnowledgeBase` executed by `IAMRole:dev-cleanup` at 16:42 UTC.',
          whyThisWorks: 'CloudTrail records every API call and caller identity across your AWS account.',
        },
        {
          stepTitle: 'Question 2: "Why did Zuri take 9 seconds to respond at 6:00 PM?"',
          situation: 'Customer care supervisors report sluggish responses during the evening commute peak.',
          inputSample: 'Performance metric requirement: Latency & Throttling',
          guidedActionLabel: 'Check Amazon CloudWatch',
          resultingOutput: 'CloudWatch shows Bedrock On-Demand throttling (429 errors) peaked at 18:05 → team evaluates Provisioned Throughput.',
          whyThisWorks: 'CloudWatch tracks live latency, errors, and token throughput.',
        },
        {
          stepTitle: 'Question 3: "Can you send our risk committee AWS’s latest ISO 27001 certificate?"',
          situation: 'Internal audit requires official proof that AWS’s underlying cloud region meets ISO 27001.',
          inputSample: 'Third-party compliance documentation request',
          guidedActionLabel: 'Open AWS Artifact',
          resultingOutput: 'Compliance officer downloads AWS’s current signed ISO 27001 & SOC 2 reports immediately.',
          whyThisWorks: 'AWS Artifact is the official self-service portal for AWS’s compliance attestations.',
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: 'Preparing for Exam Day & Real-World AI Leadership',
      paragraphs: [
        'Whether you work in Customer Care, M-PESA Operations, Retail, Marketing, Management, or Software Engineering at Safaricom, remember the core mindset of the AWS Certified AI Practitioner: **start with the human problem, pick the simplest AWS service that solves it safely, protect customer data at every layer, and keep humans accountable.**',
      ],
      practicalChecklist: [
        'Use the Capstone & Final Revision tabs in this textbook to review the 5-domain checklist before sitting AIF-C01.',
        'Revisit any chapter where your quiz score is below 80% and inspect the explanation for every missed option.',
      ],
    },
    chapterSummary: [
      'AWS CloudTrail = Governance audit trail answering WHO called WHICH API and WHEN.',
      'Amazon CloudWatch = Operational monitoring answering HOW FAST and HEALTHY models are running.',
      'AWS Artifact = Self-service portal for downloading AWS’s third-party ISO, SOC, and PCI-DSS audit reports.',
      'All 20 AWS services combine seamlessly across Safaricom’s M-PESA, Connectivity, Customer Care, and Enterprise ecosystems.',
    ],
    questions: [
      {
        id: 'w12-q1',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS CloudTrail',
        safaricomProduct: 'M-PESA for Business AI governance',
        question:
          'During an internal security review, an auditor asks: "Which exact IAM user disabled a Bedrock Guardrail policy yesterday afternoon, and from what IP address?" Which AWS service provides this audit record?',
        options: ['AWS CloudTrail', 'Amazon CloudWatch', 'AWS Artifact', 'Amazon Macie'],
        correctIndex: 0,
        correctExplanation:
          'AWS CloudTrail logs every AWS API call—including caller IAM identity, timestamp, source IP, and parameters—for governance auditing.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: CloudWatch tracks operational metrics, latency, and application logs rather than comprehensive API identity audit histories.',
          'Incorrect: AWS Artifact distributes AWS’s third-party compliance PDFs.',
          'Incorrect: Macie discovers sensitive data inside S3 buckets.',
        ],
      },
      {
        id: 'w12-q2',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'AWS Artifact',
        safaricomProduct: 'Safaricom Business compliance review',
        question:
          'Risk and legal officers conducting due diligence for a Safaricom Business cloud AI workload need to download AWS’s official third-party SOC 2 Type II, ISO 27001, and PCI-DSS compliance reports. Where do they get them?',
        options: ['AWS Artifact', 'AWS CloudTrail', 'Amazon CloudWatch', 'Amazon SageMaker Clarify'],
        correctIndex: 0,
        correctExplanation:
          'AWS Artifact is the central portal providing on-demand access to AWS’s independent third-party security and compliance reports and agreements.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: CloudTrail logs your account’s API calls.',
          'Incorrect: CloudWatch monitors operational performance metrics.',
          'Incorrect: SageMaker Clarify audits ML models for bias and exability.',
        ],
      },
      {
        id: 'w12-q3',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Amazon CloudWatch',
        safaricomProduct: 'Daraja API & Zuri operations',
        question:
          'Operations engineers want an automated alert sent to their on-call team whenever Amazon Bedrock invocation error rates exceed 2% or p95 response latency rises above 3 seconds. Which AWS service provides these metrics and alarms?',
        options: ['Amazon CloudWatch', 'AWS Artifact', 'AWS KMS', 'Amazon Textract'],
        correctIndex: 0,
        correctExplanation:
          'Amazon CloudWatch monitors real-time performance metrics (latency, invocation errors, token counts) and fires threshold alarms.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Artifact holds compliance documents.',
          'Incorrect: KMS manages cryptographic encryption keys.',
          'Incorrect: Textract extracts text from scanned PDFs.',
        ],
      },
      {
        id: 'w12-q4',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'CloudTrail vs. CloudWatch vs. Macie vs. Artifact',
        safaricomProduct: 'Enterprise Cloud Governance',
        question:
          'Match the requirement to the right service: "Verify whether an S3 bucket holding *100 transcripts has any exposed customer phone numbers or was accidentally made public."',
        options: ['Amazon Macie', 'AWS Artifact', 'AWS CloudTrail', 'Amazon Polly'],
        correctIndex: 0,
        correctExplanation:
          'Amazon Macie inspects Amazon S3 buckets for exposed PII and alerts on public or unencrypted bucket configurations.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Artifact provides third-party compliance PDFs.',
          'Incorrect: CloudTrail logs API calls rather than scanning file contents for PII.',
          'Incorrect: Polly synthesises speech.',
        ],
      },
      {
        id: 'w12-q5',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Invocation Logging & PII Hygiene',
        safaricomProduct: '*100 / Zuri logging',
        question:
          'An engineering team turns on Amazon Bedrock Model Invocation Logging to Amazon S3 for quality debugging, while customers chat with Zuri. What precaution should they pair with invocation logging?',
        options: [
          'Enable Bedrock Guardrails PII masking, encrypt the S3 log bucket with AWS KMS, and restrict log access via AWS IAM',
          'Store raw unmasked customer IDs in a public S3 bucket',
          'Turn off AWS CloudTrail so logs stay smaller',
          'Replace S3 with Amazon Rekognition',
        ],
        correctIndex: 0,
        correctExplanation:
          'If prompts/responses are logged for auditing, PII masking, KMS encryption, and strict IAM least privilege protect customer privacy.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Public buckets with unmasked PII create severe data breaches.',
          'Incorrect: CloudTrail is essential for security auditing.',
          'Incorrect: Rekognition analyses images and video, not text log storage.',
        ],
      },
      {
        id: 'w12-q6',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'End-to-End Architecture Synthesis',
        safaricomProduct: '*100 + M-PESA reversals + Zuri',
        question:
          'In an end-to-end illustrative customer-support workflow: *100 audio is converted to text, official M-PESA reversal PDFs are searched for citations, and accidental IDs in replies are masked. Which combination of three AWS services performs these three tasks?',
        options: [
          'Amazon Transcribe + Knowledge Bases for Amazon Bedrock + Amazon Bedrock Guardrails',
          'Amazon Polly + Amazon Rekognition + AWS Artifact',
          'Amazon Translate + SageMaker Clarify + Amazon Macie',
          'Amazon Lex + Amazon Q Developer + AWS CloudTrail',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Transcribe handles speech-to-text (*100 audio), Knowledge Bases for Bedrock handles RAG search over reversal PDFs with citations, and Bedrock Guardrails masks PII in live interactions.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Polly speaks text, Rekognition views images, and Artifact provides audit PDFs.',
          'Incorrect: Translate translates languages, Clarify audits tabular bias, and Macie scans S3 buckets.',
          'Incorrect: Q Developer assists programmers in IDEs rather than searching reversal PDFs for customers.',
        ],
      },
      {
        id: 'w12-q7',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Data Lineage & Reproducibility',
        safaricomProduct: 'PrePay & 5G analytics',
        question:
          'Six months after deploying a 5G capacity model on Amazon SageMaker AI, governance auditors ask which exact snapshot of S3 training data and preprocessing steps created the model currently in production. Which governance concept addresses this?',
        options: [
          'Data lineage and model versioning (such as SageMaker ML Lineage Tracking / Model Registry)',
          'Increasing Top-K decoding',
          'Prompt injection filtering',
          'Text-to-speech synthesis',
        ],
        correctIndex: 0,
        correctExplanation:
          'Data lineage and model registries track the exact datasets, code, hyperparameters, and approval history behind every deployed model version.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Top-K is a generative decoding setting.',
          'Incorrect: Prompt injection filtering protects chat inputs.',
          'Incorrect: Text-to-speech is Amazon Polly.',
        ],
      },
      {
        id: 'w12-q8',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Compliance & Data Residency',
        safaricomProduct: 'Cloud & enterprise offerings',
        question:
          'An enterprise customer using Safaricom Business cloud services asks for contractual assurance that AI inference data stays inside specific geographic AWS Regions. How does AWS handle Region selection for services like Amazon Bedrock?',
        options: [
          'Customers choose the exact AWS Region where their data and inference endpoints reside; AWS does not move customer content outside selected regions',
          'AWS randomly scatters customer data across all global regions for speed',
          'Amazon Translate automatically copies data worldwide',
          'Data residency is controlled by Temperature = 0',
        ],
        correctIndex: 0,
        correctExplanation:
          'AWS customers explicitly select their AWS Region (e.g., Europe/Africa regions supporting the service) and retain full control over data residency.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: AWS never copies customer content arbitrarily across unapproved regions.',
          'Incorrect: Amazon Translate operates within the chosen region.',
          'Incorrect: Temperature controls token randomness, not geographic storage.',
        ],
      },
      {
        id: 'w12-q9',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Lifecycle Retiring & Data Retention',
        safaricomProduct: 'M-PESA customer care recordings',
        question:
          'Company retention policy states that *100 call audio files in Amazon S3 must be automatically purged after 90 days once anonymised transcripts are verified. Which native S3 governance mechanism enforces this without manual deletion?',
        options: [
          'Amazon S3 Lifecycle expiration rules',
          'Amazon Bedrock Guardrails Word Filters',
          'Amazon SageMaker Clarify SHAP reports',
          'Amazon Q Developer IDE plugin',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon S3 Lifecycle policies automatically transition or permanently expire objects after a defined retention window (e.g., 90 days).',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Guardrails filters live GenAI prompts/outputs, not S3 file retention.',
          'Incorrect: Clarify measures ML bias/exability.',
          'Incorrect: Q Developer assists coders.',
        ],
      },
      {
        id: 'w12-q10',
        week: 12,
        domainId: 'domain-5',
        domainLabel: 'Domain 5: Security, Compliance, and Governance',
        awsServiceOrConcept: 'Comprehensive AIF-C01 Service Selection',
        safaricomProduct: 'Full Safaricom Ecosystem Review',
        question:
          'A team wants to build ONE custom internal employee workplace search assistant over HR and Safaricom Business SharePoint/S3 documents respecting existing SSO access controls, while another team needs a custom mobile customer-facing M-PESA Global RAG app with Guardrails. Which two AWS solutions fit best respectively?',
        options: [
          'Amazon Q Business (internal turnkey employee assistant) and Amazon Bedrock with Knowledge Bases & Guardrails (custom consumer-facing app)',
          'Amazon Polly and Amazon Rekognition',
          'AWS Artifact and AWS CloudTrail',
          'Amazon Textract and Amazon Macie',
        ],
        correctIndex: 0,
        correctExplanation:
          'Amazon Q Business delivers turnkey permission-aware internal employee search, while Amazon Bedrock + Knowledge Bases + Guardrails empowers custom external customer-facing apps.',
        distractorExplanations: [
          'Correct answer.',
          'Incorrect: Polly (TTS) and Rekognition (vision) do not provide enterprise SharePoint RAG or custom GenAI apps.',
          'Incorrect: Artifact and CloudTrail are compliance and audit tools.',
          'Incorrect: Textract (document OCR) and Macie (S3 PII discovery) are specialised supporting utilities.',
        ],
      },
    ],
  },
];
