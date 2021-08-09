/*
 * @Author: tyson
 * @LastEditTime: 2021-08-07 12:05:38
 * @LastEditors: Klien
 * @Description:
 * @FilePath: \js-design\util\validator\__tests__\validator.test.ts
 *
 * @Date: 2021-05-16 18:56:18
 */

import { validator } from "../index";

// const getKeyValue =<T extends object, U extends keyof T>(key: U) =>(value: T) =>value[key];

type roleProps<Type> = {
  role: Type;
};

type gradeProps<Type> = {
  grade?: Type | undefined;
};

type dataProps = roleProps<string | number> & gradeProps<number | string>;

let _validator = new validator();

test("validator", () => {
  const data: dataProps = { role: 3 };
  _validator.add(data.role, "isNumber");
  const result = _validator.check();
  expect(result).toBe(true);
});

test("validator", () => {
  const data0: dataProps = { role: "test" };
  const data1: dataProps = { role: '测试' };
  const data2: dataProps = { role: 'A' };
  const data3: dataProps = { role: 'a' };
  const data4: dataProps = { role: 1 };
  const data5: dataProps = { role: '_' };
  const data6: dataProps = { role: -1 };
  const data7: dataProps = { role: '-' };
  const data8: dataProps = { role: '<script>' };
  //  true
  // _validator.add(data0.role, "searchVerification");
  // _validator.add(data1.role, "searchVerification");
  // _validator.add(data2.role, "searchVerification");
  // _validator.add(data3.role, "searchVerification");
  // _validator.add(data4.role, "searchVerification");
  // _validator.add(data5.role, "searchVerification");
  // false
  _validator.add(data6.role, "searchVerification");
  _validator.add(data7.role, "searchVerification");
  _validator.add(data8.role, "searchVerification");
  const result = _validator.check();
  expect(result).toBe(false);
});

