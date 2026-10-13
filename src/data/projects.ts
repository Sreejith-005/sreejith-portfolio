export type Project = {
  slug: string; title: string; subtitle: string; category: 'chat' | 'rag' | 'dashboard'
  description: string; tech: string[]; features: string[]; problem: string; workflow: string[]
  results: { label: string; value: string }[]; githubUrl?: string; liveUrl?: string
}
// TODO: replace with the real repo URL for each project. Until then the profile is linked.
const PLACEHOLDER_REPO_URL = 'https://github.com/Sreejith-005'

// To add a project later: append one object to this array.
export const projects: Project[] = [
  {
    slug: 'sreeai-pdf-chatbot', title: 'SreeAI PDF Chatbot', subtitle: 'RAG-powered conversational PDF assistant', category: 'rag',
    description: 'Built a conversational AI PDF chatbot capable of answering questions from uploaded PDF documents using a Retrieval-Augmented Generation architecture.',
    tech: ['Python', 'Streamlit', 'LangChain', 'HuggingFace', 'FAISS', 'Groq API'],
    features: ['PDF document interaction', 'Semantic search', 'Context retrieval', 'HuggingFace embeddings', 'FAISS vector search', 'Conversational memory', 'Real-time streaming responses', 'Groq LLM integration', 'Streamlit deployment'],
    problem: 'Answering questions from uploaded PDF documents through a conversational interface.',
    workflow: ['PDF Upload', 'Document Processing', 'Text Splitting', 'Embeddings', 'FAISS Vector Store', 'Semantic Retrieval', 'LLM', 'Answer'],
    results: [], liveUrl: 'https://sreeai-pdf-chatbot.streamlit.app', githubUrl: PLACEHOLDER_REPO_URL,
  },
  {
    slug: 'coder-buddy',
    title: 'Coder Buddy',
    subtitle: 'Multi-Agent AI Coding Assistant',
    category: 'chat',
    description: 'Built a multi-agent coding assistant that transforms natural-language requests into complete projects by coordinating Planner, Architect, and Coder agents using LangGraph and Groq.',
    tech: ['Python', 'LangGraph', 'Groq API', 'Streamlit'],
    features: ['Multi-agent workflow', 'Automated project planning', 'File-by-file code generation', 'Context-aware coding', 'Project ZIP download'],
    problem: 'Creating a complete project requires planning its structure, organizing implementation tasks, and generating connected files.',
    workflow: ['User Prompt', 'Planner Agent', 'Architect Agent', 'Coder Agent', 'Generated Project'],
    results: [],
    liveUrl: '',
    githubUrl: 'https://github.com/Sreejith-005/multi-agent-coding-assistant',
  },
  {
    slug: 'customer-churn-prediction', title: 'Customer Churn Prediction', subtitle: 'Machine Learning + Business Intelligence', category: 'dashboard',
    description: 'Built a machine learning solution to predict customer churn using classification algorithms and data preprocessing techniques.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Power BI'],
    features: ['EDA', 'Missing value handling', 'Feature encoding', 'Classification modeling', 'Model evaluation (precision, recall, F1-score, confusion matrix)', 'Power BI dashboard'],
    problem: 'Predicting which customers are likely to churn using classification algorithms.',
    workflow: ['EDA', 'Missing Value Handling', 'Feature Encoding', 'Classification Modeling', 'Model Evaluation', 'Power BI Dashboard'],
    results: [
      { label: 'Accuracy', value: '81.55%' },
    ],
  },
]
