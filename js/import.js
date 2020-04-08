app=function(){
    
};
app.import=function(src){
    document.write(src);
};
RUI_CSS= "<link href=\"bin/pro.rui.code/get/pro.rui.ant_min-M.css\" rel=\"stylesheet\">";
RUI_JQUERY= "<script src=\"bin/pro.rui.code/get/com.jquery_min.js\"></script>";
if(location.href.indexOf(".loc") != -1){
    RUI_CORE= "<script  data-imports=\"icon,table\"  src=\"bin/pro.rui.code/get/pro.rui.ant_min.js\"></script>";
 
}else
RUI_CORE= "<script data-root=\"/rui-design/bin/pro.rui.lib/\" data-imports=\"icon,table\"  src=\"bin/pro.rui.code/get/pro.rui.ant_min.js\"></script>";
 
 