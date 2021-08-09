/*
 * @Author: tyson
 * @LastEditTime: 2021-05-17 14:28:45
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \js-design\abstract\validator.ts
 *
 * @Date: 2021-05-16 17:36:06
 */
import { props } from "../types";

export abstract class AbstractValidator {
  public cache: Array<Function> = [];

  public abstract add<T extends props<T>>(value: string, method: string): void;

  public abstract check(): Boolean;
}

