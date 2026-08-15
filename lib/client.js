window.__ModuleLoader__.load({
  id: 'dsh-whale-pet',
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    var React = require('react');

    // ================= CSS (injected via ctx.effect into a <style> tag) =================
    var CSS = `
.vf-root {
  position: fixed; z-index: 2147483000;
  font-family: 'Courier New', ui-monospace, monospace;
  user-select: none;
  image-rendering: pixelated;
}
.vf-pet {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  cursor: grab;
  filter: drop-shadow(4px 4px 0 rgba(0,0,0,.35));
  transition: transform .1s steps(3);
  touch-action: none;
}
.vf-pet:hover { transform: scale(1.05); }
.vf-pet:active { cursor: grabbing; }
.vf-pet.idle { animation: vf-swim 4.6s steps(12) infinite; }
@keyframes vf-swim {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.vf-pet.noanim.idle { animation: none; }
.vf-pet.listening { animation: vf-breathe 1s steps(4) infinite; }
@keyframes vf-breathe {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
.vf-pet.holding { animation: vf-hold 1.1s steps(4) infinite; }
@keyframes vf-hold {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.09); box-shadow: 0 0 0 4px rgba(77,107,254,.25); }
}
.vf-pet.done { animation: vf-pop .5s steps(6); }
@keyframes vf-pop {
  0% { transform: translateY(0); }
  35% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}
.vf-fins { transform-origin: 6px 88px; animation: vf-finpix 1.6s steps(4) infinite; }
.vf-pet.listening .vf-fins, .vf-pet.holding .vf-fins { animation-duration: .5s; }
.vf-pet.noanim .vf-fins, .vf-pet.done .vf-fins { animation: none; }
@keyframes vf-finpix {
  0%,100% { transform: rotate(-7deg); }
  50% { transform: rotate(8deg); }
}
.vf-tailpix { transform-origin: 84% 55%; animation: vf-tailsway 3.2s steps(6) infinite; }
.vf-pet.listening .vf-tailpix, .vf-pet.holding .vf-tailpix { animation-duration: .9s; }
.vf-pet.noanim .vf-tailpix, .vf-pet.done .vf-tailpix { animation: none; }
@keyframes vf-tailsway {
  0%,100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
.vf-spoutpix { opacity: 0; }
.vf-pet.listening .vf-spoutpix, .vf-pet.holding .vf-spoutpix { opacity: 1; animation: vf-spout-blink .7s steps(2) infinite; }
@keyframes vf-spout-blink { 0%,100% { opacity: 1 } 50% { opacity: .3 } }
.vf-eyepix { animation: vf-blinkpix 4s steps(2) infinite; }
@keyframes vf-blinkpix { 0%,92%,100% { opacity: 1 } 95% { opacity: 0 } }
.vf-bubble {
  position: absolute; left: 50%; bottom: calc(100% + 12px); transform: translateX(-50%);
  min-width: 170px; max-width: 260px;
  background: #1a1f2b; color: #dfe6f5;
  border: 3px solid #0c0f16;
  box-shadow: 4px 4px 0 rgba(0,0,0,.5);
  border-radius: 0; padding: 9px 12px;
  font-size: 12px; line-height: 1.5; text-align: center;
  white-space: pre-wrap; word-break: break-word;
  animation: vf-bubble-in .15s steps(3);
  display: flex; flex-direction: column; gap: 8px;
  pointer-events: none;
}
.vf-bubble.flip { bottom: auto; top: calc(100% + 12px); }
@keyframes vf-bubble-in {
  from { opacity: 0; transform: translateX(-50%) translateY(6px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.vf-bubble::after {
  content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 7px solid transparent; border-top-color: #0c0f16;
}
.vf-bubble.flip::after {
  top: auto; bottom: 100%;
  border-top-color: transparent; border-bottom-color: #0c0f16;
}
.vf-bubble.listening { border-color: #4d6bfe; }
.vf-bubble.err { border-color: #e5484d; }
.vf-bubble-text { text-align: center; }
.vf-bubble-actions { display: flex; gap: 8px; justify-content: center; pointer-events: auto; }
.vf-ba {
  border: 2px solid #0c0f16; background: #2a3045; color: #dfe6f5;
  padding: 4px 8px; font-size: 11px; cursor: pointer;
  box-shadow: 2px 2px 0 #0c0f16;
  transition: transform .05s steps(2), box-shadow .05s steps(2), background .1s steps(2);
}
.vf-ba:hover:not(:disabled) { background: #39415c; transform: translateY(-1px); box-shadow: 2px 3px 0 #0c0f16; }
.vf-ba:active:not(:disabled) { transform: translate(2px, 2px); box-shadow: 0 0 0 #0c0f16; }
.vf-ba:disabled { opacity: .4; cursor: not-allowed; }
.vf-ba.primary { background: #4d6bfe; color: #fff; }
.vf-mini {
  position: fixed; width: 248px;
  background: #171c27; color: #dfe6f5;
  border: 3px solid #0c0f16;
  box-shadow: 5px 5px 0 rgba(0,0,0,.55);
  border-radius: 0; overflow: hidden;
  animation: vf-menu-in .15s steps(3);
  z-index: 2147483001;
  pointer-events: auto;
}
@keyframes vf-menu-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.vf-mini-head {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 10px;
  background: #20263a;
  border-bottom: 3px solid #0c0f16;
  font-size: 12px; font-weight: 700;
}
.vf-mini-title { flex: 1; display: flex; align-items: center; gap: 7px; }
.vf-brand { font-size: 8px; letter-spacing: 2px; opacity: .6; font-weight: 700; }
.vf-mini-body { padding: 10px; display: flex; flex-direction: column; gap: 9px; font-size: 12px; color: #a9b4d0; }
.vf-mini-row { display: flex; align-items: center; gap: 8px; justify-content: space-between; }
.vf-select {
  background: #10141e; color: #dfe6f5;
  border: 3px solid #0c0f16; padding: 3px 7px; font-size: 11px; cursor: pointer;
  max-width: 138px;
}
.vf-select:focus-visible { outline: 2px solid #4d6bfe; outline-offset: 2px; }
.vf-check {
  appearance: none; width: 34px; height: 19px;
  background: #10141e; border: 3px solid #0c0f16;
  position: relative; cursor: pointer; transition: background .1s steps(2);
}
.vf-check::after {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: 9px; height: 9px; background: #dfe6f5;
  transition: left .1s steps(2);
}
.vf-check:checked { background: #4d6bfe; }
.vf-check:checked::after { left: 16px; }
.vf-check:focus-visible { outline: 2px solid #4d6bfe; outline-offset: 2px; }
.vf-size { display: flex; align-items: center; gap: 6px; }
.vf-step {
  border: 2px solid #0c0f16; background: #2a3045; color: #dfe6f5;
  width: 22px; height: 22px; cursor: pointer; font-size: 12px; line-height: 1;
  box-shadow: 2px 2px 0 #0c0f16;
  transition: transform .05s steps(2), box-shadow .05s steps(2), background .1s steps(2);
}
.vf-step:hover { background: #39415c; }
.vf-step:active { transform: translate(2px, 2px); box-shadow: 0 0 0 #0c0f16; }
.vf-step-val { min-width: 34px; text-align: center; color: #dfe6f5; font-size: 12px; }
.vf-btn {
  border: 2px solid #0c0f16; background: #2a3045; cursor: pointer;
  color: #dfe6f5; padding: 2px 8px; font-size: 11px;
  box-shadow: 2px 2px 0 #0c0f16;
  transition: transform .05s steps(2), box-shadow .05s steps(2), background .1s steps(2);
}
.vf-btn:hover { background: #39415c; }
.vf-btn:active { transform: translate(2px, 2px); box-shadow: 0 0 0 #0c0f16; }
.vf-mini-note { font-size: 10px; color: #6b7590; text-align: center; border-top: 2px solid #20263a; padding-top: 7px; line-height: 1.5; }
.vf-sleep {
  width: 46px; height: 46px; border-radius: 50%; border: 3px solid #0c0f16;
  background: #232a3a; cursor: pointer; padding: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 3px 3px 0 rgba(0,0,0,.35);
  opacity: .55;
  transition: transform .1s steps(3), opacity .15s steps(3);
}
.vf-sleep:hover { opacity: 1; transform: scale(1.06); }
.vf-sleep:active { transform: translate(2px, 2px); box-shadow: 0 0 0 #0c0f16; }
.vf-sleep:focus-visible { outline: 2px solid #4d6bfe; outline-offset: 2px; }
`;

    // ================= pixel DeepSeek orca =================
    var ORCA_PIXELS = [
      '......SSSSS.......',
      '.....SSSSSSS......',
      '....BBBBBBBBBB....',
      '...BBBBBBBBBBBB...',
      '..BBBBBBBBBBBBBB..',
      '..BBBBBBBBBBBBBBB.',
      '.BBBBBBBBBBBBBBBB.',
      '.BBWBBBBBBBBBBBBBB',
      '.BBWBBBBBBBBBBBBBB',
      '..BBBBBBBBBBBBBBB.',
      '..GBBBBBBBBBBBBB..',
      'FFLBBBBBBBBBBB....',
      'FF.LLLLLLL........',
    ];
    var PIX = { B: '#10141e', G: '#3a4152', W: '#e8ecf5', L: '#c7d0e6', S: '#6db9ff', F: '#2a3045' };
    var TAIL_PIXELS = [
      [19, 4], [20, 5],
      [18, 5], [19, 5], [20, 6], [21, 6],
      [18, 6], [19, 6], [20, 7], [21, 7],
      [18, 7], [19, 7], [20, 8],
      [18, 8], [19, 8],
      [18, 9], [19, 9],
      [18, 10], [19, 10], [20, 9],
      [18, 11], [19, 11], [20, 10], [21, 10],
      [18, 12], [19, 12], [20, 11], [21, 11],
    ];
    function PixelOrca(props) {
      var size = props.size || 108;
      var cols = ORCA_PIXELS[0].length;
      var px = Math.max(2, Math.floor(size / 22));
      var rects = [];
      var fins = [];
      for (var r = 0; r < ORCA_PIXELS.length; r += 1) {
        var row = ORCA_PIXELS[r];
        for (var c = 0; c < row.length; c += 1) {
          var ch = row[c];
          if (ch === '.') continue;
          var cls = ch === 'S' ? 'vf-spoutpix' : ch === 'W' ? 'vf-eyepix' : undefined;
          var el = React.createElement('rect', {
            key: 'b' + r + '-' + c,
            x: c * px, y: r * px, width: px, height: px,
            fill: PIX[ch],
            className: cls,
          });
          if (ch === 'F') fins.push(el);
          else rects.push(el);
        }
      }
      var tail = TAIL_PIXELS.map(function (t) {
        return React.createElement('rect', {
          key: 't' + t[1] + '-' + t[0],
          x: t[0] * px, y: t[1] * px, width: px, height: px,
          fill: '#10141e',
        });
      });
      return React.createElement('svg', {
        viewBox: '0 0 ' + (22 * px) + ' ' + (ORCA_PIXELS.length * px),
        width: 22 * px,
        height: ORCA_PIXELS.length * px,
        shapeRendering: 'crispEdges',
      },
        rects,
        React.createElement('g', { className: 'vf-tailpix' }, tail),
        React.createElement('g', { className: 'vf-fins' }, fins),
      );
    }

    // ================= composer bridge (inputActions via dock slot) =================
    // A hidden `conversation.input.dock` entry captures the live InputActions
    // (+ current draft) so the pet can write recognized text straight into the
    // composer. Falls back to clipboard when no session/composer is present.
    var bridge = { actions: undefined, currentDraft: '' };

    // ================= preferences (localStorage; no Host RPC needed) =================
    var PREFS_KEY = 'dsh-whale-pet-prefs';
    var DEFAULT_PREFS = {
      enabled: true,
      lang: 'zh-CN',
      autoSend: false,
      append: true,
      background: true,
      animations: true,
      triggerMode: 'hold',
      petSize: 110,
      pos: null,
    };
    function loadPrefs() {
      try {
        var raw = window.localStorage.getItem(PREFS_KEY);
        if (raw) {
          var parsed = JSON.parse(raw);
          var out = {};
          for (var k in DEFAULT_PREFS) out[k] = (k in parsed) ? parsed[k] : DEFAULT_PREFS[k];
          return out;
        }
      } catch (e) { /* ignore */ }
      return Object.assign({}, DEFAULT_PREFS);
    }
    function savePrefs(p) {
      try { window.localStorage.setItem(PREFS_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
    }

    // ================= settings row (Settings -> General) =================
    function VoiceSettingsRow() {
      var _a = React.useState(null), state = _a[0], setState = _a[1];
      React.useEffect(function () {
        setState(loadPrefs());
      }, []);
      if (!state) return React.createElement('div', null, '小鲸…');
      var toggle = function () {
        var next = Object.assign({}, state, { enabled: !state.enabled });
        setState(next);
        savePrefs(next);
      };
      return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' } },
        React.createElement('div', { style: { flex: 1, fontSize: '13px' } },
          React.createElement('div', null, '小鲸桌宠'),
          React.createElement('div', { style: { fontSize: '11px', color: 'var(--dsw-color-text-2, #57606a)' } }, 'DeepSeek 像素虎鲸：按住/单击说话 · 拖动移动 · 设置面板'),
        ),
        React.createElement('button', {
          onClick: toggle,
          style: {
            padding: '4px 14px', borderRadius: '999px', border: '1px solid var(--dsw-color-border, rgba(0,0,0,.2))',
            background: state.enabled ? 'var(--dsw-color-primary, #2563eb)' : 'transparent',
            color: state.enabled ? '#fff' : 'inherit', cursor: 'pointer', fontSize: '12px',
          },
        }, state.enabled ? '已开启' : '已关闭'),
      );
    }

    // ================= main pet component =================
    function WhalePet(props) {
      var petCtx = props && props.ctx ? props.ctx : null;
      var _a = React.useState(null), pref = _a[0], setPref = _a[1];
      var _b = React.useState(false), miniOpen = _b[0], setMiniOpen = _b[1];
      var _c = React.useState(null), miniStyle = _c[0], setMiniStyle = _c[1];
      var _d = React.useState('idle'), phase = _d[0], setPhase = _d[1];
      var _e = React.useState(''), interim = _e[0], setInterim = _e[1];
      var _f = React.useState(''), finalText = _f[0], setFinalText = _f[1];
      var _g = React.useState(''), bubble = _g[0], setBubble = _g[1];
      var _h = React.useState(''), bubbleKind = _h[0], setBubbleKind = _h[1];
      var _i = React.useState(null), pos = _i[0], setPos = _i[1];
      var _j = React.useState(true), anim = _j[0], setAnim = _j[1];
      var _k = React.useState(false), bubbleFlip = _k[0], setBubbleFlip = _k[1];

      var petRef = React.useRef(null);
      var miniRef = React.useRef(null);
      var recRef = React.useRef(null);
      var holdTimerRef = React.useRef(null);
      var tapTimerRef = React.useRef(null);
      var lastTapRef = React.useRef(0);
      var userStoppedRef = React.useRef(false);
      var flashTimerRef = React.useRef(null);
      var sleepDragRef = React.useRef(null);
      var phaseRef = React.useRef('idle');
      phaseRef.current = phase;
      var prefRef = React.useRef(pref);
      prefRef.current = pref;

      function setAll(next) { setPref(next); savePrefs(next); }

      function flashBubble(text, kind, ms) {
        setBubble(text);
        setBubbleKind(kind || '');
        var timer = petCtx ? petCtx.get('timer') : null;
        if (flashTimerRef.current) { flashTimerRef.current(); flashTimerRef.current = null; }
        if (timer) {
          flashTimerRef.current = timer.timeout(function () {
            flashTimerRef.current = null;
            setBubble(function (prev) { return prev === text ? '' : prev; });
            setBubbleKind('');
          }, ms || 2400);
        }
      }

      React.useEffect(function () {
        setPref(loadPrefs());
        var p = loadPrefs();
        setAnim(p.animations !== false);
        if (p.pos && typeof p.pos === 'object') setPos(p.pos);
      }, []);

      // timer service is a cordis context service; resolve lazily via ctx.get
      function sendToComposer(text, forceSend) {
        var act = bridge && bridge.actions;
        if (!act) {
          // No live composer bridge (no session / not mounted yet): clipboard fallback.
          var nav = typeof window !== 'undefined' ? window.navigator : undefined;
          if (nav && nav.clipboard && nav.clipboard.writeText) {
            nav.clipboard.writeText(text).catch(function () {});
          }
          flashBubble('已复制到剪贴板', 'ok', 2000);
          return;
        }
        var prev = bridge.currentDraft || '';
        var append = prefRef.current && prefRef.current.append !== false;
        var next = (append && prev) ? prev + '\n' + text : text;
        act.setDraft(next);
        var shouldSend = forceSend || (prefRef.current && prefRef.current.autoSend);
        if (shouldSend) {
          try { act.submit(); } catch (e) { /* ignore */ }
          flashBubble('已发送 ✓', 'ok', 1800);
        } else {
          flashBubble('已送入输入框 ✓', 'ok', 1800);
        }
      }

      var ensureRecognizer = React.useCallback(function () {
        if (recRef.current) return recRef.current;
        var SR = (typeof window !== 'undefined') && (window.SpeechRecognition || window.webkitSpeechRecognition);
        if (!SR) {
          flashBubble('需要 Edge / Chrome', 'err', 2600);
          return null;
        }
        var rec = new SR();
        rec.lang = prefRef.current && prefRef.current.lang ? prefRef.current.lang : 'zh-CN';
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        var finalBuf = '';
        rec.onstart = function () { setPhase('listening'); setBubble('我在听…'); setBubbleKind(''); };
        rec.onresult = function (ev) {
          var inter = '';
          for (var i = ev.resultIndex; i < ev.results.length; i += 1) {
            var res = ev.results[i];
            if (!res || !res[0]) continue;
            var t = res[0].transcript || '';
            if (res.isFinal) finalBuf += t;
            else inter += t;
          }
          setInterim(inter);
          if (inter) setBubble(inter);
        };
        rec.onerror = function (ev) {
          if (ev.error === 'aborted' || ev.error === 'no-speech') return;
          userStoppedRef.current = true;
          setPhase('idle');
          flashBubble('识别失败：' + (ev.error || 'unknown'), 'err', 2600);
        };
        rec.onend = function () {
          setPhase('done');
          if (finalBuf) {
            var text = finalBuf.trim();
            finalBuf = '';
            setInterim('');
            if (text) {
              if (prefRef.current && prefRef.current.autoSend) {
                sendToComposer(text);
                flashBubble('已发送 ✓', 'ok', 1800);
              } else {
                setFinalText(function (prev) { return prev ? prev + '\n' + text : text; });
                setBubble(text);
                setBubbleKind('');
              }
            }
          }
          var timer = petCtx ? petCtx.get('timer') : null;
          var back = function () {
            setPhase('idle');
            if (!userStoppedRef.current && prefRef.current && prefRef.current.background !== false) {
              try { rec.start(); } catch (e) { /* ignore */ }
            }
          };
          if (timer) { timer.timeout(back, 900); } else { back(); }
        };
        recRef.current = rec;
        return rec;
      }, []);

      function startRecognition() {
        var rec = ensureRecognizer();
        if (!rec) return;
        userStoppedRef.current = false;
        setPhase('holding');
        setBubble('我在听…');
        setBubbleKind('');
        try { rec.start(); } catch (e) { /* ignore */ }
      }
      function stopRecognition() {
        var rec = recRef.current;
        userStoppedRef.current = true;
        if (!rec) return;
        try { rec.stop(); } catch (e) { /* ignore */ }
        var timer = petCtx ? petCtx.get('timer') : null;
        if (timer) {
          timer.timeout(function () {
            if (userStoppedRef.current) {
              setPhase('idle');
              setBubble(function (prev) { return prev === '我在听…' ? '' : prev; });
            }
          }, 700);
        }
      }

      // ---- hold / tap / double-tap / drag ----
      var dragState = React.useRef(null);
      var holdStarted = React.useRef(false);
      function handleTapUp() {
        var now = Date.now();
        if (now - lastTapRef.current < 320) {
          lastTapRef.current = 0;
          if (tapTimerRef.current) { tapTimerRef.current(); tapTimerRef.current = null; }
          if (recRef.current) { userStoppedRef.current = true; try { recRef.current.stop(); } catch (e) {} }
          setPhase('idle');
          setMiniOpen(function (v) { return !v; });
          return;
        }
        lastTapRef.current = now;
        var timer = petCtx ? petCtx.get('timer') : null;
        if (timer && tapTimerRef.current === null) {
          tapTimerRef.current = timer.timeout(function () {
            tapTimerRef.current = null;
            var p = phaseRef.current;
            if (p === 'listening' || p === 'holding') stopRecognition();
            else startRecognition();
          }, 320);
        }
      }

      function onPetPointerDown(e) {
        var el = petRef.current;
        if (!el || !e) return;
        var timer = petCtx ? petCtx.get('timer') : null;
        var mode = (prefRef.current && prefRef.current.triggerMode === 'tap') ? 'tap' : 'hold';
        dragState.current = {
          startX: e.clientX, startY: e.clientY,
          moved: false,
          rect: el.getBoundingClientRect(),
          startTime: Date.now(),
        };
        holdStarted.current = false;
        if (mode === 'hold' && timer && holdTimerRef.current === null) {
          holdTimerRef.current = timer.timeout(function () {
            holdTimerRef.current = null;
            if (dragState.current && !dragState.current.moved) {
              holdStarted.current = true;
              startRecognition();
            }
          }, 280);
        }
        var move = function (ev) {
          var d = dragState.current;
          if (!d) return;
          if (!d.moved && (Math.abs(ev.clientX - d.startX) + Math.abs(ev.clientY - d.startY)) > 6) {
            d.moved = true;
            setMiniOpen(false);
            if (holdTimerRef.current) { holdTimerRef.current(); holdTimerRef.current = null; }
            if (holdStarted.current) { holdStarted.current = false; stopRecognition(); }
          }
          if (d.moved) {
            var left = Math.max(0, d.rect.left + (ev.clientX - d.startX));
            var top = Math.max(0, d.rect.top + (ev.clientY - d.startY));
            setPos({ left: left, top: top });
          }
        };
        var up = function () {
          var d = dragState.current;
          dragState.current = null;
          if (holdTimerRef.current) { holdTimerRef.current(); holdTimerRef.current = null; }
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
          if (d && d.moved) {
            setPref(function (prev) {
              var next = Object.assign({}, prev, { pos: posRef.current || null });
              savePrefs(next);
              return next;
            });
          } else if (mode === 'tap') {
            handleTapUp();
          } else if (holdStarted.current) {
            holdStarted.current = false;
            stopRecognition();
          } else {
            setMiniOpen(function (v) { return !v; });
          }
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
      }
      var posRef = React.useRef(null);
      posRef.current = pos;

      // click outside mini closes it
      React.useEffect(function () {
        if (!miniOpen) return;
        var onDown = function (e) {
          var mini = miniRef.current;
          var pet = petRef.current;
          if (!mini || !pet) return;
          var t = e && e.target;
          if (t && (mini.contains(t) || pet.contains(t))) return;
          setMiniOpen(false);
        };
        window.addEventListener('pointerdown', onDown);
        return function () { window.removeEventListener('pointerdown', onDown); };
      }, [miniOpen]);

      // position mini near pet
      React.useEffect(function () {
        if (!miniOpen) return;
        var frame = function () {
          var el = miniRef.current;
          var pet = petRef.current;
          if (!el || !pet) return;
          var mw = el.offsetWidth;
          var mh = el.offsetHeight;
          var pr = pet.getBoundingClientRect();
          var vw = (typeof window !== 'undefined' && window.innerWidth) || 1280;
          var vh = (typeof window !== 'undefined' && window.innerHeight) || 800;
          var gap = 22;
          var left = pr.left + pr.width / 2 - mw / 2;
          var top = pr.top - mh - gap;
          if (top < 8) top = pr.bottom + gap;
          if (top + mh > vh - 8) top = Math.max(8, vh - mh - 8);
          left = Math.max(8, Math.min(left, vw - mw - 8));
          setMiniStyle({ left: Math.round(left), top: Math.round(top) });
          setBubbleFlip(pr.top < 130);
        };
        frame();
        var timer = petCtx ? petCtx.get('timer') : null;
        if (timer) { var id = timer.timeout(frame, 60); return id; }
        return undefined;
      }, [miniOpen]);

      if (!pref) return null;

      // Disabled state: shrink into a small dormant pet button so the user can
      // always re-enable it with one click (instead of hunting in Settings).
      // The button is draggable too: drag moves it, a click re-enables the pet.
      if (pref.enabled === false) {
        function onSleepPointerDown(e) {
          var el = e.currentTarget;
          if (!el) return;
          sleepDragRef.current = {
            startX: e.clientX, startY: e.clientY,
            moved: false,
            rect: el.getBoundingClientRect(),
          };
          var move = function (ev) {
            var d = sleepDragRef.current;
            if (!d) return;
            if (!d.moved && (Math.abs(ev.clientX - d.startX) + Math.abs(ev.clientY - d.startY)) > 6) {
              d.moved = true;
            }
            if (d.moved) {
              var left = Math.max(0, d.rect.left + (ev.clientX - d.startX));
              var top = Math.max(0, d.rect.top + (ev.clientY - d.startY));
              setPos({ left: left, top: top });
            }
          };
          var up = function () {
            var d = sleepDragRef.current;
            sleepDragRef.current = null;
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', up);
            if (d && d.moved) {
              setPref(function (prev) {
                var p2 = Object.assign({}, prev, { pos: posRef.current || null });
                savePrefs(p2);
                return p2;
              });
            } else {
              setPref(function (prev) {
                var p2 = Object.assign({}, prev, { enabled: true });
                savePrefs(p2);
                return p2;
              });
            }
          };
          window.addEventListener('pointermove', move);
          window.addEventListener('pointerup', up);
        }
        return React.createElement('div', { className: 'vf-root', style: pos || { right: 28, bottom: 90 } },
          React.createElement('button', {
            className: 'vf-sleep',
            title: '点击开启小鲸 · 拖动移动',
            onPointerDown: onSleepPointerDown,
          },
            React.createElement(PixelOrca, { size: 26 }),
          ),
        );
      }

      var size = pref.petSize || 110;
      var petClass = 'vf-pet' +
        (phase === 'listening' || phase === 'holding' ? ' listening' : phase === 'done' ? ' done' : ' idle') +
        (anim ? '' : ' noanim');

      var bubbleText = interim || bubble || (phase === 'listening' || phase === 'holding' ? '我在听…' : '');
      var showActions = !!finalText;
      var bubbleCls = 'vf-bubble' +
        (phase === 'listening' || phase === 'holding' ? ' listening' : '') +
        (bubbleKind === 'err' ? ' err' : '') +
        (bubbleFlip ? ' flip' : '');

      var setSize = function (delta) {
        var next = Math.max(70, Math.min(190, size + delta));
        setPref(function (prev) {
          var p2 = Object.assign({}, prev, { petSize: next });
          savePrefs(p2);
          return p2;
        });
      };
      var updatePref = function (patch) {
        setPref(function (prev) {
          var p2 = Object.assign({}, prev, patch);
          savePrefs(p2);
          return p2;
        });
      };

      return React.createElement('div', { className: 'vf-root', style: pos || { right: 28, bottom: 90 } },
        miniOpen ? React.createElement('div', { className: 'vf-mini', ref: miniRef, style: miniStyle || undefined },
          React.createElement('div', { className: 'vf-mini-head' },
            React.createElement(PixelOrca, { size: 20 }),
            React.createElement('span', { className: 'vf-mini-title' },
              '小鲸',
              React.createElement('span', { className: 'vf-brand' }, 'DEEPSEEK'),
            ),
            React.createElement('button', { className: 'vf-btn', title: '收起面板', onClick: function () { setMiniOpen(false); } }, '—'),
            React.createElement('button', { className: 'vf-btn', title: '关闭桌宠', onClick: function () { updatePref({ enabled: false }); } }, '✕'),
          ),
          React.createElement('div', { className: 'vf-mini-body' },
            React.createElement('div', { className: 'vf-mini-row' },
              React.createElement('span', null, '触发方式'),
              React.createElement('select', {
                className: 'vf-select',
                value: pref.triggerMode || 'hold',
                onChange: function (e) { updatePref({ triggerMode: e.target.value }); },
              },
                React.createElement('option', { value: 'hold' }, '长按说话'),
                React.createElement('option', { value: 'tap' }, '单击切换'),
              ),
            ),
            React.createElement('div', { className: 'vf-mini-row' },
              React.createElement('span', null, '桌宠大小'),
              React.createElement('div', { className: 'vf-size' },
                React.createElement('button', { className: 'vf-step', title: '缩小', onClick: function () { setSize(-10); } }, '-'),
                React.createElement('span', { className: 'vf-step-val' }, size),
                React.createElement('button', { className: 'vf-step', title: '放大', onClick: function () { setSize(10); } }, '+'),
              ),
            ),
            React.createElement('div', { className: 'vf-mini-row' },
              React.createElement('span', null, '识别语言'),
              React.createElement('select', {
                className: 'vf-select',
                value: pref.lang || 'zh-CN',
                onChange: function (e) { updatePref({ lang: e.target.value }); },
              },
                React.createElement('option', { value: 'zh-CN' }, '中文'),
                React.createElement('option', { value: 'yue-Hant-HK' }, '粤语'),
                React.createElement('option', { value: 'zh-TW' }, '繁体'),
                React.createElement('option', { value: 'en-US' }, 'English'),
                React.createElement('option', { value: 'ja-JP' }, '日本語'),
                React.createElement('option', { value: 'ko-KR' }, '한국어'),
                React.createElement('option', { value: 'fr-FR' }, 'Français'),
                React.createElement('option', { value: 'de-DE' }, 'Deutsch'),
                React.createElement('option', { value: 'es-ES' }, 'Español'),
                React.createElement('option', { value: 'ru-RU' }, 'Русский'),
              ),
            ),
            React.createElement('div', { className: 'vf-mini-row' },
              React.createElement('span', null, '松手自动发送'),
              React.createElement('input', {
                type: 'checkbox', className: 'vf-check',
                checked: !!pref.autoSend,
                onChange: function (e) { updatePref({ autoSend: e.target.checked }); },
              }),
            ),
            React.createElement('div', { className: 'vf-mini-row' },
              React.createElement('span', null, '桌宠动画'),
              React.createElement('input', {
                type: 'checkbox', className: 'vf-check',
                checked: anim,
                onChange: function (e) { setAnim(e.target.checked); updatePref({ animations: e.target.checked }); },
              }),
            ),
            React.createElement('div', { className: 'vf-mini-note' }, '按住小鲸说话 · 拖动移动 · 点击外部收起面板'),
          ),
        ) : null,
        bubbleText || showActions ? React.createElement('div', { className: bubbleCls },
          React.createElement('div', { className: 'vf-bubble-text' }, bubbleText || '按住说话…'),
          showActions ? React.createElement('div', { className: 'vf-bubble-actions' },
            React.createElement('button', {
              className: 'vf-ba primary',
              onClick: function () { if (finalText) { sendToComposer(finalText, false); setFinalText(''); } },
            }, '输入框'),
            React.createElement('button', {
              className: 'vf-ba',
              onClick: function () { if (finalText) { sendToComposer(finalText, true); setFinalText(''); } },
            }, '发送'),
            React.createElement('button', { className: 'vf-ba', onClick: function () { setFinalText(''); setBubble(''); setBubbleKind(''); } }, '清空'),
          ) : null,
        ) : null,
        React.createElement('div', {
          className: petClass,
          ref: petRef,
          onPointerDown: onPetPointerDown,
          title: (pref.triggerMode === 'tap' ? '小鲸：单击说话 · 双击设置 · 拖动移动' : '小鲸：按住说话 · 单击设置 · 拖动移动'),
          style: { width: size + 14, height: size + 14 },
        },
          React.createElement(PixelOrca, { size: size }),
        ),
      );
    }

    // ================= cordis client plugin =================
    var name = 'dsh-whale-pet-client';
    var inject = ['slots'];

    function apply(ctx) {
      // inject stylesheet
      ctx.effect(function () {
        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);
        return function () { style.remove(); };
      }, 'dsh-whale-pet: styles');

      // floating pet (frame-wide overlay)
      ctx.effect(function () {
        return ctx.slots.inject('shell.overlay', function () {
          return ctx.slots.register(
            { name: 'shell.overlay', id: 'dsh-whale-pet-window', order: 9000 },
            function () { return React.createElement(WhalePet, { ctx: ctx }); },
          );
        });
      }, 'dsh-whale-pet: overlay');

      // hidden composer bridge: captures InputActions + current draft from the
      // session-scoped dock slot so recognized text can be written into the
      // composer (and sent) directly.
      ctx.effect(function () {
        return ctx.slots.inject('conversation.input.dock', function () {
          return ctx.slots.register(
            { name: 'conversation.input.dock', id: 'dsh-whale-pet-bridge' },
            function (props) {
              bridge.actions = props && props.inputActions ? props.inputActions : undefined;
              var input = props && props.input ? props.input : undefined;
              bridge.currentDraft = input && typeof input.draft === 'string' ? input.draft : '';
              return null;
            },
          );
        });
      }, 'dsh-whale-pet: bridge');

      // settings row (General section)
      ctx.effect(function () {
        return ctx.slots.inject('settings.general.item', function () {
          return ctx.slots.register(
            { name: 'settings.general.item', id: 'dsh-whale-pet-toggle', order: 30 },
            function () { return React.createElement(VoiceSettingsRow, {}); },
          );
        });
      }, 'dsh-whale-pet: settings');
    }

    exports.name = name;
    exports.inject = inject;
    exports.apply = apply;
    return module.exports;
  },
});
