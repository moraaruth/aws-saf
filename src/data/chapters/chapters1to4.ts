import { Chapter } from "../../types/textbook";

export const CHAPTERS_1_TO_4: Chapter[] = [
  {
    week: 1,
    title: "What Is Artificial Intelligence & Machine Learning?",
    subtitle:
      "Moving from rigid computer rules to pattern recognition across M-PESA transactions and PrePay bundles",
    domainId: "domain-1",
    domainLabel: "Domain 1: Fundamentals of AI and ML",
    domainWeight: "20% of Exam",
    estimatedReadMinutes: 22,
    featuredProducts: [
      "M-PESA customer transactions",
      "M-PESA reversals",
      "PrePay & Data bundles",
      "Home Fibre",
    ],
    featuredServices: ["Amazon SageMaker AI", "Amazon S3"],
    learningObjectives: [
      "Ex the difference between traditional rule-based software, Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning.",
      "Distinguish between Supervised Learning, Unsupervised Learning, and Reinforcement Learning using everyday Safaricom scenarios.",
      "Understand the difference between Training (studying past examples) and Inference (making live predictions).",
      "Recognise when a custom tabular business problem calls for Amazon SageMaker AI paired with Amazon S3.",
    ],
    openingScenario: {
      productName: "M-PESA customer transactions & M-PESA reversals",
      narrative: [
        "Every single minute across Kenya, customers complete thousands of M-PESA customer transactions—buying groceries via Buy Goods Till Numbers, settling electricity via PayBill, or sending money to family. Occasionally, a customer mistakenly sends funds to the wrong number and requests an M-PESA reversal.",
        'At the same time, fraudsters sometimes attempt to abuse reversal workflows or hijack accounts in unusual ways. In traditional computer software, an engineer writes rigid "if-then" rules—for example: "IF a customer sends more than KES 50,000 at 3:00 AM, THEN hold the transaction."',
        "The problem with fixed rules is that fraud patterns evolve every week, and legitimate night-shift business owners get blocked unfairly by stiff thresholds. Rather than trying to guess every possible rule in advance, teams need software that learns subtle patterns from millions of past examples.",
      ],
      coreProblemSummary:
        'Fixed "if-then" rules cannot keep up with changing customer behaviour across millions of M-PESA transactions or predict which Home Fibre customers are quietly about to cancel.',
    },
    conceptSections: [
      {
        heading:
          "1.1 From Traditional Rules to Artificial Intelligence & Machine Learning",
        Intro:
          "Imagine teaching a new Safaricom retail attendant how to spot a suspicious transaction versus a normal one.",
        paragraphs: [
          'In traditional programming, you hand the attendant a strict printed rulebook: "Only flag a transaction if Amount > 40,000 AND Time is after midnight." Computers are fast at following strict instructions, but they fail whenever real life introduces a grey area that nobody wrote a rule for.',
          "Artificial Intelligence (AI) is the broad umbrella term for any computer system capable of performing tasks that normally require human judgement—such as spotting an unusual transaction, understanding spoken Swahili on *100, or reading a scanned business permit.",
          "Machine Learning (ML) is the most common way to build AI today. Instead of writing rigid rules by hand, engineers feed the computer thousands of historical examples. The ML algorithm studies those examples and builds its own mathematical pattern—called a model—to predict outcomes on brand-new situations.",
          "Deep Learning is a specialised branch of Machine Learning inspired loosely by layers of neurons in the human brain. While standard ML excels at structured spreadsheets (tables of numbers like transaction amount, time of day, and account age), Deep Learning excels at messy unstructured data like phone call audio, photos, and free-form text.",
        ],
        technicalDefinition:
          "Artificial Intelligence encompasses systems performing cognitive tasks; Machine Learning derives statistical models from historical data without explicit rule programming; Deep Learning uses multi-layered artificial neural networks to learn representations from unstructured data.",
        keyTermsUsed: [
          // {
          //   term: 'Model',
          //   immediateDefinition:
          //     'The mathematical "rulebook" created after an ML algorithm finishes studying historical data.',
          // },
          {
            term: "Structured vs. Unstructured Data",
            immediateDefinition:
              "Structured data fits neatly into rows and columns (like an M-PESA ledger); unstructured data does not (like *100 voice recordings or ID photos).",
          },
        ],
        comparisonTable: {
          caption:
            "Comparing Traditional Software, Standard Machine Learning, and Deep Learning",
          headers: [
            "Approach",
            "How It Learns",
            "Best Data Type",
            "Safaricom Example",
          ],
          rows: [
            [
              "Traditional Software",
              "Human writes explicit IF-THEN rules",
              "Simple clear conditions",
              "Checking if a PrePay airtime PIN has 16 digits",
            ],
            [
              "Machine Learning (ML)",
              "Learns statistical patterns from historical tables",
              "Structured tables (CSV/SQL)",
              "Predicting Home Fibre customer churn risk",
            ],
            [
              "Deep Learning",
              "Multi-layer neural networks extract complex signals",
              "Audio, images, video, natural text",
              "Converting *100 voice calls into text transcripts",
            ],
          ],
        },
      },
      {
        heading:
          "1.2 The Three Ways Machines Learn: Supervised, Unsupervised & Reinforcement",
        Intro:
          'Not all learning looks the same. Depending on whether your historical data already has "answer labels", you choose one of three ML styles.',
        paragraphs: [],
        subsections: [
          {
            heading: "Supervised Learning",
            paragraphs: [
              'Supervised Learning is like studying with flashcards: the correct answer is already on the back. The AI learns from past records that include the known outcome, called "Labeled Data". Once trained, it predicts outcomes for new cases it has never seen. Classification predicts a category (such as "Genuine" vs "Fraudulent"), while Regression predicts a number.',
            ],
            exampleBox: {
              title: "Example: Safaricom",
              lines: [
                "Example: How AI Can Learn From Past Customer Behaviour",
                "Imagine Safaricom has information about thousands of customers who used a particular service in the past.",
                "For each customer, we know some information about them and, importantly, we already know what eventually happened. For example:",
                "• Customer A used the service for several months → Renewed",
                "• Customer B used the service for several months → Cancelled",
                "• Customer C used the service → Renewed",
                "• Customer D used the service → Cancelled",
                "The AI looks at these past examples and tries to understand what the customers who renewed had in common and what the customers who cancelled had in common. It might look at things such as:",
                "• how often the customer used the service",
                "• how much they used it",
                "• how long they had been a customer",
                "• how frequently they purchased or interacted with the service",
                "• other available customer information",
                "The important thing is that we already know the answer for the historical customers: they either renewed or cancelled. The AI learns from these examples.",
                "Now imagine a new customer comes along. We don't yet know whether this customer will renew or cancel. We give the AI information about this new customer.",
                "The AI compares the new customer's behaviour with what it learned from previous customers and makes a prediction: “Based on what I have learned from similar customers, this customer is more likely to renew.”",
                "This is Supervised Learning because the AI learned using historical examples where the correct outcome was already known.",
                "Classification: Choosing a Category. Sometimes the answer we want from AI is a category or choice. For example: “Will this customer Renew or Cancel?” There are two possible answers: Renew or Cancel. The AI looks at the customer's information and chooses the category it believes is most likely. This is called Classification.",
                "Think of it like a teacher asking: “Is this answer correct or incorrect?” There are specific categories to choose from. In a business setting, Classification could also help answer questions such as:",
                "• Genuine or Fraudulent?",
                "• Complaint or Enquiry?",
                "• Spam or Not Spam?",
                "• Likely to Renew or Likely to Cancel?",
                "The important thing to remember is: Classification means the AI is choosing between categories.",
                "Regression: Predicting a Number. Now imagine we ask the AI a different question. Instead of asking “Will this region use Data Bundles?” we ask: “How many Gigabytes of Data Bundles might this region use next month?”",
                "The answer isn't simply Yes or No. The answer could be 125,000 GB, 150,000 GB, or 175,000 GB. The AI can study historical information such as how much data was consumed in previous months, how usage changed over time, and other available factors.",
                "It then uses those patterns to estimate a number for the future. For example: “Based on previous usage patterns, this region may consume approximately 150,000 GB next month.” This is called Regression. Think of it like asking “How much?” rather than “Which category?”",
                "The easiest way to remember the difference: Classification = Which group? Will the customer Renew or Cancel? Regression = How much? How many GB of Data Bundles might the region consume next month?",
                "In simple terms: Supervised Learning → Give AI past examples where we already know the answers → AI learns the patterns → AI uses those patterns to make predictions about new situations. Classification → the prediction is a category. Regression → the prediction is a number.",
              ],
            },
          },
          {
            heading: "Unsupervised Learning",
            paragraphs: [
              'Unsupervised Learning is like sorting a basket of mixed receipts without being told the categories. The data has no answer labels, called "Unlabeled Data", so the AI finds patterns on its own. Clustering groups records that behave similarly. Anomaly Detection flags records that behave very differently from the norm.',
            ],
            exampleBox: {
              title: "Example: Safaricom Business IoT",
              lines: [
                "Example: How AI Could Understand 50,000 Safaricom Business IoT SIMs",
                "Imagine Safaricom has 50,000 SIM cards being used inside different machines and devices. These are not necessarily SIMs being used by people to make calls. They could be used by things such as vehicles, tracking devices, meters, or other connected equipment.",
                "Now imagine someone asks: “Can we look at all 50,000 SIMs and find out which ones behave in similar ways?”",
                "Doing this manually would be extremely difficult. A person would have to look at thousands and thousands of records.",
                "This is where Unsupervised Learning can help. The AI can look at information about each SIM, such as:",
                "• How much data does it use?",
                "• When does it usually use the data?",
                "• Does it communicate every few minutes, every hour, or only occasionally?",
                "• Does it have a similar pattern every day?",
                "• Does its behaviour change at certain times?",
                "The AI is not given a list saying “these are fleet SIMs” or “these are smart-meter SIMs.” Nobody tells it what the groups should be.",
                "Instead, the AI compares the SIMs and says, in simple terms: “These SIMs behave a lot like each other.”",
                "It might find that one group of SIMs communicates regularly while vehicles are moving. Another group might send very small amounts of data at regular intervals throughout the day.",
                "These groups can then be investigated by the business. The business may discover that one group is commonly associated with fleet tracking, while another group is associated with smart-meter-type devices.",
                "This process of finding naturally similar groups is called Clustering.",
                "What about unusual behaviour? The AI can also notice when one SIM suddenly behaves very differently from what is normal for it or compared with similar SIMs.",
                "For example, imagine a SIM normally sends a small amount of data every hour. Then suddenly, it starts sending a very large amount of data.",
                "The AI can say: “This doesn't look like the normal behaviour I've been seeing. Someone should investigate it.”",
                "That doesn't automatically mean something is wrong. It simply means the behaviour is unusual and deserves attention. This is called Anomaly Detection.",
                "In simple terms: 50,000 SIMs → AI compares their behaviour → finds similar groups → identifies unusual behaviour.",
                "Clustering = “Which SIMs behave similarly?” Anomaly Detection = “Which SIMs are behaving unusually?”",
                "That is the basic idea behind Unsupervised Learning: give the AI data without pre-defined answers and let it discover useful patterns for you.",
              ],
            },
          },
          {
            heading: "Reinforcement Learning",
            paragraphs: [
              "Reinforcement Learning is like training a puppy with treats: good actions earn rewards, and poor ones earn none or a penalty. An AI agent takes an action, receives feedback, and learns from the reward or penalty. Over many repetitions, it learns which actions work best in each situation.",
              "Agent → Action → Feedback/Reward → Learning",
            ],
            exampleBox: {
              title: "Example: Mobile Network",
              lines: [
                "Imagine a busy road with many cars. If one road becomes too crowded, cars can be directed to another road that has more space. The goal is to stop one road from becoming completely jammed while other roads are almost empty.",
                "Mobile networks have a similar problem. Instead of cars, we have millions of phone calls, messages, videos, internet requests, M-PESA transactions, and other data moving through the network. Instead of roads, we have 4G and 5G cell towers that help connect customers to the network.",
                "Now imagine an AI that is watching what is happening across these towers. When the AI sees that one tower is becoming very busy, it can try a different way of handling the network traffic. It then looks at what happened:",
                "• Did the busy tower become less crowded?",
                "• Did customers continue getting good service?",
                "• Did the number of dropped or delayed connections decrease?",
                "If the result is good, the AI gets a positive reward: “That was a good decision.” If the result is poor, it gets a negative reward: “That decision did not work well.”",
                "The AI keeps learning from these experiences. Over time, it can become better at deciding how to manage network traffic when different parts of the network become busy.",
                "In simple terms: AI tries → sees what happened → gets feedback → learns → tries a better approach next time. That is the basic idea behind Reinforcement Learning.",
              ],
            },
          },
        ],
        technicalDefinition:
          "Supervised learning maps labeled inputs to discrete classes (classification) or continuous values (regression); Unsupervised learning discovers latent clusters or anomalies in unlabeled data; Reinforcement learning optimises sequential decisions via reward signals.",
        keyTermsUsed: [
          {
            term: "Labeled Data",
            immediateDefinition:
              'Historical records that include the ground-truth answer column (e.g., "Churned = Yes/No").',
          },
          {
            term: "Training vs. Inference",
            immediateDefinition:
              "Training is the offline phase where the model studies past data; Inference is the live phase where the trained model scores a new customer request in milliseconds.",
          },
        ],
      },
    ],
    workedExample: {
      title: "Predicting Home Fibre Renewal Risk Before Customers Cancel",
      safaricomProduct:
        "Safaricom Home Fibre (Illustrative learning scenario, not a confirmed Safaricom implementation)",
      customerScenario:
        "A household in Nairobi has been on a Safaricom Home Fibre plan for 14 months. Over the past three weeks, they experienced two evening outages and called line 400 twice, though they have not yet asked to disconnect.",
      currentChallenge:
        "Retention teams only discover a customer is unhappy *after* the customer cancels their Home Fibre subscription or switches providers, when winning them back is far harder.",
      aiApplication:
        'A supervised classification machine-learning model studies two years of anonymised historical Home Fibre subscriber records (labeled "Renewed" or "Cancelled")—looking at ticket frequency, outage duration, payment timeliness, and speed tier—to identify households quietly drifting toward cancellation.',
      awsService: "Amazon SageMaker AI (paired with Amazon S3)",
      whatServiceDoes:
        "Amazon S3 stores the historical tabular datasets safely; Amazon SageMaker AI provides the managed machine-learning platform to prepare features, train a custom supervised classification model, evaluate its accuracy, and host a prediction endpoint.",
      howItWorks:
        "1) Anonymised historical customer tables are stored as CSV/Parquet files in Amazon S3. 2) SageMaker AI trains a classification algorithm (such as XGBoost) on those labeled rows. 3) During live inference, current anonymised account metrics are sent to the SageMaker endpoint, which outputs a churn probability score (e.g., 0.82 High Risk) so customer care can proactively send a technician check-in.",
      businessBenefit:
        "Retains Home Fibre households proactively, resolves hidden line quality issues earlier, and targets retention outreach accurately instead of contacting satisfied customers unnecessarily.",
      examConnection:
        'AIF-C01 Clue: Predicting a category ("Will Churn / Won’t Churn") from labeled historical tables = Supervised Classification trained on Amazon SageMaker AI.',
    },
    pipelineDiagram: {
      title: "How Custom Supervised ML Moves from Safaricom Data to Prediction",
      subtitle:
        "Click each stage to inspect the exact inputs, AWS components, and outputs",
      stages: [
        {
          stepNumber: 1,
          stageLabel: "Historical Data Storage",
          actorOrComponent: "Amazon S3",
          dataPayload:
            'anonymised_fibre_history.parquet → { tenure_months: 14, outages_30d: 2, tickets_30d: 2, late_payments: 0, label: "Cancelled" }',
          Explanation:
            'First, past records with known outcomes ("Canceled" or "Renewed") are cleaned, anonymised, and placed inside a secure Amazon S3 bucket.',
        },
        {
          stepNumber: 2,
          stageLabel: "Model Training",
          actorOrComponent: "Amazon SageMaker AI Training Job",
          dataPayload:
            "Input: 250,000 labeled rows → Algorithm learns weights linking recent outages + repeat tickets to cancellation risk",
          Explanation:
            "SageMaker AI spins up temporary compute servers, studies the patterns across 250,000 historical examples, builds the mathematical model, and automatically shuts down the training servers to save cost.",
        },
        {
          stepNumber: 3,
          stageLabel: "Live Inference Output",
          actorOrComponent: "Amazon SageMaker AI Endpoint",
          dataPayload:
            'Live input: { tenure: 14, outages: 2, tickets: 2 } → Output: { churn_risk: "High", probability: 0.82 }',
          Explanation:
            "When a current subscriber’s anonymised profile is evaluated, the SageMaker endpoint returns a risk score in milliseconds so Customer Care can proactively follow up.",
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: "Amazon SageMaker AI",
        roleInChapter:
          "End-to-end platform to build, train, tune, and deploy custom machine-learning models.",
        whenToUse:
          "When you have your own tabular historical data (M-PESA transaction features, PrePay usage, Home Fibre metrics) and need a custom prediction model.",
        whenNotToUse:
          "When an off-the-shelf pre-trained API (like Amazon Transcribe for speech or Amazon Textract for PDFs) already solves the task without custom ML training.",
        inputType:
          "Cleaned structured datasets (CSV/Parquet) in Amazon S3, plus training algorithm configuration.",
        outputType:
          "Trained ML model artifact, real-time HTTPS prediction endpoint, or Batch Transform output table.",
        examClue:
          '"Train a custom ML model on historical tabular data" or "manage the full ML lifecycle (prepare, train, tune, deploy)".',
      },
      {
        serviceName: "Amazon S3",
        roleInChapter:
          "Durable, encrypted cloud object storage holding training datasets and model artifacts.",
        whenToUse:
          "Storing raw and prepared datasets, audio files, PDFs, or model output files for nearly every AWS AI service.",
        whenNotToUse:
          "Serving real-time SQL relational queries or low-latency conversational memory directly.",
        inputType: "Any file format (Parquet, CSV, JSONL, MP3, PDF, JPEG).",
        outputType:
          "Encrypted cloud objects accessed securely via IAM permissions.",
        examClue:
          '"Central storage repository / data lake for ML training data or outputs".',
      },
    ],
    guidedWalkthrough: {
      title:
        "Guided Walkthrough: Choosing the Right ML Approach for Safaricom Scenarios",
      objective:
        "Step through three real Safaricom scenarios and see how an AI practitioner matches the data and goal to the exact ML type.",
      safaricomSetting:
        "Safaricom Analytics & Operations Desk (Illustrative learning scenarios)",
      steps: [
        {
          stepTitle: "Step 1: Predicting Monthly PrePay Data Bundle Demand",
          situation:
            "Planning teams want to forecast the exact number of Gigabytes of Data Bundles subscribers in Kisumu will purchase next month.",
          inputSample:
            "36 months of historical regional bundle sales, seasonal holiday indicators, and 4G tower capacity numbers.",
          guidedActionLabel: "Inspect Recommended ML Type",
          resultingOutput:
            "Supervised Regression on Amazon SageMaker AI → Outputs a continuous number (e.g., 1,420,000 GB).",
          whyThisWorks:
            "We have historical labeled answers (past monthly GB totals) and want a continuous numerical forecast—that is the definition of Supervised Regression.",
        },
        {
          stepTitle:
            "Step 2: Discovering Unknown Segments in IoT Connectivity SIMs",
          situation:
            "Safaricom Business manages 80,000 IoT connectivity SIMs across farms, vehicles, and smart meters, with no category labels attached.",
          inputSample:
            "Hourly packet size, session frequency, and active time-of-day tables (no labels).",
          guidedActionLabel: "Inspect Recommended ML Type",
          resultingOutput:
            "Unsupervised Clustering on Amazon SageMaker AI → Groups SIMs into 4 natural behavioural clusters.",
          whyThisWorks:
            "When there are no pre-existing labels and you want the machine to discover natural groupings, Unsupervised Learning (Clustering) is the exact match.",
        },
        {
          stepTitle: "Step 3: Flagging Suspected Fraudulent M-PESA Reversals",
          situation:
            'Operations has 500,000 past reversal requests marked "Legitimate" or "Fraudulent" and wants to score new requests.',
          inputSample:
            "Past reversal features (time gap, caller location mismatch, account age) with historical outcome labels.",
          guidedActionLabel: "Inspect Recommended ML Type",
          resultingOutput:
            'Supervised Binary Classification → Outputs "Flag for Human Review (0.91)" or "Low Risk (0.06)".',
          whyThisWorks:
            "Predicting between two discrete categories using labeled past records is Supervised Binary Classification.",
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: "Protecting Customer Data Before Training Any Model",
      paragraphs: [
        "In Week 1, the golden rule of Responsible AI begins before a single model is trained: never place raw customer names, National ID numbers, or M-PESA PINs into experimental ML datasets when anonymised IDs work just as well.",
        "All historical datasets stored in Amazon S3 should be encrypted using AWS Key Management Service (AWS KMS) and restricted via AWS Identity and Access Management (AWS IAM) so only authorised analytics engineers can prepare training jobs.",
      ],
      practicalChecklist: [
        "Replace phone numbers and National IDs with hashed, non-reversible identifiers before ML training.",
        "Always split data into Training (to learn), Validation (to tune), and Test (to verify accuracy fairly) sets.",
        "Keep humans in charge of final M-PESA reversal rejections—ML provides a risk score to assist staff, not an unappealable punishment.",
      ],
    },
    chapterSummary: [
      "Traditional software follows fixed rules written by humans; Machine Learning learns patterns automatically from examples.",
      "Supervised learning uses labeled answers (Classification for categories, Regression for numbers); Unsupervised learning finds clusters or anomalies without labels.",
      "Training builds the model offline from historical data; Inference applies the trained model to live customer interactions.",
      "Amazon SageMaker AI + Amazon S3 is the core AWS pairing for training and deploying custom ML models on tabular business data.",
    ],
    questions: [
      {
        id: "w1-q1",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Supervised Classification vs. Regression",
        safaricomProduct: "Safaricom Home Fibre",
        question:
          'A Safaricom analytics team wants to build a model using historical Home Fibre records labeled "Renewed" or "Cancelled" to predict which current subscribers are likely to cancel next month. Which machine-learning approach should they use?',
        options: [
          "Unsupervised clustering",
          "Supervised classification",
          "Reinforcement learning",
          "Text-to-speech synthesis",
        ],
        correctIndex: 1,
        correctExplanation:
          'Supervised classification is correct because the dataset contains known historical category labels ("Renewed" or "Cancelled") and the goal is to predict a discrete category for new subscribers.',
        distractorExplanations: [
          "Incorrect: Unsupervised clustering is used when data has NO labels and you want to discover unknown groupings.",
          "Correct answer.",
          "Incorrect: Reinforcement learning learns sequential actions via trial-and-reward in an interactive environment, not static labeled churn tables.",
          "Incorrect: Text-to-speech synthesis converts written text into spoken audio (Amazon Polly), which is unrelated to predicting churn.",
        ],
      },
      {
        id: "w1-q2",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Supervised Regression",
        safaricomProduct: "PrePay Data bundles",
        question:
          "A planning team wants to forecast the exact number of gigabytes of PrePay Data bundles subscribers in Mombasa will purchase next quarter, based on three years of past monthly sales tables. Which ML task is this?",
        options: [
          "Supervised regression",
          "Unsupervised anomaly detection",
          "Named entity recognition",
          "Image classification",
        ],
        correctIndex: 0,
        correctExplanation:
          "Supervised regression predicts a continuous numerical quantity (number of gigabytes) using labeled historical sales figures.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Anomaly detection spots rare outliers in unlabeled data rather than forecasting a continuous sales figure.",
          "Incorrect: Named entity recognition extracts names/dates from unstructured text (Amazon Comprehend).",
          "Incorrect: Image classification labels photographs, not historical sales tables.",
        ],
      },
      {
        id: "w1-q3",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Unsupervised Learning",
        safaricomProduct: "IoT connectivity services",
        question:
          "Safaricom Business manages 60,000 IoT connectivity SIMs across agricultural sensors, delivery trucks, and retail POS terminals, but the raw hourly traffic log contains no device-type labels. Which ML approach can automatically group SIMs with similar usage patterns?",
        options: [
          "Supervised binary classification",
          "Unsupervised clustering",
          "Optical Character Recognition",
          "Prompt engineering",
        ],
        correctIndex: 1,
        correctExplanation:
          "Unsupervised clustering discovers natural groupings in data that has no pre-existing labels.",
        distractorExplanations: [
          "Incorrect: Supervised classification requires labeled training examples, which this dataset lacks.",
          "Correct answer.",
          "Incorrect: OCR reads text off scanned images or documents, not numerical IoT network logs.",
          "Incorrect: Prompt engineering instructs generative language models via text prompts, not clustering raw SIM telemetry tables.",
        ],
      },
      {
        id: "w1-q4",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon SageMaker AI",
        safaricomProduct: "M-PESA customer transactions",
        question:
          "In an illustrative learning scenario, engineers want to prepare anonymised M-PESA transaction tables, train a custom fraud-scoring algorithm, tune its accuracy, and deploy a prediction endpoint. Which AWS service provides this complete ML workflow?",
        options: [
          "Amazon Polly",
          "Amazon SageMaker AI",
          "Amazon Translate",
          "AWS Artifact",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon SageMaker AI is AWS’s managed platform for preparing data, training, tuning, and deploying custom machine-learning models.",
        distractorExplanations: [
          "Incorrect: Amazon Polly converts text to spoken audio.",
          "Correct answer.",
          "Incorrect: Amazon Translate translates text between human languages.",
          "Incorrect: AWS Artifact is a portal for downloading AWS compliance reports.",
        ],
      },
      {
        id: "w1-q5",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Training vs. Inference",
        safaricomProduct: "M-PESA reversals",
        question:
          "During an M-PESA reversal risk scoring project, a model studies 1 million historical reversal cases overnight to learn patterns, and the next morning scores incoming live requests in 25 milliseconds. What are these two phases called respectively?",
        options: [
          "Inference and Fine-tuning",
          "Training and Inference",
          "Chunking and Embedding",
          "Redaction and Auditing",
        ],
        correctIndex: 1,
        correctExplanation:
          "Training is the phase where the model learns parameters from historical data; Inference is when the trained model generates live predictions on new inputs.",
        distractorExplanations: [
          "Incorrect: The order is reversed and fine-tuning specifically adapts a pre-trained foundation model.",
          "Correct answer.",
          "Incorrect: Chunking and embedding are document-preparation steps for Retrieval-Augmented Generation (RAG).",
          "Incorrect: Redaction and auditing are security/governance steps, not the two core ML lifecycle phases.",
        ],
      },
      {
        id: "w1-q6",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon S3",
        safaricomProduct: "Safaricom voice & 4G analytics",
        question:
          "Before training a custom network congestion model in Amazon SageMaker AI using historical 4G cell tower logs, where should the cleaned Parquet training datasets be stored in AWS?",
        options: ["Amazon S3", "Amazon Lex", "AWS CloudTrail", "Amazon Polly"],
        correctIndex: 0,
        correctExplanation:
          "Amazon S3 is the durable, scalable cloud object storage service used as the standard data lake for SageMaker AI training datasets.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Amazon Lex builds conversational chatbots.",
          "Incorrect: AWS CloudTrail records AWS API audit logs.",
          "Incorrect: Amazon Polly generates spoken audio from text.",
        ],
      },
      {
        id: "w1-q7",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Rule-based software vs. Machine Learning",
        safaricomProduct: "PrePay airtime top-ups",
        question:
          "A system needs to verify that a scratched PrePay airtime voucher code entered by a customer has exactly 16 numeric digits before redeeming it. Should Safaricom use Deep Learning or standard rule-based software for this check?",
        options: [
          "Deep Learning, because voucher checks are high volume",
          "Standard rule-based software, because the rule is fixed, exact, and 100% deterministic",
          "Reinforcement Learning, to reward valid top-ups",
          "Generative AI, to invent valid 16-digit codes",
        ],
        correctIndex: 1,
        correctExplanation:
          "Checking exact digit length and numeric format is a deterministic rule with zero ambiguity—traditional software is faster, cheaper, and 100% exact.",
        distractorExplanations: [
          "Incorrect: Deep learning adds unnecessary cost and probabilistic uncertainty to a simple exact check.",
          "Correct answer.",
          "Incorrect: Reinforcement learning is for complex sequential optimisation, not string length validation.",
          "Incorrect: Generative AI creates new content and should never be used for exact voucher validation.",
        ],
      },
      {
        id: "w1-q8",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Structured vs. Unstructured Data",
        safaricomProduct: "Lipa na M-PESA & *100 Care",
        question:
          "Which of the following Safaricom business datasets is an example of UNSTRUCTURED data?",
        options: [
          "A CSV table of daily Buy Goods Till settlement totals",
          "A SQL database of PostPay billing dates and balances",
          "Recorded customer phone call audio from the *100 contact centre",
          "A spreadsheet of 5G base station coordinates",
        ],
        correctIndex: 2,
        correctExplanation:
          "Audio recordings do not fit neatly into fixed spreadsheet rows and columns—they are classic unstructured data.",
        distractorExplanations: [
          "Incorrect: CSV settlement tables have defined columns and rows (structured data).",
          "Incorrect: SQL database tables are structured data.",
          "Correct answer.",
          "Incorrect: Coordinate spreadsheets are structured tabular data.",
        ],
      },
      {
        id: "w1-q9",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Deep Learning",
        safaricomProduct: "SIM registration",
        question:
          "Why is Deep Learning preferred over basic linear spreadsheets when analysing customer selfie photographs during SIM registration?",
        options: [
          "Deep Learning requires zero training data",
          "Multi-layer neural networks automatically extract complex visual patterns from pixels in unstructured images",
          "Deep Learning only works on small CSV spreadsheets",
          "Deep Learning guarantees 100% accuracy without human oversight",
        ],
        correctIndex: 1,
        correctExplanation:
          "Deep Learning neural networks excel at unstructured visual and audio data by learning hierarchical features (edges, shapes, facial landmarks) directly from raw pixels.",
        distractorExplanations: [
          "Incorrect: Deep learning typically requires large volumes of data to train.",
          "Correct answer.",
          "Incorrect: Deep learning shines on unstructured media, whereas traditional ML often beats it on small tabular spreadsheets.",
          "Incorrect: No AI model guarantees 100% accuracy; human fallback is still important for low-confidence cases.",
        ],
      },
      {
        id: "w1-q10",
        week: 1,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Reinforcement Learning",
        safaricomProduct: "4G and 5G connectivity",
        question:
          "An illustrative network engineering team wants an algorithm to continuously adjust 5G antenna tilt and traffic routing in a simulator, earning positive reward points whenever dropped calls decrease and penalties when latency rises. Which learning paradigm fits this?",
        options: [
          "Supervised regression",
          "Reinforcement learning",
          "Optical character recognition",
          "Document chunking",
        ],
        correctIndex: 1,
        correctExplanation:
          "Reinforcement learning trains an agent through actions, environment feedback, and cumulative reward/penalty optimisation.",
        distractorExplanations: [
          "Incorrect: Supervised regression predicts a single static number from labeled historical rows rather than optimising dynamic multi-step actions via rewards.",
          "Correct answer.",
          "Incorrect: OCR reads text from documents.",
          "Incorrect: Document chunking prepares text for RAG.",
        ],
      },
    ],
  },
  {
    week: 2,
    title: "Speech, Language & Vision AI: Pre-Trained AWS Services",
    subtitle:
      "Understanding *100 calls, Lipa na M-PESA permits, Swahili messages, and SIM photos without training models from scratch",
    domainId: "domain-1",
    domainLabel: "Domain 1: Fundamentals of AI and ML",
    domainWeight: "20% of Exam",
    estimatedReadMinutes: 26,
    featuredProducts: [
      "*100 and *200 customer support",
      "Lipa na M-PESA",
      "Buy Goods Till Numbers",
      "MySafaricom App",
      "SIM registration",
      "Roaming services",
    ],
    featuredServices: [
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Comprehend",
      "Amazon Textract",
      "Amazon Rekognition",
    ],
    learningObjectives: [
      "Understand why pre-trained AWS AI APIs remove the need to build custom Deep Learning models for common speech, text, document, and image tasks.",
      "Ex clearly what ASR (Transcribe), TTS (Polly), NMT (Translate), NLP (Comprehend), Document OCR (Textract), and Computer Vision (Rekognition) do.",
      "Distinguish cleanly between easily confused pairs: Transcribe vs Polly, Textract vs Rekognition, and Comprehend vs Translate.",
      "Apply each of the six services to concrete Safaricom customer care, merchant onboarding, and connectivity scenarios.",
    ],
    openingScenario: {
      productName:
        "Customer care through *100, Lipa na M-PESA merchant onboarding, and MySafaricom App",
      narrative: [
        "In Week 1, we saw how Amazon SageMaker AI helps data scientists train custom models on numerical tables. Yet many of Safaricom’s busiest daily operations do not involve training a new algorithm at all—they involve everyday human media: voice calls on *100, scanned business permits for Buy Goods Till Numbers, Swahili and  feedback inside the MySafaricom App, and customer ID photos.",
        "If every company had to collect millions of voice clips or scanned forms to train neural networks from zero, projects would take years. Instead, AWS has already trained specialised Deep Learning models on massive datasets and wrapped them into simple, pay-as-you-go APIs called Pre-Trained AWS AI Services.",
      ],
      coreProblemSummary:
        "Operations teams need instant speech transcription, voice playback, translation, sentiment tracking, form extraction, and photo verification—without hiring a team to train Deep Learning models from scratch.",
    },
    conceptSections: [
      {
        heading:
          "2.1 Speech & Language Services: Transcribe, Polly, Translate, and Comprehend",
        Intro:
          "Think of these four services as four specialised human skills: Listening, Speaking, Translating, and Reading Comprehension.",
        paragraphs: [
          "Automatic Speech Recognition (ASR) is the skill of listening to spoken audio and writing down accurate words. On AWS, Amazon Transcribe listens to phone calls (such as authorised *100 support recordings) and outputs punctuated text with speaker labels (Agent vs Customer) and optional redaction of sensitive spoken numbers.",
          "Text-to-Speech (TTS) is the opposite skill: reading written words aloud in a clear, natural human voice. On AWS, Amazon Polly turns written text into spoken MP3 or streaming audio—ideal for dynamic *200 IVR announcements or MySafaricom App voice accessibility.",
          'Neural Machine Translation (NMT) converts written text from one language into another while preserving meaning. Amazon Translate supports over 75 languages including Swahili and , and lets teams upload a Custom Terminology file so names like "M-PESA", "Lipa na M-PESA", and "PayBill" are never mistranslated.',
          "Natural Language Processing (NLP) analyses what written text *means* and how the writer *feels*. Amazon Comprehend reads text (like MySafaricom App reviews or transcribed calls) to detect Sentiment (Positive, Negative, Neutral, Mixed), Key Phrases, Entities (dates, places, organisations), Dominant Language, and Personally Identifiable Information (PII).",
        ],
        technicalDefinition:
          "Pre-trained managed AI APIs expose production deep-learning pipelines for ASR (Transcribe), TTS (Polly), NMT (Translate), and statistical/neural NLP (Comprehend) via stateless or batch API endpoints.",
        keyTermsUsed: [
          {
            term: "Speaker Diarisation",
            immediateDefinition:
              'Separating "Speaker 0 (Agent)" from "Speaker 1 (Customer)" inside an audio transcript.',
          },
          {
            term: "Sentiment Analysis",
            immediateDefinition:
              "Automatically scoring whether a piece of text expresses positive, negative, neutral, or mixed emotion.",
          },
        ],
      },
      {
        heading:
          "2.2 Vision & Document Services: Amazon Textract vs. Amazon Rekognition",
        Intro:
          "Exam questions love testing whether you can tell the difference between reading structured documents and analysing everyday photographs.",
        paragraphs: [
          'Amazon Textract is built specifically for documents—PDFs, scanned business permits, invoices, bank letters, and application forms. Unlike basic Optical Character Recognition (OCR) that dumps a jumbled wall of words, Textract understands layout: it extracts Key-Value pairs (linking the label "Till Number:" to "548291") and preserves rows and columns inside tables.',
          'Amazon Rekognition is built for everyday visual scenes—photographs and video streams. It detects objects ("smartphone", "kiosk", "safety helmet"), compares faces (matching a SIM registration selfie against an ID portrait), verifies Face Liveness (proving a real person is in front of the camera rather than a printed photo), and moderates unsafe imagery.',
          "A simple memory trick: if the input is a form, contract, invoice, or multi-page PDF table, choose Amazon Textract. If the input is a photo of a person, shop front, equipment mast, or video frame, choose Amazon Rekognition.",
        ],
        technicalDefinition:
          "Amazon Textract performs layout-aware document OCR extracting raw text, form key-value pairs, and tabular structures; Amazon Rekognition provides computer vision classification, facial comparison, liveness detection, and video moderation.",
        keyTermsUsed: [
          {
            term: "Key-Value Pair Extraction",
            immediateDefinition:
              'Automatically linking a form label ("Business Name") to the handwritten or typed value beside it ("Nairobi Fresh Mart").',
          },
          {
            term: "Confidence Score",
            immediateDefinition:
              "A 0–100% number showing how certain the AI is about its output—used to route low-confidence items to human staff.",
          },
        ],
        comparisonTable: {
          caption:
            "Quick-Reference Matrix: Choosing Among the Six Pre-Trained AWS AI Services",
          headers: ["AWS Service", "Input", "Output", "Do NOT Confuse With"],
          rows: [
            [
              "Amazon Transcribe",
              "Spoken audio (MP3/WAV/stream)",
              "Written transcript + speaker labels",
              "Amazon Polly (text → audio)",
            ],
            [
              "Amazon Polly",
              "Written text / SSML",
              "Lifelike spoken audio",
              "Amazon Transcribe (audio → text)",
            ],
            [
              "Amazon Translate",
              "Written text (Language A)",
              "Written text (Language B)",
              "Amazon Comprehend (analyses meaning)",
            ],
            [
              "Amazon Comprehend",
              "Written text",
              "Sentiment, entities, PII, key phrases",
              "Amazon Textract (reads scanned PDFs)",
            ],
            [
              "Amazon Textract",
              "Scanned forms, PDFs, tables",
              "Structured text, key-value pairs, tables",
              "Amazon Rekognition (photos/faces/video)",
            ],
            [
              "Amazon Rekognition",
              "Photos or video frames",
              "Objects, face match scores, safety labels",
              "Amazon Textract (document layouts)",
            ],
          ],
        },
      },
    ],
    workedExample: {
      title: "Automating *100 M-PESA Reversal Call Documentation",
      safaricomProduct:
        "Customer care support through *100 (Illustrative learning scenario, not a confirmed Safaricom implementation)",
      customerScenario:
        "A customer calls *100 in distress because they sent KES 4,500 to the wrong Buy Goods Till Number and cannot reverse it themselves.",
      currentChallenge:
        "Customer-care agents spend several minutes during and after each call listening carefully, typing case notes manually, and summarising the issue—reducing time available to help waiting callers.",
      aiApplication:
        "Convert the customer’s spoken conversation into an accurate written transcript automatically so the agent can review and verify case notes in seconds.",
      awsService: "Amazon Transcribe",
      whatServiceDoes:
        "Amazon Transcribe automatically converts speech audio into punctuated written text, separating speakers and supporting custom Safaricom product vocabulary.",
      howItWorks:
        'Authorised call audio from *100 is submitted securely to Amazon Transcribe (with Custom Vocabulary including "M-PESA", "PayBill", and "Till Number" and PII redaction enabled). Transcribe produces a speaker-labeled transcript ready for agent review and optional sentiment analysis via Amazon Comprehend.',
      businessBenefit:
        "Dramatically cuts manual post-call typing time, improves accuracy of reversal records, and lets agents focus on empathetic customer care.",
      examConnection:
        "AIF-C01 Clue: Speech-to-text from call recordings = Amazon Transcribe (not Polly, which is text-to-speech).",
    },
    secondaryWorkedExample: {
      title: "Accelerating Lipa na M-PESA Merchant Permit Verification",
      safaricomProduct:
        "Lipa na M-PESA Buy Goods Till Numbers (Illustrative learning scenario, not a confirmed Safaricom implementation)",
      customerScenario:
        "A retail shop owner uploads a scanned business permit PDF and settlement bank letter to apply for a Buy Goods Till Number.",
      currentChallenge:
        "Back-office staff must manually open each PDF and re-type business registration numbers, owner names, and bank account tables into internal onboarding systems.",
      aiApplication:
        "Automatically extract structured form fields and table rows from the scanned PDFs so staff only verify highlighted results.",
      awsService: "Amazon Textract",
      whatServiceDoes:
        "Amazon Textract reads scanned documents and PDFs, extracting printed/handwritten text while preserving form key-value pairs and table structure.",
      howItWorks:
        'The uploaded PDF is stored temporarily in encrypted Amazon S3 and sent to Amazon Textract. Textract outputs structured JSON linking labels ("Permit No:") to their values ("BN-884210") plus confidence scores—routing any score below 90% to human review.',
      businessBenefit:
        "Speeds up merchant onboarding from days to minutes while reducing manual typing errors.",
      examConnection:
        "AIF-C01 Clue: Extracting key-value pairs and tables from scanned PDF forms = Amazon Textract (not Rekognition).",
    },
    pipelineDiagram: {
      title:
        "Chaining Pre-Trained Services: *100 Multilingual Call & Feedback Pipeline",
      subtitle:
        "Step through how speech, translation, and sentiment services work together cleanly",
      stages: [
        {
          stepNumber: 1,
          stageLabel: "Speech-to-Text Capture",
          actorOrComponent: "Amazon Transcribe",
          dataPayload:
            'Audio (*100 call) → "Habari, niliweka pesa kwa PayBill kimakosa leo asubuhi..."',
          Explanation:
            "Amazon Transcribe converts the spoken recording into written text with speaker labels and redacts spoken ID digits.",
        },
        {
          stepNumber: 2,
          stageLabel: "Optional Translation",
          actorOrComponent: "Amazon Translate",
          dataPayload:
            'Swahili text → "Hello, I sent money to a PayBill by mistake this morning..." (keeps "PayBill" intact)',
          Explanation:
            "If a specialist team needs  reporting, Amazon Translate translates the text while Custom Terminology preserves Safaricom product names.",
        },
        {
          stepNumber: 3,
          stageLabel: "Sentiment & Topic Insight",
          actorOrComponent: "Amazon Comprehend",
          dataPayload:
            'Output → { Sentiment: "NEGATIVE (0.87)", KeyPhrases: ["PayBill", "by mistake"], PII: "Redacted" }',
          Explanation:
            "Amazon Comprehend detects urgency/negative sentiment and extracts key product terms so supervisors can prioritise urgent cases.",
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: "Amazon Transcribe",
        roleInChapter:
          "Automatic Speech Recognition (ASR) turning audio into text.",
        whenToUse:
          "Call recordings, voice memos, meeting subtitles, custom product vocabulary.",
        whenNotToUse:
          "Speaking text aloud (use Polly) or analysing sentiment (use Comprehend).",
        inputType: "MP3/WAV/FLAC audio or live stream.",
        outputType:
          "Punctuated JSON/text transcript with timestamps and speaker labels.",
        examClue: '"Speech-to-text" or "transcribe call centre audio".',
      },
      {
        serviceName: "Amazon Polly",
        roleInChapter:
          "Text-to-Speech (TTS) turning text into natural human voice.",
        whenToUse:
          "Dynamic *200 IVR voice announcements, spoken accessibility alerts.",
        whenNotToUse: "Converting speech into text (use Transcribe).",
        inputType: " text or SSML markup.",
        outputType: "Spoken MP3/OGG audio stream.",
        examClue: '"Text-to-speech" or "lifelike spoken voice output".',
      },
      {
        serviceName: "Amazon Textract",
        roleInChapter:
          "Document intelligence extracting form key-value pairs and tables.",
        whenToUse:
          "Scanned PDFs, merchant permits, invoices, application forms.",
        whenNotToUse:
          "Everyday photos of faces, buildings, or street signs (use Rekognition).",
        inputType: "PDF, JPEG, or PNG document scans.",
        outputType: "Structured JSON text, key-value pairs, and tables.",
        examClue: '"Extract tables and form fields from scanned PDFs".',
      },
      {
        serviceName: "Amazon Rekognition",
        roleInChapter: "Computer vision for photos and video.",
        whenToUse:
          "Selfie-to-ID face comparison, liveness checks, kiosk branding photos, unsafe content moderation.",
        whenNotToUse: "Multi-page PDF form/table extraction (use Textract).",
        inputType: "Images or videos.",
        outputType: "Labels, bounding boxes, face match similarity scores.",
        examClue:
          '"Detect objects, faces, or inappropriate imagery in photos/videos".',
      },
      {
        serviceName: "Amazon Comprehend",
        roleInChapter:
          "NLP text analysis for sentiment, entities, key phrases, and PII.",
        whenToUse:
          "Analysing MySafaricom App reviews, support emails, or call transcripts.",
        whenNotToUse:
          "Extracting text from a scanned image first (use Textract first).",
        inputType: " text documents or strings.",
        outputType:
          "Sentiment score, entity tags, topic clusters, PII offsets.",
        examClue:
          '"Sentiment analysis, entity extraction, key phrases, PII in text".',
      },
      {
        serviceName: "Amazon Translate",
        roleInChapter: "Fast neural translation between 75+ languages.",
        whenToUse:
          "Swahili ↔  customer support text, roaming traveller assistance.",
        whenNotToUse:
          "Measuring whether a customer is happy or angry (use Comprehend).",
        inputType: "Written text + optional Custom Terminology CSV.",
        outputType: "Translated text in target language.",
        examClue: '"Translate text across languages at scale".',
      },
    ],
    guidedWalkthrough: {
      title: "Guided Walkthrough: Service Selection Triage Desk",
      objective:
        "Practise spotting the single exact pre-trained AWS service from familiar Safaricom tasks.",
      safaricomSetting: "Safaricom Digital & Retail Operations",
      steps: [
        {
          stepTitle: "Task 1: Reading 12,000 MySafaricom App Reviews",
          situation:
            'Product managers want to know how many reviews mentioning "Data bundles" are Positive vs Negative.',
          inputSample:
            '"The new daily bundle value is great, though MySafaricom App loaded slowly on 4G."',
          guidedActionLabel: "Apply Amazon Comprehend",
          resultingOutput:
            'Sentiment: MIXED (Positive: 0.48, Negative: 0.44) · Key Phrases: ["daily bundle value", "MySafaricom App", "4G"]',
          whyThisWorks:
            "Amazon Comprehend reads raw text and immediately classifies sentiment and extracts key phrases without training a custom ML model.",
        },
        {
          stepTitle: "Task 2: Announcing Dynamic PostPay Balances on *200",
          situation:
            "When a PostPay customer checks their current bill by phone, the system needs to read the exact shilling figure aloud.",
          inputSample:
            'Text payload: "Your current PostPay balance is 3,450 shillings, due on the 15th."',
          guidedActionLabel: "Apply Amazon Polly",
          resultingOutput:
            "MP3 audio stream spoken smoothly in a natural voice with clear pause pacing.",
          whyThisWorks:
            "Turning dynamic written strings into spoken voice is Text-to-Speech (Amazon Polly).",
        },
        {
          stepTitle:
            "Task 3: Checking SIM Registration Selfie vs. ID Card Photo",
          situation:
            "During self-service SIM registration, a customer uploads a photo of their ID and takes a live selfie.",
          inputSample:
            "Image A (ID portrait crop) + Image B (live customer selfie).",
          guidedActionLabel: "Apply Amazon Rekognition",
          resultingOutput:
            "CompareFaces Similarity: 98.4% · Face Liveness: PASSED (low scores routed to human agent).",
          whyThisWorks:
            "Face comparison and liveness verification on photographs belong to Amazon Rekognition, never Textract.",
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: "Human Oversight & Confidence Thresholds",
      paragraphs: [
        "Pre-trained AI services always return a Confidence Score (for example, 98.4% vs 61.2%). Never allow an automated workflow to reject a SIM registration or merchant application silently on a low-confidence score.",
        "Instead, design clear thresholds: high-confidence matches proceed quickly, while borderline scores route automatically to a trained Safaricom Care specialist for human verification.",
      ],
      practicalChecklist: [
        "Enable PII redaction in Amazon Transcribe and Amazon Comprehend whenever storing transcripts for analytics.",
        'Use Custom Terminology in Amazon Translate so Safaricom product names ("M-PESA", "Zuri", "Home Fibre") are never altered.',
        "Always pair facial comparison (Rekognition) with human review fallback for poor lighting or damaged IDs.",
      ],
    },
    chapterSummary: [
      "Pre-trained AWS AI services let teams add speech, language, document, and vision AI via API calls—zero ML training needed.",
      "Amazon Transcribe = Speech → Text; Amazon Polly = Text → Speech.",
      "Amazon Translate = Language A → Language B; Amazon Comprehend = Sentiment, entities, key phrases & PII analysis.",
      "Amazon Textract = Scanned PDFs, forms & tables; Amazon Rekognition = Photos, faces, objects & video moderation.",
    ],
    questions: [
      {
        id: "w2-q1",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Transcribe",
        safaricomProduct: "*100 customer care",
        question:
          "A customer contacts Safaricom through *100 about an M-PESA reversal. The organisation wants to convert recorded customer conversations into written transcripts so agents spend less time typing notes. Which AWS service is appropriate?",
        options: [
          "Amazon Polly",
          "Amazon Transcribe",
          "Amazon Rekognition",
          "Amazon Textract",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Transcribe is AWS’s Automatic Speech Recognition (ASR) service designed specifically to convert spoken audio into written text transcripts.",
        distractorExplanations: [
          "Incorrect: Amazon Polly does the reverse—it converts written text into spoken audio.",
          "Correct answer.",
          "Incorrect: Amazon Rekognition analyses images and video, not audio speech.",
          "Incorrect: Amazon Textract extracts text and tables from scanned documents and PDFs, not audio files.",
        ],
      },
      {
        id: "w2-q2",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Polly",
        safaricomProduct: "*200 customer support",
        question:
          "Safaricom wants its automated *200 phone support menu to read dynamically changing PostPay balance figures and Home Fibre maintenance updates aloud in a natural human-like voice. Which AWS service should be used?",
        options: [
          "Amazon Transcribe",
          "Amazon Comprehend",
          "Amazon Polly",
          "Amazon Translate",
        ],
        correctIndex: 2,
        correctExplanation:
          "Amazon Polly is a Text-to-Speech (TTS) service that synthesises written text into lifelike spoken audio.",
        distractorExplanations: [
          "Incorrect: Amazon Transcribe turns spoken audio into written text.",
          "Incorrect: Amazon Comprehend analyses text for sentiment and entities; it does not produce speech.",
          "Correct answer.",
          "Incorrect: Amazon Translate translates written text from one language to another.",
        ],
      },
      {
        id: "w2-q3",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Textract",
        safaricomProduct: "Lipa na M-PESA Buy Goods Till Numbers",
        question:
          "Merchants applying for Lipa na M-PESA Buy Goods Till Numbers upload multi-page scanned PDF business permits and bank settlement tables. Which AWS service accurately extracts the form key-value pairs and table rows?",
        options: [
          "Amazon Rekognition",
          "Amazon Textract",
          "Amazon Comprehend",
          "Amazon SageMaker Clarify",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Textract specialises in intelligent document processing, extracting printed/handwritten text, key-value form pairs, and structured tables from scanned PDFs.",
        distractorExplanations: [
          "Incorrect: Amazon Rekognition analyses everyday photographs, faces, and scenes rather than structured PDF forms and tables.",
          "Correct answer.",
          "Incorrect: Amazon Comprehend analyses  text meaning after text has already been extracted; it does not read scanned PDF layouts.",
          "Incorrect: Amazon SageMaker Clarify audits ML models for bias and exability.",
        ],
      },
      {
        id: "w2-q4",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Rekognition",
        safaricomProduct: "SIM registration",
        question:
          "During an illustrative digital SIM registration flow, an app needs to compare a customer’s live selfie photograph against the portrait on their uploaded ID card and verify a real person is present. Which AWS service provides this capability?",
        options: [
          "Amazon Textract",
          "Amazon Rekognition",
          "Amazon Polly",
          "Amazon Macie",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Rekognition provides facial comparison and Face Liveness detection for photographs and video.",
        distractorExplanations: [
          "Incorrect: Amazon Textract extracts text from documents; it does not compare human faces.",
          "Correct answer.",
          "Incorrect: Amazon Polly is a text-to-speech service.",
          "Incorrect: Amazon Macie scans Amazon S3 buckets to discover stored PII files.",
        ],
      },
      {
        id: "w2-q5",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Comprehend",
        safaricomProduct: "MySafaricom App",
        question:
          "Product managers want to automatically scan 20,000 written MySafaricom App feedback comments to measure whether customer sentiment toward a new Data bundle is positive or negative and extract recurring key phrases, without training a custom ML model. Which AWS service fits best?",
        options: [
          "Amazon Translate",
          "Amazon Comprehend",
          "Amazon Transcribe",
          "Amazon SageMaker AI",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Comprehend is a pre-trained Natural Language Processing service that extracts sentiment, key phrases, entities, and topics from text with zero custom training.",
        distractorExplanations: [
          "Incorrect: Amazon Translate converts text from one language to another; it does not analyse sentiment.",
          "Correct answer.",
          "Incorrect: Amazon Transcribe converts spoken audio into text; these reviews are already written.",
          "Incorrect: Amazon SageMaker AI requires building and training a custom model, which violates the requirement for zero custom ML training.",
        ],
      },
      {
        id: "w2-q6",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Translate",
        safaricomProduct: "Roaming services",
        question:
          'International visitors using Safaricom Roaming services send written support messages in French and Arabic, which must be translated quickly into  while keeping brand terms like "M-PESA" and "Safaricom Roaming" untranslated. Which AWS service should be used?',
        options: [
          "Amazon Comprehend",
          "Amazon Translate",
          "Amazon Transcribe",
          "Amazon Lex",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Translate provides fast neural machine translation across 75+ languages and supports Custom Terminology to keep brand names unchanged.",
        distractorExplanations: [
          "Incorrect: Amazon Comprehend detects the language or sentiment of text, but does not translate text into another language.",
          "Correct answer.",
          "Incorrect: Amazon Transcribe converts speech audio to text rather than translating written languages.",
          "Incorrect: Amazon Lex builds structured conversational chatbots.",
        ],
      },
      {
        id: "w2-q7",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Chaining Transcribe + Comprehend",
        safaricomProduct: "Safaricom voice services (*100)",
        question:
          "Quality assurance teams want to analyse recorded *100 voice calls to identify which callers sounded frustrated about Home Fibre outages. Which two AWS services work together to achieve this?",
        options: [
          "Amazon Polly followed by Amazon Textract",
          "Amazon Transcribe followed by Amazon Comprehend",
          "Amazon Rekognition followed by Amazon Translate",
          "Amazon S3 followed by AWS Artifact",
        ],
        correctIndex: 1,
        correctExplanation:
          "First, Amazon Transcribe converts the *100 call audio into written text; then Amazon Comprehend analyses the written transcript for negative sentiment and key phrases.",
        distractorExplanations: [
          "Incorrect: Polly produces speech and Textract reads PDFs—neither transcribes calls or measures sentiment.",
          "Correct answer.",
          "Incorrect: Rekognition analyses images/video, not audio recordings.",
          "Incorrect: S3 is storage and Artifact provides AWS compliance PDFs.",
        ],
      },
      {
        id: "w2-q8",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Rekognition Object/Scene Detection",
        safaricomProduct: "M-PESA Agent services",
        question:
          "Field operations teams collect thousands of photographs submitted by M-PESA Agent kiosks and want to automatically verify whether safety signage and kiosk branding elements appear in the photos. Which service is designed for this?",
        options: [
          "Amazon Textract",
          "Amazon Rekognition",
          "Amazon Comprehend",
          "Amazon Polly",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Rekognition identifies objects, scenes, logos/custom labels, and short visible signage inside photographs.",
        distractorExplanations: [
          "Incorrect: Amazon Textract is designed for structured document scans, forms, and PDFs—not outdoor kiosk photographs.",
          "Correct answer.",
          "Incorrect: Amazon Comprehend processes text, not images.",
          "Incorrect: Amazon Polly produces spoken audio from text.",
        ],
      },
      {
        id: "w2-q9",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept:
          "Amazon Transcribe Custom Vocabulary & PII Redaction",
        safaricomProduct: "PayBill & M-PESA Global",
        question:
          'When using Amazon Transcribe on *100 calls, callers frequently say Kenyan product terms like "PayBill" and "M-PESA Global", as well as personal ID numbers. Which Transcribe features improve term accuracy and protect caller privacy?',
        options: [
          "Face Liveness and Bounding Boxes",
          "Custom Vocabulary and automatic PII Redaction",
          "Key-Value Pairs and Table Extraction",
          "Provisioned Throughput and Top-P",
        ],
        correctIndex: 1,
        correctExplanation:
          'Amazon Transcribe Custom Vocabulary teaches the ASR engine domain-specific terms like "PayBill", while PII Redaction automatically masks sensitive numbers in the output transcript.',
        distractorExplanations: [
          "Incorrect: Face Liveness and Bounding Boxes belong to Amazon Rekognition.",
          "Correct answer.",
          "Incorrect: Key-Value Pairs and Table Extraction belong to Amazon Textract.",
          "Incorrect: Provisioned Throughput and Top-P are Amazon Bedrock generative AI concepts.",
        ],
      },
      {
        id: "w2-q10",
        week: 2,
        domainId: "domain-1",
        domainLabel: "Domain 1: Fundamentals of AI and ML",
        awsServiceOrConcept: "Amazon Comprehend PII Detection",
        safaricomProduct: "Zuri & Digital Care transcripts",
        question:
          "Before storing historical Zuri support chat logs in an internal analytics dashboard, a team must automatically detect and mask customer phone numbers and national IDs inside the  text. Which pre-trained NLP service provides built-in PII entity detection?",
        options: [
          "Amazon Comprehend",
          "Amazon Polly",
          "Amazon Translate",
          "Amazon Rekognition",
        ],
        correctIndex: 0,
        correctExplanation:
          "Amazon Comprehend includes pre-trained PII detection that locates and redacts names, phone numbers, addresses, and ID numbers inside text.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Amazon Polly converts text to speech.",
          "Incorrect: Amazon Translate translates between languages.",
          "Incorrect: Amazon Rekognition processes images and video, not  chat text.",
        ],
      },
    ],
  },
  {
    week: 3,
    title: "From Traditional ML to Generative AI & Foundation Models",
    subtitle:
      "Understanding how Foundation Models, Tokens, Embeddings, and Amazon Bedrock power modern experiences like Zuri",
    domainId: "domain-2",
    domainLabel: "Domain 2: Fundamentals of Generative AI",
    domainWeight: "24% of Exam",
    estimatedReadMinutes: 24,
    featuredProducts: [
      "Zuri (Safaricom chatbot)",
      "MySafaricom App",
      "Home Fibre",
    ],
    featuredServices: ["Amazon Bedrock"],
    learningObjectives: [
      "Contrast Discriminative/Traditional ML (classifying or predicting numbers) with Generative AI (creating new human-like text, code, or images).",
      "Ex Foundation Models (FMs), Large Language Models (LLMs), Tokens, Context Windows, and Embeddings in  .",
      "Understand how Transformer self-attention helps models grasp context in real customer sentences.",
      "Ex what Amazon Bedrock is, why serverless multi-model access matters, and how customer data privacy works on Bedrock.",
    ],
    openingScenario: {
      productName:
        "Zuri, Safaricom’s customer-service chatbot & MySafaricom App",
      narrative: [
        "Traditional machine learning models we studied in Weeks 1 and 2 are brilliant specialists: one model predicts Home Fibre churn, another detects negative sentiment, and another reads PDFs. Yet none of those models can sit down and write a warm, clear, three-sentence explanation to a confused customer.",
        'Consider a customer messaging Zuri in the MySafaricom App: "I paid for Home Fibre 20 minutes ago via PayBill, my M-PESA message arrived, why is my router still blinking red?"',
        'A traditional classifier can tag that message as "Billing + Router Outage", but it cannot *compose* a helpful, empathetic troubleshooting reply tailored to that customer’s exact wording. That ability to generate brand-new language belongs to Generative AI.',
      ],
      coreProblemSummary:
        "Traditional ML predicts labels or numbers, whereas modern customer support channels like Zuri require software that can comprehend nuanced multi-part questions and compose clear, helpful responses.",
    },
    conceptSections: [
      {
        heading: "3.1 Discriminative ML vs. Generative AI & Foundation Models",
        Intro:
          "Think of traditional ML as a multiple-choice grader, and Generative AI as an articulate writer who can draft a custom explanation.",
        paragraphs: [
          'Traditional (Discriminative) ML draws boundaries between existing categories or predicts a number: "Is this transaction Fraud or Genuine?" or "Will this Home Fibre customer renew?".',
          "Generative AI (GenAI) learns the underlying patterns of language, code, or images so deeply that it can *create brand-new content*—drafting customer care replies, summarising a 10-page Safaricom Business proposal into five bullet points, or generating Daraja API sample code.",
          "At the heart of Generative AI is a Foundation Model (FM). Historically, companies built one small model per task. A Foundation Model is a massive neural network pre-trained by major AI labs (using Self-Supervised Learning across huge corpora of books, websites, and code) so that a *single* model can summarise, translate, draft, answer questions, and classify.",
          "When a Foundation Model specialises in reading and generating human text, we call it a Large Language Model (LLM). When it generates or understands both text and images, it is called a Multimodal Foundation Model.",
        ],
        technicalDefinition:
          "Foundation Models are large-scale deep learning architectures (commonly Transformers for text or Diffusion models for images) trained via self-supervised learning on broad unlabeled data and adaptable across diverse downstream tasks.",
        keyTermsUsed: [
          {
            term: "Self-Supervised Learning",
            immediateDefinition:
              "How FMs train themselves without humans labeling every sentence—by hiding the next word in billions of sentences and practising guessing it accurately.",
          },
          {
            term: "Diffusion Model",
            immediateDefinition:
              "A type of generative model used for images that starts from random visual static and gradually refines it into a clean picture.",
          },
        ],
      },
      {
        heading:
          "3.2 Tokens, Context Windows, Transformers & Embeddings (Demystified)",
        Intro:
          "Four simple concepts ex almost everything happening inside an LLM when you send it a message.",
        paragraphs: [
          "First, Tokens: an LLM does not read whole words the way humans do; it breaks text into tiny pieces called tokens (roughly ¾ of an  word, so 100 words ≈ 130 tokens). Token count matters because AWS bills Generative AI usage per input token and output token, and every model has a maximum desk size.",
          "Second, Context Window: the maximum number of tokens a model can hold in its working memory at one time (both your prompt/documents AND its reply). If a model has a 200,000-token context window, it can read an entire lengthy Safaricom Business policy manual in one go; a tiny context window would cut off the text.",
          'Third, Transformer Self-Attention: older text models read word-by-word and forgot the start of a long paragraph. Transformers use "attention" to connect related words across an entire message simultaneously—so when a customer writes "My PayBill payment succeeded, *it* hasn’t reflected on *my router*", attention links "it" to "payment" and "router" to Home Fibre.',
          'Fourth, Embeddings: when you want to search documents by *meaning* rather than exact keyword matching, an Embedding Model converts a sentence into a list of numbers (a vector). Sentences with similar meanings ("No Wi-Fi signal" and "Home Fibre offline") end up close together mathematically, which powers smart search in Week 6.',
        ],
        technicalDefinition:
          "Tokenization segments text into sub-word units bounded by the model’s context window; Transformer self-attention weights relationships across all tokens in parallel; Embedding models project semantic meaning into dense vector coordinates.",
        keyTermsUsed: [
          {
            term: "Context Window",
            immediateDefinition:
              "The maximum combined size (in tokens) of input prompt + documents + generated response a model can process at once.",
          },
          {
            term: "Inference Cost Driver",
            immediateDefinition:
              "Generative AI APIs normally charge based on input tokens read and output tokens generated.",
          },
        ],
      },
    ],
    workedExample: {
      title: "Drafting Clear *100 & Zuri Case Summaries with Amazon Bedrock",
      safaricomProduct:
        "Zuri & *100 Digital Care (Illustrative learning scenario, not a confirmed Safaricom implementation)",
      customerScenario:
        "A customer chats with Zuri for 12 back-and-forth messages about a delayed Home Fibre installation and an M-PESA deposit check, then requests escalation to a human specialist.",
      currentChallenge:
        "When the chat transfers to a human Care agent, the agent has to scroll through all 12 messy customer messages while the customer waits on the line.",
      aiApplication:
        "Use a Large Language Model to automatically read the conversation transcript and generate a crisp 3-bullet handover summary (Customer Issue, Account Details Mentioned, Next Action Needed) in under 2 seconds.",
      awsService: "Amazon Bedrock",
      whatServiceDoes:
        "Amazon Bedrock is a fully managed, serverless AWS service providing single-API access to leading foundation models (such as Anthropic Claude, Amazon Nova, Meta Llama, and Mistral) with enterprise privacy.",
      howItWorks:
        "1) The chat transcript (approx. 450 tokens) is sent via HTTPS API to Amazon Bedrock along with an instruction to summarise in 3 bullets. 2) Bedrock runs inference on the selected Foundation Model without Safaricom provisioning any GPU servers. 3) Bedrock returns an 80-token structured summary to the Care agent’s screen—and Safaricom’s data is never used to train the model provider’s base models.",
      businessBenefit:
        "Saves 60–90 seconds per escalation, prevents customers from repeating themselves, and keeps confidential customer chats isolated inside AWS.",
      examConnection:
        "AIF-C01 Clue: Serverless access to multiple Foundation Models via one API + private customer data not used to train base models = Amazon Bedrock.",
    },
    pipelineDiagram: {
      title: "Inside an Amazon Bedrock Foundation Model Call",
      subtitle:
        "See how a Zuri chat handover travels through tokens, attention, and output generation",
      stages: [
        {
          stepNumber: 1,
          stageLabel: "Tokenisation",
          actorOrComponent: "Amazon Bedrock Input Processor",
          dataPayload:
            'Input text (340 words) → Split into ~450 integer Tokens + Instruction: "Summarise issue & action needed"',
          Explanation:
            "The customer’s chat history is converted into numeric tokens and checked to ensure it fits inside the model’s Context Window.",
        },
        {
          stepNumber: 2,
          stageLabel: "Transformer Reasoning",
          actorOrComponent: "Foundation Model (e.g., Amazon Nova / Claude)",
          dataPayload:
            'Self-attention links "PayBill deposit" + "router not yet active" + "account HF-90211"',
          Explanation:
            "The pre-trained Foundation Model evaluates relationships across all tokens in parallel without needing any custom training.",
        },
        {
          stepNumber: 3,
          stageLabel: "Streamed Token Output",
          actorOrComponent: "Agent Desktop Summary Card",
          dataPayload:
            'Output (~75 tokens): "• Issue: Home Fibre deposit paid via PayBill, service pending.\\n• Account: HF-90211.\\n• Action: Verify PayBill settlement."',
          Explanation:
            "Tokens are decoded back into readable words and displayed immediately on the Care agent’s screen.",
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: "Amazon Bedrock",
        roleInChapter:
          "Managed serverless gateway to multiple Foundation Models and Embedding Models.",
        whenToUse:
          "Summarising chats, drafting customer replies, generating code/content, or creating embeddings without managing GPU clusters.",
        whenNotToUse:
          "Predicting tabular numeric churn from CSV spreadsheets (use Amazon SageMaker AI) or simple speech-to-text (use Amazon Transcribe).",
        inputType:
          "Text prompts, conversation transcripts, documents, or images (multimodal FMs).",
        outputType: "Generated text, JSON, embeddings, or images.",
        examClue:
          '"Serverless", "single API to multiple FMs", "prompts not shared with model providers for base training".',
      },
    ],
    guidedWalkthrough: {
      title: "Guided Walkthrough: Token Budget & Context Window Check",
      objective:
        "Understand how text size turns into tokens and why Context Window size matters in real support flows.",
      safaricomSetting: "MySafaricom App & Zuri Handover Design",
      steps: [
        {
          stepTitle: "Step 1: Short Customer Message (Small Context)",
          situation:
            'A customer asks: "How do I reverse an M-PESA payment sent to the wrong Buy Goods Till?"',
          inputSample: "16 words → ~22 input tokens.",
          guidedActionLabel: "Calculate Token & Cost Impact",
          resultingOutput:
            "Input: ~22 tokens · Reply (60 words): ~80 output tokens · Fits easily in any lightweight FM.",
          whyThisWorks:
            "Short everyday queries consume tiny token counts, making fast, low-cost foundation models ideal.",
        },
        {
          stepTitle: "Step 2: Full Enterprise Policy Manual (Large Context)",
          situation:
            "A Safaricom Business analyst uploads an entire 110-page Enterprise SLA & IoT Connectivity PDF to summarise key clauses.",
          inputSample: "~55,000 words → ~73,000 input tokens.",
          guidedActionLabel: "Check Context Window Fit",
          resultingOutput:
            "Requires a Large-Context FM (e.g., 128k–200k+ token context window) or RAG chunking in Amazon Bedrock.",
          whyThisWorks:
            "A model with an 8,000-token limit would truncate 88% of the contract; choosing a large context window (or RAG in Week 6) preserves every clause.",
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: "Data Privacy Inside Amazon Bedrock",
      paragraphs: [
        'Employees often ask: "If we paste a Safaricom customer’s Home Fibre escalation into an AI model, will that model learn it and repeat it to another company later?"',
        "On consumer public websites, free chat tools sometimes log prompts for training. On Amazon Bedrock, AWS guarantees that customer prompts, completions, and customisations stay encrypted in your AWS region and are NEVER used to train the underlying foundation model providers’ public models.",
      ],
      practicalChecklist: [
        "Use enterprise AWS services (Amazon Bedrock) rather than public consumer chat websites for any work text.",
        "Keep prompts concise—only send the context needed for the task, omitting sensitive customer PINs or IDs.",
      ],
    },
    chapterSummary: [
      "Traditional ML classifies or predicts numbers; Generative AI creates brand-new text, summaries, code, or images.",
      "Foundation Models are large pre-trained models adaptable across many tasks without training from scratch.",
      "Models process text as Tokens inside a bounded Context Window; Embeddings capture semantic meaning as numbers.",
      "Amazon Bedrock provides serverless, private, single-API access to multiple leading Foundation Models.",
    ],
    questions: [
      {
        id: "w3-q1",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Discriminative ML vs. Generative AI",
        safaricomProduct: "Zuri & Home Fibre",
        question:
          "A team wants an AI system that can read a customer’s free-form message to Zuri about a Home Fibre outage and write a polite, tailored three-sentence troubleshooting response. Which branch of AI is required?",
        options: [
          "Unsupervised clustering",
          "Generative AI using a Foundation Model",
          "Supervised tabular regression",
          "Rule-based USSD menu routing",
        ],
        correctIndex: 1,
        correctExplanation:
          "Composing original, fluent natural-language replies tailored to a user’s message is a core capability of Generative AI powered by a Foundation Model.",
        distractorExplanations: [
          "Incorrect: Clustering groups similar records without generating human-readable sentences.",
          "Correct answer.",
          "Incorrect: Regression predicts continuous numbers, not natural-language paragraphs.",
          "Incorrect: Rule-based menus display pre-written fixed scripts rather than understanding free-form wording.",
        ],
      },
      {
        id: "w3-q2",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Amazon Bedrock Privacy & Serverless Architecture",
        safaricomProduct: "*100 customer care",
        question:
          "Safaricom engineers want to test Anthropic Claude and Amazon Nova models via a single serverless API to summarise *100 escalation notes, while ensuring customer text is never used to train provider base models. Which AWS service meets all requirements?",
        options: [
          "Amazon SageMaker Ground Truth",
          "Amazon Bedrock",
          "Amazon Comprehend",
          "Amazon Polly",
        ],
        correctIndex: 1,
        correctExplanation:
          "Amazon Bedrock offers a single serverless API across multiple FM providers and guarantees customer inputs are never used to train base models.",
        distractorExplanations: [
          "Incorrect: SageMaker Ground Truth is a data-labeling workflow tool, not a multi-FM GenAI API.",
          "Correct answer.",
          "Incorrect: Comprehend extracts sentiment and entities, not generative summaries across multiple third-party LLMs.",
          "Incorrect: Polly converts text to speech.",
        ],
      },
      {
        id: "w3-q3",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Tokens",
        safaricomProduct: "MySafaricom App",
        question:
          "When estimating the monthly API cost of a generative AI assistant inside the MySafaricom App on Amazon Bedrock, what basic text unit determines usage billing and model limits?",
        options: ["Pixels", "Tokens", "Frames per second", "Database tables"],
        correctIndex: 1,
        correctExplanation:
          "Foundation models split input prompts and generated outputs into sub-word units called tokens, which govern both Context Window limits and On-Demand pricing.",
        distractorExplanations: [
          "Incorrect: Pixels measure image resolution, not language model text length.",
          "Correct answer.",
          "Incorrect: Frames per second measures video playback.",
          "Incorrect: Database tables belong to relational storage, not LLM text billing.",
        ],
      },
      {
        id: "w3-q4",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Context Window",
        safaricomProduct: "Safaricom Business contracts",
        question:
          "A Safaricom Business analyst pastes a 90-page enterprise connectivity agreement into an LLM prompt, and the model ignores the final 30 pages. What model limitation caused this?",
        options: [
          "The prompt exceeded the model’s Context Window",
          "The audio bitrate was too low",
          "The model used Supervised Regression",
          "The dataset lacked classification labels",
        ],
        correctIndex: 0,
        correctExplanation:
          "Every foundation model has a maximum Context Window (in tokens). Inputs exceeding that limit are truncated or rejected.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Audio bitrate applies to speech/sound files, not text documents.",
          "Incorrect: LLMs do not fail to read long documents because of regression.",
          "Incorrect: Foundation models do not need classification labels to summarise text.",
        ],
      },
      {
        id: "w3-q5",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Embeddings",
        safaricomProduct: "Zuri & FAQ search",
        question:
          'A customer asks Zuri: "My Wi-Fi router has a red light." An internal help article is titled "Resolving Home Fibre Optical Signal Loss." Which AI representation allows the system to recognise these two phrases have similar meaning despite sharing zero keywords?',
        options: [
          "Audio waveforms",
          "Vector Embeddings",
          "SQL foreign keys",
          "Static regex rules",
        ],
        correctIndex: 1,
        correctExplanation:
          "Vector embeddings map sentences into numeric coordinates based on semantic meaning, allowing conceptually similar phrases to match even with different vocabulary.",
        distractorExplanations: [
          "Incorrect: Waveforms represent audio frequencies, not written meaning.",
          "Correct answer.",
          "Incorrect: SQL keys link exact database IDs, not natural-language meaning.",
          "Incorrect: Regex matches exact character patterns and fails when wording differs.",
        ],
      },
      {
        id: "w3-q6",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Self-Attention in Transformers",
        safaricomProduct: "PayBill support",
        question:
          'What breakthrough inside the Transformer architecture enables a Foundation Model to connect pronouns like "it" back to "the PayBill transaction" several lines earlier in a customer comt?',
        options: [
          "Self-Attention mechanism",
          "Optical Character Recognition",
          "K-Means clustering",
          "Audio diarisation",
        ],
        correctIndex: 0,
        correctExplanation:
          "Self-attention computes relationships between all tokens in a sequence simultaneously, capturing long-range context accurately.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: OCR reads text off scanned images.",
          "Incorrect: K-Means is an unsupervised clustering algorithm for tabular data.",
          "Incorrect: Audio diarisation separates speakers in sound recordings.",
        ],
      },
      {
        id: "w3-q7",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Foundation Model Adaptability",
        safaricomProduct: "Daraja API & Digital Care",
        question:
          "Why is a single Foundation Model in Amazon Bedrock able to summarise *100 notes, translate a Swahili message, and draft a Daraja API example without training three separate ML models?",
        options: [
          "Because FMs are pre-trained on vast, diverse datasets and generalise across many tasks",
          "Because FMs automatically connect to every live M-PESA database without permissions",
          "Because FMs only store exact if-then rules written by AWS staff",
          "Because FMs compress files like ZIP archives",
        ],
        correctIndex: 0,
        correctExplanation:
          "Foundation Models acquire broad general language and reasoning patterns during large-scale pre-training, making one model reusable across many tasks.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: FMs have no automatic access to private databases unless explicitly integrated.",
          "Incorrect: FMs learn statistical patterns via neural networks, not manual if-then rules.",
          "Incorrect: Compression utilities do not perform reasoning or text generation.",
        ],
      },
      {
        id: "w3-q8",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Multimodal Foundation Models",
        safaricomProduct: "Home Fibre router support",
        question:
          "A customer takes a photo of blinking lights on their Home Fibre router and uploads it alongside a typed question to an assistive app. Which type of Foundation Model can inspect both the photo and the question together?",
        options: [
          "A Multimodal Foundation Model",
          "An Audio-Only ASR Model",
          "A Linear Regression Model",
          "An Unsupervised Clustering Model",
        ],
        correctIndex: 0,
        correctExplanation:
          "Multimodal Foundation Models accept and reason across multiple input types—such as images plus text—in a single prompt.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: ASR handles spoken audio only.",
          "Incorrect: Linear regression handles numerical tabular variables only.",
          "Incorrect: Clustering groups unlabeled data rows rather than answering image+text questions.",
        ],
      },
      {
        id: "w3-q9",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Diffusion Models",
        safaricomProduct: "Safaricom marketing campaigns",
        question:
          "A creative marketing team wants to generate high-resolution visual concept banners for a Data bundle campaign starting from text descriptions. Which generative model family underlies image generation models in Amazon Bedrock?",
        options: [
          "Diffusion models",
          "Decision trees",
          "Linear regression",
          "Speech synthesisers",
        ],
        correctIndex: 0,
        correctExplanation:
          "Image-generation foundation models typically use diffusion architectures that iteratively denoise random patterns into coherent images guided by text prompts.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Decision trees are used for structured tabular classification/regression.",
          "Incorrect: Linear regression predicts a single scalar number.",
          "Incorrect: Speech synthesisers generate audio, not images.",
        ],
      },
      {
        id: "w3-q10",
        week: 3,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Self-Supervised Pre-Training",
        safaricomProduct: "General AI Foundations",
        question:
          "How do Large Language Models learn grammar, world facts, and reasoning during initial pre-training without humans manually labeling trillions of sentences?",
        options: [
          "Self-supervised learning (predicting masked or next tokens in massive text corpora)",
          "Manual key-value extraction by back-office agents",
          "Uploading CSV churn tables to Amazon S3",
          "Recording IVR audio prompts in Amazon Polly",
        ],
        correctIndex: 0,
        correctExplanation:
          "Self-supervised learning automatically creates training signals from raw text itself—such as predicting the next token in a sentence.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Manual labeling at trillion-token scale is impossible and unnecessary for self-supervised pre-training.",
          "Incorrect: CSV churn tables are used for small supervised ML models, not pre-training LLMs.",
          "Incorrect: Polly synthesises voice output; it does not train LLMs.",
        ],
      },
    ],
  },
  {
    week: 4,
    title: "Choosing, Customising & Evaluating Foundation Models",
    subtitle:
      "Balancing cost, latency, Temperature settings, Fine-Tuning, and Evaluation Metrics for Safaricom Business & Daraja API",
    domainId: "domain-2",
    domainLabel: "Domain 2: Fundamentals of Generative AI",
    domainWeight: "24% of Exam",
    estimatedReadMinutes: 25,
    featuredProducts: [
      "Daraja API",
      "Safaricom Business services",
      "Lipa na M-PESA",
    ],
    featuredServices: ["Amazon Bedrock", "Amazon SageMaker AI"],
    learningObjectives: [
      "Select the right model size and adaptation method (Prompting vs RAG vs Fine-Tuning vs Continued Pre-Training) without overspending.",
      "Control output creativity and consistency using Temperature, Top-P, and Top-K parameters.",
      "Ex why Hallucinations occur and how automated evaluation metrics (ROUGE, BLEU, BERTScore) and human evaluation measure model quality.",
      "Distinguish clearly between Amazon Bedrock Custom Models / Model Evaluation and Amazon SageMaker JumpStart.",
    ],
    openingScenario: {
      productName:
        "Daraja API developer support & Safaricom Business communications",
      narrative: [
        "Suppose two different teams at Safaricom try out Generative AI. The Marketing team wants varied, catchy slogan ideas for a new M-PESA Global campaign. Meanwhile, the Daraja API Developer Support team wants an assistant that writes exact JSON webhook examples and never invents fake API field names.",
        "If both teams use the exact same huge model with the exact same settings, Marketing might find the replies stiff and repetitive, while Daraja engineers might discover the model randomly invents parameters that do not exist—a problem called Hallucination.",
        "Success in Generative AI comes from knowing how to choose the right-sized model, tune its decoding dials, pick the cheapest effective customisation path, and evaluate quality rigorously before launch.",
      ],
      coreProblemSummary:
        "Using the largest model blindly wastes money and adds delay, while wrong decoding settings cause hallucinations or inconsistent formatting.",
    },
    conceptSections: [
      {
        heading:
          "4.1 The Customisation Ladder: Prompting → RAG → Fine-Tuning → Continued Pre-Training",
        Intro:
          "Always climb the ladder from the bottom up—start with the cheapest, fastest method before spending money retraining a model.",
        paragraphs: [
          "Step 1 — Prompt Engineering: Changing *what you ask* without touching the model at all. Zero training cost, takes minutes, solves ~70% of everyday formatting and tone needs.",
          "Step 2 — Retrieval-Augmented Generation (RAG, covered deeply in Week 6): Connecting the model to your live company PDFs so it checks facts before answering. Best when facts change weekly (like Data bundle prices or M-PESA Global limits).",
          "Step 3 — Fine-Tuning (Instruction Fine-Tuning): Providing hundreds or thousands of labeled prompt-and-ideal-answer pairs so the model permanently learns a specific style, concise JSON structure, or domain phrasing. Caution: Fine-tuning teaches *how* to answer, NOT real-time daily facts!",
          "Step 4 — Continued Pre-Training: Feeding huge volumes of unlabeled domain text (millions of words of specialised medical, legal, or telecom engineering manuals) so the model absorbs deep jargon. Rarely needed for ordinary business tasks and the most expensive option.",
        ],
        technicalDefinition:
          "Adaptation strategies progress from non-parametric inference-time steering (prompting, RAG) to supervised parameter updates (fine-tuning) and domain-adaptive unlabeled pre-training.",
        keyTermsUsed: [
          {
            term: "Instruction Fine-Tuning",
            immediateDefinition:
              "Training a model on curated input→output examples (JSONL) so it consistently follows a house style or narrow task.",
          },
          {
            term: "Catastrophic Forgetting",
            immediateDefinition:
              "A risk during heavy fine-tuning where a model gets good at one narrow task but forgets general conversational skills.",
          },
        ],
        comparisonTable: {
          caption:
            "When to Use Prompting, RAG, Fine-Tuning, or Continued Pre-Training",
          headers: ["Method", "Cost & Effort", "Best For", "Safaricom Example"],
          rows: [
            [
              "Prompt Engineering",
              "Lowest (minutes)",
              "Tone, length, output format",
              "Formatting Zuri replies in 3 polite bullets",
            ],
            [
              "RAG (Knowledge Bases)",
              "Low–Medium (hours)",
              "Up-to-date facts & citations",
              "Checking latest M-PESA Global tariffs & limits",
            ],
            [
              "Fine-Tuning",
              "Medium–High (days)",
              "Strict house style or JSON format",
              "5,000 Daraja API Q&A pairs teaching exact response structure",
            ],
            [
              "Continued Pre-Training",
              "Highest (weeks)",
              "Massive specialised unlabeled vocabulary",
              "Deep radio-frequency telecom engineering corpus",
            ],
          ],
        },
      },
      {
        heading:
          "4.2 Decoding Parameters & Evaluating Model Quality (Without Guesswork)",
        Intro:
          "Foundation Models predict the next token by probability. Decoding settings let you control how cautious or adventurous those word picks are.",
        paragraphs: [
          'Temperature (0.0 to 1.0+): Think of Temperature as the "Creativity vs. Consistency Dial". At Temperature 0.0–0.2, the model almost always picks the single safest, highest-probability word—ideal for Daraja API JSON code, PayBill procedures, or factual summaries. At Temperature 0.8–1.0, the model takes creative risks—helpful for brainstorming campaign headlines, dangerous for policy advice.',
          'Top-P (Nucleus Sampling) and Top-K: Both restrict the pool of candidate next words. Top-K says "only consider the top K most likely words" (e.g., top 20); Top-P says "only consider the smallest group of top words whose probabilities add up to P%" (e.g., 90%). Lowering them makes responses tighter and less likely to wander off-topic.',
          "Evaluation Metrics: How do we test if a model is actually good before showing it to Safaricom customers? Automated metrics compare model outputs against human-written reference answers: ROUGE measures word/phrase overlap for *summaries*; BLEU measures overlap for *translations*; BERTScore compares semantic *meaning* using embeddings. Alongside automated checks, Human Evaluation judges tone, helpfulness, and trustworthiness—which Amazon Bedrock Model Evaluation supports in one workflow.",
        ],
        technicalDefinition:
          "Temperature scales next-token logit distributions; Top-K/Top-P truncate candidate token vocabularies; ROUGE (recall-oriented summary overlap), BLEU (precision-oriented translation overlap), and BERTScore (embedding similarity) quantify quality alongside human rubrics.",
        keyTermsUsed: [
          {
            term: "ROUGE vs. BLEU",
            immediateDefinition:
              "Exam memory hook: ROUGE = Summarisation evaluation; BLEU = Translation evaluation.",
          },
          {
            term: "Amazon SageMaker JumpStart",
            immediateDefinition:
              "A hub inside SageMaker AI to deploy open-weight foundation models on dedicated GPU instances when you need full infrastructure control.",
          },
        ],
      },
    ],
    workedExample: {
      title:
        "Standardising Daraja API Developer Support Replies with Fine-Tuning & Temperature Control",
      safaricomProduct:
        "Daraja API (Illustrative learning scenario, not a confirmed Safaricom implementation)",
      customerScenario:
        "Partner fintech developers integrating Lipa na M-PESA STK Push via the Daraja API write support tickets asking why their callback URL returned an error code.",
      currentChallenge:
        "A general out-of-the-box LLM writes overly wordy essays, varies its JSON structure unpredictably, and occasionally invents non-existent Daraja error codes when Temperature is left high.",
      aiApplication:
        "Evaluate a lightweight model, set Temperature to 0.1 for deterministic accuracy, and fine-tune it on 2,000 anonymised Daraja support Q&As formatted in strict JSONL—while keeping live API docs connected via RAG for current endpoints.",
      awsService:
        "Amazon Bedrock (Model Evaluation & Custom Model Fine-Tuning)",
      whatServiceDoes:
        "Amazon Bedrock lets engineers run automated + human Model Evaluation benchmarks across candidate models, then fine-tune a chosen base model securely using labeled JSONL files stored in Amazon S3.",
      howItWorks:
        "1) Curated prompt-completion pairs are placed in Amazon S3. 2) Bedrock creates a private Custom Model copy encrypted with Safaricom’s KMS key. 3) Inference requests pass `temperature: 0.1` and `max_tokens: 300`, returning consistent, concise developer diagnostics measured by ROUGE and human engineering review.",
      businessBenefit:
        "Faster Daraja API onboarding for Kenyan fintech partners, consistent structured troubleshooting output, and lower token costs using a fine-tuned compact model.",
      examConnection:
        "AIF-C01 Clue: Teach consistent formatting/house style via labeled examples = Fine-Tuning; Deterministic factual output = Low Temperature (near 0); Summary metric = ROUGE.",
    },
    pipelineDiagram: {
      title: "Model Selection & Customisation Decision Flow",
      subtitle:
        "Step through how teams move from model choice to fine-tuning and evaluation",
      stages: [
        {
          stepNumber: 1,
          stageLabel: "Model Benchmark & Selection",
          actorOrComponent: "Amazon Bedrock Model Evaluation",
          dataPayload:
            "Compare compact fast model vs large reasoning model on 200 Daraja test prompts → check accuracy, latency (ms), & cost/1k tokens",
          Explanation:
            "Never guess which model is best—benchmark smaller, cheaper models first against your actual Safaricom test cases.",
        },
        {
          stepNumber: 2,
          stageLabel: "Fine-Tuning (Style & Structure)",
          actorOrComponent: "Amazon Bedrock Custom Models",
          dataPayload:
            'S3 JSONL: {"prompt": "Error 1032 on STK Push", "completion": "{cause: Cancelled by user, fix: ...}"} → Private Custom Model',
          Explanation:
            "Labeled pairs teach the model Safaricom’s exact concise structure without modifying the shared public base model.",
        },
        {
          stepNumber: 3,
          stageLabel: "Controlled Decoding",
          actorOrComponent: "Runtime Inference Parameters",
          dataPayload:
            "Settings: Temperature = 0.1, Top-P = 0.85 → Consistent, low-hallucination developer response",
          Explanation:
            "Low Temperature locks the model onto high-probability, factual tokens for technical reliability.",
        },
      ],
    },
    serviceDeepDives: [
      {
        serviceName: "Amazon Bedrock (Custom Models & Evaluation)",
        roleInChapter:
          "Managed fine-tuning and automated/human model evaluation.",
        whenToUse:
          "When prompting alone cannot enforce strict domain tone/formatting, or when benchmarking models.",
        whenNotToUse:
          "Do NOT use fine-tuning merely to inject daily-changing prices—use Knowledge Bases (RAG).",
        inputType: "Labeled JSONL prompt-completion pairs in Amazon S3.",
        outputType:
          "Private encrypted Custom Model copy + evaluation scorecards (ROUGE, BERTScore, human ratings).",
        examClue:
          '"Teach specific style/format with labeled examples" or "evaluate models using ROUGE/human review".',
      },
      {
        serviceName: "Amazon SageMaker AI (JumpStart)",
        roleInChapter:
          "Deploy and customise open-source Foundation Models on your own dedicated GPU instances.",
        whenToUse:
          "When engineers need direct control over model weights, VPC/instance hardware, or custom PyTorch training loops.",
        whenNotToUse:
          "When you want zero server/GPU management (use Amazon Bedrock instead).",
        inputType:
          "Open-weight model package + training dataset + EC2 GPU instance choice.",
        outputType: "Dedicated self-managed inference endpoint.",
        examClue:
          '"Deploy open-source models with full infrastructure/instance control".',
      },
    ],
    guidedWalkthrough: {
      title: "Guided Walkthrough: Tuning the Temperature Dial",
      objective:
        "Observe how changing Temperature from 0.1 to 0.9 changes the exact same Safaricom prompt.",
      safaricomSetting: "Safaricom Business & Marketing Desk",
      steps: [
        {
          stepTitle: "Setting A: Temperature = 0.1 (Factual & Consistent)",
          situation:
            'Prompt: "Ex what a Lipa na M-PESA PayBill number is in one accurate sentence."',
          inputSample: "temperature: 0.1 · top_p: 0.9",
          guidedActionLabel: "Inspect Output at Temp 0.1",
          resultingOutput:
            '"A Lipa na M-PESA PayBill number is a registered business collection code that lets customers pay bills directly from M-PESA using an account reference."',
          whyThisWorks:
            "Low temperature ensures every customer receives the same clear, accurate definition without creative embellishment.",
        },
        {
          stepTitle: "Setting B: Temperature = 0.9 (Creative & Varied)",
          situation:
            'Prompt: "Suggest 3 energetic campaign taglines for Safaricom 5G Home Wi-Fi."',
          inputSample: "temperature: 0.9 · top_p: 0.95",
          guidedActionLabel: "Inspect Output at Temp 0.9",
          resultingOutput:
            '1. "Stream Beyond Limits with 5G." 2. "Every Room, Zero Lag." 3. "Nairobi Speed, Ready for Tomorrow."',
          whyThisWorks:
            "Higher temperature encourages variety and fresh phrasing—great for brainstorming, inappropriate for billing or USSD rules.",
        },
      ],
    },
    responsibleAiAndSecurity: {
      title: "Preventing Stale Facts & Unchecked Hallucinations",
      paragraphs: [
        "A fine-tuned model freezes whatever facts existed on the day it was trained. If Safaricom updates an M-PESA Global tariff or Daraja API endpoint next month, a fine-tuned model will still repeat the old number unless paired with RAG.",
        "Always pair automated benchmarks (ROUGE/BERTScore) with human domain review by Safaricom Care or Engineering leads before promoting a model to customers.",
      ],
      practicalChecklist: [
        "Use low Temperature (0.0–0.2) for policy, billing, and technical API guidance.",
        "Keep sensitive customer identifiers out of fine-tuning JSONL datasets.",
        "Test smaller, lower-cost models first—only pay for larger models when evaluation proves they are needed.",
      ],
    },
    chapterSummary: [
      "Always try Prompt Engineering and RAG before paying for Fine-Tuning or Continued Pre-Training.",
      "Fine-tuning teaches consistent style, tone, and output structure; RAG supplies current, changing facts.",
      "Lower Temperature (near 0) increases factual consistency; higher Temperature increases creative variety.",
      "ROUGE evaluates summaries, BLEU evaluates translations, BERTScore measures semantic similarity, and Human Evaluation validates real-world quality.",
    ],
    questions: [
      {
        id: "w4-q1",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Temperature Parameter",
        safaricomProduct: "Daraja API",
        question:
          "A Daraja API developer assistant built on Amazon Bedrock occasionally varies its JSON key names and invents creative explanations instead of giving strict, repeatable technical steps. Which inference parameter should be lowered toward 0.1?",
        options: ["Context Window", "Temperature", "Batch Size", "Token Limit"],
        correctIndex: 1,
        correctExplanation:
          "Lowering Temperature toward 0 makes the model choose the highest-probability, most deterministic tokens, producing repeatable factual responses.",
        distractorExplanations: [
          "Incorrect: Context Window controls how much text fits in memory, not output randomness.",
          "Correct answer.",
          "Incorrect: Batch Size is a training/throughput setting, not a decoding randomness dial.",
          "Incorrect: Token Limit only caps maximum output length.",
        ],
      },
      {
        id: "w4-q2",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Fine-Tuning vs. Prompting vs. RAG",
        safaricomProduct: "Lipa na M-PESA & Data bundles",
        question:
          "Safaricom updates Data bundle pricing every few weeks and wants an internal support bot to always state the exact current price. Which customisation approach is MOST appropriate and cost-effective?",
        options: [
          "Continued Pre-Training every week",
          "Retrieval-Augmented Generation (RAG) connected to updated pricing docs",
          "Setting Temperature to 1.0",
          "Training a new Foundation Model from scratch",
        ],
        correctIndex: 1,
        correctExplanation:
          "RAG retrieves current documents at query time, making it far cheaper and fresher than retraining or fine-tuning whenever prices change.",
        distractorExplanations: [
          "Incorrect: Continued Pre-Training is the slowest, costliest option and is meant for massive unlabeled domain corpora, not weekly price updates.",
          "Correct answer.",
          "Incorrect: Setting Temperature to 1.0 increases hallucinations rather than updating facts.",
          "Incorrect: Training a foundation model from scratch costs millions and is unnecessary.",
        ],
      },
      {
        id: "w4-q3",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Fine-Tuning Use Case",
        safaricomProduct: "Safaricom Business",
        question:
          "A team already connects current documents via RAG, but wants a compact, low-cost model in Amazon Bedrock to consistently write Safaricom Business proposal summaries in a strict internal 4-section template learned from 1,500 past examples. Which approach fits best?",
        options: [
          "Instruction Fine-Tuning on the 1,500 curated examples",
          "Amazon Rekognition custom labels",
          "Unsupervised K-Means clustering",
          "Amazon Polly SSML tags",
        ],
        correctIndex: 0,
        correctExplanation:
          "Fine-tuning excels at teaching a smaller model a consistent output template, tone, and structure from hundreds/thousands of labeled examples.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Rekognition is for images/video, not text templates.",
          "Incorrect: Clustering groups unlabeled tabular records.",
          "Incorrect: Polly synthesises spoken audio.",
        ],
      },
      {
        id: "w4-q4",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "ROUGE Metric",
        safaricomProduct: "*100 customer care",
        question:
          "Engineers are using Amazon Bedrock Model Evaluation to compare three models on how accurately they summarise *100 call transcripts against reference summaries written by team leads. Which automated metric is specifically designed to evaluate text summarisation?",
        options: ["ROUGE", "BLEU", "RMSE", "SHAP"],
        correctIndex: 0,
        correctExplanation:
          "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) compares overlap between generated summaries and human reference summaries.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: BLEU is primarily designed for evaluating machine translation quality.",
          "Incorrect: RMSE (Root Mean Square Error) measures error in numerical regression models.",
          "Incorrect: SHAP measures feature importance for ML exability.",
        ],
      },
      {
        id: "w4-q5",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "BLEU Metric",
        safaricomProduct: "Roaming & Swahili support",
        question:
          "Which automated evaluation metric compares n-gram precision between a model’s translated Swahili-to- support reply and a professional human reference translation?",
        options: ["BLEU", "Confusion Matrix", "F1 Score", "Silhouette Score"],
        correctIndex: 0,
        correctExplanation:
          "BLEU (Bilingual Evaluation Understudy) is the classic automated metric for evaluating machine translation quality.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Confusion Matrix evaluates classification accuracy (True/False Positives).",
          "Incorrect: F1 Score evaluates classification balance (precision and recall).",
          "Incorrect: Silhouette Score evaluates unsupervised clustering quality.",
        ],
      },
      {
        id: "w4-q6",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "BERTScore vs. Keyword Overlap",
        safaricomProduct: "Zuri chatbot",
        question:
          'Two replies mean the exact same thing ("Restart your Home Fibre router" vs "Power-cycle your Wi-Fi modem"), yet share few identical words. Which evaluation metric uses embeddings to score their semantic similarity?',
        options: ["BERTScore", "Exact String Match", "Top-K", "ROUGE-1"],
        correctIndex: 0,
        correctExplanation:
          "BERTScore computes cosine similarity between contextual embeddings, rewarding synonyms and semantic equivalence rather than exact word matches.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Exact String Match fails completely when wording differs.",
          "Incorrect: Top-K is a decoding parameter, not an evaluation metric.",
          "Incorrect: ROUGE-1 counts exact unigram word overlap and misses synonyms.",
        ],
      },
      {
        id: "w4-q7",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Bedrock vs. SageMaker JumpStart",
        safaricomProduct: "Safaricom Business IT",
        question:
          "A software engineering team insists on hosting an open-weight Llama model inside their own isolated EC2 GPU instances where they can inspect custom CUDA memory settings and manage scaling directly. Which AWS option should they use?",
        options: [
          "Amazon SageMaker AI (JumpStart)",
          "Amazon Polly",
          "Amazon Translate",
          "Amazon Textract",
        ],
        correctIndex: 0,
        correctExplanation:
          "Amazon SageMaker JumpStart lets teams deploy open-weight foundation models onto dedicated, self-managed GPU instances with full infrastructure control.",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: Polly is a text-to-speech API.",
          "Incorrect: Translate is a managed translation API.",
          "Incorrect: Textract is a managed document OCR service.",
        ],
      },
      {
        id: "w4-q8",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Hallucinations",
        safaricomProduct: "MySafaricom App",
        question:
          "During testing, a generative AI model confidently invents a non-existent USSD code (*999*88#) for checking M-PESA Global rates. What is this phenomenon called?",
        options: ["Overfitting", "Hallucination", "Data Drift", "Tokenisation"],
        correctIndex: 1,
        correctExplanation:
          "Hallucination occurs when a generative model produces plausible-sounding but factually false or fabricated information.",
        distractorExplanations: [
          "Incorrect: Overfitting occurs when a supervised ML model memorises training data and performs poorly on new data.",
          "Correct answer.",
          "Incorrect: Data Drift occurs when live input distributions shift over time compared to training data.",
          "Incorrect: Tokenisation is breaking text into sub-word tokens.",
        ],
      },
      {
        id: "w4-q9",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Top-P (Nucleus Sampling)",
        safaricomProduct: "Marketing communications",
        question:
          "Besides Temperature, a Safaricom prompt engineer adjusts Top-P to 0.85 in an Amazon Bedrock API call. What does Top-P control?",
        options: [
          "The cumulative probability pool of candidate next tokens the model may sample from",
          "The maximum number of pages in an S3 PDF bucket",
          "The encryption key rotation period in AWS KMS",
          "The number of human reviewers assigned to a dataset",
        ],
        correctIndex: 0,
        correctExplanation:
          "Top-P (nucleus sampling) limits token selection to the smallest set of highest-probability tokens whose cumulative probability reaches P (e.g., 85%).",
        distractorExplanations: [
          "Correct answer.",
          "Incorrect: S3 bucket capacity is unrelated to Top-P.",
          "Incorrect: KMS rotation is a security setting, not an FM decoding parameter.",
          "Incorrect: Human reviewers are configured in evaluation workflows, not Top-P.",
        ],
      },
      {
        id: "w4-q10",
        week: 4,
        domainId: "domain-2",
        domainLabel: "Domain 2: Fundamentals of Generative AI",
        awsServiceOrConcept: "Model Selection Criteria (Cost & Latency)",
        safaricomProduct: "Buy Goods merchant alerts",
        question:
          'A team needs to classify short 15-word merchant feedback messages into three categories ("Settlement", "Till Signage", "Network") thousands of times per hour with sub-second response and minimal cost. How should they select a Foundation Model in Amazon Bedrock?',
        options: [
          "Pick the largest flagship multimodal model available regardless of latency",
          "Choose a compact, fast, lower-cost text model (and benchmark it against the larger model)",
          "Use Continued Pre-Training on 10 million PDFs first",
          "Use Amazon Rekognition on the text strings",
        ],
        correctIndex: 1,
        correctExplanation:
          "Simple short-text classification does not require huge reasoning models; compact models deliver much lower latency and dramatically lower per-token cost.",
        distractorExplanations: [
          "Incorrect: Giant models increase both latency and cost unnecessarily for simple classification.",
          "Correct answer.",
          "Incorrect: Continued Pre-Training is expensive and overkill for simple 3-way routing.",
          "Incorrect: Rekognition analyses images and video, not text classification.",
        ],
      },
    ],
  },
];
