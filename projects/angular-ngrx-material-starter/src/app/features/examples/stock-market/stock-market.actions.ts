import { Stock } from './stock-market.model';
import { createHTTPActions } from '../../../shared/extension/createHTTPActions';

export const [
  actionStockMarketRetrieve,
  actionStockMarketRetrieveSuccess,
  actionStockMarketRetrieveError
] = createHTTPActions<{ symbol: string }, { stock: Stock }>('[Stock] Retrieve');
