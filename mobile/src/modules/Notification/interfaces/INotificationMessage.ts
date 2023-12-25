import {NotificationType} from '../types/NotificationType.ts';

export interface INotificationMessage {
  text: string;
  type: NotificationType;
  id?: string;
}
