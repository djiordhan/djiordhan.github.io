<template>
<div>
    <div class="container">
  <section class="hero is-default">
  <div class="hero-body">
    <div class="container" id="profile_head">
      <div class="rounded-img-container">
        <img src="../assets/tzItaBhh_400x400.jpg" height="200" class="rounded-img"/>
      </div>

      <h1 class="title" style="text-align: center;">
        @djiordhan
      </h1>
      <h2 class="subtitle" style="text-align: center;">
         Full Stack Developer
      </h2>
    </div>
  </div>
</section>
    </div>

  <div class="container">
      <section>
          <b-tabs v-model="activeTab">
              <b-tab-item label="About Me">
                  <div class="notification">
                    <codemirror ref="myCm" style="height: auto;"
              :value="code">
                    </codemirror>
                  </div>
              </b-tab-item>

              <b-tab-item label="Projects">
                  Lorem ipsum dolor sit amet.
              </b-tab-item>

              <b-tab-item label="Apps">
                  Lorem ipsum dolor sit amet.
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

<style scoped>
#profile_head {
  width: 25%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;
}

.rounded-img-container {
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.rounded-img {
  width: inherit;
  height: inherit;
  border-radius: inherit;

  object-fit: cover;
  object-position: center;
}
</style>

