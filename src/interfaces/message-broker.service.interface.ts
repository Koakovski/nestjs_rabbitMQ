import { Order } from 'src/interfaces/order.interface';

export interface IMessageBrokerService {
  emmit: <E extends MessageBrokerEmitIdentifier>(
    idenfitier: E,
    params: MessageBrokerParams[E],
  ) => void;
}

export const MessageBrokerEmitIdentifier = {
  ORDER_PLACE: 'ORDER_PLACE',
} as const;

export type MessageBrokerEmitIdentifier =
  (typeof MessageBrokerEmitIdentifier)[keyof typeof MessageBrokerEmitIdentifier];

export interface MessageBrokerParams {
  [MessageBrokerEmitIdentifier.ORDER_PLACE]: MessageBrokerOrderPlacedParams;
}

export interface MessageBrokerOrderPlacedParams {
  order: Order;
}
