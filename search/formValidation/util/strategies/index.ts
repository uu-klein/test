/*
 * @Author: tyson
 * @LastEditTime: 2021-08-07 11:46:01
 * @LastEditors: Klien
 * @Description:
 * @FilePath: \js-design\util\strategies\index.ts
 *
 * @Date: 2021-05-16 15:03:20
 */
import { AbstractStrategies } from "../../abstract";

let isNumber = /^[0-9]*$/;

let isSearchVerification = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;

export class strategies extends AbstractStrategies {
  public isNumber(value: number): Boolean {
    return isNumber.test(String(value));
  }

  public searchVerification(value: number | string): Boolean {
    return isSearchVerification.test(String(value));
  }
}
