import{a as e,o as a,S as t}from"./framework.1f92be5f.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const m='{"title":"A Vue3 UI library template","description":"","frontmatter":{},"headers":[{"level":2,"title":"Docs","slug":"docs"},{"level":2,"title":"Feature","slug":"feature"},{"level":2,"title":"How to use","slug":"how-to-use"},{"level":3,"title":"Checklist","slug":"checklist"},{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Dev","slug":"dev"},{"level":3,"title":"Build","slug":"build"},{"level":3,"title":"Test","slug":"test"},{"level":3,"title":"Generate entry point","slug":"generate-entry-point"},{"level":3,"title":"Generate Component","slug":"generate-component"},{"level":3,"title":"Generate dts","slug":"generate-dts"},{"level":3,"title":"Release","slug":"release"},{"level":2,"title":"Build Docs","slug":"build-docs"},{"level":3,"title":"Docs dev","slug":"docs-dev"},{"level":3,"title":"Docs build","slug":"docs-build"},{"level":3,"title":"Docs deploy","slug":"docs-deploy"},{"level":3,"title":"Use demo code in doc","slug":"use-demo-code-in-doc"},{"level":3,"title":"Custom doc style","slug":"custom-doc-style"},{"level":2,"title":"Recommended IDE Setup","slug":"recommended-ide-setup"},{"level":3,"title":"If Using <script setup>","slug":"if-using-script-setup"},{"level":2,"title":"Credits","slug":"credits"},{"level":2,"title":"Thanks","slug":"thanks"}],"relativePath":"en-US/components/quick-start.md","lastUpdated":1653204851698}',s={},n=t(`__VP_STATIC_START__<h1 id="a-vue3-ui-library-template"><a class="header-anchor" href="#a-vue3-ui-library-template" aria-hidden="true">#</a> A Vue3 UI library template</h1><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/zouhangwithsweet/vue-components-lib-seed" alt="GitHub stars"></a></p><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/blob/master/README.zh-CN.md" target="_blank" rel="noopener noreferrer">\u4E2D\u6587\u6587\u6863</a></p><p>Help you quickly create a component library.</p><ul><li>\u{1F680} dev with <code>Vite</code></li><li>\u2708\uFE0F build with <code>esbuild</code></li><li>\u{1F681} generate types with <code>ts-morph</code></li></ul><h2 id="docs"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h2><p><img src="https://img.shields.io/badge/need-help-orange" alt="image"><br><strong>I will rollback the doc builder to vitepress \u{1F603}</strong></p><ul><li><a href="https://vuecomponent-seed.vercel.app/" target="_blank" rel="noopener noreferrer">doc example</a></li></ul><h2 id="feature"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> Feature</h2><ul><li>\u{1F308} Speedy dev &amp; build</li><li>\u{1F386} Customize friendly</li><li>\u{1F4DD} More beautiful doc, support <code>Chinese</code> and <code>English</code>. Support <code>Dark Mode</code> by <a href="https://github.com/vueuse/vueuse" target="_blank" rel="noopener noreferrer">vueuse</a></li><li>\u{1F36D} Rich scripts, inspired by <a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noopener noreferrer">esbuild-plugin-vue</a> &amp; <a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noopener noreferrer">vue-dts-gen</a></li><li>\u{1F60B} Type friendly</li><li>\u{1F69A} <code>ESM</code> &amp; <code>CJS</code> product</li></ul><h2 id="how-to-use"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/generate" target="_blank" rel="noopener noreferrer">Generate a repository by vue-components-lib-seed</a></p><h3 id="checklist"><a class="header-anchor" href="#checklist" aria-hidden="true">#</a> Checklist</h3><ul><li>[ ] Replace all <code>my-lib</code> words with your libary name. Just search <code>my-lib</code> and replace them in VScode <ul><li><code>.gitignore</code></li><li><code>package.json</code></li><li><code>vite.config.ts</code></li><li><code>.vitepress</code></li><li><code>scripts</code> ...</li></ul></li></ul><h3 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3><div class="language-bash"><pre><code><span class="token function">yarn</span>
</code></pre></div><h3 id="dev"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> Dev</h3><blockquote><p>Benefited from <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener noreferrer"><code>vite-plugin-pages</code></a>, the <code>src/pages/index.vue</code> is the entry page for development. You can visit <code>/[component-name]/demo</code> to check component, like <code>http://localhost:3000/#/button/demo</code>.</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> dev
</code></pre></div><h3 id="build"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> build
</code></pre></div><h3 id="test"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token builtin class-name">test</span>
</code></pre></div><h3 id="generate-entry-point"><a class="header-anchor" href="#generate-entry-point" aria-hidden="true">#</a> Generate entry point</h3><blockquote><p>The entry file is the <code>input</code> option for rollup.</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> gen-entry
</code></pre></div><h3 id="generate-component"><a class="header-anchor" href="#generate-component" aria-hidden="true">#</a> Generate Component</h3><blockquote><p>A component&#39;s name is required for this command.</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> gen <span class="token punctuation">[</span>component<span class="token punctuation">\\</span>&#39;s name<span class="token punctuation">]</span>
</code></pre></div><h3 id="generate-dts"><a class="header-anchor" href="#generate-dts" aria-hidden="true">#</a> Generate dts</h3><div class="language-bash"><pre><code>npx esno ./scripts/gen-dts.ts
</code></pre></div><h3 id="release"><a class="header-anchor" href="#release" aria-hidden="true">#</a> Release</h3><blockquote><p>This command will add git tag\u3001generate changelog. You can test your lib with argument <code>--dry</code></p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> release <span class="token punctuation">[</span>--dry<span class="token punctuation">]</span>
</code></pre></div><h2 id="build-docs"><a class="header-anchor" href="#build-docs" aria-hidden="true">#</a> Build Docs</h2><blockquote><p>\u2757 Noted: you should run <code>yarn build:lib</code> before run this command. Because the docs need the build bundle.</p></blockquote><h3 id="docs-dev"><a class="header-anchor" href="#docs-dev" aria-hidden="true">#</a> Docs dev</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> docs:dev
</code></pre></div><h3 id="docs-build"><a class="header-anchor" href="#docs-build" aria-hidden="true">#</a> Docs build</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> docs:build
</code></pre></div><h3 id="docs-deploy"><a class="header-anchor" href="#docs-deploy" aria-hidden="true">#</a> Docs deploy</h3><p>Here is a git <a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/blob/master/.github/workflows/build.yml" target="_blank" rel="noopener noreferrer">action</a>. When you push the code to the <code>master</code> branch, the document will be automatically deployed on <code>gh-pages</code> branch. Then you can set the Github Pages&#39;s source on the <code>gh-pages</code> branch.</p><h3 id="use-demo-code-in-doc"><a class="header-anchor" href="#use-demo-code-in-doc" aria-hidden="true">#</a> Use demo code in doc</h3><p>Take button as an example.</p><p>In <code>button.md</code>, insert the following code</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo-wrapper</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>src/packages/button/demo<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>There is a global component <a href="https://github.com/zouhangwithsweet/fisand-doc/blob/feat_fisand_doc/src/client/app/components/Demos.vue" target="_blank" rel="noopener noreferrer"><code>Demos</code></a> to display all demos. This is currently the only way to show demo. <a href="https://github.com/zouhangwithsweet/fisand-doc/blob/feat_fisand_doc/src/node/markdown/plugins/demo.ts" target="_blank" rel="noopener noreferrer">More info</a>.</p><h3 id="custom-doc-style"><a class="header-anchor" href="#custom-doc-style" aria-hidden="true">#</a> Custom doc style</h3><p>You can add the <code>class</code> in frontmatter, then the <code>&lt;Content&gt;</code> would inherit the <code>class</code>. Of course, the <code>windicss</code> can be used here.</p><div class="language-markdown"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">class: &#39;custom-class&#39;</span>
<span class="token punctuation">---</span></span>
</code></pre></div><h2 id="recommended-ide-setup"><a class="header-anchor" href="#recommended-ide-setup" aria-hidden="true">#</a> Recommended IDE Setup</h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar</a>.</p><h3 id="if-using-script-setup"><a class="header-anchor" href="#if-using-script-setup" aria-hidden="true">#</a> If Using <code>&lt;script setup&gt;</code></h3><p><a href="https://github.com/vuejs/rfcs/pull/227" target="_blank" rel="noopener noreferrer"><code>&lt;script setup&gt;</code></a> is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Volar</a> instead of Vetur (and disable Vetur).</p><h2 id="credits"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h2><ul><li><a href="https://github.com/sxzz/unplugin-vue" target="_blank" rel="noopener noreferrer">unplugin-vue</a></li><li><a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noopener noreferrer">esbuild-plugin-vue</a></li><li><a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noopener noreferrer">vue-dts-gen</a></li><li><a href="https://github.com/vueuse/vueuse" target="_blank" rel="noopener noreferrer">vueuse</a></li><li><a href="https://github.com/dewfall123/vitepress-for-component" target="_blank" rel="noopener noreferrer">vitepress-for-component</a></li><li><a href="https://github.com/windicss/windicss" target="_blank" rel="noopener noreferrer">windicss</a></li><li><a href="https://github.com/element-plus/element-plus" target="_blank" rel="noopener noreferrer">Element Plus</a></li></ul><h2 id="thanks"><a class="header-anchor" href="#thanks" aria-hidden="true">#</a> Thanks</h2><table><thead><tr><th style="text-align:center;"><a href="https://github.com/eeeeelle" target="_blank" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/73626725?v=4" width="75px;"><br>eeeeelle<br> <sub>\u270D\uFE0Frelease-script</sub></a></th></tr></thead></table>__VP_STATIC_END__`,58),r=[n];function l(i,d,c,u,h,p){return a(),e("div",null,r)}var f=o(s,[["render",l]]);export{m as __pageData,f as default};
