export * from "./buildingProfilerApi";
import { BuildingProfilerApi } from "./buildingProfilerApi";
export * from "./residentialElectrificationModelApi";
import { ResidentialElectrificationModelApi } from "./residentialElectrificationModelApi";
import * as http from "http";

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number,
  ) {
    super("HTTP request failed");
    this.name = "HttpError";
  }
}

export { RequestFile } from "../model/models";

export const APIS = [BuildingProfilerApi, ResidentialElectrificationModelApi];
