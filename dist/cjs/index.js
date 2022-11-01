"use strict";var e=require("react"),t=require("@mui/material"),r=require("@mui/icons-material"),a=require("axios"),n=require("@tanstack/react-query"),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},u={page:0,perPage:10},s=a.create({baseURL:"https://reqres.in/api"}),c=function(e){return void 0===e&&(e=u),s.get("/users?".concat((r=(t=e).page,a=t.perPage,"page=".concat(r+1,"&per_page=").concat(a))));var t,r,a},i=function(e){return s.get("/users/".concat(e))};exports.EmailButton=function(a){return e.createElement(t.Button,o({},a,{startIcon:e.createElement(r.EmailTwoTone,null)}))},exports.PaginationTable=function(r){var a=r.rowsPerPage,n=void 0===a?u.perPage:a,o=r.page,s=r.total,c=r.data,i=r.headers,l=r.handleChangePage,g=r.handleChangeRowsPerPage,p=e.useCallback((function(e,t){return l(t)}),[]),P=e.useCallback((function(e){return g(Number(e.target.value))}),[]);return e.createElement(t.TableContainer,{component:t.Paper},e.createElement(t.Table,{sx:{minWidth:500},"aria-label":"pagination table"},e.createElement(t.TableBody,null,c.map((function(r){return e.createElement(t.TableRow,{key:r.id},i.map((function(a){var n=a.key;return e.createElement(t.TableCell,{component:"th",scope:"row"},e.createElement(e.Fragment,null,r[n]))})))}))),e.createElement(t.TableFooter,null,e.createElement(t.TableRow,null,e.createElement(t.TablePagination,{component:"div",count:s||0,page:o,rowsPerPage:n,onPageChange:p,onRowsPerPageChange:P,rowsPerPageOptions:[5,10,25,50,100]})))))},exports.getListUser=c,exports.getUser=i,exports.useUserItem=function(e){return n.useQuery(["users",e],(function(){return i(e)}))},exports.useUserList=function(t){var r=function(t){var r=e.useState(t.page),a=r[0],n=r[1],o=e.useState(t.perPage);return{page:a,perPage:o[0],setPage:n,setPerPage:o[1]}}(t),a=r.page,u=r.perPage,s=r.setPage,i=r.setPerPage,l=n.useQuery(["users",a,u],(function(){return c({page:a,perPage:u})}));return o(o({},l),{page:a,perPage:u,setPage:s,setPerPage:i})};
//# sourceMappingURL=index.js.map