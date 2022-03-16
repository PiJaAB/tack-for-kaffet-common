export interface IProduct {
  id                      : string;
  title                   : string;
  active                  : boolean;
  status                  : string;
  price?                  : number;
  currency                : string;
  sold                    : number
  balance                 : number;
  category                : string;
  tags                    : string[];
  description?            : string;
  shortDescription?       : string;
  imageUrl?               : string;
  location                : string;
  lastOrdered             : Date;
  createdAt?              : Date;
  updatedAt?              : Date;
  vatRate?                : number;
  type                    : 'subscription' | 'one-time';
  unitsSoldByPricePoint?  : { price: number, units: number, orders: number, firstDate: Date, lastDate: Date }[];
  stockStatus             : string;
}

