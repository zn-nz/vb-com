import { ComponentInfo } from "../domain/component-info";
import path from "path";
import fs from "fs";
import { demoTemplate, mdTemplate } from "../utils/template-utils";
import consola from "consola";

/**
 * 创建组件文档、demo及更新菜单
 */
export const initDoc = (componentInfo: ComponentInfo) => {
  const { lineName, lineNameWithPrefix, upCamelName, zhName, packagesPath } =
    componentInfo;
  // 组件库文档根路径
  const docRootPath = path.resolve(packagesPath, "../docs");
  // 1. 创建组件的 MD 文档
  fs.writeFileSync(
    path.resolve(docRootPath, `components/${lineName}.md`),
    mdTemplate(componentInfo)
  );

  // 2. 创建组件文档中的 Demo
  fs.mkdirSync(path.resolve(docRootPath, `demos/${lineName}`));
  fs.writeFileSync(
    path.resolve(docRootPath, `demos/${lineName}/${lineName}-1.vue`),
    demoTemplate(lineNameWithPrefix)
  );

  // 3. 更新组件库文档菜单
  const menuPath = path.resolve(docRootPath, "components.ts");
  const content = fs.readFileSync(menuPath).toString();
  const index = content.indexOf("]");
  const result =
    content.substring(0, index) +
    `{ text: "${upCamelName} ${zhName}", link: "/components/${lineName}" },\n` +
    content.substring(index);
  fs.writeFileSync(menuPath, result);

  consola.success("component document init success");
};
