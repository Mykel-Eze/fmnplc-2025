<template>
    <section id="sec-home" class="page-hero relative overflow-hidden p-2">
        <div class="hero-image-wrapper relative h-64 md:h-80 lg:h-96 rounded-md md:rounded-2xl overflow-hidden">
            <video autolplay muted preload loop id="vid-bg">
                <source
                    src="/careers-video-banner.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div id="vid-details">
                <h4 class="bold-txt">
                    <span class="pry-bg">
                        <span class="rel">{{ VideoTitle }}</span>
                        <small>{{ VideoSubTitle }}</small>
                    </span>
                </h4>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PageVideoBanner',
    props: {
        VideoTitle: String,
        VideoSubTitle: String
    },
    mounted() {
        this.bgVideoControl();
    },
    methods: {
        // Pause and play the video, and change the button text
        bgVideoControl() {
            var video = document.getElementById('vid-bg');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
    },
};
</script>

<style scoped>
section#sec-home > .hero-image-wrapper {
    background-image: url(/careers-video-banner.png);
    background-size: cover;
    background-position: center;
    overflow: hidden;
    height: 50vh;
    min-height: 400px;
}
#vid-bg {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    min-height: 100%;
}
#vid-details {
    position: absolute;
    display: flex;
    /* justify-content: space-around; */
    width: 100%;
    padding: 20px 30px;
    bottom: 20px;
    height: auto;
}
#vid-details h4 {
    font-size: 2rem;
}
#vid-details h4 > span {
    padding: 10px;
    display: inline-block;
    position: relative;
    background-color: transparent;
}
#vid-details h4 > span::before, #vid-details h4 > span::after {
    position: absolute;
    content: '';
    transform: skew(20deg);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
}
 #vid-details h4 > span::after {
    background-color: var(--sec-color);
    z-index: 1;
    left: 10px;
    top: 10px;
 }
#vid-details h4 > span.pry-bg::before {
    background: var(--pry-color);
    z-index: 2;
}
#vid-details h4 > span.pry-bg {
    color: var(--sec-color);
}
#vid-details h4 > span.pry-bg > * {
    z-index: 3;
}
#vid-details h4 > span.sec-bg::before {
    background: var(--sec-color);
}
#vid-details h4 > span.sec-bg {
    color: var(--pry-color);
}
#vid-details h4 > span.black-bg::before {
    background: black;
}
#vid-details h4 > span.black-bg {
    color: white;
}
#vid-details button.btn {
    background: var(--pry-color);
    position: relative;
    top: 16px;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    animation: pulse-1 2s infinite;
}
#vid-play-i {
    font-size: 2rem;
    line-height: 50px;
}
#vid-details small {
    display: block;
    color: white;
    position: relative;
    font-family: var(--font-xlite);
    font-size: 18px;
    letter-spacing: 0;
    /* padding-left: 20px; */
    margin-top: -6px;
    text-align: center;
}
@media (min-width: 993px) {
    #vid-bg {
        min-width: 100%;
        max-width: auto;
    }
    #vid-details {
        padding-left: 10%;
    }
}
@media (max-width: 600px) {
    section#sec-home > .hero-image-wrapper {
        background-image: url(/careers-video-banner-3.png);
    }
    #vid-details h4 {
        font-size: 1.8rem;
    }
    #vid-details {
        display: block;
        width: 100%;
        padding: 10px 10px;
    }
    #vid-details small {
        font-size: 15px;
    }
}
</style>
