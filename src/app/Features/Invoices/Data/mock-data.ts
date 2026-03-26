import { Product, Supplier } from '../Models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  { code: 'P001', name: 'Premium A4 Printer Paper (Box)', unitPrice: 280 },
  { code: 'P002', name: 'Ergonomic Office Chair', unitPrice: 2500 },
  { code: 'P003', name: 'Black Gel Ink Pens (Pack of 12)', unitPrice: 120 },
  { code: 'P004', name: 'Desktop Organizer Set', unitPrice: 350 },
  { code: 'P005', name: 'Wireless Mechanical Keyboard', unitPrice: 950 },
  { code: 'P006', name: 'Hardcover Notebook (A5)', unitPrice: 95 },
  { code: 'P007', name: 'Heavy Duty Stapler', unitPrice: 210 },
  { code: 'P008', name: 'Adjustable LED Desk Lamp', unitPrice: 450 },
  { code: 'P009', name: 'USB-C Docking Station', unitPrice: 1200 },
  { code: 'P010', name: 'Large Whiteboard Marker Set', unitPrice: 180 }
];

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 1, name: 'Modern Office Solutions' },
  { id: 2, name: 'Global Stationery Wholesale' },
  { id: 3, name: 'Corporate Furniture Group' },
  { id: 4, name: 'Elite Paper Industries' },
  { id: 5, name: 'Tech & Desk Essentials' },
  { id: 6, name: 'Cairo Business Supplies' },
  { id: 7, name: 'Smart Workspace Partners' },
  { id: 8, name: 'Universal Printing Co.' }
];