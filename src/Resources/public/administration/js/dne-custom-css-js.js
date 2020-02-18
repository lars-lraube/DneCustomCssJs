(this.webpackJsonp=this.webpackJsonp||[]).push([["dne-custom-css-js"],{"/3Mh":function(e){e.exports=JSON.parse('{"dne-customcssjs":{"modules":{"menu":"Custom CSS/JS","title":"CSS/JS Container","addModulesButton":"Add Container","nameLabel":"Name","cssLabel":"CSS/SCSS","jsLabel":"JavaScript","activeLabel":"Active","saveButton":"Save","saveCompileButton":"Save & Compile","cancelButton":"Cancel"}}}')},"1wbK":function(e,t){const{Component:s}=Shopware;s.extend("dne-module-create","dne-module-detail",{methods:{getModule(){this.module=this.repository.create(Shopware.Context.api)},onClickSave(){this.isLoading=!0,this.repository.save(this.module,Shopware.Context.api).then(()=>{this.isLoading=!1,this.$router.push({name:"dne.module.list"})}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:"Error",message:e})})}}})},"380L":function(e){e.exports=JSON.parse('{"dne-customcssjs":{"modules":{"menu":"Custom CSS/JS","title":"CSS/JS Container","addModulesButton":"Container hinzufügen","nameLabel":"Name","cssLabel":"CSS/SCSS","jsLabel":"JavaScript","activeLabel":"Aktiv","saveButton":"Speichern","saveCompileButton":"Speichern & Kompilieren","cancelButton":"Abbrechen"}}}')},Zc3j:function(e,t){e.exports='{% block dne_module_detail %}\n    <sw-page class="dne-module-detail">\n        <template slot="smart-bar-actions">\n            <sw-button :routerLink="{ name: \'dne.module.list\' }">\n                {{ $t(\'dne-customcssjs.modules.cancelButton\') }}\n            </sw-button>\n\n            <sw-button-process\n                    :isLoading="isLoading"\n                    :processSuccess="processSuccess"\n                    variant="primary"\n                    @process-finish="saveFinish"\n                    @click="onClickSave">\n                {{ $t(\'dne-customcssjs.modules.saveButton\') }}\n            </sw-button-process>\n\n            <sw-button-process\n                :isLoading="isLoading"\n                :processSuccess="processSuccess"\n                variant="primary"\n                @process-finish="saveFinish"\n                @click="onClickSaveCompile">\n                {{ $t(\'dne-customcssjs.modules.saveCompileButton\') }}\n            </sw-button-process>\n        </template>\n\n        <template slot="content">\n            <sw-card-view>\n                <sw-card v-if="module" :isLoading="isLoading">\n                    <sw-checkbox-field :label="$t(\'dne-customcssjs.modules.activeLabel\')" v-model="module.active"></sw-checkbox-field>\n\n                    <sw-field :label="$t(\'dne-customcssjs.modules.nameLabel\')" v-model="module.name"></sw-field>\n\n                    <sw-code-editor\n                        :label="$t(\'dne-customcssjs.modules.cssLabel\')"\n                        name="css"\n                        identifier="value"\n                        completionMode="entity"\n                        :editorConfig="editorConfigSass"\n                        v-model="module.css">\n                    </sw-code-editor>\n\n                    <sw-code-editor\n                        :label="$t(\'dne-customcssjs.modules.jsLabel\')"\n                        name="js"\n                        identifier="value"\n                        completionMode="entity"\n                        :editorConfig="editorConfigJs"\n                        v-model="module.js">\n                    </sw-code-editor>\n                </sw-card>\n            </sw-card-view>\n        </template>\n    </sw-page>\n{% endblock %}\n'},j7kl:function(e,t){e.exports='{% block dne_module_list %}\n    <sw-page class="dne-module-list">\n        {% block dne_module_list_smart_bar_actions %}\n            <template slot="smart-bar-actions">\n                <sw-button variant="primary" :routerLink="{ name: \'dne.module.create\' }">\n                    {{ $t(\'dne-customcssjs.modules.addModulesButton\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n\n        <template slot="content">\n            {% block dne_module_list_content %}\n                <sw-entity-listing\n                        v-if="modules"\n                        :items="modules"\n                        :repository="repository"\n                        :showSelection="false"\n                        :columns="columns"\n                        detailRoute="dne.module.detail">\n                </sw-entity-listing>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n'},jIcv:function(e,t,s){"use strict";s.r(t);var n=s("j7kl"),o=s.n(n);const{Component:i}=Shopware,{Criteria:a}=Shopware.Data;i.register("dne-module-list",{template:o.a,inject:["repositoryFactory","context"],data:()=>({repository:null,modules:null}),metaInfo(){return{title:this.$createTitle()}},computed:{columns(){return[{property:"name",dataIndex:"name",label:this.$t("dne-customcssjs.modules.nameLabel"),routerLink:"dne.module.detail",inlineEdit:"string",allowResize:!0,primary:!0}]}},created(){this.repository=this.repositoryFactory.create("dne_custom_js_css"),this.repository.search(new a,Shopware.Context.api).then(e=>{this.modules=e})}});var c=s("Zc3j"),l=s.n(c);const{Component:r,Mixin:d}=Shopware;r.register("dne-module-detail",{template:l.a,inject:["repositoryFactory","context"],mixins:[d.getByName("notification")],metaInfo(){return{title:this.$createTitle()}},data:()=>({syncService:null,httpClient:null,module:null,isLoading:!1,processSuccess:!1,repository:null}),computed:{editorConfigJs:()=>({mode:"ace/mode/javascript"}),editorConfigSass:()=>({mode:"ace/mode/css"})},created(){this.repository=this.repositoryFactory.create("dne_custom_js_css"),this.getModule(),this.syncService=Shopware.Service("syncService"),this.httpClient=this.syncService.httpClient},methods:{getModule(){this.repository.get(this.$route.params.id,Shopware.Context.api).then(e=>{this.module=e})},onClickSave(){return this.isLoading=!0,this.repository.save(this.module,Shopware.Context.api).then(()=>{this.getModule(),this.isLoading=!1,this.processSuccess=!0}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:"Error",message:e})})},onClickSaveCompile(){this.onClickSave().then(()=>{this.isLoading=!0;const e={Authorization:`Bearer ${Shopware.Context.api.authToken.access}`,"Content-Type":"application/json"};this.httpClient.get("_action/dne-customcssjs/compile",{headers:e}).then(()=>{this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:"Error",message:e})})})},saveFinish(){this.processSuccess=!1}}});s("1wbK");var m=s("380L"),u=s("/3Mh");const{Module:p}=Shopware;p.register("dne-module",{color:"#ff3d58",icon:"default-text-code",title:"dne-customcssjs.modules.title",description:"",snippets:{"de-DE":m,"en-GB":u},routes:{list:{component:"dne-module-list",path:"list"},detail:{component:"dne-module-detail",path:"detail/:id",meta:{parentPath:"dne.module.list"}},create:{component:"dne-module-create",path:"create",meta:{parentPath:"dne.module.list"}}},navigation:[{label:"dne-customcssjs.modules.menu",color:"#ff3d58",path:"dne.module.list",icon:"default-text-code",position:100}]})}},[["jIcv","runtime"]]]);