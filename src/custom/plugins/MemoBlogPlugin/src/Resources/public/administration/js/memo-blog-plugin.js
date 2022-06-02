!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/administration/",n(n.s="hIAp")}({"+AOe":function(e,t){e.exports='{% block memo_blog_detail_base %}\n    <div class="memo-blog-detail-base">\n        {% block memo_blog_detail_base_info_holder %}\n            <div class="memo-blog-detail-base__info-holder">\n\n                <template v-if="!blogEditMode">\n                    {% block memo_blog_detail_base_info_card %}\n                        <sw-card :title="blog.name">\n                            <sw-time-ago :date="blog.date"/>\n                            <div v-html="blog.text"></div>\n                        </sw-card>\n                    {% endblock %}\n                </template>\n\n                <template v-else>\n                    {% block memo_blog_detail_base_form %}\n                        <sw-card :title="$t(\'memo-blog.card.general\')">\n                            <sw-text-field v-model="blog.name"\n                                           :label="$t(\'memo-blog.label.name\')"/>\n\n                            <sw-container columns="1fr 1fr" gap="32px">\n                                <sw-datepicker v-model="blog.date"\n                                               :label="$t(\'memo-blog.label.date\')"\n                                               dateType="datetime"\n                                />\n\n                                <sw-switch-field v-model="blog.active"\n                                                 :label="$t(\'memo-blog.label.active\')"/>\n                            </sw-container>\n\n                            <sw-text-editor v-model="blog.text"\n                                            :label="$t(\'memo-blog.label.text\')"/>\n                        </sw-card>\n                    {% endblock %}\n                </template>\n            </div>\n        {% endblock %}\n    </div>\n{% endblock %}\n'},"898E":function(e){e.exports=JSON.parse('{"memo.blog.detail.base":{"blog":["name"]}}')},"99m0":function(e,t){e.exports='{%  block memo_blog_create %}\n    <sw-page class="memo-blog-create">\n\n        {% block memo_blog_create_header %}\n            <template #smart-bar-header>\n                <h2>{{ blogTitle() }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_create_actions %}\n            <template #smart-bar-actions>\n                <sw-button-process\n                    class="memo-blog-create__save-action"\n                    :isLoading="isLoading"\n                    :disabled="isLoading"\n                    :processSuccess="isSaveSuccessful"\n                    variant="primary"\n                    @process-finish="saveFinish"\n                    @click.prevent="onSave">\n\n                    {{ $t(\'memo-blog.button.save\') }}\n                </sw-button-process>\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_create_content %}\n            <template #content>\n                <sw-card-view>\n                    <sw-card :title="$t(\'memo-blog.card.general\')">\n                        {% block memo_blog_create_base_form %}\n                            <sw-text-field v-model="blog.name"\n                                           :label="$t(\'memo-blog.label.name\')"/>\n\n                            <sw-container columns="1fr 1fr" gap="32px">\n                                <sw-datepicker v-model="blog.date"\n                                               :label="$t(\'memo-blog.label.date\')"\n                                               dateType="datetime"\n                                />\n\n                                <sw-switch-field v-model="blog.active"\n                                                 :label="$t(\'memo-blog.label.active\')"/>\n                            </sw-container>\n\n                            <sw-text-editor v-model="blog.text"\n                                            :label="$t(\'memo-blog.label.text\')"/>\n                        {% endblock %}\n                    </sw-card>\n                </sw-card-view>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},DQG3:function(e,t,n){},ODOM:function(e,t){e.exports='{% block sw_search_bar_item_product %}\n    {% parent %}\n\n    {{ type }}\n\n    <router-link v-else-if="type === \'memo_blog\'"\n                 :to="{ name: \'memo.blog.detail\', params: { id: item.id } }"\n                 ref="routerLink"\n                 class="sw-search-bar-item__link">\n        {% block sw_search_bar_item_memo_auction_label %}\n            <span class="sw-search-bar-item__label">\n                <sw-highlight-text v-bind:searchTerm="searchTerm"\n                                   v-bind:text="item.name">\n                </sw-highlight-text>\n            </span>\n        {% endblock %}\n    </router-link>\n{% endblock %}\n'},PzYN:function(e){e.exports=JSON.parse('{"global":{"entities":{"memo_blog":"Blog | Blogs"}},"memo-blog":{"button":{"add":"Add blog","cancel":"Cancel","delete":"Delete","edit":"Edit","save":"Save"},"general":{"title":"Blogs","description":"Manage blogs here","searchBar":{"placeholder":"Search blogs..."},"save":{"success":{"title":"Success","message":"Blog \\"{name}\\" has been saved."},"error":{"title":"Error","message":"Blog could not be saved."}}},"list":{"column":{"name":"Name","date":"Date","active":"Active"},"contextMenu":{"view":"View blog","edit":"Edit blog","delete":"Delete blog"},"empty":"No blogs","sidebar":{"refresh":"Refresh list"},"text":{"header":{"title":"Blogs"},"modal":{"title":"Delete blog?","description":"Are you sure you want to delete \\"%name%\\"?"}}},"menu":{"index":"Blogs"},"title":"New blog","card":{"general":"General"},"label":{"name":"Name","date":"Date","active":"Active","text":"Text"},"tabs":{"general":"General"}}}')},SZ7m:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},i=0;i<t.length;i++){var a=t[i],l=a[0],r={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};o[l]?o[l].parts.push(r):n.push(o[l]={id:l,parts:[r]})}return n}n.r(t),n.d(t,"default",(function(){return u}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},l=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,s=0,c=!1,m=function(){},d=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(e,t,n,i){c=n,d=i||{};var l=o(e,t);return p(l),function(t){for(var n=[],i=0;i<l.length;i++){var r=l[i];(s=a[r.id]).refs--,n.push(s)}t?p(l=o(e,t)):l=[];for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var l=[];for(i=0;i<n.parts.length;i++)l.push(f(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:l}}}}function _(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function f(e){var t,n,o=document.querySelector("style["+b+'~="'+e.id+'"]');if(o){if(c)return m;o.parentNode.removeChild(o)}if(g){var i=s++;o=r||(r=_()),t=w.bind(null,o,i,!1),n=w.bind(null,o,i,!0)}else o=_(),t=k.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var h,v=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function w(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var a=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function k(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),d.ssrId&&e.setAttribute(b,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},Vfx3:function(e,t){e.exports='{% block memo_blog_detail %}\n    <sw-page class="memo-blog-detail">\n        {% block memo_blog_detail_header %}\n            <template #smart-bar-header>\n                <h2 v-if="blog">{{ blog.name }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_detail_actions %}\n            <template #smart-bar-actions>\n                {% block memo_blog_detail_actions_edit %}\n                    <sw-button v-if="!editMode"\n                               class="memo-blog-detail__open-edit-mode-action"\n                               variant="primary"\n                               :disabled="isLoading"\n                               @click.prevent="onActivateBlogEditMode">\n                        {{ $tc(\'memo-blog.button.edit\') }}\n                    </sw-button>\n                {% endblock %}\n\n                <template v-else>\n                    {% block memo_blog_detail_actions_cancel %}\n                        <sw-button :disabled="isLoading" @click="onAbortButtonClick">\n                            {{ $tc(\'memo-blog.button.cancel\') }}\n                        </sw-button>\n                    {% endblock %}\n\n                    {% block memo_blog_detail_actions_save %}\n                        <sw-button-process\n                                class="memo-blog-detail__save-action"\n                                :isLoading="isLoading"\n                                :processSuccess="isSaveSuccessful"\n                                animationTimeout="2000"\n                                :disabled="isLoading"\n                                variant="primary"\n                                @process-finish="saveFinish"\n                                @click.prevent="onSave">\n                            {{ $tc(\'memo-blog.button.save\') }}\n                        </sw-button-process>\n                    {% endblock %}\n                </template>\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_detail_content %}\n            <template #content>\n                <sw-card-view>\n                    {% block memo_blog_detail_content_tabs %}\n                        <sw-tabs class="memo-blog-detail-page__tabs">\n                            {% block memo_blog_detail_content_tab_general %}\n                                <sw-tabs-item class="memo-blog-detail__tab-general"\n                                              :route="generalRoute"\n                                              :title="$tc(\'memo-blog.tabs.general\')"\n                                              :hasError="memoBlogDetailBaseError">\n                                    {{ $tc(\'memo-blog.tabs.general\') }}\n                                </sw-tabs-item>\n                            {% endblock %}\n                        </sw-tabs>\n                    {% endblock %}\n\n                    {% block memo_blog_detail_content_view %}\n                        <router-view v-if="blog"\n                                     :blog="blog"\n                                     :blogEditMode="editMode"\n                                     :isLoading="isLoading">\n                        </router-view>\n                    {% endblock %}\n                </sw-card-view>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},a8pF:function(e,t,n){var o=n("DQG3");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("2460715e",o,!0,{})},hIAp:function(e,t,n){"use strict";n.r(t);var o=n("ODOM"),i=n.n(o);Shopware.Component.override("sw-search-bar-item",{template:i.a});var a=n("md3n"),l=n.n(a),r=(n("a8pF"),Shopware),s=r.Component,c=r.Mixin,m=Shopware.Data.Criteria;s.register("memo-blog-list",{template:l.a,inject:["repositoryFactory"],mixins:[c.getByName("notification"),c.getByName("listing")],data:function(){return{blogs:null,sortBy:"name",sortDirection:"DESC",isLoading:!1,total:0}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return[{property:"name",dataIndex:"name",label:this.$t("memo-blog.list.column.name"),routerLink:"memo.blog.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"date",label:this.$t("memo-blog.list.column.date"),allowResize:!1},{property:"active",label:this.$t("memo-blog.list.column.active"),inlineEdit:!0,allowResize:!0}]},repository:function(){return this.repositoryFactory.create("memo_blog")}},methods:{getList:function(){var e=this;this.isLoading=!0;var t=new m(this.page,this.limit);return t.setTerm(this.term),t.addSorting(m.sort(this.sortBy,this.sortDirection)),Promise.all([this.repository.search(t,Shopware.Context.api)]).then((function(t){var n=t[0];e.total=n.total,e.blogs=n,e.isLoading=!1,e.selection={}})).catch((function(){e.isLoading=!1}))},onInlineEditSave:function(e,t){var n=this;return e.then((function(){n.createNotificationSuccess({title:n.$t("memo-blogs.general.save.success.title"),message:n.$t("memo-blogs.general.save.success.message",{name:t.name})})})).catch((function(){n.getList(),n.createNotificationError({title:n.$t("memo-blogs.general.save.error.title"),message:n.$t("memo-blogs.general.save.error.message")})}))},onInlineEditCancel:function(e){e.discardChanges()},updateTotal:function(e){var t=e.total;this.total=t}},created:function(){this.getList()}});var d=n("99m0"),b=n.n(d),g=Shopware,u=g.Component,p=g.Mixin;u.register("memo-blog-create",{template:b.a,inject:["repositoryFactory","acl"],mixins:[p.getByName("notification"),p.getByName("placeholder")],data:function(){return{blog:null,isSaveSuccessful:!1,isLoading:!1}},computed:{blogRepository:function(){return this.repositoryFactory.create("memo_blog")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.blog=this.blogRepository.create(Shopware.Context.api)},blogTitle:function(){return this.placeholder(this.blog,"name",this.$t("memo-blog.title"))},saveFinish:function(){this.isSaveSuccessful=!1,this.$router.push({name:"memo.blog.detail",params:{id:this.blog.id},query:{edit:!1}})},onSave:function(){var e=this;this.isLoading=!0,this.isSaveSuccessful=!1,this.blogRepository.save(this.blog,Shopware.Context.api).then((function(){e.createNotificationSuccess({title:e.$t("memo-blog.general.save.success.title"),message:e.$t("memo-blog.general.save.success.message",{name:e.blog.name})}),e.isLoading=!1,e.isSaveSuccessful=!0})).catch((function(){e.createNotificationError({title:e.$t("memo-blog.general.save.error.title"),message:e.$t("memo-blog.general.save.error.message")}),e.isLoading=!1}))}}});var _=n("Vfx3"),f=n.n(_),h=n("898E");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=Shopware,y=k.Component,S=k.Mixin,x=Shopware.Data.Criteria,B=Shopware.Component.getComponentHelper().mapPageErrors;y.register("memo-blog-detail",{template:f.a,inject:["repositoryFactory"],mixins:[S.getByName("notification"),S.getByName("discard-detail-page-changes")("memo_blog")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onAbortButtonClick"},props:{blogId:{type:String,required:!0}},data:function(){return{isLoading:!1,isSaveSuccessful:!1,blog:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({identifier:function(){return null!==this.blog?this.blog.name:""},blogRepository:function(){return this.repositoryFactory.create("memo_blog")},editMode:{get:function(){return"boolean"==typeof this.$route.query.edit?this.$route.query.edit:"true"===this.$route.query.edit},set:function(e){this.$router.push({name:this.$route.name,query:{edit:e}})}},defaultCriteria:function(){return new x},generalRoute:function(){return{name:"memo.blog.detail.base",params:{id:this.blogId},query:{edit:this.editMode}}}},B(h)),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.isLoading=!0,this.blogRepository.get(this.blogId,Shopware.Context.api,this.defaultCriteria).then((function(t){e.blog=t,e.isLoading=!1}))},saveFinish:function(){this.isSaveSuccessful=!1,this.editMode=!1},onSave:function(){var e=this;return!!this.editMode&&(this.isLoading=!0,this.isSaveSuccessful=!1,this.blogRepository.save(this.blog,Shopware.Context.api).then((function(){e.isLoading=!1,e.isSaveSuccessful=!0,e.createdComponent()})).catch((function(t){throw e.createNotificationError({title:e.$tc("memo-blog.detail.titleSaveError"),message:e.$tc("memo-blog.detail.messageSaveError")}),e.isLoading=!1,t})))},onAbortButtonClick:function(){this.discardChanges(),this.editMode=!1},onActivateBlogEditMode:function(){this.editMode=!0}}});var E=n("+AOe"),$=n.n(E);Shopware.Component.register("memo-blog-detail-base",{template:$.a,inject:["repositoryFactory"],props:{blog:{type:Object,required:!0},blogEditMode:{type:Boolean,required:!0,default:!1},isLoading:{type:Boolean,required:!1,default:!1}}});var C=n("PzYN"),L=n("lDbB");Shopware.Module.register("memo-blog",{type:"plugin",name:"blogs",title:"memo-blog.general.title",description:"memo-blog.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#009fe3",icon:"default-action-settings",entity:"memo_blog",snippets:{"de-DE":L,"en-GB":C},routes:{index:{components:{default:"memo-blog-list"},path:"index"},create:{components:{default:"memo-blog-create"},path:"create",meta:{parentPath:"memo.blog.index"}},detail:{components:{default:"memo-blog-detail"},path:"detail/:id",redirect:{name:"memo.blog.detail.base"},children:{base:{component:"memo-blog-detail-base",path:"base",meta:{parentPath:"memo.blog.index"}}},props:{default:function(e){return{blogId:e.params.id}}}}},navigation:[{id:"memo-blog.index",parent:"sw-content",label:"memo-blog.menu.index",color:"#009fe3",path:"memo.blog.index",position:10}]});n("sbtq")},lDbB:function(e){e.exports=JSON.parse('{"global":{"entities":{"memo_blog":"Blog | Blogs"}},"memo-blog":{"button":{"add":"Blog aanmaken","cancel":"Annuleren","delete":"Verwijderen","edit":"Bewerken","save":"Opslaan"},"general":{"title":"Blogs","description":"Beheer van blogs","searchBar":{"placeholder":"Doorzoek alle blogs..."},"save":{"success":{"title":"Succes","message":"Blog \\"{name}\\" is opgeslagen."},"error":{"title":"Error","message":"Auction kon niet worden opgeslagen."}}},"list":{"column":{"name":"Naam","client":"Opdrachtgever","active":"Actief"},"contextMenu":{"view":"Bekijk blog","edit":"Bewerk blog","delete":"Verwijder blog"},"empty":"Geen blogs","sidebar":{"refresh":"Ververs lijst"},"text":{"header":{"title":"Blogs"},"modal":{"title":"Blog verwijderen?","description":"Weet je zeker dat je \\"%name%\\" wilt verwijderen?"}}},"menu":{"index":"Blogs"},"title":"Nieuwe blog","card":{"general":"Algemeen"},"label":{"name":"Naam","date":"Datum","active":"Actief","text":"Tekst"},"tabs":{"general":"Algemeen"}}}')},md3n:function(e,t){e.exports='{% block memo_blog_list %}\n    <sw-page class="memo-blog-list">\n\n        {% block memo_blog_list_search_bar %}\n            <template #search-bar>\n                <sw-search-bar initialSearchType="memo_blog"\n                               :initialSearch="term"\n                               @search="onSearch">\n                </sw-search-bar>\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_list_smart_bar_header %}\n            <template #smart-bar-header>\n                {% block memo_blog_list_smart_bar_header_title %}\n                    <h2>\n                        {% block memo_blog_list_smart_bar_header_title_text %}\n                            {{ $tc(\'memo-blog.general.title\') }}\n                        {% endblock %}\n\n                        {% block memo_blog_list_smart_bar_header_amount %}\n                            <span v-if="!isLoading" class="sw-page__smart-bar-amount">\n                                ({{ total }})\n                            </span>\n                        {% endblock %}\n                    </h2>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block memo_blog_list_smart_bar_actions %}\n            <template #smart-bar-actions>\n                {% block memo_blog_list_smart_bar_actions_add %}\n                    <sw-button :routerLink="{ name: \'memo.blog.create\' }" variant="primary">\n                        {{ $tc(\'memo-blog.button.add\') }}\n                    </sw-button>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        <template #content>\n            {% block memo_blog_list_content %}\n                <div class="memo-blog-list__content">\n\n                    {% block memo_blog_list_grid %}\n                        <sw-entity-listing ref="memoBlogGrid"\n                                           class="memo-blog-list-grid"\n                                           detailRoute="memo.blog.detail"\n                                           :items="blogs"\n                                           :columns="columns"\n                                           :repository="repository"\n                                           :showSelection="false"\n                                           :isLoading="isLoading"\n                                           :allowInlineEdit="true"\n                                           @inline-edit-save="onInlineEditSave"\n                                           @update-records="updateTotal"\n                        >\n                            {% block memo_blog_list_grid_columns %}\n                                {% block memo_blog_list_grid_columns_name %}\n                                    <template #column-name="{ item, compact, isInlineEdit }">\n\n                                        {% block memo_blog_list_grid_inline_edit_name %}\n                                            <template v-if="isInlineEdit">\n                                                <sw-text-field class="memo-blog-list__inline-edit-last-name"\n                                                               v-model="item.name"\n                                                               :size="compact ? \'small\' : \'default\'">\n                                                </sw-text-field>\n                                            </template>\n                                        {% endblock %}\n\n                                        {% block memo_blog_list_grid_columns_name_link %}\n                                            <router-link v-else :to="{ name: \'memo.blog.detail.base\', params: { id: item.id }, query: { edit: false }}">\n                                                {{ item.name }}\n                                            </router-link>\n                                        {% endblock %}\n                                    </template>\n                                {% endblock %}\n\n                                {% block memo_blog_list_grid_columns_date %}\n                                    <template #column-date="{ item, compact, isInlineEdit }">\n\n                                        {% block memo_blog_list_grid_columns_date_content %}\n                                            {{ item.date | date }}\n                                        {% endblock %}\n                                    </template>\n                                {% endblock %}\n\n\n                                {% block memo_blog_list_grid_columns_active %}\n                                    <template #column-active="{ item, isInlineEdit }">\n                                        {% block memo_blog_list_grid_columns_active_inline_edit %}\n                                            <template v-if="isInlineEdit">\n                                                <sw-checkbox-field v-model="item.active"></sw-checkbox-field>\n                                            </template>\n                                        {% endblock %}\n\n                                        {% block memo_blog_list_grid_columns_active_content %}\n                                            <template v-else>\n                                                <sw-icon v-if="item.active" name="small-default-checkmark-line-medium" small class="is--active"></sw-icon>\n                                                <sw-icon v-else name="small-default-x-line-medium" small class="is--inactive"></sw-icon>\n                                            </template>\n                                        {% endblock %}\n                                    </template>\n                                {% endblock %}\n\n\n                                {% block memo_blog_list_grid_columns_actions %}\n                                    <template #detail-action="{ item }">\n                                        {% block memo_blog_list_grid_columns_actions_detail %}\n                                            <sw-context-menu-item class="sw-entity-listing__context-menu-edit-action"\n                                                                  :routerLink="{ name: \'memo.blog.detail.base\', params: { id: item.id }, query: { edit: true }}">\n                                                {{ $tc(\'memo-blog.list.contextMenu.edit\') }}\n                                            </sw-context-menu-item>\n                                        {% endblock %}\n                                    </template>\n\n                                {% endblock %}\n                            {% endblock %}\n                        </sw-entity-listing>\n                    {% endblock %}\n\n                    {% block memo_blog_list_empty_state %}\n                        <sw-empty-state v-if="!isLoading && !total" :title="$tc(\'memo-blog.list.empty\')"></sw-empty-state>\n                    {% endblock %}\n\n                    {% block memo_blog_list_grid_loader %}\n                        <sw-loader v-if="isLoading"></sw-loader>\n                    {% endblock %}\n                </div>\n            {% endblock %}\n        </template>\n\n        {% block sw_review_list_sidebar %}\n            <template #sidebar>\n                <sw-sidebar>\n\n                    {% block sw_review_list_sidebar_refresh %}\n                        <sw-sidebar-item\n                            icon="default-arrow-360-left"\n                            :title="$tc(\'memo-blog.list.titleSidebarItemRefresh\')"\n                            @click="onRefresh"\n                        />\n                    {% endblock %}\n                </sw-sidebar>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},sbtq:function(e,t){Shopware.Application.addServiceProviderDecorator("searchTypeService",(function(e){return e.upsertType("memo_blog",{entityName:"memo_blog",entityService:"memoBlogService",listingRoute:"memo.blog.index",placeholderSnippet:"memo-blog.general.searchBar.placeholder"}),e}))}});