export interface MenuItem {
  id: string;
  name: string;
  price: string;
  tags: string[];
  sku: string;
  description: string;
  dateCreated: string | Date;
  dateLastUpdated: string | Date;
}

export interface MenuItemRendered extends MenuItem {
  imageUrl?: string;
}
