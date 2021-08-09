/*
import { type } from './index';
 * @Author: tyson
 * @LastEditTime: 2021-05-16 15:13:31
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \js-design\types\index.ts
 * 
 * @Date: 2021-05-16 15:04:31
 */

export type props<T> = {
  [P in keyof T]?: T[P];
};



