// src/app/model/busresponse.model.ts
import { Bus } from './bus.model'

export interface BusResponse {
  matchedBuses: Bus[];
  seats: { [key: string]: any }; // Adjust based on actual seat data
}
