(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,e,a){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,c){var l=o.URL||o.webkitURL,b=document.createElement("a");b.download=i=i||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?n(b):a(b.href)?e(t,i,c):n(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){n(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(a(t))e(t,o,i);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){n(c)})}}:function(t,a,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var l="application/octet-stream"===t.type,b=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&b||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},d.readAsDataURL(t)}else{var r=o.URL||o.webkitURL,u=r.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){r.revokeObjectURL(u)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?n.apply(e,[]):n)||(t.exports=o)},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return T});var n=a("0IaG"),o=a("fXoL"),i=a("H+bZ"),c=a("kmnG"),l=a("qFsG"),b=a("3Pt+"),s=a("bTqV");let d=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a}ngOnInit(){}saveData(){this.loading=!0,console.log(this.data),null==this.data.id?this.api.post("bookswithauth/",this.data).subscribe(t=>{this.dialogRef.close(this.data),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("bookswithauth/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),console.log(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(n.g),o.Qb(n.a),o.Qb(i.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-product-detail"]],decls:32,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"click"]],template:function(t,e){1&t&&(o.Wb(0,"h3",0),o.Hc(1," Detail Produk "),o.Vb(),o.Wb(2,"div",1),o.Wb(3,"mat-form-field",2),o.Wb(4,"mat-label"),o.Hc(5,"Judul"),o.Vb(),o.Wb(6,"input",3),o.gc("ngModelChange",function(t){return e.data.title=t}),o.Vb(),o.Vb(),o.Wb(7,"mat-form-field",2),o.Wb(8,"mat-label"),o.Hc(9,"Penulis"),o.Vb(),o.Wb(10,"input",3),o.gc("ngModelChange",function(t){return e.data.author=t}),o.Vb(),o.Vb(),o.Wb(11,"mat-form-field",2),o.Wb(12,"mat-label"),o.Hc(13,"Penerbit"),o.Vb(),o.Wb(14,"input",3),o.gc("ngModelChange",function(t){return e.data.publisher=t}),o.Vb(),o.Vb(),o.Wb(15,"mat-form-field",2),o.Wb(16,"mat-label"),o.Hc(17,"Tahun Terbit"),o.Vb(),o.Wb(18,"input",4),o.gc("ngModelChange",function(t){return e.data.year=t}),o.Vb(),o.Vb(),o.Wb(19,"mat-form-field",2),o.Wb(20,"mat-label"),o.Hc(21,"ISBN"),o.Vb(),o.Wb(22,"input",4),o.gc("ngModelChange",function(t){return e.data.isbn=t}),o.Vb(),o.Vb(),o.Wb(23,"mat-form-field",2),o.Wb(24,"mat-label"),o.Hc(25,"Harga"),o.Vb(),o.Wb(26,"input",4),o.gc("ngModelChange",function(t){return e.data.price=t}),o.Vb(),o.Vb(),o.Vb(),o.Wb(27,"div",5),o.Wb(28,"button",6),o.Hc(29,"Batal"),o.Vb(),o.Wb(30,"button",7),o.gc("click",function(){return e.saveData()}),o.Hc(31),o.Vb(),o.Vb()),2&t&&(o.Db(6),o.pc("ngModel",e.data.title),o.Db(4),o.pc("ngModel",e.data.author),o.Db(4),o.pc("ngModel",e.data.publisher),o.Db(4),o.pc("ngModel",e.data.year),o.Db(4),o.pc("ngModel",e.data.isbn),o.Db(4),o.pc("ngModel",e.data.price),o.Db(5),o.Jc(" ",e.loading?"Menyimpan..":"Simpan",""))},directives:[n.h,n.e,c.b,c.e,l.b,b.c,b.i,b.l,b.n,n.c,s.a,n.d],styles:[""]}),t})(),r=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("book/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a),o.Qb(n.g),o.Qb(n.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-actions","","align","right"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"h1",0),o.Hc(1,"Unggah File"),o.Vb(),o.Wb(2,"div",1),o.Wb(3,"div",2),o.gc("click",function(){return o.zc(t),o.xc(7).click()}),o.Wb(4,"span"),o.Hc(5),o.Vb(),o.Vb(),o.Wb(6,"input",3,4),o.gc("change",function(t){return e.onFileChange(t)}),o.Vb(),o.Vb(),o.Wb(8,"div",5),o.Wb(9,"button",6),o.Hc(10,"Cancel"),o.Vb(),o.Wb(11,"button",7),o.gc("click",function(){return e.uploadFile()}),o.Hc(12),o.Vb(),o.Vb()}2&t&&(o.Db(5),o.Ic(e.selectedFile?e.selectedFile.name:"Pilih File"),o.Db(6),o.pc("disabled",e.loadingUpload),o.Db(1),o.Ic(e.loadingUpload?"Uploading..":"Upload"))},styles:[""]}),t})();var u=a("Iab2"),p=a("tyNb"),g=a("ofXK"),h=a("Xa2L"),f=a("Wp6s"),m=a("NFeN");function k(t,e){1&t&&(o.Wb(0,"div",2),o.Rb(1,"mat-spinner"),o.Vb())}function V(t,e){1&t&&(o.Wb(0,"button",11),o.Wb(1,"mat-icon"),o.Hc(2,"download"),o.Vb(),o.Vb())}function W(t,e){if(1&t){const t=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td"),o.Fc(2,V,3,0,"button",8),o.Vb(),o.Wb(3,"td"),o.Hc(4),o.Vb(),o.Wb(5,"td"),o.Hc(6),o.Vb(),o.Wb(7,"td"),o.Hc(8),o.Vb(),o.Wb(9,"td"),o.Hc(10),o.Vb(),o.Wb(11,"td"),o.Hc(12),o.Vb(),o.Wb(13,"td"),o.Hc(14),o.Vb(),o.Wb(15,"td"),o.Hc(16),o.Vb(),o.Wb(17,"td"),o.Wb(18,"button",9),o.gc("click",function(){o.zc(t);const a=e.$implicit,n=e.index;return o.kc(2).productDetail(a,n)}),o.Hc(19,"Edit"),o.Vb(),o.Wb(20,"button",10),o.gc("click",function(){o.zc(t);const a=e.$implicit,n=e.index;return o.kc(2).deleteProduct(a.id,n)}),o.Hc(21),o.Vb(),o.Vb(),o.Wb(22,"td"),o.Wb(23,"button",9),o.gc("click",function(){o.zc(t);const a=e.$implicit;return o.kc(2).uploadFile(a)}),o.Hc(24,"Upload"),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=e.$implicit,a=e.index,n=o.kc(2);o.Db(2),o.pc("ngIf",""!=t.url),o.Db(2),o.Ic(a+1),o.Db(2),o.Ic(t.title),o.Db(2),o.Ic(t.author),o.Db(2),o.Ic(t.publisher),o.Db(2),o.Ic(t.year),o.Db(2),o.Ic(t.isbn),o.Db(2),o.Ic(t.price),o.Db(4),o.pc("disabled",n.loadingDelete[a]),o.Db(1),o.Ic(n.loadingDelete[a]?"Menghapus..":"Delete")}}function v(t,e){if(1&t){const t=o.Xb();o.Wb(0,"mat-card"),o.Wb(1,"mat-card-header"),o.Wb(2,"mat-card-title"),o.Hc(3,"Products"),o.Vb(),o.Vb(),o.Wb(4,"mat-card-content"),o.Wb(5,"div",3),o.Rb(6,"span",4),o.Wb(7,"button",5),o.gc("click",function(){return o.zc(t),o.kc().productDetail({},-1)}),o.Hc(8,"Tambah Produk"),o.Vb(),o.Vb(),o.Wb(9,"table",6),o.Wb(10,"thead"),o.Rb(11,"th"),o.Wb(12,"th"),o.Hc(13,"No"),o.Vb(),o.Wb(14,"th"),o.Hc(15,"Judul"),o.Vb(),o.Wb(16,"th"),o.Hc(17,"Penulis"),o.Vb(),o.Wb(18,"th"),o.Hc(19,"Penerbit"),o.Vb(),o.Wb(20,"th"),o.Hc(21,"Tahun Terbit"),o.Vb(),o.Wb(22,"th"),o.Hc(23,"ISBN"),o.Vb(),o.Wb(24,"th"),o.Hc(25,"Harga"),o.Vb(),o.Vb(),o.Wb(26,"tbody"),o.Fc(27,W,25,10,"tr",7),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=o.kc();o.Db(27),o.pc("ngForOf",t.books)}}let w=(()=>{class t{constructor(t,e,a){this.dialog=t,this.api=e,this.router=a,this.loadingDelete={},this.books=[]}ngOnInit(){this.checkLogin(),this.getBooks()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1,alert("Silahkan reload halaman")})}productDetail(t,e){this.dialog.open(d,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}deleteProduct(t,e){confirm("Yakin menghapus data "+t+" ?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")}))}uploadFile(t){this.dialog.open(r,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){u.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(n.b),o.Qb(i.a),o.Qb(p.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-products"]],decls:2,vars:2,consts:[["style","height: 300px","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],[4,"ngFor","ngForOf"],["mat-icon-button","",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button",""]],template:function(t,e){1&t&&(o.Fc(0,k,2,0,"div",0),o.Fc(1,v,28,1,"mat-card",1)),2&t&&(o.pc("ngIf",e.loading),o.Db(1),o.pc("ngIf",!e.loading))},directives:[g.l,h.b,f.a,f.c,f.e,f.b,s.a,g.k,m.a],styles:[""]}),t})();var x=a("/t3+"),H=a("XhcP"),y=a("MutI"),D=a("FKr1");let I=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side"}ngOnInit(){}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logOut(){confirm("Yakin ingin keluar ?")&&(localStorage.removeItem("authToken"),this.router.navigate(["/home"]))}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a),o.Qb(p.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-home-admin"]],decls:28,vars:9,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side",1,"sidenav-left",3,"position","opened","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","dashboard"],["matListIcon",""],["matLine",""],["routerLink","products"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=o.Xb();o.Ub(0),o.Wb(1,"mat-toolbar",0),o.Wb(2,"button",1),o.gc("click",function(){return o.zc(t),o.xc(12).toggle()}),o.Wb(3,"mat-icon"),o.Hc(4,"menu"),o.Vb(),o.Vb(),o.Wb(5,"span"),o.Hc(6,"Niken's Book Store"),o.Vb(),o.Rb(7,"div",2),o.Wb(8,"button",3),o.gc("click",function(){return e.logOut()}),o.Hc(9,"Logout"),o.Vb(),o.Vb(),o.Wb(10,"mat-sidenav-container",4),o.Wb(11,"mat-sidenav",5,6),o.Wb(13,"mat-nav-list"),o.Wb(14,"mat-list-item",7),o.Wb(15,"mat-icon",8),o.Hc(16,"dashboard"),o.Vb(),o.Wb(17,"h3",9),o.Hc(18,"Dashboard"),o.Vb(),o.Vb(),o.Wb(19,"mat-list-item",10),o.Wb(20,"mat-icon",8),o.Hc(21,"camera_enhance"),o.Vb(),o.Wb(22,"h3",9),o.Hc(23,"Product"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Rb(24,"mat-sidenav",11,6),o.Wb(26,"mat-sidenav-content",12),o.Rb(27,"router-outlet"),o.Vb(),o.Vb(),o.Tb()}2&t&&(o.Db(11),o.pc("position","start")("opened",!0)("fixedInViewport",!0)("fixedTopGap",70)("fixedBottomGap",0),o.Db(13),o.pc("position","end")("fixedInViewport",!0)("fixedTopGap",65)("fixedBottomGap",0))},directives:[x.a,s.a,m.a,H.b,H.a,y.d,y.b,p.b,y.a,D.j,H.c,p.e],styles:[".example-container[_ngcontent-%COMP%]{position:absolute;top:60px;bottom:0;left:0;right:0}.example-sidenav[_ngcontent-%COMP%]{width:350px}.example-sidenav[_ngcontent-%COMP%], .sidenav-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sidenav-left[_ngcontent-%COMP%]{width:250px}"]}),t})(),M=(()=>{class t{constructor(t,e){this.api=t,this.router=e}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a),o.Qb(p.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Wb(0,"p"),o.Hc(1,"dashboard works!"),o.Vb())},styles:[""]}),t})();var F=a("w55g");const L=[{path:"",component:I,children:[{path:"dashboard",component:M},{path:"products",component:w},{path:"",redirectTo:"/admin/dashboard",pathMatch:"full"}]}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[g.c,p.d.forChild(L),F.a,b.e]]}),t})()}}]);