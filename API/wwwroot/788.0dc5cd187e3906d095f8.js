(self.webpackChunkclient=self.webpackChunkclient||[]).push([[788],{3758:(t,e,n)=>{"use strict";n.d(e,{b:()=>f});var r=n(8619),i=n(8318),o=n(878),c=n(9996),s=n(1116),d=n(5424),a=n(8546);function u(t,e){1&t&&(r.TgZ(0,"div"),r.TgZ(1,"p"),r._uU(2,"There are no items in your basket."),r.qZA(),r.qZA())}function p(t,e){if(1&t&&(r.ynx(0),r.YNc(1,u,3,0,"div",0),r.BQk()),2&t){const t=e.ngIf;r.oxw();const n=r.MAs(3);r.xp6(1),r.Q6J("ngIf",0===t.length)("ngIfElse",n)}}function l(t,e){1&t&&(r.TgZ(0,"th",11),r.TgZ(1,"span",12),r._uU(2,"Delete"),r.qZA(),r.qZA())}function g(t,e){if(1&t){const t=r.EpF();r.ynx(0),r.TgZ(1,"app-quantity-count",24),r.NdJ("incremented",function(){r.CHM(t);const e=r.oxw().$implicit;return r.oxw(2).incrementItemCount(e)})("decremented",function(){r.CHM(t);const e=r.oxw().$implicit;return r.oxw(2).decrementItemCount(e)}),r.qZA(),r.BQk()}if(2&t){const t=r.oxw().$implicit;r.xp6(1),r.Q6J("count",t.quantity)}}function m(t,e){if(1&t&&r._uU(0),2&t){const t=r.oxw().$implicit;r.hij(" ",t.quantity," ")}}function Z(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",25),r.TgZ(1,"span",12),r._uU(2,"Delete"),r.qZA(),r.TgZ(3,"div",26),r.NdJ("click",function(){r.CHM(t);const e=r.oxw().$implicit;return r.oxw(2).removeItem(e)}),r.O4$(),r.TgZ(4,"svg",27),r._UZ(5,"path",28),r.qZA(),r.qZA(),r.qZA()}}const w=function(t,e){return{"bg-white":t,"bg-gray-50":e}};function h(t,e){if(1&t&&(r.ynx(0),r.TgZ(1,"tr",13),r.TgZ(2,"td",14),r.TgZ(3,"div",15),r.TgZ(4,"div",16),r.TgZ(5,"picture",17),r._UZ(6,"source",18),r._UZ(7,"source",19),r._UZ(8,"img",20),r.qZA(),r.qZA(),r.TgZ(9,"div",21),r._uU(10),r.qZA(),r.qZA(),r.qZA(),r.TgZ(11,"td",22),r._uU(12),r.ALo(13,"currency"),r.qZA(),r.TgZ(14,"td",22),r.YNc(15,g,2,1,"ng-container",0),r.YNc(16,m,1,1,"ng-template",null,1,r.W1O),r.qZA(),r.TgZ(18,"td",22),r._uU(19),r.ALo(20,"currency"),r.qZA(),r.YNc(21,Z,6,0,"td",23),r.qZA(),r.BQk()),2&t){const t=e.$implicit,n=e.odd,i=e.even,o=r.MAs(17),c=r.oxw(2);r.xp6(1),r.Q6J("ngClass",r.WLB(16,w,i,n)),r.xp6(3),r.MGl("routerLink","/shop/",t.id,""),r.xp6(2),r.MGl("srcset","",t.pictureUrl,".webp",r.LSH),r.xp6(1),r.MGl("srcset","",t.pictureUrl,".png",r.LSH),r.xp6(1),r.MGl("src","",t.pictureUrl,".png",r.LSH),r.s9C("alt",t.productName),r.xp6(2),r.hij(" ",t.productName," "),r.xp6(2),r.hij(" ",r.lcZ(13,12,t.price)," "),r.xp6(3),r.Q6J("ngIf",!c.readonly)("ngIfElse",o),r.xp6(4),r.hij(" ",r.lcZ(20,14,t.quantity*t.price)," "),r.xp6(2),r.Q6J("ngIf",!c.readonly)}}function x(t,e){if(1&t&&(r.TgZ(0,"div",2),r.TgZ(1,"div",3),r.TgZ(2,"div",4),r.TgZ(3,"div",5),r.TgZ(4,"table",6),r.TgZ(5,"thead",7),r.TgZ(6,"tr"),r.TgZ(7,"th",8),r._uU(8," Product "),r.qZA(),r.TgZ(9,"th",8),r._uU(10," Price "),r.qZA(),r.TgZ(11,"th",8),r._uU(12," Quantity "),r.qZA(),r.TgZ(13,"th",8),r._uU(14," Total "),r.qZA(),r.YNc(15,l,3,0,"th",9),r.qZA(),r.qZA(),r.TgZ(16,"tbody"),r.YNc(17,h,22,19,"ng-container",10),r.ALo(18,"async"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(15),r.Q6J("ngIf",!t.readonly),r.xp6(2),r.Q6J("ngForOf",r.lcZ(18,2,t.products$))}}let f=(()=>{class t{constructor(){this.readonly=!1,this.items$=new i.y,this.basketCount$=(0,o.of)(0),this.products$=new i.y,this.incremented=new r.vpe,this.decremented=new r.vpe,this.removed=new r.vpe}ngOnInit(){this.products$=this.items$.pipe((0,c.U)(t=>t.map(t=>this.toProductListItem(t))))}toProductListItem(t){return{id:"productId"in t?t.productId:t.id,pictureUrl:t.pictureUrl,price:t.price,productName:t.productName,quantity:t.quantity}}decrementItemCount(t){this.decremented.emit(t)}incrementItemCount(t){this.incremented.emit(t)}removeItem(t){this.removed.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-basket-summary"]],inputs:{readonly:"readonly",items$:"items$"},outputs:{incremented:"incremented",decremented:"decremented",removed:"removed"},decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"flex","flex-col"],[1,"-my-2","overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"py-2","align-middle","inline-block","min-w-full","sm:px-6","lg:px-8"],[1,"shadow-md","overflow-hidden","border-b","border-gray-200","rounded-md"],[1,"min-w-full","divide-y","divide-gray-200"],[1,"bg-gray-50"],["scope","col",1,"px-6","py-3","text-left","text-xs","font-semibold","text-gray-500","uppercase","tracking-wider"],["scope","col","class","relative px-6 py-3",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",1,"relative","px-6","py-3"],[1,"sr-only"],[3,"ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"flex","items-center"],[1,"flex-shrink-0","h-12","w-12","cursor-pointer",3,"routerLink"],[1,"h-12","w-12"],["type","image/webp",3,"srcset"],["type","image/png",3,"srcset"],[3,"src","alt"],[1,"ml-4"],[1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-600"],["class","px-6 py-4 whitespace-nowrap text-right text-sm font-medium",4,"ngIf"],[3,"count","incremented","decremented"],[1,"px-6","py-4","whitespace-nowrap","text-right","text-sm","font-medium"],[1,"text-red-700","hover:text-red-500","cursor-pointer",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]],template:function(t,e){if(1&t&&(r.YNc(0,p,2,2,"ng-container",0),r.ALo(1,"async"),r.YNc(2,x,19,4,"ng-template",null,1,r.W1O)),2&t){const t=r.MAs(3);r.Q6J("ngIf",r.lcZ(1,2,e.products$))("ngIfElse",t)}},directives:[s.O5,s.sg,s.mk,d.rH,a.$],pipes:[s.Ov,s.H9],styles:[""],changeDetection:0}),t})()},2830:(t,e,n)=>{"use strict";n.d(e,{r:()=>s});var r=n(8619),i=n(1116);const o=function(t,e){return{primary:t,disabled:e}},c=["*"];let s=(()=>{class t{constructor(){this.disabled=!1,this.type="primary"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-button"]],inputs:{disabled:"disabled",type:"type"},ngContentSelectors:c,decls:2,vars:4,consts:[[3,"ngClass"]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"button",0),r.Hsn(1),r.qZA()),2&t&&r.Q6J("ngClass",r.WLB(1,o,"primary"===e.type,e.disabled))},directives:[i.mk],styles:["button.primary[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:center;border-radius:.375rem;--tw-bg-opacity:1;background-color:rgba(79,70,229,var(--tw-bg-opacity));padding:.5rem 1rem;font-weight:500;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 #0000000d;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}button.primary[_ngcontent-%COMP%]:hover{--tw-bg-opacity:1;background-color:rgba(67,56,202,var(--tw-bg-opacity))}button.primary[_ngcontent-%COMP%]:focus{outline:2px solid #0000;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgba(99,102,241,var(--tw-ring-opacity));--tw-ring-offset-width:2px}button.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default;--tw-bg-opacity:1;background-color:rgba(165,180,252,var(--tw-bg-opacity))}"],changeDetection:0}),t})()},9363:(t,e,n)=>{"use strict";n.d(e,{S:()=>d});var r=n(8619),i=n(1116),o=n(2830),c=n(5424);function s(t,e){1&t&&(r.TgZ(0,"p",10),r._uU(1," *Shipping costs will be added depending on the choices made during checkout. "),r.qZA())}let d=(()=>{class t{constructor(){this.showHints=!0,this.nextButtonLink="/checkout",this.nextButtonText="Continue to checkout"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-order-totals"]],inputs:{showHints:"showHints",orderSummary$:"orderSummary$",nextButtonLink:"nextButtonLink",nextButtonText:"nextButtonText"},decls:31,vars:18,consts:[[1,"pb-6","bg-white","rounded-md","shadow-md"],[1,"bg-gray-50","px-6","pt-5","pb-4","rounded-t-md","text-sm","font-medium","text-gray-500","border-b","border-gray-200"],[1,"uppercase","flex","items-center"],["class","text-xs italic mt-2 text-gray-400",4,"ngIf"],[1,"flow-root","mt-4","text-sm","px-6","text-gray-600"],[1,"-my-5","divide-y","divide-gray-200"],[1,"py-4"],[1,"flex","items-center","justify-between","space-x-4"],[1,"mt-8"],[3,"routerLink"],[1,"text-xs","italic","mt-2","text-gray-400"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h3",2),r._uU(3,"Order Summary"),r.qZA(),r.YNc(4,s,2,0,"p",3),r.qZA(),r.TgZ(5,"div",4),r.TgZ(6,"ul",5),r.TgZ(7,"li",6),r.TgZ(8,"div",7),r.TgZ(9,"span"),r._uU(10,"Order Subtotal:"),r.qZA(),r._uU(11),r.ALo(12,"currency"),r.ALo(13,"async"),r.qZA(),r.qZA(),r.TgZ(14,"li",6),r.TgZ(15,"div",7),r.TgZ(16,"span"),r._uU(17,"Shipping Fee:"),r.qZA(),r._uU(18),r.ALo(19,"currency"),r.ALo(20,"async"),r.qZA(),r.qZA(),r.TgZ(21,"li",6),r.TgZ(22,"div",7),r.TgZ(23,"span"),r._uU(24,"Order Total:"),r.qZA(),r._uU(25),r.ALo(26,"currency"),r.ALo(27,"async"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(28,"div",8),r.TgZ(29,"app-button",9),r._uU(30),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){let t,n,i;r.xp6(4),r.Q6J("ngIf",e.showHints),r.xp6(7),r.hij(" ",r.lcZ(12,6,null==(t=r.lcZ(13,8,e.orderSummary$))?null:t.orderSubtotal)," "),r.xp6(7),r.hij(" ",r.lcZ(19,10,null==(n=r.lcZ(20,12,e.orderSummary$))?null:n.orderShippingFee)," "),r.xp6(7),r.hij(" ",r.lcZ(26,14,null==(i=r.lcZ(27,16,e.orderSummary$))?null:i.orderTotal)," "),r.xp6(4),r.s9C("routerLink",e.nextButtonLink),r.xp6(1),r.Oqu(e.nextButtonText)}},directives:[i.O5,o.r,c.rH],pipes:[i.H9,i.Ov],styles:[""],changeDetection:0}),t})()},8546:(t,e,n)=>{"use strict";n.d(e,{$:()=>i});var r=n(8619);let i=(()=>{class t{constructor(){this.count=0,this.incremented=new r.vpe,this.decremented=new r.vpe}handleIncrement(){this.incremented.emit(!0)}handleDecrement(){this.decremented.emit(!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-quantity-count"]],inputs:{count:"count"},outputs:{incremented:"incremented",decremented:"decremented"},decls:9,vars:3,consts:[[1,"flex","items-center"],[1,"cursor-pointer","disabled:cursor-default","disabled:pointer-events-none",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","stroke","white",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"mx-2","w-4","flex","justify-center"],[1,"cursor-pointer","disabled:cursor-default","disabled:pointer-events-none",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","#4f46e5","stroke","white",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"button",1),r.NdJ("click",function(){return e.handleDecrement()}),r.O4$(),r.TgZ(2,"svg",2),r._UZ(3,"path",3),r.qZA(),r.qZA(),r.kcU(),r.TgZ(4,"span",4),r._uU(5),r.qZA(),r.TgZ(6,"button",5),r.NdJ("click",function(){return e.handleIncrement()}),r.O4$(),r.TgZ(7,"svg",6),r._UZ(8,"path",7),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("disabled",1===e.count),r.xp6(1),r.uIk("fill",1===e.count?"#818CF8":"#4f46e5"),r.xp6(3),r.hij(" ",e.count," "))},encapsulation:2,changeDetection:0}),t})()}}]);
//# sourceMappingURL=788.0dc5cd187e3906d095f8.js.map