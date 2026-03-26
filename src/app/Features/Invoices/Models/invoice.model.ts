// It Will Help With API integration

import { Product, Supplier } from './product.model';

// ===== REQUEST DTO (What we send to backend) =====
export interface CreateInvoiceRequest {
  invoiceDate: string;  // ISO date format
  supplierId: Supplier['id'];  // References Supplier.id
  notes: string;
  items: CreateInvoiceItemRequest[];
}

export interface CreateInvoiceItemRequest {
  itemCode: Product['code'];  // References Product.code
  quantity: number;
}

// ===== RESPONSE/DOMAIN Models (What backend returns or full data) =====
export interface InvoiceHeader {
  invoiceDate: Date;
  supplierId: Supplier['id'];
  supplierName: Supplier['name'];
  notes: string;
}

export interface InvoiceItem {
  itemCode: Product['code'];
  itemName: Product['name'];      // Auto-filled from selected product
  quantity: number;
  unitPrice: Product['unitPrice'];              // Auto-filled from product
  lineTotal: number;              // Calculated: quantity × unitPrice
}

export interface Invoice {
  id?: number;           // Exists after backend saves it
  header: InvoiceHeader;
  items: InvoiceItem[];
  grandTotal: number;    // Sum of all line totals
}