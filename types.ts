export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  brandLogo: string;
  isNew?: boolean;
  editorsChoice?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}