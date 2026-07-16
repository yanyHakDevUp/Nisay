/* =========================================================================
   ស្រលាញ់គេម្នាក់ឯងដែរមែន? 💗 — script.js (GenZ Revamped)
   Vanilla ES6. No frameworks.
   ========================================================================= */

(() => {
  'use strict';

  /* ----------------------------------------------------------------------
     1. PLAYLIST DATA
     Timed precisely to Mann Doss - និស្ស័យ (Official Music Video)
  ---------------------------------------------------------------------- */
  const playlist = [
    {
      title: 'និស្ស័យ (Nisay) 💗',
      artist: 'Mann Doss',
      cover: 'assets/cover.png',
      src: 'assets/song.m4a',
      lrc: 'assets/lyrics.lrc',
    },
  ];

  // Converted LRC timestamps in seconds for fallback offline usage
  const fallbackLyrics = [
    { time: 0, text: '♪ តន្ត្រីចាប់ផ្តើម ♪' },
    { time: 21.80, text: 'ពន្លឺផ្ទៃមេឃយប់នេះ មើលទៅហាក់ស្រស់ថ្លា' },
    { time: 29.68, text: 'យើងឱបក្រសោបគ្នា ក្រោមពន្លឺតារា' },
    { time: 37.99, text: 'អូននិយាយញញឹម នេត្រាយើងចរចា' },
    { time: 45.00, text: 'ក្ដីស្នេហ៍ពិតយ៉ាងណា បងសូមសច្ចាដូចជាព្រេងកថា' },
    { time: 52.50, text: 'ស្នេហ៍យើងគេបានសច្ចា បុព្វេគេកត់ត្រា' },
    { time: 57.00, text: 'ឱ្យយើងមាននិស្ស័យ' },
    { time: 59.92, text: 'ចង់នៅជិតអូនបែបនេះ បង្កើតស្នេហាឱ្យយូរអង្វែងដូចជាសិលា' },
    { time: 68.76, text: 'ចង់នាំអូនទៅកន្លែងត្រជាក់ត្រជុំ ហើយយើងសាងស្នេហាឆ្លងវិវត្តន៍សង្សារ' },
    { time: 74.66, text: 'បងសុំថែរក្សា នៅជីវិតអូន មិនថាប្រាំងវស្សា' },
    { time: 81.22, text: 'ចង់ថតរូបឱ្យអូន ពេលផ្ទឹមនឹងអប្សរា' },
    { time: 84.50, text: 'Baby អូនអស្ចារ្យ សម្រាប់កែវភ្នែកបង' },
    { time: 88.64, text: 'រយលានឧបសគ្គ ទោះប៉ុន្មានក៏បងសុំហែលឆ្លង' },
    { time: 97.59, text: 'ធ្វើជាអ្នកបំពេញ រាល់បំណងដែលរូបអូនធ្លាប់ប៉ង' },
    { time: 103.49, text: 'កាន់ដៃបងថ្នមៗ យើងសម្រេចក្ដីស្រមៃយើងផ្សង' },
    { time: 109.52, text: 'មិនដែលនឹងគិតថា យើងជួបគ្នាពេលនេះ' },
    { time: 115.93, text: 'អារម្មណ៍ដ៏ស៊ីចង្វាក់ រកន័យពិសេស' },
    { time: 118.20, text: 'ចង់នៅជិតអូន Your Girl I\'m Trying The Best' },
    { time: 123.79, text: 'ចង់ឱបក្រសោប មើលថែអូនដល់ថ្ងៃរះ' },
    { time: 128.00, text: 'មើលហើយមើលទៀតមើល តាមអាកប្បកិរិយា' },
    { time: 132.30, text: 'សម្លឹងមើលអូន ចង់ប្រាប់អូនថា និយមន័យស្នេហ៍ ជម្រៅប៉ុណ្ណា......' },
    { time: 136.24, text: 'អូន...អូនគឺអូន គឺអូន ថែមិនឱ្យស្រពោន' },
    { time: 143.44, text: 'ឱបក្រសោបដោយអារម្មណ៍ស៊ីចង្វាក់' },
    { time: 146.80, text: 'អូន...អូនគឺអូន គឺអូន ដែលបងដាក់ចិត្តដាក់កាយ' },
    { time: 150.00, text: 'ទៅមុខស្នេហ៍យើង មិនបកក្រោយ' },
    { time: 155.88, text: 'បេះដូងភ្ជាប់គ្នា យើងស្វែងរកចម្លើយ' },
    { time: 163.75, text: 'Your hand on my shoulder and I wanna hold you slowly and slowly' },
    { time: 169.12, text: 'នៅទីនេះមានតែយើងទាំងពីរ' },
    { time: 174.88, text: 'អរគុណអ្វីគ្រប់យ៉ាង ដែលយើងឆ្លងកាត់' },
    { time: 178.00, text: 'អរគុណនារី អូនជាមនុស្សស្រីដែលអស្ចារ្យ' },
    { time: 188.63, text: 'ឥរិយាបថ អាកប្បកិរិយា' },
    { time: 193.00, text: 'ពេលរំលឹកមើលឃើញអូនពេលណា និយាយពីថា...' },
    { time: 198.46, text: 'ស្នាមញញឹមអូនលើសគេសម្រាប់កែវភ្នែកបង' },
    { time: 202.00, text: 'មួយជីវិតនេះបងសូមតែជួប' },
    { time: 208.92, text: 'My baby បងសុំបីត្រកង បង្កើតចំណង សាងស្នេហ៍សម្រេចក្តីស្រមៃបង' },
    { time: 218.77, text: '♪ តន្ត្រីបញ្ចប់ ♪' },
  ];

  /* ----------------------------------------------------------------------
     2. DOM REFERENCES
  ---------------------------------------------------------------------- */
  const $ = (id) => document.getElementById(id);

  const loader = $('loader');
  const app = $('app');
  const audio = $('audio');

  const coverImg = $('coverImg');
  const artEl = $('art');
  const artRing = $('artRing');
  const statusPill = $('statusPill');
  const statusText = $('statusText');
  const waveCanvas = $('waveCanvas');
  const waveCtx = waveCanvas.getContext('2d');

  const lyricPrev = $('lyricPrev');
  const lyricNext = $('lyricNext');
  const lyricCurrentWrap = $('lyricCurrent');
  const lyricBase = $('lyricBase');
  const lyricFill = $('lyricFill');

  const currentTimeEl = $('currentTime');
  const durationTimeEl = $('durationTime');
  const progressFill = $('progressFill');
  const progressBuffered = $('progressBuffered');
  const progressHandle = $('progressHandle');
  const seekBar = $('seekBar');

  const playBtn = $('playBtn');
  const prevBtn = $('prevBtn');
  const nextBtn = $('nextBtn');
  const shuffleBtn = $('shuffleBtn');
  const repeatBtn = $('repeatBtn');

  const muteBtn = $('muteBtn');
  const volumeBar = $('volumeBar');

  const toast = $('toast');
  const starsWrap = $('stars');
  const heartsWrap = $('floatingHearts');

  const themeBtns = document.querySelectorAll('.theme-btn');
  const stickers = document.querySelectorAll('.sticker');

  const iconPlay = playBtn.querySelector('.icon-play');
  const iconPause = playBtn.querySelector('.icon-pause');
  const iconVolOn = muteBtn.querySelector('.icon-vol-on');
  const iconVolOff = muteBtn.querySelector('.icon-vol-off');

  // Custom Couple Sharing DOM elements
  const shareTriggerBtn = $('shareTriggerBtn');
  const shareModal = $('shareModal');
  const modalCloseBtn = $('modalCloseBtn');
  const inputMessage = $('inputMessage');
  const inputFile = $('inputFile');
  const uploadZone = $('uploadZone');
  const uploadPrompt = $('uploadPrompt');
  const uploadPreview = $('uploadPreview');
  const generateLinkBtn = $('generateLinkBtn');
  const shareResultWrap = $('shareResultWrap');
  const resultLink = $('resultLink');
  const copyLinkBtn = $('copyLinkBtn');
  const messageBanner = $('messageBanner');
  const messageText = $('messageText');
  const inputYtUrl = $('inputYtUrl');
  const karaokeContainer = $('karaoke');

  /* ----------------------------------------------------------------------
     STATE
  ---------------------------------------------------------------------- */
  let currentSongIndex = 0;
  let lyrics = [];
  let activeLyricIndex = -1;
  let isShuffle = false;
  let isRepeat = false;
  let isSeeking = false;
  let toastTimer = null;
  let uploadedImageSrc = '';
  let useYt = false;
  let ytPlayer = null;
  let ytProgressInterval = null;
  let initialYtVideoId = null;

  window.onYouTubeIframeAPIReady = function() {
    window.ytApiReady = true;
    if (initialYtVideoId) {
      initYtPlayer(initialYtVideoId);
    }
  };

  /* ----------------------------------------------------------------------
     3. BOOT SEQUENCE
  ---------------------------------------------------------------------- */
  function boot() {
    buildStars(60);
    buildFloatingHearts(18);
    loadSong(currentSongIndex);
    bindEvents();
    initThemes();
    initStickers();
    initSharing();

    // Reveal the app with a graceful loading screen transition
    const minDelay = new Promise((res) => setTimeout(res, 1200));
    const ready = document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.all([minDelay, ready]).then(() => {
      loader.classList.add('is-hidden');
      app.classList.add('is-visible');
    });
  }

  function buildStars(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'star';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 2 + 1;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.animationDuration = `${2 + Math.random() * 4}s`;
      s.style.animationDelay = `${Math.random() * 4}s`;
      frag.appendChild(s);
    }
    starsWrap.appendChild(frag);
  }

  function buildFloatingHearts(count) {
    const emojis = ['💗', '💕', '💖', '❤️', '✨'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const h = document.createElement('span');
      h.className = 'floating-heart';
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.left = `${Math.random() * 100}%`;
      h.style.setProperty('--drift', `${(Math.random() * 80 - 40).toFixed(0)}px`);
      h.style.fontSize = `${0.8 + Math.random() * 1.3}rem`;
      h.style.animationDuration = `${9 + Math.random() * 10}s`;
      h.style.animationDelay = `${Math.random() * 12}s`;
      frag.appendChild(h);
    }
    heartsWrap.appendChild(frag);
  }

  /* ----------------------------------------------------------------------
     4. LOAD SONG + LRC PARSING
  ---------------------------------------------------------------------- */
  function loadSong(index) {
    const song = playlist[index];
    if (!song) return;

    document.querySelector('.song-info__title').innerHTML =
      `${escapeHtml(song.title)}`;
    document.querySelector('.song-info__artist').textContent = song.artist;

    coverImg.classList.remove('is-broken');
    artEl.classList.remove('no-cover');
    coverImg.src = song.cover;

    audio.src = song.src;
    audio.load();

    resetLyricDisplay();
    fetchLrc(song.lrc);
  }

  function fetchLrc(path) {
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error('LRC not found');
        return res.text();
      })
      .then((text) => {
        const parsed = parseLrc(text);
        lyrics = parsed.length ? parsed : fallbackLyrics;
      })
      .catch(() => {
        // Fail-safe fall back to fallbackLyrics
        lyrics = fallbackLyrics;
      });
  }

  function parseLrc(raw) {
    const lines = raw.split(/\r?\n/);
    const result = [];
    const timeTag = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,2}))?\]/g;

    lines.forEach((line) => {
      const tags = [...line.matchAll(timeTag)];
      if (!tags.length) return;

      const text = line.replace(timeTag, '').trim();
      if (!text) return;

      tags.forEach((tag) => {
        const minutes = parseInt(tag[1], 10);
        const seconds = parseInt(tag[2], 10);
        const centis = tag[3] ? parseInt(tag[3].padEnd(2, '0'), 10) : 0;
        const time = minutes * 60 + seconds + centis / 100;
        result.push({ time, text });
      });
    });

    result.sort((a, b) => a.time - b.time);
    return result;
  }

  function resetLyricDisplay() {
    activeLyricIndex = -1;
    lyricPrev.textContent = '\u00A0';
    lyricNext.textContent = '\u00A0';
    lyricBase.textContent = 'ចុចប៊ូតុងចាក់ ដើម្បីចាប់ផ្តើមស្តាប់បទចម្រៀង 🎵';
    lyricFill.textContent = lyricBase.textContent;
    lyricFill.style.setProperty('--progress', 0);
  }

  /* ----------------------------------------------------------------------
     5. KARAOKE SYNC ENGINE
  ---------------------------------------------------------------------- */
  function syncKaraoke(currentTime) {
    if (!lyrics.length) return;

    // Find active lyric index
    let idx = -1;
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time <= currentTime) idx = i;
      else break;
    }

    if (idx !== activeLyricIndex) {
      activeLyricIndex = idx;
      const current = lyrics[idx];
      const prev = lyrics[idx - 1];
      const next = lyrics[idx + 1];

      lyricPrev.textContent = prev ? prev.text : '\u00A0';
      lyricNext.textContent = next ? next.text : '\u00A0';

      const text = current ? current.text : '\u00A0';
      lyricBase.textContent = text;
      lyricFill.textContent = text;

      lyricCurrentWrap.classList.remove('line-changed');
      // eslint-disable-next-line no-unused-expressions
      void lyricCurrentWrap.offsetWidth; // restart transition animation
      lyricCurrentWrap.classList.add('line-changed');
    }

    // Compute progress wipe
    const current = lyrics[activeLyricIndex];
    const next = lyrics[activeLyricIndex + 1];
    if (current) {
      const start = current.time;
      const end = next ? next.time : start + 6;
      const ratio = clamp((currentTime - start) / (end - start || 1), 0, 1);
      lyricFill.style.setProperty('--progress', ratio.toFixed(4));
    }
  }

  /* ----------------------------------------------------------------------
     6. THEMES & STICKERS
  ---------------------------------------------------------------------- */
  function initThemes() {
    themeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme);
        
        themeBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        let name = '';
        if (theme === 'cyber') name = 'Midnight Cyberpunk 🌌';
        if (theme === 'acid') name = 'Acid Candy 🧪';
        if (theme === 'lavender') name = 'Lavender Dream 🍑';
        if (theme === 'noir') name = 'Vampire Noir 🩸';
        
        showToast(`ប្តូរម៉ូតទៅស្ទីល: ${name}`);
      });
    });
  }

  function initStickers() {
    stickers.forEach((sticker) => {
      sticker.addEventListener('click', (e) => {
        spawnStickerBurst(e);
        // Little bounce feedback
        sticker.style.transform = 'scale(0.85) rotate(0deg)';
        setTimeout(() => {
          sticker.style.transform = '';
        }, 150);
      });
    });
  }

  function spawnStickerBurst(e) {
    const emojis = ['💗', '✨', '🎵', '🔥', '⚡', '💫', '💕'];
    const burstCount = 12;
    const rect = e.target.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < burstCount; i++) {
      const p = document.createElement('span');
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.position = 'fixed';
      p.style.left = `${startX}px`;
      p.style.top = `${startY}px`;
      p.style.fontSize = `${0.7 + Math.random() * 0.9}rem`;
      p.style.pointerEvents = 'none';
      p.style.zIndex = '999';
      p.style.transition = 'none';
      
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 1.5; // push slightly upwards
      
      let x = startX;
      let y = startY;
      let opacity = 1;
      let scale = 1;
      
      document.body.appendChild(p);
      
      const animate = () => {
        x += vx;
        y += vy;
        opacity -= 0.024;
        scale -= 0.018;
        
        p.style.transform = `translate(${x - startX}px, ${y - startY}px) scale(${scale})`;
        p.style.opacity = opacity;
        
        if (opacity > 0 && scale > 0) {
          requestAnimationFrame(animate);
        } else {
          p.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
  }

  /* ----------------------------------------------------------------------
     7. AUDIO PLAYBACK CONTROLS
  ---------------------------------------------------------------------- */
  function bindEvents() {
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle('is-active', isShuffle);
      showToast(isShuffle ? 'បើកចាក់ចៃដន្យ 🔀' : 'បិទចាក់ចៃដន្យ');
    });
    repeatBtn.addEventListener('click', () => {
      isRepeat = !isRepeat;
      repeatBtn.classList.toggle('is-active', isRepeat);
      showToast(isRepeat ? 'ចាក់ដដែលៗ 🔁' : 'បិទចាក់ដដែលៗ');
    });

    audio.addEventListener('loadedmetadata', () => {
      durationTimeEl.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('progress', onBufferProgress);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', () => setPlayingState(true));
    audio.addEventListener('pause', () => setPlayingState(false));
    audio.addEventListener('error', onAudioError);

    seekBar.addEventListener('input', () => {
      isSeeking = true;
      const pct = seekBar.value;
      progressFill.style.width = `${pct}%`;
      progressHandle.style.left = `${pct}%`;
      if (useYt) {
        if (ytPlayer && typeof ytPlayer.getDuration === 'function') {
          currentTimeEl.textContent = formatTime((pct / 100) * ytPlayer.getDuration());
        }
      } else {
        if (audio.duration) {
          currentTimeEl.textContent = formatTime((pct / 100) * audio.duration);
        }
      }
    });
    seekBar.addEventListener('change', () => {
      if (useYt) {
        if (ytPlayer && typeof ytPlayer.getDuration === 'function' && typeof ytPlayer.seekTo === 'function') {
          ytPlayer.seekTo((seekBar.value / 100) * ytPlayer.getDuration(), true);
        }
      } else {
        if (audio.duration) {
          audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
      }
      isSeeking = false;
    });

    volumeBar.addEventListener('input', () => {
      const v = volumeBar.value / 100;
      if (useYt) {
        if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
          ytPlayer.setVolume(volumeBar.value);
          ytPlayer.setMuted(volumeBar.value === 0);
        }
      } else {
        audio.volume = v;
        audio.muted = v === 0;
      }
      updateVolumeUI(v);
    });
    muteBtn.addEventListener('click', () => {
      if (useYt) {
        if (ytPlayer && typeof ytPlayer.isMuted === 'function' && typeof ytPlayer.setMuted === 'function') {
          const muted = !ytPlayer.isMuted();
          ytPlayer.setMuted(muted);
          updateVolumeUI(muted ? 0 : volumeBar.value / 100);
        }
      } else {
        audio.muted = !audio.muted;
        updateVolumeUI(audio.muted ? 0 : volumeBar.value / 100);
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
      if (e.code === 'ArrowRight') {
        if (useYt) {
          if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function' && typeof ytPlayer.seekTo === 'function') {
            ytPlayer.seekTo(ytPlayer.getCurrentTime() + 5, true);
          }
        } else {
          audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
        }
      }
      if (e.code === 'ArrowLeft') {
        if (useYt) {
          if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function' && typeof ytPlayer.seekTo === 'function') {
            ytPlayer.seekTo(Math.max(0, ytPlayer.getCurrentTime() - 5), true);
          }
        } else {
          audio.currentTime = Math.max(0, audio.currentTime - 5);
        }
      }
    });
  }

  function togglePlay() {
    if (useYt) {
      if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
      const state = ytPlayer.getPlayerState();
      if (state === 1) { // playing
        ytPlayer.pauseVideo();
      } else {
        ytPlayer.playVideo();
      }
      return;
    }
    if (audio.paused) {
      ensureAudioContext();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          showToast('សូមពិនិត្យមើលឯកសារ assets/song.m4a ដើម្បីចាក់ចម្រៀង 🎵');
        });
      }
    } else {
      audio.pause();
    }
  }

  function playNext() {
    if (useYt) {
      if (ytPlayer && typeof ytPlayer.seekTo === 'function') ytPlayer.seekTo(0, true);
      return;
    }
    if (isShuffle && playlist.length > 1) {
      let next;
      do { next = Math.floor(Math.random() * playlist.length); }
      while (next === currentSongIndex);
      currentSongIndex = next;
    } else {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
    }
    loadSong(currentSongIndex);
    attemptAutoplay();
  }

  function playPrevious() {
    if (useYt) {
      if (ytPlayer && typeof ytPlayer.seekTo === 'function') ytPlayer.seekTo(0, true);
      return;
    }
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    attemptAutoplay();
  }

  function attemptAutoplay() {
    const wasPlaying = !audio.paused;
    if (wasPlaying) {
      audio.play().catch(() => {});
    }
  }

  function onEnded() {
    if (isRepeat) {
      audio.currentTime = 0;
      audio.play();
    } else {
      playNext();
    }
  }

  function onTimeUpdate() {
    if (!audio.duration || isSeeking) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${pct}%`;
    progressHandle.style.left = `${pct}%`;
    seekBar.value = pct;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    syncKaraoke(audio.currentTime);
  }

  function onBufferProgress() {
    if (audio.buffered.length && audio.duration) {
      const end = audio.buffered.end(audio.buffered.length - 1);
      progressBuffered.style.width = `${(end / audio.duration) * 100}%`;
    }
  }

  function onAudioError() {
    setPlayingState(false);
    showToast('រកមិនឃើញឯកសារចម្រៀង — សូមដាក់ assets/song.m4a ✨');
  }

  function setPlayingState(playing) {
    iconPlay.style.display = playing ? 'none' : 'block';
    iconPause.style.display = playing ? 'block' : 'none';
    artEl.classList.toggle('is-playing', playing);
    artRing.classList.toggle('is-playing', playing);
    statusPill.classList.toggle('is-playing', playing);
    statusText.textContent = playing ? 'កំពុងចាក់' : 'ផ្អាក';
    playing ? startVisualizer() : stopVisualizer();

    if (useYt) {
      if (playing) {
        startYtProgressLoop();
      } else {
        stopYtProgressLoop();
      }
    }
  }

  function updateVolumeUI(v) {
    const pct = Math.round(v * 100);
    volumeBar.value = pct;
    const accentCol = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#ff007f';
    volumeBar.style.background =
      `linear-gradient(90deg, ${accentCol} ${pct}%, rgba(255,255,255,.08) ${pct}%)`;
    iconVolOn.style.display = pct === 0 ? 'none' : 'block';
    iconVolOff.style.display = pct === 0 ? 'block' : 'none';
  }

  /* ----------------------------------------------------------------------
     8. WEB AUDIO API CANVAS VISUALIZER
  ---------------------------------------------------------------------- */
  let audioCtx = null;
  let analyser = null;
  let sourceNode = null;
  let rafId = null;
  let visualizerActive = false;

  function ensureAudioContext() {
    if (audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      sourceNode = audioCtx.createMediaElementSource(audio);
      sourceNode.connect(analyser);
      analyser.connect(audioCtx.destination);
    } catch (err) {
      audioCtx = null;
      analyser = null;
    }
  }

  function drawCircularWave(data, cx, cy, baseRadius, color, lineWidth, opacity, phase) {
    waveCtx.beginPath();
    waveCtx.lineWidth = lineWidth;
    waveCtx.strokeStyle = color;
    waveCtx.shadowBlur = 12;
    waveCtx.shadowColor = color;
    waveCtx.globalAlpha = opacity;
    
    const points = 80;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2 + phase;
      
      // Map angles smoothly to FFT bins
      const binIdx = Math.floor((i % (points / 2)) / (points / 2) * (data.length * 0.7));
      const val = data[binIdx] || 0;
      
      // Calculate radius modulation
      const radiusOffset = (val / 255) * 32;
      const r = baseRadius + radiusOffset;
      
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      
      if (i === 0) {
        waveCtx.moveTo(x, y);
      } else {
        waveCtx.lineTo(x, y);
      }
    }
    waveCtx.closePath();
    waveCtx.stroke();
    waveCtx.globalAlpha = 1;
    waveCtx.shadowBlur = 0; // reset shadow
  }

  function startVisualizer() {
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    visualizerActive = true;
    
    const render = () => {
      if (!visualizerActive) return;

      const cw = waveCanvas.width;
      const ch = waveCanvas.height;
      waveCtx.clearRect(0, 0, cw, ch);

      const cx = cw / 2;
      const cy = ch / 2;
      const baseRadius = 115; // wraps the album cover beautifully

      // Fetch dynamic colors from active theme variables
      const style = getComputedStyle(document.documentElement);
      const color1 = style.getPropertyValue('--accent-primary').trim() || '#ff007f';
      const color2 = style.getPropertyValue('--accent-secondary').trim() || '#00f0ff';
      const color3 = style.getPropertyValue('--accent-highlight').trim() || '#ccff00';

      if (analyser) {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);
        
        // Draw 3 layers of glowing circular soundwaves
        drawCircularWave(data, cx, cy, baseRadius, color1, 2.5, 0.45, 0);
        drawCircularWave(data, cx, cy, baseRadius - 4, color2, 1.8, 0.35, Math.PI / 3);
        drawCircularWave(data, cx, cy, baseRadius + 4, color3, 1.0, 0.25, -Math.PI / 4);
      } else {
        // Safe idle animation if analyser isn't loaded (e.g. cross-origin/autoplay restrictions)
        const t = Date.now() * 0.003;
        const fakeData = new Uint8Array(64);
        for (let i = 0; i < 64; i++) {
          fakeData[i] = (Math.sin(t + i * 0.25) * 0.5 + 0.5) * 80;
        }
        drawCircularWave(fakeData, cx, cy, baseRadius, color1, 2.0, 0.4, t * 0.5);
        drawCircularWave(fakeData, cx, cy, baseRadius - 3, color2, 1.5, 0.3, -t * 0.3);
      }

      rafId = requestAnimationFrame(render);
    };
    cancelAnimationFrame(rafId);
    render();
  }

  function stopVisualizer() {
    visualizerActive = false;
    cancelAnimationFrame(rafId);
    // Draw default visualizer rings when idle
    setTimeout(() => {
      const cw = waveCanvas.width;
      const ch = waveCanvas.height;
      waveCtx.clearRect(0, 0, cw, ch);
      const cx = cw / 2;
      const cy = ch / 2;
      const baseRadius = 115;
      
      const style = getComputedStyle(document.documentElement);
      const color1 = style.getPropertyValue('--accent-primary').trim() || '#ff007f';
      const color2 = style.getPropertyValue('--accent-secondary').trim() || '#00f0ff';
      
      // Flat idle circles
      waveCtx.beginPath();
      waveCtx.strokeStyle = color1;
      waveCtx.lineWidth = 1.5;
      waveCtx.globalAlpha = 0.25;
      waveCtx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      waveCtx.stroke();
      
      waveCtx.beginPath();
      waveCtx.strokeStyle = color2;
      waveCtx.lineWidth = 1.0;
      waveCtx.globalAlpha = 0.15;
      waveCtx.arc(cx, cy, baseRadius - 4, 0, Math.PI * 2);
      waveCtx.stroke();
      
      waveCtx.globalAlpha = 1;
    }, 100);
  }

  /* ----------------------------------------------------------------------
     8.5. CUSTOM COUPLE SHARING SYSTEM
  ---------------------------------------------------------------------- */
  function initSharing() {
    // 1. Check for shared hash on load
    parseSharedLink();

    // 2. Open/Close Modal
    shareTriggerBtn.addEventListener('click', () => {
      shareModal.classList.add('is-visible');
      shareModal.setAttribute('aria-hidden', 'false');
      // Reset generated result
      shareResultWrap.style.display = 'none';
      resultLink.value = '';
    });

    const closeModal = () => {
      shareModal.classList.remove('is-visible');
      shareModal.setAttribute('aria-hidden', 'true');
    };

    modalCloseBtn.addEventListener('click', closeModal);
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) closeModal();
    });

    // 3. File Upload handling
    inputFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedImageSrc = event.target.result;
        uploadPreview.src = uploadedImageSrc;
        uploadPreview.style.display = 'block';
        uploadPrompt.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });

    // Drag and drop event animation styling
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '#ffffff';
        uploadZone.style.background = 'rgba(255, 255, 255, 0.08)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '';
        uploadZone.style.background = '';
      }, false);
    });

    uploadZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      if (file && file.type.startsWith('image/')) {
        inputFile.files = dt.files;
        const event = new Event('change');
        inputFile.dispatchEvent(event);
      }
    });

    // 4. Generate Link with Uploaded/Compressed Image and YouTube Link
    generateLinkBtn.addEventListener('click', () => {
      const msgText = inputMessage.value.trim();
      const ytUrlVal = inputYtUrl.value.trim();
      const ytId = getYoutubeId(ytUrlVal);

      if (uploadedImageSrc) {
        showToast('កំពុងបង្ហោះរូបភាពគូស្នេហ៍... ⏳');
        uploadImage(uploadedImageSrc, (imgUrl) => {
          generateAndDisplayLink(msgText, imgUrl, ytId);
        });
      } else {
        generateAndDisplayLink(msgText, '', ytId);
      }
    });

    // 5. Copy Link Button
    copyLinkBtn.addEventListener('click', () => {
      if (!resultLink.value) return;
      resultLink.select();
      resultLink.setSelectionRange(0, 99999); /* For mobile devices */
      
      navigator.clipboard.writeText(resultLink.value)
        .then(() => {
          showToast('ចម្លងតំណភ្ជាប់ជោគជ័យ! 💗');
          copyLinkBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyLinkBtn.textContent = 'ចម្លង (Copy)';
          }, 2000);
        })
        .catch(() => {
          showToast('ចម្លងមិនបានជោគជ័យ សូមចម្លងដោយដៃ 😅');
        });
    });
  }
  function uploadImage(dataUrl, callback) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 300; // 300x300 looks beautiful and crisp as album cover
      let w = img.width;
      let h = img.height;

      // Crop to square
      const size = Math.min(w, h);
      canvas.width = maxDim;
      canvas.height = maxDim;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        img,
        (w - size) / 2,
        (h - size) / 2,
        size,
        size,
        0,
        0,
        maxDim,
        maxDim
      );

      // Convert to Blob and upload to Pixeldrain
      canvas.toBlob((blob) => {
        if (!blob) {
          fallbackToBase64();
          return;
        }

        const formData = new FormData();
        formData.append('file', blob, 'couple.jpg');

        fetch('https://pixeldrain.com/api/file', {
          method: 'POST',
          body: formData
        })
        .then(res => {
          if (!res.ok) throw new Error('Upload failed');
          return res.json();
        })
        .then(data => {
          if (data.success && data.id) {
            const directUrl = `https://pixeldrain.com/api/file/${data.id}`;
            callback(directUrl);
          } else {
            fallbackToBase64();
          }
        })
        .catch(() => {
          fallbackToBase64();
        });
      }, 'image/jpeg', 0.82); // High quality JPEG!

      function fallbackToBase64() {
        // Fallback: compress down to a very small base64 string (90x90, 0.38 quality) to fit URL limits
        const smallCanvas = document.createElement('canvas');
        smallCanvas.width = 90;
        smallCanvas.height = 90;
        const smallCtx = smallCanvas.getContext('2d');
        smallCtx.drawImage(canvas, 0, 0, 90, 90);
        const base64Str = smallCanvas.toDataURL('image/jpeg', 0.38);
        callback(base64Str);
      }
    };

    img.onerror = function() {
      callback('');
    };

    img.src = dataUrl;
  }

  function shortenUrlWithJsonp(longUrl, callback) {
    const callbackName = 'isgd_callback_' + Math.floor(Math.random() * 1000000);
    window[callbackName] = function(data) {
      delete window[callbackName];
      const scriptNode = document.getElementById(callbackName);
      if (scriptNode) scriptNode.remove();
      
      if (data.shorturl) {
        callback(data.shorturl);
      } else {
        callback(null);
      }
    };

    const script = document.createElement('script');
    script.id = callbackName;
    script.src = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}&callback=${callbackName}`;
    script.onerror = function() {
      delete window[callbackName];
      script.remove();
      callback(null);
    };
    document.body.appendChild(script);
  }

  function generateAndDisplayLink(msg, imgSrc, ytId) {
    const baseLink = window.location.origin + window.location.pathname;
    const params = [];
    if (msg) params.push('msg=' + encodeURIComponent(msg));
    if (imgSrc) params.push('img=' + encodeURIComponent(imgSrc));
    if (ytId) params.push('yt=' + encodeURIComponent(ytId));

    const hash = params.join('&');
    const fullLink = baseLink + (hash ? '#' + hash : '');
    
    // Fallback: show the long URL first so something is always copyable
    resultLink.value = fullLink;
    shareResultWrap.style.display = 'block';

    showToast('កំពុងបង្កើតតំណភ្ជាប់ខ្លី... 🔗');
    shortenUrlWithJsonp(fullLink, (shortUrl) => {
      if (shortUrl) {
        resultLink.value = shortUrl;
        showToast('បង្កើតតំណភ្ជាប់ខ្លីជោគជ័យ! 🎉');
      } else {
        showToast('បង្កើតតំណភ្ជាប់វែងជោគជ័យ! 🎉');
      }
    });
  }

  function parseSharedLink() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const params = {};
    hash.split('&').forEach(part => {
      const kv = part.split('=');
      if (kv[0] && kv[1]) {
        params[kv[0]] = decodeURIComponent(kv[1]);
      }
    });

    if (params.msg) {
      messageBanner.style.display = 'flex';
      messageText.textContent = params.msg;
    }
    if (params.img) {
      coverImg.src = params.img;
      artEl.style.animation = 'none'; // Keep custom artwork upright and stable
    }
    if (params.yt) {
      useYt = true;
      // Hide lyrics container
      if (karaokeContainer) {
        karaokeContainer.classList.add('is-hidden');
      }
      initialYtVideoId = params.yt;
      // Clear audio source to avoid dual playback
      audio.src = '';
      audio.load();

      if (window.ytApiReady) {
        initYtPlayer(initialYtVideoId);
      } else {
        loadYoutubeIframeApi();
      }
    }
  }

  /* ----------------------------------------------------------------------
     8.6. YOUTUBE IFRAME INTEGRATION HELPERS
  ---------------------------------------------------------------------- */
  function loadYoutubeIframeApi() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function initYtPlayer(videoId) {
    if (ytPlayer) return;
    ytPlayer = new YT.Player('ytPlayer', {
      height: '1',
      width: '1',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'rel': 0,
        'modestbranding': 1,
        'origin': window.location.origin
      },
      events: {
        'onReady': onYtPlayerReady,
        'onStateChange': onYtPlayerStateChange
      }
    });
  }

  function onYtPlayerReady() {
    setTimeout(() => {
      if (ytPlayer && typeof ytPlayer.getDuration === 'function') {
        durationTimeEl.textContent = formatTime(ytPlayer.getDuration());
      }
    }, 1000);

    // Dynamically fetch the YouTube video title & author via oEmbed (no API key needed)
    if (initialYtVideoId) {
      const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${initialYtVideoId}&format=json`;
      fetch(oEmbedUrl)
        .then(res => {
          if (!res.ok) throw new Error('oEmbed failed');
          return res.json();
        })
        .then(data => {
          const titleEl = document.querySelector('.song-info__title');
          const artistEl = document.querySelector('.song-info__artist');
          if (titleEl && data.title) {
            titleEl.innerHTML = escapeHtml(data.title);
          }
          if (artistEl && data.author_name) {
            artistEl.textContent = data.author_name;
          }
          // Also update the browser tab title
          if (data.title) {
            document.title = `${data.title} 💗`;
          }
        })
        .catch(() => {
          // Silently fall back — title stays as default
        });
    }
  }

  function onYtPlayerStateChange(event) {
    // 1 = playing, 2 = paused, 0 = ended
    if (event.data === 1) {
      setPlayingState(true);
    } else if (event.data === 2 || event.data === 3 || event.data === -1) {
      setPlayingState(false);
    } else if (event.data === 0) {
      setPlayingState(false);
      if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
        ytPlayer.seekTo(0, true); // loop back
      }
    }
  }

  function startYtProgressLoop() {
    stopYtProgressLoop();
    ytProgressInterval = setInterval(() => {
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function' || isSeeking) return;
      const cur = ytPlayer.getCurrentTime();
      const dur = ytPlayer.getDuration() || 1;
      const pct = (cur / dur) * 100;

      progressFill.style.width = `${pct}%`;
      progressHandle.style.left = `${pct}%`;
      seekBar.value = pct;
      currentTimeEl.textContent = formatTime(cur);
      durationTimeEl.textContent = formatTime(dur);
    }, 250);
  }

  function stopYtProgressLoop() {
    clearInterval(ytProgressInterval);
  }

  function getYoutubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  /* ----------------------------------------------------------------------
     9. UTILITY HELPERS
  ---------------------------------------------------------------------- */
  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800);
  }

  // Cover image fallback
  coverImg.addEventListener('error', () => {
    coverImg.classList.add('is-broken');
    artEl.classList.add('no-cover');
  });

  /* ----------------------------------------------------------------------
     RUN
  ---------------------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
