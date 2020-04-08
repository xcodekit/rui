var     mHeader=false; 
        rui(function(){  
            mHeader=rui("#mHeader").widget("rui-admin-header");
            mHeader.content(".frame");
            mHeader.title("RUI-Design");
            mHeader.appendTopLogo( "<a>荣瑞科技</a>");
            mHeader.appendTopNav("<label><i class='fa fa-github'></i>&nbsp;GITHUB</label>","","https://github.com/xcodekit/rui");    
            mHeader.appendTopNav("关于我们","","about.html");    
            mHeader.bindJson([  {'title':'首页','name':'index','href':'index.html' },
                                {'title':'图标','name':'iconFont','href':'iconfont.html' }, 
                                {'title':'Admin模板','name':'admin','href':'admin.html' }
                            ]);  
                            $(".frame").show();           
        });
 

 

 