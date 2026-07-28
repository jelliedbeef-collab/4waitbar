(function () {
    /* ============================================================
       4WALL-STYLE CUSTOM TOPBAR
       ============================================================ */

    const topBar = document.createElement('div');
    topBar.id = 'custom-topbar';

    Object.assign(topBar.style, {
        position: 'fixed',
        top: '0',
        left: '300px',
        width: 'calc(100% - 300px)',
        height: '96px',
        backgroundColor: '#000000',
        zIndex: '1000',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
    });


    /* ============================================================
       CONTENT
       ============================================================ */

    const content = document.createElement('div');
    content.id = 'custom-topbar-content';

Object.assign(content.style, {
    width: 'calc(100% - 80px)',
    maxWidth: '1000px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box'
});


    /* ============================================================
       AVATAR
       ============================================================ */

    const avatar = document.createElement('img');
    avatar.id = 'custom-topbar-avatar';

    Object.assign(avatar.style, {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        objectFit: 'cover',
        flexShrink: '0',
        marginRight: '12px'
    });


    /* ============================================================
       CHARACTER INFO
       ============================================================ */

    const characterInfo = document.createElement('div');

    Object.assign(characterInfo.style, {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '48px',
        minWidth: '0'
    });


    /* CHARACTER NAME */

    const characterName = document.createElement('div');
    characterName.id = 'custom-topbar-character-name';

    Object.assign(characterName.style, {
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    });


    /* MODEL */

    const modelName = document.createElement('div');

    modelName.innerHTML = `
        Deepseek V4 Flash
        <span style="
            color:#999999;
            margin-left:4px;
            font-size:12px;
        ">⌄</span>
    `;

    Object.assign(modelName.style, {
        color: '#999999',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '18px',
        whiteSpace: 'nowrap'
    });


    /* ============================================================
       BUTTONS
       ============================================================ */

    const buttons = document.createElement('div');

    Object.assign(buttons.style, {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
    });


    /* HEART */

    const heartButton = document.createElement('button');

    heartButton.innerHTML = '♥';

    Object.assign(heartButton.style, {
        width: '32px',
        height: '32px',
        padding: '0',
        border: 'none',
        background: 'transparent',
        color: '#ff7417',
        fontSize: '24px',
        cursor: 'pointer'
    });


    /* MENU */

    const menuButton = document.createElement('button');

    menuButton.innerHTML = '•••';

    Object.assign(menuButton.style, {
        width: '32px',
        height: '32px',
        padding: '0',
        border: 'none',
        background: 'transparent',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '2px',
        cursor: 'pointer'
    });


    /* ============================================================
       FIND ACTIVE CHARACTER FROM CHAT
       ============================================================ */

    function updateCharacter() {

        /*
         * Find the first AI message currently displayed.
         *
         * SillyTavern's message element contains:
         *
         * .ch_name .name_text
         *
         * for the character's name.
         *
         * And:
         *
         * .avatar img
         *
         * for the character's avatar.
         */

        const characterMessage = document.querySelector(
            '#chat .mes[is_user="false"]'
        );

        if (!characterMessage) {
            return;
        }


        /* ========================================================
           GET CHARACTER NAME
           ======================================================== */

        const nameElement = characterMessage.querySelector(
            '.ch_name .name_text'
        );

        if (nameElement) {
            const name = nameElement.textContent.trim();

            if (name) {
                characterName.textContent = name;
            }
        }


        /* ========================================================
           GET CHARACTER AVATAR
           ======================================================== */

        const avatarElement = characterMessage.querySelector(
            '.avatar img'
        );

        if (avatarElement && avatarElement.src) {
            avatar.src = avatarElement.src;
        }
    }


    /* ============================================================
       BUILD
       ============================================================ */

    characterInfo.appendChild(characterName);
    characterInfo.appendChild(modelName);

    buttons.appendChild(heartButton);
    buttons.appendChild(menuButton);

    content.appendChild(avatar);
    content.appendChild(characterInfo);
    content.appendChild(buttons);

    topBar.appendChild(content);

    document.body.appendChild(topBar);


    /* ============================================================
       CHECK CONSTANTLY
       ============================================================ */

    updateCharacter();

    setInterval(updateCharacter, 250);

})();
