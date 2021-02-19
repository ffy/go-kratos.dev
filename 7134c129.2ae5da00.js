(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{84:function(r,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return s})),o.d(e,"metadata",(function(){return i})),o.d(e,"toc",(function(){return c})),o.d(e,"default",(function(){return p}));var n=o(3),t=o(7),a=(o(0),o(103)),s={id:"api-errors",title:"APIs \u9519\u8bef\u7801\u89c4\u8303\u5b9a\u4e49"},i={unversionedId:"guide/api-errors",id:"guide/api-errors",isDocsHomePage:!1,title:"APIs \u9519\u8bef\u7801\u89c4\u8303\u5b9a\u4e49",description:"APIs \u9519\u8bef\u7801\u53ef\u4ee5\u7edf\u4e00\u901a\u8fc7 proto \u5b9a\u4e49\uff0c\u7136\u540e\u901a\u8fc7 protoc-gen-go-errors \u751f\u6210\u5224\u5b9a\u4ee3\u7801\u3002",source:"@site/docs/guide/api-errors.md",slug:"/guide/api-errors",permalink:"/docs/guide/api-errors",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/api-errors.md",version:"current",sidebar:"docs",previous:{title:"APIs \u63a5\u53e3\u89c4\u8303\u5b9a\u4e49",permalink:"/docs/guide/api-protobuf"},next:{title:"Kratos Layout\u4ecb\u7ecd",permalink:"/docs/layout/layout-intro"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"Errors \u5b9a\u4e49",id:"errors-\u5b9a\u4e49",children:[]},{value:"Errors \u751f\u6210",id:"errors-\u751f\u6210",children:[]}],l={toc:c};function p(r){var e=r.components,o=Object(t.a)(r,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"APIs \u9519\u8bef\u7801\u53ef\u4ee5\u7edf\u4e00\u901a\u8fc7 proto \u5b9a\u4e49\uff0c\u7136\u540e\u901a\u8fc7 protoc-gen-go-errors \u751f\u6210\u5224\u5b9a\u4ee3\u7801\u3002"),Object(a.b)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"go get github.com/go-kratos/kratos/cmd/protoc-gen-go-errors\n")),Object(a.b)("h3",{id:"errors-\u5b9a\u4e49"},"Errors \u5b9a\u4e49"),Object(a.b)("p",null,"api/helloworld/errors/helloworld.proto"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\n\npackage api.helloworld.errors;\n\nimport "kratos/api/annotations.proto";\n\n// \u591a\u8bed\u8a00\u7279\u5b9a\u5305\u540d\uff0c\u7528\u4e8e\u6e90\u4ee3\u7801\u5f15\u7528\noption go_package = "api/helloworld/errors;errors";\noption java_multiple_files = true;\noption java_package = "helloworld.errors";\noption objc_class_prefix = "APIHelloworldErrors";\n\nenum Helloworld {\n    option (kratos.api.errors) = true;\n\n    MissingName = 0;\n}\n')),Object(a.b)("h3",{id:"errors-\u751f\u6210"},"Errors \u751f\u6210"),Object(a.b)("p",null,"\u901a\u8fc7 proto \u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"make proto\n")),Object(a.b)("p",null,"Source:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'const (\n    Errors_MissingName = "Helloworld_MissingName"\n)\n\nfunc IsMissingName(err error) bool {\n    return errors.Reason(err) == Errors_MissingName\n}\n')))}p.isMDXComponent=!0}}]);