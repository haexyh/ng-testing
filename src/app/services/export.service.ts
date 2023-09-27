import { Injectable } from '@angular/core';
import {AsyncService} from "./async.service";

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private readonly asyncService: AsyncService) {
  }
  canExport()
  {
    return this.asyncService.isConnected();
  }
}
