// ============================================================
// PROJECTS DATA — Aman Adhikari Portfolio
// ============================================================

export const projects = [
  {
    id: 'govlens',
    num: '01',
    category: 'Full-Stack · AI Analytics · Spring Boot',
    era: "Master's · Wright State · 2024–25",
    eraType: 'ms',
    title: 'GovLens — Government Analytics Platform',
    description:
      'A production-grade AI-powered government analytics platform with Spring Boot 3.2, Spring Security JWT RBAC, Flyway-managed PostgreSQL, GPT-4 insight engine with caching, React 18 with Recharts, JUnit 5, GitHub Actions CI/CD, and Docker Compose.',
    bullets: [
      'Reduced query latency from 2800ms → 90ms via composite indexes and query rewriting',
      'Built GPT-4 insight engine with Redis caching, cutting API calls by 40%',
      'Implemented JWT RBAC with role-scoped endpoints and refresh token rotation',
      'GitHub Actions CI/CD pipeline with automated test coverage gates',
    ],
    stack: ['Spring Boot 3.2', 'React 18', 'PostgreSQL', 'GPT-4', 'Docker', 'JWT', 'Flyway', 'GitHub Actions', 'Recharts', 'JUnit 5'],
    links: [
      { label: 'GitHub', href: 'https://github.com/amanadhikari45/GovLens', icon: 'fa-brands fa-github', style: 'blue' },
    ],
    architecture: [
      'React 18 Dashboard', 'GPT-4 Insights Engine', 'Spring Boot 3.2 API',
      'JWT / RBAC Auth', 'PostgreSQL 500K+ rows', 'GitHub Actions CI/CD',
      'Docker Compose Stack', 'SLA Auto-Calc Engine',
    ],
    featured: true,
  },
  {
    id: 'ridepool',
    num: '02',
    category: 'Social Impact · Java + Spring Boot',
    era: 'In Progress · 2025',
    eraType: 'wip',
    title: 'RidePool — Smart Ride-Sharing for Students',
    description:
      'AI-powered ride-pooling and cost-optimization platform for international students. Uses ETL pipelines, NLP destination normalization, embedding similarity, and RAG-based matching to group students traveling to similar destinations.',
    bullets: [
      'Real problem: students going to Walmart separately pay $12 each; RidePool groups them to ~$7 each (40%+ savings)',
      'Built ETL pipeline to ingest, clean, transform, and store trip-request data in PostgreSQL analytics tables',
      'NLP-based destination normalization and embedding similarity for fuzzy location matching',
      'AI recommendation engine using RAG, clustering, time-window matching, and cost-preference scoring',
      'Real-time WebSocket notifications for ride matches, group updates, and trip confirmation',
    ],
    stack: ['Java 17', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'ETL Pipeline', 'RAG / Embeddings', 'NLP Clustering', 'Docker'],
    links: [
      { label: 'GitHub Coming Soon', href: null, icon: 'fa-solid fa-code', style: 'violet', disabled: true },
    ],
    wip: true,
  },
  {
    id: 'brainmri',
    num: '03',
    category: 'Medical Imaging · Deep Learning · Segmentation',
    era: "Master's · Wright State · 2024",
    eraType: 'ms',
    title: 'Brain MRI Tumor Segmentation',
    description:
      'U-Net based brain MRI tumor segmentation system achieving 94%+ accuracy on the BraTS dataset, with a Streamlit deployment for interactive inference and explainability.',
    bullets: [
      '94%+ segmentation accuracy on BraTS benchmark dataset',
      'U-Net encoder-decoder with skip connections for precise boundary delineation',
      'Data augmentation pipeline: rotation, flipping, elastic transforms for robustness',
      'Interactive Streamlit app for real-time inference and overlay visualization',
    ],
    stack: ['U-Net', 'PyTorch', 'BraTS Dataset', 'Streamlit', 'OpenCV', 'NumPy', 'DICOM Processing'],
    links: [
      { label: 'GitHub', href: 'https://github.com/amanadhikari45/Brain-MRI-Segmentation', icon: 'fa-brands fa-github', style: 'blue' },
    ],
  },
  {
    id: 'hemavision',
    num: '04',
    category: 'Computer Vision · Medical Imaging',
    era: "Master's · Wright State · 2025",
    eraType: 'ms',
    title: 'HemaVision — Blood Cell Classification & Counting',
    description:
      'AI-powered hematology platform automating blood smear analysis, blood cell localization, and cell-type classification using deep learning. Processes microscopy images through a full computer vision pipeline.',
    bullets: [
      'Automated detection and counting of RBCs, WBCs, and platelets',
      'CNN/object-detection based workflows for medical image analysis',
      'AI-assisted annotation with bounding regions and confidence scoring',
      'Scalable architecture designed for medical diagnostics integration',
    ],
    stack: ['CNN', 'PyTorch', 'OpenCV', 'Object Detection', 'Medical Imaging', 'Python'],
    links: [
      { label: 'GitHub', href: 'https://github.com/amanadhikari45/Blood-Cell-Classification-CNN', icon: 'fa-brands fa-github', style: 'blue' },
    ],
  },
  {
    id: 'chestxray',
    num: '05',
    category: 'XAI · Transfer Learning · Multi-label',
    era: "Bachelor's · IOE Purwanchal · 2023",
    eraType: 'bs',
    title: 'Chest X-Ray Disease Classification',
    description:
      'DenseNet121 fine-tuned on NIH Chest X-ray14 for multi-label detection of 14 thoracic pathologies. Features Grad-CAM explainability and interactive Streamlit deployment.',
    bullets: [
      '14-class detection: Pneumonia, Effusion, Cardiomegaly, Atelectasis & 10 more pathologies',
      'Frequency-weighted BCE loss — handles severe class imbalance for rare conditions',
      'Grad-CAM heatmaps give per-class visual evidence aligned to radiologist review workflow',
    ],
    stack: ['DenseNet121', 'Transfer Learning', 'Grad-CAM', 'Streamlit', 'NIH Dataset', 'OpenCV'],
    links: [
      { label: 'GitHub', href: 'https://github.com/amanadhikari45/Chest-Xray-Classification', icon: 'fa-brands fa-github', style: 'blue' },
    ],
  },
  {
    id: 'signlang',
    num: '06',
    category: 'Mobile AI · TensorFlow Lite · Edge Inference',
    era: "Bachelor's · IOE Purwanchal · 2023",
    eraType: 'bs',
    title: 'Sign Language Recognition — Mobile App',
    description:
      'Real-time sign language recognition mobile application using Flutter and TensorFlow Lite, enabling on-device inference without internet connectivity.',
    bullets: [
      'On-device CNN inference using TensorFlow Lite for real-time recognition',
      'Flutter cross-platform app for Android and iOS',
      'Custom dataset collection and preprocessing pipeline',
      'Optimized model quantization for mobile deployment',
    ],
    stack: ['Flutter', 'TensorFlow Lite', 'CNN', 'Dart', 'Android', 'iOS', 'Edge Inference'],
    links: [],
  },
];
