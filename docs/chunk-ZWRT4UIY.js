import{a as q}from"./chunk-MC6M4MSB.js";import{c as w}from"./chunk-B4VPXM5U.js";import{b as B,c as A,d as G,e as Y}from"./chunk-RS6RT6FA.js";import"./chunk-N3ZKTSIW.js";import{t as H}from"./chunk-YOF3I3S7.js";import{a as I,b as u,d as P,e as E,g as N,h as R,i as O,j as T,l as z}from"./chunk-4YYGYOD6.js";import{e as k}from"./chunk-OAPRAYSC.js";import{P as D,Q as j,V as L,X as V}from"./chunk-Q3Z472UL.js";import"./chunk-MZNMKT3K.js";import"./chunk-WXI33M2S.js";import{h as x,i as M,j as S}from"./chunk-JKCSEBYG.js";import{Bb as b,Db as y,Lb as l,Pb as C,Qb as h,Sa as d,Ta as c,e as F,hb as m,ia as _,jb as s,ob as f,sb as r,tb as o,ub as g}from"./chunk-K3GHB3KI.js";var J=t=>({"background-image":t});function K(t,i){t&1&&(r(0,"div",5)(1,"p",13),l(2," Invalid Name Field"),o()())}function Q(t,i){if(t&1&&m(0,K,3,0,"div",12),t&2){let n=y();s("ngIf",n.myForm==null||n.myForm.controls==null||n.myForm.controls.name==null?null:n.myForm.controls.name.errors)}}function U(t,i){t&1&&(r(0,"div",5)(1,"p",13),l(2," Invalid Email Field"),o()())}function W(t,i){if(t&1&&m(0,U,3,0,"div",12),t&2){let n=y();s("ngIf",n.myForm==null||n.myForm.controls==null||n.myForm.controls.email==null?null:n.myForm.controls.email.errors)}}function X(t,i){t&1&&(r(0,"div",5)(1,"p",14),l(2," Invalid Password Field"),o()())}function Z(t,i){if(t&1&&m(0,X,3,0,"div",12),t&2){let n=y();s("ngIf",n.myForm==null||n.myForm.controls==null||n.myForm.controls.password==null?null:n.myForm.controls.password.errors)}}var vt=(()=>{let i=class i{constructor(p,a,e){this.db=p,this.fb=a,this._snackBar=e,this.base_url=q.asset_url,this.myForm=this.fb.group({name:["",u.required],email:["",[u.required,u.email]],password:["",[u.required]]})}onSubmit(){return F(this,null,function*(){if(this.myForm.valid){let{email:p,password:a,name:e}=this.myForm.value;this.db.register(p,a,e).then(v=>{this._snackBar.open("Registeration Successfully Now You Can Logged In","Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-success"]}),this.myForm.reset()}).catch(v=>{this._snackBar.open(v.code,"Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-error"]})})}else this._snackBar.open("Form Validation Failed","Close",{horizontalPosition:"end",verticalPosition:"top",duration:3e3,panelClass:["custom-snackbar-error"]})})}cancelForm(){}};i.\u0275fac=function(a){return new(a||i)(c(Y),c(T),c(H))},i.\u0275cmp=_({type:i,selectors:[["app-register"]],standalone:!0,features:[C],decls:26,vars:7,consts:[[1,"main-container",3,"ngStyle"],[1,"wrap-login100",3,"ngSubmit","formGroup"],[1,"login100-form-title"],[1,"seprator"],["formControlName","name","matInput","","placeholder","Name",1,"mat-mdc-input-element"],[1,"errors"],["formControlName","email","matInput","","placeholder","Email",1,"mat-mdc-input-element"],["type","password","formControlName","password","matInput","","placeholder","Password",1,"mat-mdc-input-element"],[1,"button-container"],[1,"login100-form-btn"],[2,"text-align","center"],["routerLink","/login"],["class","errors",4,"ngIf"],[1,"mat-body-1"],[1,"mat-body1"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"form",1),b("ngSubmit",function(){return e.onSubmit()}),r(2,"p",2),l(3,"Rregister"),o(),r(4,"div")(5,"div",3)(6,"label"),l(7,"Name"),o(),g(8,"input",4),m(9,Q,1,1,"div",5),o(),r(10,"div",3)(11,"label"),l(12,"Email"),o(),g(13,"input",6),m(14,W,1,1,"div",5),o(),r(15,"div",3)(16,"label"),l(17,"Password"),o(),g(18,"input",7),m(19,Z,1,1,"div",5),o(),r(20,"div",8)(21,"button",9),l(22,"Register"),o()(),r(23,"p",10)(24,"a",11),l(25,"If You Already Have Account"),o()()()()()),a&2&&(s("ngStyle",h(5,J,"url("+e.base_url+"assets/bg.jpg)")),d(),s("formGroup",e.myForm),d(8),f(9,!(e.myForm==null||e.myForm.controls==null||e.myForm.controls.name==null)&&e.myForm.controls.name.touched?9:-1),d(5),f(14,!(e.myForm==null||e.myForm.controls==null||e.myForm.controls.email==null)&&e.myForm.controls.email.touched?14:-1),d(5),f(19,!(e.myForm==null||e.myForm.controls==null||e.myForm.controls.password==null)&&e.myForm.controls.password.touched?19:-1))},dependencies:[w,D,L,j,S,x,M,B,k,z,N,I,P,E,R,O,V,G,A],styles:[".main-container[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}.wrap-login100[_ngcontent-%COMP%]{width:400px;height:auto;background:#fff;border-radius:10px;padding:30px 20px}.login100-form-title[_ngcontent-%COMP%]{display:block;font-family:poppins!important;font-size:45px;color:#333;line-height:1.2;text-align:center;font-weight:400;font-family:fantasy;letter-spacing:3px}.button-container[_ngcontent-%COMP%]{width:100%;text-align:center;margin:15px 0}.login100-form-btn[_ngcontent-%COMP%]{font-size:18px;font-family:system-ui;border:none;color:#fff;text-align:center;background:#a64bf4;padding:8px 30px;border-radius:4px;cursor:pointer}.wrap-login100-form-btn[_ngcontent-%COMP%]{margin-top:20px}label[_ngcontent-%COMP%]{font-family:poppins!important;display:block;padding-bottom:8px;font-size:16px}.seprator[_ngcontent-%COMP%]{padding:5px 0}"]});let t=i;return t})();export{vt as RegisterComponent};