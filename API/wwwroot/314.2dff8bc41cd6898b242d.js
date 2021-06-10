(self.webpackChunkclient=self.webpackChunkclient||[]).push([[314],{314:(r,e,t)=>{"use strict";t.r(e),t.d(e,{OrderModule:()=>A});var o=t(1116),s=t(5424),i=t(4762),d=t(878),n=t(9996),a=t(4689),c=t(3623),l=t(8619),p=t(8512),u=t(529),h=t(2693);let g=(()=>{class r{constructor(r){this.http=r,this.baseUrl=u.N.apiUrl,this.orders=new p.X([]),this.orders$=this.orders.asObservable(),this.order=new p.X(null),this.order$=this.order.asObservable()}get currentOrders(){return this.orders.value}loadOrders(){return this.http.get(`${this.baseUrl}/orders`).pipe((0,n.U)(r=>this.orders.next(r))).subscribe(()=>{},r=>{console.error(r)})}loadOrderById(r){return this.http.get(`${this.baseUrl}/orders/${r}`).pipe((0,n.U)(r=>this.order.next(r)))}}return r.\u0275fac=function(e){return new(e||r)(l.LFG(h.eN))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var m=t(1630),Z=t(3758),v=t(9363);let x=(()=>{let r=class{constructor(r,e,t){var o;this.activatedRoute=r,this.orderService=e,this.bcService=t;const s=+(null!==(o=this.activatedRoute.snapshot.paramMap.get("id"))&&void 0!==o?o:0);this.bcService.set("@orderDetail"," "),this.order$=this.orderService.orders$.pipe((0,n.U)(r=>r.find(r=>r.id===s)),(0,a.w)(r=>(r||this.orderService.loadOrders(),(0,d.of)(r)))),this.orderItems$=this.order$.pipe((0,n.U)(r=>r?r.orderItems:[])),this.orderSummary$=this.order$.pipe((0,n.U)(r=>this.createOrderSummary(r))),0===this.orderService.currentOrders.length&&this.orderService.loadOrders(),this.order$.pipe((0,c.t)(this),(0,n.U)(r=>{r&&this.bcService.set("@orderDetail",`Order #${r.id} - ${r.status}`)})).subscribe()}createOrderSummary(r){return r?{orderShippingFee:r.shippingPrice,orderSubtotal:r.subtotal,orderTotal:r.total}:{orderShippingFee:0,orderSubtotal:0,orderTotal:0}}};return r.\u0275fac=function(e){return new(e||r)(l.Y36(s.gz),l.Y36(g),l.Y36(m.pm))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-order-detail"]],decls:4,vars:6,consts:[[1,"grid","grid-cols-3","grid-rows-2"],[1,"col-span-2","pr-8"],[3,"readonly","items$"],[1,"col-start-3",3,"showHints","orderSummary$","nextButtonLink","nextButtonText"]],template:function(r,e){1&r&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l._UZ(2,"app-basket-summary",2),l.qZA(),l._UZ(3,"app-order-totals",3),l.qZA()),2&r&&(l.xp6(2),l.Q6J("readonly",!0)("items$",e.orderItems$),l.xp6(1),l.Q6J("showHints",!1)("orderSummary$",e.orderSummary$)("nextButtonLink","/orders")("nextButtonText","Go back to orders"))},directives:[Z.b,v.S],styles:[""],changeDetection:0}),r=(0,i.gn)([(0,c.c)()],r),r})();const b=function(r,e){return{"bg-white":r,"bg-gray-50":e}};function y(r,e){if(1&r&&(l.ynx(0),l.TgZ(1,"tr",8),l.TgZ(2,"td",9),l._uU(3),l.qZA(),l.TgZ(4,"td",10),l._uU(5),l.ALo(6,"date"),l.qZA(),l.TgZ(7,"td",10),l._uU(8),l.ALo(9,"currency"),l.qZA(),l.TgZ(10,"td",10),l._uU(11),l.qZA(),l.qZA(),l.BQk()),2&r){const r=e.$implicit,t=e.odd,o=e.even;l.xp6(1),l.MGl("routerLink","/orders/",r.id,""),l.Q6J("ngClass",l.WLB(10,b,o,t)),l.xp6(2),l.hij(" # ",r.id," "),l.xp6(2),l.hij(" ",l.lcZ(6,6,r.orderDate)," "),l.xp6(3),l.hij(" ",l.lcZ(9,8,r.total)," "),l.xp6(3),l.hij(" ",r.status," ")}}const f=[{path:"",component:(()=>{class r{constructor(r){this.orderService=r,this.orders$=this.orderService.orders$}ngOnInit(){this.orderService.loadOrders()}}return r.\u0275fac=function(e){return new(e||r)(l.Y36(g))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-order"]],decls:18,vars:3,consts:[[1,"flex","flex-col"],[1,"-my-2","overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"py-2","align-middle","inline-block","min-w-full","sm:px-6","lg:px-8"],[1,"shadow","overflow-hidden","border-b","border-gray-200","sm:rounded-lg"],[1,"min-w-full","divide-y","divide-gray-200"],[1,"bg-gray-50"],["scope","col",1,"px-6","py-3","text-left","text-xs","font-medium","text-gray-500","uppercase","tracking-wider"],[4,"ngFor","ngForOf"],[1,"cursor-pointer","hover:bg-indigo-50",3,"routerLink","ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-600"]],template:function(r,e){1&r&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"table",4),l.TgZ(5,"thead",5),l.TgZ(6,"tr"),l.TgZ(7,"th",6),l._uU(8," Order "),l.qZA(),l.TgZ(9,"th",6),l._uU(10," Date "),l.qZA(),l.TgZ(11,"th",6),l._uU(12," Total "),l.qZA(),l.TgZ(13,"th",6),l._uU(14," Status "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(15,"tbody"),l.YNc(16,y,12,13,"ng-container",7),l.ALo(17,"async"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&r&&(l.xp6(16),l.Q6J("ngForOf",l.lcZ(17,1,e.orders$)))},directives:[o.sg,s.rH,o.mk],pipes:[o.Ov,o.uU,o.H9],styles:[""]}),r})()},{path:":id",component:x,data:{breadcrumb:{alias:"orderDetail"}}}];let S=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[s.Bz.forChild(f)],s.Bz]}),r})();var w=t(5425);let A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[o.ez,S,w.m]]}),r})()}}]);
//# sourceMappingURL=314.2dff8bc41cd6898b242d.js.map