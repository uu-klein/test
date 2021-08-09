/*
 * @Author: tyson
 * @LastEditTime: 2021-08-07 12:17:03
 * @LastEditors: Klien
 * @Description:
 * @FilePath: \js-design\util\strategies\__tests__\strategies.test.ts
 *
 * @Date: 2021-05-16 17:05:44
 */

import { strategies } from "../index";

let b = new strategies();

test("strategies", () => {
  expect(b.isNumber(2)).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification(2)).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('2')).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('A')).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('b')).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('_')).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('测试')).toBe(true);
});

test("strategies", () => {
  expect(b.searchVerification('-')).toBe(false);
});

test("strategies", () => {
  expect(b.searchVerification('<script>')).toBe(false);
});