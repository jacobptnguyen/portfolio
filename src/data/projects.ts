export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  demoUrl?: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Rate My Stuff',
    description: 'A full-stack web application for creating and managing reviews. Built with React, TypeScript, Node.js, Express, and MongoDB, deployed on Render.',
    thumbnail: '/images/rate-my-stuff.png',
    demoUrl: 'https://rate-my-stuff.onrender.com/',
    codeUrl: 'https://github.com/jacobptnguyen/rate-my-stuff'
  },
  {
    id: '2',
    title: 'Medical Appointments No-Show Predictor',
    description: 'A machine learning web app that predicts patient appointment attendance.',
    thumbnail: '/images/medical-appointments-no-show.png',
    demoUrl: 'https://medical-appointments-no-show.vercel.app/',
    codeUrl: 'https://github.com/jacobptnguyen/medical-appointments-no-show'
  },
  {
    id: '3',
    title: 'ML Model Manager',
    description: 'A full-stack machine learning operations platform for training and managing ML models. Upload CSV datasets, train classification models with automated hyperparameter tuning, and make predictions through an intuitive web interface.',
    thumbnail: '/images/ml-model-manager.png',
    demoUrl: 'https://ml-model-manager.vercel.app/',
    codeUrl: 'https://github.com/jacobptnguyen/ml-model-manager'
  }
];

