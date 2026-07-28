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


    /* ARROW */

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


    /* MENU */

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
       FIND CURRENT CHARACTER
       ============================================================ */

    function findCurrentCharacter() {

        /*
         * Look for the currently selected character in the
         * SillyTavern character list.
         *
         * SillyTavern marks the active character with:
         *
         * .character_select.selected
         *
         * or an element containing the "selected" class.
         */

        const selected = document.querySelector(
            '#rm_print_characters_block .character_select.selected, ' +
            '#rm_print_characters_block .character_select.is_selected, ' +
            '.character_select.selected, ' +
            '.character_select.is_selected'
        );

        if (!selected) {
            return null;
        }

        return selected;
    }


    /* ============================================================
       UPDATE TOPBAR
       ============================================================ */

    function updateCharacterInfo() {

        const selectedCharacter = findCurrentCharacter();

        if (!selectedCharacter) {
            return;
        }


        /* ========================================================
           FIND CHARACTER NAME
           ======================================================== */

        let nameElement = selectedCharacter.querySelector(
            '.ch_name, .character_name, .name, .ch_name_block'
        );

        let name = '';

        if (nameElement) {
            name = nameElement.textContent.trim();
        }


        /* ========================================================
           FIND CHARACTER AVATAR
           ======================================================== */

        const imageElement = selectedCharacter.querySelector('img');

        let avatarURL = '';

        if (imageElement) {
            avatarURL =
                imageElement.src ||
                imageElement.getAttribute('data-src') ||
                '';
        }


        /* ========================================================
           UPDATE NAME
           ======================================================== */

        if (name) {
            characterName.textContent = name;
        }


        /* ========================================================
           UPDATE AVATAR
           ======================================================== */

        if (avatarURL) {
            avatar.src = avatarURL;
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
       CONSTANTLY CHECK CURRENT CHARACTER
       ============================================================ */

    setInterval(function () {
        updateCharacterInfo();
    }, 250);

})();
