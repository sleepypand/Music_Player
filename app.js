const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dashBoard = $('#dashboard')
const playlist = $('#playlist');
const audio = $('#audio')
const header = $('header h2')
const thumb = $('.thumbnail')
const thumbbox = $('.thumb-box')
const playBtn = $('.play-btn')
const timeLine = $('.time-line')
const nextBtn = $('.next-btn')
const prevBtn = $('.prev-btn')
const reapeatBtn = $('.repeat-btn')
const randomBtn = $('.random-btn')

const app = {
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    currentIndex: 0,
    songs: [
        {
            name: 'Futari No Kimochi',
            singer: 'Karou Wada',
            thumbNail: './assets/img/song-thumbnail1.jpg',
            audioSrc: './assets/audio/FutariNoKimochi-VA_4gc8n.mp3',
        },
        {
            name: 'Unravel',
            singer: 'Toru Kitajima',
            thumbNail: './assets/img/song-thumbnail2.jpg',
            audioSrc: './assets/audio/Unravel-TK-4488169.mp3',
        },
        {
            name: 'Shinzo wo Sasageyo',
            singer: 'Linked Horizon',
            thumbNail: './assets/img/song-thumbnail3.jpg',
            audioSrc: './assets/audio/ShinzouWoSasageyoShingekiNoKyojinSeason2OpeningTVSize-LinkedHorizon-4859520.mp3',
        },
        {
            name: 'Blue Bird',
            singer: 'Ikimono Gakari',
            thumbNail: './assets/img/song-thumbnail4.jpg',
            audioSrc: './assets/audio/BlueBird-IkimonoGakari-2434308.mp3',
        },
        {
            name: '3107',
            singer: 'W/n, Duongg, Nâu',
            thumbNail: './assets/img/song-thumbnail7.jpg',
            audioSrc: './assets/audio/3107-WnDuonggNau-6099150.mp3',
        },
        {
            name: '3107-2',
            singer: 'W/n, Duongg, Nâu',
            thumbNail: './assets/img/song-thumbnail6.jpg',
            audioSrc: './assets/audio/31072-DuonggNauWn-6937818.mp3',
        },
        {
            name: '3107-3',
            singer: 'W/n, Duongg, Nâu, V.A',
            thumbNail: './assets/img/song-thumbnail5.jpg',
            audioSrc: './assets/audio/31073-WNDuonggNautitie-7059323.mp3',
        },
        {
            name: 'Đường tôi chở em về',
            singer: 'Buitruonglinh',
            thumbNail: './assets/img/song-thumbnail8.jpg',
            audioSrc: './assets/audio/DuongTaChoEmVe-buitruonglinh-6318765.mp3',
        },
        {
            name: 'Thức giấc',
            singer: 'Da LAB',
            thumbNail: './assets/img/song-thumbnail9.jpg',
            audioSrc: './assets/audio/ThucGiac-DaLAB-7048212.mp3',
        },
        {
            name: 'Bông hoa đẹp nhât',
            singer: 'Quân A.P',
            thumbNail: './assets/img/song-thumbnail10.jpg',
            audioSrc: './assets/audio/BongHoaDepNhat-QuanAP-6607955.mp3',
        },
        {
            name: 'Tình yêu khủng long',
            singer: 'Fay',
            thumbNail: './assets/img/song-thumbnail11.jpg',
            audioSrc: './assets/audio/TinhYeuKhungLong-FAY-6247040.mp3',
        },
        {
            name: 'Nàng thơ',
            singer: 'Hoàng Dũng',
            thumbNail: './assets/img/song-thumbnail12.jpg',
            audioSrc: './assets/audio/NangTho-HoangDung-6413381.mp3',
        },
        {
            name: 'Sài Gòn đau lòng quá',
            singer: 'Hứa Kim Tuyền x Hoàng Duyên',
            thumbNail: './assets/img/song-thumbnail13.jpg',
            audioSrc: './assets/audio/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977 (1).mp3',
        },
        {
            name: 'Ex\' hate me',
            singer: 'AMEE x B RAY',
            thumbNail: './assets/img/song-thumbnail14.jpg',
            audioSrc: './assets/audio/ExsHateMe-BRayMasewAMee-5878683.mp3',
        },
        {
            name: 'Khó vẽ nụ cười',
            singer: 'Đạt G x Du Uyên',
            thumbNail: './assets/img/song-thumbnail15.jpg',
            audioSrc: './assets/audio/KhoVeNuCuoi-DatGDuUyen-6114344.mp3',
        },
        {
            name: 'Crush 2',
            singer: 'W/n Ft (Tez, Titie)',
            thumbNail: './assets/img/song-thumbnail16.jpg',
            audioSrc: './assets/audio/Crush2-WnTezTien-6174294.mp3',
        },
        {
            name: 'Mượn rượu tỏ tình',
            singer: 'Emily x Bigdaddy',
            thumbNail: './assets/img/song-thumbnail17.jpg',
            audioSrc: './assets/audio/MuonRuouToTinh-EmilyBigDaddy-5871420.mp3',
        },
        {
            name: 'Độ tộc 2',
            singer: 'Masew x Phúc Du x Pháo x Độ Mixi',
            thumbNail: './assets/img/song-thumbnail18.jpg',
            audioSrc: './assets/audio/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3',
        },
        {
            name: 'Thì thôi',
            singer: 'Reddy',
            thumbNail: './assets/img/song-thumbnail19.jpg',
            audioSrc: './assets/audio/ThiThoi-Reddy-5461229.mp3',
        },
        {
            name: 'Tháng năm',
            singer: 'Soobin Hoàng Sơn',
            thumbNail: './assets/img/song-thumbnail20.jpg',
            audioSrc: './assets/audio/ThangNamSpecialPerformance-SoobinHoangSonSlimV-7020121.mp3',
        },
        {
            name: 'Đi để trở về 2',
            singer: 'Soobin Hoàng Sơn',
            thumbNail: './assets/img/song-thumbnail21.jpg',
            audioSrc: './assets/audio/ChuyenDiCuaNamDiDeTroVe2-SoobinHoangSon-5332599.mp3',
        },
        {
            name: 'Đi để trở về 3',
            singer: 'Soobin Hoàng Sơn',
            thumbNail: './assets/img/song-thumbnail22.jpg',
            audioSrc: './assets/audio/SeHuaDiCungNhauDiDeTroVe3-SoobinHoangSonDaLAB-5837283.mp3',
        },
        {
            name: '???',
            singer: '?????',
            thumbNail: './assets/img/song-thumbnail23.png',
            audioSrc: './assets/audio/miếng-ăn-là-miếng-nhục.mp3',
        },
    ],
    render: function() {
        var htmls = this.songs.map((song,index) => {
            return `
            <div class="song ${this.currentIndex === index ? 'active' : ''}" data-set="${index}">
                <div class="song_description">
                    <img class="song__thumb" src="${song.thumbNail}" alt="">
                    <div class="song__content">
                        <h3 class="song__heading ${this.currentIndex === index ? 'active' : ''}">${song.name} </h3>
                        <p class="song__author ${this.currentIndex === index ? 'active' : ''}">${song.singer} </p>
                    </div>
                </div>
                <div class="song__options">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        }) 
        playlist.innerHTML = htmls.join('')
    },
    handleEvent: function() {
        const _this = this

        // Xử lý scroll
        const thumbWidth = thumb.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newThumbWidth = thumbWidth - scrollTop
            thumb.style.width = newThumbWidth < 0 ? 0 : newThumbWidth + 'px'
            thumb.style.opacity =  newThumbWidth / thumbWidth
            if (scrollTop >= 193) {
                dashBoard.classList.add('docScroll')
            }
            else {
                dashBoard.classList.remove('docScroll')
            }

        }

        // Xử lý quay / dừng cd
        thumbRotate = thumb.animate([
            { transform: 'rotate(360deg)' }
        ],{
            duration: 10000,
            iterations: Infinity
        })
        thumbRotate.pause()

        // Xử lý play song
        playBtn.onclick = function() {
            _this.isPlaying = !_this.isPlaying
            _this.playSong(_this.isPlaying)
        }

        // TimeLine chạy
        audio.ontimeupdate = function () {
            if (audio.duration) {
                timeLine.value = (audio.currentTime / audio.duration) *100
            }
            if (audio.currentTime === audio.duration) {
                playBtn.classList.add('fa-play')
            }
        }

        // Xử lý tua audio
        timeLine.oninput = function() {
            audio.currentTime = audio.duration / 100 * timeLine.value
        }

        // Xử lý next/prev song
        nextBtn.onclick = function() {
            if (_this.isRandom === true) {
                _this.randSong()
            }
            _this.nextSong()
            _this.loadSong()
            audio.play()
            playBtn.classList.remove('fa-play')
            thumbRotate.play()
            _this.render()
        }

        prevBtn.onclick = function() {
            if (_this.isRandom === true) {
                _this.randSong()
            }
            _this.prevSong()
            _this.loadSong()
            audio.play()
            playBtn.classList.remove('fa-play')
            thumbRotate.play()
            _this.render()
        }

        // Xử lý auto play / auto repeat / random

        // click repeat
        reapeatBtn.onclick = function() {
            if (!_this.isRepeat) {
                reapeatBtn.classList.add('active')
                _this.isRandom = false
                randomBtn.classList.remove('active')
            }
            else {
                reapeatBtn.classList.remove('active')
            }
            _this.isRepeat = !_this.isRepeat
        }
        // click random
        randomBtn.onclick = function() {
            if (!_this.isRandom) {
                randomBtn.classList.add('active')
                _this.isRepeat = false
                reapeatBtn.classList.remove('active')
            }
            else {
                randomBtn.classList.remove('active')
            }
            _this.isRandom = !_this.isRandom
        }

        audio.onended = function() {
            thumbRotate.pause()
            if (_this.isRepeat === true) {
                _this.repeatSong()
            }
            else if (_this.isRandom === true){
                _this.randSong()
                _this.render()
            }
            else {
                playBtn.classList.remove('fa-play')
                _this.nextSong()
                _this.loadSong()
                thumbRotate.play()
                audio.play()
                _this.render()
            }
        }
        
        // Chọn song 
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.song__options')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.getAttribute('data-set'))
                }
            }
            thumbRotate.play()
            playBtn.classList.remove('fa-play')
            _this.loadSong()
            _this.render()
            audio.play()
        }   
    },
    loadSong: function() {
        header.innerText = this.songs[this.currentIndex].name
        thumb.src = this.songs[this.currentIndex].thumbNail
        audio.src = this.songs[this.currentIndex].audioSrc
    },
    playSong: function(isPlaying) {
        if (isPlaying) {
            playBtn.classList.remove('fa-play')
            thumbRotate.play()
            audio.play()
        }
        else {
            playBtn.classList.add('fa-play')
            thumbRotate.pause()
            audio.pause()
        }
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
    },
    randSong: function() {
        var newIndex = Math.floor(Math.random() * this.songs.length)
        if (newIndex === this.currentIndex) {
            this.randSong()
        }
        else {
            this.currentIndex = newIndex
            this.loadSong()
            audio.play()
            playBtn.classList.remove('fa-play')
            thumbRotate.play()
        }
    },
    repeatSong: function() {
        audio.play()
        playBtn.classList.remove('fa-play')
        thumbRotate.play()
    },
    start: function() {
        this.render()

        this.loadSong()

        this.handleEvent()
    }
}

app.start();