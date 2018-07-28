<template>
<div>
    <div class="container">
  <section class="hero is-info">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
</section>
    </div>

  <div class="container">
    <div class="notification">
      <codemirror ref="myCm" style="height: auto;"
              :value="code">
      </codemirror>
    </div>

    <section>

          <b-tabs v-model="activeTab">
              <b-tab-item label="Projects">
                  Lorem <br>
                  ipsum <br>
                  dolor <br>
                  sit <br>
                  amet.
              </b-tab-item>

              <b-tab-item label="Work History">
                  Lorem ipsum dolor sit amet.
              </b-tab-item>

              <b-tab-item label="Education">
                  Lorem <br>
                  ipsum <br>
                  dolor <br>
                  sit <br>
                  amet.
              </b-tab-item>
          </b-tabs>
      </section>

    </div>

  <div class="container">
<footer class="footer">
  <div class="content container">
    <p>
      <strong>Portfolio</strong> of <a href="https://github.com/djiordhan">Jordan</a>.
    </p>
  </div>
</footer>
  </div>

</div>
</template>

<script>
import { codemirror } from 'vue-codemirror';

export default {
  name: 'home',
  components: { codemirror },
  data() {
    var code = `
//** **//
var me = {
	"name": "jordiboy"
};

// can't make fancy design
me.goodAtWebDesign = false;
// can tweak and troubleshoot css
me.canStillDoWebDesign = true;
    `;

    return {
      code: code
    };
  }
};
</script>
