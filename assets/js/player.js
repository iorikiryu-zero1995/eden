// 詳細行（画像/注記）の開閉トグル
document.querySelectorAll("[data-toggle]").forEach((row) => {
  const target = document.getElementById(row.dataset.toggle);
  if (!target) return;

  const toggle = () => {
    const isOpen = target.classList.toggle("open");
    row.setAttribute("aria-expanded", String(isOpen));
  };

  row.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    toggle();
  });

  row.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggle();
  });
});

// YouTube 参考リンクの挙動: iOS/iPadOS・狭幅=埋め込みプレーヤー / PC=新タブ
(function () {
  var dock = document.getElementById("ytdock");
  var label = document.getElementById("ytdock-label");
  if (!dock) return; // ドックが無いページ（目次等）では何もしない
  var player = null;
  var ready = false;
  var pending = null;

  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("ytplayer", {
      width: "100%",
      height: "100%",
      playerVars: { playsinline: 1, rel: 0 },
      events: {
        onReady: function () {
          ready = true;
          if (pending) {
            seek(pending.id, pending.t);
            pending = null;
          }
        }
      }
    });
  };

  function seek(videoId, startSeconds) {
    if (!ready || !player) {
      pending = { id: videoId, t: startSeconds };
      return;
    }
    player.loadVideoById({ videoId: videoId, startSeconds: startSeconds });
  }

  function parseTime(t) {
    if (!t) return 0;
    if (/^\d+$/.test(t)) return parseInt(t, 10);
    var m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
    if (!m) return 0;
    return (parseInt(m[1] || 0, 10) * 3600) + (parseInt(m[2] || 0, 10) * 60) + parseInt(m[3] || 0, 10);
  }

  function parseYouTube(href) {
    if (!href) return null;
    try {
      var u = new URL(href, location.href);
      var host = u.hostname.replace(/^www\./, "");
      var id = null;
      if (host === "youtu.be") {
        id = u.pathname.slice(1);
      } else if (host === "youtube.com" || host === "m.youtube.com") {
        id = u.searchParams.get("v");
      }
      if (!id) return null;
      return { id: id, t: parseTime(u.searchParams.get("t")) };
    } catch (e) {
      return null;
    }
  }

  function isAppleTouchDevice() {
    var ua = navigator.userAgent || "";
    var platform = navigator.platform || "";
    return /iPad|iPhone|iPod/.test(ua) ||
           (platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function shouldUseInlinePlayer() {
    var mobilePlayerMaxWidth = 820;
    return isAppleTouchDevice() ||
           window.matchMedia("(max-width: " + mobilePlayerMaxWidth + "px)").matches;
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a) return;
    var info = parseYouTube(a.getAttribute("href"));
    if (!info) return;

    // PC: 埋め込みは使わず、新しいタブで開く
    if (!shouldUseInlinePlayer()) {
      a.target = "_blank";
      a.rel = "noreferrer";
      return; // preventDefault しない＝ブラウザ既定の新タブ動作に任せる
    }

    // iOS/iPadOS・狭幅: YouTubeアプリへ飛ばさず、サイト内プレーヤーで該当時間にジャンプ
    e.preventDefault();
    e.stopPropagation();
    dock.hidden = false;
    dock.classList.remove("min");
    label.textContent = a.getAttribute("title") || a.textContent.trim() || "参考動画";
    seek(info.id, info.t);
  });

  document.getElementById("ytdock-min").addEventListener("click", function () {
    dock.classList.toggle("min");
    this.textContent = dock.classList.contains("min") ? "□" : "_";
  });

  document.getElementById("ytdock-close").addEventListener("click", function () {
    dock.hidden = true;
    if (player && player.stopVideo) player.stopVideo();
  });
})();
