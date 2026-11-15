export type ExamDomainId =
  | 'domain-1'
  | 'domain-2'
  | 'domain-3'
  | 'domain-4'
  | 'domain-5';

export interface ExamDomainMeta {
  id: ExamDomainId;
  number: number;
  title: string;
  weightPercent: number;
  description: string;
  weeks: number[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  plainDefinition: string;
  technicalDefinition: string;
  safaricomContext: string;
  introducedInWeek: number;
}

export interface WorkedExample {
  title: string;
  safaricomProduct: string;
  customerScenario: string;
  currentChallenge: string;
  aiApplication: string;
  awsService: string;
  whatServiceDoes: string;
  howItWorks: string;
  businessBenefit: string;
  examConnection: string;
}

export interface PipelineStage {
  stepNumber: number;
  stageLabel: string;
  actorOrComponent: string;
  dataPayload: string;
  Explanation: string;
}

export interface PipelineDiagram {
  title: string;
  subtitle: string;
  stages: PipelineStage[];
}

export interface ConceptSubsection {
  heading: string;
  paragraphs: string[];
  exampleBox: {
    title: string;
    lines: string[];
  };
}

export interface ConceptBlock {
  heading: string;
  Intro: string;
  paragraphs: string[];
  subsections?: ConceptSubsection[];
  technicalDefinition: string;
  keyTermsUsed: {
    term: string;
    immediateDefinition: string;
  }[];
  comparisonTable?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
}

export interface WalkthroughStep {
  stepTitle: string;
  situation: string;
  inputSample: string;
  guidedActionLabel: string;
  resultingOutput: string;
  whyThisWorks: string;
}

export interface GuidedWalkthrough {
  title: string;
  objective: string;
  safaricomSetting: string;
  steps: WalkthroughStep[];
}

export interface ServiceComparisonItem {
  serviceName: string;
  roleInChapter: string;
  whenToUse: string;
  whenNotToUse: string;
  inputType: string;
  outputType: string;
  examClue: string;
}

export interface ExamQuestion {
  id: string;
  week: number;
  domainId: ExamDomainId;
  domainLabel: string;
  awsServiceOrConcept: string;
  safaricomProduct: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  correctExplanation: string;
  distractorExplanations: [string, string, string, string];
}

export interface Chapter {
  week: number;
  title: string;
  subtitle: string;
  domainId: ExamDomainId;
  domainLabel: string;
  domainWeight: string;
  estimatedReadMinutes: number;
  featuredProducts: string[];
  featuredServices: string[];
  learningObjectives: string[];
  openingScenario: {
    productName: string;
    narrative: string[];
    coreProblemSummary: string;
  };
  conceptSections: ConceptBlock[];
  workedExample: WorkedExample;
  secondaryWorkedExample?: WorkedExample;
  pipelineDiagram: PipelineDiagram;
  serviceDeepDives: ServiceComparisonItem[];
  guidedWalkthrough: GuidedWalkthrough;
  responsibleAiAndSecurity: {
    title: string;
    paragraphs: string[];
    practicalChecklist: string[];
  };
  chapterSummary: string[];
  questions: ExamQuestion[];
}

export interface AwsServiceGuideEntry {
  id: string;
  name: string;
  category:
    | 'Generative AI & Foundation Models'
    | 'Machine Learning Platform'
    | 'Pre-Trained Speech, Language & Vision'
    | 'Conversational & Workplace Assistants'
    | 'Storage, Security, Governance & Monitoring';
  oneLineRule: string;
  whatItIs: string;
  problemItSolves: string;
  inputs: string;
  outputs: string;
  whenToUse: string[];
  whenNotToUse: string[];
  safaricomExample: string;
  examRecognitionClues: string[];
  commonlyConfusedWith: {
    otherService: string;
    difference: string;
  }[];
  taughtInWeeks: number[];
}

export interface ProductMappingEntry {
  id: string;
  category:
    | 'M-PESA & Financial Services'
    | 'Mobile & Connectivity'
    | 'Customer Care & Digital Channels'
    | 'Enterprise & Business Services';
  safaricomProduct: string;
  illustrativeUseCase: string;
  primaryAwsService: string;
  supportingAwsServices: string[];
  examDomain: string;
  whyThisServiceFits: string;
  relevantWeek: number;
}
