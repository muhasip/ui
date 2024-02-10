const o = (n, t) => {
  const c = n.__vccOpts || n;
  for (const [e, r] of t)
    c[e] = r;
  return c;
}, a = {};
function s(n, t) {
  return " Modal Component ";
}
const _ = /* @__PURE__ */ o(a, [["render", s]]), m = {};
function f(n, t) {
  return " Chart Component ";
}
const d = /* @__PURE__ */ o(m, [["render", f]]), p = {
  install(n) {
    n.component("m-modal", _), n.component("m-chart", d);
  }
};
export {
  p as default
};
