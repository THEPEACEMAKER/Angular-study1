import { Product, Supplier } from '../Models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  { code: 'P001', name: 'Angular Material Dashboard', unitPrice: 120 },
  { code: 'P002', name: 'Frontend Template', unitPrice: 85 },
  { code: 'P003', name: 'UI Icons Pack', unitPrice: 25 },
  { code: 'P004', name: 'TypeScript Advanced Plugin', unitPrice: 45 },
  { code: 'P005', name: 'Responsive Layout Kit', unitPrice: 60 },
  { code: 'P006', name: 'API Integration Service', unitPrice: 200 },
  { code: 'P007', name: 'Sass Mixin Library', unitPrice: 15 },
  { code: 'P008', name: 'Firebase Auth Module', unitPrice: 55 },
  { code: 'P009', name: 'Performance Audit Tool', unitPrice: 150 },
  { code: 'P010', name: 'Custom SVG Icon Set', unitPrice: 35 }
];

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 1, name: 'Tech Solutions Inc.' },
  { id: 2, name: 'Creative Designs Co.' },
  { id: 3, name: 'Global Systems Ltd.' },
  { id: 4, name: 'NextGen Software' },
  { id: 5, name: 'Octopus RTG' },
  { id: 6, name: 'Freelance Hub' },
  { id: 7, name: 'Elite Developers Egypt' },
  { id: 8, name: 'Open Source Partners' }
];