import{a as q}from"./chunk-MC6M4MSB.js";import{b as S,c as w}from"./chunk-B4VPXM5U.js";import{b as D,c as R,d as V,e as H}from"./chunk-RS6RT6FA.js";import"./chunk-N3ZKTSIW.js";import{t as Y}from"./chunk-YOF3I3S7.js";import{a as I,b as u,d as P,e as E,g as L,h as N,i as z,j as O,l as B}from"./chunk-4YYGYOD6.js";import{e as k}from"./chunk-OAPRAYSC.js";import{P as j,Q as T,V as G,X as A}from"./chunk-Q3Z472UL.js";import"./chunk-MZNMKT3K.js";import"./chunk-WXI33M2S.js";import{h as C,i as x,j as M}from"./chunk-JKCSEBYG.js";import{Bb as h,Db as y,Lb as l,Pb as F,Qb as _,Sa as p,Ta as d,hb as c,ia as b,jb as s,ob as f,sb as r,tb as n,ub as g}from"./chunk-K3GHB3KI.js";var J=t=>({"background-image":t});function K(t,e){t&1&&(r(0,"div",5)(1,"p",12),l(2," Invalid Email Field"),n()())}function Q(t,e){if(t&1&&c(0,K,3,0,"div",11),t&2){let i=y();s("ngIf",i.myForm==null||i.myForm.controls==null||i.myForm.controls.email==null?null:i.myForm.controls.email.errors)}}function U(t,e){t&1&&(r(0,"div",5)(1,"p",13),l(2," Invalid Password Field"),n()())}function W(t,e){if(t&1&&c(0,U,3,0,"div",11),t&2){let i=y();s("ngIf",i.myForm==null||i.myForm.controls==null||i.myForm.controls.password==null?null:i.myForm.controls.password.errors)}}var yt=(()=>{let e=class e{constructor(a,m,o,v){this.db=a,this.fb=m,this._snackBar=o,this.router=v,this.base_url=q.asset_url,this.myForm=this.fb.group({email:["iamowaisazam@gmail.com",[u.required,u.email]],password:["owais123",[u.required]]})}onSubmit(){this.myForm.valid?this.db.login(this.myForm.value.email,this.myForm.value.password).then(a=>{this._snackBar.open("Logged In Successfully","Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-success"]}),this.router.navigate(["/admin/dashboard"])}).catch(a=>{this._snackBar.open(a.code,"Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-error"]})}):this._snackBar.open("Form Validation Failed","Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-error"]})}cancelForm(){}};e.\u0275fac=function(m){return new(m||e)(d(H),d(O),d(Y),d(S))},e.\u0275cmp=b({type:e,selectors:[["app-login"]],standalone:!0,features:[F],decls:21,vars:7,consts:[[1,"main-container",3,"ngStyle"],[1,"wrap-login100",3,"ngSubmit","formGroup"],[1,"login100-form-title"],[1,"seprator"],["formControlName","email","matInput","","placeholder","Email",1,"mat-mdc-input-element"],[1,"errors"],["type","password","formControlName","password","matInput","","placeholder","Password",1,"mat-mdc-input-element"],[1,"button-container"],[1,"login100-form-btn",2,"cursor","pointer",3,"disabled"],[2,"text-align","center"],["routerLink","/register"],["class","errors",4,"ngIf"],[1,"mat-body-1"],[1,"mat-body1"]],template:function(m,o){m&1&&(r(0,"div",0)(1,"form",1),h("ngSubmit",function(){return o.onSubmit()}),r(2,"p",2),l(3,"Login"),n(),r(4,"div")(5,"div",3)(6,"label"),l(7,"Email"),n(),g(8,"input",4),c(9,Q,1,1,"div",5),n(),r(10,"div",3)(11,"label"),l(12,"Password"),n(),g(13,"input",6),c(14,W,1,1,"div",5),n(),r(15,"div",7)(16,"button",8),l(17,"Login"),n()(),r(18,"p",9)(19,"a",10),l(20,"If You Dont Have Account"),n()()()()()),m&2&&(s("ngStyle",_(5,J,"url("+o.base_url+"assets/bg.jpg)")),p(),s("formGroup",o.myForm),p(8),f(9,!(o.myForm==null||o.myForm.controls==null||o.myForm.controls.email==null)&&o.myForm.controls.email.touched?9:-1),p(5),f(14,!(o.myForm==null||o.myForm.controls==null||o.myForm.controls.password==null)&&o.myForm.controls.password.touched?14:-1),p(2),s("disabled",!o.myForm.valid))},dependencies:[w,j,G,T,M,C,x,D,k,B,L,I,P,E,N,z,A,V,R],styles:[".main-container[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}.wrap-login100[_ngcontent-%COMP%]{width:400px;height:auto;background:#fff;border-radius:10px;padding:30px 20px}.login100-form-title[_ngcontent-%COMP%]{display:block;font-family:poppins!important;font-size:45px;color:#333;line-height:1.2;text-align:center;font-weight:400;font-family:fantasy;letter-spacing:3px}.button-container[_ngcontent-%COMP%]{width:100%;text-align:center;margin:15px 0}.login100-form-btn[_ngcontent-%COMP%]{font-size:18px;font-family:system-ui;border:none;color:#fff;text-align:center;background:#a64bf4;padding:8px 30px;border-radius:4px}.wrap-login100-form-btn[_ngcontent-%COMP%]{margin-top:20px}label[_ngcontent-%COMP%]{font-family:poppins!important;display:block;padding-bottom:8px;font-size:16px}.seprator[_ngcontent-%COMP%]{padding:5px 0}"]});let t=e;return t})();export{yt as LoginComponent};
