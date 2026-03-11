odoo.define('ramadan_website_ux_design.ramadan_ux', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.RamadanEffects = publicWidget.Widget.extend({
        selector: '.ramadan-decorations',
        start: function () {
            this._generateStars();
            this._initMusicPlayer();
        },
        _generateStars: function () {
            var starfield = document.querySelector('.starfield');
            if (!starfield) return;
            var numberOfStars = 100;
            for (var i = 0; i < numberOfStars; i++) {
                var star = document.createElement('div');
                star.className = 'star';
                if (i % 7 === 0) star.classList.add('large');
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 5 + 's, ' + Math.random() * 10 + 's';
                starfield.appendChild(star);
            }
        },
        _initMusicPlayer: function () {
            var self = this;
            var panel = document.getElementById('musicPlayerPanel');
            var toggle = document.getElementById('panelToggle');
            var audio = document.getElementById('ramadanSong');
            var playPauseBtn = document.getElementById('playPauseBtn');
            var seekSlider = document.getElementById('seekSlider');

            if (!panel || !toggle || !audio || !playPauseBtn || !seekSlider) return;

            toggle.addEventListener('click', function () {
                panel.classList.toggle('open');
            });

            playPauseBtn.addEventListener('click', function () {
                if (audio.paused) {
                    audio.play().catch(e => console.log('Play failed:', e));
                    playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
                } else {
                    audio.pause();
                    playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
                }
            });

            audio.addEventListener('loadedmetadata', function () {
                seekSlider.max = audio.duration;
            });

            audio.addEventListener('timeupdate', function () {
                if (!seekSlider.dragging) {
                    seekSlider.value = audio.currentTime;
                }
            });

            seekSlider.addEventListener('input', function () {
                audio.currentTime = seekSlider.value;
            });

            seekSlider.addEventListener('mousedown', function () {
                seekSlider.dragging = true;
            });
            seekSlider.addEventListener('mouseup', function () {
                seekSlider.dragging = false;
            });

            audio.addEventListener('ended', function () {
                playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
                seekSlider.value = 0;
            });
        }
    });

    return publicWidget.registry.RamadanEffects;
});
