import{e as v}from"./chunk-YOO2SR3D.js";import{F as x,H as d,I as b,K as u,L as e,M as t,N as r,R as i,S as p,T as y,ga as s,p as c,u as g,v as f}from"./chunk-XQAECYGG.js";var m=class a{constructor(n){this.authService=n}user=null;ngOnInit(){this.authService.getUser().subscribe(n=>{this.user=n},n=>{console.error("Error al cargar el usuario:",n)})}getProfilePicture(){return this.user?.photoURL||"https://via.placeholder.com/100"}static \u0275fac=function(o){return new(o||a)(b(v))};static \u0275cmp=g({type:a,selectors:[["app-mi-perfil"]],standalone:!0,features:[y],decls:68,vars:4,consts:[[1,"container","mx-auto","mt-28","grid","grid-cols-1","lg:grid-cols-4","gap-4"],[1,"bg-white","rounded-lg","shadow-lg","p-6"],[1,"text-xl","font-semibold","text-gray-800"],[1,"mt-4","space-y-2"],["href","#",1,"text-gray-600","hover:text-blue-500"],[1,"col-span-1","lg:col-span-3","bg-white","rounded-lg","shadow-lg","p-6"],[1,"flex","flex-col","items-center"],["for","profilePictureInput",1,"cursor-pointer"],["alt","Foto de perfil","id","profilePicture",1,"rounded-full","border","border-gray-300","w-24","h-24","object-cover",3,"src"],[1,"text-center","mt-4"],[1,"text-2xl","font-semibold","text-gray-800"],[1,"text-gray-600"],[1,"mt-2","text-gray-500"],[1,"mt-6"],[1,"text-lg","font-semibold","text-gray-800"],["rows","3","placeholder","Escribe tu biograf\xEDa aqu\xED...",1,"mt-1","border","border-gray-300","rounded-lg","w-full","p-2"],[1,"mt-6","grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"mt-1","text-gray-700"],["type","date",1,"border","border-gray-300","rounded-lg","w-full","p-2"],[1,"border","border-gray-300","rounded-lg","w-full","p-2"],["value","masculino"],["value","femenino"],["value","otro"],["type","text","placeholder","Ej. Tecnolog\xEDa, Deportes",1,"border","border-gray-300","rounded-lg","w-full","p-2"],["type","email","placeholder","usuario@ejemplo.com","readonly","",1,"border","border-gray-300","rounded-lg","w-full","p-2",3,"value"],["type","tel","placeholder","+1 (123) 456-7890",1,"border","border-gray-300","rounded-lg","w-full","p-2"],["type","url","placeholder","https://ejemplo.com",1,"border","border-gray-300","rounded-lg","w-full","p-2"],[1,"mt-6","flex","justify-center","space-x-4"],[1,"bg-blue-500","text-white","px-4","py-2","rounded-lg","hover:bg-blue-600","focus:outline-none"],[1,"bg-transparent","border","border-gray-300","text-gray-800","px-4","py-2","rounded-lg","hover:bg-gray-200","focus:outline-none"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),i(3,"Men\xFA"),t(),e(4,"ul",3)(5,"li")(6,"a",4),i(7,"Perfil"),t()(),e(8,"li")(9,"a",4),i(10,"Historial de Actividad"),t()(),e(11,"li")(12,"a",4),i(13,"Seguridad y Privacidad"),t()(),e(14,"li")(15,"a",4),i(16,"Ayuda y Soporte"),t()()()(),e(17,"div",5)(18,"div",6)(19,"label",7),r(20,"img",8),t()(),e(21,"div",9)(22,"h1",10),i(23),t(),e(24,"p",11),i(25),t(),e(26,"p",12),i(27,"Ubicaci\xF3n: Ciudad, Pa\xEDs"),t()(),e(28,"div",13)(29,"h2",14),i(30,"Biograf\xEDa"),t(),r(31,"textarea",15),t(),e(32,"div",16)(33,"div")(34,"h2",14),i(35,"Informaci\xF3n Adicional"),t(),e(36,"p",17),i(37,"Fecha de Nacimiento: "),r(38,"input",18),t(),e(39,"p",17),i(40,"G\xE9nero: "),e(41,"select",19)(42,"option",20),i(43,"Masculino"),t(),e(44,"option",21),i(45,"Femenino"),t(),e(46,"option",22),i(47,"Otro"),t()()(),e(48,"p",17),i(49,"Intereses: "),r(50,"input",23),t()(),e(51,"div")(52,"h2",14),i(53,"Contacto"),t(),e(54,"p",17),i(55,"Email: "),r(56,"input",24),t(),e(57,"p",17),i(58,"Tel\xE9fono: "),r(59,"input",25),t(),e(60,"p",17),i(61,"Sitio Web: "),r(62,"input",26),t()()(),e(63,"div",27)(64,"button",28),i(65,"Guardar Cambios"),t(),e(66,"button",29),i(67,"Cancelar"),t()()()()),o&2&&(d(20),u("src",l.getProfilePicture(),x),d(3),p((l.user==null?null:l.user.displayName)||"Nombre del Usuario"),d(2),p((l.user==null?null:l.user.email)||"usuario@ejemplo.com"),d(31),u("value",l.user==null?null:l.user.email))}})};var S=[{path:"",redirectTo:"user",pathMatch:"full"},{path:"user",component:m}],h=class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=f({type:a});static \u0275inj=c({imports:[s.forChild(S),s]})};export{h as ModulePerfilModule};