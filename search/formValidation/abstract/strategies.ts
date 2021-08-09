/*
 * @Author: tyson
 * @LastEditTime: 2021-08-07 11:49:29
 * @LastEditors: Klien
 * @Description:
 * @FilePath: \js-design\abstract\strategies.ts
 *
 * @Date: 2021-05-16 15:19:05
 */
import { props } from "../types";

export abstract class AbstractStrategies {
  public abstract isNumber<T extends props<T>>(value: number): Boolean;
  public abstract searchVerification<T extends props<T>>(value: number | string): Boolean
};