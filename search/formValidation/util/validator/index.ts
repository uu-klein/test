/*
 * @Author: tyson
 * @LastEditTime: 2021-08-07 12:15:21
 * @LastEditors: Klien
 * @Description:
 * @FilePath: \js-design\util\validator\index.ts
 *
 * @Date: 2021-05-16 17:35:56
 */
import { AbstractValidator } from "../../abstract";

import { strategies } from "../strategies";

export class validator extends AbstractValidator {
  constructor() {
    super();
    this.cache = [];
  }

  public add(value: string | number, method: string): void {
    let _strategies: any = new strategies();
    this.cache.push(() => _strategies[method](value));
  }

  public check(): Boolean {
    for (let i = 0; i < this.cache.length; i++) {
      let valFn: Function = this.cache[i];
      let data: Function = valFn();
      if (!data) return false;
    }
    return true;
  }
}
