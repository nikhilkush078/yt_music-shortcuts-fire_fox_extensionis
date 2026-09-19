browser.runtime.onMessage.addListener((message) => {

    console.log(
        "YouTube Music command:",
        message.action
    );


    // ==========================================
    // NEXT SONG
    // ==========================================

    if (message.action === "next-song") {

        const nextButton =
            document.querySelector(".next-button");

        if (nextButton) {

            nextButton.click();

            console.log("Next song");

        } else {

            console.log(
                "Next button not found"
            );

        }
    }


    // ==========================================
    // PLAY / PAUSE
    // ==========================================

    else if (message.action === "play-pause") {

        const playPauseButton =
            document.querySelector(
                ".play-pause-button"
            );

        if (playPauseButton) {

            playPauseButton.click();

            console.log("Play/Pause");

        } else {

            console.log(
                "Play/Pause button not found"
            );

        }
    }


    // ==========================================
    // VOLUME UP
    // ==========================================

    else if (message.action === "volume-up") {

        const video =
            document.querySelector("video");

        if (video) {

            video.volume =
                Math.min(
                    1,
                    video.volume + 0.05
                );

            console.log(
                "Volume:",
                Math.round(
                    video.volume * 100
                ) + "%"
            );

        } else {

            console.log(
                "Video element not found"
            );

        }
    }


    // ==========================================
    // VOLUME DOWN
    // ==========================================

    else if (message.action === "volume-down") {

        const video =
            document.querySelector("video");

        if (video) {

            video.volume =
                Math.max(
                    0,
                    video.volume - 0.05
                );

            console.log(
                "Volume:",
                Math.round(
                    video.volume * 100
                ) + "%"
            );

        } else {

            console.log(
                "Video element not found"
            );

        }
    }

});
