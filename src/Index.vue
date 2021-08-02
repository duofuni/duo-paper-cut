 <template>
  <div
    class="duo-paper-cut"
    @click="clickAgentFn"
    :style="{ width: `${width}px` }"
  >
    <ul
      ref="paper-cut"
      class="paper-cut"
      :style="{ '-webkit-perspective': `${width}px` }"
    >
      <li v-for="key in cutsNumber" :key="key">
        <span
          :key="index"
          v-for="(item, index) in srcList"
          :style="{ background: `url(${item})` }"
        ></span>
      </li>
    </ul>
    <div class="control">
      <div class="left" data-paperCut-action="prev">
        <i class="left-arrow"></i>
      </div>
      <div class="right" data-paperCut-action="next">
        <i class="right-arrow"></i>
      </div>
    </div>
    <div class="pagination" :style="paginationDirectionStyle">
      <div
        class="point"
        :key="index"
        :data-index="index"
        data-paperCut-action="point"
        v-for="(item, index) in srcList"
        :class="`${current == index ? 'current' : ''}`"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
import "./style/css/index.css";

export default {
  name: "PaperCut",
  data() {
    return {
      current: 0,
      timer: null,
      fragmentWidth: 0,
      paginationDirectionStyle: {},
    };
  },
  props: {
    paginationDirection: {
      type: String,
      default: "right-bottom",
    },
    interval: {
      type: Number,
      default: 2000,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    srcList: {
      type: Array,
      default: [],
    },
    cutsNumber: {
      type: Number,
      default: 6,
    },
    transition: {
      type: String | Number,
      default: 0.5,
    },
    height: {
      type: String | Number,
      default: 360,
    },
    width: {
      type: String | Number,
      default: 800,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let cutsNumber = this.cutsNumber,
        fragmentWidth = this.width / cutsNumber,
        paperCut = this.$refs["paper-cut"],
        translateZ = 0.5 * this.height,
        liList = this.arrayLikeToArray(paperCut.children),
        tCss = "",
        z = 0;

      for (var i = 0; i < cutsNumber; i++) {
        if (i > cutsNumber / 2) {
          z--;
        } else {
          z++;
        }
        this.setStyleByName([
          {
            node: liList[i],
            styleName: "transition",
            styleValue: `${this.transition}ms ${i * 80}ms all`,
          },
          {
            node: liList[i],
            styleName: "z-index",
            styleValue: z,
          },
        ]);

        this.arrayLikeToArray(liList[i].children).forEach((span) => {
          this.setStyleByName(
            span,
            "background-position",
            `${-fragmentWidth * i}px`
          );
        });
      }

      this.setStyleByName(paperCut, "height", `${this.height}px`);

      liList.forEach((li) => {
        this.setStyleByName(li, "width", `${fragmentWidth}px`);

        // Front view
        li.children[0] &&
          this.setStyleByName(
            li.children[0],
            "transform",
            `translateZ(${translateZ}px)`
          );

        // Back view
        li.children[1] &&
          this.setStyleByName(
            li.children[1],
            "transform",
            `translateZ(-${translateZ}px)  rotateX(180deg)`
          );

        // Up view
        li.children[2] &&
          this.setStyleByName([
            {
              node: li.children[2],
              styleName: "top",
              styleValue: `-${this.height}px`,
            },
            {
              node: li.children[2],
              styleName: "transform",
              styleValue: `translateZ(${translateZ}px) rotateX(90deg)`,
            },
          ]);

        // Down view
        li.children[3] &&
          this.setStyleByName([
            {
              node: li.children[3],
              styleName: "top",
              styleValue: `${this.height}px`,
            },
            {
              node: li.children[3],
              styleName: "transform",
              styleValue: `translateZ(${translateZ}px) rotateX(-90deg)`,
            },
          ]);

        this.arrayLikeToArray(li.children).forEach((span) => {
          this.setStyleByName(
            span,
            "width",
            `${Math.ceil(fragmentWidth + 5)}px`
          );
        });
      });
      this.autoPlay && this.autoPlayFn();
      this.generatePaginationDirectionFn();
    },
    generatePaginationDirectionFn() {
      switch (this.paginationDirection) {
        case "right-top":
          this.paginationDirectionStyle = {
            right: "10%",
            top: "5px",
          };
          break;
        case "left-top":
          this.paginationDirectionStyle = {
            left: "10%",
            top: "5px",
          };
          break;
        case "right-bottom":
          this.paginationDirectionStyle = {
            right: "10%",
            bottom: "5px",
          };
          break;
        case "left-bottom":
          this.paginationDirectionStyle = {
            left: "10%",
            bottom: "5px",
          };
          break;
      }
    },
    autoPlayFn() {
      this.timer = setInterval(() => {
        this.playFn("+");
      }, this.interval);
    },
    playFn(direction) {
      direction === "+" ? ++this.current : --this.current;
      // when current exceed 4
      if (this.current > this.srcList.length - 1) {
        this.current = 0;
        this.cuttingFn(0);
        return;
      }
      // when current less than 0
      if (this.current < 0) {
        this.current = this.srcList.length - 1;
        this.cuttingFn(this.current);
        return;
      }

      this.cuttingFn(this.current);
    },
    cuttingFn(i) {
      let liList = this.arrayLikeToArray(this.$refs["paper-cut"].children);

      liList.forEach((item) => {
        this.setStyleByName(
          item,
          "transform",
          `translateZ(-180px) rotateX(${-i * 90}deg)`
        );
      });
    },
    setStyleByName() {
      const doSet = (params) => {
        const [node, styleName, styleValue] = params;
        node && (node.style[styleName] = styleValue);
      };

      if (arguments.length !== 1) {
        doSet(arguments);
        return;
      } else {
        this.arrayLikeToArray(arguments)[0].forEach((item) => {
          doSet([item.node, item.styleName, item.styleValue]);
        });
      }
    },
    // array-like to array
    arrayLikeToArray(arrayLike) {
      // Arguments to array --> Array.prototype.slice.call() <--
      return Array.prototype.slice.call(arrayLike);
    },
    clickAgentFn(e) {
      let i = e.target.getAttribute("data-index");

      switch (e.target.getAttribute("data-paperCut-action")) {
        case "point":
          clearInterval(this.timer);
          this.cuttingFn(i);
          this.current = i;
          this.autoPlay && this.autoPlayFn();
          break;
        case "prev":
          clearInterval(this.timer);
          this.playFn("-");
          this.autoPlay && this.autoPlayFn();
          break;
        case "next":
          clearInterval(this.timer);
          this.playFn("+");
          this.autoPlay && this.autoPlayFn();
          break;
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
 
<style>
</style>
