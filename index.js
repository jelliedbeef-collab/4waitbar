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
       TOPBAR CONTENT
       ============================================================ */

    const content = document.createElement('div');
    content.id = 'custom-topbar-content';

    Object.assign(content.style, {
        position: 'relative',
        width: '800px',
        maxWidth: 'calc(100% - 40px)',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box'
    });


    /* ============================================================
       CHARACTER AVATAR
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
    characterInfo.id = 'custom-topbar-character-info';

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


    /* MODEL NAME */

    const modelName = document.createElement('div');
    modelName.id = 'custom-topbar-model-name';

    modelName.textContent = 'Deepseek V4 Flash';

    Object.assign(modelName.style, {
        color: '#999999',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '18px',
        whiteSpace: 'nowrap'
    });


    /* DROPDOWN ARROW */

    const modelArrow = document.createElement('span');

    modelArrow.textContent = '⌄';

    Object.assign(modelArrow.style, {
        color: '#999999',
        marginLeft: '4px',
        fontSize: '12px'
    });

    modelName.appendChild(modelArrow);


    /* ============================================================
       BUTTONS
       ============================================================ */

    const buttons = document.createElement('div');
    buttons.id = 'custom-topbar-buttons';

    Object.assign(buttons.style, {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
    });


    /* HEART */

    const heartButton = document.createElement('button');

    heartButton.id = 'custom-topbar-heart';
    heartButton.innerHTML = '♥';

    Object.assign(heartButton.style, {
        width: '32px',
        height: '32px',
        padding: '0',
        margin: '0',
        border: 'none',
        background: 'transparent',
        color: '#ff7417',
        fontSize: '24px',
        lineHeight: '32px',
        cursor: 'pointer'
    });


    /* THREE DOTS */

    const menuButton = document.createElement('button');

    menuButton.id = 'custom-topbar-menu';
    menuButton.innerHTML = '•••';

    Object.assign(menuButton.style, {
        width: '32px',
        height: '32px',
        padding: '0',
        margin: '0',
        border: 'none',
        background: 'transparent',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '2px',
        cursor: 'pointer'
    });


    /* ============================================================
       UPDATE CHARACTER INFORMATION
       ============================================================ */

    function updateCharacterInfo() {

        /*
         * SillyTavern stores the currently selected character
         * in the global "characters" array.
         *
         * "this_chid" is the index of the currently active character.
         */

        if (
            typeof characters === 'undefined' ||
            typeof this_chid === 'undefined' ||
            this_chid === undefined ||
            this_chid === null ||
            !characters[this_chid]
        ) {
            characterName.textContent = 'No Character Selected';
            avatar.src = '/thumbnail?type=avatar&file=default.png';
            return;
        }

        const character = characters[this_chid];

        /* Character name */
        characterName.textContent = character.name || 'Unknown Character';

        /* Character avatar */
        if (character.avatar) {
            avatar.src = `/thumbnail?type=avatar&file=${encodeURIComponent(character.avatar)}`;
        } else {
            avatar.src = '/thumbnail?type=avatar&file=default.png';
        }
    }


    /* ============================================================
       BUILD TOPBAR
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
       INITIAL CHARACTER LOAD
       ============================================================ */

    updateCharacterInfo();


    /* ============================================================
       WATCH FOR CHARACTER CHANGES
       ============================================================ */

    setInterval(updateCharacterInfo, 1000);

})();
