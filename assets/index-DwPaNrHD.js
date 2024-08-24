(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const c of t.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const n = () => {
    const l = document.querySelector(".header__bars"),
      o = document.querySelector(".mobile-nav"),
      s = document.querySelectorAll(".mobile-nav__link");
    let r = !1;
    l.addEventListener("click", () => {
      (r = !r),
        r
          ? ((o.style.display = "flex"),
            (document.body.style.overflowY = "hidden"))
          : ((o.style.display = "none"),
            (document.body.style.overflowY = "auto"));
    }),
      s.forEach((e) => {
        e.addEventListener("click", () => {
          (r = !1),
            (o.style.display = "none"),
            (document.body.style.overflowY = "auto");
        });
      });
  },
  i = () => {
    const l = document.querySelectorAll("#theme-toggle"),
      o = localStorage.getItem("theme");
    o && document.body.classList.add(o);
    const s = () => {
      document.body.classList.toggle("light-mode"),
        document.body.classList.contains("light-mode")
          ? localStorage.setItem("theme", "light-mode")
          : (localStorage.removeItem("theme"),
            document.body.removeAttribute("class"));
    };
    l.forEach((r) => r.addEventListener("click", s));
  },
  d = () => {
    const l = document.querySelectorAll(".lazy"),
      o = new IntersectionObserver((s, r) => {
        s.forEach((e) => {
          if (e.isIntersecting) {
            let t = e.target;
            (t.src = t.dataset.src),
              t.classList.remove("loading"),
              t.classList.add("loaded"),
              r.unobserve(t);
          }
        });
      });
    l.forEach((s) => {
      o.observe(s);
    });
  };
n();
i();
d();
