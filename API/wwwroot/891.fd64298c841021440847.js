(self.webpackChunkclient=self.webpackChunkclient||[]).push([[891],{2891:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BasketModule:()=>f});var n=r(1116),s=r(5424),c=r(8619),m=r(3241),i=r(8298),o=r(3758),a=r(9363);function u(e,t){if(1&e&&(c.TgZ(0,"div",2),c._UZ(1,"app-order-totals",3),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("orderSummary$",e.orderSummary$)}}const d=[{path:"",component:(()=>{class e{constructor(e,t){this.basketService=e,this.checkoutService=t,this.basketCount$=this.basketService.basketItemCount$,this.basketItems$=this.basketService.basketItems$,this.orderSummary$=this.checkoutService.orderSummary$}incrementItemCount(e){this.basketService.incrementBasketItem(e)}decrementItemCount(e){this.basketService.decrementBasketItem(e)}removeItem(e){this.basketService.removeBasketItem(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(m.v),c.Y36(i.Z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-basket"]],decls:3,vars:4,consts:[[3,"items$","decremented","incremented","removed"],["class","flex justify-end mt-6",4,"ngIf"],[1,"flex","justify-end","mt-6"],[1,"w-1/2",3,"orderSummary$"]],template:function(e,t){1&e&&(c.TgZ(0,"app-basket-summary",0),c.NdJ("decremented",function(e){return t.decrementItemCount(e)})("incremented",function(e){return t.incrementItemCount(e)})("removed",function(e){return t.removeItem(e)}),c.qZA(),c.YNc(1,u,2,1,"div",1),c.ALo(2,"async")),2&e&&(c.Q6J("items$",t.basketItems$),c.xp6(1),c.Q6J("ngIf",0!==c.lcZ(2,2,t.basketCount$)))},directives:[o.b,n.O5,a.S],pipes:[n.Ov],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),e})();var p=r(5425);let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,k,p.m]]}),e})()}}]);