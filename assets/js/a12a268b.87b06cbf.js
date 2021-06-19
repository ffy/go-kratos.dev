(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6310],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return i},kt:function(){return k}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},i=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=c(r),k=o,m=g["".concat(s,".").concat(k)]||g[k]||u[k]||a;return r?t.createElement(m,l(l({ref:n},i),{},{components:r})):t.createElement(m,l({ref:n},i))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7049:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return i}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),l={slug:"go-layout-operation-process",title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u901a\u8fc7 layout \u7b80\u5355\u5206\u6790\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",description:"\u901a\u8fc7 layout \u7b80\u5355\u5206\u6790\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",keywords:["Go","Kratos","layout","operation process"],author:"shenqidebaozi",author_title:"Maintainer of go-kratos",author_url:"https://github.com/shenqidebaozi",author_image_url:"https://avatars.githubusercontent.com/u/35397691?s=60&v=4",tags:["go","golang","\u5de5\u7a0b\u5316","\u8fd0\u884c\u539f\u7406","\u6e90\u7801\u5206\u6790"]},p={permalink:"/blog/go-layout-operation-process",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/blog/2021-06-03-go-layout-operation-process.md",source:"@site/blog/2021-06-03-go-layout-operation-process.md",title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u901a\u8fc7 layout \u7b80\u5355\u5206\u6790\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",description:"\u901a\u8fc7 layout \u7b80\u5355\u5206\u6790\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",date:"2021-06-03T00:00:00.000Z",formattedDate:"2021\u5e746\u67083\u65e5",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"golang",permalink:"/blog/tags/golang"},{label:"\u5de5\u7a0b\u5316",permalink:"/blog/tags/\u5de5\u7a0b\u5316"},{label:"\u8fd0\u884c\u539f\u7406",permalink:"/blog/tags/\u8fd0\u884c\u539f\u7406"},{label:"\u6e90\u7801\u5206\u6790",permalink:"/blog/tags/\u6e90\u7801\u5206\u6790"}],readingTime:2.815,truncated:!1,prevItem:{title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u57fa\u4e8e OpenTelemetry \u7684\u94fe\u8def\u8ffd\u8e2a",permalink:"/blog/go-kratos-opentelemetry-practice"},nextItem:{title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",permalink:"/blog/go-project-layout"}},s=[{value:"0X01 \u901a\u8fc7 layout \u63a2\u7d22 kratos \u8fd0\u884c\u539f\u7406\uff08kratos v2.0.0-beta4\uff09",id:"0x01-\u901a\u8fc7-layout-\u63a2\u7d22-kratos-\u8fd0\u884c\u539f\u7406\uff08kratos-v200-beta4\uff09",children:[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[]},{value:"\u8fd0\u884c\u9879\u76ee",id:"\u8fd0\u884c\u9879\u76ee",children:[]},{value:"\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684?",id:"\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",children:[]}]}],c={toc:s};function i(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"0x01-\u901a\u8fc7-layout-\u63a2\u7d22-kratos-\u8fd0\u884c\u539f\u7406\uff08kratos-v200-beta4\uff09"},"0X01 \u901a\u8fc7 layout \u63a2\u7d22 kratos \u8fd0\u884c\u539f\u7406\uff08kratos v2.0.0-beta4\uff09"),(0,a.kt)("h3",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5\u597d\u5bf9\u5e94\u7684\u4f9d\u8d56\u73af\u5883\uff0c\u4ee5\u53ca\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"go"),(0,a.kt)("li",{parentName:"ul"},"protoc"),(0,a.kt)("li",{parentName:"ul"},"protoc-gen-go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  # \u521b\u5efa\u9879\u76ee\u6a21\u677f\nkratos new helloworld\n\ncd helloworld\n# \u62c9\u53d6\u9879\u76ee\u4f9d\u8d56\ngo mod download\n# \u751f\u6210proto\u6a21\u677f\nkratos proto add api/helloworld/helloworld.proto\n# \u751f\u6210proto\u6e90\u7801\nkratos proto client api/helloworld/helloworld.proto\n# \u751f\u6210server\u6a21\u677f\nkratos proto server api/helloworld/helloworld.proto -t internal/service\n")),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u540e,\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a service \u5de5\u7a0b,\u5de5\u7a0b\u9aa8\u67b6\u5982\u4e0b,\u5177\u4f53\u7684\u5de5\u7a0b\u9aa8\u67b6\u8bf4\u660e\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/intro/layout"},"layout"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2919854308c04803bef327b4f67f31f8~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,a.kt)("h3",{id:"\u8fd0\u884c\u9879\u76ee"},"\u8fd0\u884c\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u6240\u6709proto\u6e90\u7801\u3001wire\u7b49\u7b49\ngo generate ./...\n\n# \u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\ngo build -o ./bin/ ./...\n\n# \u8fd0\u884c\u9879\u76ee\n./bin/helloworld -conf ./configs\n")),(0,a.kt)("p",null,"\u770b\u5230\u5982\u4e0b\u8f93\u51fa\u5219\u8bc1\u660e\u9879\u76ee\u542f\u52a8\u6b63\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"level=INFO module=app service_id=7114ad8a-b3bf-11eb-a1b9-f0189850d2cb service_name=  version=\nlevel=INFO module=transport/grpc msg=[gRPC] server listening on: [::]:9000\nlevel=INFO module=transport/http msg=[HTTP] server listening on: [::]:8000 \n")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://127.0.0.1:8000/helloworld/krtaos\'\n\n\u8f93\u51fa\uff1a\n{\n  "message": "Hello kratos"\n}\n')),(0,a.kt)("h3",{id:"\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684"},"\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f714f793562459ea2a136aa4399494d~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}),"\n\u901a\u8fc7\u4e0a\u9762\u7684\u56fe\u4f8b\ud83d\udc46,\u6211\u4eec\u53ef\u4ee5\u76f4\u89c2\u89c2\u5bdf\u5230\u5e94\u7528\u7684\u8c03\u7528\u94fe,\u7b80\u5316\u6765\u8bf4\u5982\u4e0b\u56fe\u6d41\u7a0b\u6240\u793a\ud83d\udc47"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87d64f1a4f0e41afbb49bed6e003999c~tplv-k3u1fbpfcp-watermark.image",alt:"\u672a\u547d\u540d\u6587\u4ef6(2).png"})),(0,a.kt)("h4",{id:"1-\u6ce8\u5165\u4f9d\u8d56\u5e76\u8c03\u7528-newapp-\u65b9\u6cd5"},"1. \u6ce8\u5165\u4f9d\u8d56\u5e76\u8c03\u7528 newApp() \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// helloword/cmd/main.go\nfunc main() {\n    flag.Parse()\n    logger := log.NewStdLogger(os.Stdout)\n\n    // \u8c03\u7528 go-kratos/kratos/v2/config,\u521b\u5efa config \u5b9e\u4f8b,\u5e76\u6307\u5b9a\u4e86\u6765\u6e90\u548c\u914d\u7f6e\u89e3\u6790\u65b9\u6cd5\n    c := config.New(\n    config.WithSource(\n        file.NewSource(flagconf),\n    ),\n    config.WithDecoder(func(kv *config.KeyValue, v map[string]interface{}) error {\n        return yaml.Unmarshal(kv.Value, v)\n    }),\n    )\n    if err := c.Load(); err != nil {\n        panic(err)\n    }\n\n    // \u5c06\u914d\u7f6e\u626b\u63cf\u5230,\u901a\u8fc7 proto \u58f0\u660e\u7684 conf struct \u4e0a\n    var bc conf.Bootstrap\n    if err := c.Scan(&bc); err != nil {\n        panic(err)\n    }\n\n    // \u901a\u8fc7 wire \u5c06\u4f9d\u8d56\u6ce8\u5165,\u5e76\u8c03\u7528 newApp \u65b9\u6cd5\n    app, cleanup, err := initApp(bc.Server, bc.Data, logger)\n    if err != nil {\n        panic(err)\n    }\n    // \u7701\u7565\u4ee3\u7801...\n}\n")),(0,a.kt)("h4",{id:"2-\u521b\u5efa-kratos-\u5b9e\u4f8b"},"2. \u521b\u5efa kratos \u5b9e\u4f8b"),(0,a.kt)("p",null,"\u9879\u76ee main.go \u7684 ",(0,a.kt)("strong",{parentName:"p"},"newApp()")," \u65b9\u6cd5\u4e2d,\u8c03\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"go-kratos/kratos/v2/app.go")," \u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"kratos.New()")," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// helloword/cmd/main.go\nfunc newApp(logger log.Logger, hs *http.Server, gs *grpc.Server) *kratos.App {\n    return kratos.New(\n        // \u914d\u7f6e\u5e94\u7528   \n        kratos.Name(Name),\n        kratos.Version(Version),\n        kratos.Metadata(map[string]string{}),\n        kratos.Logger(logger),\n        // kratos.Server() \u4f20\u5165\u7684 http/grpc \u670d\u52a1\u4f1a\u901a\u8fc7 buildInstance() \u8f6c\u6362\u6210registry.ServiceInstance struct*\n        kratos.Server(\n            hs,\n            gs,\n        ),\n    )\n}\n")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"App struct"),",\u5305\u542b ",(0,a.kt)("strong",{parentName:"p"},"Run()")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"Stop()")," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// go-kratos/kratos/v2/app.go\ntype App struct {\n    opts     options //\u914d\u7f6e\n    ctx      context.Context // \u4e0a\u4e0b\u6587\n    cancel   func() // context \u7684\u53d6\u6d88\u65b9\u6cd5\n    instance *registry.ServiceInstance //\u901a\u8fc7 kratos.Server()\u58f0\u660e\u7684\u5b9e\u4f8b,\u5e76\u901a\u8fc7 buildInstance() \u8f6c\u6362\u540e\u7684 *registry.ServiceInstance struct\n    log      *log.Helper // \u65e5\u5fd7\n}\n\n// Run executes all OnStart hooks registered with the application's Lifecycle.\nfunc (a *App) Run() error {\n    // \u7701\u7565\u4ee3\u7801...\n}\n\n// Stop gracefully stops the application.\nfunc (a *App) Stop() error {\n    // \u7701\u7565\u4ee3\u7801...\n}\n")),(0,a.kt)("h4",{id:"3-\u8c03\u7528-run-\u65b9\u6cd5"},"3. \u8c03\u7528 Run() \u65b9\u6cd5"),(0,a.kt)("p",null,"\u9879\u76ee\u5728 main \u65b9\u6cd5\u4e2d\u8c03\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"kratos.App struct")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"Run()")," \u65b9\u6cd5."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// helloword/cmd/main.go\n// \u7701\u7565\u4ee3\u7801...\n// \u542f\u52a8 Kratos\nif err := app.Run(); err != nil {\n    panic(err)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run()")," \u65b9\u6cd5\u7684\u5b9e\u73b0\u7ec6\u8282"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// go-kratos/kratos/v2/app.go\nfunc (a *App) Run() error {\n    a.log.Infow(\n        "service_id", a.opts.id,\n        "service_name", a.opts.name,\n        "version", a.opts.version,\n    )\n    g, ctx := errgroup.WithContext(a.ctx)\n        // \u904d\u5386\u901a\u8fc7 kratos.Server() \u58f0\u660e\u7684\u670d\u52a1\u5b9e\u4f8b\n    for _, srv := range a.opts.servers {\n        srv := srv\n                // \u6267\u884c\u4e24\u4e2agoroutine, \u7528\u4e8e\u5904\u7406\u670d\u52a1\u542f\u52a8\u548c\u9000\u51fa\n        g.Go(func() error {\n            <-ctx.Done() // \u963b\u585e,\u7b49\u5f85\u8c03\u7528 cancel \u65b9\u6cd5\n            return srv.Stop() // \u534f\u7a0b\u9000\u51fa\u540e,\u8c03\u7528\u5b9e\u4f8b\u7684\u505c\u6b62\u65b9\u6cd5\n        })\n        g.Go(func() error {\n            return srv.Start() // \u8c03\u7528\u5b9e\u4f8b\u7684\u8fd0\u884c\u65b9\u6cd5\n        })\n    }\n        // \u5224\u65ad\u662f\u5426\u8c03\u7528 kratos.Registrar() \u914d\u7f6e\u4e86\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3\n    if a.opts.registrar != nil {\n        // \u5c06\u5b9e\u4f8b\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\n        if err := a.opts.registrar.Register(a.opts.ctx, a.instance); err != nil \n            return err\n        }\n    }\n        // \u76d1\u542c\u8fdb\u7a0b\u9000\u51fa\u4fe1\u53f7\n    c := make(chan os.Signal, 1)\n    signal.Notify(c, a.opts.sigs...)\n        \n        // \u5904\u7406\u8fdb\u7a0b\u9000\u51fa\u548c context \u9000\u51fa\n    g.Go(func() error {\n        for {\n            select {\n            case <-ctx.Done():\n                return ctx.Err()\n            case <-c:\n                        // \u8c03\u7528 kratos.App \u7684\u505c\u6b62\u65b9\u6cd5\n                a.Stop()\n            }\n        }\n    })\n    if err := g.Wait(); err != nil && !errors.Is(err, context.Canceled) {\n        return err\n    }\n    return nil\n}\n')),(0,a.kt)("h4",{id:"4-\u5e94\u7528\u9000\u51fa"},"4. \u5e94\u7528\u9000\u51fa"),(0,a.kt)("p",null,"Kratos \u5b9e\u4f8b\u5728\u542f\u52a8\u65f6,\u76d1\u542c\u4e86\u7cfb\u7edf\u7684\u8fdb\u7a0b\u9000\u51fa\u4fe1\u53f7,\u5f53\u6536\u5230\u9000\u51fa\u4fe1\u53f7\u65f6,kratos \u4f1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"App struct")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"Stop()")," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// go-kratos/kratos/v2/app.go\nfunc (a *App) Stop() error {\n    // \u5224\u65ad\u662f\u5426\u6709\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e\n    if a.opts.registrar != nil {\n        // \u5728\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u5c06\u5b9e\u4f8b\u6ce8\u9500\n        if err := a.opts.registrar.Deregister(a.opts.ctx, a.instance); err != nil {\n            return err\n        }\n    }\n    // \u63a7\u5236 goroutine \u7684\u9000\u51fa,\u5f53\u8c03\u7528 a.cancel()\u65f6,Run()\u65b9\u6cd5\u4e2d \u76d1\u542c\u7684 <-ctx.Done() \u6536\u5230\u6d88\u606f\u540e,\u6ca1\u6709\u963b\u585e\u540e,\u65b9\u6cd5\u4f1a\u8c03\u7528 server \u7684 Stop()\u65b9\u6cd5,\u505c\u6b62\u670d\u52a1\n    if a.cancel != nil {\n        a.cancel()\n    }\n    return nil\n}\n")))}i.isMDXComponent=!0}}]);