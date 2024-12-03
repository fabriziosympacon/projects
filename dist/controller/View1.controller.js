sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],(e,t)=>{"use strict";return e.extend("prettyclip.prettyclip.controller.View1",{onPressButton2(){const e=this.byId("textfield1");const o=this.byId("textfield2");if(e){e.setValue("");t.show("Text field content cleared.")}else{t.show("Text field not found.")}if(o){o.setValue("");t.show("Text field content cleared.")}else{t.show("Text field not found.")}},onPressButton1(){const e=this.byId("radioGroup1");const o=e.getSelectedIndex();const s=e.getButtons()[o];const n=s?s.getText():"";let i=",";switch(o){case 0:i=",";break;case 1:i=".";break;case 2:i=";";break;case 3:i=" ";break;default:t.show("No valid option selected.");return}navigator.clipboard.readText().then(e=>{const o=this.byId("textfield1");if(o){const s=o.getValue();if(s){o.setValue(s+i+e);t.show("Clipboard content appended to text field.")}else{o.setValue(s+e);t.show("Clipboard content set to text field.")}}else{t.show("Text field not found.")}}).catch(e=>{t.show("Failed to read clipboard content.");console.error("Failed to read clipboard content: ",e)})},onPressButton3(){const e=this.byId("radioGroup1");const o=e.getSelectedIndex();const s=e.getButtons()[o];const n=s?s.getText():"";const i=this.byId("textfield1");const l=this.byId("textfield2");const d=this.byId("textfield3");if(i){const e=i.getValue();let s=",";switch(o){case 0:s=",";break;case 1:s=".";break;case 2:s=";";break;case 3:s=" ";break;default:t.show("No valid option selected.");return}const n=e.split(new RegExp(`[${s}\n\t]`)).map(e=>e.trim());const c=n.filter(e=>e.length>0);const a=d?parseInt(d.getValue(),10):0;const r=c.map(e=>{while(e.length<a){e="0"+e}return e});if(l){const e=r.join("\n");l.setValue(e);t.show("Text processed and inserted into textfield2.")}else{t.show("Text field 2 not found.")}}else{t.show("Text field 1 not found.")}},onPressButton4(){const e=this.byId("textfield2");if(e){const o=e.getValue();navigator.clipboard.writeText(o).then(()=>{t.show("Text copied to clipboard.")}).catch(e=>{t.show("Failed to copy text to clipboard.");console.error("Failed to copy text to clipboard: ",e)})}else{t.show("Text field not found.")}}})});
//# sourceMappingURL=View1.controller.js.map