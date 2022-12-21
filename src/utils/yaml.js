
// import YAML from 'yaml'
import jsyaml from 'js-yaml'
import saveAs from './save.js'
console.log(jsyaml, 'jsyaml')
export const json2yaml = (jsonStr) => {
  let json = jsonStr;
  if (json) {
      try {
          json = jsyaml.dump(json)
          console.log(json)
          // 转成blob这种格式
          var blob = new Blob([json],{type: "text/plain;charset=utf-8"});
          // 第三步：调用保存saveAs 和文件名字
          saveAs(blob, "root-org.yaml");
          // saveAs(file);
      } catch (e) {
          alert(e)
      }
  }
}
