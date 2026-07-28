(function () {

    /* ============================================================
       4WALL STYLE SIDEBAR NAVIGATION
       ============================================================ */

    const sidebar = document.createElement('div');
    sidebar.id = "fourwall-sidebar";


    Object.assign(sidebar.style, {
        position: "fixed",
        left: "0",
        top: "0",
        width: "72px",
        height: "100vh",
        background: "#0A0A0A",
        borderRight: "1px solid rgb(23,23,23)",
        zIndex: "100000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        boxSizing: "border-box"
    });



    /* ============================================================
       SVG ICONS
       ============================================================ */

    const icons = {

        home: `
        <svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`,

        plus: `
        <svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M5 12h14"/>
        <path d="M12 5v14"/>
        </svg>`,

        feed: `
        <svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        <path d="M10 6h8v4h-8V6Z"/>
        </svg>`,

        profile: `
        <svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        </svg>`,

        settings: `
        <svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
        </svg>`
    };



    /* ============================================================
       BUTTON CREATOR
       ============================================================ */

    function createButton(icon, name) {

        const button = document.createElement("div");

        button.className = "fourwall-nav-button";

        button.innerHTML = icon;

        Object.assign(button.style, {
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f5541d",
            cursor: "pointer",
            transition: "background .15s ease"
        });


        button.title = name;


        button.onmouseenter = () => {
            button.style.background = "#171717";
        };

        button.onmouseleave = () => {
            button.style.background = "transparent";
        };


        return button;
    }



    /* ============================================================
       CREATE SUBMENU
       ============================================================ */

    const createMenu = document.createElement("div");

    Object.assign(createMenu.style, {
        display: "none",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-4px",
        marginBottom: "8px"
    });


    function createSubButton(text) {

        const btn = document.createElement("div");

        btn.textContent = text;

        Object.assign(btn.style, {
            width:"110px",
            height:"34px",
            background:"#111",
            color:"#fff",
            borderRadius:"8px",
            fontSize:"13px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"4px",
            cursor:"pointer"
        });


        btn.onclick = () => {
            console.log("Open:", text);
        };


        return btn;
    }


    createMenu.appendChild(createSubButton("Worlds"));
    createMenu.appendChild(createSubButton("Characters"));
    createMenu.appendChild(createSubButton("Personas"));



    /* ============================================================
       BUILD BUTTONS
       ============================================================ */


    const home = createButton(icons.home,"Home");

    const create = createButton(icons.plus,"Create");

    create.onclick = () => {

        if(createMenu.style.display === "none"){
            createMenu.style.display="flex";
        }
        else{
            createMenu.style.display="none";
        }

    };


    const feed = createButton(icons.feed,"Feed");

    const profile = createButton(icons.profile,"Profile");

    const settings = createButton(icons.settings,"Settings");



    sidebar.appendChild(home);
    sidebar.appendChild(create);
    sidebar.appendChild(createMenu);

    sidebar.appendChild(feed);

    sidebar.style.gap = "4px";

    sidebar.appendChild(profile);


    const spacer = document.createElement("div");

    spacer.style.flex = "1";

    sidebar.appendChild(spacer);


    sidebar.appendChild(settings);



    document.body.appendChild(sidebar);


})();
