import { Order } from 'src/interfaces/order.interface';
import { Product } from './product.interface';

export interface IMessageBrokerService {
  emmit: <E extends MessageBrokerEmitIdentifier>(
    idenfitier: E,
    params: MessageBrokerParams[E],
  ) => void;
}

export const MessageBrokerEmitIdentifier = {
  ORDER_PLACE: 'ORDER_PLACE',
  PRODUCT_CREATED: 'PRODUCT_CREATED',
} as const;

export type MessageBrokerEmitIdentifier =
  (typeof MessageBrokerEmitIdentifier)[keyof typeof MessageBrokerEmitIdentifier];

export interface MessageBrokerParams {
  [MessageBrokerEmitIdentifier.ORDER_PLACE]: MessageBrokerOrderPlacedParams;
  [MessageBrokerEmitIdentifier.PRODUCT_CREATED]: MessageBrokerProductCreatedParams;
}

export interface MessageBrokerOrderPlacedParams {
  order: Order;
}

export interface MessageBrokerProductCreatedParams {
  product: Product;
}
