browser.commands.onCommand.addListener(async (command) => {

    console.log("Command received:", command);

    const tabs = await browser.tabs.query({
        url: "https://music.youtube.com/*"
    });

    if (tabs.length === 0) {

        console.log("YouTube Music is not open.");

        return;
    }

    const youtubeMusicTab = tabs[0];

    try {

        await browser.tabs.sendMessage(
            youtubeMusicTab.id,
            {
                action: command
            }
        );

        console.log(
            "Command sent:",
            command
        );

    } catch (error) {

        console.log(
            "Could not send command:",
            error
        );

    }

});
