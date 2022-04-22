import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable(/*{
  providedIn: 'root' // Burayı kullanmak yerine app.module.ts'de gösterilen yerdeki gibide kullanılabilir.
}*/)
export class AlertifyService {

  constructor() { }

  succes(message: string) {
    alertify.success(message)
  }

  error(message: string) {
    alertify.error(message)
  }

  warning(message: string) {
    alertify.warning(message)
  }
}
